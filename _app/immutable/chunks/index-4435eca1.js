function v(){}function K(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function H(){return Object.create(null)}function p(t){t.forEach(L)}function R(t){return typeof t=="function"}function _t(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function dt(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function W(t){return Object.keys(t).length===0}function Q(t,...n){if(t==null)return v;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ht(t,n,e){t.$$.on_destroy.push(Q(n,e))}function mt(t,n,e,i){if(t){const r=D(t,n,e,i);return t[0](r)}}function D(t,n,e,i){return t[1]&&i?K(e.ctx.slice(),t[1](i(n))):e.ctx}function pt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],l=Math.max(n.dirty.length,r.length);for(let o=0;o<l;o+=1)u[o]=n.dirty[o]|r[o];return u}return n.dirty|r}return n.dirty}function yt(t,n,e,i,r,u){if(r){const l=D(n,e,i,u);t.p(l,r)}}function gt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function xt(t){return t==null?"":t}let A=!1;function U(){A=!0}function V(){A=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<n.length;s++){const f=n[s];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const s=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=s?r+1:X(1,r,y=>n[e[y]].claim_order,s))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const u=[],l=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);o>=c;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);u.reverse(),l.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<l.length;c++){for(;s<u.length&&l[c].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;t.insertBefore(l[c],f)}}function Z(t,n){if(A){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){A&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function bt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function wt(){return S(" ")}function $t(){return S("")}function At(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function O(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){O(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function rt(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const u=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];e[o.name]||u.push(o.name)}u.forEach(l=>r.removeAttribute(l))},()=>i(n))}function Nt(t,n,e){return rt(t,n,e,G)}function lt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Et(t){return lt(t," ")}function C(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Tt(t,n){const e=C(t,"HTML_TAG_START",0),i=C(t,"HTML_TAG_END",e);if(e===i)return new q(void 0,n);O(t);const r=t.splice(e,i-e+1);$(r[0]),$(r[r.length-1]);const u=r.slice(1,r.length-1);for(const l of u)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new q(u,n)}function vt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function St(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Mt(t,n=document.body){return Array.from(n.querySelectorAll(t))}class ct{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=et(e.nodeName):this.e=G(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach($)}}class q extends ct{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}let m;function h(t){m=t}function z(){if(!m)throw new Error("Function called outside component initialization");return m}function jt(t){z().$$.on_mount.push(t)}function Ht(t){z().$$.after_update.push(t)}const d=[],k=[],b=[],B=[],F=Promise.resolve();let E=!1;function I(){E||(E=!0,F.then(J))}function Ct(){return I(),F}function T(t){b.push(t)}const N=new Set;let x=0;function J(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),st(n.$$)}for(h(null),d.length=0,x=0;k.length;)k.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];N.has(e)||(N.add(e),e())}b.length=0}while(d.length);for(;B.length;)B.pop()();E=!1,N.clear(),h(t)}function st(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(T)}}const w=new Set;let _;function qt(){_={r:0,c:[],p:_}}function kt(){_.r||p(_.c),_=_.p}function ot(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Lt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:l,after_update:o}=t.$$;r&&r.m(n,e),i||T(()=>{const c=u.map(L).filter(R);l?l.push(...c):p(c),t.$$.on_mount=[]}),o.forEach(T)}function at(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){t.$$.dirty[0]===-1&&(d.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Gt(t,n,e,i,r,u,l,o=[-1]){const c=m;h(t);const s=t.$$={fragment:null,ctx:null,props:u,update:v,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:H(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};l&&l(s.root);let f=!1;if(s.ctx=e?e(t,n.props||{},(a,y,...M)=>{const j=M.length?M[0]:y;return s.ctx&&r(s.ctx[a],s.ctx[a]=j)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](j),f&&ft(t,a)),y}):[],s.update(),f=!0,p(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){U();const a=it(n.target);s.fragment&&s.fragment.l(a),a.forEach($)}else s.fragment&&s.fragment.c();n.intro&&ot(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),V(),J()}h(c)}class Ot{$destroy(){at(this,1),this.$destroy=v}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{v as A,Z as B,bt as C,Tt as D,xt as E,mt as F,Mt as G,q as H,yt as I,gt as J,pt as K,ht as L,dt as M,Ot as S,wt as a,nt as b,Et as c,kt as d,$t as e,ot as f,qt as g,$ as h,Gt as i,Ht as j,G as k,Nt as l,it as m,At as n,jt as o,St as p,S as q,lt as r,_t as s,Bt as t,vt as u,Lt as v,Dt as w,ut as x,at as y,Ct as z};