(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{47:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(20),s=a.n(r),o=(a(47),a(36)),i=a(37),l=a(42),u=a(41),j=(a(48),a(6)),p=a(5),b=a(0),d=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{class:"jumbotron mt-5",children:[Object(b.jsx)("h1",{class:"display-4",children:"Welcome to Auth System!"}),Object(b.jsx)("p",{class:"lead",children:"This is an incredible authentication system with production level features!"}),Object(b.jsx)("hr",{class:"my-4"}),Object(b.jsx)("p",{children:"Click the Log In button"}),Object(b.jsx)(j.b,{class:"btn btn-primary btn-lg",to:"/login",role:"button",children:"Login"})]})})},h=a(4),m=a.n(h),O=a(13),f=a(16),x=a(3),v=a(8),g=a(7),y=a(14),w=a.n(y),S="LOGIN_SUCCESS",N="LOGIN_FAIL",_="SIGNUP_SUCCESS",C="SIGNUP_FAIL",A="ACTIVATION_SUCCESS",k="ACTIVATION_FAIL",I="USER_LOADED_SUCCESS",E="USER_LOADED_FAIL",T="AUTHENTICATED_SUCCESS",L="AUTHENTICATED_FAIL",F="PASSWORD_RESET_FAIL",U="PASSWORD_RESET_SUCCESS",R="PASSWORD_RESET_CONFIRM_FAIL",P="PASSWORD_RESET_CONFIRM_SUCCESS",D="GOOGLE_AUTH_SUCCESS",q="GOOGLE_AUTH_FAIL",G="FACEBOOK_AUTH_SUCCESS",J="FACEBOOK_AUTH_FAIL",W="LOGOUT",H=function(){return function(){var e=Object(O.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=14;break}return a={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,w.a.get("".concat("http://localhost:8000","/auth/users/me/"),a);case 5:n=e.sent,t({type:I,payload:n.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:E});case 12:e.next=15;break;case 14:t({type:E});case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},B=Object(g.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(n){var c,r,s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,w.a.post("".concat("http://localhost:8000","/auth/jwt/create/"),r,c);case 5:s=a.sent,n({type:S,payload:s.data}),n(H()),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),n({type:N});case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,c=Object(n.useState)({email:"",password:""}),r=Object(v.a)(c,2),s=r[0],o=r[1],i=s.email,l=s.password,u=function(e){return o(Object(x.a)(Object(x.a)({},s),{},Object(f.a)({},e.target.name,e.target.value)))},d=function(){var e=Object(O.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat("http://localhost:8000","/auth/o/google-oauth2/?redirect_uri=").concat("http://localhost:8000","/google"));case 3:t=e.sent,window.location.replace(t.data.authorization_url),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(O.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat("http://localhost:8000","/auth/o/facebook/?redirect_uri=").concat("http://localhost:8000","/facebook"));case 3:t=e.sent,window.location.replace(t.data.authorization_url),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return a?Object(b.jsx)(p.a,{to:"/"}):Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"Sign In"}),Object(b.jsx)("p",{children:"Sign into your Account"}),Object(b.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(i,l)}(e)},children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",value:i,onChange:function(e){return u(e)},required:!0})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",value:l,onChange:function(e){return u(e)},minLength:"6",required:!0})}),Object(b.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Login"})]}),Object(b.jsx)("button",{className:"btn btn-danger mt-3",onClick:d,children:"Continue With Google"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-primary mt-3",onClick:h,children:"Continue With Facebook"}),Object(b.jsxs)("p",{className:"mt-3",children:["Don't have an account? ",Object(b.jsx)(j.b,{to:"/signup",children:"Sign Up"})]}),Object(b.jsxs)("p",{className:"mt-3",children:["Forgot your Password? ",Object(b.jsx)(j.b,{to:"/reset-password",children:"Reset Password"})]})]})})),M=Object(g.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:W})}}})((function(e){var t=e.logout,a=e.isAuthenticated,c=Object(n.useState)(!1),r=Object(v.a)(c,2),s=r[0],o=r[1],i=function(){t(),o(!0)};return Object(b.jsxs)(n.Fragment,{children:[Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(b.jsx)(j.b,{className:"navbar-brand",to:"/",children:"Auth System"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsxs)(j.b,{className:"nav-link",to:"/",children:["Home ",Object(b.jsx)("span",{className:"sr-only",children:"(current)"})]})}),a?Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"#!",onClick:i,children:"Logout"})}):Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{className:"nav-link",to:"/signup",children:"Sign Up"})})]})]})})]}),s?Object(b.jsx)(p.a,{to:"/"}):Object(b.jsx)(n.Fragment,{})]})})),V=Object(g.b)(null,{checkAuthenticated:function(){return function(){var e=Object(O.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return a={headers:{"Content-Type":"application/json",Accept:"application/json"}},n=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,w.a.post("".concat("http://localhost:8000","/auth/jwt/verify/"),n,a);case 6:"token_not_valid"!==e.sent.data.code?t({type:T}):t({type:L}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:L});case 13:e.next=16;break;case 15:t({type:L});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},load_user:H})((function(e){var t=e.checkAuthenticated,a=e.load_user,c=e.children;return Object(n.useEffect)((function(){t(),a()}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(M,{}),c]})})),z=Object(g.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,a,n,c){return function(){var r=Object(O.a)(m.a.mark((function r(s){var o,i,l;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o={headers:{"Content-Type":"application/json"}},i=JSON.stringify({first_name:e,last_name:t,email:a,password:n,re_password:c}),r.prev=2,r.next=5,w.a.post("".concat("http://localhost:8000","/auth/users/"),i,o);case 5:l=r.sent,s({type:_,payload:l.data}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),s({type:C});case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.signup,a=e.isAuthenticated,c=Object(n.useState)(!1),r=Object(v.a)(c,2),s=r[0],o=r[1],i=Object(n.useState)({first_name:"",last_name:"",email:"",password:"",re_password:""}),l=Object(v.a)(i,2),u=l[0],d=l[1],h=u.first_name,m=u.last_name,O=u.email,g=u.password,y=u.re_password,w=function(e){return d(Object(x.a)(Object(x.a)({},u),{},Object(f.a)({},e.target.name,e.target.value)))};return a?Object(b.jsx)(p.a,{to:"/"}):s?Object(b.jsx)(p.a,{to:"/login"}):Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"Sign Up"}),Object(b.jsx)("p",{children:"Create your Account"}),Object(b.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),g===y&&(t(h,m,O,g,y),o(!0))}(e)},children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control",type:"text",placeholder:"First Name*",name:"first_name",value:h,onChange:function(e){return w(e)},required:!0})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control",type:"text",placeholder:"Last Name*",name:"last_name",value:m,onChange:function(e){return w(e)},required:!0})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control",type:"email",placeholder:"Email*",name:"email",value:O,onChange:function(e){return w(e)},required:!0})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control",type:"password",placeholder:"Password*",name:"password",value:g,onChange:function(e){return w(e)},minLength:"6",required:!0})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control",type:"password",placeholder:"Confirm Password*",name:"re_password",value:y,onChange:function(e){return w(e)},minLength:"6",required:!0})}),Object(b.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Register"})]}),Object(b.jsxs)("p",{className:"mt-3",children:["Already have an account? ",Object(b.jsx)(j.b,{to:"/login",children:"Sign In"})]})]})})),K=Object(g.b)(null,{reset_password_confirm:function(e,t,a,n){return function(){var c=Object(O.a)(m.a.mark((function c(r){var s,o;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s={headers:{"Content-Type":"application/json"}},o=JSON.stringify({uid:e,token:t,new_password:a,re_new_password:n}),c.prev=2,c.next=5,w.a.post("".concat("http://localhost:8000","/auth/users/reset_password_confirm/"),o,s);case 5:r({type:P}),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(2),r({type:R});case 11:case"end":return c.stop()}}),c,null,[[2,8]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.match,a=e.reset_password_confirm,c=Object(n.useState)(!1),r=Object(v.a)(c,2),s=r[0],o=r[1],i=Object(n.useState)({new_password:"",re_new_password:""}),l=Object(v.a)(i,2),u=l[0],j=l[1],d=u.new_password,h=u.re_new_password,m=function(e){return j(Object(x.a)(Object(x.a)({},u),{},Object(f.a)({},e.target.name,e.target.value)))};return s?Object(b.jsx)(p.a,{to:"/"}):Object(b.jsx)("div",{className:"container mt-5",children:Object(b.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var n=t.params.uid,c=t.params.token;a(n,c,d,h),o(!0)}(e)},children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control",type:"password",placeholder:"New Password",name:"new_password",value:d,onChange:function(e){return m(e)},minLength:"6",required:!0})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control",type:"password",placeholder:"Confirm New Password",name:"re_new_password",value:h,onChange:function(e){return m(e)},minLength:"6",required:!0})}),Object(b.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Reset Password"})]})})})),Q=Object(g.b)(null,{reset_password:function(e){return function(){var t=Object(O.a)(m.a.mark((function t(a){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e}),t.prev=2,t.next=5,w.a.post("".concat("http://localhost:8000","/auth/users/reset_password/"),c,n);case 5:a({type:U}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),a({type:F});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.reset_password,a=Object(n.useState)(!1),c=Object(v.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)({email:""}),i=Object(v.a)(o,2),l=i[0],u=i[1],j=l.email;return r?Object(b.jsx)(p.a,{to:"/"}):Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"Request Password Reset:"}),Object(b.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(j),s(!0)}(e)},children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",value:j,onChange:function(e){return function(e){return u(Object(x.a)(Object(x.a)({},l),{},Object(f.a)({},e.target.name,e.target.value)))}(e)},required:!0})}),Object(b.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Reset Password"})]})]})})),X=Object(g.b)(null,{verify:function(e,t){return function(){var a=Object(O.a)(m.a.mark((function a(n){var c,r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({uid:e,token:t}),a.prev=2,a.next=5,w.a.post("".concat("http://localhost:8000","/auth/users/activation/"),r,c);case 5:n({type:A}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),n({type:k});case 11:case"end":return a.stop()}}),a,null,[[2,8]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.verify,a=e.match,c=Object(n.useState)(!1),r=Object(v.a)(c,2),s=r[0],o=r[1];return s?Object(b.jsx)(p.a,{to:"/"}):Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{marginTop:"200px"},children:[Object(b.jsx)("h1",{children:"Verify your Account:"}),Object(b.jsx)("button",{onClick:function(e){var n=a.params.uid,c=a.params.token;t(n,c),o(!0)},style:{marginTop:"50px"},type:"button",className:"btn btn-primary",children:"Verify"})]})})})),Y=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(V,{children:Object(b.jsxs)(p.d,{children:[Object(b.jsx)(p.b,{exact:!0,path:"/",component:d}),Object(b.jsx)(p.b,{exact:!0,path:"/login",component:B}),Object(b.jsx)(p.b,{exact:!0,path:"/signup",component:z}),Object(b.jsx)(p.b,{exact:!0,path:"/reset-password",component:Q}),Object(b.jsx)(p.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:K}),Object(b.jsx)(p.b,{exact:!0,path:"/activate/:uid/:token",component:X})]})})})})},Z=(a(74),a(17)),$=a(39),ee=a(40),te={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null},ae=Object(Z.createStore)(Object(Z.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case T:return Object(x.a)(Object(x.a)({},e),{},{isAuthenticated:!0});case S:case D:case G:return localStorage.setItem("access",n.access),localStorage.setItem("refresh",n.refresh),Object(x.a)(Object(x.a)({},e),{},{isAuthenticated:!0,access:n.access,refresh:n.refresh});case _:return Object(x.a)(Object(x.a)({},e),{},{isAuthenticated:!1});case I:return Object(x.a)(Object(x.a)({},e),{},{user:n});case L:return Object(x.a)(Object(x.a)({},e),{},{isAuthenticated:!1});case E:return Object(x.a)(Object(x.a)({},e),{},{user:null});case q:case J:case N:case C:case W:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(x.a)(Object(x.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case U:case F:case P:case R:case A:case k:return Object(x.a)({},e);default:return e}}}),Object($.composeWithDevTools)(Object(Z.applyMiddleware)(ee.a))),ne=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)(g.a,{store:ae,children:Object(b.jsx)(j.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(Y,{})})})})}}]),a}(n.Component),ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(ne,{})}),document.getElementById("root")),ce()}},[[75,1,2]]]);
//# sourceMappingURL=main.51d50545.chunk.js.map