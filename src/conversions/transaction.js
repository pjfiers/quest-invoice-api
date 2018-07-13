import dagboekConverter from './dagboek'
import betalingsvoorwaardeConverter from './betalingsvoorwaarde'
import grootboekrekeningConverter from './grootboekrekeningTransaction'
import grootboekCheckConvertor from './grootboekrekening'
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
    let line = {}
    let skip = false

    input.line_items.forEach(lineItem => {
        // alerts
        let alerts = []
        let toSkip = [
            "cash", "quest munten", "overschrijving", "other"
        ]

        if (typeof input.payments[0] == "undefined") {
            alerts.push('no payment: skippping')
            skip = true
        } else {
            toSkip.forEach(paymentMethod => {
                if (_.lowerCase(input.payments[0].payment_method) == paymentMethod) {
                    alerts.push('invalid payment: ' + paymentMethod + ', skippping')
                    skip = true
                }
            })
        }

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
            if (skip) {
                return
            }
        }

        let taxrate = _.round((input.tax / input.subtotal), 2)
        if (input.tax == 0) {
            taxrate = 0
        }
        if (taxrate > 0 && taxrate < 0.23) {
            taxrate = 0.21
        }

        line['dagboek: code'] = 800 // berekening???
        line['boekjaar'] = moment(moment(input.date)).add(3, 'M').format('YYYY')
        line['periode'] = moment(moment(input.date)).add(3, 'M').format('M')
        line['boekstuknummer'] = null//input.number
        line['valuta'] = 'EUR'
        line['wisselkoers'] = null
        line['boekingsdatum'] = input.date
        //line['vervaldatum'] = null
        //line['betalingsvoorwaarde: code'] = betalingsvoorwaardeConverter(input.customer.invoice_term_id)
        //line['ordernummer'] = null
        //line['uw ref.'] = input.po_number
        //if (typeof input.payments[0] !== 'undefined') {
        //    line['Betalingsreferentie Code'] = input.payments[0].payment_method
        //}
        line['grootboekrekening'] = grootboekrekeningConverter(input)
        // line['Omschrijving: kopregel'] = null
        line['omschrijving'] = null//(line['omschrijving'] || '') + ' ' + lineItem.item
        line['onze ref.'] = null//input.po_number
        line['bedrag'] = input.total
        line['aantal'] = null
        line['btw-code'] = null//btwcodeConverter(taxrate)
        line['btw-percentage'] = null//btwpercentageConverter(taxrate)
        line['btw-bedrag'] = null//btwbedragConverter(lineItem, taxrate) + (line['btw-bedrag'] || 0)
        line['opmerkingen'] = null//(line['opmerkingen'] || '') + ' ' + lineItem.name
        line['project'] = null
        //line['van'] = null
        //line['naar'] = null
        line['_1099'] = null
        line['kostenplaats: code'] = null//kostenplaatsConverter(input.location_id)
        line['kostenplaats: omschrijving'] = null
        line['kostendrager: code'] = null//kostendragerConverter(grootboekCheckConvertor(lineItem.item)) // 700000???
        line['kostendrager: omschrijving'] = null
        line['naam'] = null
        line['code'] = null

    });
    if (Object.keys(line).length > 3) {
        var line2 = Object.assign({}, line)
        line2['grootboekrekening'] = 400000
        line2['bedrag'] = line['bedrag'] - (line['bedrag'] * 2)
        line2['code'] = input.customer.id
        output.push(line)
        output.push(line2)
    }
    return output
}

export default convert