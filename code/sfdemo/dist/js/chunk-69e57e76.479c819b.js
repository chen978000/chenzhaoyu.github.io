(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69e57e76"],{"267c":function(t,e,a){"use strict";var o=a("5065"),n=a.n(o);n.a},5065:function(t,e,a){},"5c98":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_box"},[a("span",{staticClass:"title_span"},[t._v("备件出库")]),a("div",{staticClass:"content_box"},[a("Form",{attrs:{model:t.form_data,"label-position":"right","label-width":80,inline:""}},[a("FormItem",{attrs:{label:"备件名称"}},[a("Input",{staticStyle:{width:"300px"},attrs:{value:t.form_data.name}})],1),a("FormItem",{attrs:{label:"出库数量"}},[a("Input",{staticStyle:{width:"300px"},attrs:{value:t.form_data.address}})],1),a("div"),a("FormItem",{attrs:{label:"出库数量"}},[a("Input",{staticStyle:{width:"300px"},attrs:{value:t.form_data.contact}})],1),a("FormItem",{attrs:{label:"领用人"}},[a("Input",{staticStyle:{width:"300px"},attrs:{value:t.form_data.phone}})],1),a("div"),a("FormItem",{attrs:{label:"领用说明"}},[a("Input",{staticStyle:{width:"690px","font-size":"10px"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请描述出现的问题"},model:{value:t.form_data.desc,callback:function(e){t.$set(t.form_data,"desc",e)},expression:"form_data.desc"}})],1)],1),a("Button",{staticStyle:{margin:"20px"},attrs:{type:"primary"}},[t._v("保存")])],1)])},n=[],s=(a("7f7f"),a("ab80")),l={name:"index",components:{Customer:s["a"]},data:function(){return{form_data:{type:"1",name:"",contact:"",address:"",phone:"",urgent:"2",solve:"0"},deviceList:[{label:"服务器",value:"1"},{label:"路由器",value:"2"}],typeList:[{label:"维修",value:"1"},{label:"保养",value:"2"}],urgentList:[{label:"非常紧急",value:"0"},{label:"紧急",value:"1"},{label:"一般",value:"2"},{label:"不紧急",value:"3"}],solveList:[{label:"上门服务",value:"0"},{label:"远程解决",value:"1"},{label:"其他",value:"2"}],customerList:[{label:"菏泽市政府",value:1001,detail:{contact:"李主任",mobile:"0530-88888888",address:"菏泽市中华路1009号",device:[{name:"路由器",id:10001}]}}],modalShow:!0}},methods:{changeCustomer:function(t){console.log(t)},showModal:function(){console.log(121),this.$refs["modalShow"].show()},setCust:function(t){var e=this;e.form_data.name=t.name,e.form_data.contact=t.contact,e.form_data.address=t.address,e.form_data.phone=t.phone,console.log(e.form_data)},goToAddDevice:function(){}}},r=l,i=(a("f7bb"),a("2877")),c=Object(i["a"])(r,o,n,!1,null,"6ac22646",null);c.options.__file="remove_spare.vue";e["default"]=c.exports},ab80:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{width:"600",title:"选择客户"},on:{"on-ok":t.ok},model:{value:t.show_modal,callback:function(e){t.show_modal=e},expression:"show_modal"}},[a("div",[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字查询..."},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("Button",{staticStyle:{"margin-left":"10px"}},[t._v("搜索")]),a("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"}},[t._v("新增客户")])],1),a("div",{staticStyle:{"margin-top":"10px"}},[a("Table",{ref:"modalTable",attrs:{border:"",columns:t.columns,data:t.customerList},scopedSlots:t._u([{key:"action",fn:function(e){e.row;var o=e.index;return[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(e){t.lookDetail(o)}}},[t._v("详情")])]}}])})],1)])},n=[],s={name:"customer",data:function(){var t=this;return{show_modal:!1,keyword:"",currentChoose:"",columns:[{width:60,title:"选择",key:"id",align:"center",render:function(e,a){var o=a.row.id,n=!1;n=t.currentChoose===o;var s=t;return e("div",[e("Radio",{props:{value:n},on:{"on-change":function(){s.currentChoose=o}}})])}},{title:"客户名称",key:"name",align:"center"},{title:"联系人",key:"contact",align:"center",width:80},{title:"联系电话",key:"phone",align:"center"},{title:"详细地址",key:"address",align:"center"},{title:"操作",slot:"action",align:"center",width:70}],customerList:[{id:"0",name:"市政府",contact:"李主任",phone:"0530-88888888",address:"中华路108号"},{id:"1",name:"市公安局",contact:"王科长",phone:"0530-88888888",address:"中华路118号"},{id:"2",name:"市交通局",contact:"李主任",phone:"0530-88888888",address:"中华路138号"}]}},methods:{show:function(){this.show_modal=!0},lookDetail:function(t){console.log(t)},ok:function(t){if(this.currentChoose){var e=this.customerList[this.currentChoose];this.$emit("setCustomer",e)}else this.$Message.error("请选择客户")}}},l=s,r=(a("267c"),a("2877")),i=Object(r["a"])(l,o,n,!1,null,"766a771f",null);i.options.__file="customer.vue";e["a"]=i.exports},c379:function(t,e,a){},f7bb:function(t,e,a){"use strict";var o=a("c379"),n=a.n(o);n.a}}]);