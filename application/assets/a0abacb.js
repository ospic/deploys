(window.webpackJsonp=window.webpackJsonp||[]).push([[58,15,19,21],{609:function(t,e,o){var content=o(637);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("a1e31a90",content,!0,{sourceMap:!1})},610:function(t,e,o){var content=o(639);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("14528240",content,!0,{sourceMap:!1})},622:function(t,e,o){"use strict";var r=o(112),n=o(38),l=o(5),c=o(7);e.a=Object(l.a)(r.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},636:function(t,e,o){"use strict";o(609)},637:function(t,e,o){var r=o(14)(!1);r.push([t.i,".outlined[data-v-25b31a7d]{color:#00f!important;border-color:#00f!important}",""]),t.exports=r},638:function(t,e,o){"use strict";o(610)},639:function(t,e,o){var r=o(14)(!1);r.push([t.i,".outlined[data-v-0356aaeb]{color:#00f!important;border-color:#00f!important}",""]),t.exports=r},657:function(t,e,o){var content=o(713);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("5e004035",content,!0,{sourceMap:!1})},671:function(t,e,o){"use strict";o.r(e);var r={props:{item:{type:Object,default:null}},data:function(){return{}}},n=(o(636),o(33)),l=o(47),c=o.n(l),d=o(231),m=o(86),v=o(234),f=o(622),h=o(178),y=o(141),_=o(34),T=o(561),O=o(69),x=o(87),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[o("v-card",{staticClass:"default",attrs:{elevation:r?3:1}},[o("v-toolbar",{attrs:{flat:"",dense:"",color:"primary",dark:""}},[o("v-toolbar-title",{staticClass:" text-caption"},[t._v("\n          "+t._s(t.item.title)+"\n        ")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-icon",{attrs:{color:"white"},domProps:{textContent:t._s(t.item.icon)}})],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",[o("v-list-item",[o("v-list-item-content",[o("v-list-item-title",{staticClass:"primary--text font-weight-normal text-body-1"},[t._v(t._s(null==t.formatPrice(t.item.value)?0:t.formatPrice(t.item.value))+"\n            ")]),t._v(" "),o("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.item.subtitle)}})],1)],1)],1)],1)]}}])})}),[],!1,null,"25b31a7d",null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:m.c,VDivider:v.a,VHover:f.a,VIcon:h.a,VListItem:y.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VSpacer:T.a,VToolbar:O.a,VToolbarTitle:x.b})},672:function(t,e,o){"use strict";o.r(e);var r={props:{item:{type:Object,default:null}},data:function(){return{}}},n=(o(638),o(33)),l=o(47),c=o.n(l),d=o(231),m=o(86),v=o(234),f=o(622),h=o(178),y=o(141),_=o(34),T=o(561),O=o(69),x=o(87),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[o("v-card",{staticClass:"default",attrs:{elevation:r?3:1}},[o("v-toolbar",{attrs:{flat:"",dense:""}},[o("v-toolbar-title",{staticClass:"grey--text text-caption"},[t._v("\n          "+t._s(t.item.title)+"\n        ")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-icon",{attrs:{color:t.item.color},domProps:{textContent:t._s(t.item.icon)}})],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",{staticClass:"ma-0 py-0"},[o("v-list-item",{staticClass:"ma-0 pa-0",attrs:{dense:""}},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"primary--text font-weight-light text-body-1"},[t._v(t._s(t.formatPrice(t.item.value))+"\n            ")]),t._v(" "),o("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.item.subtitle1)}})],1)],1),t._v(" "),o("v-list-item",{staticClass:"ma-0 pa-0",attrs:{dense:""}},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"primary--text font-weight-normal text-body-1"},[t._v(t._s(t.formatPrice(t.item.amount))+" "),o("v-icon",{attrs:{color:"primary",small:""}},[t._v("mdi-arrow-up")])],1),t._v(" "),o("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.item.subtitle2)}})],1)],1)],1)],1)]}}])})}),[],!1,null,"0356aaeb",null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:m.c,VDivider:v.a,VHover:f.a,VIcon:h.a,VListItem:y.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VSpacer:T.a,VToolbar:O.a,VToolbarTitle:x.b})},673:function(t,e,o){"use strict";o.r(e);var r={props:{data:{type:Object,default:null},title:{type:String,default:null}},data:function(){return{options:{series:this.data.series,chart:{height:350,type:"line"},theme:{mode:"light",palette:"palette1",monochrome:{enabled:!0,color:"#2E294E",shadeTo:"dark",shadeIntensity:1}},stroke:{width:4,curve:"smooth"},xaxis:{type:"datetime",categories:this.data.categories,tickAmount:10},title:{text:null==this.title?"No. of bills per day":this.title,align:"left",style:{fontSize:"16px",color:"#666"}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#FDD835"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:4,colors:["#FFA41B"],strokeColors:"#fff",strokeWidth:2,hover:{size:7}},yaxis:{min:0,title:{text:this.title}}}}}},n=o(33),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("apexchart",{attrs:{width:"98%",type:"line",options:t.options,series:t.options.series}})}),[],!1,null,null,null);e.default=component.exports},712:function(t,e,o){"use strict";o(657)},713:function(t,e,o){var r=o(14)(!1);r.push([t.i,".outlined[data-v-8fea2ebe]{color:#00f!important;border-color:#00f!important}",""]),t.exports=r},772:function(t,e,o){"use strict";o.r(e);o(10),o(8),o(6),o(11),o(12);var r=o(0),n=(o(9),o(671)),l=o(672),c=o(673),d=o(77);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{"statistical-card":n.default,"transaction-card":l.default,"smooth-line-chart":c.default},data:function(){return{}},created:function(){this.$store.dispatch("get_bills_perday"),this.$store.dispatch("get_bills_summation"),this.$store.dispatch("get_transactions_perday"),this.$store.dispatch("get_transactions_summations")},computed:v(v({},Object(d.b)({billsperday:"billsperday",billsummation:"billsummation",transactionsperday:"transactionsperday",transactionsummation:"transactionsummation"})),{},{bills:{get:function(){return[{value:this.billsummation.totalNumberOfBillsToday,title:"No. bills today",subtitle:"Total number of bills today",icon:"mdi-currency-usd-circle",color:"black darken-2"},{value:this.billsummation.totalBillsAmountToday,title:"Amount of bills today",subtitle:"Total amount of bills today",icon:"mdi-layers-outline",color:"red darken-1"},{value:this.billsummation.totalBillsPaidAmountToday,title:"Amount paid today",subtitle:"Total amount of bills paid today",icon:"mdi-layers-outline",color:"red darken-1"},{value:this.billsummation.totalNumberOfBills,title:"No. of bills",subtitle:"Total number of bills",icon:"mdi-bitcoin",color:"blue"},{value:this.billsummation.totalBillsAmount,title:"Bills amount",subtitle:"Total of all bills amount",icon:"mdi-layers-outline",color:"red darken-1"},{value:this.billsummation.totalBillsPaidAmount,title:"Total paid bills",subtitle:"Amount paid from bills",icon:"mdi-barcode-scan",color:"blue darken-2"}]}},transactions:{get:function(){return[{value:this.transactionsummation.totalNumberOfTransactionsToday,amount:this.transactionsummation.totalTransactionAmountToday,title:"Transactions today",subtitle1:"Transactions",subtitle2:"Total amount",icon:"mdi-currency-usd-circle",color:"black darken-2"},{value:this.transactionsummation.totalNumberOfTransactionsLast7Days,amount:this.transactionsummation.totalTransactionAmountLast7Days,title:"Transactions in last 7 days",subtitle1:"Number of Transactions",subtitle2:"Total amount",icon:"mdi-contactless-payment-circle",color:"primary darken-1"},{value:this.transactionsummation.totalNumberOfTransactionsLast30Days,amount:this.transactionsummation.totalTransactionAmountLast30Days,title:"Transactions in last 30 days",subtitle1:"No. of transactions in last 30 days",subtitle2:"Transactions amount in last 30 days",icon:"mdi-wallet",color:"red darken-1"},{value:this.transactionsummation.totalNumberOfTransactions,amount:this.transactionsummation.totalTransactionAmount,title:"All transactions",subtitle1:"Number of all transactions",subtitle2:"Total amounts",icon:"mdi-barcode",color:"blue darken-2"}]}},transactiontrends:{get:function(){var t=this.transactionsperday,e=new Array,o=new Array;return void 0!==t&&t.forEach((function(element){e.push(element.numberOfTransactions);var t=element.transactionDate;o.push(new Date(t).toISOString())})),{series:[{name:"Number of Transactions per day",data:e}],categories:o}}},billtrends:{get:function(){var t=this.billsperday,e=new Array,o=new Array;return void 0!==t&&t.forEach((function(element){e.push(element.totalBills);var t=element.createdDate;o.push(new Date(t).toISOString())})),{series:[{name:"Number of bills per day",data:e}],categories:o}}}})},h=(o(712),o(33)),y=o(47),_=o.n(y),T=o(231),O=o(566),x=o(559),w=o(569),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{"no-gutters":""}},t._l(t.bills,(function(t,e){return o("v-col",{key:e,staticClass:"ma-0 pa-0 pr-2 pb-2"},[o("statistical-card",{attrs:{item:t}})],1)})),1),t._v(" "),o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",md:"5",sm:"12"}},[o("v-card",{staticClass:"mr-1"},[o("smooth-line-chart",{attrs:{data:t.transactiontrends,title:"Number of transactions per day"}})],1)],1),t._v(" "),null!=t.billsperday?o("v-col",{attrs:{cols:"12",md:"5",sm:"12"}},[o("v-card",{staticClass:"ml-1"},[o("smooth-line-chart",{attrs:{data:t.billtrends,title:"Number of bills created per day"}})],1)],1):t._e(),t._v(" "),o("v-col",{attrs:{cols:"12",md:"2",sm:"12"}},t._l(t.transactions,(function(t,e){return o("v-col",{key:e,staticClass:"ma-0 pa-0 pl-2 pb-2"},[o("transaction-card",{attrs:{item:t}})],1)})),1)],1)],1)}),[],!1,null,"8fea2ebe",null);e.default=component.exports;_()(component,{VCard:T.a,VCol:O.a,VContainer:x.a,VRow:w.a})}}]);