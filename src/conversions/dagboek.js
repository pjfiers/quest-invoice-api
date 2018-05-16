import _ from 'lodash'

let convert = function (line_items, tax_rate_id) {
    let coef = 1
    let price = 0
    let cost = 0

    if (typeof line_items == 'undefined') {
        console.error('missing line items')
        return price
    }
    line_items.forEach(element => {
        price += element.price * element.quantity
        cost += element.cost * element.quantity
    });

    if (0 > (price - cost)) {
        return 701
    }

    return 700
}

export default convert