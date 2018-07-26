import config from '../config/index'
import stringify from 'csv-stringify'
import mock from './mock'
import fs from 'fs'
import invoice from './conversions/invoice'
import transaction from './conversions/transaction'
import axios from 'axios'
//import databuilder from './data'
let invoices = []
let pageInvoices = []
let allPages = []

const exporter = function (options) {
  return new Promise(function (resolve, reject) {
    let endpoint = ''
    switch (options.mode) {
      case 'transaction':
        endpoint = config.api_url + 'payments'
        break;

      case 'invoice':
      default:
        endpoint = config.api_url + 'invoices'
        break;
    }
    let converted = []
    let filename = ''

    let start_date = new Date(options.startdate)
    let end_date = new Date(options.enddate)

    let data = []
    let p = 0
    let n = 1
    let totalPages = 1

    fs.writeFile('./export/alerts.txt', '', function (err) {
      if (err) throw err
    })

    let start = new Date();

    let getPagePromise = function () {
      return new Promise((resolve, reject) => {
        //let page = pagePages[p]
        //axios call hier
        console.info(endpoint + ' page ' + p)
        axios.get(endpoint + '?api_key=' + config.api_key + '&page=' + p)
          .then(function (response) {
            //pagedata = response.data.

            totalPages = response.data.meta.total_pages
            console.log("totalpages: ", totalPages)
            switch (options.mode) {
              case 'transaction':
                resolve(response.data.payments);
                break;

              default:
                resolve(response.data.invoices);

            }
          })
          .catch(function (error) {
            console.log('error: ', error)
            reject('There was an error')
          })
      })
    }

    let getInvoicePromise = function () {
      return new Promise((resolve, reject) => {
        let input = pageInvoices[n]
        let invoice_creationdate = new Date(input.created_at)
        if (invoice_creationdate > start_date && invoice_creationdate < end_date) {
          setTimeout(function () {
            axios.get(endpoint + '/' + input.id + '?api_key=' + config.api_key)
              .then(function (response) {
                switch (options.mode) {
                  case 'transaction':
                    console.log(options.mode + " id: ", response.data.payment.id)
                    //invoices.push(response.data.invoice)
                    resolve(response.data.payment)
                    break;

                  default:
                    console.log(options.mode + " id: ", response.data.invoice.id)
                    //invoices.push(response.data.invoice)
                    resolve(response.data.invoice)

                }
              })
              .catch(function (error) {
                console.error(error)
                reject("error with an input")
              });
          }, 250);
        } else {
          resolve("range")
        }
      })
    }


    function getPage() {
      console.log('p: ', p)
      if (p < totalPages) {
        p++
        getPagePromise().then(function (resultp) {
          pageInvoices = []
          pageInvoices = resultp
          allPages.push(pageInvoices)
          //alle invoices ophalen voor de pagina
          n = pageInvoices.length

          function getInvoice() {
            console.log('n: ', n)
            if (0 < n) {
              n--
              getInvoicePromise().then(function (result) {
                //result checken of het leeg is (kan leeg zijn doordat datum buiten range ligt en dus geen axios call werd gedaan)
                if (result == "range") {
                  console.log("date was not within range")
                  getInvoice()
                } else {
                  invoices.push(result)
                  getInvoice()
                }
              })
            } else {
              console.log("ended invoices loop")
              // console.log('invoices array: ', invoices)
              getPage()
            }
          }
          getInvoice()
        })
      } else {
        /** convert each result and add to array */
        fs.writeFile('./export/' + options.mode + '.json', JSON.stringify(invoices), function (err) {
          if (err) throw err
        })
        fs.writeFile('./export/pages.json', JSON.stringify(allPages), function (err) {
          if (err) throw err
        })
        invoices.forEach(function (input) {
          if (options.mode == 'invoice') {
            console.info('parsing invoice: ' + input.id)
            converted = converted.concat(invoice(input, {
              boekjaar: options.boekjaar,
              periode: options.period,
              mode: options.mode
            }))
          } else if (options.mode == 'transaction') {
            console.info('parsing transaction: ' + input.id)
            converted = converted.concat(transaction(input, {
              boekjaar: options.boekjaar,
              periode: options.period,
              mode: options.mode
            }))
          }
        })
        console.info('done parsing, converting to csv')

        /** convert JSON to csv and write to file */
        stringify(converted, {
          header: true,
          delimiter: ";"
        }, function (err, output) {
          let date = new Date()
          filename += options.mode + '-' + options.startdate + '-' + options.enddate + '_' + date.getTime()
          filename += '.csv'
          fs.writeFile('./export/' + filename, output, function (err) {
            if (err) throw err
          })

          let end = new Date() - start;
          console.info("Execution time: %dms", end);

          resolve({
            'success': true,
            'filename': filename
          })
        })

        console.log("ended page loop")
      }
    }

    getPage()



  })
}

export default exporter