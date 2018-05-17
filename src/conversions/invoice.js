import dagboekConverter from './dagboek'
import betalingsvoorwaardeConverter from './betalingsvoorwaarde'
import grootboekrekeningConverter from './grootboekrekening'
import btwcodeConverter from './btwcode'
import btwpercentageConverter from './btwpercentage'
import bedragConverter from './bedrag'
import aantalConverter from './aantal'
import btwbedragConverter from './btwbedrag'
import kostenplaatsConverter from './kostenplaats'
import kostendragerConverter from './kostendrager'

/** will convert a complete invoice */
let convert = function (input, options) {
    let output = {}

    output['dagboek: code'] = dagboekConverter(input.line_items) // berekening???
    output['boekjaar'] = options.boekjaar
    output['periode'] = options.periode
    output['boekstuknummer'] = input.number
    output['Omschrijving: Kopregel'] = null
    output['boekdatum'] = input.date
    output['vervaldatum'] = null
    output['valuta'] = 'EUR'
    output['wisselkoers'] = null
    output['betalingsvoorwaarde: code'] = betalingsvoorwaardeConverter(input.customer.invoice_term_id)
    output['ordernummer'] = null
    output['uw ref.'] = input.po_number
    output['Betalingsreferentie Code'] = input.payments[0].payment_method
    output['naam'] = null
    output['code'] = 'mapping????' // MAPPING?
    output['grootboekrekening'] = grootboekrekeningConverter(input.line_items[0].item)
    output['omschrijving'] = input.line_items[0].item
    output['btw-code'] = btwcodeConverter(input.customer.tax_rate_id)
    output['btw-percentage'] = btwpercentageConverter(input.customer.tax_rate_id)
    output['bedrag'] = bedragConverter(input.line_items, input.customer.tax_rate_id)
    output['aantal'] = aantalConverter(input.line_items)
    output['btw-bedrag'] = btwbedragConverter(input.line_items, input.customer.tax_rate_id)
    output['opmerkingen'] = input.line_items[0].name
    output['project'] = null
    output['van'] = null
    output['naar'] = null
    output['_1099'] = null
    output['kostenplaats: code'] = kostenplaatsConverter(input.location_id)
    output['kostenplaats: omschrijving'] = ''
    output['kostendrager: code'] = kostendragerConverter(output['grootboekrekening']) // 700000???
    output['kostendrager: omschrijving'] = ''


    return output;
}

export default convert