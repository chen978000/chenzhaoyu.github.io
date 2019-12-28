(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2404c3e4"],{2493:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main_box"},[r("span",{staticClass:"title_span"},[e._v("新增工单")]),r("div",{staticClass:"content_box"},[r("Form",{ref:"mainForm",attrs:{model:e.form_data,rules:e.formRules,"label-position":"right","label-width":80}},[r("FormItem",{attrs:{label:"服务类型"}},[r("Select",{staticStyle:{width:"300px"},model:{value:e.form_data.serverType,callback:function(t){e.$set(e.form_data,"serverType",t)},expression:"form_data.serverType"}},e._l(e.typeList,function(t){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1),r("FormItem",{attrs:{label:"报单时间",prop:"order_time"}},[r("DatePicker",{staticStyle:{width:"300px"},attrs:{options:e.options1,type:"datetime",placeholder:"请选择报单时间"},on:{"on-change":e.changeTime},model:{value:e.form_data.order_time,callback:function(t){e.$set(e.form_data,"order_time",t)},expression:"form_data.order_time"}})],1),r("FormItem",{attrs:{label:"客户名称",prop:"companyId"}},[r("Select",{staticStyle:{width:"300px"},attrs:{filterable:""},on:{"on-change":e.changeCustomer},model:{value:e.form_data.companyId,callback:function(t){e.$set(e.form_data,"companyId",t)},expression:"form_data.companyId"}},e._l(e.customerList,function(t){return r("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.companyName))])}))],1),e.form_data.companyId?r("FormItem",{attrs:{label:"联系人",prop:"costomName"}},[r("Input",{staticStyle:{width:"300px"},attrs:{value:e.form_data.costomName}})],1):e._e(),e.form_data.companyId?r("FormItem",{attrs:{label:"联系电话",prop:"mobile"}},[r("Input",{staticStyle:{width:"300px"},attrs:{value:e.form_data.mobile}})],1):e._e(),e.form_data.companyId?r("FormItem",{attrs:{label:"设备名称",prop:"equipmentId"}},[r("Select",{staticStyle:{width:"300px"},attrs:{filterable:""},on:{"on-change":e.changeEquipment},model:{value:e.form_data.equipmentId,callback:function(t){e.$set(e.form_data,"equipmentId",t)},expression:"form_data.equipmentId"}},e._l(e.equipmentList,function(t){return r("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.equipmentName))])}))],1):e._e(),r("FormItem",{attrs:{label:"问题描述",prop:"serverNote"}},[r("Input",{staticStyle:{width:"300px","font-size":"10px"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请描述出现的问题"},model:{value:e.form_data.serverNote,callback:function(t){e.$set(e.form_data,"serverNote",t)},expression:"form_data.serverNote"}})],1),r("FormItem",{attrs:{label:"派工"}},[r("Select",{staticStyle:{width:"300px"},on:{"on-change":e.changeTechUser},model:{value:e.form_data.userId,callback:function(t){e.$set(e.form_data,"userId",t)},expression:"form_data.userId"}},e._l(e.techUserList,function(t){return r("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}))],1)],1),r("Button",{staticStyle:{margin:"20px"},attrs:{type:"primary"},on:{click:e.saveOrder}},[e._v("保存")])],1)])},n=[],s=(r("7f7f"),r("96cf"),r("1da1")),o=r("ab80"),i={name:"index",components:{Customer:o["a"]},data:function(){return{form_data:{serverType:"",order_time:"",serverStarttime:"",companyName:"",companyId:"",costomName:"",address:"",mobile:"",equipmentId:"",equipmentName:"",dealType:"0",serverNote:"",handler:"",userId:"",userName:""},equipmentList:[],formRules:{order_time:[{required:!0,message:"请选择报单时间",trigger:"blur",pattern:/.+/}],companyId:[{required:!0,message:"请选择客户",trigger:"blur",pattern:/.+/}],costomName:[{required:!0,message:"联系人不允许为空",trigger:"blur"}],mobile:[{required:!0,message:"联系电话不允许为空",trigger:"blur"}],equipmentId:[{required:!0,message:"请选择设备",trigger:"change"}],serverNote:[{required:!0,message:"请输入问题描述",trigger:"blur"}]},options1:{shortcuts:[{text:"当前时间",value:function(){return new Date}},{text:"2小时前",value:function(){var e=new Date;return e.setTime(e.getTime()-72e5),e}},{text:"24小时前",value:function(){var e=new Date;return e.setTime(e.getTime()-864e5),e}}],disabledDate:function(e){return e&&e.valueOf()>Date.now()}},typeList:[],techUserList:[],customerList:[],dmlb:"",modalShow:!0}},mounted:function(){this.getCustomer(),this.getTechUserList(),this.getServerType()},watch:{"form_data.companyId":{handler:function(e){this.getDevice(e)},deep:!0}},methods:{getServerType:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={dmlb:"serverType"},e.next=3,this.$service.order.getServer(t);case 3:if(r=e.sent,a=r.err,n=r.data,!a){e.next=9;break}return this.$Message.error(a.message),e.abrupt("return");case 9:this.typeList=n.data.map(function(e){return{value:e.dmz,label:e.dmsm1}});case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getParams:function(){var e=this.$route.params;e.customerId&&(this.form_data.companyId=e.customerId,this.form_data.equipmentId=e.deviceId,this.changeCustomer(e.customerId))},changeTime:function(e){this.form_data.serverStarttime=e},changeEquipment:function(e){var t=this;this.equipmentList.map(function(r){r.value===e&&(t.form_data.equipmentName=r.label,t.form_data.equipmentId=r.value)})},saveOrder:function(){var e=this;this.$refs["mainForm"].validate(function(t){t?e.addOrder():e.$Message.error("请按要求输入")})},addOrder:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={serverType:this.form_data.serverType,serverStarttime:this.form_data.serverStarttime,costomName:this.form_data.costomName,companyName:this.form_data.companyName,companyId:this.form_data.companyId,mobile:this.form_data.mobile,address:this.form_data.address,equipmentName:this.form_data.equipmentName,equipmentId:this.form_data.equipmentId,serverNote:this.form_data.serverNote,userId:this.form_data.userId,userName:this.form_data.userName},e.next=3,this.$service.order.addOrder(t);case 3:if(r=e.sent,a=r.err,n=r.data,!a){e.next=9;break}return this.$Message.error(a.message),e.abrupt("return");case 9:this.$Message.success(n.message),this.$router.push({name:"order_list"});case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getCustomer:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.customer.getListAll();case 2:if(t=e.sent,r=t.err,a=t.data,!r){e.next=8;break}return this.$Message.error(r.message),e.abrupt("return");case 8:this.customerList=a.data,this.getParams();case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changeCustomer:function(e){var t=this;this.customerList.map(function(r){r.id===e&&(t.form_data.companyName=r.companyName,t.form_data.costomName=r.costomName,t.form_data.mobile=r.mobile)})},getDevice:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var r,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.device.getListAll({costomId:t});case 2:if(r=e.sent,a=r.err,n=r.data,!a){e.next=8;break}return this.$Message.error(a.message),e.abrupt("return");case 8:this.equipmentList=n.data;case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),getTechUserList:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.techUser.getList();case 2:if(t=e.sent,r=t.err,a=t.data,!r){e.next=8;break}return this.$Message.error(r.message),e.abrupt("return");case 8:this.techUserList=a.data;case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changeTechUser:function(e){var t=this;this.techUserList.map(function(r){r.id===e&&(t.form_data.userName=r.name)})}}},m=i,c=(r("bdce"),r("2877")),u=Object(c["a"])(m,a,n,!1,null,"1a47ed31",null);u.options.__file="add_order.vue";t["default"]=u.exports},"3f53":function(e,t,r){},7292:function(e,t,r){"use strict";var a=r("3f53"),n=r.n(a);n.a},ab80:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Modal",{attrs:{width:"600",title:"选择客户"},on:{"on-ok":e.ok},model:{value:e.show_modal,callback:function(t){e.show_modal=t},expression:"show_modal"}},[r("div",[r("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字查询..."},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),r("Button",{staticStyle:{"margin-left":"10px"}},[e._v("搜索")]),r("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"}},[e._v("新增客户")])],1),r("div",{staticStyle:{"margin-top":"10px"}},[r("Table",{ref:"modalTable",attrs:{border:"",columns:e.columns,data:e.customerList},scopedSlots:e._u([{key:"action",fn:function(t){t.row;var a=t.index;return[r("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(t){e.lookDetail(a)}}},[e._v("详情")])]}}])})],1)])},n=[],s={name:"customer",data:function(){var e=this;return{show_modal:!1,keyword:"",currentChoose:"",columns:[{width:60,title:"选择",key:"id",align:"center",render:function(t,r){var a=r.row.id,n=!1;n=e.currentChoose===a;var s=e;return t("div",[t("Radio",{props:{value:n},on:{"on-change":function(){s.currentChoose=a}}})])}},{title:"客户名称",key:"name",align:"center"},{title:"联系人",key:"contact",align:"center",width:80},{title:"联系电话",key:"phone",align:"center"},{title:"详细地址",key:"address",align:"center"},{title:"操作",slot:"action",align:"center",width:70}],customerList:[{id:"0",name:"市政府",contact:"李主任",phone:"0530-88888888",address:"中华路108号"},{id:"1",name:"市公安局",contact:"王科长",phone:"0530-88888888",address:"中华路118号"},{id:"2",name:"市交通局",contact:"李主任",phone:"0530-88888888",address:"中华路138号"}]}},methods:{show:function(){this.show_modal=!0},lookDetail:function(e){},ok:function(e){if(this.currentChoose){var t=this.customerList[this.currentChoose];this.$emit("setCustomer",t)}else this.$Message.error("请选择客户")}}},o=s,i=(r("7292"),r("2877")),m=Object(i["a"])(o,a,n,!1,null,"25f3fd9a",null);m.options.__file="customer.vue";t["a"]=m.exports},bdce:function(e,t,r){"use strict";var a=r("dd70"),n=r.n(a);n.a},dd70:function(e,t,r){}}]);