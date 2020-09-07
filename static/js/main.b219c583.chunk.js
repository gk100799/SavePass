(this.webpackJsonpsavepass=this.webpackJsonpsavepass||[]).push([[0],{236:function(e,t,n){e.exports=n(402)},241:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){},245:function(e,t,n){},394:function(e,t,n){},395:function(e,t,n){},398:function(e,t,n){},402:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),s=(n(241),n(70)),u=n(37),i=(n(242),n(243),n(44)),l=n.n(i),m=n(13),d=n(61),p=n(9),f=n(39),g=n(5),b=n(453),E=n(454),h=n(450),v=n(455),O=n(448),j=(n(245),n(140)),y=n.n(j),w="https://savepass-backend.herokuapp.com/",I=y.a.create({baseURL:w,timeout:1e4}),x=y.a.create({baseURL:w,headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("savepass-token")},timeout:1e4}),S=y.a.create({baseURL:w,headers:{"Content-Type":"multipart/form-data"}});x.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),x.interceptors.response.use((function(e){return e}),(function(e){return 408!==e.response.status&&"ECONNABORTED"!==e.code||console.log("A timeout happend on url ".concat(e.config.url)),e})),I.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),I.interceptors.response.use((function(e){return e}),(function(e){return 408!==e.response.status&&"ECONNABORTED"!==e.code||console.log("A timeout happend on url ".concat(e.config.url)),e})),S.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),S.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var U=n(65),k=function(e){var t=e.editing,n=e.dataIndex,a=e.title,o=e.inputType,c=(e.record,e.index,e.children),s=Object(g.a)(e,["editing","dataIndex","title","inputType","record","index","children"]),u="number"===o?r.a.createElement(b.a,null):r.a.createElement(E.a,null);return r.a.createElement("td",s,t?r.a.createElement(h.a.Item,{name:n,style:{margin:0},rules:[{required:!0,message:"Please Input ".concat(a,"!")}]},u):c)};var C=Object(U.b)((function(e,t){return{users:e.users,otherProps:t}}))((function(e){var t=e.users,n=e.deleteUser,o=h.a.useForm(),c=Object(f.a)(o,1)[0],s=Object(a.useState)(t),u=Object(f.a)(s,2),i=u[0],g=u[1],b=Object(a.useState)(""),E=Object(f.a)(b,2),j=E[0],y=E[1];Object(a.useEffect)((function(){g(t)}),[t]);var w=function(e){return e._id===j},I=function(){y("")},S=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.validateFields();case 3:n=e.sent,a={_id:t,name:n.name,username:n.username,password:n.password},x.post("account/modify",a).then((function(e){var a=Object(m.a)(i),r=a.findIndex((function(e){return t===e._id}));if(r>-1){var o=a[r];a.splice(r,1,Object(p.a)(Object(p.a)({},o),n)),g(a),y("")}else a.push(n),g(a),y("")})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Validate Failed:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),U=[{title:"Name",dataIndex:"name",width:"20%",editable:!0,sorter:function(e,t){return e.name.localeCompare(t.name)}},{title:"Username",dataIndex:"username",width:"25%",editable:!0},{title:"Password",dataIndex:"password",width:"20%",editable:!0},{title:"Operations",width:"20%",dataIndex:"operation",render:function(e,t){return w(t)?r.a.createElement("span",null,r.a.createElement("a",{onClick:function(){return S(t._id)},style:{marginRight:8}},"Save"),r.a.createElement(v.a,{title:"Sure to cancel?",onConfirm:I},r.a.createElement("a",null,"Cancel"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{disabled:""!==j,onClick:function(){return function(e){c.setFieldsValue(Object(p.a)({username:"",password:"",name:""},e)),y(e._id)}(t)}},"Edit"),r.a.createElement("span",{style:{whiteSpace:"pre"}},"                "),r.a.createElement(v.a,{title:"Sure to delete?",onConfirm:function(){return e=t._id,void x.post("account/delete",{_id:e}).then((function(t){return n(e)}));var e}},r.a.createElement("a",null,"Delete")))}}].map((function(e){return e.editable?Object(p.a)(Object(p.a)({},e),{},{onCell:function(t){return{record:t,inputType:"text",dataIndex:e.dataIndex,title:e.title,editing:w(t)}}}):e}));return r.a.createElement("div",{className:"table"},r.a.createElement(h.a,{form:c,component:!1},r.a.createElement(O.a,{components:{body:{cell:k}},bordered:!0,dataSource:i,columns:U,rowClassName:"editable-row"})))})),N=n(49);n(394);function _(e){var t=e.addUser,n=h.a.useForm(),a=Object(f.a)(n,1)[0];return r.a.createElement("div",{className:"form"},r.a.createElement("h3",{style:{marginTop:"3px",marginRight:"30px"}},"Add Item:"),r.a.createElement(h.a,{form:a,layout:"inline",name:"addUser",onFinish:function(e){var n={name:e.name,username:e.username,password:e.password};x.post("/account/add",n).then((function(e){return t(n)})),a.resetFields()},validateMessages:{required:"${label} is required!",types:{email:"${label} is not validate email!",number:"${label} is not a validate number!"},number:{range:"${label} must be between ${min} and ${max}"}}},r.a.createElement(h.a.Item,{name:["name"],label:"Name",rules:[{required:!0}]},r.a.createElement(E.a,null)),r.a.createElement(h.a.Item,{name:["username"],label:"Username",rules:[{required:!0}]},r.a.createElement(E.a,null)),r.a.createElement(h.a.Item,{name:["password"],label:"Password",rules:[{required:!0}]},r.a.createElement(E.a,null)),r.a.createElement(h.a.Item,null,r.a.createElement(N.a,{type:"primary",htmlType:"submit"},"Submit"))))}var R=function(e){return{type:"LOGGED_USER",data:e}},T=n(437),P=n(439),D=n(441),L=n(443),q=n(444),F=n(442),A=n(211),$=n.n(A),B=(n(395),Object(T.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})));var G=Object(u.e)((function(e){var t=B();return r.a.createElement("div",{className:t.root},r.a.createElement(P.a,{position:"static"},r.a.createElement(D.a,null,r.a.createElement(F.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement($.a,null)),r.a.createElement(L.a,{variant:"h6",className:t.title},"SavePass"),r.a.createElement(q.a,{onClick:function(){localStorage.removeItem("savepass-token"),e.history.push("/")},color:"inherit"},"Logout"))))})),W=Object(U.b)((function(e){return{loggedIn:e.loggedIn}}),(function(e){return{deleteUser:function(t){e(function(e){return{type:"DELETE_USER",_id:e}}(t))},addUser:function(t){e(function(e){return{type:"ADD_USER",user:e}}(t))},setUsers:function(t){e(function(e){return{type:"SET_USERS",users:e}}(t))}}}))((function(e){return Object(a.useEffect)((function(){localStorage.getItem("savepass-token")?I.get("account",{headers:{"auth-token":localStorage.getItem("savepass-token")}}).then((function(t){e.setUsers(t.data)})):e.history.push("/")}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(G,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(_,{addUser:e.addUser}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(C,{deleteUser:e.deleteUser}))})),V=n(451),J=n(457),M=n(458),z=(n(398),Object(U.b)((function(e){return{}}),(function(e){return{loggedUser:function(t){e(R(t))}}}))((function(e){Object(a.useEffect)((function(){localStorage.getItem("savepass-token")&&x.get("user/login/currentUser/").then((function(t){return e.history.push("/home")}))}),[]);return r.a.createElement(h.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(t){console.log("Received values of form: ",t);var n={username:t.username,password:t.password};I.post("/user/login/",n).then(function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.setItem("savepass-token",n.data.token);case 2:e.loggedUser({name:n.data.name,loggedIn:!0});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(t){return e.history.push("/home")})).then((function(e){return V.b.success("Logged in successfully!")})).then((function(e){return console.log("Logged In")})).catch((function(e){return V.b.error("Invalid Credentials")}))}},r.a.createElement(h.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(E.a,{prefix:r.a.createElement(J.a,{className:"site-form-item-icon"}),placeholder:"Username"})),r.a.createElement(h.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(E.a,{prefix:r.a.createElement(M.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),r.a.createElement(h.a.Item,null,r.a.createElement(N.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in")))})),n(24)),H=n(456),K=n(446),Q=n(449),X=n(447),Y=n(452),Z=n(213),ee=n.n(Z),te=n(445),ne=Object(T.a)((function(e){var t;return{paper:(t={marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},Object(z.a)(t,"marginTop","40px"),Object(z.a)(t,"marginLeft","20px"),t),avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var ae=Object(U.b)((function(e,t){return{props:t}}),(function(e){return{loggedUser:function(t){e(R(t))}}}))(Object(u.e)((function(e){var t=ne(),n=Object(a.useState)(""),o=Object(f.a)(n,2),c=o[0],u=o[1],i=Object(a.useState)(""),m=Object(f.a)(i,2),p=m[0],g=m[1];Object(a.useEffect)((function(){localStorage.getItem("savepass-token")&&x.get("user/login/currentUser/").then((function(t){return e.history.push("/home")}))}),[]);var b=function(e){var t=e.target.name,n=e.target.value;"username"===t?u(n):g(n)};return V.b.config({top:80}),r.a.createElement(te.a,{component:"main",maxWidth:"xs"},r.a.createElement(K.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(H.a,{className:t.avatar},r.a.createElement(ee.a,null)),r.a.createElement(L.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(Q.a,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Username",name:"username",autoComplete:"email"},c,{autoFocus:!0,onChange:b})),r.a.createElement(Q.a,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"},p,{onChange:b})),r.a.createElement(q.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(t){return function(t){t.preventDefault();var n={username:c,password:p};I.post("/user/login/",n).then(function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.setItem("savepass-token",n.data.token);case 2:e.loggedUser({name:n.data.name,loggedIn:!0});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(t){return e.history.push("/home")})).then((function(e){return V.b.success("Logged in successfully!")})).then((function(e){return console.log("Logged In")})).catch((function(e){return V.b.error("Invalid Credentials")}))}(t)}},"Sign In"),r.a.createElement(X.a,{container:!0},r.a.createElement(X.a,{item:!0,xs:!0},r.a.createElement(s.b,{variant:"body2"},"Forgot password?")),r.a.createElement(X.a,{item:!0},r.a.createElement("a",null,r.a.createElement(s.b,null,"Don't have an account? Sign Up")))))),r.a.createElement(Y.a,{mt:5}))}))),re=function(e){return Object(a.useEffect)((function(){document.title="SavePass"}),[]),r.a.createElement(s.a,{basename:"/SavePass"},r.a.createElement(u.a,{path:"/home",exact:!0,component:W}),r.a.createElement(u.a,{path:"/",exact:!0,component:ae}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=n(124),ce={users:[],loggedIn:!1,name:""};n(401);var se=Object(oe.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;if("DELETE_USER"===t.type){var n=e.users.filter((function(e){return t._id!==e._id}));return Object(p.a)(Object(p.a)({},e),{},{users:n})}if("ADD_USER"===t.type){var a=t.user;return a._id=Math.random(),Object(p.a)(Object(p.a)({},e),{},{users:[].concat(Object(m.a)(e.users),[a])})}return"LOGGED_USER"===t.type?Object(p.a)(Object(p.a)({},e),{},{loggedIn:t.data.loggedIn,name:t.data.name}):"SET_USERS"===t.type?Object(p.a)(Object(p.a)({},e),{},{users:t.users}):e}));c.a.render(r.a.createElement(U.a,{store:se},r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[236,1,2]]]);
//# sourceMappingURL=main.b219c583.chunk.js.map