(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f09d3ee8"],{"2c4b":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("van-tabbar",{attrs:{route:""},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[e("van-tabbar-item",{attrs:{icon:"orders-o",replace:"",to:"/ziliao"}},[t._v("资料查询")]),e("van-tabbar-item",{attrs:{icon:"records",replace:"",to:"/kecheng"}},[t._v("课程学习")]),e("van-tabbar-item",{attrs:{replace:"",to:"/"}},[e("span",{staticStyle:{position:"absolute",bottom:"8px","text-align":"center",width:"60px"}},[t._v("首页")]),e("img",{staticStyle:{width:"60px","padding-bottom":"50px"},attrs:{src:t.icon.active}})]),e("van-tabbar-item",{attrs:{icon:"todo-list-o",replace:"",to:"/kaoshi"}},[t._v("我的考试")]),e("van-tabbar-item",{attrs:{icon:"friends-o",replace:"",to:"/mine"}},[t._v("个人中心")])],1)},o=[],i={name:"footer",data:function(){return{active:2,icon:{active:e("bda1")}}},methods:{changeTab:function(){console.log(this.active)}}},c=i,r=e("2877"),s=Object(r["a"])(c,n,o,!1,null,"1538c17e",null);a["a"]=s.exports},a17b:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{background:"#fff",padding:"0px 15px"}},[e("van-search",{attrs:{background:"none",placeholder:"输入你感兴趣的内容"},on:{search:t.onSearch},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}}),e("van-divider",{staticStyle:{"margin-top":"3px",background:"rgba(221, 221, 221, 1)"}}),e("div",[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(10,(function(a,n){return e("div",{key:n,staticStyle:{padding:"10px 0px","text-align":"left","border-bottom":"1px solid rgba(238, 238, 238, 1)"},on:{click:function(a){return t.$router.push("/wenzhang")}}},[e("div",{staticStyle:{color:"rgba(22, 22, 22, 1)","font-size":"20px"}},[t._v("标题")]),e("div",{staticStyle:{color:"rgba(102, 102, 102, 1)","font-size":"16px",margin:"10px 0px"}},[t._v("内容内容内容内容内容内容内容")]),e("div",{staticStyle:{color:"rgba(204, 204, 204, 1)","font-size":"14px"}},[t._v("1小时前 浏览量5000+")])])})),0)],1),e("Footer")],1)},o=[],i=e("2c4b"),c={name:"ziliao",components:{Footer:i["a"]},data:function(){return{search:"",list:[],loading:!1,finished:!1}},mounted:function(){},methods:{onSearch:function(){},onLoad:function(){console.log("---")}}},r=c,s=e("2877"),l=Object(s["a"])(r,n,o,!1,null,"0d334369",null);a["default"]=l.exports},bda1:function(t,a,e){t.exports=e.p+"img/tab.571f4580.png"}}]);