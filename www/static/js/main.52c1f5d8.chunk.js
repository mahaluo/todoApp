(this["webpackJsonpcom.todoapp"]=this["webpackJsonpcom.todoapp"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(8),c=n.n(l),r=(n(5),n(1)),i=n(2),m=n(4),s=n(3),d=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={content:""},e.handleChange=function(t){e.setState({content:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state),e.setState({content:""})},e}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,o.a.createElement("p",{className:"center"},"Add new todo:")),o.a.createElement("div",{className:"input-field offset-l5 l2 offset-m4 m4 offset-s3 s6"},o.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content}))))}}]),n}(a.Component),u=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).changeColor=function(){console.log("click"),document.getElementById("color-button").style.backgroundColor="blue"},e.getRandomRGBValue=function(){return Math.min(Math.floor(255*Math.random()+1),255)},e.getRandomColor=function(){return"#"+((1<<24)+(e.getRandomRGBValue()<<16)+(e.getRandomRGBValue()<<8)+e.getRandomRGBValue()).toString(16).slice(1)},e.changeThemeColor=function(){var t=e.getRandomColor();document.getElementById("color-button").style.backgroundColor=t,document.getElementById("nav-bar").style.backgroundColor=t},e}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("li",null,o.a.createElement("a",{href:"/#",className:"btn-small",id:"color-button",onClick:this.changeThemeColor},o.a.createElement("i",{className:"material-icons"},"color_lens"))))}}]),n}(a.Component),v=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("nav",{className:"nav-wrapper nav-bar",id:"nav-bar"},o.a.createElement("div",{className:"container"},o.a.createElement("a",{href:"/",className:"brand-logo"},"Todo App"),o.a.createElement("a",{href:"/","data-target":"mobile-links",className:"sidenav-trigger"},o.a.createElement("i",{className:"material-icons"},"menu")),o.a.createElement("ul",{className:"right hide-on-med-and-down signin-links"},o.a.createElement(u,null)))),o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"sidenav indigo center white",id:"mobile-links"},o.a.createElement(u,null))))}}]),n}(a.Component),g=n(6),h=n.n(g),f=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).addTodo=function(e){e.id=Math.random(),localStorage.setItem(e.id,JSON.stringify(e.content)),window.location.reload()},e.removeTodo=function(e){console.log("removing"),console.log(e),localStorage.removeItem(localStorage.key(e)),window.location.reload()},e.handleClick=function(t){e.node.contains(t.target)||e.handleClickOutside()},e.handleClickOutside=function(){console.log("outside click")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=document.querySelector("#mobile-links");h.a.Sidenav.init(e,{});var t=document.querySelectorAll(".dropdown-trigger");h.a.Dropdown.init(t,{inDuration:300,outDuration:200})}},{key:"componentWillMount",value:function(){document.addEventListener("mousedown",this.handleClick,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick,!1)}},{key:"render",value:function(){for(var e=this,t=[],n=0;n<localStorage.length;n++)console.log(localStorage.getItem(localStorage.key(n))),t.push(localStorage.getItem(localStorage.key(n)));return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"outer-node",ref:function(t){return e.node=t}},o.a.createElement(v,null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col s12 m4 l2"}),o.a.createElement("div",{className:"col s12 m4 l8"},o.a.createElement("h5",{className:"brand-logo center m4"}," your todo list (",localStorage.length.toString(),") "),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"collection"},t.map((function(t,n){return o.a.createElement("div",{className:"row",key:n},o.a.createElement("label",{className:"left todo-item collection-item"},o.a.createElement("input",{type:"checkbox"}),o.a.createElement("span",{className:"badge"},t)),o.a.createElement("div",{className:"waves-effect waves-light btn-small right green-lighten-1",value:n,onClick:function(){return e.removeTodo(n)}},o.a.createElement("i",{className:"material-icons right"},"remove_circle_outline"),"remove"))})))),o.a.createElement(d,{addTodo:this.addTodo})),o.a.createElement("div",{className:"col s12 m4 l2"}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=function(){c.a.render(o.a.createElement(f,null),document.getElementById("root"))};window.cordova?document.addEventListener("deviceready",(function(){E()}),!1):E(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.52c1f5d8.chunk.js.map