import{_ as P,u as _,o as p,c as i,t as d,l as s,e as x,k as n,p as b,m as B,a1 as l,s as u,a2 as T,a3 as k,a4 as E,a5 as I,a6 as R,a7 as L,a8 as V,a9 as j,aa as q,ab as z,V as M,d as O,j as $,y as F,ac as N,ad as G,ae as H}from"./chunks/framework.35a27b98.js";import{t as D}from"./chunks/theme.60a9be35.js";const U={__name:"DocBefore",setup(t){const{page:e}=_();return(a,o)=>(p(),i("h1",null,d(s(e).title),1))}},Z=P(U,[["__scopeId","data-v-05969f0d"]]);const f=t=>(b("data-v-79a4ce05"),t=t(),B(),t),J={class:"source-card"},K=["href","title","alt"],Q=f(()=>n("svg",{t:"1697876979145",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"18274",width:"16",height:"16"},[n("path",{d:"M736.938667 370.56a42.666667 42.666667 0 1 1 62.122666-58.453333l170.666667 181.333333a42.666667 42.666667 0 0 1 0 58.453333l-170.666667 181.333334a42.666667 42.666667 0 0 1-62.122666-58.453334l143.146666-152.106666-143.146666-152.106667z m-449.877334 0L143.914667 522.666667l143.146666 152.106666a42.666667 42.666667 0 0 1-62.122666 58.453334l-170.666667-181.333334a42.666667 42.666667 0 0 1 0-58.453333l170.666667-181.333333a42.666667 42.666667 0 0 1 62.122666 58.453333z",fill:"currentColor","p-id":"18275"}),n("path",{d:"M559.130732 171.254372m41.212835 11.042946l0 0q41.212835 11.042946 30.16989 52.255781l-154.601243 576.979694q-11.042946 41.212835-52.255781 30.169889l0 0q-41.212835-11.042946-30.16989-52.255781l154.601243-576.979694q11.042946-41.212835 52.255781-30.169889Z",fill:"currentColor",opacity:".3","p-id":"18276"})],-1)),W=f(()=>n("div",{class:"text-wrapper"},[n("span",{class:"text"}," Source Code ")],-1)),X=[Q,W],Y={class:"source-card__footer"},ee=f(()=>n("span",{class:"tag"},"# Source Code",-1)),te={class:"tag"},ae={key:0,class:"tag"},se={__name:"AsideTop",setup(t){const{page:e}=_();return(a,o)=>{var r,h,m,g,v,y,A,w,C;return p(),i("div",J,[(r=s(e))!=null&&r.sourceCode?(p(),i("a",{key:0,class:"source-card__link",href:s(e).sourceCode,title:s(e).title,alt:s(e).title,target:"_blank"},X,8,K)):x("",!0),n("div",Y,[ee,n("span",te,"# "+d((m=(h=s(e))==null?void 0:h.conf)==null?void 0:m.en),1),((v=(g=s(e))==null?void 0:g.conf)==null?void 0:v.zh)!==((A=(y=s(e))==null?void 0:y.conf)==null?void 0:A.en)?(p(),i("span",ae," # "+d((C=(w=s(e))==null?void 0:w.conf)==null?void 0:C.zh),1)):x("",!0)])])}}},oe=P(se,[["__scopeId","data-v-79a4ce05"]]);const ne={extends:D,Layout:()=>l(D.Layout,null,{"doc-before":()=>l(Z),"aside-top":()=>l(oe)}),enhanceApp({app:t,router:e,siteData:a}){}};function S(t){if(t.extends){const e=S(t.extends);return{...e,...t,async enhanceApp(a){e.enhanceApp&&await e.enhanceApp(a),t.enhanceApp&&await t.enhanceApp(a)}}}return t}const c=S(ne),ce=O({name:"VitePressApp",setup(){const{site:t}=_();return $(()=>{F(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),N(),G(),H(),c.setup&&c.setup(),()=>l(c.Layout)}});async function re(){const t=ie(),e=pe();e.provide(k,t);const a=E(t.route);return e.provide(I,a),e.component("Content",R),e.component("ClientOnly",L),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),c.enhanceApp&&await c.enhanceApp({app:e,router:t,siteData:V}),{app:e,router:t,data:a}}function pe(){return j(ce)}function ie(){let t=u,e;return q(a=>{let o=z(a),r=null;return o&&(t&&(e=o),(t||e===o)&&(o=o.replace(/\.js$/,".lean.js")),r=M(()=>import(o),[])),u&&(t=!1),r},c.NotFound)}u&&re().then(({app:t,router:e,data:a})=>{e.go().then(()=>{T(e.route,a.site),t.mount("#app")})});export{re as createApp};