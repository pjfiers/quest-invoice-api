import betalingsvoorwaardeConvertor from './betalingsvoorwaarde'

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
    output['betalingsvoorwaarde: code'] = betalingsvoorwaardeConvertor(input.invoice_term_id)

    return output;
}

export default convert