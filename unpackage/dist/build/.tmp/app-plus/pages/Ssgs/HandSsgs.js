(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Ssgs/HandSsgs"],{"346d":function(t,s,n){"use strict";var e=n("5d67"),o=n.n(e);o.a},"5d67":function(t,s,n){},"6e47":function(t,s,n){"use strict";n.r(s);var e=n("e9ee"),o=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(s,t,function(){return e[t]})}(a);s["default"]=o.a},8395:function(t,s,n){"use strict";n.r(s);var e=n("b2e4"),o=n("6e47");for(var a in o)"default"!==a&&function(t){n.d(s,t,function(){return o[t]})}(a);n("346d");var c=n("2877"),i=Object(c["a"])(o["default"],e["a"],e["b"],!1,null,null,null);s["default"]=i.exports},b2e4:function(t,s,n){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c},o=[];n.d(s,"a",function(){return e}),n.d(s,"b",function(){return o})},e9ee:function(t,s,n){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e=function(){return n.e("components/t-table/t-table").then(n.bind(null,"3629"))},o=function(){return n.e("components/t-table/t-th").then(n.bind(null,"c35f"))},a=function(){return n.e("components/t-table/t-tr").then(n.bind(null,"80f1"))},c=function(){return n.e("components/t-table/t-td").then(n.bind(null,"b397"))},i={components:{tTable:e,tTh:o,tTr:a,tTd:c},data:function(){return{fullHight:"",currentHight:"",showFlag:!0,msg:"",list:[],uid:"",barcode:"",chuanghao:"",huohao:"",color:"",chima:"",yfsl:"",sssl:"",cp:"",cs:"",dk:""}},onLoad:function(){var s=this;this.dk=this.websiteUrl,t.getStorage({key:"fwqsj",success:function(t){s.dk=t.data}}),t.getStorage({key:"loginData",success:function(t){s.uid=t.data.uid}})},onBackPress:function(s){return"navigateBack"===s.from&&(t.offWindowResize(function(){console.log("取消监听窗口尺寸变化事件"," at pages\\Ssgs\\HandSsgs.vue:151")}),t.switchTab({url:"/pages/index/index"}),!0)},methods:{change:function(){this.cs=this.yfsl-this.sssl-this.cp},test:function(){this.barcode=""},getData:function(){var s=this;t.request({url:"https://".concat(this.dk,"/getInfoSearch.aspx"),data:{Info:this.barcode},success:function(t){if(200==t.statusCode){var n=t.data.split(",");0==n[0]?(s.barcode=s.barcode,s.chuanghao=n[3],s.huohao=n[4],s.color=n[5],s.chima=n[6],s.yfsl=n[7],s.sssl=n[8],s.cp=n[9],s.cs=n[10]):(s.msg=n[1],s.chuanghao="",s.huohao="",s.color="",s.chima="",s.yfsl="",s.cp="",s.cs="",s.sssl="")}else s.msg="无效条码",s.chuanghao="",s.huohao="",s.color="",s.chima="",s.yfsl="",s.cp="",s.cs=""}}),t.request({url:"https://".concat(this.dk,"/getSearchWorktype.aspx"),method:"GET",data:{userid:this.barcode},success:function(t){200==t.statusCode&&(console.log(JSON.stringify(t)," at pages\\Ssgs\\HandSsgs.vue:218"),s.list=t.data)}})},okbtn:function(){var s=this;t.request({url:"https://".concat(this.dk,"/updatesssl.aspx"),data:{Info:this.barcode,sssl:this.sssl,Cp:this.cp,Cs:this.cs,UID:this.uid},success:function(n){if(console.log("*****"+JSON.stringify(n)," at pages\\Ssgs\\HandSsgs.vue:236"),200==n.statusCode){var e=n.data.split(",");0==e[0]?(s.barcode="",s.chuanghao="",s.huohao="",s.color="",s.chima="",s.yfsl="",s.sssl="",s.cp="",s.cs="",t.showToast({position:"top",title:"修改成功",icon:"none",duration:3e3})):t.showToast({position:"top",title:e[1],icon:"none",duration:2e3})}else t.showToast({title:"网络繁忙，请稍后重试",icon:"none",duration:2e3})}})}}};s.default=i}).call(this,n("6e42")["default"])}},[["aae8","common/runtime","common/vendor"]]]);