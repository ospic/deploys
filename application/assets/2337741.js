(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{792:function(t,e,n){"use strict";n.r(e);n(10),n(8),n(6),n(11),n(9),n(12);var o=n(0),l=(n(104),n(77));function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{dialog:!1,dialogDelete:!1,editedIndex:-1,sortDesc:!0,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Name",align:"start",sortable:!1,value:"name"},{text:"SID",value:"sid"},{text:"Token",value:"token"},{text:"From Number",value:"phoneNumber"},{text:"Is Active?",value:"isActive"},{text:"Actions",value:"actions",sortable:!1}],editedItem:{id:"",name:"",sid:"",token:"",phoneNumber:"",isActive:!1},defaultItem:{id:"",name:"",sid:"",token:"",phoneNumber:"",isActive:!1}}},beforeMount:function(){this.$store.dispatch("fetch_sms_configurations")},methods:{updatedata:function(){this.$store.dispatch("fetch_sms_configurations")},editItem:function(t){this.editedIndex=this.smsconfigurations.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.smsconfigurations.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},activateItem:function(t){var e=this;console.log(t),this.$store.dispatch("activate_sms_configuration",t).then((function(){e.updatedata()}))},deleteItemConfirm:function(){this.smsconfigurations.splice(this.editedIndex,1),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){var t=this;this.editedIndex>-1?(this.$store.dispatch("update_sms_configuration",this.editedItem).then((function(){t.updatedata()})),this.close()):(delete this.editedItem.id,this.$store.dispatch("create_sms_configuration",this.editedItem).then((function(){t.updatedata()})),this.close())}},computed:c(c({},Object(l.b)({smsconfigurations:"smsconfigurations"})),{},{formTitle:function(){return-1===this.editedIndex?"label.titles.newsmsconfigurations":"label.titles.updatesmsconfigurations"}}),watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}}},v=n(33),m=n(47),f=n.n(m),_=n(140),h=n(231),I=n(86),x=n(564),k=n(557),y=n(568),O=n(555),w=n(178),D=n(567),$=n(559),j=n(103),V=n(70),C=n(87),T=n(563),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.smsconfigurations,"sort-by":"isActive","sort-desc":t.sortDesc},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[n("v-toolbar-title",[t._v(t._s(t.$t("label.titles.smsconfigurations")))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[t.isMdAndUp?n("v-btn",t._g(t._b({staticClass:"mb-2 button",attrs:{medium:"",dark:""}},"v-btn",l,!1),o),[n("v-icon",{attrs:{small:""}},[t._v("mdi-plus")]),t._v("\n            "+t._s(t.$t("label.button.btnnewsmsconfig")))],1):n("v-btn",t._g(t._b({staticClass:"mb-2 button",attrs:{fab:"",small:"",dark:""}},"v-btn",l,!1),o),[n("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"primary"},[n("span",[t._v(t._s(t.$t(t.formTitle)))])]),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"SID",required:""},model:{value:t.editedItem.sid,callback:function(e){t.$set(t.editedItem,"sid",e)},expression:"editedItem.sid"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Token",required:""},model:{value:t.editedItem.token,callback:function(e){t.$set(t.editedItem,"token",e)},expression:"editedItem.token"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Phone number",required:""},model:{value:t.editedItem.phoneNumber,callback:function(e){t.$set(t.editedItem,"phoneNumber",e)},expression:"editedItem.phoneNumber"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",small:""},on:{click:t.close}},[t._v("\n              "+t._s(t.$t("label.button.btncancel"))+"\n            ")]),t._v(" "),n("v-btn",{attrs:{color:"warning",small:""},on:{click:t.save}},[t._v("\n              "+t._s(t.$t("label.button.btnsave"))+"\n            ")])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"500px",color:"red"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"subhead-1 pa-4"},[t._v("\n            "+t._s(t.$t("label.dialogs.deleteconfirmdialog")))]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary","x-small":""},on:{click:t.closeDelete}},[t._v(t._s(t.$t("label.button.btnno")))]),t._v(" "),n("v-btn",{attrs:{color:"warning","x-small":""},on:{click:t.deleteItemConfirm}},[t._v(t._s(t.$t("label.button.btnyes")))]),t._v(" "),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var o=e.item;return[o.isActive?n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[n("v-icon",t._g(t._b({attrs:{color:"warning",small:""},on:{click:function(e){return t.activateItem(o.id)}}},"v-icon",r,!1),l),[t._v("\n          mdi-circle\n        ")])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(t.$t("label.tooltip.active")))])]):n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,r=e.attrs;return[n("v-icon",t._g(t._b({attrs:{small:""},on:{click:function(e){return t.activateItem(o.id)}}},"v-icon",r,!1),l),[t._v("\n          mdi-power\n        ")])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(t.$t("label.tooltip.activate")))])]),t._v(" "),n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(o)}}},[t._v("\n      mdi-pencil\n    ")]),t._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(o)}}},[t._v("\n      mdi-delete\n    ")])]}},{key:"item.isActive",fn:function(e){return[e.item.isActive?n("v-icon",{staticClass:" font-weight-black",attrs:{color:"primary"}},[t._v("\n      mdi-check\n    ")]):t._e()]}},{key:"no-data",fn:function(){return[n("p",[t._v("No Data available")])]},proxy:!0}],null,!0)})}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:_.a,VCard:h.a,VCardActions:I.a,VCardText:I.c,VCardTitle:I.d,VCol:x.a,VContainer:k.a,VDataTable:y.a,VDialog:O.a,VIcon:w.a,VRow:D.a,VSpacer:$.a,VTextField:j.a,VToolbar:V.a,VToolbarTitle:C.b,VTooltip:T.a})}}]);