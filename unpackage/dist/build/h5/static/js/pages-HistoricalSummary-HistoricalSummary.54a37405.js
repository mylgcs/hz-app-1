(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-HistoricalSummary-HistoricalSummary"],{"137c":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-list[data-v-14f70e8e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.uni-list-cell[data-v-14f70e8e]{position:relative}.uni-list-cell-db uni-button[data-v-14f70e8e]{position:absolute;right:%?20?%;top:%?10?%;background:#ffac60;color:#fff;z-index:99}.rui-head[data-v-14f70e8e]{font-size:4vw;height:10vw;line-height:10vw;padding:0 4vw;text-align:left}.rui-flex[data-v-14f70e8e]{display:-webkit-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;background:#fff}.rui-picker[data-v-14f70e8e]{border:none!important}.box[data-v-14f70e8e]{background:#fff;margin-bottom:%?24?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;top:%?0?%;width:100%;height:%?72?%}.box uni-input[data-v-14f70e8e]{padding:0 %?20?%}.section[data-v-14f70e8e]{position:relative;background:#fff}.content uni-input[data-v-14f70e8e]{padding:0 10px;padding-left:%?100?%}.section uni-text[data-v-14f70e8e]{position:absolute;top:%?10?%}uni-button[data-v-14f70e8e]{position:absolute;right:%?20?%;top:%?10?%;background:#ffac60;color:#fff;z-index:99}.warp[data-v-14f70e8e]{background:#fff;margin-bottom:%?72?%}\r\n/* .warp{background: #FFFFFF;margin-top: 40upx;} */.t-table .t-tr[data-v-14f70e8e]:nth-child(2n){background:#fff}.t-table .t-tr[data-v-14f70e8e]:nth-child(2n){background:#fff}.dw[data-v-14f70e8e]{position:fixed;bottom:0;background:#fff}.sl[data-v-14f70e8e]{color:#f6871e;font-weight:600;font-size:%?28?%}.sl uni-view[data-v-14f70e8e]{color:#f6871e;font-weight:600;font-size:%?28?%}.hj[data-v-14f70e8e]{color:#f6871e;font-weight:600;font-size:%?28?%}.hj uni-view[data-v-14f70e8e]{color:#f6871e;font-weight:600;font-size:%?28?%}.bs[data-v-14f70e8e]{color:#f6871e;font-weight:600;font-size:%?28?%}.bs uni-view[data-v-14f70e8e]{color:#f6871e;font-weight:600;font-size:%?28?%}",""])},2153:function(t,e,i){var a=i("137c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5589df74",a,!0,{sourceMap:!1,shadowMode:!1})},"267e":function(t,e,i){"use strict";var a=i("5503"),n=i.n(a);n.a},3601:function(t,e,i){"use strict";var a=i("2153"),n=i.n(a);n.a},"4ded":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("f5a5"));function n(t){return t&&t.__esModule?t:{default:t}}var r={name:"rattenking-dtpicker",props:{start:{type:String,default:"1900-00-00 00:00:00"},end:{type:String,default:"2500-12-30 23:59:59"},value:{type:String,default:""},fields:{type:String,default:"second"},disabled:{type:Boolean,default:!1}},data:function(){return{times:[["2019","2020"],["01","02"]],timesIndex:[1,1],timesString:null,curValue:this.value,curDisabled:this.disabled,cancel:null}},watch:{value:function(t){this.curValue=t},disabled:function(t){this.curDisabled=t},curDisabled:function(t){this.curDisabled=t},curValue:function(t){this.curValue=t,this.$emit("change",t)},times:function(t){this.times=t},timesIndex:function(t){this.timesIndex=t},cancel:function(t){this.$emit("cancel",t)}},created:function(){if(""===this.value){var t=a.default.getCurrentTimes(),e=[];for(var i in t.detail)if(e.push(t.detail[i]),i===this.fields)break;this.value=a.default.format(e),this.curValue=a.default.format(e)}switch(this.fields){case"year":if(4!==this.value.length)return a.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(4!==this.start.length)return a.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(4!==this.end.length)return a.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"month":if(7!==this.value.length)return a.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(7!==this.start.length)return a.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(7!==this.end.length)return a.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"day":if(10!==this.value.length)return a.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(10!==this.start.length)return a.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(10!==this.end.length)return a.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"hour":if(13!==this.value.length)return a.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(13!==this.start.length)return a.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(13!==this.end.length)return a.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"minute":if(16!==this.value.length)return a.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(16!==this.start.length)return a.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(16!==this.end.length)return a.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;case"second":if(19!==this.value.length)return a.default.error("时间粒度和时间格式不一致"),this.curDisabled=!0,!1;if(19!==this.start.length)return a.default.error("时间粒度和开始时间格式不一致"),this.curDisabled=!0,!1;if(19!==this.end.length)return a.default.error("时间粒度和结束时间格式不一致"),this.curDisabled=!0,!1;break;default:a.default.error("时间粒度不存在");break}this.value.split(" ");var n=a.default.getCurrentStringValue(this.value);if(a.default.getTimes(this.value)<a.default.getTimes(this.start))return a.default.error("默认时间不能小于开始时间"),this.curDisabled=!0,!1;if(a.default.getTimes(this.value)>a.default.getTimes(this.end))return a.default.error("默认时间不能大于开始时间"),this.curDisabled=!0,!1;var r=a.default.getDateTimes({start:this.start.substring(0,4),end:this.end.substring(0,4),curyear:this.value.substring(0,4),curmonth:this.value.substring(5,7),fields:this.fields}),s=a.default.getTimeIndex(r,n),u=[];s.forEach(function(t){return u.push(t)}),this.times=r,this.timesIndex=s,this.timesString=u},methods:{changeDate:function(t){for(var e=t.detail.value,i=this.times,n=[],r=0,s=e.length;r<s;r++)n.push(i[r][e[r]]);var u=a.default.format(n);this.curValue=u},columnchangeDate:function(t){if("year"===this.fields||"month"===this.fields){var e=a.default.getNewArray(this.timesIndex);return e[t.detail.column]=t.detail.value,this.timesIndex=e,!1}if(0===t.detail.column||1===t.detail.column){var i=a.default.getNewArray(this.times),n=a.default.getNewArray(this.timesIndex);n[t.detail.column]=t.detail.value;var r=a.default.getMonthDay(i[0][n[0]],i[1][n[1]]);i[2]=r,n[2]>r.length-1&&(n[2]=r.length-1),this.times=i,this.timesIndex=n}else{var s=a.default.getNewArray(this.timesIndex);s[t.detail.column]=t.detail.value,this.timesIndex=s}},cancelDate:function(t){this.cancel=t}}};e.default=r},5503:function(t,e,i){var a=i("92fd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4ba99689",a,!0,{sourceMap:!1,shadowMode:!1})},"7a36":function(t,e,i){"use strict";i.r(e);var a=i("4ded"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},"843b":function(t,e,i){"use strict";i.r(e);var a=i("e1b3"),n=i("ac5d");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("3601");var s=i("2877"),u=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"14f70e8e",null);e["default"]=u.exports},"92fd":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".rui-picker[data-v-4d4c7054]{height:10vw;font-size:%?28?%;color:#000;display:-webkit-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #aaa;-webkit-border-radius:3px;border-radius:3px}",""])},a23b:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(i("f54b")),n=o(i("998c")),r=o(i("f05a")),s=o(i("e5af")),u=o(i("d613"));function o(t){return t&&t.__esModule?t:{default:t}}var l=d();function d(){var t=new Array,e=new Date,i="-",a=e.getMonth()+1,n=e.getDate();a>=1&&a<=9&&(a="0"+a),n>=0&&n<=9&&(n="0"+n);var r=e.getFullYear()+i+a+i+"01",s=e.getFullYear()+i+a+i+n;return t.push(r),t.push(s),t}var c={components:{ruiDatePicker:a.default,tTable:n.default,tTh:r.default,tTr:s.default,tTd:u.default},data:function(){return{tableList:[],value1:l[0],value2:l[1],huohao:"",worktype:"",color:"",chuanghao:"",chima:"",userid:"",sl1:"",sl2:"",zs:"",dk:""}},onBackPress:function(t){return"backbutton"===t.from&&(uni.switchTab({url:"/pages/index/index"}),!0)},onLoad:function(t){var e=this;console.log("diyici:"+JSON.stringify(t));var i=JSON.stringify(t);i.indexOf(".html")<0&&"{}"!=JSON.stringify(t)&&(this.huohao=t.huohao,this.chuanghao=t.chuanghao,this.color=t.color,this.chima=t.chima,this.userid=t.userid,this.worktype=t.worktype),this.dk=this.websiteUrl,uni.getStorage({key:"fwqsj",success:function(t){e.dk=t.data}}),uni.getStorage({key:"loginData",success:function(t){e.uid=t.data.uid}}),uni.request({url:"https://".concat(this.dk,"/gongziHz.aspx"),method:"GET",data:{uid:this.uid,dates:this.value1,datee:this.value2,huohao:this.huohao,worktype:this.worktype,color:this.color,chuanghao:this.chuanghao,chima:this.chima,userid:this.userid},success:function(t){e.tableList=t.data;for(var i=t.data,a=0,n=0,r=0,s=0;s<i.length;s++)a+=i[s].je?i[s].je:0,n+=i[s].sl,r+=i[s].bs;e.zs=a.toFixed(2),e.sl1=n,e.sl2=r},fail:function(t){},complete:function(){}})},methods:{bindChange1:function(t){this.value1=t},bindChange2:function(t){this.value2=t},onpeDetailedMore:function(){uni.navigateTo({url:"../info/info1?flag=4"})},onpeDetailed:function(){var t=this;uni.request({url:"https://".concat(this.dk,"/gongziHz.aspx"),method:"GET",data:{uid:this.uid,dates:this.value1,datee:this.value2,huohao:this.huohao,worktype:this.worktype},success:function(e){t.tableList=e.data;for(var i=e.data,a=0,n=0,r=0,s=0;s<i.length;s++)a+=i[s].je?i[s].je:0,n+=i[s].sl,r+=i[s].bs;t.zs=a.toFixed(2),t.sl1=n,t.sl2=r},fail:function(){},complete:function(){}})}}};e.default=c},ac5d:function(t,e,i){"use strict";i.r(e);var a=i("a23b"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},dd61:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-picker",{staticClass:"rui-picker rui-class",attrs:{mode:"multiSelector",range:t.times,value:t.timesIndex,disabled:t.curDisabled},on:{change:function(e){e=t.$handleEvent(e),t.changeDate(e)},cancel:function(e){e=t.$handleEvent(e),t.cancelDate(e)},columnchange:function(e){e=t.$handleEvent(e),t.columnchangeDate(e)}}},[t._v(t._s(t.curValue))])},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},e1b3:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"box",staticStyle:{"margin-bottom":"0"}},[i("v-uni-view",{staticClass:"rui-flex"},[i("ruiDatePicker",{attrs:{fields:"day",start:"2019-01-01",end:"2020-12-31",value:t.value1},on:{change:function(e){e=t.$handleEvent(e),t.bindChange1(e)}}})],1),i("v-uni-view",{staticClass:"rui-flex"},[i("v-uni-text",{staticStyle:{color:"#CCCCCC"}},[t._v("到")]),i("ruiDatePicker",{attrs:{fields:"day",start:"2019-01-01",end:"2020-12-01",value:t.value2},on:{change:function(e){e=t.$handleEvent(e),t.bindChange2(e)}}})],1),i("v-uni-button",{staticStyle:{right:"160upx"},attrs:{size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.onpeDetailed(e)}}},[t._v("查询")]),i("v-uni-button",{attrs:{size:"mini"},on:{click:function(e){e=t.$handleEvent(e),t.onpeDetailedMore(e)}}},[t._v("更多")])],1),i("v-uni-view",{staticClass:"warp",staticStyle:{"margin-top":"72upx"}},[i("t-table",{staticStyle:{position:"fixed",width:"100%",background:"#FFFFFF",height:"88upx"}},[i("t-tr",[i("t-th",[t._v("货号")]),i("t-th",[t._v("工序")]),i("t-th",[t._v("包数")]),i("t-th",[t._v("数量")]),i("t-th",[t._v("金额")])],1)],1),i("t-table",{staticClass:"dw",staticStyle:{width:"100%","z-index":"10"}},[i("t-tr",[i("t-td",[t._v("合计：")]),i("t-td",{staticClass:"sl"},[t._v(t._s(t.sl2)+"包")]),i("t-td",{staticClass:"sl"},[t._v(t._s(t.sl1))]),i("t-td",{staticClass:"hj"},[t._v("¥"+t._s(t.zs))])],1)],1)],1),i("v-uni-view",{staticClass:"box1",staticStyle:{float:"left",width:"100%","margin-top":"86upx","margin-bottom":"144upx"}},[i("t-table",t._l(t.tableList,function(e,a){return i("t-tr",{key:e.index},[i("t-td",[t._v(t._s(null==e.huohao?"":e.huohao))]),i("t-td",[t._v(t._s(null==e.worktype?"":e.worktype))]),i("t-td",[t._v(t._s(e.bs))]),i("t-td",[t._v(t._s(e.sl))]),i("t-td",{staticStyle:{color:"red"}},[t._v(t._s(null==e.je?"":e.je))])],1)}),1)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},f54b:function(t,e,i){"use strict";i.r(e);var a=i("dd61"),n=i("7a36");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("267e");var s=i("2877"),u=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"4d4c7054",null);e["default"]=u.exports},f5a5:function(t,e,i){"use strict";function a(t){return s(t)||r(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var u={withData:function(t){var e=parseInt(t);return e<10?"0"+e:""+e},getTimes:function(t){return new Date(t.replace(/-/g,"/")).getTime()},getCurrentTimes:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate(),n=t.getHours(),r=t.getMinutes(),s=t.getSeconds();return{detail:{year:e,month:i,day:a,hour:n,minute:r,second:s}}},format:function(t){var e=[],i=[],a="";return t.forEach(function(t,a){var n=u.withData(t);a>2?e.push(n):i.push(n)}),a=t.length<4?i.join("-"):i.join("-")+" "+e.join(":"),a},getCurrentStringValue:function(t){var e=t.split(" ");if(e&&e[1]){var i=[].concat(a(e[0].split("-")),a(e[1].split(":")));return i}return e[0].split("-")},getCompare:function(t,e,i,a){var n=u.getTimes(t),r=u.getTimes(e),s=u.getTimes(i);return n<r?u.getTimeIndex(a,u.getCurrentStringValue(e)):n>s?u.getTimeIndex(a,u.getCurrentStringValue(i)):u.getTimeIndex(a,u.getCurrentStringValue(t))},getChooseArr:function(t,e){var i=[];return t.forEach(function(t,a){return i.push(t[e[a]])}),i},getNewArray:function(t){var e=[];return t.forEach(function(t){return e.push(t)}),e},getLoopArray:function(t,e){t=t||0,e=e||1;for(var i=[],a=t;a<=e;a++)i.push(u.withData(a));return i},getMonthDay:function(t,e){var i=t%400==0||t%4==0&&t%100!=0,a=null;switch(e){case"01":case"03":case"05":case"07":case"08":case"10":case"12":a=u.getLoopArray(1,31);break;case"04":case"06":case"09":case"11":a=u.getLoopArray(1,30);break;case"02":a=i?u.getLoopArray(1,29):u.getLoopArray(1,28);break;default:a="月份格式不正确，请重新输入！"}return a},getDateTimes:function(t){var e=u.getLoopArray(t.start,t.end),i=u.getLoopArray(1,12),a=u.getMonthDay(t.curyear,t.curmonth),n=u.getLoopArray(0,23),r=u.getLoopArray(0,59),s=u.getLoopArray(0,59),o=null;switch(t.fields){case"year":o=[e];break;case"month":o=[e,i];break;case"day":o=[e,i,a];break;case"hour":o=[e,i,a,n];break;case"minute":o=[e,i,a,n,r];break;case"second":o=[e,i,a,n,r,s];break;default:o=[e,i,a,n,r,s]}return o},getIndex:function(t,e){for(var i=t.length,a=0;a<i;a++)if(t[a]==e)return a},getTimeIndex:function(t,e){for(var i=t.length,a=[],n=0;n<i;n++)a.push(u.getIndex(t[n],e[n]));return a},error:function(t){console.error(t)}};t.exports=u}}]);