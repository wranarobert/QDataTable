(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"3d46":function(t,e,o){"use strict";o.r(e);var r,n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",[o("div",{staticClass:"q-pa-md"},[t._v("\n    For smaller screens rows are turned to cards and adding/editing is\n    implemented with dialogs.\n  ")]),o("q-data-table",{ref:"table",attrs:{title:"Treats",data:t.data,columns:t.columns,grid:t.$q.screen.lt.lg,selection:"multiple",selected:t.selected},on:{"update:selected":function(e){t.selected=e},submitNew:t.submitAdd,submitEdit:t.submitEdit,deleteRow:t.deleteRow},scopedSlots:t._u([{key:"top-right",fn:function(){return[o("q-btn",{attrs:{color:"primary",label:"Add row"},on:{click:t.openAddForm}})]},proxy:!0},{key:"expanded-row-body",fn:function(){return[t._v("\n      Test expanded row\n    ")]},proxy:!0}])})],1)},a=[],i=o("60a3"),c=o("1732"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("q-table",t._g(t._b({attrs:{"row-key":t.rowKey,columns:t.columns,grid:t.grid,selected:t.selected},scopedSlots:t._u([t.isAddFormRow?{key:"top-row",fn:function(e){return[o("dt-form-row",{key:"addForm",attrs:{selectable:t.selectable,formData:t.getNewFormData(),tableProps:e},on:{"update:formData":t.updateNewFormRow,"watch:formData":t.watchNewFormData,submit:t.submitNewRow,cancel:t.closeNewFormRow},scopedSlots:t._u([t._l(t.formRowSlots,(function(e,o){return{key:o,fn:function(e){return[t._t(o,null,null,e)]}}}))],null,!0)})]}}:null,{key:"body",fn:function(e){return[t.isEditFormRow(e.row)?o("dt-form-row",{attrs:{selectable:t.selectable,formData:t.getEditFormData(e.row),tableProps:e},on:{"update:formData":t.updateEditFormRow,"watch:formData":t.watchEditFormData,submit:t.submitEditRow,cancel:t.closeEditFormRow},scopedSlots:t._u([t._l(t.formRowSlots,(function(e,o){return{key:o,fn:function(e){return[t._t(o,null,null,e)]}}}))],null,!0)}):o("dt-view-row",{attrs:{selectable:t.selectable,tableProps:e},on:{openForm:t.openEditFormRow,deleteRow:t.deleteRow},scopedSlots:t._u([t._l(t.viewRowSlots,(function(e,o){return{key:o,fn:function(e){return[t._t(o,null,null,e)]}}}))],null,!0)}),o("dt-expanded-row",{attrs:{tableProps:e},scopedSlots:t._u([t._l(t.expandedRowSlots,(function(e,o){return{key:o,fn:function(e){return[t._t(o,null,null,e)]}}}))],null,!0)})]}},{key:"item",fn:function(e){return[o("dt-view-card",{attrs:{selectable:t.selectable,tableProps:e},on:{openForm:t.openEditFormRow,deleteRow:t.deleteRow},scopedSlots:t._u([t._l(t.viewRowSlots,(function(e,o){return{key:o,fn:function(e){return[t._t(o,null,null,e)]}}}))],null,!0)}),o("dt-form-dialog",{attrs:{value:t.isEditFormRow(e.row),formData:t.getEditFormData(e.row),tableProps:e},on:{submit:t.submitEditRow,"update:formData":t.updateEditFormRow,"watch:formData":t.watchEditFormData,cancel:t.closeEditFormRow}})]}},t._l(t.qTableSlots,(function(e,o){return{key:o,fn:function(e){return[t._t(o,null,null,e)]}}}))],null,!0)},"q-table",t.$attrs,!1),t.$listeners)),o("dt-form-dialog",{attrs:{value:t.grid&&t.isAddFormRow,formData:t.getNewFormData(),tableProps:{cols:t.columns}},on:{"update:formData":t.updateNewFormRow,"watch:formData":t.watchNewFormData,submit:t.submitNewRow,cancel:t.closeNewFormRow}})],1)},s=[],u=o("eaac"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-tr",{attrs:{props:t.tableProps}},[t.selectable?o("q-td",{attrs:{"auto-width":""}},[o("q-checkbox",{attrs:{dense:t.tableProps.dense},model:{value:t.tableProps.selected,callback:function(e){t.$set(t.tableProps,"selected",e)},expression:"tableProps.selected"}})],1):t._e(),t._l(t.tableProps.cols,(function(e){return o("q-td",{key:e.name,attrs:{props:t.tableProps}},["expand"===e.name?[o("q-btn",{attrs:{size:"sm",round:"",dense:t.tableProps.dense,icon:t.tableProps.expand?"remove":"add"},on:{click:function(e){t.tableProps.expand=!t.tableProps.expand}}})]:t._e(),"actions"===e.name?[t._t(t.ViewRowNamespace.slotNamePrepend(e.name),null,null,t.tableProps),t._t(t.ViewRowNamespace.slotName(e.name),[!e.edit||e.edit&&e.edit.show?o("q-btn",{attrs:{round:"",size:"sm",icon:"edit",dense:""},on:{click:function(e){return t.$emit("openForm",t.tableProps.row)}}}):t._e(),o("q-btn",{attrs:{round:"",size:"sm",color:"negative",icon:"delete",dense:""},on:{click:function(e){return t.$emit("deleteRow",t.tableProps.row)}}})],null,t.tableProps),t._t(t.ViewRowNamespace.slotNameAppend(e.name),null,null,t.tableProps)]:[t.hasCellSlot?t._t(t.ViewRowNamespace.slotName("cell"),null,null,e):t._t(t.ViewRowNamespace.slotName(e.name),[t._v("\n        "+t._s(e.value)+"\n      ")],null,t.tableProps)]],2)}))],2)},f=[],d=o("bd08"),m=o("db86");(function(t){t["ViewRow"]="view-row",t["ViewCard"]="view-card",t["FormRow"]="form-row",t["ExpandedRow"]="expanded-row"})(r||(r={}));var b=function(){function t(t){this.slotNamespace=t}return t.prototype.slot=function(){return this.slotNamespace},t.prototype.slotName=function(t){return this.slotNamespace+"-"+t},t.prototype.slotNamePrepend=function(t){return this.slotNamespace+"-"+t+"-prepend"},t.prototype.slotNameAppend=function(t){return this.slotNamespace+"-"+t+"-append"},t}(),y=new b(r.ViewRow),w=new b(r.ViewCard),h=new b(r.FormRow),v=new b(r.ExpandedRow),_=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),g=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},O=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return _(e,t),Object.defineProperty(e.prototype,"hasCellSlot",{get:function(){return Object.keys(this.$scopedSlots).some((function(t){return t.endsWith("cell")}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ViewRowNamespace",{get:function(){return y},enumerable:!1,configurable:!0}),g([Object(i["c"])({default:!1})],e.prototype,"selectable",void 0),g([Object(i["c"])({required:!0})],e.prototype,"tableProps",void 0),e=g([Object(i["a"])({components:{QTr:d["a"],QTd:m["a"]}})],e),e}(i["d"]),R=O,j=R,P=o("2877"),F=o("8f8e"),D=o("9c40"),q=o("eebe"),x=o.n(q),S=Object(P["a"])(j,p,f,!1,null,null,null),N=S.exports;x()(S,"components",{QTr:d["a"],QTd:m["a"],QCheckbox:F["a"],QBtn:D["a"]});var E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:t.tableProps.selected?"transform: scale(0.95);":""},[o("q-card",{class:t.tableProps.selected?"bg-grey-2":""},[o("q-card-actions",{staticClass:"bg-grey-3 q-px-md"},[t.selectable?o("q-checkbox",{attrs:{dense:""},model:{value:t.tableProps.selected,callback:function(e){t.$set(t.tableProps,"selected",e)},expression:"tableProps.selected"}}):t._e(),o("q-space"),o("q-btn",{attrs:{round:"",size:"sm",icon:"edit",dense:""},on:{click:function(e){return t.$emit("openForm",t.tableProps.row)}}}),o("q-btn",{attrs:{round:"",size:"sm",color:"negative",icon:"delete",dense:""},on:{click:function(e){return t.$emit("deleteRow",t.tableProps.row)}}})],1),o("q-separator"),o("q-card-section",{staticClass:"q-pa-xs"},[o("q-list",{attrs:{dense:""}},t._l(t.dataColumns(t.tableProps),(function(e){return o("q-item",{key:e.name},[o("q-item-section",[o("q-item-label",[t._v(t._s(e.label))])],1),o("q-item-section",{attrs:{side:""}},[o("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.value))])],1)],1)})),1)],1)],1)],1)},$=[],k=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),C=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},Q=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return k(e,t),Object.defineProperty(e.prototype,"ViewCardNamespace",{get:function(){return w},enumerable:!1,configurable:!0}),e.prototype.dataColumns=function(t){return t.cols.filter((function(t){return"actions"!==t.name&&"expand"!==t.name}))},C([Object(i["c"])({default:!1})],e.prototype,"selectable",void 0),C([Object(i["c"])({required:!0})],e.prototype,"tableProps",void 0),e=C([i["a"]],e),e}(i["d"]),T=Q,A=T,I=o("f09f"),V=o("4b7e"),K=o("2c91"),z=o("eb85"),B=o("a370"),L=o("1c1c"),W=o("66e5"),J=o("4074"),G=o("0170"),M=Object(P["a"])(A,E,$,!1,null,null,null),Y=M.exports;x()(M,"components",{QCard:I["a"],QCardActions:V["a"],QCheckbox:F["a"],QSpace:K["a"],QBtn:D["a"],QSeparator:z["a"],QCardSection:B["a"],QList:L["a"],QItem:W["a"],QItemSection:J["a"],QItemLabel:G["a"]});var H,U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-tr",{attrs:{props:t.tableProps}},[t.selectable?o("q-td",{attrs:{"auto-width":""}}):t._e(),t._l(t.tableProps.cols,(function(e){return o("q-td",{key:e.name,class:{"text-center":"actions"===e.name},attrs:{props:t.tdProps}},[t._t(t.FormRowNamespace.slotName(e.name),["actions"===e.name?[o("q-btn",{attrs:{dense:"",round:"",size:"sm",color:"positive",icon:"check",loading:t.loading,disabled:t.loading},on:{click:t.submit}}),o("q-btn",{attrs:{dense:"",round:"",size:"sm",color:"negative",icon:"clear"},on:{click:t.cancel}})]:e.form?[o(t.inputComponent(e.form.type),t._b({ref:"formInput",refInFor:!0,tag:"component",attrs:{value:t.formData[e.field]},on:{input:function(o){return t.changeFormData(e.field,o)}}},"component",e.form.attributes,!1))]:[o("div",[t._v("\n          "+t._s(t.formData[e.field])+"\n        ")])]],{props:t.tableProps})],2)}))],2)},X=[];(function(t){t["Input"]="input",t["Select"]="select",t["DateTime"]="date-time"})(H||(H={}));var Z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-input",t._g(t._b({ref:"input",attrs:{dense:""}},"q-input",t.$attrs,!1),t.$listeners))},tt=[],et=o("27f9"),ot=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),rt=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},nt=function(t,e,o,r){function n(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,a){function i(t){try{l(r.next(t))}catch(e){a(e)}}function c(t){try{l(r["throw"](t))}catch(e){a(e)}}function l(t){t.done?o(t.value):n(t.value).then(i,c)}l((r=r.apply(t,e||[])).next())}))},at=function(t,e){var o,r,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(t){return function(e){return l([t,e])}}function l(a){if(o)throw new TypeError("Generator is already executing.");while(i)try{if(o=1,r&&(n=2&a[0]?r["return"]:a[0]?r["throw"]||((n=r["return"])&&n.call(r),0):r.next)&&!(n=n.call(r,a[1])).done)return n;switch(r=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(n=i.trys,!(n=n.length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(c){a=[6,c],r=0}finally{o=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},it=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return ot(e,t),e.prototype.validate=function(){return nt(this,void 0,Promise,(function(){var t;return at(this,(function(e){return t=this.$refs.input.validate(),t instanceof Promise?[2,t.then((function(t){return t||Promise.reject()}))]:t?[2,Promise.resolve()]:[2,Promise.reject()]}))}))},e=rt([i["a"]],e),e}(i["d"]),ct=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),lt=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},st=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return ct(e,t),e=lt([Object(i["a"])({components:{QInput:et["a"]}})],e),e}(Object(i["b"])(it)),ut=st,pt=ut,ft=Object(P["a"])(pt,Z,tt,!1,null,null,null),dt=ft.exports;function mt(t){if(!t)throw new Error("Missing type parameter.");switch(console.log(t),t){case H.Input:return dt;default:return null}}x()(ft,"components",{QInput:et["a"]});var bt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-select",t._g(t._b({ref:"input",attrs:{"map-options":"","emit-value":"","option-value":t.optionValue,"option-label":t.optionLabel,options:t.list,value:t.value,dense:""}},"q-select",t.$attrs,!1),t.$listeners))},yt=[],wt=o("ddd8"),ht=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),vt=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},_t=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.list=[],e}return ht(e,t),e=vt([Object(i["a"])({components:{QSelect:wt["a"]}})],e),e}(Object(i["b"])(it)),gt=_t,Ot=gt,Rt=Object(P["a"])(Ot,bt,yt,!1,null,null,null),jt=Rt.exports;x()(Rt,"components",{QSelect:wt["a"]});var Pt=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),Ft=function(){return Ft=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o],e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},Ft.apply(this,arguments)},Dt=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},qt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loading=!1,e}return Pt(e,t),Object.defineProperty(e.prototype,"FormRowNamespace",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isTopRow",{get:function(){return 1===Object.keys(this.tableProps).length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tdProps",{get:function(){return this.isTopRow?void 0:this.tableProps},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isSelectable",{get:function(){return void 0!==this.tableProps.selected},enumerable:!1,configurable:!0}),e.prototype.inputComponent=function(t){return mt(t)},e.prototype.submit=function(){var t=this,e=this.$refs.formInput;e&&Array.isArray(e)&&(this.loading=!0,Promise.all(e.map((function(t){return t.validate()}))).then((function(){t.$emit("submit",t.formData)})).catch((function(t){return t})).finally((function(){t.loading=!1})))},e.prototype.cancel=function(){this.$emit("cancel",this.formData)},e.prototype.changeFormData=function(t,e){var o=this.createFormData(t,e);this.$emit("update:formData",o),this.$emit("watch:formData",{field:t,formData:o})},e.prototype.createFormData=function(t,e){var o;return Ft(Ft({},this.formData),(o={},o[t]=e,o))},Dt([Object(i["c"])({default:!1})],e.prototype,"selectable",void 0),Dt([Object(i["c"])({required:!0})],e.prototype,"formData",void 0),Dt([Object(i["c"])({required:!0})],e.prototype,"tableProps",void 0),e=Dt([Object(i["a"])({components:{QTr:d["a"],QTd:m["a"],DtInput:dt,DtSelect:jt}})],e),e}(i["d"]),xt=qt,St=xt,Nt=Object(P["a"])(St,U,X,!1,null,null,null),Et=Nt.exports;x()(Nt,"components",{QTr:d["a"],QTd:m["a"],QBtn:D["a"]});var $t=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-tr",{directives:[{name:"show",rawName:"v-show",value:t.tableProps.expand,expression:"tableProps.expand"}],attrs:{props:t.tableProps}},[o("q-td",{attrs:{colspan:"100%"}},[t._t(t.ExpandedRowNamespace.slotName("body"),null,null,t.tableProps)],2)],1)},kt=[],Ct=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),Qt=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},Tt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Ct(e,t),Object.defineProperty(e.prototype,"ExpandedRowNamespace",{get:function(){return v},enumerable:!1,configurable:!0}),Qt([Object(i["c"])({required:!0})],e.prototype,"tableProps",void 0),e=Qt([Object(i["a"])({components:{QTr:d["a"],QTd:m["a"]}})],e),e}(i["d"]),At=Tt,It=At,Vt=Object(P["a"])(It,$t,kt,!1,null,null,null),Kt=Vt.exports;x()(Vt,"components",{QTr:d["a"],QTd:m["a"]});var zt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-dialog",t._g(t._b({attrs:{persistent:""}},"q-dialog",t.$attrs,!1),t.$listeners),[o("q-card",{staticStyle:{"min-width":"350px"}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("Edit")])]),o("q-card-section",{staticClass:"q-pt-none"},[o("q-list",{attrs:{dense:""}},t._l(t.dataColumns(t.tableProps),(function(e){return o("q-item",{key:e.name},[o("q-item-section",[o("q-item-label",[t._v(t._s(e.label))])],1),o("q-item-section",{attrs:{side:""}},[e.form?[o(t.inputComponent(e.form.type),t._b({ref:"formInput",refInFor:!0,tag:"component",attrs:{value:t.formData[e.field]},on:{input:function(o){return t.changeFormData(e.field,o)}}},"component",e.form.attributes,!1))]:[o("div",[t._v("\n                "+t._s(t.formData[e.field])+"\n              ")])]],2)],1)})),1)],1),o("q-card-actions",{staticClass:"text-primary"},[o("q-btn",{attrs:{flat:"",label:"Cancel"},on:{click:t.cancel}}),o("q-space"),o("q-btn",{attrs:{flat:"",label:"Submit"},on:{click:t.submit}})],1)],1)],1)},Bt=[],Lt=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),Wt=function(){return Wt=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o],e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},Wt.apply(this,arguments)},Jt=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},Gt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loading=!1,e}return Lt(e,t),e.prototype.inputComponent=function(t){return mt(t)},e.prototype.dataColumns=function(t){return t.cols.filter((function(t){return"actions"!==t.name&&"expand"!==t.name}))},e.prototype.submit=function(){var t=this,e=this.$refs.formInput;e&&Array.isArray(e)&&(this.loading=!0,Promise.all(e.map((function(t){return t.validate()}))).then((function(){t.$emit("submit",t.formData)})).catch((function(t){return t})).finally((function(){t.loading=!1})))},e.prototype.cancel=function(){this.$emit("cancel",this.formData)},e.prototype.changeFormData=function(t,e){var o=this.createFormData(t,e);this.$emit("update:formData",o),this.$emit("watch:formData",{field:t,formData:o})},e.prototype.createFormData=function(t,e){var o;return Wt(Wt({},this.formData),(o={},o[t]=e,o))},Jt([Object(i["c"])({required:!0,default:function(){return{}}})],e.prototype,"formData",void 0),Jt([Object(i["c"])({required:!0})],e.prototype,"tableProps",void 0),e=Jt([i["a"]],e),e}(i["d"]),Mt=Gt,Yt=Mt,Ht=o("24e8"),Ut=Object(P["a"])(Yt,zt,Bt,!1,null,null,null),Xt=Ut.exports;x()(Ut,"components",{QDialog:Ht["a"],QCard:I["a"],QCardSection:B["a"],QList:L["a"],QItem:W["a"],QItemSection:J["a"],QItemLabel:G["a"],QCardActions:V["a"],QBtn:D["a"],QSpace:K["a"]});var Zt=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),te=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},ee=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Zt(e,t),Object.defineProperty(e.prototype,"viewRowSlotNames",{get:function(){return Object.keys(this.$scopedSlots).filter((function(t){return t.startsWith(r.ViewRow)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"formRowSlotNames",{get:function(){return Object.keys(this.$scopedSlots).filter((function(t){return t.startsWith(r.FormRow)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"expandedRowSlotNames",{get:function(){return Object.keys(this.$scopedSlots).filter((function(t){return t.startsWith(r.ExpandedRow)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"qTableSlotNames",{get:function(){var t=this;return Object.keys(this.$scopedSlots).filter((function(e){return!t.viewRowSlotNames.includes(e)&&!t.formRowSlotNames.includes(e)&&!t.expandedRowSlotNames.includes(e)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"viewRowSlots",{get:function(){var t=this;return this.viewRowSlotNames.reduce((function(e,o){return e[o]=t.$scopedSlots[o],e}),{})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"formRowSlots",{get:function(){var t=this;return this.formRowSlotNames.reduce((function(e,o){return e[o]=t.$scopedSlots[o],e}),{})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"expandedRowSlots",{get:function(){var t=this;return this.expandedRowSlotNames.reduce((function(e,o){return e[o]=t.$scopedSlots[o],e}),{})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"qTableSlots",{get:function(){var t=this;return this.qTableSlotNames.reduce((function(e,o){return e[o]=t.$scopedSlots[o],e}),{})},enumerable:!1,configurable:!0}),e=te([i["a"]],e),e}(i["d"]),oe=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),re=function(){return re=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o],e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},re.apply(this,arguments)},ne=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},ae="__create",ie=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.formRows={},e}return oe(e,t),Object.defineProperty(e.prototype,"isAddFormRow",{get:function(){return ae in this.formRows},enumerable:!1,configurable:!0}),e.prototype.rowKeyValue=function(t){return console.log(this.rowKey,typeof this.rowKey),"function"===typeof this.rowKey?this.rowKey(t):t[this.rowKey]},e.prototype.isEditFormRow=function(t){var e=this.rowKeyValue(t);return e in this.formRows},e.prototype.getNewFormData=function(){var t=ae;return this.formRows[t]},e.prototype.getEditFormData=function(t){var e=this.rowKeyValue(t);return this.formRows[e]},e.prototype.openNewFormRow=function(t){var e=ae;this._createFormRow(e,t)},e.prototype.openEditFormRow=function(t){var e=this.rowKeyValue(t);this._createFormRow(e,t)},e.prototype.updateNewFormRow=function(t){var e=ae;this._editFormRow(e,t)},e.prototype.updateEditFormRow=function(t){var e=this.rowKeyValue(t);this._editFormRow(e,t)},e.prototype.closeNewFormRow=function(){var t=ae;this._deleteFormRow(t)},e.prototype.closeEditFormRow=function(t){var e=this.rowKeyValue(t);this._deleteFormRow(e)},e.prototype._createFormRow=function(t,e){this.formRows[t]||this.$set(this.formRows,t,e)},e.prototype._editFormRow=function(t,e){this.formRows[t]&&(this.formRows[t]=e)},e.prototype._deleteFormRow=function(t){this.formRows[t]&&this.$delete(this.formRows,t)},e.prototype.watchNewFormData=function(t){this.$emit("watch:form",re(re({},t),{isAddForm:!0}))},e.prototype.watchEditFormData=function(t){this.$emit("watch:form",re(re({},t),{isAddForm:!1}))},ne([Object(i["c"])({default:"id"})],e.prototype,"rowKey",void 0),e=ne([i["a"]],e),e}(i["d"]),ce=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),le=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},se=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return ce(e,t),Object.defineProperty(e.prototype,"selectable",{get:function(){return void 0!==this.selected},enumerable:!1,configurable:!0}),e.prototype.submitNewRow=function(t){console.log("submitNew",t),this.$emit("submitNew",t)},e.prototype.submitEditRow=function(t){console.log("submitEdit",t),this.$emit("submitEdit",t)},e.prototype.deleteRow=function(t){console.log("deleteRow",t),this.$emit("deleteRow",t)},le([Object(i["c"])({default:"id"})],e.prototype,"rowKey",void 0),le([Object(i["c"])({required:!0})],e.prototype,"columns",void 0),le([Object(i["c"])()],e.prototype,"grid",void 0),le([Object(i["c"])()],e.prototype,"selected",void 0),e=le([Object(i["a"])({components:{QTable:u["a"],DtViewRow:N,DtViewCard:Y,DtFormRow:Et,DtFormDialog:Xt,DtExpandedRow:Kt},inheritAttrs:!1})],e),e}(Object(i["b"])(ee,ie)),ue=se,pe=ue,fe=Object(P["a"])(pe,l,s,!1,null,null,null),de=fe.exports;x()(fe,"components",{QTable:u["a"]});var me=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),be=function(){return be=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o],e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},be.apply(this,arguments)},ye=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i},we=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.selected=[],e.columns=[{name:"expand",align:"center"},{name:"name",required:!0,label:"Dessert (100g serving)",align:"left",field:"name",sortable:!0,form:{type:"input",attributes:{placeholder:"Enter a treat name"}}},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0,form:{type:"input",attributes:{type:"number",min:0}}},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0},{name:"carbs",label:"Carbs (g)",field:"carbs"},{name:"protein",label:"Protein (g)",field:"protein"},{name:"sodium",label:"Sodium (mg)",field:"sodium"},{name:"calcium",label:"Calcium (%)",field:"calcium",sortable:!0},{name:"iron",label:"Iron (%)",field:"iron",sortable:!0},{name:"actions",align:"center"}],e.data=[{id:1,name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{id:2,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"}],e}return me(e,t),Object.defineProperty(e.prototype,"tableRef",{get:function(){return this.$refs.table},enumerable:!1,configurable:!0}),e.prototype.openAddForm=function(){this.tableRef.openNewFormRow({name:"",calories:0,fat:0,carbs:0,protein:0,sodium:0,calcium:0,iron:0})},e.prototype.submitAdd=function(t){this.data.push(be({id:Object(c["a"])()},t)),this.tableRef.closeNewFormRow()},e.prototype.submitEdit=function(t){var e=this.data.findIndex((function(e){return e.id===t.id}));this.data.splice(e,1,t),this.tableRef.closeEditFormRow(t)},e.prototype.deleteRow=function(t){var e=this;this.$q.dialog({title:"Confirm delete",message:"Would you like to delete this record?",color:"red",cancel:!0,persistent:!0}).onOk((function(){var o=e.data.findIndex((function(e){return e.id===t.id}));e.data.splice(o,1)}))},e=ye([Object(i["a"])({components:{QDataTable:de}})],e),e}(i["d"]),he=we,ve=he,_e=o("9989"),ge=Object(P["a"])(ve,n,a,!1,null,null,null);e["default"]=ge.exports;x()(ge,"components",{QPage:_e["a"],QBtn:D["a"]})}}]);