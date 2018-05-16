import {config} from '../config/index'
import stringify from 'csv-stringify'
import mock from './mock'
import fs from 'fs'
stringify(mock, function (err, output) {
    fs.writeFile('./export/test.csv', output, function (err) {
        console.log(err)
    })
})