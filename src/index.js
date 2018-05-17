import {config} from '../config/index'
import stringify from 'csv-stringify'
import mock from './mock'
import fs from 'fs'
import convertor from './conversions/invoice'

const exporter = function (options) {
    let converted = []

    /** convert each result and add to array */
    mock.forEach(function (input) {
        console.info('parsing: ' + input.id)
        converted = converted.concat(convertor(input, {
            boekjaar: 2018,
            periode: 8
        }))
    })

    /** convert JSON to csv and write to file */
    stringify(converted, {
        header: true
    }, function (err, output) {
        fs.writeFile('./export/test.csv', output, function (err) {
            console.log(err)
        })
    })

    return 'done'

}

export default exporter