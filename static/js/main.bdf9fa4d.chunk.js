(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},22:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o);n(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(23);var s=n(10),i=n(11),l=n(16),u=n(15),d=function(e){return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(e.id,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,e.name),a.a.createElement("p",null,e.email)))},h=function(e){var t=e.robots.map((function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement(d,{key:t,id:t,name:n,email:r})}));return a.a.createElement("div",null,t)},b=function(e){e.searchField;var t=e.searchChange;return a.a.createElement("div",null,a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},m=function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"700px"}},e.children)},E=(n(24),n(4)),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("div",{className:"tc"},a.a.createElement("h1",null,"Loading...")):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(b,{searchChange:n}),a.a.createElement(m,null,a.a.createElement(h,{robots:c}," ")))}}]),n}(a.a.Component),g=Object(E.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(p),f=n(2),O=n(1),v={searchField:""},R={isPending:!1,robots:[],error:""},S=n(13),y=n(14),j=Object(S.createLogger)(),w=Object(f.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(O.a)(Object(O.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(O.a)(Object(O.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(O.a)(Object(O.a)({},e),{},{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(O.a)(Object(O.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}}),C=Object(f.d)(w,Object(f.a)(y.a,j));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E.a,{store:C},a.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.bdf9fa4d.chunk.js.map