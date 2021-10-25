(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{605:function(t,e,r){"use strict";var n=r(0),o=(r(37),r(57),r(206),r(6),r(8),r(49),r(53),r(10),r(9),r(12),r(13),r(5)),c=r(101),l=r(120);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},857:function(t,e,r){"use strict";r.r(e);var n=r(0),o=(r(32),r(49),r(10),r(9),r(6),r(12),r(8),r(13),r(83));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={data:function(){return{dialog:!1,search:"",sortDesc:!1,editedIndex:-1,valid:!0,headers:[{text:"ID",value:"id"},{text:"Name",value:"name"},{text:"Description",value:"descriptions",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:"",name:"",descriptions:""},defaultItem:{id:"",name:"",descriptions:""}}},methods:{handleClick:function(t){this.$router.push("/services/"+t.name)},editItem:function(t){this.editedIndex=this.servicetypes.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1,setTimeout((function(){return t.request_data()}),t.delay_seconds)}))},request_data:function(){this.$store.dispatch("get_medical_service_types")},save:function(){this.editedIndex>-1?(console.log(this.editedItem),delete this.editedItem.new,this.$store.dispatch("update_medical_service_type",this.editedItem)):(delete this.editedItem.id,this.$store.dispatch("create_new_medical_service_type",this.editedItem)),this.close()}},created:function(){this.request_data()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({formTitle:function(){return-1===this.editedIndex?"label.titles.newservicetype":"label.titles.editservicetype"}},Object(o.b)({servicetypes:"servicetypes",measures:"medicinemeasurements"}))},d=l,v=r(48),m=r(52),f=r.n(m),h=r(156),_=r(253),y=r(90),O=r(598),w=r(589),j=r(600),k=r(587),V=r(257),x=r(605),I=r(137),$=r(255),C=r(599),P=r(591),D=r(113),B=r(76),T=r(91),E=r(596),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb "},[r("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("label.breadcrumb.dashboard")))]),t._v(" "),r("router-link",{attrs:{to:"/services"}},[t._v(t._s(t.$t("label.breadcrumb.services")))]),t._v(" "),r("router-link",{staticClass:"active",attrs:{to:"/services/types"}},[t._v(t._s(t.$t("label.breadcrumb.servicecategories"))+"\n    ")])],1),t._v(" "),r("v-card",{staticClass:"mx-auto"},[t.servicetypes.length<0?r("v-progress-circular",{attrs:{size:"52",color:"primary",indeterminate:""}}):r("v-data-table",{staticClass:"default",attrs:{dense:"",headers:t.headers,items:t.servicetypes,search:t.search,"sort-by":"isActive","sort-desc":t.sortDesc,"mobile-breakpoint":"100"},on:{"click:row":t.handleClick},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[r("v-toolbar-title",[t._v(t._s(t.$t("label.titles.servicetypesmanagement")))]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[t.isMdAndUp?r("v-btn",t._g(t._b({staticClass:"mb-2 button",attrs:{medium:"",dark:""}},"v-btn",o,!1),n),[r("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-plus")]),t._v("\n                "+t._s(t.$t("label.button.btnaddnewservicetype")))],1):r("v-btn",t._g(t._b({staticClass:"mb-2 button",attrs:{fab:"",small:"",dark:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",{staticClass:"primary"},[r("span",[t._v(t._s(t.$t(t.formTitle)))])]),t._v(" "),r("v-card-text",[r("v-container",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Service type name",required:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{label:"Descriptions",required:"",min:"0"},model:{value:t.editedItem.descriptions,callback:function(e){t.$set(t.editedItem,"descriptions",e)},expression:"editedItem.descriptions"}})],1)],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",small:""},on:{click:t.close}},[t._v("\n                  "+t._s(t.$t("label.button.btncancel"))+"\n                ")]),t._v(" "),r("v-btn",{attrs:{color:"warning",small:""},on:{click:t.save}},[t._v("\n                  "+t._s(t.$t("label.button.btnsave"))+"\n                ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.isActive",fn:function(e){return[e.item.isActive?r("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-icon",t._g(t._b({attrs:{small:"",color:"red lighten-2"}},"v-icon",o,!1),n),[t._v("mdi-check")])]}}],null,!0)},[t._v(" "),r("span",[t._v("Active")])]):r("div")]}},{key:"item.actions",fn:function(e){var n=e.item;return[r("td",{on:{click:function(t){t.stopPropagation()}}},[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v("\n            mdi-pencil\n          ")])],1)]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:h.a,VCard:_.a,VCardActions:y.a,VCardText:y.c,VCardTitle:y.d,VCol:O.a,VContainer:w.a,VDataTable:j.a,VDialog:k.a,VDivider:V.a,VForm:x.a,VIcon:I.a,VProgressCircular:$.a,VRow:C.a,VSpacer:P.a,VTextField:D.a,VToolbar:B.a,VToolbarTitle:T.b,VTooltip:E.a})}}]);