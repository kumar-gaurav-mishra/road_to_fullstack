(this.webpackJsonpmonster_inc=this.webpackJsonpmonster_inc||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(20)},,,,,function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(3),o=t.n(c),s=(t(14),t(1)),i=t.n(s),l=t(4),u=t(5),h=t(7),m=t(6),d=t(8),p=(t(16),t(17),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{className:"card-img",src:"https://robohash.org/".concat(e.monster.id),alt:""}),r.a.createElement("h1",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),f=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(p,{key:e.id,monster:e})})))},v=(t(18),t(19),function(e){var n=e.placeholder,t=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),g=function(e){function n(){var e;return Object(l.a)(this,n),(e=Object(h.a)(this,Object(m.a)(n).call(this))).handleChange=function(n){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(e.setState({searchField:n.target.value}));case 2:case"end":return t.stop()}}))},e.state={monsters:[],searchField:""},e}return Object(d.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})}))}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"app-header"},"Monster.Inc"),r.a.createElement(v,{placeholder:"search monsters",handleChange:this.handleChange}),r.a.createElement(f,{monsters:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.6065e3c6.chunk.js.map