(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{412:function(t,e,s){"use strict";s.r(e);var r=s(44),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"通过数组下标或者长度无法触发更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过数组下标或者长度无法触发更新"}},[t._v("#")]),t._v(" 通过数组下标或者长度无法触发更新")]),t._v(" "),s("p",[t._v("通过数组下标改变数组元素或者改变数组的length都是无法触发视图更新的。")]),t._v(" "),s("p",[t._v("原因是由于vue2 采用的是 "),s("code",[t._v("Object.definePrototype")]),t._v(" 来实现响应式，未对数组的每一项和长度进行监听，消耗太大。")]),t._v(" "),s("p",[t._v("想要通过下标触发更新有两种方式：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[s("code",[t._v("Vue.set")])])])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("Array.prototype.splice")])])])])]),t._v(" "),s("h4",{attrs:{id:"那为什么使用数组的push、splice、shift等方法触发页面的改变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#那为什么使用数组的push、splice、shift等方法触发页面的改变"}},[t._v("#")]),t._v(" 那为什么使用数组的push、splice、shift等方法触发页面的改变")]),t._v(" "),s("p",[t._v("Vue对数组的这些方法进行了重写（"),s("code",[t._v("函数劫持")]),t._v("）")])])}),[],!1,null,null,null);e.default=a.exports}}]);