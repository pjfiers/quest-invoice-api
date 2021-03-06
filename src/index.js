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

const exporter = function (options) {
  return new Promise(function (resolve, reject) {

    let converted = []
    let filename = ''

    let sd = options.startdate+"T00:00:00.000+02:00"
    let ed = options.enddate+"T23:59:59.999+02:00"

    let start_date = new Date(sd)
    let end_date = new Date(ed)

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
        console.info(config.api_url + 'invoices?api_key=' + config.api_key + '&page=' + p)
        axios.get(config.api_url + 'invoices?api_key=' + config.api_key + '&page=' + p)
          .then(function (response) {
            console.log("got page", response.data.invoices[0].id)
            //pagedata = response.data.invoices
            totalPages = response.data.meta.total_pages
            console.log("totalpages: ", totalPages)
            resolve(response.data.invoices);
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

        let d = input.date+"T12:00:00.000+02:00"
        let invoice_date = new Date(d)

        if (invoice_date >= start_date && invoice_date <= end_date) {
          setTimeout(function () {
            axios.get(config.api_url + 'invoices/' + input.id + '?api_key=' + config.api_key)
              .then(function (response) {
                console.log("invoice id: ", response.data.invoice.id)
                //invoices.push(response.data.invoice)
                resolve(response.data.invoice)
              })
              .catch(function (error) {
                reject("error with an input:", error)
              });
          }, 300);
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
        fs.writeFile('./export/invoices.json', JSON.stringify(invoices), function (err) {
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
