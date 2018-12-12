let convert = function (input) {
    let taxrate = 0;
    switch (input.tax_rate_id) {
        case 41375:
            taxrate = 21;
            break;

        case 50470:
            taxrate = 0;
            break;

        case 47655:
            taxrate = 0;
            break;

        default:
            taxrate = 0;

    }

    return taxrate;
}

export default convert