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

let options = {
    boekjaar: 1,
    periode: 1,
    mode: 'invoice',
    startdate: 'start',
    enddate: 'end'
}

fs.readFile('./export/' + options.mode + '.json', function read(err, data) {
    invoices = JSON.parse(data)
    parseInvoices()
})

let parseInvoices = function () {
    let converted = []
    let filename = 'reparsed_';
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

    })
}