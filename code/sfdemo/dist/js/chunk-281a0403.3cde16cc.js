(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-281a0403"],{"175a":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_box"},[a("span",{staticClass:"title_span"},[t._v("新增自动工单")]),a("div",{staticClass:"content_box"},[a("Form",{attrs:{model:t.form_data,"label-position":"right","label-width":80,inline:""}},[a("FormItem",{attrs:{label:"服务类型"}},[a("Select",{staticStyle:{width:"300px"},model:{value:t.form_data.type,callback:function(e){t.$set(t.form_data,"type",e)},expression:"form_data.type"}},t._l(t.typeList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1),a("FormItem",{attrs:{label:"循环周期"}},[a("Select",{staticClass:"date_select",style:{width:"0"===t.form_data.circle_time?"150px":"300px"},model:{value:t.form_data.circle_time,callback:function(e){t.$set(t.form_data,"circle_time",e)},expression:"form_data.circle_time"}},t._l(t.circleList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])})),"0"===t.form_data.circle_time?a("Input",{staticStyle:{width:"120px","margin-left":"10px"},attrs:{value:t.form_data.contact,placeholder:"请输入自定义天数"}}):t._e(),"0"===t.form_data.circle_time?a("span",{staticStyle:{"margin-left":"5px"}},[t._v("天")]):t._e()],1),a("div"),a("FormItem",{attrs:{label:"客户名称"}},[a("Input",{staticStyle:{width:"300px"},attrs:{value:t.form_data.name,readonly:""},on:{"on-focus":t.showModal}})],1),a("FormItem",{attrs:{label:"联系人"}},[a("Input",{staticStyle:{width:"300px"},attrs:{value:t.form_data.contact}})],1),a("div"),a("FormItem",{attrs:{label:"联系电话"}},[a("Input",{staticStyle:{width:"300px"},attrs:{value:t.form_data.phone}})],1),a("FormItem",{attrs:{label:"详细地址"}},[a("Input",{staticStyle:{width:"300px"},attrs:{value:t.form_data.address}})],1),a("div"),a("FormItem",{attrs:{label:"设备名称"}},[a("Input",{staticStyle:{width:"300px"},attrs:{value:t.form_data.address}})],1),a("FormItem",{attrs:{label:"紧急程度"}},[a("Select",{staticStyle:{width:"300px"},model:{value:t.form_data.urgent,callback:function(e){t.$set(t.form_data,"urgent",e)},expression:"form_data.urgent"}},t._l(t.urgentList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1),a("div"),a("FormItem",{attrs:{label:"问题描述"}},[a("Input",{staticStyle:{width:"690px","font-size":"10px"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请描述出现的问题"},model:{value:t.form_data.desc,callback:function(e){t.$set(t.form_data,"desc",e)},expression:"form_data.desc"}})],1),a("div"),a("FormItem",{attrs:{label:"选择人员"}},[a("Transfer",{attrs:{data:t.peopleList,"target-keys":t.targetPeople,"list-style":t.listStyle,titles:["所有人员列表","参与自动派单人员"],filterable:""},on:{"on-change":t.selectPeople}})],1),a("div"),a("FormItem",{attrs:{label:"处理方式"}},[a("Select",{staticStyle:{width:"300px"},model:{value:t.form_data.solve,callback:function(e){t.$set(t.form_data,"solve",e)},expression:"form_data.solve"}},t._l(t.solveList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)],1),a("Button",{staticStyle:{margin:"20px"},attrs:{type:"primary"}},[t._v("保存")]),a("Customer",{ref:"modalShow",on:{setCustomer:t.setCust}})],1)])},o=[],s=(a("7f7f"),a("ab80")),n={name:"index",components:{Customer:s["a"]},data:function(){return{form_data:{type:"1",name:"",contact:"",address:"",phone:"",desc:"常规设备维护保养",urgent:"2",solve:"0"},options1:{shortcuts:[{text:"当前时间",value:function(){return new Date}},{text:"2小时前",value:function(){var t=new Date;return t.setTime(t.getTime()-72e5),t}},{text:"24小时前",value:function(){var t=new Date;return t.setTime(t.getTime()-864e5),t}}],disabledDate:function(t){return t&&t.valueOf()>Date.now()}},typeList:[{label:"维修",value:"1"},{label:"保养",value:"2"}],circleList:[{label:"30天",value:"30"},{label:"60天",value:"60"},{label:"90天",value:"90"},{label:"180天",value:"180"},{label:"270天",value:"270"},{label:"360天",value:"360"},{label:"自定义",value:"0"}],urgentList:[{label:"非常紧急",value:"0"},{label:"紧急",value:"1"},{label:"一般",value:"2"},{label:"不紧急",value:"3"}],solveList:[{label:"上门服务",value:"0"},{label:"远程解决",value:"1"},{label:"其他",value:"2"}],customerList:[{label:"菏泽市政府",value:1001,detail:{contact:"李主任",mobile:"0530-88888888",address:"菏泽市中华路1009号",device:[{name:"路由器",id:10001}]}}],peopleList:[{key:"1",label:"李小宏"},{key:"2",label:"雷小军"},{key:"3",label:"马小腾"}],targetPeople:[],listStyle:{width:"250px",height:"300px"},modalShow:!0}},methods:{changeCustomer:function(t){console.log(t)},showModal:function(){console.log(121),this.$refs["modalShow"].show()},setCust:function(t){var e=this;e.form_data.name=t.name,e.form_data.contact=t.contact,e.form_data.address=t.address,e.form_data.phone=t.phone},selectPeople:function(t){this.targetPeople=t}}},r=n,i=(a("7dc1"),a("2877")),c=Object(i["a"])(r,l,o,!1,null,null,null);c.options.__file="add_auto_order.vue";e["default"]=c.exports},"267c":function(t,e,a){"use strict";var l=a("5065"),o=a.n(l);o.a},5065:function(t,e,a){},"6d02":function(t,e,a){},"7dc1":function(t,e,a){"use strict";var l=a("6d02"),o=a.n(l);o.a},ab80:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{width:"600",title:"选择客户"},on:{"on-ok":t.ok},model:{value:t.show_modal,callback:function(e){t.show_modal=e},expression:"show_modal"}},[a("div",[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字查询..."},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("Button",{staticStyle:{"margin-left":"10px"}},[t._v("搜索")]),a("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"}},[t._v("新增客户")])],1),a("div",{staticStyle:{"margin-top":"10px"}},[a("Table",{ref:"modalTable",attrs:{border:"",columns:t.columns,data:t.customerList},scopedSlots:t._u([{key:"action",fn:function(e){e.row;var l=e.index;return[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(e){t.lookDetail(l)}}},[t._v("详情")])]}}])})],1)])},o=[],s={name:"customer",data:function(){var t=this;return{show_modal:!1,keyword:"",currentChoose:"",columns:[{width:60,title:"选择",key:"id",align:"center",render:function(e,a){var l=a.row.id,o=!1;o=t.currentChoose===l;var s=t;return e("div",[e("Radio",{props:{value:o},on:{"on-change":function(){s.currentChoose=l}}})])}},{title:"客户名称",key:"name",align:"center"},{title:"联系人",key:"contact",align:"center",width:80},{title:"联系电话",key:"phone",align:"center"},{title:"详细地址",key:"address",align:"center"},{title:"操作",slot:"action",align:"center",width:70}],customerList:[{id:"0",name:"市政府",contact:"李主任",phone:"0530-88888888",address:"中华路108号"},{id:"1",name:"市公安局",contact:"王科长",phone:"0530-88888888",address:"中华路118号"},{id:"2",name:"市交通局",contact:"李主任",phone:"0530-88888888",address:"中华路138号"}]}},methods:{show:function(){this.show_modal=!0},lookDetail:function(t){console.log(t)},ok:function(t){if(this.currentChoose){var e=this.customerList[this.currentChoose];this.$emit("setCustomer",e)}else this.$Message.error("请选择客户")}}},n=s,r=(a("267c"),a("2877")),i=Object(r["a"])(n,l,o,!1,null,"766a771f",null);i.options.__file="customer.vue";e["a"]=i.exports}}]);