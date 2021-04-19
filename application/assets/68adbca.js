(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{582:function(t,e,n){"use strict";var r=n(0),o=(n(35),n(53),n(187),n(6),n(9),n(46),n(55),n(10),n(8),n(11),n(12),n(5)),l=n(96),c=n(110);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},681:function(t,e,n){"use strict";n.r(e);var r=n(0),o=(n(46),n(55),n(10),n(8),n(6),n(11),n(9),n(12),n(77));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={components:{charges:n(254).default},props:{consultationsservices:{type:Array,default:null},transaction:{type:Object,default:null},isActive:{type:Boolean,default:!0}},data:function(){return{select:null,dialog:!1,service_transactions:null,type:"medicine",quantity:null,valid:!1,payload:{id:null,quantity:0,type:"medicine"},suffix:null,headers:[{text:"ID",value:"id"},{text:"Service",value:"service",sortable:!0},{text:"Department",value:"departmentName"},{text:"Amount",value:"amount",sortable:!1},{text:"Currency",value:"currencyCode"},{text:"Reversed",value:"isReversed",sortable:!0},{text:"Transaction Date",value:"transactionDate"}]}},methods:{fetch_medical_services:function(){this.$store.dispatch("getmedicines")},save:function(){var t=this;console.log(this.payload),this.$refs.form.validate()&&(this.payload.route=this.$route.params.id,this.payload.id=parseInt(this.payload.id),this.payload.quantity=parseInt(this.payload.quantity),this.$store.dispatch("initiate_medical_transaction",this.payload),setTimeout((function(){return t.$emit("update")}),this.delay_seconds),this.dialog=!1)},clear_select:function(){this.select=null},change_select:function(t){var e=this.medicines.find((function(e){return e.id===t}));this.suffix=void 0===e?"":e.unit}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({medicines:"medicines"}))},d=n(33),f=n(47),v=n.n(f),h=n(140),m=n(231),y=n(86),_=n(566),O=n(559),w=n(570),j=n(557),x=n(582),V=n(232),k=n(569),P=n(175),C=n(103),$=n(69),B=n(87),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"700"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[t.isActive?n("v-btn",t._g(t._b({attrs:{color:"primary"}},"v-btn",o,!1),r),[t._v("Add patient medicine")]):t._e()]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[n("v-toolbar-title",[t._v("Give new medicine to this patient")])],1),t._v(" "),n("v-container",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{staticClass:"mx-1"},[n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-card-text",[n("v-select",{attrs:{items:t.medicines,"item-text":"name","item-value":"id",chips:"","small-chips":"",label:"Select Medicine","persistent-hint":"","single-line":"",filled:"",rules:[function(t){return!!t||"Medicine is required!"}],required:"",clearable:""},on:{click:[t.fetch_medical_services,function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"clear",void 0,e.key,void 0)?null:t.clear_select(e)}],change:t.change_select},model:{value:t.payload.id,callback:function(e){t.$set(t.payload,"id",e)},expression:"payload.id"}})],1)],1),t._v(" "),t.payload.id?n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-text-field",{staticClass:"mt-4",attrs:{label:"Quantity",type:"number",filled:"",min:"1",suffix:null===t.suffix?"":t.suffix,rules:[function(t){return!!t||"Quantity is required!"}],required:""},model:{value:t.payload.quantity,callback:function(e){t.$set(t.payload,"quantity",e)},expression:"payload.quantity"}})],1):t._e()],1)],1),t._v(" "),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),n("v-btn",{staticClass:"warning",on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1),t._v(" "),n("div",[null==t.transaction?n("v-progress-linear",{attrs:{indeterminate:""}}):n("v-container",{staticClass:"ma-2",attrs:{fluid:""}},[n("v-data-table",{staticClass:"default",attrs:{dense:"",headers:t.headers,items:t.transaction.transactions.filter((function(t){return null===t.medicalServiceName})),"mobile-breakpoint":"100"},scopedSlots:t._u([{key:"item.service",fn:function(e){var r=e.item;return[null!=r.medicalServiceName?n("p",[t._v("\n            "+t._s(r.medicalServiceName)+"\n          ")]):n("p",[t._v(t._s(r.medicineName))])]}}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:h.a,VCard:m.a,VCardActions:y.a,VCardText:y.c,VCol:_.a,VContainer:O.a,VDataTable:w.a,VDialog:j.a,VForm:x.a,VProgressLinear:V.a,VRow:k.a,VSelect:P.a,VTextField:C.a,VToolbar:$.a,VToolbarTitle:B.b})}}]);