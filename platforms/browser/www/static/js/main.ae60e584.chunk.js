(this["webpackJsonpcom.todoapp"]=this["webpackJsonpcom.todoapp"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(9),r=a.n(l),c=(a(5),a(10)),i=a(1),s=a(2),d=a(4),m=a(3),u=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).changeColor=function(){console.log("click"),document.getElementById("color-button").style.backgroundColor="blue"},e.getRandomRGBValue=function(){return Math.min(Math.floor(255*Math.random()+1),255)},e.getRandomColor=function(){return"#"+((1<<24)+(e.getRandomRGBValue()<<16)+(e.getRandomRGBValue()<<8)+e.getRandomRGBValue()).toString(16).slice(1)},e.changeThemeColor=function(){var t=e.getRandomColor();document.getElementById("color-button").style.backgroundColor=t,document.getElementById("logout-button").style.backgroundColor=t,document.getElementById("navbar").style.backgroundColor=t},e.handleSignOut=function(){console.log("user signed out"),window.location.reload()},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container side-nav-container"},o.a.createElement("ul",{className:"right hide-on-med-and-down"},o.a.createElement("li",null,o.a.createElement("button",{className:"btn-small",id:"color-button",onClick:this.changeThemeColor},o.a.createElement("i",{className:"material-icons left"},"color_lens"),"colors")),o.a.createElement("li",null,o.a.createElement("button",{className:"btn-small",id:"logout-button",onClick:this.handleSignOut},o.a.createElement("i",{className:"material-icons left"},"exit_to_app"),"logout"))))}}]),a}(n.Component),g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).changeColor=function(){console.log("click"),document.getElementById("color-button").style.backgroundColor="blue"},e.getRandomRGBValue=function(){return Math.min(Math.floor(255*Math.random()+1),255)},e.getRandomColor=function(){return"#"+((1<<24)+(e.getRandomRGBValue()<<16)+(e.getRandomRGBValue()<<8)+e.getRandomRGBValue()).toString(16).slice(1)},e.changeThemeColor=function(){var t=e.getRandomColor();document.getElementById("color-button").style.backgroundColor=t,document.getElementById("logout-button").style.backgroundColor=t,document.getElementById("navbar").style.backgroundColor=t},e.handleSignOut=function(){console.log("user signed out"),window.location.reload()},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container side-nav-container"},o.a.createElement("li",null,o.a.createElement("a",{id:"color-button",onClick:this.changeThemeColor},o.a.createElement("i",{className:"material-icons left"},"color_lens"),"colors")),o.a.createElement("li",null,o.a.createElement("a",{id:"logout-button",onClick:this.handleSignOut},o.a.createElement("i",{className:"material-icons left"},"exit_to_app"),"logout")))}}]),a}(n.Component),h=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return console.log("Navbar checking auth.."),console.log(this.props.auth),o.a.createElement("div",null,o.a.createElement("nav",{className:"nav-wrapper navbar",id:"navbar"},o.a.createElement("div",{className:"container"},o.a.createElement("a",{href:"/",className:"brand-logo"},"Todo App"),o.a.createElement("a",{href:"/","data-target":"mobile-links",className:"sidenav-trigger"},o.a.createElement("i",{className:"material-icons"},"menu")),this.props.auth?o.a.createElement("div",null," ",o.a.createElement(u,null)," "):o.a.createElement("div",null," "))),o.a.createElement("ul",{className:"sidenav indigo center white side-nav",id:"mobile-links"},this.props.auth?o.a.createElement("div",null," ",o.a.createElement(g,null)," "):o.a.createElement("div",null," ")))}}]),a}(n.Component),v=a(7),p=a.n(v),f=function(e){var t=e.todos,a=e.removeTodo,n=[];return t&&(n=t.length?t.map((function(e){return o.a.createElement("div",{className:"row",key:e.id},o.a.createElement("label",{className:"left todo-item collection-item"},o.a.createElement("input",{type:"checkbox"}),o.a.createElement("span",null,e.content)),o.a.createElement("div",{className:"waves-effect waves-light btn-small right green-lighten-1",value:e.id,onClick:function(){a(e.id)}},o.a.createElement("i",{className:"material-icons right"},"remove_circle_outline"),"remove"))})):o.a.createElement("p",null,"nothing left todo!")),o.a.createElement("div",{className:"container",id:"todo-list"},o.a.createElement("div",{className:"col s12 m4 l2"}),o.a.createElement("div",{className:"col s12 m4 l8"},o.a.createElement("div",{className:"container center-align"},o.a.createElement("h5",{className:"brand-logo"}," your todo list")," ",o.a.createElement("span",{className:"badge blue"},n.length)),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"collection"},n))),o.a.createElement("div",{className:"col s12 m4 l2"}))},E=a(6),b=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:"",auth:!1},e.handleChange=function(t){e.setState(Object(E.a)({},t.target.id,t.target.value))},e.handleLogin=function(t){t.preventDefault();var a=e.state.email,n=e.state.password;console.log("signing in user.."),JSON.parse(localStorage.getItem("currentUser"))?e.props.onSignIn(a,n):(e.state.auth=!1,console.log(e.state.auth),console.log("no registered user found"))},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"section"}),o.a.createElement("h5",{className:"center"},"Please, login into your account"),o.a.createElement("div",{className:"section"}),o.a.createElement("div",{className:"container"},o.a.createElement("form",{onSubmit:this.handleLogin.bind(this),className:"transparent"},o.a.createElement("div",{className:"input-field"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),o.a.createElement("div",{className:"input-field"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),o.a.createElement("div",{className:"input-field"},o.a.createElement("button",{className:"btn indigo accent-3 z-depth-0"},"Login")))))}}]),a}(n.Component),y=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={content:""},e.handleChange=function(t){e.setState({content:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state),e.setState({content:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,o.a.createElement("p",{className:"center"},"Add new todo:")),o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content}))))}}]),a}(n.Component),w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={newEmail:"",newPassword:""},e.handleChange=function(t){e.setState(Object(E.a)({},t.target.id,t.target.value))},e}return Object(s.a)(a,[{key:"handleRegister",value:function(){var e=this.state.newEmail,t=this.state.newPassword;console.log("registering new user.."),this.props.onSignUp(e,t),window.location.reload()}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("button",{"data-target":"modal1",className:"btn green lighten-1 right modal-trigger"},"Register"),o.a.createElement("div",{id:"modal1",className:"modal"},o.a.createElement("div",{class:"modal-content"},o.a.createElement("h4",null,"Sign Up"),o.a.createElement("div",{className:"input-field col s6"},o.a.createElement("label",{htmlFor:"newEmail"},"Email"),o.a.createElement("input",{type:"email",id:"newEmail",onChange:this.handleChange})),o.a.createElement("div",{className:"input-field col s6"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{type:"password",id:"newPassword",onChange:this.handleChange})),o.a.createElement("div",{className:"input-field col s6"},o.a.createElement("button",{type:"submit",className:"btn green lighten-1",onClick:this.handleRegister.bind(this)},"Register"))),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("a",{className:"modal-action modal-close btn-flat"},"Close"))))}}]),a}(n.Component),N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={user:null,newUser:null,todos:[],auth:!1},e.handleClick=function(t){e.node.contains(t.target)||e.handleClickOutside()},e.handleClickOutside=function(){console.log("outside click")},e.addTodo=function(t){t.id=Math.random();var a=[];a=e.state.todos?[].concat(Object(c.a)(e.state.todos),[t]):[{content:t.content,id:t.id}],e.setState({todos:a}),localStorage.setItem("todoList",JSON.stringify(a))},e.removeTodo=function(t){console.log("removing"),console.log(t);var a=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:a}),localStorage.setItem("todoList",JSON.stringify(a))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("#mobile-links");p.a.Sidenav.init(e,{});var t=document.querySelectorAll(".dropdown-trigger");p.a.Dropdown.init(t,{inDuration:300,outDuration:200});var a=document.querySelectorAll(".modal");p.a.Modal.init(a,{inDuration:300,outDuration:200}),this.updateTodoList()}},{key:"componentWillMount",value:function(){document.addEventListener("mousedown",this.handleClick,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick,!1)}},{key:"logIn",value:function(e,t){var a=JSON.parse(localStorage.getItem("currentUser"));a[0].email===e&&a[0].password===t?(this.setState({user:{email:e,password:t},auth:!0}),console.log("user logged in successfully")):(console.log("user tried bad login"),this.setState({auth:!1}))}},{key:"signUp",value:function(e,t){this.setState({newUser:{newEmail:e,newPassword:t},auth:!0});var a=[{email:e,password:t}];localStorage.setItem("currentUser",JSON.stringify(a))}},{key:"logOut",value:function(){this.setState({user:null})}},{key:"updateTodoList",value:function(){console.log("App found these props"),console.log(this.props.todoList);var e=this.props.todoList;this.setState({todos:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"outer-node",ref:function(t){return e.node=t}},o.a.createElement(h,{auth:this.state.auth}),this.state.user?o.a.createElement("div",{className:"container col s12 offset-s3"},o.a.createElement(f,{todos:this.state.todos,removeTodo:this.removeTodo}),o.a.createElement(y,{addTodo:this.addTodo})):o.a.createElement("div",{className:"container"},o.a.createElement(b,{onSignIn:this.logIn.bind(this)}),o.a.createElement(w,{onSignUp:this.signUp.bind(this)}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=function(e){r.a.render(o.a.createElement(N,{todoList:e}),document.getElementById("root"))};function k(){console.log("confirmed return")}function O(){if(window.localStorage.getItem("todoList")){var e=JSON.parse(window.localStorage.getItem("todoList"));return console.log("fetching todos..."),console.log(e),e}return null}function S(){navigator.notification.alert("Welcome back!",k,["Game Over"],["Done"])}function j(){}window.cordova?(window.addEventListener("orientationchange",(function(){var e=document.body.style.marginTop;document.body.style.marginTop="1px",setTimeout((function(){document.body.style.marginTop=e}),100)}),!1),document.addEventListener("deviceready",function(){document.addEventListener("resume",S.bind(this),!1),document.addEventListener("pause",j.bind(this),!1),console.log("ready happened"),C(O())}.bind(void 0),!1)):(C(O()),console.log("else happened")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.ae60e584.chunk.js.map