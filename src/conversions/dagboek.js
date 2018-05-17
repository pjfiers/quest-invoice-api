import _ from 'lodash'

let convert = function (line_items, tax_rate_id) {
    let price = 0

    if (typeof line_items == 'undefined') {
        console.error('missing line items')
        return price
    }
    line_items.forEach(element => {
        price += element.price * element.quantity
    });

    if (0 > (price)) {
        return 701
    }

    return 700
}

export default convert