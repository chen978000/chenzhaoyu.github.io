(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18adedc9"],{"4db8":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main_box"},[i("div",{staticClass:"top_box"}),i("div",{staticClass:"search_box"},[i("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"输入关键词查询",search:""},model:{value:t.filter_keyword,callback:function(e){t.filter_keyword=e},expression:"filter_keyword"}}),i("Button",{staticStyle:{float:"right","margin-left":"10px"},attrs:{type:"primary",loading:t.exportLoading},on:{click:t.exportExcel}},[t._v("导出EXCEL")]),i("Button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.goAddDevice}},[t._v("新增设备")])],1),i("div",{staticStyle:{"margin-top":"20px"}},[i("Table",{attrs:{border:"",columns:t.columns,data:t.order_list},scopedSlots:t._u([{key:"action",fn:function(e){e.row;var n=e.index;return[i("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"warning",size:"small"},on:{click:function(e){t.showDetail(n)}}},[t._v("编辑")]),i("Button",{attrs:{type:"error",size:"small"},on:{click:function(e){t.remove(n)}}},[t._v("删除")])]}}])}),i("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[i("Page",{attrs:{total:t.order_total,"show-total":""}})],1)],1)])},a=[],r=i("0a21"),o={name:"order_list",data:function(){return{filter_keyword:"",columns:[{title:"ID",key:"id",align:"center"},{title:"设备名称",key:"device_name",align:"center"},{title:"型号",key:"device_modal",align:"center"},{title:"品牌",key:"brand",align:"center",width:120},{title:"序列号",key:"serial",align:"center",width:130},{title:"备注",key:"info",align:"center"},{title:"操作",slot:"action",width:130,align:"center"}],order_list:[{id:"1",device_name:"路由器",device_modal:"AR1220E-S",brand:"华为",serial:"H01215562"}],order_total:1,exportLoading:!1}},methods:{showDetail:function(){},remove:function(){},goAddDevice:function(){this.$router.push({path:"/device/add_device"})},exportExcel:function(){if(this.order_list.length){this.exportLoading=!0;var t=this.columns.map(function(t){if(t.key)return t.title}).filter(function(t){return void 0!=t}),e=this.columns.map(function(t){if(t.key)return t.key}).filter(function(t){return void 0!=t}),i=this.order_list,n={title:t,key:e,data:i,autoWidth:!0,filename:"设备列表"};r["a"].export_array_to_excel(n),this.exportLoading=!1}else this.$Message.info("表格数据不能为空！")}}},l=o,c=(i("eaa4"),i("2877")),s=Object(c["a"])(l,n,a,!1,null,null,null);s.options.__file="device_list.vue";e["default"]=s.exports},e901:function(t,e,i){},eaa4:function(t,e,i){"use strict";var n=i("e901"),a=i.n(n);a.a}}]);