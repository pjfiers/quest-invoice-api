import _ from 'lodash'

let convert = function (lineItem, tax_rate_id) {
    let coef = 1
    let price = 0

    if (tax_rate_id == 41375) {
        coef = 1.21
    }

    price += lineItem.price * coef

    return _.round(price, 2)
}

export default convert