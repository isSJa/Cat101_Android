"use strict";(self["webpackChunkcat101_pre"]=self["webpackChunkcat101_pre"]||[]).push([[709],{3709:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var i=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"info"},[a("el-image",{attrs:{src:t.apply.curl,"preview-src-list":t.srcList,title:"点击查看猫咪大图"}}),a("div",{staticClass:"msg"},[a("el-tag",{attrs:{type:"info"}},[t._v("猫咪名称")]),a("div",{staticClass:"detail"},[t._v(t._s(t.apply.cname))]),a("el-tag",{attrs:{type:"info"}},[t._v("毛色")]),a("div",{staticClass:"detail"},[t._v(t._s(t.apply.ccolor))]),a("el-tag",{attrs:{type:"info"}},[t._v("猫咪信息")]),a("div",{staticClass:"detail"},[t._v(t._s(t.apply.cinfo))]),a("el-tag",{attrs:{type:"info"}},[t._v("申请原因")]),a("div",{staticClass:"detail"},[t._v(t._s(t.apply.ainfo))]),a("el-tag",{attrs:{type:"info"}},[t._v("申请状态")]),a("div",{staticClass:"detail"},[0==t.apply.cisadopt?a("div",{staticClass:"no"},[t._v("审核不通过~")]):1==t.apply.cisadopt?a("div",{staticClass:"wait"},[t._v("审核中")]):2==t.i.cisadopt?a("div",{staticClass:"yes"},[t._v("审核通过")]):t._e()])],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"warning",plain:"",disabled:t.isDisabled},on:{click:function(a){return t.cancel(t.apply.aid)}}},[t._v("取消申请")])],1)],1)])},e=[],l=s(586),c={name:"applyInfo",data(){return{srcList:[JSON.parse(localStorage.getItem("apply")).curl],apply:{},isDisabled:!1}},methods:{indexs:async function(){this.apply=JSON.parse(localStorage.getItem("apply"))},async cancel(t){const{data:a}=await(0,l.bR)(t);"200"===a.code&&this.$message.success("取消成功！"),this.isDisabled=!0}},created:async function(t){this.indexs()}},n=c,p=s(1001),r=(0,p.Z)(n,i,e,!1,null,"104a1e58",null),d=r.exports}}]);
//# sourceMappingURL=709.1630e94f.js.map