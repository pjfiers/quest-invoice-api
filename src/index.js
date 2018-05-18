import config from '../config/index'
import stringify from 'csv-stringify'
import mock from './mock'
import fs from 'fs'
import convertor from './conversions/invoice'

const exporter = function (options) {
    return new Promise(function(resolve, reject) {
        let converted = []
        let filename = ''

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
            let date = new Date()
            filename += options.boekjaar + '-' + options.period + '_' + options.startdate + '-' + options.enddate + '_' + date.getTime()
            filename += '.csv'
            fs.writeFile('./export/' + filename, output, function (err) {
                reject(err)
            })

            resolve(
                {'success': true, 'filename': filename}
            )
        })

    })
}

export default exporter