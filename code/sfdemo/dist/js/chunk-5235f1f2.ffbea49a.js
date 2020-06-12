(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5235f1f2"],{"16bf":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main_box"},[r("div",{staticClass:"top_box"},[e.btnList.indexOf("btn_addOrder")>-1?r("Button",{attrs:{type:"primary"},on:{click:e.goAddOrder}},[e._v("新增工单")]):e._e(),r("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",loading:e.exportLoading},on:{click:e.exportExcel}},[e._v("导出EXCEL")])],1),r("div",{staticClass:"search_box"},[r("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"输入关键词查询",search:""},on:{"on-search":e.getList},model:{value:e.filter_keyword,callback:function(t){e.filter_keyword=t},expression:"filter_keyword"}}),r("span",{staticStyle:{"margin-left":"10px"}},[e._v("工单时间：")]),r("DatePicker",{staticStyle:{width:"200px"},attrs:{options:e.invalidDate,type:"daterange",placement:"bottom-end",placeholder:"自定义时间"},on:{"on-change":e.changeFilterTime}}),r("span",{staticStyle:{"margin-left":"10px"}},[e._v("工单状态：")]),r("Select",{staticStyle:{width:"100px"},on:{"on-change":e.changeState},model:{value:e.filter_state,callback:function(t){e.filter_state=t},expression:"filter_state"}},e._l(e.stateList,function(t){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),r("span",{staticStyle:{"margin-left":"10px"}},[e._v("是否异常：")]),r("Select",{staticStyle:{width:"100px"},on:{"on-change":e.changeIfabnormal},model:{value:e.filter_ifabnormal,callback:function(t){e.filter_ifabnormal=t},expression:"filter_ifabnormal"}},e._l(e.ifabnormalList,function(t){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1),r("div",{staticStyle:{"margin-top":"20px"}},[r("Table",{attrs:{border:"",loading:e.loading,columns:e.columns,data:e.order_list},scopedSlots:e._u([{key:"orderCode",fn:function(t){var a=t.row;t.index;return["1"===a.orderType?r("span",{staticClass:"tag_span"},[e._v("自动")]):e._e(),r("span",[e._v(e._s(a.orderCode))])]}},{key:"state",fn:function(t){var a=t.row;t.index;return[1==a.state?r("span",{staticStyle:{color:"#EE6542"}},[e._v("待派工")]):e._e(),2==a.state?r("span",{staticStyle:{color:"#FFAD33"}},[e._v("待完工")]):e._e(),3==a.state?r("span",{staticStyle:{color:"#47CB89"}},[e._v("已完工")]):e._e()]}},{key:"ifabnormal",fn:function(t){var a=t.row;t.index;return[0==a.ifabnormal?r("span",{staticStyle:{color:"#0000FF"}},[e._v("正常")]):e._e(),1==a.ifabnormal?r("span",{staticStyle:{color:"#CC0001"}},[e._v("异常")]):e._e()]}},{key:"dealDetails",fn:function(t){var a=t.row;t.index;return[2===a.state&&-1!=e.btnList.indexOf("btn_solveOrder")?r("Button",{attrs:{type:"success",size:"small"},on:{click:function(t){e.showSolve(a)}}},[e._v("处理")]):r("span",[e._v(e._s(a.dealDetails))])]}},{key:"userName",fn:function(t){var a=t.row;t.index;return[r("Poptip",{attrs:{width:"300"}},[1===a.state&&-1!=e.btnList.indexOf("btn_addSpare")?r("Button",{attrs:{type:"primary",size:"small"},on:{click:e.getTechUserList}},[e._v("派工")]):e._e(),r("div",{attrs:{slot:"content"},slot:"content"},[r("span",{staticStyle:{"margin-right":"5px"}},[e._v("选择人员")]),r("Select",{staticStyle:{width:"160px"},attrs:{"label-in-value":""},on:{"on-change":e.changeTechUser},model:{value:e.select_people_id,callback:function(t){e.select_people_id=t},expression:"select_people_id"}},e._l(e.techUserList,function(t){return r("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])})),r("Button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(t){e.saveTechUser(a)}}},[e._v("确定")])],1)],1),1!==a.state?r("span",[e._v(e._s(a.userName))]):e._e()]}},{key:"action",fn:function(t){var a=t.row;t.index;return[-1!=e.btnList.indexOf("btn_editOrder")?r("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(t){e.showEdit(a)}}},[e._v("编辑")]):e._e(),r("Poptip",{attrs:{confirm:"",title:"确定删除此工单"},on:{"on-ok":function(t){e.remove(a)}}},[-1!=e.btnList.indexOf("btn_deleteOrder")?r("Button",{attrs:{type:"error",size:"small"}},[e._v("删除")]):e._e()],1)]}}])}),r("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[r("Page",{attrs:{total:e.count,page:e.page,"page-size":e.page_size,"show-sizer":"","show-total":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1),r("Modal",{attrs:{width:"450",title:"填写处理详情"},model:{value:e.solve_model_show,callback:function(t){e.solve_model_show=t},expression:"solve_model_show"}},[r("Form",{ref:"solve_form",attrs:{model:e.solve_form_data,rules:e.solve_form_rule}},[r("FormItem",{attrs:{label:"处理时间",prop:"solve_time"}},[r("DatePicker",{staticStyle:{width:"300px"},attrs:{options:e.options1,type:"datetime",placeholder:"请选择时间"},on:{"on-change":e.changeSolveTime},model:{value:e.solve_form_data.solve_time,callback:function(t){e.$set(e.solve_form_data,"solve_time",t)},expression:"solve_form_data.solve_time"}})],1),r("FormItem",{attrs:{label:"处理详情",prop:"solve_detail"}},[r("Input",{staticStyle:{width:"300px"},attrs:{type:"textarea",placeholder:"请填写处理详情"},model:{value:e.solve_form_data.solve_detail,callback:function(t){e.$set(e.solve_form_data,"solve_detail",t)},expression:"solve_form_data.solve_detail"}})],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{on:{click:function(t){e.solve_model_show=!1}}},[e._v("取消")]),r("Button",{attrs:{type:"primary"},on:{click:e.confirmSolve}},[e._v("确定")])],1)],1),r("Modal",{attrs:{width:"450",title:"编辑工单"},model:{value:e.editModelShow,callback:function(t){e.editModelShow=t},expression:"editModelShow"}},[r("Form",{ref:"mainForm",attrs:{model:e.editFormData,rules:e.edit_form_rule,"label-position":"right","label-width":80}},[r("FormItem",{attrs:{label:"服务类型"}},[r("Select",{staticStyle:{width:"300px"},model:{value:e.editFormData.serverType,callback:function(t){e.$set(e.editFormData,"serverType",t)},expression:"editFormData.serverType"}},e._l(e.typeList,function(t){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1),r("FormItem",{attrs:{label:"报单时间",prop:"serverStarttime"}},[r("DatePicker",{staticStyle:{width:"300px"},attrs:{options:e.options1,type:"datetime",placeholder:"请选择报单时间"},on:{"on-change":e.changeTime},model:{value:e.editFormData.serverStarttime,callback:function(t){e.$set(e.editFormData,"serverStarttime",t)},expression:"editFormData.serverStarttime"}})],1),r("FormItem",{attrs:{label:"客户名称",prop:"companyId"}},[r("Select",{staticStyle:{width:"300px"},attrs:{filterable:""},on:{"on-change":e.changeCustomer},model:{value:e.editFormData.companyId,callback:function(t){e.$set(e.editFormData,"companyId",t)},expression:"editFormData.companyId"}},e._l(e.customerList,function(t){return r("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.companyName))])}))],1),e.editFormData.companyId?r("FormItem",{attrs:{label:"联系人",prop:"costomName"}},[r("Input",{staticStyle:{width:"300px"},attrs:{value:e.editFormData.costomName}})],1):e._e(),e.editFormData.companyId?r("FormItem",{attrs:{label:"联系电话",prop:"mobile"}},[r("Input",{staticStyle:{width:"300px"},attrs:{value:e.editFormData.mobile}})],1):e._e(),e.editFormData.companyId?r("FormItem",{attrs:{label:"设备名称",prop:"equipmentId"}},[r("Select",{staticStyle:{width:"300px"},attrs:{filterable:""},on:{"on-change":e.changeEquipment},model:{value:e.editFormData.equipmentId,callback:function(t){e.$set(e.editFormData,"equipmentId",t)},expression:"editFormData.equipmentId"}},e._l(e.equipmentList,function(t){return r("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.equipmentName))])}))],1):e._e(),r("FormItem",{attrs:{label:"问题描述",prop:"edit_serverNote"}},[r("Input",{staticStyle:{width:"300px","font-size":"10px"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请描述出现的问题"},model:{value:e.editFormData.edit_serverNote,callback:function(t){e.$set(e.editFormData,"edit_serverNote",t)},expression:"editFormData.edit_serverNote"}})],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{on:{click:e.hideModal}},[e._v("取消")]),r("Button",{attrs:{type:"primary"},on:{click:e.saveCheck}},[e._v("确定")])],1)],1)],1)},i=[];function s(e,t){if(null==e)return{};var r,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}function n(e,t){if(null==e)return{};var r,a,i=s(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=r("be94"),l=(r("96cf"),r("1da1")),c=r("0a21"),u={name:"order_list",data:function(){return{loading:!1,invalidDate:{disabledDate:function(e){return e&&e.valueOf()>Date.now()}},startTime:"",endTime:"",filter_keyword:"",filter_state:0,filter_ifabnormal:2,btnList:[],stateList:[{label:"全部",value:0},{label:"待派工",value:1},{label:"待完成",value:2},{label:"已完成",value:3}],ifabnormalList:[{label:"全部",value:2},{label:"正常",value:0},{label:"异常",value:1}],typeList:[],columns:[{title:"工单号",key:"orderCode",slot:"orderCode",align:"center"},{title:"工单状态",key:"state",slot:"state",align:"center",width:85},{title:"是否异常",key:"ifabnormal",slot:"ifabnormal",align:"center",width:85},{title:"报单时间",key:"serverStarttime",align:"center"},{title:"客户名称",key:"companyName",align:"center"},{title:"问题描述",key:"serverNote",align:"center"},{title:"处理详情",slot:"dealDetails",align:"center"},{title:"处理人",slot:"userName",align:"center",width:80},{title:"处理时间",key:"dealTime",align:"center"},{title:"操作",slot:"action",width:130}],order_list:[],count:0,page:1,page_size:10,select_people_id:"",select_people_name:"",solve_model_show:!1,techUserList:[],options1:{disabledDate:function(e){return e&&e.valueOf()>Date.now()}},solve_form_data:{solve_time:"",solve_detail:""},solve_form_rule:{solve_time:[{required:!0,message:"处理时间不允许为空",trigger:"blur"}],solve_detail:[{required:!0,message:"处理详情不允许为空",trigger:"blur"}]},current_order_id:"",editModelShow:!1,editFormData:{id:"",serverType:"",serverStarttime:"",companyName:"",companyId:"",costomName:"",address:"",mobile:"",equipmentId:"",equipmentName:"",dealType:"0",edit_serverNote:"",userId:"",userName:""},edit_form_rule:{serverStarttime:[{required:!0,message:"请选择报单时间",trigger:"blur",pattern:/.+/}],companyId:[{required:!0,message:"请选择客户",trigger:"blur",pattern:/.+/}],costomName:[{required:!0,message:"联系人不允许为空",trigger:"blur"}],mobile:[{required:!0,message:"联系电话不允许为空",trigger:"blur"}],equipmentId:[{required:!0,message:"请选择设备",trigger:"blur"}],edit_serverNote:[{required:!0,message:"请输入问题描述",trigger:"blur"}]},equipmentList:[],customerList:[],dmlb:"",exportLoading:!1}},created:function(){this.getRouteParam(),this.getServerType()},watch:{"editFormData.companyId":{handler:function(e){this.getDevice(e)},deep:!0}},methods:{getServerType:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={dmlb:"serverType"},e.next=3,this.$service.order.getServer(t);case 3:if(r=e.sent,a=r.err,i=r.data,!a){e.next=9;break}return this.$Message.error(a.message),e.abrupt("return");case 9:this.typeList=i.data.map(function(e){return{value:e.dmz,label:e.dmsm1}});case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getRouteParam:function(){var e=this.$route.params.state,t=this.$route.params.ifabnormal;t&&(this.filter_state=e,this.filter_ifabnormal=t),this.btnList=sessionStorage.getItem("btnList"),this.getList()},getList:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={search:this.filter_keyword,startTime:this.startTime,endTime:this.endTime,state:0===this.filter_state?"":this.filter_state,ifabnormal:2===this.filter_ifabnormal?"":this.filter_ifabnormal,num:this.page,size:this.page_size},this.loading=!0,e.next=4,this.$service.order.getList(t);case 4:if(r=e.sent,a=r.err,i=r.data,this.loading=!1,!a){e.next=11;break}return this.$Message.error(a.message),e.abrupt("return");case 11:this.order_list=i.data.list,this.count=i.data.count;case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changeFilterTime:function(e){e[0]?(this.startTime="".concat(e[0]," 00:00:00"),this.endTime="".concat(e[1]," 23:59:59")):(this.startTime="",this.endTime=""),this.getList()},changeState:function(e){this.page=1,this.getList()},changeIfabnormal:function(){this.page=1,this.getList()},showSolve:function(e){this.solve_model_show=!0,this.current_order_id=e.id},changeSolveTime:function(e){this.solve_form_data.solve_time=e},confirmSolve:function(){var e=this;this.$refs["solve_form"].validate(function(t){t?e.saveSolve():e.$Message.error("请按要求输入")})},saveSolve:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={id:this.current_order_id,state:3,dealTime:this.solve_form_data.solve_time,dealDetails:this.solve_form_data.solve_detail},e.next=3,this.$service.order.solveOrder(t);case 3:if(r=e.sent,a=r.err,i=r.data,!a){e.next=9;break}return this.$Message.error(a.message),e.abrupt("return");case 9:this.$Message.success(i.message),this.solve_model_show=!1,this.getList();case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),remove:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.order.deleteOrder(t.id);case 2:if(r=e.sent,a=r.err,r.data,!a){e.next=8;break}return this.$Message.error(a.message),e.abrupt("return");case 8:this.getList();case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),goAddOrder:function(){this.$router.push({path:"/workOrder/add_order"})},getTechUserList:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.techUser.getList();case 2:if(t=e.sent,r=t.err,a=t.data,!r){e.next=8;break}return this.$Message.error(r.message),e.abrupt("return");case 8:this.techUserList=a.data;case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changeTechUser:function(e){this.select_people_name=e.label,this.select_people_id=e.value},saveTechUser:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var r,a,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.select_people_id){e.next=3;break}return this.$Message.error("请选择人员"),e.abrupt("return");case 3:return r={id:t.id,state:2,userId:this.select_people_id,userName:this.select_people_name},e.next=6,this.$service.order.saveSolveUser(r);case 6:if(a=e.sent,i=a.err,s=a.data,!i){e.next=12;break}return this.$Message.error(i.message),e.abrupt("return");case 12:this.$Message.success(s.message),this.getList();case 14:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),showEdit:function(e){this.editModelShow=!0,this.current_order_id=e.id,this.getCustomer(),this.editFormData=Object(o["a"])({},e,{edit_serverNote:e.serverNote})},changeTime:function(e){this.editFormData.serverStarttime=e},changeCustomer:function(e){var t=this;this.customerList.map(function(r){r.id===e&&(t.editFormData.companyName=r.companyName,t.editFormData.costomName=r.costomName,t.editFormData.mobile=r.mobile,t.editFormData.equipmentId="",t.editFormData.equipmentName="")})},changeEquipment:function(e){var t=this;this.equipmentList.map(function(r){r.id===e&&(t.editFormData.equipmentName=r.equipmentName)})},getCustomer:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.customer.getListAll();case 2:if(t=e.sent,r=t.err,a=t.data,!r){e.next=8;break}return this.$Message.error(r.message),e.abrupt("return");case 8:this.customerList=a.data;case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getDevice:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.device.getListAll({costomId:t});case 2:if(r=e.sent,a=r.err,i=r.data,!a){e.next=8;break}return this.$Message.error(a.message),e.abrupt("return");case 8:this.equipmentList=i.data;case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),hideModal:function(){this.editModelShow=!1,this.clearModal()},clearModal:function(){this.editFormData={id:"",serverType:"",serverStarttime:"",companyName:"",companyId:"",costomName:"",address:"",mobile:"",equipmentId:"",equipmentName:"",dealType:"0",edit_serverNote:"",userId:"",userName:""}},saveCheck:function(){var e=this;this.$refs["mainForm"].validate(function(t){t?e.editOrder():e.$Message.error("请按要求输入")})},editOrder:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,r,a,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.editFormData,t.edit_serverNote,r=n(t,["edit_serverNote"]),r=Object(o["a"])({},r,{edit_serverNote:this.editFormData.serverNote}),e.next=4,this.$service.order.editOrder(r);case 4:if(a=e.sent,i=a.err,s=a.data,!i){e.next=10;break}return this.$Message.error(i.message),e.abrupt("return");case 10:this.$Message.success(s.message),this.getList();case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changePage:function(e){this.page=e,this.getList()},changePageSize:function(e){this.page=1,this.page_size=e,this.getList()},exportExcel:function(){if(this.order_list.length){this.exportLoading=!0;var e=this.columns.map(function(e){if(e.key)return e.title}).filter(function(e){return void 0!=e}),t=this.columns.map(function(e){if(e.key)return e.key}).filter(function(e){return void 0!=e}),r=this.order_list.map(function(e){return Object(o["a"])({},e,{order_state:1==e.order_state?"待派工":2==e.order_state?"待完工":3==e.order_state?"已完工":"其他"})}),a={title:e,key:t,data:r,autoWidth:!0,filename:"工单列表"};c["a"].export_array_to_excel(a),this.exportLoading=!1}else this.$Message.info("表格数据不能为空！")}}},d=u,m=(r("1933"),r("2877")),p=Object(m["a"])(d,a,i,!1,null,null,null);p.options.__file="order_list.vue";t["default"]=p.exports},1933:function(e,t,r){"use strict";var a=r("c552"),i=r.n(a);i.a},c552:function(e,t,r){}}]);