(function(e){function t(t){for(var a,r,i=t[0],c=t[1],s=t[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(l.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},l=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/work-poc/element-ui-practice/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e75":function(e,t,n){"use strict";var a=n("8a7b"),o=n.n(a);o.a},"19f5":function(e,t,n){"use strict";var a=n("97f5"),o=n.n(a);o.a},"1a0a":function(e,t,n){},"27dc":function(e,t,n){},"534f":function(e,t,n){e.exports=n.p+"img/logo1.7b2bf159.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("27dc"),n("2e53");var a=n("5c96"),o=n.n(a),l=n("c87b"),r=n.n(l),i=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("router-view")],1)},s=[],u={name:"App",mounted:function(){console.log("resize"),this.$store.commit("windowWidth",window.innerWidth),window.addEventListener("resize",this._onWindowResize.bind(this))},beforeDestroy:function(){window.removeEventListener("resize",this._onWindowResize)},methods:{_onWindowResize:function(){this.$store.commit("windowWidth",window.innerWidth)}}},d=u,p=(n("5c0b"),n("2877")),m=Object(p["a"])(d,c,s,!1,null,null,null),f=m.exports,h=n("9483");Object(h["a"])("".concat("/work-poc/element-ui-practice/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var g=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-radio-group",{staticStyle:{"margin-bottom":"20px"},model:{value:e.isCollapse,callback:function(t){e.isCollapse=t},expression:"isCollapse"}},[n("el-radio-button",{attrs:{label:!1}},[e._v("expand")]),n("el-radio-button",{attrs:{label:!0}},[e._v("collapse")])],1),n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2",collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("Navigator One")])]),n("el-menu-item-group",[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("Group One")]),n("el-menu-item",{attrs:{index:"1-1"}},[e._v("item one")]),n("el-menu-item",{attrs:{index:"1-2"}},[e._v("item two")])],1),n("el-menu-item-group",{attrs:{title:"Group Two"}},[n("el-menu-item",{attrs:{index:"1-3"}},[e._v("item three")])],1),n("el-submenu",{attrs:{index:"1-4"}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("item four")]),n("el-menu-item",{attrs:{index:"1-4-1"}},[e._v("item one")])],1)],2),n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("Navigator Two")])]),n("el-menu-item",{attrs:{index:"3",disabled:""}},[n("i",{staticClass:"el-icon-document"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("Navigator Three")])]),n("el-menu-item",{attrs:{index:"4"}},[n("i",{staticClass:"el-icon-setting"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("Navigator Four")])])],1)],1)},v=[],x={data:function(){return{isCollapse:!0}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},w=x,_=(n("ab3a"),Object(p["a"])(w,b,v,!1,null,null,null)),C=_.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"is-vertical main"},[n("main-header",{on:{toggleMenu:e.toggleMenu}}),n("el-container",{staticClass:"overflow-hidden"},[n("main-sidenav",{ref:"sidenav"}),n("el-main",[n("transition",{attrs:{name:"el-fade-in",mode:"out-in",type:"transition"}},[n("router-view")],1)],1)],1)],1)},T=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-header",{staticClass:"main-header",attrs:{height:"50px"}},[a("el-tooltip",{attrs:{content:"主選單",placement:"bottom"}},[a("button",{staticClass:"svg-btn svg-btn__menu btn-menu",on:{click:e.toggleMenu}})]),a("div",{staticClass:"logo",on:{click:function(t){return e.$router.push("/")}}},[a("img",{attrs:{src:n("534f"),alt:""}}),e.isSmallDevice?e._e():a("img",{staticStyle:{"margin-left":"0.5rem"},attrs:{src:n("5fbe"),alt:""}})]),a("span",{staticStyle:{"margin-left":"auto","margin-right":"1rem"}},[e._v("Yuska Wu")]),a("el-tooltip",{attrs:{content:"登出",placement:"bottom"}},[a("el-button",{staticClass:"btn-signout",attrs:{icon:"el-icon-switch-button",size:"mini",circle:""}})],1)],1)},O=[],N={data:function(){return{}},computed:{windowWidth:function(){return this.$store.state.windowWidth},isSmallDevice:function(){return this.windowWidth<=574}},methods:{toggleMenu:function(){this.$emit("toggleMenu")}}},$=N,j=(n("5970"),Object(p["a"])($,k,O,!1,null,"4c1fecd8",null)),E=j.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-aside",{ref:"sidenav",staticClass:"sidenav"},[n("el-menu",{staticClass:"sidenav-menu",attrs:{collapse:e.isCollapsed,"default-active":"2","background-color":"#545c64","text-color":"#fff"},on:{open:e.open,close:e.close}},e._l(e.menus,(function(t,a){return n("el-submenu",{key:a,attrs:{index:a+""}},[n("template",{slot:"title"},[n("i",{class:t.icon}),n("span",[e._v(e._s(t.text))])]),e._l(t.items,(function(t,o){return n("el-menu-item",{key:o,class:{active:t.routeName===e.$route.name},attrs:{index:a+"-"+o},on:{click:function(n){return e.goto(t)}}},[e._v(" "+e._s(t.text)+" ")])}))],2)})),1)],1)},D=[],P=(n("b0c0"),{data:function(){return{isCollapsed:!1,menus:[{text:"文章",icon:"el-icon-document",items:[{text:"全部文章",routeName:"Articles"},{text:"新增文章",routeName:"CreateArticle"},{text:"分類",routeName:"ArticleCategory"},{text:"我的最愛",routeName:"ArticleFavorite"},{text:"標籤",routeName:"ArticleTag"}]},{text:"追蹤碼",icon:"el-icon-view",items:[{text:"新增追蹤碼",routeName:"CreateTrackingCode"},{text:"插入追蹤碼",routeName:"InsertTrackingCode"}]},{text:"新聞",icon:"el-icon-collection",items:[{text:"PV",routeName:"PageViews"},{text:"快速找記者",routeName:"Reporter"}]},{text:"媒體",icon:"el-icon-video-camera",items:[{text:"媒體庫",routeName:"Resources"},{text:"新增檔案",routeName:"UploadResource"}]},{text:"帳號",icon:"el-icon-user",items:[{text:"全部帳號",routeName:"Accounts"},{text:"新增帳號",routeName:"CreateAccount"},{text:"權限管理",routeName:"Authority"},{text:"角色管理",routeName:"Roles"}]},{text:"頁面",icon:"el-icon-s-grid",items:[{text:"全部頁面",routeName:"Pages"},{text:"鎖定首頁",routeName:"LockPage"},{text:"鎖定頻道頁",routeName:"LockChannel"}]}]}},computed:{windowWidth:function(){return this.$store.state.windowWidth}},watch:{windowWidth:function(){var e=this;this.windowWidth<=574&&(clearTimeout(this._timeout),this._timeout=setTimeout((function(){return e.toggle()}),100))}},mounted:function(){document.querySelector("aside > ul > li > div").click()},methods:{goto:function(e){var t=e.routeName;t!==this.$route.name&&this.$router.push({name:t}),this.windowWidth<=574&&this.toggle()},toggle:function(){if(this.windowWidth>574)return this.$refs.sidenav.$el.classList.remove("sidenav--collapse"),void(this.isCollapsed=!this.isCollapsed);this.isCollapsed=!1,this.$refs.sidenav.$el.classList.toggle("sidenav--collapse")},open:function(e,t){console.log(e,t)},close:function(e,t){console.log(e,t)}}}),I=P,S=(n("f75b"),Object(p["a"])(I,W,D,!1,null,null,null)),A=S.exports,z={components:{"main-header":E,"main-sidenav":A},methods:{toggleMenu:function(){this.$refs.sidenav.toggle()}}},L=z,R=(n("9170"),Object(p["a"])(L,y,T,!1,null,"9331d9f4",null)),K=R.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page",[n("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"我的",name:"mine"}}),n("el-tab-pane",{attrs:{label:"全部",name:"all"}}),n("el-tab-pane",{attrs:{label:"已發表",name:"publish"}}),n("el-tab-pane",{attrs:{label:"已排程",name:"schedule"}}),n("el-tab-pane",{attrs:{label:"垃圾桶",name:"delete"}}),n("el-tab-pane",{attrs:{label:"草稿區",name:"draft"}}),n("el-tab-pane",{attrs:{label:"審核中",name:"check"}})],1),n("el-card",[n("el-row",{staticStyle:{"margin-bottom":"1rem"},attrs:{gutter:10}},[n("el-col",{attrs:{sm:12}},[n("el-date-picker",{staticClass:"field",attrs:{type:"datetimerange",align:"right","start-placeholder":"Start Date","end-placeholder":"End Date","default-value":"2010-10-01"},model:{value:e.d1,callback:function(t){e.d1=t},expression:"d1"}}),n("el-date-picker",{staticClass:"field",attrs:{type:"datetimerange",align:"right","start-placeholder":"Start Date","end-placeholder":"End Date","default-value":"2010-10-01"},model:{value:e.d2,callback:function(t){e.d2=t},expression:"d2"}})],1),n("el-col",{attrs:{sm:8}},[n("el-input",{staticClass:"field",attrs:{placeholder:"關鍵字"}}),n("el-select",{staticClass:"field",attrs:{placeholder:"類別"},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}},[n("el-option",{attrs:{label:"電玩",value:"電玩"}},[e._v("電玩")]),n("el-option",{attrs:{label:"政治",value:"政治"}},[e._v("政治")])],1)],1),n("el-col",{attrs:{sm:4}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"}},[e._v("搜尋")])],1)],1),n("el-table",{attrs:{fit:!1,"header-cell-class-name":"cell-th",data:e.tableData}},[n("el-table-column",{attrs:{prop:"statusId",label:"狀態",width:"70"}}),n("el-table-column",{attrs:{prop:"title",label:"標題",width:"200"}}),n("el-table-column",{attrs:{prop:"accountName",label:"作者",width:"100"}}),n("el-table-column",{attrs:{prop:"category",label:"分類",width:"70"}}),n("el-table-column",{attrs:{prop:"tag",label:"標籤",width:"200"}}),n("el-table-column",{attrs:{prop:"createTime",label:"排程日期",width:"140"}}),n("el-table-column",{attrs:{prop:"updateTime",label:"更新日期",width:"140"}}),n("el-table-column",{attrs:{prop:"seoTitle",label:"SEO標籤",width:"200"}}),n("el-table-column",{attrs:{prop:"seoKeyWord",label:"SEO關鍵字",width:"200"}}),n("el-table-column",{attrs:{prop:"traceContent",label:"追蹤碼",width:"100"}}),n("el-table-column",{attrs:{prop:"pv",label:"PV",width:"70"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-dropdown",{attrs:{trigger:"click"}},[n("button",{staticClass:"svg-btn svg-btn__vert",on:{click:function(n){return e.onActionClick(t)}}}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("查看")]),n("el-dropdown-item",[e._v("修改")]),n("el-dropdown-item",[e._v("刪除")])],1)],1)]}}])})],1),n("div",[n("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)],1)},U=[],M=n("7e2f"),J={data:function(){return{activeName:"mine",d1:null,d2:null,category:null,tableData:M,currentPage:1}},methods:{handleClick:function(e,t){console.log(e,t)},onActionClick:function(e){console.log(e)}}},G=J,B=(n("0e75"),Object(p["a"])(G,V,U,!1,null,"8253c1dc",null)),F=B.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},Y=[],q={data:function(){return{}},methods:{}},X=q,H=Object(p["a"])(X,Q,Y,!1,null,null,null),Z=H.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},te=[],ne={data:function(){return{}},methods:{}},ae=ne,oe=Object(p["a"])(ae,ee,te,!1,null,null,null),le=oe.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},ie=[],ce={data:function(){return{}},methods:{}},se=ce,ue=Object(p["a"])(se,re,ie,!1,null,null,null),de=ue.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},me=[],fe={data:function(){return{}},methods:{}},he=fe,ge=Object(p["a"])(he,pe,me,!1,null,null,null),be=ge.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},xe=[],we={data:function(){return{}},methods:{}},_e=we,Ce=Object(p["a"])(_e,ve,xe,!1,null,null,null),ye=Ce.exports,Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},ke=[],Oe={data:function(){return{}},methods:{}},Ne=Oe,$e=Object(p["a"])(Ne,Te,ke,!1,null,null,null),je=$e.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},We=[],De={data:function(){return{}},methods:{}},Pe=De,Ie=Object(p["a"])(Pe,Ee,We,!1,null,null,null),Se=Ie.exports,Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},ze=[],Le={data:function(){return{}},methods:{}},Re=Le,Ke=Object(p["a"])(Re,Ae,ze,!1,null,null,null),Ve=Ke.exports,Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},Me=[],Je={data:function(){return{}},methods:{}},Ge=Je,Be=Object(p["a"])(Ge,Ue,Me,!1,null,null,null),Fe=Be.exports,Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},Ye=[],qe={data:function(){return{}},methods:{}},Xe=qe,He=Object(p["a"])(Xe,Qe,Ye,!1,null,null,null),Ze=He.exports,et=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},tt=[],nt={data:function(){return{}},methods:{}},at=nt,ot=Object(p["a"])(at,et,tt,!1,null,null,null),lt=ot.exports,rt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},it=[],ct={data:function(){return{}},methods:{}},st=ct,ut=Object(p["a"])(st,rt,it,!1,null,null,null),dt=ut.exports,pt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},mt=[],ft={data:function(){return{}},methods:{}},ht=ft,gt=Object(p["a"])(ht,pt,mt,!1,null,null,null),bt=gt.exports,vt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},xt=[],wt={data:function(){return{}},methods:{}},_t=wt,Ct=Object(p["a"])(_t,vt,xt,!1,null,null,null),yt=Ct.exports,Tt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},kt=[],Ot={data:function(){return{}},methods:{}},Nt=Ot,$t=Object(p["a"])(Nt,Tt,kt,!1,null,null,null),jt=$t.exports,Et=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},Wt=[],Dt={data:function(){return{}},methods:{}},Pt=Dt,It=Object(p["a"])(Pt,Et,Wt,!1,null,null,null),St=It.exports,At=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page")},zt=[],Lt={data:function(){return{}},methods:{}},Rt=Lt,Kt=Object(p["a"])(Rt,At,zt,!1,null,null,null),Vt=Kt.exports;i["default"].use(g["a"]);var Ut=[{path:"/",name:"Main",component:K,children:[{path:"articles",component:F,name:"Articles",meta:{text:"全部文章"}},{path:"create-article",component:Z,name:"CreateArticle",meta:{text:"新增文章"}},{path:"article-category",component:le,name:"ArticleCategory",meta:{text:"分類"}},{path:"article-favorite",component:de,name:"ArticleFavorite",meta:{text:"我的最愛"}},{path:"article-tag",component:be,name:"ArticleTag",meta:{text:"標籤"}},{path:"create-tracking-code",component:ye,name:"CreateTrackingCode",meta:{text:"新增追蹤碼"}},{path:"insert-tracking-code",component:je,name:"InsertTrackingCode",meta:{text:"插入追蹤碼"}},{path:"page-views",component:Se,name:"PageViews",meta:{text:"PV"}},{path:"reporter",component:Ve,name:"Reporter",meta:{text:"快速找記者"}},{path:"resources",component:Fe,name:"Resources",meta:{text:"媒體庫"}},{path:"upload-resource",component:Ze,name:"UploadResource",meta:{text:"新增檔案"}},{path:"accounts",component:lt,name:"Accounts",meta:{text:"全部帳號"}},{path:"create-account",component:dt,name:"CreateAccount",meta:{text:"新增帳號"}},{path:"authority",component:bt,name:"Authority",meta:{text:"權限管理"}},{path:"roles",component:yt,name:"Roles",meta:{text:"角色管理"}},{path:"pages",component:jt,name:"Pages",meta:{text:"全部頁面"}},{path:"lock-page",component:St,name:"LockPage",meta:{text:"鎖定首頁"}},{path:"lock-channel",component:Vt,name:"LockChannel",meta:{text:"鎖定頻道頁"}}]},{path:"/signin",component:C,name:"Signin",meta:{auth:!1}}],Mt=new g["a"]({mode:"hash",base:"/work-poc/element-ui-practice/",routes:Ut});Mt.beforeEach((function(e,t,n){if(!1!==e.meta.auth){var a=sessionStorage.getItem("token");a?Mt.push({name:"Signin"}):(console.log("[router] next - has token"),n())}else n()}));var Jt=Mt,Gt=n("2f62");i["default"].use(Gt["a"]);var Bt=new Gt["a"].Store({state:{windowWidth:0},mutations:{windowWidth:function(e,t){e.windowWidth=t}},actions:{},modules:{}}),Ft=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"page-title"},[e._v(e._s(e.$route.meta.text))]),n("div",{staticClass:"page-content"},[e._t("default")],2)])},Qt=[],Yt={},qt=Yt,Xt=(n("19f5"),Object(p["a"])(qt,Ft,Qt,!1,null,"303947a8",null)),Ht=Xt.exports;i["default"].component("app-page",Ht),i["default"].use(o.a,{locale:r.a}),i["default"].config.productionTip=!1,new i["default"]({router:Jt,store:Bt,render:function(e){return e(f)}}).$mount("#app")},5970:function(e,t,n){"use strict";var a=n("8d4b"),o=n.n(a);o.a},"5b38":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"5fbe":function(e,t,n){e.exports=n.p+"img/logo2.15d0f75a.png"},"7e2f":function(e){e.exports=JSON.parse('[{"id":"5DB9QXbLo9","title":"測試","accountId":"yPzoJB9onR","accountName":"PeterHou","tag":"測試","createTime":"2020-04-24 14:54:34","updateTime":"2020-04-24 14:54:46","statusId":"發佈","subtitle":"測試","seoTitle":"測試","seoContent":"測試測試","seoKeyWord":"測試","traceContent":null,"pv":1,"canUpdate":true,"canDelete":true,"classify":"生活","scheduleTime":""},{"id":"b7PW1aL58k","title":"趕上豬瘟熱潮！海巡署貼文談防疫「多哏齊發」　萬人笑瘋","accountId":"z9b7QEP7dK","accountName":"倪浩軒","tag":"非洲豬瘟,羅志祥,笑死,海巡署長室,周揚清","createTime":"2020-04-23 15:54:50","updateTime":"2020-04-24 11:14:45","statusId":"發佈","subtitle":"海巡署貼文談防疫「多哏齊發」","seoTitle":"趕上豬瘟熱潮！海巡署貼文談防疫「多哏齊發」　萬人笑瘋","seoContent":"台灣民眾今（23）天談論最多的話題，可能就是周揚青與羅志祥（小豬） 9 年情斷，周揚青更在微博寫下千字長文，指控與小豬交往期間對方慣性「約砲」，對象不僅有女藝人，甚至還和好兄弟們玩「多人運動」，讓羅志祥一下成為網友心中最新的「渣男」代名詞。對此，海巡署長室也跟上風潮，發文談非洲豬瘟防疫，卻暗藏許多羅志祥關鍵字，讓網友笑翻","seoKeyWord":"海巡署長室,羅志祥,非洲豬瘟,周揚清,笑死","traceContent":null,"pv":54,"canUpdate":true,"canDelete":true,"classify":"新奇","scheduleTime":""},{"id":"LoWQJ0aL8E","title":"人手吃緊！日本護理師「確診」被逼上班　爆發院內大感染","accountId":"z9b7QNPodK","accountName":"林奐妤","tag":"日本,COVID-19,確診,大阪,陽性,2019新型冠狀病毒,護理師,醫護人員,新冠肺炎,院內感染","createTime":"2020-04-23 15:34:07","updateTime":"2020-04-24 11:14:45","statusId":"發佈","subtitle":"日本護理師確診被逼上班","seoTitle":"人手吃緊！日本護理師「確診」被逼上班　爆發院內大感染","seoContent":"日本由於近日2019新型冠狀病毒（COVID-19）疫情狀況不樂觀，首相安倍晉三已宣布全國進入緊急狀態直到5月6日，開始「重症優先」的策略，要將醫療資源提供給急迫的病患，目前日本累計確診病例數已來到11,950例、死亡299例，更爆發數起院內大感染。綜合日媒報導，日本大阪市生野區的一家醫院。","seoKeyWord":"日本,2019新型冠狀病毒,大阪,護理師,院內感染","traceContent":null,"pv":177,"canUpdate":true,"canDelete":true,"classify":"國際,焦點,國際萬象,新冠肺炎燒全球,新冠肺炎","scheduleTime":""},{"id":"do6r5BLdo3","title":"生意人都選初二拜土地公？三樣隱藏供品有拜有加分！","accountId":"yORDORjoP4","accountName":"連宜方","tag":"拜拜,供品,初二,福德正神,土地公","createTime":"2020-04-23 15:30:26","updateTime":"2020-04-24 11:14:45","statusId":"發佈","subtitle":"初二拜土地公？隱藏供品有拜有加分","seoTitle":"生意人都選初二拜土地公？三樣隱藏供品有拜有加分！","seoContent":"明（24）天為農曆四月初二，不少經商或是做生意的人都會在這天到住家附近，或是店面、公司附近的土地公廟拜拜，祈求土地公可以保佑生意、業績蒸蒸日上，尤其是這段時間因為2019新型冠狀病毒（COVID-19）疫情影響，許多攤商、店家的生意都快做不下去了，就希望土地公可以庇佑疫情早日明朗，讓生意能回到過去繁榮、熱鬧的景象。","seoKeyWord":"土地公,福德正神,初二,拜拜,供品","traceContent":null,"pv":34,"canUpdate":true,"canDelete":true,"classify":"生活,藝文習俗","scheduleTime":""},{"id":"B8vqYJwODz","title":"隱藏版神明／精進技術請拜祂　泥水匠守護神荷葉仙師","accountId":"9YLoWm08Ed","accountName":"黃彥昇","tag":"巧聖仙師,泥水匠,荷葉仙師,芋葉仙師,瓦片","createTime":"2020-04-23 15:00:03","updateTime":"2020-04-24 11:14:45","statusId":"發佈","subtitle":"隱藏版神明／泥水匠守護神荷葉仙師","seoTitle":"隱藏版神明／精進技術請拜祂　泥水匠守護神荷葉仙師","seoContent":"在台灣流傳的觀念中，行業有三百六十行，每個行業都有自己的祖師爺，大家也都知道建築業與木匠的祖師爺是巧聖仙師魯班，那麼各位知道泥水匠的祖師爺是誰？今天就來為大家介紹荷葉仙師這一位泥水匠的祖師爺。","seoKeyWord":"芋葉仙師,泥水匠,瓦片,巧聖仙師","traceContent":null,"pv":64,"canUpdate":true,"canDelete":true,"classify":"生活,藝文習俗","scheduleTime":""},{"id":"LoWQJ0EL8E","title":"楊丞琳公開居家保養、一日瘦身餐　好身材全靠4種食物","accountId":"9r4oA1RobA","accountName":"駱映儒","tag":"素顏,卸妝,楊丞琳,面膜,瘦身餐","createTime":"2020-04-23 14:59:22","updateTime":"2020-04-24 11:14:45","statusId":"發佈","subtitle":"楊丞琳公開居家保養習慣","seoTitle":"楊丞琳公開居家保養、一日瘦身餐　好身材全靠4種食物","seoContent":"因為疫情的關係，許多節目和活動紛紛停止錄製，藝人的工作都受到影響而開始轉行當起YouTuber，包括王心凌、Selina、曾之喬、Lulu黃路梓茵等人。近日楊丞琳也在自己的YouTube頻道推出「RaiNie\'s Vlog」系列影片，第一集取名為「我平凡的一天」，公開了女生最有興趣的日常居家保養以及維持身材的秘訣，趕緊把女神的好習慣都筆記起來吧！\\r\\n\\r\\n","seoKeyWord":"楊丞琳,素顏,瘦身餐,卸妝,面膜","traceContent":null,"pv":97,"canUpdate":true,"canDelete":true,"classify":"娛樂,影音,華語名人圈,影音,風尚,美妝保養","scheduleTime":""},{"id":"98KGy3z08n","title":"捷運三民高中站出口女子狂揮菜刀  警獲報逮人","accountId":"VbN8y27amG","accountName":"中央社","tag":null,"createTime":"2020-04-23 14:56:59","updateTime":"2020-04-24 11:14:45","statusId":"發佈","subtitle":"","seoTitle":"","seoContent":"","seoKeyWord":"","traceContent":null,"pv":14,"canUpdate":true,"canDelete":true,"classify":"社會,中央社","scheduleTime":""},{"id":"x7xrvJkXDk","title":"美國務卿批評後  中國否認有野生動物濕貨市場","accountId":"VbN8y27amG","accountName":"中央社","tag":null,"createTime":"2020-04-23 14:56:59","updateTime":"2020-04-24 11:14:45","statusId":"發佈","subtitle":"","seoTitle":"","seoContent":"","seoKeyWord":"","traceContent":null,"pv":8,"canUpdate":true,"canDelete":true,"classify":"國際,中央社","scheduleTime":""},{"id":"e8VnmPbp8z","title":"疫情當頭 澳洲：世衛專家應擁類似武器調查員權力","accountId":"VbN8y27amG","accountName":"中央社","tag":null,"createTime":"2020-04-23 14:52:59","updateTime":"2020-04-24 11:14:45","statusId":"發佈","subtitle":"","seoTitle":"","seoContent":"","seoKeyWord":"","traceContent":null,"pv":10,"canUpdate":true,"canDelete":true,"classify":"國際,中央社","scheduleTime":""},{"id":"3Dd3EGn5oz","title":"名家論壇》戴天易／看大勢韓劇《夫婦》　如何超前部署","accountId":"z5673jk8Jl","accountName":"楊穎軒","tag":"梨泰院,花系列,朴海俊,金喜愛,夫婦的世界,韓素希","createTime":"2020-04-23 14:50:47","updateTime":"2020-04-24 11:14:45","statusId":"發佈","subtitle":"看《夫婦的世界》　如何超前部署","seoTitle":"名家論壇》戴天易／看大勢韓劇《夫婦》　如何超前部署","seoContent":"《梨泰院class》剛剛收關，儘管結局評價不佳，但還是以21%的超高收視作結。韓國JTBC電視台趁勢推出改編自英國影集《Doctor Foster》的作品《夫婦的世界》。必須承認我自己其實不是此類韓劇的固定觀眾，但在一次飯席之間，大家也討論起這部在愛奇藝點閱爆量的作品。","seoKeyWord":"夫妻的世界,夫婦的世界,金喜愛,韓素希,朴海俊,花系列,梨泰院","traceContent":null,"pv":88,"canUpdate":true,"canDelete":true,"classify":"娛樂,日韓流行線,娛樂NOW一下","scheduleTime":""}]')},"8a7b":function(e,t,n){},"8d4b":function(e,t,n){},9170:function(e,t,n){"use strict";var a=n("1a0a"),o=n.n(a);o.a},"97f5":function(e,t,n){},"9c0c":function(e,t,n){},ab3a:function(e,t,n){"use strict";var a=n("5b38"),o=n.n(a);o.a},c6cb:function(e,t,n){},f75b:function(e,t,n){"use strict";var a=n("c6cb"),o=n.n(a);o.a}});
//# sourceMappingURL=app.c6bc33b2.js.map