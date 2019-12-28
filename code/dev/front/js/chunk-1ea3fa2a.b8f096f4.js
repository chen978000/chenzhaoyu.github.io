(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ea3fa2a"],{a3e3:function(e,t,a){},b1dd:function(e,t,a){"use strict";var i=a("a3e3"),r=a.n(i);r.a},c256:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main_box"},[a("span",{staticClass:"title_span"},[e._v("新增资料")]),a("div",{staticClass:"content_box"},[a("Form",{ref:"fileForm",attrs:{model:e.form_data,rules:e.file_rules,"label-position":"right","label-width":80,inline:""}},[a("FormItem",{attrs:{label:"设备名称",prop:"device_id"}},[a("Select",{staticStyle:{width:"300px"},on:{"on-change":e.changeDevice},model:{value:e.form_data.device_id,callback:function(t){e.$set(e.form_data,"device_id",t)},expression:"form_data.device_id"}},e._l(e.deviceList,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1),a("div"),a("FormItem",{attrs:{label:"上传资料",prop:"attachments"}},[a("Upload",{attrs:{multiple:"",type:"drag","on-success":e.showUploaded,action:e.BASE_URL+":9003/orMaterial/singleFileUpload"},on:{"on-progress":e.showUploading}},[a("div",{staticStyle:{padding:"20px 0",width:"300px"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"md-cloud-upload",size:"42"}}),a("p",[e._v("点击或拖拽文件到此处")])],1)])],1),a("div"),a("FormItem",{attrs:{label:"备注"}},[a("Input",{staticStyle:{width:"300px","font-size":"10px"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"备注"},model:{value:e.form_data.remark,callback:function(t){e.$set(e.form_data,"remark",t)},expression:"form_data.remark"}})],1)],1),a("Button",{staticStyle:{margin:"20px"},attrs:{type:"primary"},on:{click:e.saveFile}},[e._v("保存")])],1)])},r=[],s=(a("7f7f"),a("2909")),n=(a("96cf"),a("1da1")),o={name:"add_file",data:function(){return{BASE_URL:this.$config.BASE_URL,form_data:{equipmentName:"",equipmentId:"",remark:""},deviceList:[],file_rules:{device_id:[{required:!0,message:"请选择设备",trigger:"blur",pattern:/.+/}]},file_lists:[],files:"",modalShow:!0}},mounted:function(){this.getAllDevice()},methods:{getAllDevice:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$service.device.getListAll();case 2:if(t=e.sent,a=t.err,i=t.data,!a){e.next=8;break}return this.$Message.error(a.message),e.abrupt("return");case 8:this.deviceList=i.data.map(function(e){return{label:e.equipmentName,value:e.id}});case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),saveFile:function(){var e=this;this.$refs["fileForm"].validate(function(t){t?e.addFile():e.$Message.error("请按要求输入")})},addFile:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,a,i,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""!=this.files){e.next=3;break}return this.$Message.error("请上传资料"),e.abrupt("return");case 3:return t={equipmentName:this.form_data.equipmentName,equipmentId:this.form_data.equipmentId,remark:this.form_data.remark,attachments:this.files},e.next=6,this.$service.file.addFile(t);case 6:if(a=e.sent,i=a.err,r=a.data,!i){e.next=12;break}return this.$Message.error(i.message),e.abrupt("return");case 12:this.$Message.success(r.message),this.$router.push({name:"file_list"});case 14:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getBaseUrl:function(){this.baseUrl=this.$config.baseUrl},changeDevice:function(e){var t=this;this.deviceList.map(function(a){a.value===e&&(t.form_data.equipmentName=a.label,t.form_data.equipmentId=a.value)})},showUploading:function(e,t,a){},showUploaded:function(e){var t;(t=this.file_lists).push.apply(t,Object(s["a"])(e)),this.files=JSON.stringify(this.file_lists)},showModal:function(){this.$refs["modalShow"].show()},setCust:function(e){var t=this;t.form_data.name=e.name,t.form_data.contact=e.contact,t.form_data.address=e.address,t.form_data.phone=e.phone}}},l=o,c=(a("b1dd"),a("2877")),d=Object(c["a"])(l,i,r,!1,null,"8a905ecc",null);d.options.__file="add_file.vue";t["default"]=d.exports}}]);