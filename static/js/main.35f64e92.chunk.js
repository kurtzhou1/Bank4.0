(this["webpackJsonpbank4.0"]=this["webpackJsonpbank4.0"]||[]).push([[0],{104:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),i=a(11),r=a.n(i),s=a(21),l=a.n(s),m=a(44),u=a(13),o=a(51),d=function(e){var t=e.makeSearch,a=Object(n.useState)(""),i=Object(u.a)(a,2),r=i[0],s=i[1],l=function(e){t(r),e.preventDefault()};return c.a.createElement("div",{className:"searchBar m-3"},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("div",{className:"w-50"},c.a.createElement("form",{className:"loginForm w-100",onSubmit:function(e){l(e)}},c.a.createElement("input",{type:"text",className:"w-100 border",onChange:function(e){s(e.target.value)}}))),c.a.createElement("button",{className:"btn-search",onClick:function(e){l(e)}},c.a.createElement(o.c,{fab:!0,icon:"sistrix"}))))},p=function(e){var t=e.setVedioSelect,a=e.video;return c.a.createElement("div",{onClick:function(){t(a)},className:"video-item item"},c.a.createElement("img",{className:"ui  image",src:a.snippet.thumbnails.medium.url,alt:a.snippet.title}),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},a.snippet.title)))},v=function(e){var t=e.vedioList,a=e.setVedioSelect,n=t.map((function(e){return c.a.createElement(p,{key:e.id.videoId,setVedioSelect:a,video:e})}));return c.a.createElement("div",{className:"ui relaxed divided list"},n)},E=function(e){var t=e.vedioSelect;if(!t)return c.a.createElement("div",null);var a="https://www.youtube.com/embed/".concat(t.id.videoId);return c.a.createElement("div",null,c.a.createElement("div",{className:"ui embed"},c.a.createElement("iframe",{src:a,title:t.snippet.title})),c.a.createElement("div",{className:"ui segment"},c.a.createElement("h4",{className:"ui header"},t.snippet.title),c.a.createElement("p",null,t.snippet.description)))},f=a(50),b=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyAXy8l36VJLdM5YJvFSsq_PTYJC1nwY6MM",type:"video"}}),N=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(),s=Object(u.a)(r,2),o=s[0],p=s[1],f=function(){var e=Object(m.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/search",{params:{q:t}});case 2:a=e.sent,i(a.data.items),p(a.data.items[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f("\u767d\u566a\u97f3")}),[]),c.a.createElement("div",{className:"template_Youtube wrapper"},c.a.createElement(d,{makeSearch:f}),c.a.createElement("div",{className:"ui grid m-3"},c.a.createElement("div",{className:"ui row"},c.a.createElement("div",{className:"main wide column"},c.a.createElement(E,{vedioSelect:o})),c.a.createElement("div",{className:"second wide column"},c.a.createElement(v,{vedioList:a,setVedioSelect:p})))))};a(43),a(104),a(105),a(106),a(107);r.a.render(c.a.createElement(N,null),document.getElementById("root"))},52:function(e,t,a){e.exports=a(108)}},[[52,1,2]]]);
//# sourceMappingURL=main.35f64e92.chunk.js.map