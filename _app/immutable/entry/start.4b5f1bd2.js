import{n as ve,s as ot,o as Me,t as Ee}from"../chunks/index.7183229c.js";function it(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function st(e){return e.split("%25").map(decodeURI).join("%25")}function lt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}const ct=["href","pathname","search","searchParams","toString","toJSON"];function ft(e,n){const i=new URL(e);for(const s of ct){let u=i[s];Object.defineProperty(i,s,{get(){return n(),u},enumerable:!0,configurable:!0})}return ut(i),i}function ut(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const dt="/__data.json";function pt(e){return e.replace(/\/$/,"")+dt}const Y=[];function Le(e,n=ve){let i;const s=new Set;function u(l){if(ot(e,l)&&(e=l,i)){const h=!Y.length;for(const p of s)p[1](),Y.push(p,e);if(h){for(let p=0;p<Y.length;p+=2)Y[p][0](Y[p+1]);Y.length=0}}}function d(l){u(l(e))}function w(l,h=ve){const p=[l,h];return s.add(p),s.size===1&&(i=n(u)||ve),l(e),()=>{s.delete(p),s.size===0&&i&&(i(),i=null)}}return{set:u,update:d,subscribe:w}}var We;const M=((We=globalThis.__sveltekit_1s1by5)==null?void 0:We.base)??"";var Xe;const ht=((Xe=globalThis.__sveltekit_1s1by5)==null?void 0:Xe.assets)??M,gt="1687896828252",Ze="sveltekit:snapshot",Qe="sveltekit:scroll",C="sveltekit:index",pe={tap:1,hover:2,viewport:3,eager:4,off:-1};function ze(e){let n=e.baseURI;if(!n){const i=e.getElementsByTagName("base");n=i.length?i[0].href:e.URL}return n}function te(){return{x:pageXOffset,y:pageYOffset}}function W(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ge={...pe,"":pe.hover};function et(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function He(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=et(e)}}function ke(e,n){let i;try{i=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,u=!i||!!s||de(i,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),d=(i==null?void 0:i.origin)===location.origin&&e.hasAttribute("download");return{url:i,external:u,target:s,download:d}}function ue(e){let n=null,i=null,s=null,u=null,d=null,w=null,l=e;for(;l&&l!==document.documentElement;)s===null&&(s=W(l,"preload-code")),u===null&&(u=W(l,"preload-data")),n===null&&(n=W(l,"keepfocus")),i===null&&(i=W(l,"noscroll")),d===null&&(d=W(l,"reload")),w===null&&(w=W(l,"replacestate")),l=et(l);return{preload_code:Ge[s??"off"],preload_data:Ge[u??"off"],keep_focus:n==="off"?!1:n===""?!0:null,noscroll:i==="off"?!1:i===""?!0:null,reload:d==="off"?!1:d===""?!0:null,replace_state:w==="off"?!1:w===""?!0:null}}function Be(e){const n=Le(e);let i=!0;function s(){i=!0,n.update(w=>w)}function u(w){i=!1,n.set(w)}function d(w){let l;return n.subscribe(h=>{(l===void 0||i&&h!==l)&&w(l=h)})}return{notify:s,set:u,subscribe:d}}function mt(){const{set:e,subscribe:n}=Le(!1);let i;async function s(){clearTimeout(i);try{const u=await fetch(`${ht}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!u.ok)return!1;const w=(await u.json()).version!==gt;return w&&(e(!0),clearTimeout(i)),w}catch{return!1}}return{subscribe:n,check:s}}function de(e,n){return e.origin!==location.origin||!e.pathname.startsWith(n)}function tt(e){try{return JSON.parse(sessionStorage[e])}catch{}}function Je(e,n){const i=JSON.stringify(n);try{sessionStorage[e]=i}catch{}}function _t(...e){let n=5381;for(const i of e)if(typeof i=="string"){let s=i.length;for(;s;)n=n*33^i.charCodeAt(--s)}else if(ArrayBuffer.isView(i)){const s=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let u=s.length;for(;u;)n=n*33^s[--u]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}const he=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&ae.delete(Ie(e)),he(e,n));const ae=new Map;function yt(e,n){const i=Ie(e,n),s=document.querySelector(i);if(s!=null&&s.textContent){const{body:u,...d}=JSON.parse(s.textContent),w=s.getAttribute("data-ttl");return w&&ae.set(i,{body:u,init:d,ttl:1e3*Number(w)}),Promise.resolve(new Response(u,d))}return he(e,n)}function wt(e,n,i){if(ae.size>0){const s=Ie(e,i),u=ae.get(s);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(i==null?void 0:i.cache))return new Response(u.body,u.init);ae.delete(s)}}return he(n,i)}function Ie(e,n){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const u=[];n.headers&&u.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&u.push(n.body),s+=`[data-hash="${_t(...u)}"]`}return s}const bt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function vt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${kt(e).map(s=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(u)return n.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(d)return n.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const w=s.split(/\[(.+?)\](?!\])/);return"/"+w.map((h,p)=>{if(p%2){if(h.startsWith("x+"))return Se(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return Se(String.fromCharCode(...h.slice(2).split("-").map(x=>parseInt(x,16))));const g=bt.exec(h);if(!g)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,j,O,S,P]=g;return n.push({name:S,matcher:P,optional:!!j,rest:!!O,chained:O?p===1&&w[0]==="":!1}),O?"(.*?)":j?"([^/]*)?":"([^/]+?)"}return Se(h)}).join("")}).join("")}/?$`),params:n}}function Et(e){return!/^\([^)]+\)$/.test(e)}function kt(e){return e.slice(1).split("/").filter(Et)}function St(e,n,i){const s={},u=e.slice(1);let d=0;for(let w=0;w<n.length;w+=1){const l=n[w],h=u[w-d];if(l.chained&&l.rest&&d){s[l.name]=u.slice(w-d,w+1).filter(p=>p).join("/"),d=0;continue}if(h===void 0){l.rest&&(s[l.name]="");continue}if(!l.matcher||i[l.matcher](h)){s[l.name]=h;const p=n[w+1],g=u[w+1];p&&!p.rest&&p.optional&&g&&(d=0);continue}if(l.optional&&l.chained){d++;continue}return}if(!d)return s}function Se(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Rt({nodes:e,server_loads:n,dictionary:i,matchers:s}){const u=new Set(n);return Object.entries(i).map(([l,[h,p,g]])=>{const{pattern:j,params:O}=vt(l),S={id:l,exec:P=>{const x=j.exec(P);if(x)return St(x,O,s)},errors:[1,...g||[]].map(P=>e[P]),layouts:[0,...p||[]].map(w),leaf:d(h)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function d(l){const h=l<0;return h&&(l=~l),[h,e[l]]}function w(l){return l===void 0?l:[u.has(l),e[l]]}}let ne=class{constructor(n,i){this.status=n,typeof i=="string"?this.body={message:i}:i?this.body=i:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}},Ke=class{constructor(n,i){this.status=n,this.location=i}};function At(e){e.client}const F={url:Be({}),page:Be({}),navigating:Le(null),updated:mt()};async function Lt(e){var n;for(const i in e)if(typeof((n=e[i])==null?void 0:n.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([s,u])=>[s,await u])));return e}const It=-1,Ut=-2,xt=-3,Ot=-4,Pt=-5,Tt=-6;function Nt(e,n){if(typeof e=="number")return u(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const i=e,s=Array(i.length);function u(d,w=!1){if(d===It)return;if(d===xt)return NaN;if(d===Ot)return 1/0;if(d===Pt)return-1/0;if(d===Tt)return-0;if(w)throw new Error("Invalid input");if(d in s)return s[d];const l=i[d];if(!l||typeof l!="object")s[d]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const h=l[0],p=n==null?void 0:n[h];if(p)return s[d]=p(u(l[1]));switch(h){case"Date":s[d]=new Date(l[1]);break;case"Set":const g=new Set;s[d]=g;for(let S=1;S<l.length;S+=1)g.add(u(l[S]));break;case"Map":const j=new Map;s[d]=j;for(let S=1;S<l.length;S+=2)j.set(u(l[S]),u(l[S+1]));break;case"RegExp":s[d]=new RegExp(l[1],l[2]);break;case"Object":s[d]=Object(l[1]);break;case"BigInt":s[d]=BigInt(l[1]);break;case"null":const O=Object.create(null);s[d]=O;for(let S=1;S<l.length;S+=2)O[l[S]]=u(l[S+1]);break;default:throw new Error(`Unknown type ${h}`)}}else{const h=new Array(l.length);s[d]=h;for(let p=0;p<l.length;p+=1){const g=l[p];g!==Ut&&(h[p]=u(g))}}else{const h={};s[d]=h;for(const p in l){const g=l[p];h[p]=u(g)}}return s[d]}return u(0)}const nt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...nt];const $t=new Set([...nt,"actions"]);[...$t];function jt(e){return e.filter(n=>n!=null)}const Dt="x-sveltekit-invalidated",B=tt(Qe)??{},ee=tt(Ze)??{};function Re(e){B[e]=te()}function qt(e,n){var Ce;const i=Rt(e),s=e.nodes[0],u=e.nodes[1];s(),u();const d=document.documentElement,w=[],l=[];let h=null;const p={before_navigate:[],after_navigate:[]};let g={branch:[],error:null,url:null},j=!1,O=!1,S=!0,P=!1,x=!1,J=!1,z=!1,V,T=(Ce=history.state)==null?void 0:Ce[C];T||(T=Date.now(),history.replaceState({...history.state,[C]:T},"",location.href));const ge=B[T];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let G,re,oe;async function Ue(){oe=oe||Promise.resolve(),await oe,oe=null;const t=new URL(location.href),a=Z(t,!0);h=null;const o=re={},r=a&&await ye(a);if(o===re&&r){if(r.type==="redirect")return ie(new URL(r.location,t).href,{},[t.pathname],o);V.$set(r.props)}}function xe(t){l.some(a=>a==null?void 0:a.snapshot)&&(ee[t]=l.map(a=>{var o;return(o=a==null?void 0:a.snapshot)==null?void 0:o.capture()}))}function Oe(t){var a;(a=ee[t])==null||a.forEach((o,r)=>{var f,c;(c=(f=l[r])==null?void 0:f.snapshot)==null||c.restore(o)})}function Pe(){Re(T),Je(Qe,B),xe(T),Je(Ze,ee)}async function ie(t,{noScroll:a=!1,replaceState:o=!1,keepFocus:r=!1,state:f={},invalidateAll:c=!1},m,_){return typeof t=="string"&&(t=new URL(t,ze(document))),fe({url:t,scroll:a?te():null,keepfocus:r,redirect_chain:m,details:{state:f,replaceState:o},nav_token:_,accepted:()=>{c&&(z=!0)},blocked:()=>{},type:"goto"})}async function Te(t){return h={id:t.id,promise:ye(t).then(a=>(a.type==="loaded"&&a.state.error&&(h=null),a))},h.promise}async function se(...t){const o=i.filter(r=>t.some(f=>r.exec(f))).map(r=>Promise.all([...r.layouts,r.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(o)}function Ne(t){var r;g=t.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),G=t.props.page,V=new e.root({target:n,props:{...t.props,stores:F,components:l},hydrate:!0}),Oe(T);const o={from:null,to:{params:g.params,route:{id:((r=g.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};p.after_navigate.forEach(f=>f(o)),O=!0}async function X({url:t,params:a,branch:o,status:r,error:f,route:c,form:m}){let _="never";for(const v of o)(v==null?void 0:v.slash)!==void 0&&(_=v.slash);t.pathname=it(t.pathname,_),t.search=t.search;const E={type:"loaded",state:{url:t,params:a,branch:o,error:f,route:c},props:{constructors:jt(o).map(v=>v.node.component)}};m!==void 0&&(E.props.form=m);let y={},R=!G,I=0;for(let v=0;v<Math.max(o.length,g.branch.length);v+=1){const b=o[v],N=g.branch[v];(b==null?void 0:b.data)!==(N==null?void 0:N.data)&&(R=!0),b&&(y={...y,...b.data},R&&(E.props[`data_${I}`]=y),I+=1)}return(!g.url||t.href!==g.url.href||g.error!==f||m!==void 0&&m!==G.form||R)&&(E.props.page={error:f,params:a,route:{id:(c==null?void 0:c.id)??null},status:r,url:new URL(t),form:m??null,data:R?y:G.data}),E}async function me({loader:t,parent:a,url:o,params:r,route:f,server_data_node:c}){var y,R,I;let m=null;const _={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await t();if((y=E.universal)!=null&&y.load){let U=function(...b){for(const N of b){const{href:D}=new URL(N,o);_.dependencies.add(D)}};const v={route:{get id(){return _.route=!0,f.id}},params:new Proxy(r,{get:(b,N)=>(_.params.add(N),b[N])}),data:(c==null?void 0:c.data)??null,url:ft(o,()=>{_.url=!0}),async fetch(b,N){let D;b instanceof Request?(D=b.url,N={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...N}):D=b;const q=new URL(D,o);return U(q.href),q.origin===o.origin&&(D=q.href.slice(o.origin.length)),O?wt(D,q.href,N):yt(D,N)},setHeaders:()=>{},depends:U,parent(){return _.parent=!0,a()}};m=await E.universal.load.call(null,v)??null,m=m?await Lt(m):null}return{node:E,loader:t,server:c,universal:(R=E.universal)!=null&&R.load?{type:"data",data:m,uses:_}:null,data:m??(c==null?void 0:c.data)??null,slash:((I=E.universal)==null?void 0:I.trailingSlash)??(c==null?void 0:c.slash)}}function $e(t,a,o,r,f){if(z)return!0;if(!r)return!1;if(r.parent&&t||r.route&&a||r.url&&o)return!0;for(const c of r.params)if(f[c]!==g.params[c])return!0;for(const c of r.dependencies)if(w.some(m=>m(new URL(c))))return!0;return!1}function _e(t,a){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?a??null:null}async function ye({id:t,invalidating:a,url:o,params:r,route:f}){if((h==null?void 0:h.id)===t)return h.promise;const{errors:c,layouts:m,leaf:_}=f,E=[...m,_];c.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const R=g.url?t!==g.url.pathname+g.url.search:!1,I=g.route?f.id!==g.route.id:!1;let U=!1;const v=E.map((k,L)=>{var H;const A=g.branch[L],$=!!(k!=null&&k[0])&&((A==null?void 0:A.loader)!==k[1]||$e(U,I,R,(H=A.server)==null?void 0:H.uses,r));return $&&(U=!0),$});if(v.some(Boolean)){try{y=await Ye(o,v)}catch(k){return le({status:k instanceof ne?k.status:500,error:await Q(k,{url:o,params:r,route:{id:f.id}}),url:o,route:f})}if(y.type==="redirect")return y}const b=y==null?void 0:y.nodes;let N=!1;const D=E.map(async(k,L)=>{var we;if(!k)return;const A=g.branch[L],$=b==null?void 0:b[L];if((!$||$.type==="skip")&&k[1]===(A==null?void 0:A.loader)&&!$e(N,I,R,(we=A.universal)==null?void 0:we.uses,r))return A;if(N=!0,($==null?void 0:$.type)==="error")throw $;return me({loader:k[1],url:o,params:r,route:f,parent:async()=>{var Fe;const Ve={};for(let be=0;be<L;be+=1)Object.assign(Ve,(Fe=await D[be])==null?void 0:Fe.data);return Ve},server_data_node:_e($===void 0&&k[0]?{type:"skip"}:$??null,k[0]?A==null?void 0:A.server:void 0)})});for(const k of D)k.catch(()=>{});const q=[];for(let k=0;k<E.length;k+=1)if(E[k])try{q.push(await D[k])}catch(L){if(L instanceof Ke)return{type:"redirect",location:L.location};let A=500,$;if(b!=null&&b.includes(L))A=L.status??A,$=L.error;else if(L instanceof ne)A=L.status,$=L.body;else{if(await F.updated.check())return await K(o);$=await Q(L,{params:r,url:o,route:{id:f.id}})}const H=await je(k,q,c);return H?await X({url:o,params:r,branch:q.slice(0,H.idx).concat(H.node),status:A,error:$,route:f}):await qe(o,{id:f.id},$,A)}else q.push(void 0);return await X({url:o,params:r,branch:q,status:200,error:null,route:f,form:a?void 0:null})}async function je(t,a,o){for(;t--;)if(o[t]){let r=t;for(;!a[r];)r-=1;try{return{idx:r+1,node:{node:await o[t](),loader:o[t],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:t,error:a,url:o,route:r}){const f={};let c=null;if(e.server_loads[0]===0)try{const y=await Ye(o,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;c=y.nodes[0]??null}catch{(o.origin!==location.origin||o.pathname!==location.pathname||j)&&await K(o)}const _=await me({loader:s,url:o,params:f,route:r,parent:()=>Promise.resolve({}),server_data_node:_e(c)}),E={node:await u(),loader:u,universal:null,server:null,data:null};return await X({url:o,params:f,branch:[_,E],status:t,error:a,route:null})}function Z(t,a){if(de(t,M))return;const o=ce(t);for(const r of i){const f=r.exec(o);if(f)return{id:t.pathname+t.search,invalidating:a,route:r,params:lt(f),url:t}}}function ce(t){return st(t.pathname.slice(M.length)||"/")}function De({url:t,type:a,intent:o,delta:r}){var _,E;let f=!1;const c={from:{params:g.params,route:{id:((_=g.route)==null?void 0:_.id)??null},url:g.url},to:{params:(o==null?void 0:o.params)??null,route:{id:((E=o==null?void 0:o.route)==null?void 0:E.id)??null},url:t},willUnload:!o,type:a};r!==void 0&&(c.delta=r);const m={...c,cancel:()=>{f=!0}};return x||p.before_navigate.forEach(y=>y(m)),f?null:c}async function fe({url:t,scroll:a,keepfocus:o,redirect_chain:r,details:f,type:c,delta:m,nav_token:_={},accepted:E,blocked:y}){var D,q,k;const R=Z(t,!1),I=De({url:t,type:c,delta:m,intent:R});if(!I){y();return}const U=T;E(),x=!0,O&&F.navigating.set(I),re=_;let v=R&&await ye(R);if(!v){if(de(t,M))return await K(t);v=await qe(t,{id:null},await Q(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(R==null?void 0:R.url)||t,re!==_)return!1;if(v.type==="redirect")if(r.length>10||r.includes(t.pathname))v=await le({status:500,error:await Q(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ie(new URL(v.location,t).href,{},[...r,t.pathname],_),!1;else((D=v.props.page)==null?void 0:D.status)>=400&&await F.updated.check()&&await K(t);if(w.length=0,z=!1,P=!0,Re(U),xe(U),(q=v.props.page)!=null&&q.url&&v.props.page.url.pathname!==t.pathname&&(t.pathname=(k=v.props.page)==null?void 0:k.url.pathname),f){const L=f.replaceState?0:1;if(f.state[C]=T+=L,history[f.replaceState?"replaceState":"pushState"](f.state,"",t),!f.replaceState){let A=T+1;for(;ee[A]||B[A];)delete ee[A],delete B[A],A+=1}}h=null,O?(g=v.state,v.props.page&&(v.props.page.url=t),V.$set(v.props)):Ne(v);const{activeElement:b}=document;if(await Ee(),S){const L=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));a?scrollTo(a.x,a.y):L?L.scrollIntoView():scrollTo(0,0)}const N=document.activeElement!==b&&document.activeElement!==document.body;!o&&!N&&await Ae(),S=!0,v.props.page&&(G=v.props.page),x=!1,p.after_navigate.forEach(L=>L(I)),F.navigating.set(null),P=!1}async function qe(t,a,o,r){return t.origin===location.origin&&t.pathname===location.pathname&&!j?await le({status:r,error:o,url:t,route:a}):await K(t)}function K(t){return location.href=t.href,new Promise(()=>{})}function rt(){let t;d.addEventListener("mousemove",c=>{const m=c.target;clearTimeout(t),t=setTimeout(()=>{r(m,2)},20)});function a(c){r(c.composedPath()[0],1)}d.addEventListener("mousedown",a),d.addEventListener("touchstart",a,{passive:!0});const o=new IntersectionObserver(c=>{for(const m of c)m.isIntersecting&&(se(ce(new URL(m.target.href))),o.unobserve(m.target))},{threshold:0});function r(c,m){const _=He(c,d);if(!_)return;const{url:E,external:y,download:R}=ke(_,M);if(y||R)return;const I=ue(_);if(!I.reload)if(m<=I.preload_data){const U=Z(E,!1);U&&Te(U)}else m<=I.preload_code&&se(ce(E))}function f(){o.disconnect();for(const c of d.querySelectorAll("a")){const{url:m,external:_,download:E}=ke(c,M);if(_||E)continue;const y=ue(c);y.reload||(y.preload_code===pe.viewport&&o.observe(c),y.preload_code===pe.eager&&se(ce(m)))}}p.after_navigate.push(f),f()}function Q(t,a){return t instanceof ne?t.body:e.hooks.handleError({error:t,event:a})??{message:a.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{Me(()=>(p.after_navigate.push(t),()=>{const a=p.after_navigate.indexOf(t);p.after_navigate.splice(a,1)}))},before_navigate:t=>{Me(()=>(p.before_navigate.push(t),()=>{const a=p.before_navigate.indexOf(t);p.before_navigate.splice(a,1)}))},disable_scroll_handling:()=>{(P||!O)&&(S=!1)},goto:(t,a={})=>ie(t,a,[]),invalidate:t=>{if(typeof t=="function")w.push(t);else{const{href:a}=new URL(t,location.href);w.push(o=>o.href===a)}return Ue()},invalidate_all:()=>(z=!0,Ue()),preload_data:async t=>{const a=new URL(t,ze(document)),o=Z(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);await Te(o)},preload_code:se,apply_action:async t=>{if(t.type==="error"){const a=new URL(location.href),{branch:o,route:r}=g;if(!r)return;const f=await je(g.branch.length,o,r.errors);if(f){const c=await X({url:a,params:g.params,branch:o.slice(0,f.idx).concat(f.node),status:t.status??500,error:t.error,route:r});g=c.state,V.$set(c.props),Ee().then(Ae)}}else t.type==="redirect"?ie(t.location,{invalidateAll:!0},[]):(V.$set({form:null,page:{...G,form:t.data,status:t.status}}),await Ee(),V.$set({form:t.data}),t.type==="success"&&Ae())},_start_router:()=>{var t;history.scrollRestoration="manual",addEventListener("beforeunload",a=>{var r;let o=!1;if(Pe(),!x){const f={from:{params:g.params,route:{id:((r=g.route)==null?void 0:r.id)??null},url:g.url},to:null,willUnload:!0,type:"leave",cancel:()=>o=!0};p.before_navigate.forEach(c=>c(f))}o?(a.preventDefault(),a.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Pe()}),(t=navigator.connection)!=null&&t.saveData||rt(),d.addEventListener("click",a=>{if(a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const o=He(a.composedPath()[0],d);if(!o)return;const{url:r,external:f,target:c,download:m}=ke(o,M);if(!r)return;if(c==="_parent"||c==="_top"){if(window.parent!==window)return}else if(c&&c!=="_self")return;const _=ue(o);if(!(o instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||m)return;if(f||_.reload){De({url:r,type:"link"})?x=!0:a.preventDefault();return}const[y,R]=r.href.split("#");if(R!==void 0&&y===location.href.split("#")[0]){if(J=!0,Re(T),g.url=r,F.page.set({...G,url:r}),F.page.notify(),!_.replace_state)return;J=!1,a.preventDefault()}fe({url:r,scroll:_.noscroll?te():null,keepfocus:_.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:_.replace_state??r.href===location.href},accepted:()=>a.preventDefault(),blocked:()=>a.preventDefault(),type:"link"})}),d.addEventListener("submit",a=>{if(a.defaultPrevented)return;const o=HTMLFormElement.prototype.cloneNode.call(a.target),r=a.submitter;if(((r==null?void 0:r.formMethod)||o.method)!=="get")return;const c=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||o.action);if(de(c,M))return;const m=a.target,{keep_focus:_,noscroll:E,reload:y,replace_state:R}=ue(m);if(y)return;a.preventDefault(),a.stopPropagation();const I=new FormData(m),U=r==null?void 0:r.getAttribute("name");U&&I.append(U,(r==null?void 0:r.getAttribute("value"))??""),c.search=new URLSearchParams(I).toString(),fe({url:c,scroll:E?te():null,keepfocus:_??!1,redirect_chain:[],details:{state:{},replaceState:R??c.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async a=>{var o;if((o=a.state)!=null&&o[C]){if(a.state[C]===T)return;const r=B[a.state[C]];if(g.url.href.split("#")[0]===location.href.split("#")[0]){B[T]=te(),T=a.state[C],scrollTo(r.x,r.y);return}const f=a.state[C]-T;let c=!1;await fe({url:new URL(location.href),scroll:r,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=a.state[C]},blocked:()=>{history.go(-f),c=!0},type:"popstate",delta:f}),c||Oe(T)}}),addEventListener("hashchange",()=>{J&&(J=!1,history.replaceState({...history.state,[C]:++T},"",location.href))});for(const a of document.querySelectorAll("link"))a.rel==="icon"&&(a.href=a.href);addEventListener("pageshow",a=>{a.persisted&&F.navigating.set(null)})},_hydrate:async({status:t=200,error:a,node_ids:o,params:r,route:f,data:c,form:m})=>{j=!0;const _=new URL(location.href);({params:r={},route:f={id:null}}=Z(_,!1)||{});let E;try{const y=o.map(async(R,I)=>{const U=c[I];return U!=null&&U.uses&&(U.uses=at(U.uses)),me({loader:e.nodes[R],url:_,params:r,route:f,parent:async()=>{const v={};for(let b=0;b<I;b+=1)Object.assign(v,(await y[b]).data);return v},server_data_node:_e(U)})});E=await X({url:_,params:r,branch:await Promise.all(y),status:t,error:a,form:m,route:i.find(({id:R})=>R===f.id)??null})}catch(y){if(y instanceof Ke){await K(new URL(y.location,location.href));return}E=await le({status:y instanceof ne?y.status:500,error:await Q(y,{url:_,params:r,route:f}),url:_,route:f})}Ne(E)}}}async function Ye(e,n){const i=new URL(e);i.pathname=pt(e.pathname),i.searchParams.append(Dt,n.map(u=>u?"1":"0").join(""));const s=await he(i.href);if(!s.ok)throw new ne(s.status,await s.json());return new Promise(async u=>{var g;const d=new Map,w=s.body.getReader(),l=new TextDecoder;function h(j){return Nt(j,{Promise:O=>new Promise((S,P)=>{d.set(O,{fulfil:S,reject:P})})})}let p="";for(;;){const{done:j,value:O}=await w.read();if(j&&!p)break;for(p+=!O&&p?`
`:l.decode(O);;){const S=p.indexOf(`
`);if(S===-1)break;const P=JSON.parse(p.slice(0,S));if(p=p.slice(S+1),P.type==="redirect")return u(P);if(P.type==="data")(g=P.nodes)==null||g.forEach(x=>{(x==null?void 0:x.type)==="data"&&(x.uses=at(x.uses),x.data=h(x.data))}),u(P);else if(P.type==="chunk"){const{id:x,data:J,error:z}=P,V=d.get(x);d.delete(x),z?V.reject(h(z)):V.fulfil(h(J))}}}})}function at(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function Ae(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,i=n.getAttribute("tabindex");return n.tabIndex=-1,n.focus({preventScroll:!0}),i!==null?n.setAttribute("tabindex",i):n.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var u;s((u=getSelection())==null?void 0:u.removeAllRanges())})})}}async function Mt(e,n,i){const s=qt(e,n);At({client:s}),i?await s._hydrate(i):s.goto(location.href,{replaceState:!0}),s._start_router()}export{Mt as start};
