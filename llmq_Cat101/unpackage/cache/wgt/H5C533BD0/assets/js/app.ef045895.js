(function(){"use strict";var t={586:function(t,e,r){r.d(e,{gY:function(){return c},YJ:function(){return v},c$:function(){return y},Fs:function(){return l},Zf:function(){return f},bR:function(){return w},vz:function(){return S},UO:function(){return u},Dy:function(){return b},QV:function(){return i},nJ:function(){return d},OF:function(){return p},K6:function(){return $},rI:function(){return g},Qt:function(){return h},$A:function(){return m},Bc:function(){return _}});var n=r(9669),o=r.n(n);o().defaults.headers["Content-Type"]="application/json ; charset=utf-8";const a=o().create({baseURL:"http://39.105.141.55:8082",timeout:3e4});a.interceptors.request.use((t=>{t.headers["Content-Type"]="application/json;charset=utf-8";let e=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null;return e&&(t.headers["token"]=e.token),t}),(t=>Promise.reject(t)));var s=a;const i=t=>s({url:"/user/register",method:"POST",data:t}),u=t=>s({url:"/user/login",method:"POST",data:t}),l=()=>s({url:"/cat",method:"GET"}),c=t=>s({url:"/cat/save",method:"POST",data:t}),d=t=>s({url:"/adopt/save",method:"POST",data:t}),m=t=>s({url:"/cat/save",method:"POST",data:t}),p=()=>s({url:"/cat",method:"GET"}),f=t=>s({url:"/cat/"+t,method:"GET"}),h=t=>s({url:"/gather/save",method:"POST",data:t}),g=t=>s({url:"/gather/"+t,method:"GET"}),v=()=>s({url:"/adopt/find",method:"GET"}),b=t=>s({url:"/adopt/"+t,method:"GET"}),y=t=>s({url:"/adopt/detail/"+t,method:"GET"}),w=t=>s({url:"/adopt/"+t,method:"DELETE"}),S=t=>s({url:"/cat/"+t,method:"DELETE"}),_=t=>s({url:"/user/save",method:"post",data:t}),$=t=>s({url:"/user/"+t,method:"get"})},631:function(t,e,r){var n=r(144),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.isRouterAlive?e("router-view"):t._e()],1)},a=[],s={name:"App",components:{},provide(){return{reload:this.reload}},data(){return{isRouterAlive:!0}},cread(){},methods:{reload(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))}},mounted(){}},i=s,u=r(1001),l=(0,u.Z)(i,o,a,!1,null,null,null),c=l.exports,d=r(8345),m=function(){var t=this,e=t._self._c;return e("div",[e("welLogo"),e("navMenu"),e("el-row",{attrs:{gutter:0}},[e("el-col",{attrs:{span:24}},[e("div",[e("router-view")],1)])],1)],1)},p=[],f=(r(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-g"},[e("div",{staticClass:"block"},[e("div",{staticClass:"logo",on:{click:t.turnIntoIndex}},[e("img",{attrs:{src:r(7723),alt:"LOGO"}})]),t.$store.state.isLogin?e("div",{staticClass:"login"},[e("el-button",{attrs:{size:"small",round:""},on:{click:function(e){return t.$router.push("/layout/register")}}},[t._v("注册 ")]),e("el-button",{attrs:{size:"small",round:""},on:{click:function(e){return t.$router.push("/layout/login")}}},[t._v("登录 ")])],1):t._e(),t.$store.state.isNew?e("div",{staticStyle:{float:"right",width:"84px",height:"40px"},on:{click:t.quit}},[e("el-badge",{staticClass:"item",attrs:{type:"warning"}},[e("el-button",{attrs:{size:"large"}},[t._v("退出")])],1)],1):t._e(),t.$store.state.isNew?e("div",{staticStyle:{float:"right","margin-right":"10px","margin-top":"-3px"},on:{click:t.turnIntoUser}},[e("el-avatar",{staticStyle:{cursor:"pointer"},attrs:{icon:"el-icon-user-solid",size:35}}),e("div",{staticClass:"uxname"},[t._v("欢迎您！"+t._s(t.$store.state.user.uxname))])],1):t._e()])])}),h=[],g={name:"welLogo",data(){return{circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",squareUrl:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",sizeList:["large","medium","small"],user:JSON.parse(localStorage.getItem("user"))}},methods:{quit(){localStorage.removeItem("user"),localStorage.removeItem("cat"),localStorage.removeItem("cats"),localStorage.removeItem("apply"),this.$store.commit("cisLogin"),this.$store.commit("cisNew"),this.$router.push("/layout/login")},turnIntoUser(){this.$router.push("/layout/self")},turnIntoIndex(){localStorage.getItem("user")?this.$router.push("/layout/user"):this.$router.push("/layout/login")}},created(){this.$store.commit("cisLogin"),this.$store.commit("cisNew")}},v=g,b=(0,u.Z)(v,f,h,!1,null,"880866f4",null),y=b.exports,w=function(){var t=this,e=t._self._c;return this.$route.meta.isShow?e("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal",router:""}},[e("el-menu-item",{attrs:{index:"/layout/user","default-active":""}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-s-home"}),e("span",[t._v("首页")])])],2),e("el-menu-item",{attrs:{index:"/layout/mine"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-user-solid",staticStyle:{margin:"0px"}}),e("span",[t._v("我的申请")])])],2),e("el-menu-item",{attrs:{index:"/layout/like"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-star-off"}),e("span",[t._v("收藏")])])],2)],1):t._e()},S=[],_={name:"navMenu",data(){return{activeIndex:"1",activeIndex2:"1"}}},$=_,k=(0,u.Z)($,w,S,!1,null,"6128b916",null),x=k.exports,C={name:"layOut",components:{welLogo:y,navMenu:x},data(){return{xianshi:!0}},watch:{$route(){this.xianshi=this.$route.meta.isShow}}},O=C,L=(0,u.Z)(O,m,p,!1,null,null,null),I=L.exports,T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"register"},[e("div",{staticStyle:{position:"absolute",left:"8px",top:"60px"}},[e("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"status-icon":"",rules:t.rules,"label-width":"100px"}},[e("el-tabs",{staticClass:"header"},[e("span",{staticClass:"head",attrs:{slot:"label"},slot:"label"},[t._v("用户")]),e("div",{staticClass:"log"},[e("el-form-item",{attrs:{label:"账号",prop:"uname"}},[e("el-input",{attrs:{autocomplete:"off",required:"true"},model:{value:t.ruleForm.uname,callback:function(e){t.$set(t.ruleForm,"uname",e)},expression:"ruleForm.uname"}})],1),e("el-form-item",{attrs:{label:"密码",prop:"upwd"}},[e("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.upwd,callback:function(e){t.$set(t.ruleForm,"upwd",e)},expression:"ruleForm.upwd"}})],1),e("el-form-item",[e("el-button",{staticStyle:{margin:"auto","background-color":"#d7cd94","border-color":"#c2b79a"},attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("登录")]),e("el-button",{staticStyle:{"background-color":"#d7cd94","border-color":"#c2b79a"},on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置 ")]),e("el-link",{attrs:{type:"warning"},on:{click:function(e){return t.$router.push("/layout/register")}}},[t._v("没有账号？去注册")])],1)],1)])],1)],1)])},E=[],F=(r(1703),r(586)),N={name:"myLogin",data(){var t=(t,e,r)=>{if(!e)return r(new Error("账号不能为空"));r()},e=(t,e,r)=>{if(""===e)return r(new Error("请输入密码"));r()};return{ruleForm:{uname:"",upwd:""},rules:{upwd:[{validator:e,trigger:"blur"}],uname:[{validator:t,trigger:"blur"}]}}},methods:{submitForm(t){this.$refs[t].validate((async t=>{if(!t)return console.log("登录失败!!"),!1;{const t=JSON.stringify(this.ruleForm),{data:e}=await(0,F.UO)(t);if("200"!==e.code)return this.$message.error(e.msg);this.$message.success("登录成功"),localStorage.setItem("user",JSON.stringify(e.data)),this.$store.commit("cUser"),console.log(this.$store.state.user),0===e.data.utype?(this.$router.push("/layout/user"),this.$store.state.isNew=!0,this.$store.state.isLogin=!1):(this.$router.push("/layout/admin"),this.$store.state.isNew=!0,this.$store.state.isLogin=!1)}}))},resetForm(t){this.$refs[t].resetFields()}}},A=N,P=(0,u.Z)(A,T,E,!1,null,"88480514",null),j=P.exports,Z=function(){var t=this,e=t._self._c;return e("div",[e("el-row",{attrs:{gutter:0}},t._l(t.catsALL,(function(r){return e("div",{key:r.cid},[e("el-col",{attrs:{span:11}},[e("div",{staticClass:"grid-content"},[e("el-image",{attrs:{src:r.curl},on:{click:function(e){return t.turnInto(r.cid)}}}),0==r.cisadopt?e("div",{staticClass:"status yes"},[t._v("待领养")]):1==r.cisadopt?e("div",{staticClass:"status wait"},[t._v("有人申请中~")]):2==r.cisadopt?e("div",{staticClass:"status no"},[t._v("已被领养")]):t._e(),e("div",{staticClass:"title"},[t._v(t._s(r.cname))]),e("div",{staticClass:"color"},[t._v(t._s(r.ccolor))]),e("div",{staticClass:"content"},[t._v(t._s(r.cinfo))])],1)])],1)})),0)],1)},U=[],M={name:"myUser",data(){return{catsALL:[]}},methods:{indexs:async function(){const{data:t}=await(0,F.OF)();"200"===t.code?this.catsALL=t.data:this.$message.error("无token，请登录！")},async turnInto(t){const{data:e}=await(0,F.Zf)(t);"200"===e.code?(localStorage.setItem("cat",JSON.stringify(e.data)),this.$router.push("/layout/info")):this.$message.error(e.msg)}},created:async function(t){this.indexs()}},J=M,G=(0,u.Z)(J,Z,U,!1,null,"324add1b",null),q=G.exports;n["default"].use(d.Z);const z=[{path:"/",redirect:"/layout"},{path:"/layout",redirect:localStorage.getItem("user")?"/layout/user":"/layout/login",component:I,children:[{path:"user",component:q,meta:{isShow:!0,span:19}},{path:"self",component:()=>r.e(610).then(r.bind(r,1610)),meta:{isShow:!0,span:19}},{path:"info",component:()=>r.e(798).then(r.bind(r,1798)),meta:{isShow:!0,span:19}},{path:"apply",component:()=>r.e(109).then(r.bind(r,6109)),meta:{isShow:!0,span:19}},{path:"register",component:()=>r.e(741).then(r.bind(r,5741)),meta:{isShow:!1,span:24}},{path:"login",component:j,meta:{isShow:!1,span:24}},{path:"admin",component:()=>r.e(740).then(r.bind(r,1706)),redirect:"/layout/admin/catdb",meta:{isShow:!1,span:24},children:[{path:"catdb",component:()=>r.e(320).then(r.bind(r,6320))},{path:"applydb",component:()=>r.e(287).then(r.bind(r,1287))},{path:"addcat",component:()=>r.e(799).then(r.bind(r,2799))}]},{path:"like",component:()=>r.e(25).then(r.bind(r,6025)),meta:{isShow:!0,span:19}},{path:"mine",component:()=>r.e(885).then(r.bind(r,885)),meta:{isShow:!0,span:19,needLogin:!0}},{path:"daily",component:()=>r.e(649).then(r.bind(r,6649)),meta:{isShow:!0,span:19}},{path:"applyInfo",component:()=>r.e(709).then(r.bind(r,3709)),meta:{isShow:!0,span:19}}]}],R=new d.Z({routes:z});var D=R,B=r(629);n["default"].use(B.ZP);var K=new B.ZP.Store({state:{isNew:!1,isLogin:!0,user:JSON.parse(localStorage.getItem("user"))},getters:{},mutations:{updatedToken(t,e){t.token=e},cisLogin(t){return localStorage.getItem("user")?t.isLogin=!1:t.isLogin=!0,t.isLogin},cisNew(t){return localStorage.getItem("user")?t.isNew=!0:t.isNew=!1,t.isNew},cUser(t){return t.user=JSON.parse(localStorage.getItem("user")),t.user}},actions:{},modules:{}}),Q=r(4720),Y=r.n(Q),H=r(9669),V=r.n(H);n["default"].config.productionTip=!1,n["default"].use(Y()),n["default"].prototype.$axios=V(),new n["default"]({render:t=>t(c),store:K,router:D}).$mount("#app"),n["default"].prototype.$message=function(t){return(0,Q.Message)({message:t,duration:1500})},n["default"].prototype.$message.success=function(t){return Q.Message.success({message:t,duration:1500})},n["default"].prototype.$message.warning=function(t){return Q.Message.warning({message:t,duration:1500})},n["default"].prototype.$message.error=function(t){return Q.Message.error({message:t,duration:1500})}},7723:function(t,e,r){t.exports=r.p+"assets/img/logo-1.b283ed26.png"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,n,o,a){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],o=t[c][1],a=t[c][2];for(var i=!0,u=0;u<n.length;u++)(!1&a||s>=a)&&Object.keys(r.O).every((function(t){return r.O[t](n[u])}))?n.splice(u--,1):(i=!1,a<s&&(s=a));if(i){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[n,o,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,n){return r.f[n](t,e),e}),[]))}}(),function(){r.u=function(t){return"assets/js/"+t+"."+{25:"994a3c70",109:"f73422b6",287:"057b57fb",320:"da437b39",610:"bde988c3",649:"842611c9",709:"1ccad895",740:"8760e397",741:"f28c009b",798:"06389c99",799:"31a4d19a",885:"05343d7b"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"assets/css/"+t+"."+{25:"35f7da1e",109:"420b5507",287:"82fa6aa4",320:"05282f48",610:"289fae44",709:"2244f165",740:"0573a67e",741:"8b13e8f4",798:"4d35ea4f",799:"779dc8b3",885:"05f2bcdd"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="cat101_pre:";r.l=function(n,o,a,s){if(t[n])t[n].push(o);else{var i,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+a){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+a),i.src=n),t[n]=[o];var m=function(e,r){i.onerror=i.onload=null,clearTimeout(p);var o=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(r)})),e)return e(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p=""}(),function(){var t=function(t,e,r,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)r();else{var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,o.parentNode.removeChild(o),n(u)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){o=s[n],a=o.getAttribute("data-href");if(a===t||a===e)return o}},n=function(n){return new Promise((function(o,a){var s=r.miniCssF(n),i=r.p+s;if(e(s,i))return o();t(n,i,o,a)}))},o={143:0};r.f.miniCss=function(t,e){var r={25:1,109:1,287:1,320:1,610:1,709:1,740:1,741:1,798:1,799:1,885:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=n(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};r.f.j=function(e,n){var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(r,n){o=t[e]=[r,n]}));n.push(o[2]=a);var s=r.p+r.u(e),i=new Error,u=function(n){if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};r.l(s,u,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,a,s=n[0],i=n[1],u=n[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(u)var c=u(r)}for(e&&e(n);l<s.length;l++)a=s[l],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(c)},n=self["webpackChunkcat101_pre"]=self["webpackChunkcat101_pre"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(631)}));n=r.O(n)})();
//# sourceMappingURL=app.ef045895.js.map