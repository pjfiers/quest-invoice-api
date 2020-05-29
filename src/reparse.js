import stringify from 'csv-stringify'
import fs from 'fs'
import invoice from './conversions/invoice'
import transaction from './conversions/transaction'
import moment from 'moment'
//import databuilder from './data'
let invoices = []

const startYear = moment().startOf('year')
const endYear = moment().endOf('year').add(1, 'day')
const startMonth = moment().startOf('month')
const endMonth = moment().endOf('month').add(1, 'day')

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
    let thisYear = []
    let thisMonth = []
    invoices.forEach(function (input) {
        if (options.mode == 'invoice') {
            console.info('parsing invoice: ' + input.id)
            let invoice_creationdate = moment(input.created_at)
            console.log(input.created_at)
            let parsed = invoice(input, {
                boekjaar: options.boekjaar,
                periode: options.period,
                mode: options.mode
            })
            converted = converted.concat(parsed)
            if (invoice_creationdate.isAfter(startMonth) && invoice_creationdate.isBefore(endMonth)) {
                thisMonth = thisMonth.concat(parsed)
            }
            if (invoice_creationdate.isAfter(startYear) && invoice_creationdate.isBefore(endYear)) {
                thisYear = thisYear.concat(parsed)
            }
        } else if (options.mode == 'transaction') {
            console.info('parsing transaction: ' + input.id)
            let invoice_creationdate = moment(input.created_at)
            let parsed = transaction(input, {
                boekjaar: options.boekjaar,
                periode: options.period,
                mode: options.mode
            })
            converted = converted.concat(parsed)
            if (invoice_creationdate.isAfter(startMonth) && invoice_creationdate.isBefore(endMonth)) {
                thisMonth = thisMonth.concat(parsed)
            }
            if (invoice_creationdate.isAfter(startYear) && invoice_creationdate.isBefore(endYear)) {
                thisYear = thisYear.concat(parsed)
            }
        }
    })
    console.info('done parsing, converting to csv')

    /** convert JSON to csv and write to file */
    stringify(converted, {
        header: true,
        delimiter: ";"
    }, function (err, output) {
        let date = new Date()
        let filename = 'reparsed_';
        filename += options.mode + '-' + options.startdate + '-' + options.enddate + '_' + date.getTime()
        filename += '.csv'
        fs.writeFile('./export/' + filename, output, function (err) {
            if (err) throw err
        })

    })

    stringify(thisMonth, {
        header: true,
        delimiter: ";"
    }, function (err, output) {
        let date = new Date()
        let filename = 'reparsed_';
        filename += startMonth.format('MMMM') + '_' + startMonth.format('YYYY') + '_' + date.getTime()
        filename += '.csv'
        fs.writeFile('./export/' + filename, output, function (err) {
            if (err) throw err
        })

    })

    stringify(thisYear, {
        header: true,
        delimiter: ";"
    }, function (err, output) {
        let date = new Date()
        let filename = 'reparsed_';
        filename += startMonth.format('YYYY') + '_' + date.getTime()
        filename += '.csv'
        fs.writeFile('./export/' + filename, output, function (err) {
            if (err) throw err
        })

    })
}