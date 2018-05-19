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
import _ from 'lodash'

/** will convert a complete invoice */
let convert = function (input, options, filename) {
    let output = []
    input.line_items.forEach(lineItem => {
        let line = {}
        process.stdout.write('[' + lineItem.id + ']')
        line['dagboek: code'] = dagboekConverter(input.line_items) // berekening???
        line['boekjaar'] = options.boekjaar
        line['periode'] = options.periode
        line['boekstuknummer'] = input.number
        line['Omschrijving: Kopregel'] = null
        line['boekdatum'] = input.date
        line['vervaldatum'] = null
        line['valuta'] = 'EUR'
        line['wisselkoers'] = null
        line['betalingsvoorwaarde: code'] = betalingsvoorwaardeConverter(input.customer.invoice_term_id)
        line['ordernummer'] = null
        line['uw ref.'] = input.po_number
        if (typeof input.payments[0] !== 'undefined') {
            line['Betalingsreferentie Code'] = input.payments[0].payment_method
        }
        line['naam'] = null
        line['code'] = input.customer.id
        line['grootboekrekening'] = grootboekrekeningConverter(lineItem.item)
        line['omschrijving'] = lineItem.item
        line['btw-code'] = btwcodeConverter(input.customer.tax_rate_id)
        line['btw-percentage'] = btwpercentageConverter(input.customer.tax_rate_id)
        line['bedrag'] = bedragConverter(lineItem, input.customer.tax_rate_id)
        line['aantal'] = _.round(lineItem.quantity, 0)
        line['btw-bedrag'] = btwbedragConverter(lineItem, input.customer.tax_rate_id)
        line['opmerkingen'] = lineItem.name
        line['project'] = null
        line['van'] = null
        line['naar'] = null
        line['_1099'] = null
        line['kostenplaats: code'] = kostenplaatsConverter(input.location_id)
        line['kostenplaats: omschrijving'] = ''
        line['kostendrager: code'] = kostendragerConverter(line['grootboekrekening']) // 700000???
        line['kostendrager: omschrijving'] = ''
        output.push(line)
    });

    return output;
}

export default convert