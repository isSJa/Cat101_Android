"use strict";(self["webpackChunkcat101_pre"]=self["webpackChunkcat101_pre"]||[]).push([[728],{3728:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("el-main",[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData.filter((e=>!t.search||e.name.toLowerCase().includes(t.search.toLowerCase())))}},[e("el-table-column",{attrs:{label:"编号",prop:"aid"}}),e("el-table-column",{attrs:{label:"用户id",prop:"uid"}}),e("el-table-column",{attrs:{label:"猫咪id",prop:"cid"}}),e("el-table-column",{attrs:{label:"申请原因",prop:"ainfo"}}),e("el-table-column",{attrs:{align:"right"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleNO(a.$index,a.row)}}},[t._v(" 驳回 ")]),e("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(e){return t.handleYes(a.$index,a.row)}}},[t._v(" 通过 ")])]}}])},[e("template",{slot:"header"},[t._v(" 操作 ")])],2)],1)],1)},n=[],i=a(586),c={name:"myApplydb",data(){return{tableData:[],search:"",updateInfo:{cid:"",cisadopt:1}}},methods:{async handleNO(t,e){this.updateInfo={cid:e.cid,cisadopt:0};const{data:a}=await(0,i.$A)(JSON.stringify(this.updateInfo));"200"===a.code&&this.$message.success("驳回成功！！")},async handleYes(t,e){this.updateInfo={cid:e.cid,cisadopt:2};const{data:a}=await(0,i.$A)(JSON.stringify(this.updateInfo));"200"===a.code&&this.$message.success("通过成功！！")},indexs:async function(){const{data:t}=await(0,i.YJ)();"200"===t.code?this.tableData=t.data:this.$message.error(t.msg)}},created:async function(){this.indexs()}},l=c,o=a(1001),r=(0,o.Z)(l,s,n,!1,null,"b1f4ee92",null),d=r.exports}}]);
//# sourceMappingURL=728.e1e98f89.js.map