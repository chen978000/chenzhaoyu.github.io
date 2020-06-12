(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2efd9734"],{5135:function(t,e,a){},"7a772":function(t,e,a){"use strict";var i=a("5135"),r=a.n(i);r.a},"7da9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_box"},[a("div",{staticClass:"top_box"}),a("div",{staticClass:"search_box"},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"输入关键词查询",search:""},on:{"on-search":t.getList},model:{value:t.filter_keyword,callback:function(e){t.filter_keyword=e},expression:"filter_keyword"}}),a("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.goAddFault}},[t._v("新增故障")]),a("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",loading:t.exportLoading},on:{click:t.exportExcel}},[t._v("导出EXCEL")])],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("Table",{attrs:{border:"",columns:t.columns,data:t.fault_list},scopedSlots:t._u([{key:"action",fn:function(e){var i=e.row;e.index;return[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"warning",size:"small"},on:{click:function(e){t.editFault(i)}}},[t._v("编辑")]),a("Poptip",{attrs:{confirm:"",title:"确定删除此数据"},on:{"on-ok":function(e){t.remove(i)}}},[a("Button",{attrs:{type:"error",size:"small"}},[t._v("删除")])],1)]}}])}),a("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[a("Page",{attrs:{total:t.count,page:t.page,"page-size":t.page_size,"show-sizer":"","show-total":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)],1),a("Modal",{attrs:{"mask-closable":!1,title:"编辑故障"},model:{value:t.fault_show,callback:function(e){t.fault_show=e},expression:"fault_show"}},[a("Form",{ref:"faultForm",attrs:{inline:"",model:t.fault_model,rules:t.fault_rules,"label-width":80}},[a("FormItem",{attrs:{label:"设备名称",prop:"device_id"}},[a("Select",{staticStyle:{width:"300px"},on:{"on-change":t.changeDevice},model:{value:t.fault_model.equipmentId,callback:function(e){t.$set(t.fault_model,"equipmentId",e)},expression:"fault_model.equipmentId"}},t._l(t.deviceList,function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.equipmentName))])}))],1),a("FormItem",{attrs:{label:"故障",prop:"problem"}},[a("Input",{staticStyle:{width:"150px"},attrs:{clearable:""},model:{value:t.fault_model.edit_problem,callback:function(e){t.$set(t.fault_model,"edit_problem",e)},expression:"fault_model.edit_problem"}})],1),a("FormItem",{attrs:{label:"解决方案",prop:"solution"}},[a("Input",{staticStyle:{width:"150px"},attrs:{clearable:""},model:{value:t.fault_model.edit_solution,callback:function(e){t.$set(t.fault_model,"edit_solution",e)},expression:"fault_model.edit_solution"}})],1),a("FormItem",{attrs:{label:"备注",prop:"remark"}},[a("Input",{staticStyle:{width:"350px","font-size":"10px"},attrs:{clearable:"",type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请描述出现的问题"},model:{value:t.fault_model.edit_remark,callback:function(e){t.$set(t.fault_model,"edit_remark",e)},expression:"fault_model.edit_remark"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{on:{click:t.hideFaultModal}},[t._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:t.saveFault}},[t._v("确定")])],1)],1)],1)},r=[],n=a("be94"),l=(a("96cf"),a("1da1")),s=a("0a21"),o={name:"fault_list",data:function(){return{filter_keyword:"",fault_show:!1,columns:[{title:"ID",key:"id",align:"center"},{title:"设备名称",key:"equipmentName",align:"center"},{title:"故障",key:"problem",align:"center"},{title:"解决方案",key:"solution",align:"center"},{title:"备注",key:"remark",align:"center"},{title:"操作",slot:"action",width:130,align:"center"}],count:0,page:1,page_size:10,fault_model:{equipmentName:"",equipmentId:"",edit_solution:"",edit_problem:"",edit_remark:""},fault_rules:{device_id:[{required:!0,message:"请选择设备",trigger:"blur",pattern:/.+/}]},fault_list:[],deviceList:[],exportLoading:!1}},mounted:function(){this.getList(),this.getAllDevice()},methods:{getAllDevice:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.device.getListAll();case 2:if(e=t.sent,a=e.err,i=e.data,!a){t.next=8;break}return this.$Message.error(a.message),t.abrupt("return");case 8:this.deviceList=i.data;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),changeDevice:function(t){var e=this;this.deviceList.map(function(a){a.value===t&&(e.fault_model.equipmentName=a.label,e.fault_model.equipmentId=a.value)})},hideFaultModal:function(){this.fault_show=!1,this.clearModal()},clearModal:function(){this.fault_model={equipmentName:"",equipmentId:"",solution:"",problem:"",remark:""}},saveFault:function(){var t=this;this.$refs["faultForm"].validate(function(e){e?t.addFault():t.$Message.error("请按要求输入")})},addFault:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={id:this.fault_model.id,equipmentName:this.fault_model.equipmentName,equipmentId:this.fault_model.equipmentId,solution:this.fault_model.solution,problem:this.fault_model.problem,remark:this.fault_model.remark},t.next=3,this.$service.fault.updateList(e);case 3:if(a=t.sent,i=a.err,a.data,!i){t.next=9;break}return this.$Message.error(i.message),t.abrupt("return");case 9:this.$Message.success("Success!"),this.fault_show=!1;case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,a,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={search:this.filter_keyword,num:this.page,size:this.page_size},this.loading=!0,t.next=4,this.$service.fault.getList(e);case 4:if(a=t.sent,i=a.err,r=a.data,this.loading=!1,!i){t.next=11;break}return this.$Message.error(i.message),t.abrupt("return");case 11:this.fault_list=r.data.list,this.count=r.data.count;case 13:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),editFault:function(t){this.fault_show=!0,this.fault_model=Object(n["a"])({},t,{edit_solution:t.solution,edit_problem:t.problem,edit_remark:t.remark})},remove:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$service.fault.deleteFault(e.id);case 2:if(a=t.sent,i=a.err,a.data,!i){t.next=8;break}return this.$Message.error(i.message),t.abrupt("return");case 8:this.getList();case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),goAddFault:function(){this.$router.push({path:"/knowledge/add_fault"})},changePage:function(t){this.page=t,this.getList()},changePageSize:function(t){this.page=1,this.page_size=t,this.getList()},exportExcel:function(){if(this.fault_list.length){this.exportLoading=!0;var t=this.columns.map(function(t){if(t.key)return t.title}).filter(function(t){return void 0!=t}),e=this.columns.map(function(t){if(t.key)return t.key}).filter(function(t){return void 0!=t}),a=this.fault_list,i={title:t,key:e,data:a,autoWidth:!0,filename:"设备列表"};s["a"].export_array_to_excel(i),this.exportLoading=!1}else this.$Message.info("表格数据不能为空！")}}},u=o,c=(a("7a772"),a("2877")),d=Object(c["a"])(u,i,r,!1,null,null,null);d.options.__file="fault_list.vue";e["default"]=d.exports}}]);