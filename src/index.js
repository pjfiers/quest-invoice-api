import config from '../config/index'
import stringify from 'csv-stringify'
import mock from './mock'
import fs from 'fs'
import convertor from './conversions/invoice'
import axios from 'axios'
//import databuilder from './data'
let invoices = []
let pageInvoices = []



const exporter = function (options) {
  return new Promise(function (resolve, reject) {
    let converted = []
    let filename = ''

    let start_date = new Date(options.startdate)
    let end_date = new Date(options.enddate)

    let data = []
    let p = 0
    let n = 1
    let totalPages = 1

    let getPagePromise = function () {
      return new Promise((resolve, reject) => {
        //let page = pagePages[p]
        //axios call hier
        console.info(config.api_url + 'invoices?api_key=' + config.api_key + '&page=' + p)
        axios.get(config.api_url + 'invoices?api_key=' + config.api_key + '&page=' + p)
          .then(function (response) {
            console.log("got page", response.data.invoices[0].id)
            //pagedata = response.data.invoices
            totalPages = 3 //response.data.meta.total_pages
            console.log("totalpages: ", totalPages)
            fs.appendFile('./export/pages.json', JSON.stringify(response.data), function (err) {
              if (err) throw err
            })
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
        let invoice_creationdate = new Date(input.created_at)
        if (invoice_creationdate > start_date && invoice_creationdate < end_date) {
          setTimeout(function () {
            axios.get(config.api_url + 'invoices/' + input.id + '?api_key=' + config.api_key)
              .then(function (response) {
                console.log("customer id: ", response.data.invoice.customer.id)
                //invoices.push(response.data.invoice)
                resolve(response.data.invoice)
              })
              .catch(function (error) {
                reject("error with an input")
              });
          }, 500);
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
        fs.writeFile('./export/invoices.json',JSON.stringify(invoices), function (err) {
          if (err) throw err
        })
        invoices.forEach(function (input) {
          console.info('parsing: ' + input.id)
          converted = converted.concat(convertor(input, {
            boekjaar: options.boekjaar,
            periode: options.period
          }))
        })
        console.info('done parsing, converting to csv')

        /** convert JSON to csv and write to file */
        stringify(converted, {
          header: true
        }, function (err, output) {
          let date = new Date()
          filename += options.boekjaar + '-' + options.period + '_' + options.startdate + '-' + options.enddate + '_' + date.getTime()
          filename += '.csv'
          fs.writeFile('./export/' + filename, output, function (err) {
            if (err) throw err
          })

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