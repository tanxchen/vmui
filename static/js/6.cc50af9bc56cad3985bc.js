webpackJsonp([6],{NAEn:function(t,o){},mS0A:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={name:"",data:function(){return{}},methods:{showToast:function(){var t=this;this.$dialog.alert({title:"",message:"测试~~message",onConfirm:function(){console.log("点击了alert确认按钮"),t.$dialog.hide()}})},showToastsuccess:function(){var t=this;this.$dialog.confirm({title:"测试~~标题",message:"测试~~message",onConfirm:function(){console.log("点击了confirm确认按钮"),t.$dialog.hide()},onCancel:function(){console.log("点击了confirm取消按钮"),t.$dialog.hide()}})}}},s={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"demo-page-wrap"},[e("h4",[t._v("alert")]),t._v(" "),e("sq-button",{attrs:{type:"primary"},on:{click:t.showToast}},[t._v("alert")]),t._v(" "),e("h4",[t._v("confirm")]),t._v(" "),e("sq-button",{attrs:{type:"primary"},on:{click:t.showToastsuccess}},[t._v("confirm")])],1)},staticRenderFns:[]};var a=e("VU/8")(n,s,!1,function(t){e("NAEn")},"data-v-c22268d6",null);o.default=a.exports}});
//# sourceMappingURL=6.cc50af9bc56cad3985bc.js.map