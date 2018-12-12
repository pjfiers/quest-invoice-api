let convert = function (input, grootboekRek) {
    console.log(input.tax_rate_id);
    let taxcode = 0;
    switch (input.tax_rate_id) {
        case 41375:
            taxcode = 5;
            break;

        case 50470:
            taxcode = 'B';
            break;

        case 47655:
            taxcode = '0%';
            break;

        default:
            taxcode = 0;

    }

    if (grootboekRek === 416000 || grootboekRek === 460100) {
        taxcode = 0;
    }
    console.log(taxcode)
    return taxcode;
}

export default convert