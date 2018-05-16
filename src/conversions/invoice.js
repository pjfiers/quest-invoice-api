import betalingsvoorwaardeConvertor from './betalingsvoorwaarde'
import grootboekrekeningConvertor from './grootboekrekening'
import btwcodeConvertor from './btwcode'
import btwpercentageConvertor from './btwpercentage'
import bedragConvertor from './bedrag'

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
    output['betalingsvoorwaarde: code'] = betalingsvoorwaardeConvertor(input.customer.invoice_term_id)
    output['ordernummer'] = null
    output['uw ref.'] = input.po_number
    output['Betalingsreferentie Code'] = input.payment_method
    output['naam'] = null
    output['grootboekrekening'] = grootboekrekeningConvertor(input.line_items[0].item)
    output['omschrijving'] = input.line_items[0].item
    output['btw-code'] = btwcodeConvertor(input.customer.tax_rate_id)
    output['btw-percentage'] = btwpercentageConvertor(input.customer.tax_rate_id)
    output['bedrag'] = bedragConvertor(input.line_items, input.customer.tax_rate_id)

    return output;
}

export default convert