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
import fs from 'fs'
import moment from 'moment'

/** will convert a complete invoice */
let convert = function (input, options, filename) {
    let output = []
    input.line_items.forEach(lineItem => {
        let line = {}
        // alerts
        let alerts = []
        if (input.customer.tax_rate_id <= 1) {
            alerts.push('invalide tax_rate_id')
        }
        if (input.location_id !== 1643 && input.location_id !== 1644) {
            alerts.push('invalide kostenplaats ' + input.location_id)
        }
        if (input.customer.invoice_term_id !== 4425 && input.customer.invoice_term_id !== 4826) {
            alerts.push('Invalide betalingsvoorwaarde ' + input.customer.invoice_term_id)
        }

        if (alerts.length > 0) {
            let alert = ' \r\n Errors for ' + input.id + '\r\n' + JSON.stringify(alerts)
            fs.appendFile('./export/alerts.txt', alert, function (err) {
                if (err) throw err
            })
        }

        let taxrate = _.round((input.tax / input.subtotal), 2)
        if (input.tax == 0) {
            taxrate = 0
        }
        if (taxrate > 0 && taxrate < 0.23) {
            taxrate = 0.21
        }
        console.log('tax rate ' + taxrate)

        line['dagboek: code'] = dagboekConverter(input.line_items) // berekening???
        line['boekjaar'] = moment(moment(input.date)).add(3, 'M').format('YYYY')
        line['periode'] = moment(moment(input.date)).add(3, 'M').format('M')
        line['boekstuknummer'] = input.number
        line['Omschrijving: Kopregel'] = null
        line['factuurdatum'] = input.date
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
        line['btw-code'] = btwcodeConverter(taxrate)
        line['btw-percentage'] = btwpercentageConverter(taxrate)
        line['bedrag'] = bedragConverter(lineItem, taxrate)
        line['aantal'] = _.round(lineItem.quantity, 0)
        line['btw-bedrag'] = btwbedragConverter(lineItem, taxrate)
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