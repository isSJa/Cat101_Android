"use strict";(self["webpackChunkcat101_pre"]=self["webpackChunkcat101_pre"]||[]).push([[234],{8234:function(t,s,a){a.r(s),a.d(s,{default:function(){return l}});var e=function(){var t=this,s=t._self._c;return s("div",[s("el-row",{attrs:{gutter:20}},t._l(t.catsALL,(function(a){return s("div",{key:a.cid},[s("el-col",{attrs:{span:11}},[s("div",{staticClass:"grid-content"},[s("el-image",{attrs:{src:a.curl},on:{click:function(s){return t.turnInto(a.cid)}}}),s("div",{staticClass:"title"},[t._v(t._s(a.cname))]),s("div",{staticClass:"status"},[t._v(t._s(a.ccolor))]),s("div",{staticClass:"content"},[t._v(t._s(a.cinfo))])],1)])],1)})),0)],1)},c=[],n=(a(7658),a(586)),r={name:"myUser",data(){return{catNum:0,catsALL:[]}},methods:{indexs:async function(){const{data:t}=await(0,n.rI)(JSON.parse(localStorage.getItem("user")).uid);"200"===t.code?(this.catNum=t.data.length,this.catsALL=t.data):this.$message.error(t.msg)},async turnInto(t){const{data:s}=await(0,n.Zf)(t);"200"===s.code?(localStorage.setItem("cat",JSON.stringify(s.data)),this.$router.push("/layout/info")):this.$message.error(s.msg)}},created:async function(t){this.indexs()}},i=r,o=a(1001),u=(0,o.Z)(i,e,c,!1,null,"6a264b5d",null),l=u.exports}}]);
//# sourceMappingURL=234.eacc1f89.js.map