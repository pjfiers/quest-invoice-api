import betalingsvoorwaardeConvertor from './betalingsvoorwaarde'
import grootboekrekeningConvertor from './grootboekrekening'
import btwcodeConvertor from './btwcode'
import btwpercentageConvertor from './btwpercentage'

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
    output['ordernummer'] = null
    output['uw ref.'] = input.po_number
    output['Betalingsreferentie Code'] = input.payment_method
    output['naam'] = null
    output['grootboekrekening'] = grootboekrekeningConvertor(input.item)
    output['omschrijving'] = input.item
    output['btw-code'] = btwcodeConvertor(input.tax_rate_id)
    output['btw-percentage'] = btwpercentageConvertor(input.tax_rate_id)

    return output;
}

export default convert