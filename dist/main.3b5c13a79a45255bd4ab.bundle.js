webpackJsonp([4],{"/vPP":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var u=t("6lRS"),e=function(){function n(n){this.snackBar=n,this.alerts=[]}return n.prototype.add=function(n,l,t){var u="string"==typeof n?n:n instanceof Error?n.message:Object.keys(n).map(function(l){return n[l]}).join("\t");this.alerts.push(u),this.snackBar.open(u,l,t)},n.ctorParameters=function(){return[{type:u.a}]},n}()},0:function(n,l,t){n.exports=t("cDNt")},b91f:function(n,l,t){"use strict";t.d(l,"a",function(){return _});var u=t("XKz0"),e=t("bKpL"),r=(t.n(e),t("xpf9")),o=(t.n(r),t("5v8a")),a=(t.n(o),t("S7im")),c=(t.n(a),t("/vPP")),_=function(){function n(n,l){this.http=n,this.alertsService=l;var t=localStorage.getItem("access-token");null!=t&&(this.access_token=t)}return n.loggedIn=function(){return null!==localStorage.getItem("access-token")},n.logout=function(){localStorage.removeItem("access-token")},n.prototype._login=function(n){this.access_token=n.access_token,localStorage.setItem("access-token",this.access_token)},n.prototype.login=function(n){return this.http.post("/api/auth",n)},n.prototype.register=function(n){return this.http.post("/api/user",n,{observe:"response"})},n.prototype.signinup=function(n){var l=this,t="Password invalid";return this.login(n).catch(function(u){return u.error.indexOf(t)>-1?l.alertsService.add(t)||e.Observable.throw(t):l.register(n).map(function(n){return Object.assign(n.body,{access_token:n.headers.get("X-Access-Token")})})})},n.ctorParameters=function(){return[{type:u.c},{type:c.a}]},n}()},cDNt:function(n,l,t){"use strict";function u(n){return b._40(0,[(n()(),b._22(0,null,null,16,"span",[],null,null,null,null,null)),(n()(),b._39(null,["\n    "])),(n()(),b._22(0,null,null,5,"button",[["class","mat-button"],["color","secondary"],["md-button",""]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var u=!0,e=n.component;if("click"===l){u=!1!==e.logout()&&u}return u},S.b,S.a)),b._20(16384,null,0,j.z,[[2,j.m],b.q],null,null),b._20(180224,null,0,I.b,[b.Q,b.q,P.a,C.h],{color:[0,"color"]},null),b._20(16384,null,0,I.c,[],null,null),b._36(8448,null,j.m,!0,[]),(n()(),b._39(0,["\n      Logout\n    "])),(n()(),b._39(null,["\n    "])),(n()(),b._22(0,null,null,6,"button",[["class","mat-raised-button"],["color","accent"],["md-raised-button",""],["routerLink","/dashboard"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var u=!0;if("click"===l){u=!1!==b._35(n,10).onClick()&&u}return u},S.b,S.a)),b._20(16384,null,0,L.l,[L.k,L.a,[8,null],b.Q,b.q],{routerLink:[0,"routerLink"]},null),b._20(16384,null,0,j.z,[[2,j.m],b.q],null,null),b._20(180224,null,0,I.b,[b.Q,b.q,P.a,C.h],{color:[0,"color"]},null),b._20(16384,null,0,I.e,[],null,null),b._36(8448,null,j.m,!0,[]),(n()(),b._39(0,["\n      Dashboard\n    "])),(n()(),b._39(null,["\n  "]))],function(n,l){n(l,4,0,"secondary");n(l,10,0,"/dashboard");n(l,12,0,"accent")},function(n,l){n(l,2,0,b._35(l,4).disabled||null),n(l,9,0,b._35(l,12).disabled||null)})}function e(n){return b._40(0,[(n()(),b._22(0,null,null,7,"a",[["routerLink","/auth"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;if("click"===l){u=!1!==b._35(n,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u}return u},null,null)),b._20(671744,null,0,L.m,[L.k,L.a,q.g],{routerLink:[0,"routerLink"]},null),(n()(),b._39(null,["\n    "])),(n()(),b._22(0,null,null,3,"md-icon",[["class","account_box mat-icon"],["role","img"]],null,null,null,w.b,w.a)),b._20(16384,null,0,j.z,[[2,j.m],b.q],null,null),b._20(638976,null,0,x.b,[b.Q,b.q,x.d,[8,null]],null,null),(n()(),b._39(0,["account_box"])),(n()(),b._39(null,["\n  "]))],function(n,l){n(l,1,0,"/auth"),n(l,5,0)},function(n,l){n(l,0,0,b._35(l,1).target,b._35(l,1).href)})}function r(n){return b._40(0,[(n()(),b._22(0,null,null,16,"md-toolbar",[["class","mat-toolbar"],["color","primary"],["role","toolbar"]],null,null,null,z.b,z.a)),b._20(16384,null,0,j.z,[[2,j.m],b.q],null,null),b._20(49152,null,0,O.a,[b.Q,b.q],{color:[0,"color"]},null),b._36(8448,null,j.m,!0,[]),(n()(),b._39(0,["\n  "])),(n()(),b._22(0,null,0,2,"a",[["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;if("click"===l){u=!1!==b._35(n,6).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u}return u},null,null)),b._20(671744,null,0,L.m,[L.k,L.a,q.g],{routerLink:[0,"routerLink"]},null),(n()(),b._39(null,["NgMaterialScaffold"])),(n()(),b._39(0,["\n\n  "])),(n()(),b._22(0,null,0,0,"span",[["class","example-fill-remaining-space"]],null,null,null,null,null)),(n()(),b._39(0,["\n\n  "])),(n()(),b._16(16777216,null,0,1,null,u)),b._20(16384,null,0,q.h,[b._4,b.Z],{ngIf:[0,"ngIf"]},null),(n()(),b._39(0,["\n  "])),(n()(),b._16(16777216,null,0,1,null,e)),b._20(16384,null,0,q.h,[b._4,b.Z],{ngIf:[0,"ngIf"]},null),(n()(),b._39(0,["\n"])),(n()(),b._39(null,["\n"]))],function(n,l){var t=l.component;n(l,2,0,"primary");n(l,6,0,"/"),n(l,12,0,t.loggedIn()),n(l,15,0,!t.loggedIn())},function(n,l){n(l,5,0,b._35(l,6).target,b._35(l,6).href)})}function o(n){return b._40(0,[(n()(),b._22(0,null,null,1,"app-navbar",[],null,null,null,r,D)),b._20(49152,null,0,A,[],null,null)],null,null)}function a(n){return b._40(0,[(n()(),b._22(0,null,null,2,"md-toolbar-row",[["class","mat-toolbar-row"]],null,null,null,null,null)),b._20(16384,null,0,O.c,[],null,null),(n()(),b._39(null,["\n  ","\n"]))],null,function(n,l){n(l,2,0,l.component.serverStatus.version)})}function c(n){return b._40(0,[(n()(),b._16(16777216,null,null,1,null,a)),b._20(16384,null,0,q.h,[b._4,b.Z],{ngIf:[0,"ngIf"]},null),(n()(),b._39(null,["\n"]))],function(n,l){n(l,1,0,l.component.serverStatus.version)},null)}function _(n){return b._40(0,[(n()(),b._22(0,null,null,1,"app-server-status",[],null,null,null,c,R)),b._20(114688,null,0,N,[T,E.a],null,null)],function(n,l){n(l,1,0)},null)}function i(n){return b._40(0,[(n()(),b._22(0,null,null,7,"md-toolbar",[["class","mat-toolbar"],["color","basic"],["role","toolbar"]],null,null,null,z.b,z.a)),b._20(16384,null,0,j.z,[[2,j.m],b.q],null,null),b._20(49152,null,0,O.a,[b.Q,b.q],{color:[0,"color"]},null),b._36(8448,null,j.m,!0,[]),(n()(),b._39(0,["\n  "])),(n()(),b._22(0,null,0,1,"app-server-status",[],null,null,null,c,R)),b._20(114688,null,0,N,[T,E.a],null,null),(n()(),b._39(0,["\n"])),(n()(),b._39(null,["\n"]))],function(n,l){n(l,2,0,"basic"),n(l,6,0)},null)}function s(n){return b._40(0,[(n()(),b._22(0,null,null,1,"app-footer",[],null,null,null,i,F)),b._20(49152,null,0,Z,[],null,null)],null,null)}function f(n){return b._40(0,[(n()(),b._22(0,null,null,1,"app-navbar",[],null,null,null,r,D)),b._20(49152,null,0,A,[],null,null),(n()(),b._39(null,["\n\n"])),(n()(),b._22(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),b._20(212992,null,0,L.o,[L.b,b._4,b.m,[8,null],b.j],null,null),(n()(),b._39(null,["\n\n"])),(n()(),b._22(0,null,null,1,"app-footer",[],null,null,null,i,F)),b._20(49152,null,0,Z,[],null,null),(n()(),b._39(null,["\n"]))],function(n,l){n(l,4,0)},null)}function p(n){return b._40(0,[(n()(),b._22(0,null,null,1,"app-root",[],null,null,null,f,Y)),b._20(49152,null,0,g,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var b=(t("rgUS"),t("/oeL")),d={production:!0},h=function(){function n(){}return n}(),g=function(){function n(){this.title="app"}return n}(),m=t("kJcM"),v=t("8HKE"),k=[""],y=[".example-fill-remaining-space[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}"],S=t("wjk8"),j=t("j5BN"),I=t("ghl+"),P=t("V8+5"),C=t("8Xfy"),L=t("BkNc"),q=t("qbdv"),w=t("Bhux"),x=t("vgc3"),z=t("Co17"),O=t("YXpL"),K=t("b91f"),A=function(){function n(){this.loggedIn=K.a.loggedIn,this.logout=K.a.logout}return n.ctorParameters=function(){return[]},n}(),J=[y],D=b._19({encapsulation:0,styles:J,data:{}}),M=(b._17("app-navbar",A,o,{},{},[]),[""]),X=[""],H=t("XKz0"),T=function(){function n(n){this.http=n}return n.prototype.get=function(){return this.http.get("/api")},n.ctorParameters=function(){return[{type:H.c}]},n}(),E=t("/vPP"),N=function(){function n(n,l){this.serverStatusService=n,this.alertsService=l,this.serverStatus={}}return n.prototype.ngOnInit=function(){var n=this;this.serverStatus={version:"App 0.0.2; "},this.serverStatusService.get().subscribe(function(l){return n.serverStatus.version+="API "+l.version},function(l){var t=504===l.status?"API server not available":l.statusText;n.alertsService.add(t),n.serverStatus.version+=t})},n.ctorParameters=function(){return[{type:T},{type:E.a}]},n}(),Q=[X],R=b._19({encapsulation:0,styles:Q,data:{}}),Z=(b._17("app-server-status",N,_,{serverStatus:"serverStatus"},{},[]),function(){function n(){}return n.ctorParameters=function(){return[]},n}()),B=[M],F=b._19({encapsulation:0,styles:B,data:{}}),G=(b._17("app-footer",Z,s,{},{},[]),[k]),Y=b._19({encapsulation:0,styles:G,data:{}}),U=b._17("app-root",g,p,{},{},[]),V=t("fc+i"),W=t("f9zQ"),$=t("fL27"),nn=t("EyWH"),ln=t("l6RC"),tn=t("4jwp"),un=t("OFGE"),en=t("1ini"),rn=t("ppgG"),on=t("w24y"),an=t("CPp0"),cn=t("R1vt"),_n=t("LT5m"),sn=function(){function n(n,l){this.router=n,this.alertsService=l}return n.prototype.canActivate=function(n,l){var t=l.url;return this.checkLogin(t)},n.prototype.checkLogin=function(n){return!!K.a.loggedIn()||(this.alertsService.add("Auth required to view "+n),this.router.navigate(["/auth"],{queryParams:{redirectUrl:n}}).then(function(){}),!1)},n.ctorParameters=function(){return[{type:L.k},{type:E.a}]},n}(),fn=t("CZgk"),pn=t("Ioj9"),bn=t("0cZJ"),dn=t("Lpd/"),hn=t("4+t2"),gn=t("SlD5"),mn=t("cC+T"),vn=t("e0rv"),kn=t("oCZ8"),yn=function(){function n(){}return n}(),Sn=function(){function n(){}return n}(),jn=function(){function n(){}return n}(),In=b._18(h,[g],function(n){return b._32([b._33(512,b.m,b._14,[[8,[m.a,v.a,v.b,U]],[3,b.m],b.H]),b._33(5120,b.D,b._31,[[3,b.D]]),b._33(4608,q.j,q.i,[b.D]),b._33(5120,b.c,b._23,[]),b._33(5120,b.B,b._28,[]),b._33(5120,b.C,b._29,[]),b._33(4608,V.c,V.t,[q.c]),b._33(6144,b.T,null,[V.c]),b._33(4608,V.f,V.g,[]),b._33(5120,V.d,function(n,l,t,u){return[new V.l(n),new V.p(l),new V.o(t,u)]},[q.c,q.c,q.c,V.f]),b._33(4608,V.e,V.e,[V.d,b.J]),b._33(135680,V.n,V.n,[q.c]),b._33(4608,V.m,V.m,[V.e,V.n]),b._33(5120,W.a,$.d,[]),b._33(5120,W.c,$.e,[]),b._33(4608,W.b,$.c,[W.a,W.c]),b._33(5120,b.R,$.f,[V.m,W.b,b.J]),b._33(6144,V.q,null,[V.n]),b._33(4608,b._0,b._0,[b.J]),b._33(4608,V.h,V.h,[q.c]),b._33(4608,V.j,V.j,[q.c]),b._33(4608,nn.b,$.b,[b.R,V.b]),b._33(4608,H.h,H.m,[q.c,b.M,H.k]),b._33(4608,H.n,H.n,[H.h,H.l]),b._33(5120,H.a,function(n){return[n]},[H.n]),b._33(4608,H.j,H.j,[]),b._33(6144,H.i,null,[H.j]),b._33(4608,H.g,H.g,[H.i]),b._33(6144,H.b,null,[H.g]),b._33(5120,H.f,H.o,[H.b,[2,H.a]]),b._33(4608,H.c,H.c,[H.f]),b._33(6144,ln.b,null,[V.b]),b._33(4608,ln.c,ln.c,[[2,ln.b]]),b._33(4608,P.a,P.a,[]),b._33(5120,tn.c,tn.a,[[3,tn.c],b.J,P.a]),b._33(5120,tn.f,tn.e,[[3,tn.f],tn.c]),b._33(4608,un.f,un.f,[tn.c,tn.f]),b._33(5120,un.d,un.i,[[3,un.d]]),b._33(4608,un.l,un.l,[tn.f]),b._33(4608,un.b,un.b,[un.f,un.d,b.m,un.l,b.g,b.z,b.J]),b._33(5120,un.j,un.k,[un.b]),b._33(5120,en.b,en.a,[un.b]),b._33(4608,C.j,C.j,[P.a]),b._33(4608,C.i,C.i,[C.j,P.a,b.J]),b._33(136192,C.e,C.c,[[3,C.e],P.a]),b._33(5120,C.n,C.m,[[3,C.n],[2,C.k],P.a]),b._33(5120,C.h,C.f,[[3,C.h],b.J,P.a]),b._33(4608,rn.a,rn.a,[]),b._33(5120,on.b,on.a,[un.b]),b._33(4608,on.c,on.c,[un.b,b.z,[2,q.f],on.b,[3,on.c]]),b._33(5120,x.d,x.a,[[3,x.d],[2,an.a],V.c]),b._33(5120,cn.b,cn.d,[un.b]),b._33(4608,_n.b,_n.b,[un.b,C.n,b.z,[3,_n.b]]),b._33(4608,T,T,[H.c]),b._33(5120,L.a,L.x,[L.k]),b._33(4608,L.d,L.d,[]),b._33(6144,L.f,null,[L.d]),b._33(135680,L.p,L.p,[L.k,b.G,b.k,b.z,L.f]),b._33(4608,L.e,L.e,[]),b._33(5120,L.h,L.A,[L.y]),b._33(5120,b.b,function(n){return[n]},[L.h]),b._33(4608,E.a,E.a,[_n.b]),b._33(4608,K.a,K.a,[H.c,E.a]),b._33(4608,sn,sn,[L.k,E.a]),b._33(512,q.b,q.b,[]),b._33(1024,b.r,V.r,[]),b._33(1024,b.I,function(){return[L.t()]},[]),b._33(512,L.y,L.y,[b.z]),b._33(1024,b.d,function(n,l,t){return[V.s(n,l),L.z(t)]},[[2,V.i],[2,b.I],L.y]),b._33(512,b.e,b.e,[[2,b.d]]),b._33(131584,b._21,b._21,[b.J,b._15,b.z,b.r,b.m,b.e]),b._33(2048,b.g,null,[b._21]),b._33(512,b.f,b.f,[b.g]),b._33(512,V.a,V.a,[[3,V.a]]),b._33(512,$.a,$.a,[]),b._33(512,H.e,H.e,[]),b._33(512,H.d,H.d,[]),b._33(1024,L.s,L.v,[[3,L.k]]),b._33(512,L.r,L.c,[]),b._33(512,L.b,L.b,[]),b._33(256,L.g,{},[]),b._33(1024,q.g,L.u,[q.n,[2,q.a],L.g]),b._33(512,q.f,q.f,[q.g]),b._33(512,b.k,b.k,[]),b._33(512,b.G,b.X,[b.k,[2,b.Y]]),b._33(1024,L.i,function(){return[[{path:"",loadChildren:"app/home/home.module#HomeModule"},{path:"auth",loadChildren:"app/auth/auth.module#AuthModule"},{path:"dashboard",loadChildren:"app/dashboard/dashboard.module#DashboardModule",canActivate:[sn]}]]},[]),b._33(1024,L.k,L.w,[b.g,L.r,L.b,q.f,b.z,b.G,b.k,L.i,L.g,[2,L.q],[2,L.j]]),b._33(512,L.n,L.n,[[2,L.s],[2,L.k]]),b._33(512,j.e,j.e,[]),b._33(512,ln.a,ln.a,[]),b._33(256,j.n,!0,[]),b._33(512,j.s,j.s,[[2,V.b],[2,j.n]]),b._33(512,P.b,P.b,[]),b._33(512,tn.b,tn.b,[]),b._33(512,j.C,j.C,[]),b._33(512,j.A,j.A,[]),b._33(512,j.y,j.y,[]),b._33(512,fn.e,fn.e,[]),b._33(512,un.e,un.e,[]),b._33(512,en.c,en.c,[]),b._33(512,C.a,C.a,[]),b._33(512,I.d,I.d,[]),b._33(512,pn.e,pn.e,[]),b._33(512,rn.b,rn.b,[]),b._33(512,bn.a,bn.a,[]),b._33(512,on.e,on.e,[]),b._33(512,dn.c,dn.c,[]),b._33(512,j.u,j.u,[]),b._33(512,hn.a,hn.a,[]),b._33(512,x.c,x.c,[]),b._33(512,gn.b,gn.b,[]),b._33(512,cn.c,cn.c,[]),b._33(512,mn.a,mn.a,[]),b._33(512,vn.a,vn.a,[]),b._33(512,_n.d,_n.d,[]),b._33(512,O.b,O.b,[]),b._33(512,kn.a,kn.a,[]),b._33(512,yn,yn,[]),b._33(512,Sn,Sn,[]),b._33(512,jn,jn,[]),b._33(512,h,h,[]),b._33(256,H.k,"XSRF-TOKEN",[]),b._33(256,H.l,"X-XSRF-TOKEN",[]),b._33(256,cn.a,{overlapTrigger:!0,xPosition:"after",yPosition:"below"},[])])});d.production&&Object(b._8)(),Object(V.k)().bootstrapModuleFactory(In).catch(function(n){return console.log(n)})},gFIY:function(n,l,t){function u(n){var l=e[n];return l?t.e(l[1]).then(function(){return t(l[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var e={"app/auth/auth.module.ngfactory":["HHkH",2],"app/dashboard/dashboard.module.ngfactory":["UH1D",1],"app/home/home.module.ngfactory":["iS93",0]};u.keys=function(){return Object.keys(e)},u.id="gFIY",n.exports=u},oCZ8:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function n(){}return n}()}},[0]);