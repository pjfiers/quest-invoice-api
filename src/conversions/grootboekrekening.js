import _ from 'lodash'

let convert = function (input) {
    if (typeof input == 'undefined') {
        console.log('invalide grootboekrekening')
        return 700000
    }
    if (_.lowerCase(input).indexOf('werk') == 0) {
        return 700001
    }
    if (_.lowerCase(input).indexOf('voorschot') == 0) {
        return 460000
    }

    return 700000
}

export default convert