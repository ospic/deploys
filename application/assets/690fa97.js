(window.webpackJsonp=window.webpackJsonp||[]).push([[65,45],{581:function(t,e,n){"use strict";var r=n(106);e.a=r.a},596:function(t,e,n){var content=n(597);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("83ff91dc",content,!0,{sourceMap:!1})},597:function(t,e,n){var r=n(14)(!1);r.push([t.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),t.exports=r},600:function(t,e,n){"use strict";(function(t){e.a={props:{reports:{type:Array,default:null},title:{type:String,default:"Reports"}},data:function(){return{response_url:null,response_data:null,search:"",dialog:!1,currentFile:void 0,publicPath:t.env.BASE_URL,headers:[{text:"ID",value:"id"},{text:"Report Name",value:"name"},{text:"Description",value:"descriptions"}]}},methods:{handle_row_click:function(i){this.$router.push("/reports/"+i.id)},filechanged:function(t){this.progress=0,this.currentFile=t},uploadreport:function(){this.dialog=!1;var t=new FormData;t.append("file",this.currentFile),this.$store.dispatch("uploadreport",t),this.$store.dispatch("get_reports")}},mounted:function(){this.$store.dispatch("get_reports")},computed:{reportUrl:function(){return this}}}}).call(this,n(262))},632:function(t,e,n){"use strict";n(10),n(7),n(6),n(11),n(12);var r=n(26),l=n(0),o=n(21),c=(n(18),n(36),n(38),n(30),n(25),n(107),n(9),n(40),n(596),n(581)),h=n(249),d=n(1),f=n(8),v=n(37);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(d.I)(t).every((function(t){return null!=t&&"object"===Object(o.a)(t)}))}}},computed:{classes:function(){return _(_({},c.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size;return t+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(d.w)(e,1024===this.base))},internalArrayValue:function(){return Object(d.I)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var n=e.name,r=void 0===n?"":n,l=e.size,o=void 0===l?0:l,c=t.truncateText(r);return t.showSize?"".concat(c," (").concat(Object(d.w)(o,1024===t.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(f.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(d.j)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement(h.a,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genControl:function(){var t=c.a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(v.d)(t.data.style,{display:"none"})),t},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,r){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[r],file:n,index:r}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=c.a.options.methods.genTextFieldSlot.call(this);return e.data.on=_(_({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(r.a)(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},653:function(t,e,n){"use strict";n.r(e);var r=n(600).a,l=n(44),o=n(49),c=n.n(o),h=n(146),d=n(238),f=n(87),v=n(577),m=n(568),_=n(579),y=n(566),x=n(242),O=n(632),w=n(126),S=n(240),j=n(570),V=n(106),C=n(71),$=n(88),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"mx-auto"},[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[n("v-toolbar-title",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{staticClass:"mt-3",attrs:{cols:"12",md:"3"}},[n("v-text-field",{attrs:{"append-icon":"search",label:"Search report by name/desc",outlined:"",rounded:"","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){e.on,e.attrs;return[t._e(),t._v(" "),t._e()]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2"},[t._v("\n            Upload new report ?\n          ")]),t._v(" "),n("v-card-text",[n("v-file-input",{attrs:{"show-size":"","small-chips":"",accept:".jrxml","truncate-length":"50"},on:{change:t.filechanged}})],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",small:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n              No Deny\n            ")]),t._v(" "),n("v-btn",{attrs:{color:"warning",small:""},on:{click:t.uploadreport}},[t._v("\n              Yes Upload\n            ")])],1)],1)],1)],1),t._v(" "),n("v-card-text",{staticClass:"ma-0 pa-0"},[n("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[null===t.reports?n("v-progress-circular",{staticClass:"ma-4",attrs:{value:"20","buffer-value":"0",stream:"",indeterminate:"",color:"button"}}):n("v-data-table",{staticClass:"default",attrs:{dense:"",headers:t.headers,items:t.reports,search:t.search,"mobile-breakpoint":"100"},on:{"click:row":t.handle_row_click}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VCard:d.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VCol:v.a,VContainer:m.a,VDataTable:_.a,VDialog:y.a,VDivider:x.a,VFileInput:O.a,VIcon:w.a,VProgressCircular:S.a,VSpacer:j.a,VTextField:V.a,VToolbar:C.a,VToolbarTitle:$.b})},833:function(t,e,n){"use strict";n.r(e);n(10),n(7),n(6),n(11),n(9),n(12);var r=n(0),l=n(653),o=n(77);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{"report-component":l.default},mounted:function(){this.$store.dispatch("get_financial_reports")},computed:h(h({},Object(o.b)({reports:"financialreports"})),{},{reportUrl:function(){return this}})},f=n(44),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"breadcrumb "},[n("router-link",{attrs:{to:"/finance"}},[t._v(t._s(t.$t("label.breadcrumb.dashboard")))]),t._v(" "),n("router-link",{attrs:{to:"/finance"}},[t._v(t._s(t.$t("label.breadcrumb.finance")))]),t._v(" "),n("router-link",{staticClass:"active",attrs:{to:"/finance/reports"}},[t._v(t._s(t.$t("label.breadcrumb.financialreports")))])],1),t._v(" "),n("report-component",{attrs:{reports:t.reports,title:"Financial Reports"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);