!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}([function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("moment")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){switch(e){case 7e5:return 920;case 700001:return 930;case 46e4:return null;case 740001:return 990;case 460100:return null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){switch(e){case 1643:return"BLA";case 1644:return"BRE";default:return console.error("invalide kostenplaats ".input),null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0),i=(o=a)&&o.__esModule?o:{default:o};t.default=function(e,t){var n,o=1;.21!=t&&"null"!=typeof t||(o=1.21),n=e.price/o*e.quantity;var a=e.price*e.quantity-n;return i.default.round(a,2)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0),i=(o=a)&&o.__esModule?o:{default:o};t.default=function(e){var t=0;return e.forEach(function(e){t+=e.quantity}),i.default.round(t,0)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0),i=(o=a)&&o.__esModule?o:{default:o};t.default=function(e,t){var n,o=1;return.21!=t&&"null"!=typeof t||(o=1.21),n=e.price/o*e.quantity,i.default.round(n,2)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){switch(e){case.21:return 21;default:return 0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){switch(e){case.21:return 5;default:return 0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0),i=(o=a)&&o.__esModule?o:{default:o};t.default=function(e){return void 0===e?(console.log("invalide grootboekrekening"),7e5):0==i.default.lowerCase(e).indexOf("werk")?700001:0==i.default.lowerCase(e).indexOf("voorschot")?46e4:0==i.default.lowerCase(e).indexOf("doorgerekende verplaatsingskosten")?740001:0==i.default.lowerCase(e).indexOf("cadeaubon")?460100:7e5}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){switch(e){case 4425:return 14;case 4826:return 30;default:return console.error("Invalide betalingsvoorwaarde "+e),null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0);(o=a)&&o.__esModule;t.default=function(e,t){var n=0;return void 0===e?(console.error("missing line items"),n):(e.forEach(function(e){n+=e.price*e.quantity}),0>n?701:700)}},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("electron")},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0),i=(o=a)&&o.__esModule?o:{default:o};t.default=function(e){if(void 0===e.payments[0])return console.log("invalide grootboekrekening"),7e5;var t=e.payments[0].payment_method;return 0==i.default.lowerCase(t).indexOf("bancontact")?580100:0==i.default.lowerCase(t).indexOf("creditcard")?580200:0==i.default.lowerCase(t).indexOf("credit card")?580200:0==i.default.lowerCase(t).indexOf("cadeaubon")?460100:0==i.default.lowerCase(t).indexOf("mobiele bc")?580300:0==i.default.lowerCase(t).indexOf("payconiq")?580500:0==i.default.lowerCase(t).indexOf("paypal")?580600:(console.log("invalide grootboekrekening: "+e.payments[0].payment_method),7e5)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});l(n(12)),l(n(11));var o=l(n(17)),a=(l(n(10)),l(n(9)),l(n(8)),l(n(7)),l(n(6)),l(n(5)),l(n(4)),l(n(3)),l(n(0))),i=l(n(1)),r=l(n(2));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){var l=[],u={},d=!1;if(e.line_items.forEach(function(t){var n=[];if(void 0===e.payments[0]?(n.push("no payment: skippping"),d=!0):["cash","quest munten","overschrijving","other"].forEach(function(t){a.default.lowerCase(e.payments[0].payment_method)==t&&(n.push("invalid payment: "+t+", skippping"),d=!0)}),e.customer.tax_rate_id<=1&&n.push("invalide tax_rate_id"),1643!==e.location_id&&1644!==e.location_id&&n.push("invalide kostenplaats "+e.location_id),4425!==e.customer.invoice_term_id&&4826!==e.customer.invoice_term_id&&n.push("Invalide betalingsvoorwaarde "+e.customer.invoice_term_id),n.length>0){var l=" \r\n Errors for "+e.id+"\r\n"+JSON.stringify(n);if(i.default.appendFile("./export/alerts.txt",l,function(e){if(e)throw e}),d)return}var s=a.default.round(e.tax/e.subtotal,2);0==e.tax&&(s=0),s>0&&s<.23&&(s=.21),u["dagboek: code"]=800,u.boekjaar=(0,r.default)((0,r.default)(e.date)).add(3,"M").format("YYYY"),u.periode=(0,r.default)((0,r.default)(e.date)).add(3,"M").format("M"),u.boekstuknummer=null,u.valuta="EUR",u.wisselkoers=null,u.boekingsdatum=e.date,u.grootboekrekening=(0,o.default)(e),u.omschrijving=null,u["onze ref."]=null,u.bedrag=e.total,u.aantal=null,u["btw-code"]=null,u["btw-percentage"]=null,u["btw-bedrag"]=null,u.opmerkingen=null,u.project=null,u._1099=null,u["kostenplaats: code"]=null,u["kostenplaats: omschrijving"]=null,u["kostendrager: code"]=null,u["kostendrager: omschrijving"]=null,u.naam=null,u.code=null}),Object.keys(u).length>3){var s=Object.assign({},u);s.grootboekrekening=4e5,s.bedrag=u.bedrag-2*u.bedrag,s.code=e.customer.id,l.push(u),l.push(s)}return l}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=m(n(12)),a=m(n(11)),i=m(n(10)),r=m(n(9)),l=m(n(8)),u=m(n(7)),d=(m(n(6)),m(n(5))),s=m(n(4)),c=m(n(3)),f=m(n(0)),_=m(n(1)),p=m(n(2));function m(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){var m=[];return e.line_items.forEach(function(t){var n={},v=[];if(e.customer.tax_rate_id<=1&&v.push("invalide tax_rate_id"),1643!==e.location_id&&1644!==e.location_id&&v.push("invalide kostenplaats "+e.location_id),4425!==e.customer.invoice_term_id&&4826!==e.customer.invoice_term_id&&v.push("Invalide betalingsvoorwaarde "+e.customer.invoice_term_id),v.length>0){var g=" \r\n Errors for "+e.id+"\r\n"+JSON.stringify(v);_.default.appendFile("./export/alerts.txt",g,function(e){if(e)throw e})}var b=f.default.round(e.tax/e.subtotal,2);0==e.tax&&(b=0),b>0&&b<.23&&(b=.21),console.log("tax rate "+b),n["dagboek: code"]=(0,o.default)(e.line_items),n.boekjaar=(0,p.default)((0,p.default)(e.date)).add(3,"M").format("YYYY"),n.periode=(0,p.default)((0,p.default)(e.date)).add(3,"M").format("M"),n.boekstuknummer=e.number,n["Omschrijving: Kopregel"]=null,n.factuurdatum=e.date,n.vervaldatum=null,n.valuta="EUR",n.wisselkoers=null,n["betalingsvoorwaarde: code"]=(0,a.default)(e.customer.invoice_term_id),n.ordernummer=null,n["uw ref."]=e.po_number,void 0!==e.payments[0]&&(n["Betalingsreferentie Code"]=e.payments[0].payment_method),n.naam=null,n.code=e.customer.id,n.grootboekrekening=(0,i.default)(t.item),n.omschrijving=t.item,n["btw-code"]=(0,r.default)(b),n["btw-percentage"]=(0,l.default)(b),n.bedrag=(0,u.default)(t,b),n.aantal=f.default.round(t.quantity,0),n["btw-bedrag"]=(0,d.default)(t,b),n.opmerkingen=t.name,n.project=null,n.van=null,n.naar=null,n._1099=null,n["kostenplaats: code"]=(0,s.default)(e.location_id),n["kostenplaats: omschrijving"]="",n["kostendrager: code"]=(0,c.default)(n.grootboekrekening),n["kostendrager: omschrijving"]="",m.push(n)}),m}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{id:10102273,number:"183257",created_at:"2018-05-05T10:29:55.619+02:00",updated_at:"2018-05-07T11:13:48.422+02:00",date:"2018-05-05",due_date:"2018-05-19",subtotal:"154.0",total:"186.34",tax:"32.34",verified_paid:!1,tech_marked_paid:!0,ticket_id:null,pdf_url:null,balance_due:0,note:null,line_items:[{id:19830260,created_at:"2018-05-05T10:32:25.040+02:00",updated_at:"2018-05-05T10:32:51.409+02:00",invoice_id:10102273,item:"Domeinnaam.BE - reiskraker.be",name:"Periode:  19/05/2018 tot 19/05/2019",cost:"14.0",price:"41.14",quantity:"1.0",product_id:6062296,taxable:!0,discount_percent:null,position:1,invoice_bundle_id:null,product_category:"External Services;Domeinnaam",tax_note:null,user_id:65423,line_discount_percent:null,discount_dollars:null},{id:19830261,created_at:"2018-05-05T10:33:01.975+02:00",updated_at:"2018-05-05T10:33:06.604+02:00",invoice_id:10102273,item:"Webhosting Express - reiskraker.be",name:"Periode:  19/05/2018 tot 19/05/2019",cost:"60.0",price:"145.2",quantity:"1.0",product_id:6062310,taxable:!0,discount_percent:null,position:2,invoice_bundle_id:null,product_category:"External Services;Hosting",tax_note:null,user_id:65423,line_discount_percent:null,discount_dollars:null}],is_paid:!0,location_id:1643,contact_id:null,po_number:null,payments:[{id:9178053,created_at:"2018-05-07T11:13:48.334+02:00",updated_at:"2018-05-07T11:13:48.334+02:00",success:!0,payment_amount:186.34,invoice_ids:[10102273],ref_num:"",applied_at:"2018-05-07",payment_method:"Overschrijving",transaction_response:null}],customer:{id:12731797,firstname:"Klant",lastname:"Business",fullname:"Klant Business",business_name:"OK Travel",email:"info@oktravel.be",phone:"050418224",mobile:"050412351",created_at:"2018-05-05T10:29:51.039+02:00",updated_at:"2018-05-07T11:13:48.435+02:00",pdf_url:null,address:"Molenstraat 44",address_2:"",city:"Blankenberge",state:"",zip:"8370",latitude:null,longitude:null,notes:null,get_sms:!0,opt_out:!1,disabled:!1,no_email:!1,location_name:"Blankenberge",location_id:1643,properties:{BTW:"BE0419.369.107",Klanttype:"","Pop-up melding":""},online_profile_url:"https://questcomputers.repairshopr.com/my_profile/v2/index?portal_key=5zkncv22n40q5xvhjp2b",tax_rate_id:41375,notification_email:"",invoice_cc_emails:"",invoice_term_id:4425,referred_by:"",ref_customer_id:null,business_and_full_name:"OK Travel - Klant Business",business_then_name:"OK Travel",contacts:[]}},{id:10077977,number:"183199",created_at:"2018-05-03T16:59:12.171+02:00",updated_at:"2018-05-03T17:01:06.425+02:00",date:"2018-05-03",due_date:"2018-05-17",subtotal:"16.49",total:"19.95",tax:"3.46",verified_paid:!1,tech_marked_paid:!0,ticket_id:null,pdf_url:null,balance_due:0,note:null,line_items:[{id:19781165,created_at:"2018-05-03T17:00:51.351+02:00",updated_at:"2018-05-03T17:00:59.674+02:00",invoice_id:10077977,item:"Hdmi-Hdmi Ethernet M/M 1M BLACK",name:"-",cost:"8.99",price:"19.95",quantity:"1.0",product_id:5423167,taxable:!0,discount_percent:null,position:1,invoice_bundle_id:null,product_category:"Kabels, laders & accu's;Audio- en video kabels",tax_note:null,user_id:45912,line_discount_percent:null,discount_dollars:null},{id:19781162,created_at:"2018-05-03T17:00:51.351+02:00",updated_at:"2018-05-03T17:00:59.674+02:00",invoice_id:10077977,item:"Hdmi-Hdmi Ethernet M/M 1M BLACK",name:"-",cost:"8.99",price:"19.95",quantity:"2.0",product_id:5423167,taxable:!0,discount_percent:null,position:1,invoice_bundle_id:null,product_category:"More Kabels, laders & accu's;Audio- en video kabels",tax_note:null,user_id:45912,line_discount_percent:null,discount_dollars:null}],is_paid:!0,location_id:1644,contact_id:null,po_number:null,payments:[{id:9143593,created_at:"2018-05-03T17:01:06.339+02:00",updated_at:"2018-05-03T17:01:06.467+02:00",success:!0,payment_amount:19.95,invoice_ids:[10077977],ref_num:null,applied_at:"2018-05-03",payment_method:"Cash",transaction_response:null}],customer:{id:11499608,firstname:"WALKIN",lastname:"Bredene",fullname:"WALKIN Bredene",business_name:"",email:"accounting@questcomputers.be",phone:"0498674125",mobile:"0498674125",created_at:"2018-01-09T09:43:34.446+01:00",updated_at:"2018-05-16T14:10:05.201+02:00",pdf_url:null,address:"",address_2:"",city:"",state:"",zip:"",latitude:null,longitude:null,notes:null,get_sms:!0,opt_out:!1,disabled:!1,no_email:!1,location_name:"Bredene",location_id:1644,properties:{BTW:"",Klanttype:"","Pop-up melding":""},online_profile_url:"https://questcomputers.repairshopr.com/my_profile/v2/index?portal_key=jwqfnbj80k07nx0odkz0",tax_rate_id:41375,notification_email:"",invoice_cc_emails:"",invoice_term_id:null,referred_by:"",ref_customer_id:null,business_and_full_name:"WALKIN Bredene",business_then_name:"WALKIN Bredene",contacts:[]}}]},function(e,t){e.exports=require("csv-stringify")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1).readFileSync("./config/api.json"),a=JSON.parse(o);t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=d(n(22)),a=d(n(21)),i=(d(n(20)),d(n(1))),r=d(n(19)),l=d(n(18)),u=d(n(16));function d(e){return e&&e.__esModule?e:{default:e}}var s=[],c=[];t.default=function(e){return new Promise(function(t,n){var d=[],f="",_=new Date(e.startdate),p=new Date(e.enddate),m=0,v=1,g=1;i.default.writeFile("./export/alerts.txt","",function(e){if(e)throw e});var b=new Date,h=function(){return new Promise(function(e,t){console.info(o.default.api_url+"invoices?api_key="+o.default.api_key+"&page="+m),u.default.get(o.default.api_url+"invoices?api_key="+o.default.api_key+"&page="+m).then(function(t){console.log("got page",t.data.invoices[0].id),g=t.data.meta.total_pages,console.log("totalpages: ",g),e(t.data.invoices)}).catch(function(e){console.log("error: ",e),t("There was an error")})})},y=function(){return new Promise(function(e,t){var n=c[v],a=new Date(n.created_at);a>_&&a<p?setTimeout(function(){u.default.get(o.default.api_url+"invoices/"+n.id+"?api_key="+o.default.api_key).then(function(t){console.log("invoice id: ",t.data.invoice.id),e(t.data.invoice)}).catch(function(e){t("error with an input")})},250):e("range")})};!function n(){console.log("p: ",m),m<g?(m++,h().then(function(e){c=[],v=(c=e).length,function e(){console.log("n: ",v),0<v?(v--,y().then(function(t){"range"==t?(console.log("date was not within range"),e()):(s.push(t),e())})):(console.log("ended invoices loop"),n())}()})):(i.default.writeFile("./export/invoices.json",JSON.stringify(s),function(e){if(e)throw e}),s.forEach(function(t){"invoice"==e.mode?(console.info("parsing invoice: "+t.id),d=d.concat((0,r.default)(t,{boekjaar:e.boekjaar,periode:e.period,mode:e.mode}))):"transaction"==e.mode&&(console.info("parsing transaction: "+t.id),d=d.concat((0,l.default)(t,{boekjaar:e.boekjaar,periode:e.period,mode:e.mode})))}),console.info("done parsing, converting to csv"),(0,a.default)(d,{header:!0,delimiter:";"},function(n,o){var a=new Date;f+=e.mode+"-"+e.startdate+"-"+e.enddate+"_"+a.getTime(),f+=".csv",i.default.writeFile("./export/"+f,o,function(e){if(e)throw e});var r=new Date-b;console.info("Execution time: %dms",r),t({success:!0,filename:f})}),console.log("ended page loop"))}()})}},function(e,t,n){"use strict";var o,a=n(23),i=(o=a)&&o.__esModule?o:{default:o};var r=n(15),l=r.app,u=r.BrowserWindow,d=r.ipcMain,s=(n(14),n(13)),c=void 0;function f(){c=new u({width:720,height:640});var e=l.getAppPath().replace("node_modules\\electron\\dist\\resources\\default_app.asar","dist\\index.html");c.loadURL(s.format({pathname:e,protocol:"file:",slashes:!0})),c.on("closed",function(){c=null})}l.on("ready",f),d.on("doExport",function(e,t){(0,i.default)(t).then(function(e){c.webContents.executeJavaScript("exportDone('"+e.filename+"')"),console.log("Export done")})}),l.on("window-all-closed",function(){"darwin"!==process.platform&&l.quit()}),l.on("activate",function(){null===c&&f()})}]);