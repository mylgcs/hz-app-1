(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Procedure/Procedure"],{"136d":function(t,o,n){"use strict";n.r(o);var e=n("4302"),a=n("9132");for(var i in a)"default"!==i&&function(t){n.d(o,t,function(){return a[t]})}(i);n("f30f");var u=n("2877"),r=Object(u["a"])(a["default"],e["a"],e["b"],!1,null,null,null);o["default"]=r.exports},4302:function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c},a=[];n.d(o,"a",function(){return e}),n.d(o,"b",function(){return a})},6320:function(t,o,n){},"6fc5":function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=function(){return n.e("components/t-table/t-table").then(n.bind(null,"3629"))},a=function(){return n.e("components/t-table/t-th").then(n.bind(null,"c35f"))},i=function(){return n.e("components/t-table/t-tr").then(n.bind(null,"80f1"))},u=function(){return n.e("components/t-table/t-td").then(n.bind(null,"b397"))},r={components:{tTable:e,tTh:a,tTr:i,tTd:u},data:function(){return{msg:"",uid:"",curr_worktype_name:"",curr_worktype_bh:"",chuanghao:"",huohao:"",worktype:"",sl:"",price:"",je:"",info:"",list:[],userid:"",color:"",chima:"",ganghao:"",dk:""}},onBackPress:function(o){return"navigateBack"===o.from&&(t.switchTab({url:"/pages/index/index"}),!0)},onLoad:function(){var o=this;this.dk=this.websiteUrl,t.getStorage({key:"fwqsj",success:function(t){o.dk=t.data}}),t.getStorage({key:"loginData",success:function(t){o.uid=t.data.uid,o.curr_worktype_bh=t.data.curr_worktype_bh}})},methods:{focus:function(){this.userid=""},onpeSweepCode:function(){var o=this;t.scanCode({onlyFromCamera:!0,scanType:["qrCode","barCode"],success:function(n){o.userid=n.result,t.request({url:"https://".concat(o.dk,"/getWorktypeProgress.aspx"),method:"GET",data:{userid:o.userid},complete:function(n){if(200==n.statusCode){if(o.list=n.data,o.huohao="",o.color="",o.chima="",o.list.length>0){var e=n.data;o.huohao=e[0].huohao,o.color=e[0].color,o.chima=e[0].chima,o.chuanghao=e[0].chuanghao,t.showToast({position:"top",title:"扫描成功",icon:"none",duration:5e3})}}else o.list=[],o.huohao="",o.color="",o.chima="",o.chuanghao="",t.showToast({position:"top",title:"请扫描正确的条码",icon:"none",duration:3e3})}})}})},getData:function(){var o=this;t.request({url:"https://".concat(this.dk,"/getWorktypeProgress.aspx"),method:"GET",data:{userid:this.userid},complete:function(n){if(200==n.statusCode){if(o.list=n.data,o.huohao="",o.color="",o.chima="",o.list.length>0){var e=n.data;o.huohao=e[0].huohao,o.color=e[0].color,o.chima=e[0].chima,o.chuanghao=e[0].chuanghao,t.showToast({position:"top",title:"扫描成功",icon:"none",duration:5e3})}}else o.list=[],o.huohao="",o.color="",o.chima="",o.chuanghao="",t.showToast({position:"top",title:"请求数据失败，请输入正确的条码",icon:"none",duration:3e3})}})}}};o.default=r}).call(this,n("6e42")["default"])},9132:function(t,o,n){"use strict";n.r(o);var e=n("6fc5"),a=n.n(e);for(var i in e)"default"!==i&&function(t){n.d(o,t,function(){return e[t]})}(i);o["default"]=a.a},f30f:function(t,o,n){"use strict";var e=n("6320"),a=n.n(e);a.a}},[["7673","common/runtime","common/vendor"]]]);