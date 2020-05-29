import _ from 'lodash'

let convert = function (input) {
    let methode = input.payment_method
    if (_.lowerCase(methode).indexOf('bancontact') == 0) {
        return 580100
    }
    if (_.lowerCase(methode).indexOf('creditcard') == 0) {
        return 580200
    }
    if (_.lowerCase(methode).indexOf('credit card') == 0) {
        return 580200
    }
    if (_.lowerCase(methode).indexOf('cadeaubon') == 0) {
        return 460100
    }
    if (_.lowerCase(methode).indexOf('mobiele bc') == 0) {
        return 580300
    }
    if (_.lowerCase(methode).indexOf('payconiq') == 0) {
        return 580500
    }
    if (_.lowerCase(methode).indexOf('paypal') == 0) {
        return 580600
    }

    console.log('invalide grootboekrekening: ' + input.payment_method)
    return 700000
}

export default convert