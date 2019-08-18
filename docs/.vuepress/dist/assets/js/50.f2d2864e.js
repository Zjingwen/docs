(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{365:function(t,n,e){"use strict";e.r(n);var o=e(38),s=Object(o.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vue的nexttick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue的nexttick","aria-hidden":"true"}},[t._v("#")]),t._v(" vue的nextTick")]),t._v(" "),e("h2",{attrs:{id:"数据变化与模版变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据变化与模版变化","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据变化与模版变化")]),t._v(" "),e("p",[t._v("vue中当数据变化后，模版并非立刻变化，中间有一个rendar过程，可是rendar是异步的。如果要准确获取节点变化后，vue提供了nextTick方法。")]),t._v(" "),e("h2",{attrs:{id:"vue-nexttick和this-nexttick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-nexttick和this-nexttick","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue.nextTick和this.$nextTick")]),t._v(" "),e("p",[t._v("这两个方法的共同点是：")]),t._v(" "),e("ul",[e("li",[t._v("当数据变化时产生callblock")])]),t._v(" "),e("p",[t._v("不同点是：")]),t._v(" "),e("ul",[e("li",[t._v("Vue.nextTick的this是window")]),t._v(" "),e("li",[t._v("this.$nextTick的this是当前上下文")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n\t<meta charset=\"UTF-8\">\n\t<title>vue-nextTick</title>\n\t<script src=\"https://cdn.bootcss.com/vue/2.5.13/vue.js\"><\/script>\n</head>\n<body>\n\t<div id=\"app\">\n\t\t<input type=\"button\" @click=\"onPush\" value=\"onClick\">\n\t\t<br>\n\t\t<span ref='test' v-text=\"content\"></span>\n\t</div>\n\t<input type=\"button\" onclick=\"handle()\" value=\"onClick2\">\n</body>\n<script>\n\tvar vm = new Vue({\n\t\tel:\"#app\",\n\t\tdata:{\n\t\t\tcontent: 'Hello Vue'\n\t\t},\n\t\tmethods:{\n\t\t\tonPush(){\n\t\t\t\tthis.content = this.content == 'Hello World' ? 'Hello Vue' : 'Hello World';\n\n\t\t\t\tconsole.group('methods');\n\t\t\t\tconsole.log(this.$refs.test.innerHTML);\n\t\t\t\tconsole.groupEnd();\n\t\t\t\t\n\t\t\t\tthis.$nextTick(()=>{\n\t\t\t\t\tconsole.group('$nextTick-methods');\n\t\t\t\t\tconsole.log(this.$refs.test.innerHTML);\n\t\t\t\t\tconsole.groupEnd();\n\t\t\t\t})\n\n\t\t\t\tVue.nextTick(function () {\n\t\t\t\t\tconsole.group('nextTick-methods');\n\t\t\t\t\tconsole.log(vm.$refs.test.innerHTML);\n\t\t\t\t\tconsole.groupEnd();\n\t\t\t\t})\n\t\t\t\t\n\t\t\t}\n\t\t},\n\t\tbeforeCreate(){\n\t\t\tVue.nextTick(function () {\n\t\t\t\tconsole.group('nextTick-beforeCreate');\n\t\t  \t\tconsole.log(vm.$refs.test.innerHTML);\n\t\t  \t\tconsole.groupEnd();\n\t\t\t});\n\t\t\tthis.$nextTick(function () {\n\t\t\t\tconsole.group('$nextTick-beforeCreate');\n\t\t  \t\tconsole.log(vm.$refs.test.innerHTML);\n\t\t  \t\tconsole.groupEnd();\n\t\t\t})\n\t\t},\n\t\tmount(){\n\t\t\tthis.$nextTick(()=>{\n\t\t\t\tconsole.group('$nextTick-mount');\n\t\t\t\tconsole.log(this.$refs.test.innerHTML);\n\t\t\t\tconsole.groupEnd();\n\t\t\t})\n\t\t},\n\t\tupdated(){\n\t\t\tconsole.group('updated');\n\t\t\tconsole.log(this.content);\n\t\t\tconsole.groupEnd();\n\t\t},\n\t\tbeforeUpdate(){\n\t\t\tconsole.group('beforeUpdate');\n\t\t\tconsole.log(this.content);\n\t\t\tconsole.groupEnd();\n\t\t}\n\t});\n\n\tVue.nextTick(function () {\n\t\tconsole.group('nextTick');\n\t\tconsole.log(vm.$refs.test.innerHTML);\n\t\tconsole.groupEnd();\n\t});\n\n\tfunction handle(){\n\t\tvm.content = 'Hello World';\n\n\t\tVue.nextTick(function () {\n\t\t\tconsole.group('nextTick-handle');\n\t\t\tconsole.log(vm.$refs.test.innerHTML);\n\t\t\tconsole.groupEnd();\n\t\t});\n\t}\n<\/script>\n</html>\n")])])])])},[],!1,null,null,null);n.default=s.exports}}]);