!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}([function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("moment")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});u(n(13)),u(n(12));var o=u(n(21)),a=(u(n(11)),u(n(10)),u(n(9)),u(n(8)),u(n(7)),u(n(6)),u(n(5)),u(n(4)),u(n(0))),r=u(n(1)),i=u(n(2));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){console.log(e);var u=[],d={},l=!1,c=[];if(["cash","quest munten","overschrijving","other"].forEach(function(t){a.default.lowerCase(e.payment_method)==t&&(c.push("invalid payment: "+t+", skippping"),l=!0)}),1643!==e.location_id&&1644!==e.location_id&&c.push("invalide kostenplaats "+e.location_id),4425!==e.customer.invoice_term_id&&4826!==e.customer.invoice_term_id&&c.push("Invalide betalingsvoorwaarde "+e.customer.invoice_term_id),c.length>0){var s=" \r\n Errors for "+e.id+"\r\n"+JSON.stringify(c);if(r.default.appendFile("./export/alerts.txt",s,function(e){if(e)throw e}),l)return}if(d["dagboek: code"]=800,d.boekjaar=(0,i.default)((0,i.default)(e.applied_at)).add(3,"M").format("YYYY"),d.periode=(0,i.default)((0,i.default)(e.applied_at)).add(3,"M").format("M"),d.boekstuknummer=null,d.valuta="EUR",d.wisselkoers=null,d.boekingsdatum=e.applied_at,d.grootboekrekening=(0,o.default)(e),d.omschrijving=null,d["onze ref."]=null,d.bedrag=e.payment_amount,d.aantal=null,d["btw-code"]=null,d["btw-percentage"]=null,d["btw-bedrag"]=null,d.opmerkingen=null,d.project=null,d._1099=null,d["kostenplaats: code"]=null,d["kostenplaats: omschrijving"]=null,d["kostendrager: code"]=null,d["kostendrager: omschrijving"]=null,d.naam=null,d.code=null,Object.keys(d).length>3){var f=Object.assign({},d);f.grootboekrekening=4e5,f.bedrag=d.bedrag-2*d.bedrag,f.code=e.customer.id,u.push(d),u.push(f)}return u}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){switch(e){case 7e5:return 920;case 700001:return 930;case 46e4:return null;case 740001:return 990;case 460100:return null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){switch(e){case 1643:return"BLA";case 1644:return"BRE";default:return console.error("invalide kostenplaats ".input),null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0),r=(o=a)&&o.__esModule?o:{default:o};t.default=function(e,t){var n,o=1;.21!=t&&"null"!=typeof t||(o=1.21),n=e.price/o*e.quantity;var a=e.price*e.quantity-n;return r.default.round(a,2)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0),r=(o=a)&&o.__esModule?o:{default:o};t.default=function(e){var t=0;return e.forEach(function(e){t+=e.quantity}),r.default.round(t,0)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0),r=(o=a)&&o.__esModule?o:{default:o};t.default=function(e,t){var n,o=1;return.21!=t&&"null"!=typeof t||(o=1.21),n=e.price/o*e.quantity,r.default.round(n,2)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=0;switch(e.tax_rate_id){case 41375:t=21;break;case 50470:case 47655:t=0;break;default:t=0}return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){console.log(e.tax_rate_id);var n=0;switch(e.tax_rate_id){case 41375:n=5;break;case 50470:n="B";break;case 47655:n="0%";break;default:n=0}return 416e3!==t&&460100!==t||(n=0),console.log(n),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0),r=(o=a)&&o.__esModule?o:{default:o};t.default=function(e){return void 0===e?(console.log("invalide grootboekrekening"),7e5):0==r.default.lowerCase(e).indexOf("werk")?700001:-1!=r.default.lowerCase(e).indexOf("quest care")?700001:-1!=r.default.lowerCase(e).indexOf("quest smartphone")?700001:0==r.default.lowerCase(e).indexOf("doorgerekende verplaatsingskosten")?740001:0==r.default.lowerCase(e).indexOf("voorschot")?46e4:0==r.default.lowerCase(e).indexOf("cadeaubon")?460100:0==r.default.lowerCase(e).indexOf("waarborg")?416e3:7e5}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){switch(e){case 4425:return 14;case 4826:return 30;default:return console.error("Invalide betalingsvoorwaarde "+e),null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0);(o=a)&&o.__esModule;t.default=function(e,t){var n=0;return void 0===e?(console.error("missing line items"),n):(e.forEach(function(e){n+=e.price*e.quantity}),0>n?701:700)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=p(n(13)),a=p(n(12)),r=p(n(11)),i=p(n(10)),u=(p(n(9)),p(n(8))),d=(p(n(7)),p(n(6))),l=p(n(5)),c=p(n(4)),s=p(n(0)),f=(p(n(1)),p(n(2)));function p(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){var p=[];return void 0===e.line_items&&(e.line_items=[]),e.line_items.forEach(function(t){var n={},v=[];e.customer.tax_rate_id<=1&&v.push("invalide tax_rate_id"),1643!==e.location_id&&1644!==e.location_id&&v.push("invalide kostenplaats "+e.location_id),4425!==e.customer.invoice_term_id&&4826!==e.customer.invoice_term_id&&v.push("Invalide betalingsvoorwaarde "+e.customer.invoice_term_id),v.length>0&&(e.id,JSON.stringify(v));var m=s.default.round(e.tax/e.subtotal,2);0==e.tax&&(m=0),m>20&&m<.23&&(m=.21),m<0&&(m=0),n["dagboek: code"]=(0,o.default)(e.line_items),n.boekjaar=(0,f.default)((0,f.default)(e.date)).add(3,"M").format("YYYY"),n.periode=(0,f.default)((0,f.default)(e.date)).add(3,"M").format("M"),n.boekstuknummer=e.number,n["Omschrijving: Kopregel"]=null,n.factuurdatum=e.date,n.vervaldatum=null,n.valuta="EUR",n.wisselkoers=null,n["betalingsvoorwaarde: code"]=(0,a.default)(e.customer.invoice_term_id),n.ordernummer=null,n["uw ref."]=e.po_number,void 0!==e.payments[0]?n["Betalingsreferentie Code"]=e.payments[0].payment_method:n["Betalingsreferentie Code"]=null,n.naam=null,n.code=e.customer.id,n.grootboekrekening=(0,r.default)(t.item),n.omschrijving=t.item,n["btw-code"]=(0,i.default)(e.customer,n.grootboekrekening),n["btw-percentage"]=100*m,n.bedrag=(0,u.default)(t,m),n.aantal=s.default.round(t.quantity,0),n["btw-bedrag"]=(0,d.default)(t,m),n.opmerkingen=s.default.trim(t.name,"- "),n.project=null,n.van=null,n.naar=null,n._1099=null,n["kostenplaats: code"]=(0,l.default)(e.location_id),n["kostenplaats: omschrijving"]="",n["kostendrager: code"]=(0,c.default)(n.grootboekrekening),n["kostendrager: omschrijving"]="",p.push(n)}),p}},function(e,t){e.exports=require("csv-stringify")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("electron")},function(e,t,n){"use strict";var o=d(n(15)),a=d(n(1)),r=d(n(14)),i=d(n(3)),u=d(n(2));function d(e){return e&&e.__esModule?e:{default:e}}var l=[],c=(0,u.default)().startOf("year"),s=(0,u.default)().endOf("year").add(1,"day"),f=(0,u.default)().startOf("month"),p=(0,u.default)().endOf("month").add(1,"day"),v={boekjaar:1,periode:1,mode:"invoice",startdate:"start",enddate:"end"};a.default.readFile("./export/"+v.mode+".json",function(e,t){l=JSON.parse(t),m()});var m=function(){var e=[],t=[],n=[];l.forEach(function(o){if("invoice"==v.mode){console.info("parsing invoice: "+o.id);var a=(0,u.default)(o.created_at);console.log(o.created_at);var d=(0,r.default)(o,{boekjaar:v.boekjaar,periode:v.period,mode:v.mode});e=e.concat(d),a.isAfter(f)&&a.isBefore(p)&&(n=n.concat(d)),a.isAfter(c)&&a.isBefore(s)&&(t=t.concat(d))}else if("transaction"==v.mode){console.info("parsing transaction: "+o.id);var l=(0,u.default)(o.created_at),m=(0,i.default)(o,{boekjaar:v.boekjaar,periode:v.period,mode:v.mode});e=e.concat(m),l.isAfter(f)&&l.isBefore(p)&&(n=n.concat(m)),l.isAfter(c)&&l.isBefore(s)&&(t=t.concat(m))}}),console.info("done parsing, converting to csv"),(0,o.default)(e,{header:!0,delimiter:";"},function(e,t){var n=new Date,o="reparsed_";o+=v.mode+"-"+v.startdate+"-"+v.enddate+"_"+n.getTime(),o+=".csv",a.default.writeFile("./export/"+o,t,function(e){if(e)throw e})}),(0,o.default)(n,{header:!0,delimiter:";"},function(e,t){var n=new Date,o="reparsed_";o+=f.format("MMMM")+"_"+n.getTime(),o+=".csv",a.default.writeFile("./export/"+o,t,function(e){if(e)throw e})}),(0,o.default)(t,{header:!0,delimiter:";"},function(e,t){var n=new Date,o="reparsed_";o+=f.format("YYYY")+"_"+n.getTime(),o+=".csv",a.default.writeFile("./export/"+o,t,function(e){if(e)throw e})})}},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(0),r=(o=a)&&o.__esModule?o:{default:o};t.default=function(e){var t=e.payment_method;return 0==r.default.lowerCase(t).indexOf("bancontact")?580100:0==r.default.lowerCase(t).indexOf("creditcard")?580200:0==r.default.lowerCase(t).indexOf("credit card")?580200:0==r.default.lowerCase(t).indexOf("cadeaubon")?460100:0==r.default.lowerCase(t).indexOf("mobiele bc")?580300:0==r.default.lowerCase(t).indexOf("payconiq")?580500:0==r.default.lowerCase(t).indexOf("paypal")?580600:(console.log("invalide grootboekrekening: "+e.payment_method),7e5)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(16).resolve,r=o.readFileSync(a("./config/api.json")),i=JSON.parse(r);t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=c(n(22)),a=c(n(15)),r=c(n(2)),i=c(n(1)),u=c(n(14)),d=c(n(3)),l=c(n(20));function c(e){return e&&e.__esModule?e:{default:e}}var s=[],f=[],p=[],v=(0,r.default)().startOf("year"),m=(0,r.default)().endOf("year").add(1,"day"),_=(0,r.default)().startOf("month"),g=(0,r.default)().endOf("month").add(1,"day");t.default=function(e){return new Promise(function(t,n){var c="";switch(e.mode){case"transaction":c=o.default.api_url+"payments";break;case"invoice":default:c=o.default.api_url+"invoices"}var h=new Date(e.startdate),w=new Date(e.enddate);console.log(e),console.log(h);var b=0,k=1,y=1;i.default.writeFile("./export/alerts.txt","",function(e){if(e)throw e}),new Date;var x=function(){return new Promise(function(t,n){console.info(c+" page "+b),l.default.get(c+"?api_key="+o.default.api_key+"&page="+b).then(function(n){switch(y=n.data.meta.total_pages,console.log("totalpages: ",y),e.mode){case"transaction":t(n.data.payments);break;default:t(n.data.invoices)}}).catch(function(e){console.log("error: ",e),n("There was an error")})})},O=function(){return new Promise(function(t,n){var a=f[k],r=new Date(a.created_at);""==e.startdate||r>h&&r<w?setTimeout(function(){l.default.get(c+"/"+a.id+"?api_key="+o.default.api_key).then(function(n){switch(e.mode){case"transaction":console.log(e.mode+" id: ",n.data.payment.id),t(n.data.payment);break;default:console.log(e.mode+" id: ",n.data.invoice.id),t(n.data.invoice)}}).catch(function(e){console.error(e),n("error with an input")})},250):t("range")})};!function t(){if(console.log("p: ",b),b<y)b++,x().then(function(e){f=[],f=e,p.push(f),k=f.length,function e(){console.log("n: ",k),0<k?(k--,O().then(function(t){"range"==t?(console.log("date was not within range"),e()):(s.push(t),e())})):(console.log("ended invoices loop"),t())}()});else{i.default.writeFile("./export/"+e.mode+".json",JSON.stringify(s),function(e){if(e)throw e}),i.default.writeFile("./export/pages.json",JSON.stringify(p),function(e){if(e)throw e});var n=[],o=[],l=[];s.forEach(function(t){if("invoice"==e.mode){console.info("parsing invoice: "+t.id);var a=(0,r.default)(t.created_at);console.log(t.created_at);var i=(0,u.default)(t,{boekjaar:e.boekjaar,periode:e.period,mode:e.mode});n=n.concat(i),a.isAfter(_)&&a.isBefore(g)&&(l=l.concat(i)),a.isAfter(v)&&a.isBefore(m)&&(o=o.concat(i))}else if("transaction"==e.mode){console.info("parsing transaction: "+t.id);var c=(0,r.default)(t.created_at),s=(0,d.default)(t,{boekjaar:e.boekjaar,periode:e.period,mode:e.mode});n=n.concat(s),c.isAfter(_)&&c.isBefore(g)&&(l=l.concat(s)),c.isAfter(v)&&c.isBefore(m)&&(o=o.concat(s))}}),console.info("done parsing, converting to csv"),(0,a.default)(n,{header:!0,delimiter:";"},function(t,n){var o=new Date,a="reparsed_";a+=e.mode+"-"+e.startdate+"-"+e.enddate+"_"+o.getTime(),a+=".csv",i.default.writeFile("./export/"+a,n,function(e){if(e)throw e})}),(0,a.default)(l,{header:!0,delimiter:";"},function(t,n){var o=new Date,a=e.mode+"_";a+=_.format("MMMM")+"_"+_.format("YYYY")+"_"+o.getTime(),a+=".csv",i.default.writeFile("./export/"+a,n,function(e){if(e)throw e})}),(0,a.default)(o,{header:!0,delimiter:";"},function(t,n){var o=new Date,a=e.mode+"_";a+=_.format("YYYY")+"_"+o.getTime(),a+=".csv",i.default.writeFile("./export/"+a,n,function(e){if(e)throw e})}),console.log("ended page loop")}}()})}},function(e,t,n){"use strict";var o=a(n(23));a(n(19));function a(e){return e&&e.__esModule?e:{default:e}}var r=n(18),i=r.app,u=r.BrowserWindow,d=r.ipcMain,l=(n(16),n(17)),c=void 0;function s(){c=new u({width:720,height:640});var e=i.getAppPath().replace("node_modules\\electron\\dist\\resources\\default_app.asar","dist\\index.html");c.loadURL(l.format({pathname:e,protocol:"file:",slashes:!0})),c.on("closed",function(){c=null})}i.on("ready",s),d.on("doExport",function(e,t){(0,o.default)(t).then(function(e){c.webContents.executeJavaScript("exportDone('"+e.filename+"')"),console.log("Export done")})}),i.on("window-all-closed",function(){"darwin"!==process.platform&&i.quit()}),i.on("activate",function(){null===c&&s()})}]);