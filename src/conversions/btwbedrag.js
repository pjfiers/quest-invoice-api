import _ from 'lodash'

let convert = function (element, tax_rate_id) {
    let coef = 1
    let price = 0

    if (tax_rate_id == 0.21 || typeof tax_rate_id == 'null') {
        coef = 1.21
    }
    price = (element.price / coef) * element.quantity
    let btwprice = (element.price * element.quantity) - price

    return _.round(btwprice, 2)
}

export default convert