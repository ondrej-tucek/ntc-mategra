import{s as H,n as f}from"../chunks/scheduler.b6a75cd3.js";import{S as A,i as S,g as v,s as E,h as g,x as w,c as T,j,f as o,k as b,a as m,A as q,l as I,H as M,B as P}from"../chunks/index.d29d0e8f.js";import{e as k}from"../chunks/each.e59479a4.js";const d=i=>["/images",i].join("/");let C=[{id:1,path:d("i_01.jpg"),label:"Laser textured titanium substrate"},{id:2,path:d("i_02.jpg"),label:"Silica-titania porous bioglass"},{id:3,path:d("i_03.jpg"),label:"CaTiO<sub>3</sub> porous coating"},{id:4,path:d("i_04.jpg"),label:"Human mesenchymal stem cells"},{id:5,path:d("i_05.jpg"),label:"hMSCs from aged osteoporotic donors"},{id:5,path:d("i_06.jpg"),label:"µ-CT scans of macroporous silica-phosphate bioglass"}];function D(i,t,l){const a=i.slice();return a[0]=t[l],a}function O(i,t,l){const a=i.slice();return a[0]=t[l],a}function R(i){let t;return{c(){t=v("div"),this.h()},l(l){t=g(l,"DIV",{style:!0,class:!0}),j(t).forEach(o),this.h()},h(){I(t,"background-image","url("+i[0].path+")"),b(t,"class","svelte-qjxtic")},m(l,a){m(l,t,a)},p:f,d(l){l&&o(t)}}}function V(i){let t,l,a=i[0].label+"";return{c(){t=v("p"),l=new M(!1),this.h()},l(s){t=g(s,"P",{class:!0});var n=j(t);l=P(n,!1),n.forEach(o),this.h()},h(){l.a=null,b(t,"class","figcaption svelte-qjxtic")},m(s,n){m(s,t,n),l.m(a,t)},p:f,d(s){s&&o(t)}}}function L(i){let t,l=`Welcome to RESEARCH PROJECT website
  <div class="mategra-title is-italic svelte-qjxtic">Augmented treatment of osteoporotic bone with innovative organic-inorganic
    nanoparticle functionalized metal surfaces</div>
  Project 349: OSTEOMET<br/>
  &amp;
  <div class="mategra-title is-italic py-0 svelte-qjxtic">Advanced porous biomaterials functionalized with stem cells for enhanced
    implant osseointegration</div>
  Project 201: MATEGRA`,a,s,n,p,x=k(C),r=[];for(let e=0;e<x.length;e+=1)r[e]=R(O(i,x,e));let y=k(C),h=[];for(let e=0;e<y.length;e+=1)h[e]=V(D(i,y,e));return{c(){t=v("div"),t.innerHTML=l,a=E(),s=v("div");for(let e=0;e<r.length;e+=1)r[e].c();n=E(),p=v("div");for(let e=0;e<h.length;e+=1)h[e].c();this.h()},l(e){t=g(e,"DIV",{class:!0,"data-svelte-h":!0}),w(t)!=="svelte-o92lt5"&&(t.innerHTML=l),a=T(e),s=g(e,"DIV",{class:!0});var _=j(s);for(let u=0;u<r.length;u+=1)r[u].l(_);_.forEach(o),n=T(e),p=g(e,"DIV",{class:!0});var c=j(p);for(let u=0;u<h.length;u+=1)h[u].l(c);c.forEach(o),this.h()},h(){b(t,"class","project-info is-centered py-4 svelte-qjxtic"),b(s,"class","slider svelte-qjxtic"),b(p,"class","slider-text svelte-qjxtic")},m(e,_){m(e,t,_),m(e,a,_),m(e,s,_);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(s,null);m(e,n,_),m(e,p,_);for(let c=0;c<h.length;c+=1)h[c]&&h[c].m(p,null)},p:f,i:f,o:f,d(e){e&&(o(t),o(a),o(s),o(n),o(p)),q(r,e),q(h,e)}}}class J extends A{constructor(t){super(),S(this,t,null,L,H,{})}}export{J as component};
