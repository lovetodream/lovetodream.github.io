function E(){}const lt=t=>t;function ct(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function G(){return Object.create(null)}function $(t){t.forEach(W)}function H(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Rt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function ut(t){return Object.keys(t).length===0}function zt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?ct(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Ht(t,e,n,i,r,u){if(r){const s=Q(e,n,i,u);t.p(s,r)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const U=typeof window<"u";let at=U?()=>window.performance.now():()=>Date.now(),F=U?t=>requestAnimationFrame(t):E;const x=new Set;function V(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&F(V)}function ft(t){let e;return x.size===0&&F(V),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let O=!1;function _t(){O=!0}function dt(){O=!1}function ht(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const _=e[c];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,_=(r>0&&e[n[r]].claim_order<=c?r+1:ht(1,r,h=>e[n[h]].claim_order,c))-1;i[l]=n[_]+1;const a=_+1;n[a]=l,r=Math.max(a,r)}const u=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(u.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<u.length&&s[l].claim_order>=u[c].claim_order;)c++;const _=c<u.length?u[c]:null;t.insertBefore(s[l],_)}}function pt(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=Z("style");return gt(X(t),e),e.sheet}function gt(t,e){return pt(t.head||t,e),e.sheet}function xt(t,e){if(O){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){O&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Y(t){t.parentNode&&t.parentNode.removeChild(t)}function Gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Z(t){return document.createElement(t)}function $t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function It(){return L(" ")}function Jt(){return L("")}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function bt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,r=!1){bt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function et(t,e,n,i){return tt(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Wt(t,e,n){return et(t,e,n,Z)}function Qt(t,e,n){return et(t,e,n,$t)}function vt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>L(e),!0)}function Ut(t){return vt(t," ")}function Vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Xt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Yt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Zt(t,e){return new t(e)}const D=new Map;let M=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:yt(e),rules:{}};return D.set(t,n),n}function I(t,e,n,i,r,u,s,o=0){const l=16.666/i;let c=`{
`;for(let y=0;y<=1;y+=l){const g=e+(n-e)*u(y);c+=y*100+`%{${s(g,1-g)}}
`}const _=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Nt(_)}_${o}`,h=X(t),{stylesheet:f,rules:d}=D.get(h)||At(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function St(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||Ct())}function Ct(){F(()=>{M||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Y(e)}),D.clear())})}let N;function v(t){N=t}function nt(){if(!N)throw new Error("Function called outside component initialization");return N}function te(t){nt().$$.on_mount.push(t)}function ee(t){nt().$$.after_update.push(t)}const b=[],J=[],j=[],K=[],it=Promise.resolve();let B=!1;function rt(){B||(B=!0,it.then(ot))}function ne(){return rt(),it}function T(t){j.push(t)}const R=new Set;let C=0;function ot(){const t=N;do{for(;C<b.length;){const e=b[C];C++,v(e),jt(e.$$)}for(v(null),b.length=0,C=0;J.length;)J.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];R.has(n)||(R.add(n),n())}j.length=0}while(b.length);for(;K.length;)K.pop()();B=!1,R.clear(),v(t)}function jt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let w;function kt(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function z(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const k=new Set;let p;function ie(){p={r:0,c:[],p}}function re(){p.r||$(p.c),p=p.p}function Dt(t,e){t&&t.i&&(k.delete(t),t.i(e))}function oe(t,e,n,i){if(t&&t.o){if(k.has(t))return;k.add(t),p.c.push(()=>{k.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Mt={duration:0};function se(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),s=i?0:1,o=null,l=null,c=null;function _(){c&&St(t,c)}function a(f,d){const m=f.b-s;return d*=Math.abs(m),{a:s,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=lt,tick:g=E,css:q}=u||Mt,P={start:at()+d,b:f};f||(P.group=p,p.r+=1),o||l?l=P:(q&&(_(),c=I(t,s,f,m,d,y,q)),f&&g(0,1),o=a(P,m),T(()=>z(t,f,"start")),ft(A=>{if(l&&A>l.start&&(o=a(l,m),l=null,z(t,o.b,"start"),q&&(_(),c=I(t,s,o.b,o.duration,0,y,u.css))),o){if(A>=o.end)g(s=o.b,1-s),z(t,o.b,"end"),l||(o.b?_():--o.group.r||$(o.group.c)),o=null;else if(A>=o.start){const st=A-o.start;s=o.a+o.d*y(st/o.duration),g(s,1-s)}}return!!(o||l)}))}return{run(f){H(u)?kt().then(()=>{u=u(r),h(f)}):h(f)},end(){_(),o=l=null}}}function le(t){t&&t.c()}function ce(t,e){t&&t.l(e)}function Tt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||T(()=>{const s=t.$$.on_mount.map(W).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...s):$(s),t.$$.on_mount=[]}),u.forEach(T)}function Ot(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(b.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,i,r,u,s,o=[-1]){const l=N;v(t);const c=t.$$={fragment:null,ctx:[],props:u,update:E,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:G(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let _=!1;if(c.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return c.ctx&&r(c.ctx[a],c.ctx[a]=d)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](d),_&&qt(t,a)),h}):[],c.update(),_=!0,$(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){_t();const a=wt(e.target);c.fragment&&c.fragment.l(a),a.forEach(Y)}else c.fragment&&c.fragment.c();e.intro&&Dt(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),dt(),ot()}v(l)}class ae{$destroy(){Ot(this,1),this.$destroy=E}$on(e,n){if(!H(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ot as A,ne as B,zt as C,xt as D,Ht as E,Ft as F,Bt as G,$t as H,Qt as I,lt as J,Yt as K,Rt as L,T as M,se as N,Gt as O,ae as S,It as a,Lt as b,Ut as c,re as d,Jt as e,Dt as f,ie as g,Y as h,ue as i,ee as j,Z as k,Wt as l,wt as m,E as n,te as o,Kt as p,Xt as q,L as r,Pt as s,oe as t,vt as u,Vt as v,Zt as w,le as x,ce as y,Tt as z};