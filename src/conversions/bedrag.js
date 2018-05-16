import _ from 'lodash'

let convert = function (line_items, tax_rate_id) {
    let coef = 1
    let price = 0

    if (tax_rate_id == 41375) {
        coef = 1.21
    }
    if (typeof line_items == 'undefined') {
        console.error('missing line items')
        return price
    }
    line_items.forEach(element => {
        price += element.price * coef
    });

    return _.round(price, 2)
}

export default convert