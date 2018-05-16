import _ from 'lodash'

let convert = function (items) {
    let quantity = 0
    items.forEach(element => {
        quantity += element.quantity
    })

    return _.round(quantity, 0)
}

export default convert