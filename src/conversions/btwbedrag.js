import _ from 'lodash'

let convert = function (element, tax_rate_id) {
    let coef = 1
    let price = 0

    if (tax_rate_id == 41375) {
        coef = 0.21
    }
    price += element.price * element.quantity * coef

    return _.round(price, 2)
}

export default convert