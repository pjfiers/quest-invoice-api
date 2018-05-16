import dagboekConvertor from './dagboek'
import betalingsvoorwaardeConvertor from './betalingsvoorwaarde'
import grootboekrekeningConvertor from './grootboekrekening'
import btwcodeConvertor from './btwcode'
import btwpercentageConvertor from './btwpercentage'
import bedragConvertor from './bedrag'
import aantalConvertor from './aantal'
import btwbedragConvertor from './btwbedrag'
import kostenplaatsConvertor from './kostenplaats'
import kostendragerConvertor from './kostendrager'

/** will convert a complete invoice */
let convert = function (input, options) {
    let output = {}

    output['dagboek: code'] = dagboekConvertor(input.line_items) // berekening???
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
    output['Betalingsreferentie Code'] = input.payments[0].payment_method
    output['naam'] = null
    output['code'] = 'mapping????' // MAPPING?
    output['grootboekrekening'] = grootboekrekeningConvertor(input.line_items[0].item)
    output['omschrijving'] = input.line_items[0].item
    output['btw-code'] = btwcodeConvertor(input.customer.tax_rate_id)
    output['btw-percentage'] = btwpercentageConvertor(input.customer.tax_rate_id)
    output['bedrag'] = bedragConvertor(input.line_items, input.customer.tax_rate_id)
    output['aantal'] = aantalConvertor(input.line_items)
    output['btw-bedrag'] = btwbedragConvertor(input.line_items, input.customer.tax_rate_id)
    output['opmerkingen'] = input.line_items[0].name
    output['project'] = null
    output['van'] = null
    output['naar'] = null
    output['_1099'] = null
    output['kostenplaats: code'] = kostenplaatsConvertor(input.location_id)
    output['kostenplaats: omschrijving'] = ''
    output['kostendrager: code'] = kostendragerConvertor(output['grootboekrekening']) // 700000???
    output['kostendrager: omschrijving'] = ''


    return output;
}

export default convert