/** will convert a complete invoice */
let convert = function (input, options) {
    let output = {}

    output['boekjaar'] = options.boekjaar
    output['periode'] = options.periode
    output['boekstuknummer'] = input.number
    output['Omschrijving: Kopregel'] = null
    output['boekdatum'] = input.date
    output['vervaldatum'] = null
    output['valuta'] = 'EUR'
    output['wisselkoers'] = null
    if (input.invoice_term_id == 4425) {
        output['betalingsvoorwaarde'] = 14
    } else if (input.invoice_term_id == 4826) {
        output['betalingsvoorwaarde'] = 30
    }


    return output;
}

export default convert