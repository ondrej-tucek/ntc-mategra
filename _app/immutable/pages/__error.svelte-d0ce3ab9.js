import{S as V,i as q,s as C,e as v,t as b,k as E,l as w,c as p,a as g,h as z,d as o,m as j,b as D,g as k,G as c,j as I,E as S}from"../chunks/index-60a8efbe.js";function G(l){let e,s,a,n,i,f,d=l[1].message+"",u,m,_;return{c(){e=v("div"),s=v("div"),a=v("h1"),n=b(l[0]),i=E(),f=v("p"),u=b(d),m=E(),_=w(),this.h()},l(t){e=p(t,"DIV",{class:!0});var r=g(e);s=p(r,"DIV",{});var h=g(s);a=p(h,"H1",{class:!0});var x=g(a);n=z(x,l[0]),x.forEach(o),i=j(h),f=p(h,"P",{});var y=g(f);u=z(y,d),y.forEach(o),h.forEach(o),r.forEach(o),m=j(t),_=w(),this.h()},h(){D(a,"class","svelte-1lukgf9"),D(e,"class","center svelte-1lukgf9")},m(t,r){k(t,e,r),c(e,s),c(s,a),c(a,n),c(s,i),c(s,f),c(f,u),k(t,m,r),k(t,_,r)},p(t,[r]){r&1&&I(n,t[0]),r&2&&d!==(d=t[1].message+"")&&I(u,d)},i:S,o:S,d(t){t&&o(e),t&&o(m),t&&o(_)}}}function A({status:l,error:e}){return{props:{status:l,error:e}}}function H(l,e,s){let{status:a}=e,{error:n}=e;return l.$$set=i=>{"status"in i&&s(0,a=i.status),"error"in i&&s(1,n=i.error)},[a,n]}class B extends V{constructor(e){super(),q(this,e,H,G,C,{status:0,error:1})}}export{B as default,A as load};