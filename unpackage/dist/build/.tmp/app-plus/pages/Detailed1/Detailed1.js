(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Detailed1/Detailed1"],{"0004":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("components/t-table/t-table").then(n.bind(null,"3629"))},o=function(){return n.e("components/t-table/t-th").then(n.bind(null,"c35f"))},u=function(){return n.e("components/t-table/t-tr").then(n.bind(null,"80f1"))},i=function(){return n.e("components/t-table/t-td").then(n.bind(null,"b397"))},r=c()+" 00:00:00",s=c()+" 23:59:59";function c(){var t=new Date,e="-",n=t.getMonth()+1,a=t.getDate();n>=1&&n<=9&&(n="0"+n),a>=0&&a<=9&&(a="0"+a);var o=t.getFullYear()+e+n+e+a;return o}var l={components:{tTable:a,tTh:o,tTr:u,tTd:i},data:function(){return{huohao:"",worktype:"",color:"",chuanghao:"",chima:"",userid:"",tableList:[],uid:"",title:"",curr_worktype_bh:"",curr_worktype_name:"",value1:"",value2:"",zs:"0",sl1:"0",sl2:"0",dk:""}},onBackPress:function(e){return"backbutton"===e.from&&(t.switchTab({url:"/pages/index/index"}),!0)},onLoad:function(e){var n=this,a=JSON.stringify(e);a.indexOf(".html")<0&&"{}"!=JSON.stringify(e)&&(this.huohao=e.huohao,this.chuanghao=e.chuanghao,this.color=e.color,this.chima=e.chima,this.userid=e.userid,this.worktype=e.worktype),this.dk=this.websiteUrl,t.getStorage({key:"fwqsj",success:function(t){n.dk=t.data,console.log(n.dk," at pages\\Detailed1\\Detailed1.vue:124")}}),t.getStorage({key:"loginData",success:function(e){n.title=e.data.uname,n.uid=e.data.uid,n.curr_worktype_bh=e.data.curr_worktype_bh,t.request({url:"https://".concat(n.dk,"/gongziMx.aspx"),method:"GET",data:{uid:n.uid,dates:r,datee:s,huohao:n.huohao,worktype:n.worktype,color:n.color,chuanghao:n.chuanghao,chima:n.chima,userid:n.userid},success:function(t){console.log(t.data," at pages\\Detailed1\\Detailed1.vue:149"),n.tableList=t.data;for(var e=t.data,a=0,o=0,u=0;u<e.length;u++)a+=e[u].je,o+=e[u].sl;n.zs=a.toFixed(2),n.sl1=o,n.sl2=e.length,n.huohao=""}})}})},methods:{onpeDetailedMore:function(){t.navigateTo({url:"../info/info1?flag=1"})},onpeDetailed:function(){var e=this;t.request({url:"https://".concat(this.dk,"/gongziMx.aspx"),method:"GET",data:{uid:this.uid,dates:r,datee:s,huohao:this.huohao,worktype:this.worktype},success:function(t){e.tableList=t.data;for(var n=t.data,a=0,o=0,u=0;u<n.length;u++)a+=n[u].je,o+=n[u].sl;e.zs=a.toFixed(2),e.sl1=o,e.sl2=n.length,e.huohao=""}})}}};e.default=l}).call(this,n("6e42")["default"])},"1cbc":function(t,e,n){},"250f":function(t,e,n){"use strict";n.r(e);var a=n("2e50"),o=n("d39d");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("b8dd");var i=n("2877"),r=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"2e50":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},b8dd:function(t,e,n){"use strict";var a=n("1cbc"),o=n.n(a);o.a},d39d:function(t,e,n){"use strict";n.r(e);var a=n("0004"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a}},[["6a81","common/runtime","common/vendor"]]]);