(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-admin-ProcessCard-ProcessCard"],{"0b0c":function(t,e,i){"use strict";i.r(e);var a=i("791e"),r=i("a96d");for(var n in r)"default"!==n&&function(t){i.d(e,t,function(){return r[t]})}(n);i("5c17");var s=i("2877"),u=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"bb19670c",null);e["default"]=u.exports},"267e":function(t,e,i){"use strict";var a=i("5503"),r=i.n(a);r.a},3718:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(i("f54b")),r=o(i("998c")),n=o(i("f05a")),s=o(i("e5af")),u=o(i("d613"));function o(t){return t&&t.__esModule?t:{default:t}}var l=d(),c=d();function d(){var t=new Date,e="-",i=t.getMonth()+1,a=t.getDate();i>=1&&i<=9&&(i="0"+i),a>=0&&a<=9&&(a="0"+a);var r=t.getFullYear()+e+i+e+a;return r}l=l.substring(0,7)+"-01";var f={components:{ruiDatePicker:a.default,tTable:r.default,tTh:n.default,tTr:s.default,tTd:u.default},data:function(){return{time:"",tableList:[],dates:l,datee:c,huohao:"",chuanghao:"",color:"",chima:"",userid:"",uid:"",worktype:"",bs:"",sl:"",dk:""}},onBackPress:function(t){return console.log("###"+JSON.stringify(t)),"backbutton"===t.from&&(uni.switchTab({url:"/pages/admin/admin"}),!0)},onLoad:function(t){var e=this;console.log("diyici:"+JSON.stringify(t));var i=JSON.stringify(t);if(i.indexOf(".html")<0&&"{}"!=JSON.stringify(t)){console.log(t.huohao),this.huohao=t.huohao,this.chuanghao=t.chuanghao,this.color=t.color,this.chima=t.chima,this.userid=t.userid,this.uid=t.uid,this.worktype=t.worktype,this.time=t.time;var a=t.time.split(",");this.dates=a[0],this.datee=a[1]}this.dk=this.websiteUrl,uni.getStorage({key:"fwqsj",success:function(t){e.dk=t.data}}),uni.request({url:"https://".concat(this.dk,"/getSclzdHz.aspx"),method:"GET",data:{dates:this.dates,datee:this.datee,huohao:this.huohao,chuanghao:this.chuanghao,color:this.color,chima:this.chima,userid:this.userid,uid:this.uid,worktype:this.worktype},success:function(t){e.tableList=t.data;for(var i=t.data,a=0,r=0,n=0;n<i.length;n++)a+=i[n].bs,r+=i[n].sl;e.bs=a,e.sl=r},fail:function(t){},complete:function(){}})},methods:{bindChange1:function(t){this.dates=t},bindChange2:function(t){this.datee=t},onpeDetailed:function(){var t=this;uni.request({url:"https://".concat(this.dk,"/getSclzdHz.aspx"),method:"GET",data:{dates:this.dates,datee:this.datee,huohao:this.huohao,chuanghao:this.chuanghao,color:this.color,chima:this.chima,userid:this.userid,uid:this.uid,worktype:this.worktype},success:function(e){t.tableList=e.data;for(var i=e.data,a=0,r=0,n=0;n<i.length;n++)a+=i[n].bs,r+=i[n].sl;t.bs=a,t.sl=r},fail:function(){},complete:function(){}})},onpeIfon:function(){uni.navigateTo({url:"../../info/info?flag=1"})}}};e.default=f},"4ded":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(i("f5a5"));function r(t){return t&&t.__esModule?t:{default:t}}var n={name:"rattenking-dtpicker",props:{start:{type:String,default:"1900-00-00 00:00:00"},end:{type:String,default:"2500-12-30 23:59:59"},value:{type:String,default:""},fields:{type:String,default:"second"},disabled:{type:Boolean,default:!1}},data:function(){return{times:[["2019","2020"],["01","02"]],timesIndex:[1,1],timesString:null,curValue:this.value,curDisabled:this.disabled,cancel:null}},watch:{value:function(t){this.curValue=t},disabled:function(t){this.curDisabled=t},curDisabled:function(t){this.curDisabled=t},curValue:function(t){this.curValue=t,this.$emit("change",t)},times:function(t){this.times=t},timesIndex:function(t){this.timesIndex=t},cancel:function(t){this.$emit("cancel",t)}},created:function(){if(""===this.value){var t=a.default.getCurrentTimes(),e=[];for(var i in t.detail)if(e.push(t.detail[i]),i===this.fields)break;this.value=a.default.format(e),this.curValue=a.default.format(e)}switch(this.fields){case"year":if(4!==this.value.length)return a.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(4!==this.start.length)return a.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(4!==this.end.length)return a.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"month":if(7!==this.value.length)return a.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(7!==this.start.length)return a.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(7!==this.end.length)return a.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"day":if(10!==this.value.length)return a.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(10!==this.start.length)return a.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(10!==this.end.length)return a.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"hour":if(13!==this.value.length)return a.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(13!==this.start.length)return a.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(13!==this.end.length)return a.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"minute":if(16!==this.value.length)return a.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(16!==this.start.length)return a.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(16!==this.end.length)return a.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"second":if(19!==this.value.length)return a.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(19!==this.start.length)return a.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(19!==this.end.length)return a.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;default:a.default.error("时间粒度不存在");break}this.value.split(" ");var r=a.default.getCurrentStringValue(this.value);if(a.default.getTimes(this.value)<a.default.getTimes(this.start))return a.default.error("默认时间不能小于开始时间"),this.curDisabled=!0,!1;if(a.default.getTimes(this.value)>a.default.getTimes(this.end))return a.default.error("默认时间不能大于开始时间"),this.curDisabled=!0,!1;var n=a.default.getDateTimes({start:this.start.substring(0,4),end:this.end.substring(0,4),curyear:this.value.substring(0,4),curmonth:this.value.substring(5,7),fields:this.fields}),s=a.default.getTimeIndex(n,r),u=[];s.forEach(function(t){return u.push(t)}),this.times=n,this.timesIndex=s,this.timesString=u},methods:{changeDate:function(t){for(var e=t.detail.value,i=this.times,r=[],n=0,s=e.length;n<s;n++)r.push(i[n][e[n]]);var u=a.default.format(r);this.curValue=u},columnchangeDate:function(t){if("year"===this.fields||"month"===this.fields){var e=a.default.getNewArray(this.timesIndex);return e[t.detail.column]=t.detail.value,this.timesIndex=e,!1}if(0===t.detail.column||1===t.detail.column){var i=a.default.getNewArray(this.times),r=a.default.getNewArray(this.timesIndex);r[t.detail.column]=t.detail.value;var n=a.default.getMonthDay(i[0][r[0]],i[1][r[1]]);i[2]=n,r[2]>n.length-1&&(r[2]=n.length-1),this.times=i,this.timesIndex=r}else{var s=a.default.getNewArray(this.timesIndex);s[t.detail.column]=t.detail.value,this.timesIndex=s}},cancelDate:function(t){this.cancel=t}}};e.default=n},5503:function(t,e,i){var a=i("92fd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("4ba99689",a,!0,{sourceMap:!1,shadowMode:!1})},"5c17":function(t,e,i){"use strict";var a=i("980c"),r=i.n(a);r.a},"791e":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"box",staticStyle:{"margin-bottom":"0"}},[i("v-uni-view",{staticClass:"rui-flex"},[i("ruiDatePicker",{attrs:{fields:"day",start:"2018-01-01",end:"2019-12-30",value:t.dates},on:{change:function(e){e=t.$handleEvent(e),t.bindChange1(e)}}})],1),i("v-uni-view",{staticClass:"rui-flex"},[i("v-uni-text",{staticStyle:{color:"#CCCCCC"}},[t._v("到")]),i("ruiDatePicker",{attrs:{fields:"day",start:"2018-01-01",end:"2019-12-00",value:t.datee},on:{change:function(e){e=t.$handleEvent(e),t.bindChange2(e)}}})],1),i("v-uni-button",{staticStyle:{right:"160upx"},attrs:{size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.onpeDetailed(e)}}},[t._v("查询")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.onpeIfon(e)}}},[t._v("更多")])],1),i("v-uni-view",{staticClass:"warp",staticStyle:{"margin-top":"72upx"}},[i("t-table",{staticStyle:{position:"fixed",width:"100%",background:"#FFFFFF",height:"88upx"}},[i("t-tr",[i("t-th",[t._v("日期")]),i("t-th",[t._v("货号")]),i("t-th",[t._v("颜色")]),i("t-th",[t._v("尺码")]),i("t-th",[t._v("包数")]),i("t-th",[t._v("数量")])],1)],1),i("t-table",{staticClass:"dw",staticStyle:{width:"100%","z-index":"10"}},[i("t-tr",[i("t-td",[t._v("合计:")]),i("t-td",{staticClass:"sl"},[t._v(t._s(t.bs)+"包")]),i("t-td",{staticClass:"sl"},[t._v(t._s(t.sl))])],1)],1)],1),i("v-uni-view",{staticClass:"m-top"}),i("v-uni-view",{staticClass:"box1",staticStyle:{width:"100%"}},[i("t-table",t._l(t.tableList,function(e,a){return i("t-tr",[i("t-td",[t._v(t._s(e.rq.substring(5)))]),i("t-td",[t._v(t._s(e.huohao))]),i("t-td",[t._v(t._s(e.color))]),i("t-td",[t._v(t._s(e.chima))]),i("t-td",{staticStyle:{color:"rgb(246,135,30)"}},[t._v(t._s(e.bs))]),i("t-td",{staticStyle:{color:"red"}},[t._v(t._s(e.sl))])],1)}),1)],1),i("v-uni-view",{staticClass:"m-bottom"})],1)},r=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return r})},"7a36":function(t,e,i){"use strict";i.r(e);var a=i("4ded"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=r.a},"92fd":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".rui-picker[data-v-4d4c7054]{height:10vw;font-size:%?28?%;color:#000;display:-webkit-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #aaa;-webkit-border-radius:3px;border-radius:3px}",""])},"980c":function(t,e,i){var a=i("da80");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("f852d386",a,!0,{sourceMap:!1,shadowMode:!1})},a96d:function(t,e,i){"use strict";i.r(e);var a=i("3718"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=r.a},da80:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-list[data-v-bb19670c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.uni-list-cell[data-v-bb19670c]{position:relative}.uni-list-cell-db uni-button[data-v-bb19670c]{position:absolute;right:%?20?%;top:%?10?%;background:#ffac60;color:#fff;z-index:99}.rui-head[data-v-bb19670c]{font-size:4vw;height:10vw;line-height:10vw;padding:0 4vw;text-align:left}.rui-flex[data-v-bb19670c]{display:-webkit-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;background:#fff}.rui-picker[data-v-bb19670c]{border:none!important}.box[data-v-bb19670c]{background:#fff;margin-bottom:%?24?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;top:%?0?%;width:100%;height:%?72?%}.box uni-input[data-v-bb19670c]{padding:0 %?20?%}.section[data-v-bb19670c]{position:relative;background:#fff}.content uni-input[data-v-bb19670c]{padding:0 10px;padding-left:%?100?%}.section uni-text[data-v-bb19670c]{position:absolute;top:%?10?%}uni-button[data-v-bb19670c]{position:absolute;right:%?20?%;top:%?10?%;background:#ffac60;color:#fff;z-index:99}.warp[data-v-bb19670c]{background:#fff;margin-bottom:%?72?%}\r\n/* .t-table .t-tr:nth-child(2n){background: #FFFFFF;} */\r\n/* .t-table .t-tr:nth-child(2n){background: #FFFFFF;} */.dw[data-v-bb19670c]{position:fixed;bottom:0;background:#fff}.sl[data-v-bb19670c],.sl uni-view[data-v-bb19670c]{color:#f6871e;font-weight:600;font-size:%?28?%}\r\n/* .sl view{color: #F6871E;font-weight: 600;font-size: 28upx;} */.box1[data-v-bb19670c]{\r\n\t/* float: left; */\r\n\t/* overflow: hidden; */}",""])},dd61:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-picker",{staticClass:"rui-picker rui-class",attrs:{mode:"multiSelector",range:t.times,value:t.timesIndex,disabled:t.curDisabled},on:{change:function(e){e=t.$handleEvent(e),t.changeDate(e)},cancel:function(e){e=t.$handleEvent(e),t.cancelDate(e)},columnchange:function(e){e=t.$handleEvent(e),t.columnchangeDate(e)}}},[t._v(t._s(t.curValue))])},r=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return r})},f54b:function(t,e,i){"use strict";i.r(e);var a=i("dd61"),r=i("7a36");for(var n in r)"default"!==n&&function(t){i.d(e,t,function(){return r[t]})}(n);i("267e");var s=i("2877"),u=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"4d4c7054",null);e["default"]=u.exports},f5a5:function(t,e,i){"use strict";function a(t){return s(t)||n(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var u={withData:function(t){var e=parseInt(t);return e<10?"0"+e:""+e},getTimes:function(t){return new Date(t.replace(/-/g,"/")).getTime()},getCurrentTimes:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate(),r=t.getHours(),n=t.getMinutes(),s=t.getSeconds();return{detail:{year:e,month:i,day:a,hour:r,minute:n,second:s}}},format:function(t){var e=[],i=[],a="";return t.forEach(function(t,a){var r=u.withData(t);a>2?e.push(r):i.push(r)}),a=t.length<4?i.join("-"):i.join("-")+" "+e.join(":"),a},getCurrentStringValue:function(t){var e=t.split(" ");if(e&&e[1]){var i=[].concat(a(e[0].split("-")),a(e[1].split(":")));return i}return e[0].split("-")},getCompare:function(t,e,i,a){var r=u.getTimes(t),n=u.getTimes(e),s=u.getTimes(i);return r<n?u.getTimeIndex(a,u.getCurrentStringValue(e)):r>s?u.getTimeIndex(a,u.getCurrentStringValue(i)):u.getTimeIndex(a,u.getCurrentStringValue(t))},getChooseArr:function(t,e){var i=[];return t.forEach(function(t,a){return i.push(t[e[a]])}),i},getNewArray:function(t){var e=[];return t.forEach(function(t){return e.push(t)}),e},getLoopArray:function(t,e){t=t||0,e=e||1;for(var i=[],a=t;a<=e;a++)i.push(u.withData(a));return i},getMonthDay:function(t,e){var i=t%400==0||t%4==0&&t%100!=0,a=null;switch(e){case"01":case"03":case"05":case"07":case"08":case"10":case"12":a=u.getLoopArray(1,31);break;case"04":case"06":case"09":case"11":a=u.getLoopArray(1,30);break;case"02":a=i?u.getLoopArray(1,29):u.getLoopArray(1,28);break;default:a="月份格式不正确，请重新输入！"}return a},getDateTimes:function(t){var e=u.getLoopArray(t.start,t.end),i=u.getLoopArray(1,12),a=u.getMonthDay(t.curyear,t.curmonth),r=u.getLoopArray(0,23),n=u.getLoopArray(0,59),s=u.getLoopArray(0,59),o=null;switch(t.fields){case"year":o=[e];break;case"month":o=[e,i];break;case"day":o=[e,i,a];break;case"hour":o=[e,i,a,r];break;case"minute":o=[e,i,a,r,n];break;case"second":o=[e,i,a,r,n,s];break;default:o=[e,i,a,r,n,s]}return o},getIndex:function(t,e){for(var i=t.length,a=0;a<i;a++)if(t[a]==e)return a},getTimeIndex:function(t,e){for(var i=t.length,a=[],r=0;r<i;r++)a.push(u.getIndex(t[r],e[r]));return a},error:function(t){console.error(t)}};t.exports=u}}]);