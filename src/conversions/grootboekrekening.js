let convert = function (input) {
    if (typeof input == 'undefined') {
        console.log('invalide grootboekrekening')
        return 700000
    }
    if (input.indexOf('WERK') == 0) {
        return 700001
    }
    if (input.indexOf('VOORSCHOT') == 0) {
        return 460000
    }

    return 700000
}

export default convert