(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{377:function(e,t,a){"use strict";a.r(t);var i=a(44),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"浏览器的缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的缓存机制"}},[e._v("#")]),e._v(" 浏览器的缓存机制")]),e._v(" "),a("blockquote",[a("p",[e._v("浏览器缓存机制有两种，一种为强缓存，一种为协商缓存")])]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("强缓存")]),e._v("：浏览器在第一次请求的时候，会直接下载资源，然后缓存在本地，第二次请求的时候，直接使用缓存。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("协商缓存")]),e._v("：第一次请求缓存且保存缓存标识与时间，重复请求向服务器发送缓存标识和最后缓存时间，服务端进行校验，如果失效则使用缓存")])])]),e._v(" "),a("h4",{attrs:{id:"协商缓存相关设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存相关设置"}},[e._v("#")]),e._v(" 协商缓存相关设置")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("Exprires")]),e._v("：服务端的响应头，第一次请求的时候，告诉客户端，该资源什么时候会过期。Exprires的缺陷是必须保证服务端时间和客户端时间严格同步。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Cache-control：max-age")]),e._v("：表示该资源多少时间后过期，解决了客户端和服务端时间必须同步的问题，")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("If-None-Match/ETag")]),e._v("：缓存标识，对比缓存时使用它来标识一个缓存，第一次请求的时候，服务端会返回该标识给客户端，客户端在第二次请求的时候会带上该标识与服务端进行对比并返回If-None-Match标识是否表示匹配。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Last-modified/If-Modified-Since")]),e._v("：第一次请求的时候服务端返回Last-modified表明请求的资源上次的修改时间，第二次请求的时候客户端带上请求头If-Modified-Since，表示资源上次的修改时间，服务端拿到这两个字段进行对比")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);