(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-828ecf24"],{"04a7":function(t,a,e){"use strict";var s=e("b94d"),i=e.n(s);i.a},b94d:function(t,a,e){},fbb8:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",[e("van-nav-bar",{attrs:{title:"我的预约",border:!1},on:{"click-left":t.goBack}},[e("van-icon",{attrs:{slot:"left",size:"28px",name:"arrow-left"},slot:"left"})],1)],1),e("div",{staticClass:"main_box_detail"},[e("van-cell-group",{staticClass:"group_box"},[e("template",{slot:"title"},[e("div",[e("span",{staticStyle:{"font-size":"18px"}},[t._v("交警业务预约")]),0==t.detail.status?e("span",{staticClass:"already_order_span tag_span"},[t._v("已预约")]):t._e(),1==t.detail.status?e("span",{staticClass:"already_arrive_span tag_span"},[t._v("已到达")]):t._e(),2==t.detail.status?e("span",{staticClass:"arrive_ing_span tag_span"},[t._v("已取消")]):t._e()]),e("div",{staticStyle:{"font-size":"12px",color:"rgba(0,0,0,0.45)","margin-top":"4px"}},[t._v(t._s(t.detail.id))])]),e("van-cell",{attrs:{border:!1,title:"姓名",value:"卜*"}}),e("van-cell",{attrs:{border:!1,title:"手机号码",value:t.detail.userid}}),e("van-cell",{attrs:{border:!1,title:"业务名称",value:t.detail.businessname}}),e("van-cell",{attrs:{border:!1,title:"车管所名称",value:t.detail.cgsname}}),e("van-cell",{attrs:{border:!1,title:"车管所地址",value:t.detail.address}})],2),e("div",{staticClass:"cancel_order_btn",on:{click:t.cancelOrder}},[t._v("取消预约")])],1)])},i=[],n={name:"order_detail",data:function(){return{detail:""}},mounted:function(){this.getDetail()},methods:{goBack:function(){this.$router.back(-1)},getDetail:function(){this.detail=JSON.parse(sessionStorage.getItem("orderDetail")),console.log(this.detail)},cancelOrder:function(){var t=this;this.$dialog.confirm({title:"提示",message:"确定取消此预约？"}).then(function(){t.cancelOk()}).catch(function(){})},cancelOk:function(){var t=this,a={bookId:this.detail.id},e={headers:{"Content-Type":"multipart/form-data"}};this.$API.cancelBookInfo(a,e).then(function(a){200===a.code?(t.$toast(a.msg),t.goBack()):t.$toast(a.msg)})}}},l=n,r=(e("04a7"),e("2877")),o=Object(r["a"])(l,s,i,!1,null,"7f6e24d4",null);o.options.__file="order_detail.vue";a["default"]=o.exports}}]);