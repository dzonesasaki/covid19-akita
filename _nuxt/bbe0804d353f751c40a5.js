(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{234:function(t,e,n){var content=n(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5d594f7f",content,!1,{sourceMap:!1})},235:function(t,e,n){"use strict";var r=n(234);n.n(r).a},236:function(t,e,n){(e=n(10)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},237:function(t,e,n){"use strict";var r=n(1).default.extend({props:{icon:{type:String}}}),c=(n(235),n(4)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports},269:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/04/10","url":"https://www.youtube.com/watch?v=m8gMowfVL9M&feature=youtu.be","text":"秋田県臨時記者会見(県内13例目の新型コロナウイルス感染者の発生について)"}]}')},278:function(t,e,n){var content=n(364);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("01ea1d6c",content,!1,{sourceMap:!1})},363:function(t,e,n){"use strict";var r=n(278);n.n(r).a},364:function(t,e,n){(e=n(10)(!1)).push([t.i,".MainPage .DataBlock[data-v-52592c90]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-52592c90]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-52592c90]{padding:4px 8px}}",""]),t.exports=e},407:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(237),o=n(238),d=n(269),l=n(305),h=r.default.extend({components:{PageHeader:c.a,TokyoCityMapCard:l.a},data:function(){var data={Data:o,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("東京都23区の人口推移（参考値）"),date:o.lastUpdate},newsItems:d.newsItems};return data},head:function(){return{title:this.$t("東京都23区の人口推移（参考値）")}}}),f=(n(363),n(4)),component=Object(f.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"MainPage"},[e("page-header",{attrs:{icon:this.headerItem.icon}},[this._v("\n    "+this._s(this.headerItem.title)+"\n  ")]),this._v(" "),e("v-row",{staticClass:"DataBlock"},[e("tokyo-city-map-card")],1)],1)}),[],!1,null,"52592c90",null);e.default=component.exports}}]);