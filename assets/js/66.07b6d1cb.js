(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{421:function(t,e,l){"use strict";l.r(e);var v=l(44),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h3",{attrs:{id:"webpack常用的优化方法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#webpack常用的优化方法"}},[t._v("#")]),t._v(" webpack常用的优化方法")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("js 压缩")])]),t._v(" "),l("li",[l("p",[t._v("css压缩")])]),t._v(" "),l("li",[l("p",[t._v("图片压缩")])]),t._v(" "),l("li",[l("p",[t._v("拆分代码")])]),t._v(" "),l("li",[l("p",[t._v("去除无用的样式")])]),t._v(" "),l("li",[l("p",[t._v("动态添加CDN")])])]),t._v(" "),l("p",[t._v("在html文件中引入cdn文件，在webpack配置externals，这样就不会打包引入的cdn的库")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("懒加载")])]),t._v(" "),l("li",[l("p",[t._v("忽略打包第三方模块")])]),t._v(" "),l("li",[l("p",[t._v("DllPlugin动态链接库")])])]),t._v(" "),l("p",[t._v("在第一次打包的时候就把打包用到的开发框架直接打包好，然后会生成一个manifest.json文件\n再打包的时候，只要有import React from 'react'这样的引用，它就会先去所谓的缓存文件里找，找到了就直接用，也不用再进行对react打包了")])])}),[],!1,null,null,null);e.default=_.exports}}]);