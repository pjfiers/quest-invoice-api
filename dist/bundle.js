!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("electron")},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){switch(e){case 7e5:return 920;case 700001:return 930;case 46e4:return 960;case 740001:return 899;case 460100:return null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){switch(e){case 1643:return"BLA";case 1644:return"BRE";default:return console.error("invalide kostenplaats ".input),null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(0),a=(o=i)&&o.__esModule?o:{default:o};t.default=function(e,t){var n,o=1;.21!=t&&"null"!=typeof t||(o=1.21),n=e.price/o*e.quantity;var i=e.price*e.quantity-n;return a.default.round(i,2)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(0),a=(o=i)&&o.__esModule?o:{default:o};t.default=function(e){var t=0;return e.forEach(function(e){t+=e.quantity}),a.default.round(t,0)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(0),a=(o=i)&&o.__esModule?o:{default:o};t.default=function(e,t){var n,o=1;return.21!=t&&"null"!=typeof t||(o=1.21),n=e.price/o*e.quantity,a.default.round(n,2)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){switch(e){case.21:return 21;default:return 0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){switch(e){case.21:return 5;default:return 0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(0),a=(o=i)&&o.__esModule?o:{default:o};t.default=function(e){return void 0===e?(console.log("invalide grootboekrekening"),7e5):0==a.default.lowerCase(e).indexOf("werk")?700001:0==a.default.lowerCase(e).indexOf("voorschot")?46e4:0==a.default.lowerCase(e).indexOf("doorgerekende Verplaatsingskosten")?740001:0==a.default.lowerCase(e).indexOf("cadeaubon")?460100:7e5}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){switch(e){case 4425:return 14;case 4826:return 30;default:return console.error("Invalide betalingsvoorwaarde "+e),null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(0);(o=i)&&o.__esModule;t.default=function(e,t){var n=0;return void 0===e?(console.error("missing line items"),n):(e.forEach(function(e){n+=e.price*e.quantity}),0>n?701:700)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=p(n(15)),i=p(n(14)),a=p(n(13)),r=p(n(12)),u=p(n(11)),l=p(n(10)),d=(p(n(9)),p(n(8))),s=p(n(7)),c=p(n(6)),_=p(n(0)),f=p(n(1));function p(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){var p=[];return e.line_items.forEach(function(n){var m={},v=[];if(e.customer.tax_rate_id<=1&&v.push("invalide tax_rate_id"),1643!==e.location_id&&1644!==e.location_id&&v.push("invalide kostenplaats "+e.location_id),4425!==e.customer.invoice_term_id&&4826!==e.customer.invoice_term_id&&v.push("Invalide betalingsvoorwaarde "+e.customer.invoice_term_id),v.length>0){var b="Errors for \r\n"+e.id+"\r\n"+JSON.stringify(v);f.default.appendFile("./export/alerts.txt",b,function(e){if(e)throw e})}var g=_.default.round(e.tax/e.subtotal,2);0==e.tax&&(g=0),console.log("tax rate "+g),m["dagboek: code"]=(0,o.default)(e.line_items),m.boekjaar=t.boekjaar,m.periode=t.periode,m.boekstuknummer=e.number,m["Omschrijving: Kopregel"]=null,m.boekdatum=e.date,m.vervaldatum=null,m.valuta="EUR",m.wisselkoers=null,m["betalingsvoorwaarde: code"]=(0,i.default)(e.customer.invoice_term_id),m.ordernummer=null,m["uw ref."]=e.po_number,void 0!==e.payments[0]&&(m["Betalingsreferentie Code"]=e.payments[0].payment_method),m.naam=null,m.code=e.customer.id,m.grootboekrekening=(0,a.default)(n.item),m.omschrijving=n.item,m["btw-code"]=(0,r.default)(g),m["btw-percentage"]=(0,u.default)(g),m.bedrag=(0,l.default)(n,g),m.aantal=_.default.round(n.quantity,0),m["btw-bedrag"]=(0,d.default)(n,g),m.opmerkingen=n.name,m.project=null,m.van=null,m.naar=null,m._1099=null,m["kostenplaats: code"]=(0,s.default)(e.location_id),m["kostenplaats: omschrijving"]="",m["kostendrager: code"]=(0,c.default)(m.grootboekrekening),m["kostendrager: omschrijving"]="",p.push(m)}),p}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{id:10102273,number:"183257",created_at:"2018-05-05T10:29:55.619+02:00",updated_at:"2018-05-07T11:13:48.422+02:00",date:"2018-05-05",due_date:"2018-05-19",subtotal:"154.0",total:"186.34",tax:"32.34",verified_paid:!1,tech_marked_paid:!0,ticket_id:null,pdf_url:null,balance_due:0,note:null,line_items:[{id:19830260,created_at:"2018-05-05T10:32:25.040+02:00",updated_at:"2018-05-05T10:32:51.409+02:00",invoice_id:10102273,item:"Domeinnaam.BE - reiskraker.be",name:"Periode:  19/05/2018 tot 19/05/2019",cost:"14.0",price:"41.14",quantity:"1.0",product_id:6062296,taxable:!0,discount_percent:null,position:1,invoice_bundle_id:null,product_category:"External Services;Domeinnaam",tax_note:null,user_id:65423,line_discount_percent:null,discount_dollars:null},{id:19830261,created_at:"2018-05-05T10:33:01.975+02:00",updated_at:"2018-05-05T10:33:06.604+02:00",invoice_id:10102273,item:"Webhosting Express - reiskraker.be",name:"Periode:  19/05/2018 tot 19/05/2019",cost:"60.0",price:"145.2",quantity:"1.0",product_id:6062310,taxable:!0,discount_percent:null,position:2,invoice_bundle_id:null,product_category:"External Services;Hosting",tax_note:null,user_id:65423,line_discount_percent:null,discount_dollars:null}],is_paid:!0,location_id:1643,contact_id:null,po_number:null,payments:[{id:9178053,created_at:"2018-05-07T11:13:48.334+02:00",updated_at:"2018-05-07T11:13:48.334+02:00",success:!0,payment_amount:186.34,invoice_ids:[10102273],ref_num:"",applied_at:"2018-05-07",payment_method:"Overschrijving",transaction_response:null}],customer:{id:12731797,firstname:"Klant",lastname:"Business",fullname:"Klant Business",business_name:"OK Travel",email:"info@oktravel.be",phone:"050418224",mobile:"050412351",created_at:"2018-05-05T10:29:51.039+02:00",updated_at:"2018-05-07T11:13:48.435+02:00",pdf_url:null,address:"Molenstraat 44",address_2:"",city:"Blankenberge",state:"",zip:"8370",latitude:null,longitude:null,notes:null,get_sms:!0,opt_out:!1,disabled:!1,no_email:!1,location_name:"Blankenberge",location_id:1643,properties:{BTW:"BE0419.369.107",Klanttype:"","Pop-up melding":""},online_profile_url:"https://questcomputers.repairshopr.com/my_profile/v2/index?portal_key=5zkncv22n40q5xvhjp2b",tax_rate_id:41375,notification_email:"",invoice_cc_emails:"",invoice_term_id:4425,referred_by:"",ref_customer_id:null,business_and_full_name:"OK Travel - Klant Business",business_then_name:"OK Travel",contacts:[]}},{id:10077977,number:"183199",created_at:"2018-05-03T16:59:12.171+02:00",updated_at:"2018-05-03T17:01:06.425+02:00",date:"2018-05-03",due_date:"2018-05-17",subtotal:"16.49",total:"19.95",tax:"3.46",verified_paid:!1,tech_marked_paid:!0,ticket_id:null,pdf_url:null,balance_due:0,note:null,line_items:[{id:19781165,created_at:"2018-05-03T17:00:51.351+02:00",updated_at:"2018-05-03T17:00:59.674+02:00",invoice_id:10077977,item:"Hdmi-Hdmi Ethernet M/M 1M BLACK",name:"-",cost:"8.99",price:"19.95",quantity:"1.0",product_id:5423167,taxable:!0,discount_percent:null,position:1,invoice_bundle_id:null,product_category:"Kabels, laders & accu's;Audio- en video kabels",tax_note:null,user_id:45912,line_discount_percent:null,discount_dollars:null},{id:19781162,created_at:"2018-05-03T17:00:51.351+02:00",updated_at:"2018-05-03T17:00:59.674+02:00",invoice_id:10077977,item:"Hdmi-Hdmi Ethernet M/M 1M BLACK",name:"-",cost:"8.99",price:"19.95",quantity:"2.0",product_id:5423167,taxable:!0,discount_percent:null,position:1,invoice_bundle_id:null,product_category:"More Kabels, laders & accu's;Audio- en video kabels",tax_note:null,user_id:45912,line_discount_percent:null,discount_dollars:null}],is_paid:!0,location_id:1644,contact_id:null,po_number:null,payments:[{id:9143593,created_at:"2018-05-03T17:01:06.339+02:00",updated_at:"2018-05-03T17:01:06.467+02:00",success:!0,payment_amount:19.95,invoice_ids:[10077977],ref_num:null,applied_at:"2018-05-03",payment_method:"Cash",transaction_response:null}],customer:{id:11499608,firstname:"WALKIN",lastname:"Bredene",fullname:"WALKIN Bredene",business_name:"",email:"accounting@questcomputers.be",phone:"0498674125",mobile:"0498674125",created_at:"2018-01-09T09:43:34.446+01:00",updated_at:"2018-05-16T14:10:05.201+02:00",pdf_url:null,address:"",address_2:"",city:"",state:"",zip:"",latitude:null,longitude:null,notes:null,get_sms:!0,opt_out:!1,disabled:!1,no_email:!1,location_name:"Bredene",location_id:1644,properties:{BTW:"",Klanttype:"","Pop-up melding":""},online_profile_url:"https://questcomputers.repairshopr.com/my_profile/v2/index?portal_key=jwqfnbj80k07nx0odkz0",tax_rate_id:41375,notification_email:"",invoice_cc_emails:"",invoice_term_id:null,referred_by:"",ref_customer_id:null,business_and_full_name:"WALKIN Bredene",business_then_name:"WALKIN Bredene",contacts:[]}}]},function(e,t){e.exports=require("csv-stringify")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1).readFileSync("./config/api.json"),i=JSON.parse(o);t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(n(19)),i=l(n(18)),a=(l(n(17)),l(n(1))),r=l(n(16)),u=l(n(5));function l(e){return e&&e.__esModule?e:{default:e}}var d=[],s=[];t.default=function(e){return new Promise(function(t,n){var l=[],c="",_=new Date(e.startdate),f=new Date(e.enddate),p=0,m=1,v=1;a.default.writeFile("./export/alerts.txt","",function(e){if(e)throw e});var b=new Date,g=function(){return new Promise(function(e,t){console.info(o.default.api_url+"invoices?api_key="+o.default.api_key+"&page="+p),u.default.get(o.default.api_url+"invoices?api_key="+o.default.api_key+"&page="+p).then(function(t){console.log("got page",t.data.invoices[0].id),v=t.data.meta.total_pages,console.log("totalpages: ",v),e(t.data.invoices)}).catch(function(e){console.log("error: ",e),t("There was an error")})})},h=function(){return new Promise(function(e,t){var n=s[m],i=new Date(n.created_at);i>_&&i<f?setTimeout(function(){u.default.get(o.default.api_url+"invoices/"+n.id+"?api_key="+o.default.api_key).then(function(t){console.log("invoice id: ",t.data.invoice.id),e(t.data.invoice)}).catch(function(e){t("error with an input")})},250):e("range")})};!function n(){console.log("p: ",p),p<v?(p++,g().then(function(e){s=[],m=(s=e).length,function e(){console.log("n: ",m),0<m?(m--,h().then(function(t){"range"==t?(console.log("date was not within range"),e()):(d.push(t),e())})):(console.log("ended invoices loop"),n())}()})):(a.default.writeFile("./export/invoices.json",JSON.stringify(d),function(e){if(e)throw e}),d.forEach(function(t){console.info("parsing: "+t.id),l=l.concat((0,r.default)(t,{boekjaar:e.boekjaar,periode:e.period}))}),console.info("done parsing, converting to csv"),(0,i.default)(l,{header:!0,delimiter:";"},function(n,o){var i=new Date;c+=e.boekjaar+"-"+e.period+"_"+e.startdate+"-"+e.enddate+"_"+i.getTime(),c+=".csv",a.default.writeFile("./export/"+c,o,function(e){if(e)throw e});var r=new Date-b;console.info("Execution time: %dms",r),t({success:!0,filename:c})}),console.log("ended page loop"))}()})}},function(e,t,n){"use strict";var o,i=n(20),a=(o=i)&&o.__esModule?o:{default:o};var r=n(4),u=r.app,l=r.BrowserWindow,d=r.ipcMain,s=(n(3),n(2)),c=void 0;function _(){c=new l({width:720,height:640});var e=u.getAppPath().replace("node_modules\\electron\\dist\\resources\\default_app.asar","dist\\index.html");c.loadURL(s.format({pathname:e,protocol:"file:",slashes:!0})),c.on("closed",function(){c=null})}u.on("ready",_),d.on("doExport",function(e,t){(0,a.default)(t).then(function(e){c.webContents.executeJavaScript("exportDone('"+e.filename+"')"),console.log("Export done")})}),u.on("window-all-closed",function(){"darwin"!==process.platform&&u.quit()}),u.on("activate",function(){null===c&&_()})}]);