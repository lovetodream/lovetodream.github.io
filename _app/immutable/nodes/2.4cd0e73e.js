import{i as ne,s as ce,e as K,f as te}from"../chunks/scheduler.017465d1.js";import{S as ie,i as de,s as H,g,m as V,r as ue,e as ae,z as fe,f as h,c as I,h as v,j as E,x as X,n as z,u as pe,k as s,a as U,y as l,v as he,d as G,t as Q,b as be,w as me,A as N,B as ge,o as W,p as ve}from"../chunks/index.e497354f.js";import{S as _e}from"../chunks/Socials.b9a30705.js";function re(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const F={cmsUrl:"https://cms.nxtaws.com",cmsApiKey:"06639fa99d88cb74f45b74962fc3f126523378bc14cefc2df0868a6da4203a2473b1313920ad0cee9b33d4d9b364edd201beb4528e780bc9bafc607cbe159dfc21fa316c477089bb8e37d2fa089a760f9151becad7ebf12a2b9366429efec444b8f28e2b1ab9f8aa66d264cd61dc26f6da908a895014988ab06bfd20ea4fd9fb"},ye=!0,ke=async()=>({projects:(await(await fetch(`${F.cmsUrl}/api/projects?populate=*&sort[0]=id:desc`,{headers:{Authorization:`Bearer ${F.cmsApiKey}`}})).json()).data}),Ce=Object.freeze(Object.defineProperty({__proto__:null,load:ke,prerender:ye},Symbol.toStringTag,{value:"Module"})),we=""+new URL("../assets/codeedit.d5a51a64.png",import.meta.url).href;function R(n,{delay:t=0,duration:a=400,easing:e=ne}={}){const c=+getComputedStyle(n).opacity;return{delay:t,duration:a,easing:e,css:C=>`opacity: ${C*c}`}}function se(n,t,a){const e=n.slice();return e[1]=t[a],e}function le(n){let t,a,e,c,C='<h2 class="text-xl tracking-wide font-medium">Featured Projects</h2> <p class="text-lg tracking-wide font-light">A collection of some side projects that have shipped recently.</p>',A,b,w,x,p,_=re(n[0].projects),i=[];for(let r=0;r<_.length;r+=1)i[r]=oe(se(n,_,r));return{c(){t=g("main"),a=g("section"),e=g("div"),c=g("div"),c.innerHTML=C,A=H(),b=g("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){t=v(r,"MAIN",{});var u=E(t);a=v(u,"SECTION",{});var o=E(a);e=v(o,"DIV",{class:!0});var f=E(e);c=v(f,"DIV",{class:!0,["data-svelte-h"]:!0}),X(c)!=="svelte-1ikbd4e"&&(c.innerHTML=C),A=I(f),b=v(f,"DIV",{class:!0});var j=E(b);for(let M=0;M<i.length;M+=1)i[M].l(j);j.forEach(h),f.forEach(h),o.forEach(h),u.forEach(h),this.h()},h(){s(c,"class","space-y-2"),s(b,"class","grid md:grid-cols-2 gap-8"),s(e,"class","container px-10 mx-auto max-w-screen-lg pb-24 space-y-8")},m(r,u){U(r,t,u),l(t,a),l(a,e),l(e,c),l(e,A),l(e,b);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(b,null);p=!0},p(r,u){if(u&1){_=re(r[0].projects);let o;for(o=0;o<_.length;o+=1){const f=se(r,_,o);i[o]?i[o].p(f,u):(i[o]=oe(f),i[o].c(),i[o].m(b,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=_.length}},i(r){p||(r&&te(()=>{p&&(w||(w=N(a,R,{},!0)),w.run(1))}),r&&te(()=>{p&&(x||(x=N(t,R,{},!0)),x.run(1))}),p=!0)},o(r){r&&(w||(w=N(a,R,{},!1)),w.run(0)),r&&(x||(x=N(t,R,{},!1)),x.run(0)),p=!1},d(r){r&&h(t),ge(i,r),r&&w&&w.end(),r&&x&&x.end()}}}function oe(n){let t,a,e,c,C,A,b=n[1].attributes.name+"",w,x,p,_=n[1].attributes.summary+"",i,r,u,o=n[1].attributes.linkLabel+"",f,j,M,L,D;return{c(){t=g("a"),a=g("article"),e=g("img"),C=H(),A=g("h3"),w=V(b),x=H(),p=g("p"),i=V(_),r=H(),u=g("p"),f=V(o),j=V(" →"),M=H(),this.h()},l(k){t=v(k,"A",{href:!0,class:!0});var y=E(t);a=v(y,"ARTICLE",{class:!0});var S=E(a);e=v(S,"IMG",{src:!0,alt:!0,loading:!0,class:!0}),C=I(S),A=v(S,"H3",{class:!0});var T=E(A);w=z(T,b),T.forEach(h),x=I(S),p=v(S,"P",{class:!0});var P=E(p);i=z(P,_),P.forEach(h),r=I(S),u=v(S,"P",{class:!0});var d=E(u);f=z(d,o),j=z(d," →"),d.forEach(h),S.forEach(h),M=I(y),y.forEach(h),this.h()},h(){K(e.src,c=F.cmsUrl+n[1].attributes.appIcon.data.attributes.formats.thumbnail.url)||s(e,"src",c),s(e,"alt","Thumbnail"),s(e,"loading","lazy"),s(e,"class","w-auto h-24 mb-6 group-hover:scale-[1.15] transition-transform duration-700 ease-in-out rounded-3xl shadow-xl"),s(A,"class","text-lg font-semibold tracking-wide mb-[4px]"),s(p,"class","mb-[2px]"),s(u,"class","group-hover:opacity-90 link-label svelte-1m6lsup"),s(a,"class","flex justify-center items-center text-center flex-col"),s(t,"href",L=n[1].attributes.linkDestination),s(t,"class",D="group project "+n[1].attributes.thumbnailClasses+" svelte-1m6lsup")},m(k,y){U(k,t,y),l(t,a),l(a,e),l(a,C),l(a,A),l(A,w),l(a,x),l(a,p),l(p,i),l(a,r),l(a,u),l(u,f),l(u,j),l(t,M)},p(k,y){y&1&&!K(e.src,c=F.cmsUrl+k[1].attributes.appIcon.data.attributes.formats.thumbnail.url)&&s(e,"src",c),y&1&&b!==(b=k[1].attributes.name+"")&&W(w,b),y&1&&_!==(_=k[1].attributes.summary+"")&&W(i,_),y&1&&o!==(o=k[1].attributes.linkLabel+"")&&W(f,o),y&1&&L!==(L=k[1].attributes.linkDestination)&&s(t,"href",L),y&1&&D!==(D="group project "+k[1].attributes.thumbnailClasses+" svelte-1m6lsup")&&s(t,"class",D)},d(k){k&&h(t)}}}function xe(n){var Y;let t,a,e,c,C,A,b,w='Timo is a <a href="https://www.apple.com/swift/" target="_blank" rel="noreferrer" class="mx-2 text-orange-600 hover:text-orange-700 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="inline-block h-8 mb-1"><path fill="currentColor" fill-rule="evenodd" d="M448 156.09c0-4.51-.08-9-.2-13.52a196.31 196.31 0 0 0-2.58-29.42 99.62 99.62 0 0 0-9.22-28A94.08 94.08 0 0 0 394.84 44a99.17 99.17 0 0 0-28-9.22 195 195 0 0 0-29.43-2.59c-4.51-.12-9-.17-13.52-.2H124.14c-4.51 0-9 .08-13.52.2-2.45.07-4.91.15-7.37.27a171.68 171.68 0 0 0-22.06 2.32 103.06 103.06 0 0 0-21.21 6.1q-3.46 1.45-6.81 3.12a94.66 94.66 0 0 0-18.39 12.32c-1.88 1.61-3.69 3.28-5.43 5A93.86 93.86 0 0 0 12 85.17a99.45 99.45 0 0 0-9.22 28 196.31 196.31 0 0 0-2.54 29.4c-.13 4.51-.18 9-.21 13.52v199.83c0 4.51.08 9 .21 13.51a196.08 196.08 0 0 0 2.58 29.42 99.3 99.3 0 0 0 9.22 28A94.31 94.31 0 0 0 53.17 468a99.47 99.47 0 0 0 28 9.21 195 195 0 0 0 29.43 2.59c4.5.12 9 .17 13.52.2H323.91c4.51 0 9-.08 13.52-.2a196.59 196.59 0 0 0 29.44-2.59 99.57 99.57 0 0 0 28-9.21A94.22 94.22 0 0 0 436 426.84a99.3 99.3 0 0 0 9.22-28 194.79 194.79 0 0 0 2.59-29.42c.12-4.5.17-9 .2-13.51V172.14c-.01-5.35-.01-10.7-.01-16.05zm-69.88 241c-20-38.93-57.23-29.27-76.31-19.47-1.72 1-3.48 2-5.25 3l-.42.25c-39.5 21-92.53 22.54-145.85-.38A234.64 234.64 0 0 1 45 290.12a230.63 230.63 0 0 0 39.17 23.37c56.36 26.4 113 24.49 153 0-57-43.85-104.6-101-141.09-147.22a197.09 197.09 0 0 1-18.78-25.9c43.7 40 112.7 90.22 137.48 104.12-52.57-55.49-98.89-123.94-96.72-121.74 82.79 83.42 159.18 130.59 159.18 130.59 2.88 1.58 5 2.85 6.73 4a127.44 127.44 0 0 0 4.16-12.47c13.22-48.33-1.66-103.58-35.31-149.2C329.61 141.75 375 229.34 356.4 303.42c-.44 1.73-.95 3.4-1.44 5.09 38.52 47.4 28.04 98.17 23.13 88.59z"></path></svg></a> Swift developer.',x,p,_,i=`He carefully crafts apps for
				<a href="https://www.apple.com/ios" target="_blank" rel="noreferrer" class="text-red-600 font-medium bg-red-50 hover:bg-red-100 px-2 py-1 rounded-xl transition-colors dark:bg-red-800 dark:bg-opacity-20 dark:hover:bg-red-800 dark:hover:bg-opacity-30">iOS</a>,
				<a href="https://www.apple.com/macos" target="_blank" rel="noreferrer" class="text-blue-600 font-medium bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-xl transition-colors dark:bg-blue-800 dark:bg-opacity-20 dark:hover:bg-blue-800 dark:hover:bg-opacity-30">macOS</a>,
				<a href="https://www.apple.com/tvos" target="_blank" rel="noreferrer" class="text-gray-600 font-medium bg-gray-50 hover:bg-gray-100 px-2 py-1 rounded-xl transition-colors dark:bg-gray-100 dark:bg-opacity-10 dark:hover:bg-gray-100 dark:hover:bg-opacity-20 dark:text-gray-200">tvOS</a>
				and
				<a href="https://www.apple.com/watchos" target="_blank" rel="noreferrer" class="text-cyan-600 font-medium bg-cyan-50 hover:bg-cyan-100 px-2 py-1 rounded-xl transition-colors dark:bg-cyan-800 dark:bg-opacity-20 dark:hover:bg-cyan-800 dark:hover:bg-opacity-30">watchOS</a>. He even uses Swift on the Server with
				<a href="https://vapor.codes" target="_blank" rel="noreferrer" class="text-purple-500 font-medium bg-purple-50 hover:bg-purple-100 px-2 py-1 rounded-xl transition-colors dark:bg-purple-800 dark:bg-opacity-20 dark:hover:bg-purple-800 dark:hover:bg-opacity-30">Vapor</a>.`,r,u,o,f,j,M,L,D,k,y,S,T,P;y=new _e({});let d=((Y=n[0].projects)==null?void 0:Y.length)>0&&le(n);return{c(){t=H(),a=g("header"),e=g("div"),c=g("img"),A=H(),b=g("h1"),b.innerHTML=w,x=H(),p=g("div"),_=g("p"),_.innerHTML=i,r=H(),u=g("p"),o=V(`He's also sponsoring and contributing to Open Source Projects including
				`),f=g("a"),j=g("img"),L=V(" CodeEdit."),D=H(),k=g("div"),ue(y.$$.fragment),S=H(),d&&d.c(),T=ae(),this.h()},l(m){fe("svelte-1r071g0",document.head).forEach(h),t=I(m),a=v(m,"HEADER",{class:!0});var q=E(a);e=v(q,"DIV",{class:!0});var O=E(e);c=v(O,"IMG",{src:!0,alt:!0,class:!0}),A=I(O),b=v(O,"H1",{class:!0,["data-svelte-h"]:!0}),X(b)!=="svelte-1vplnae"&&(b.innerHTML=w),x=I(O),p=v(O,"DIV",{class:!0});var B=E(p);_=v(B,"P",{class:!0,["data-svelte-h"]:!0}),X(_)!=="svelte-1xgr3tr"&&(_.innerHTML=i),r=I(B),u=v(B,"P",{class:!0});var Z=E(u);o=z(Z,`He's also sponsoring and contributing to Open Source Projects including
				`),f=v(Z,"A",{href:!0,target:!0,rel:!0,class:!0});var J=E(f);j=v(J,"IMG",{src:!0,alt:!0,class:!0}),L=z(J," CodeEdit."),J.forEach(h),Z.forEach(h),B.forEach(h),D=I(O),k=v(O,"DIV",{class:!0});var ee=E(k);pe(y.$$.fragment,ee),ee.forEach(h),O.forEach(h),q.forEach(h),S=I(m),d&&d.l(m),T=ae(),this.h()},h(){document.title="Timo Zacherl",K(c.src,C="https://avatars.githubusercontent.com/u/38291523?v=4")||s(c,"src",C),s(c,"alt","Avatar"),s(c,"class","rounded-full w-24 h-24 ring-1 ring-gray-200 dark:ring-gray-800 shadow-md"),s(b,"class","text-3xl font-bold tracking-wide"),s(_,"class","text-xl font-light tracking-wide leading-relaxed"),K(j.src,M=we)||s(j,"src",M),s(j,"alt",""),s(j,"class","inline-block h-6 mb-1"),s(f,"href","https://github.com/CodeEditApp/CodeEdit"),s(f,"target","_blank"),s(f,"rel","noreferrer"),s(f,"class","mx-1 border-b border-dashed border-black border-opacity-40 hover:border-opacity-80 font-medium dark:hover:border-gray-200 transition-colors"),s(u,"class","text-xl font-light tracking-wide"),s(p,"class","space-y-6"),s(k,"class","pt-2"),s(e,"class","container px-10 mx-auto max-w-screen-lg py-24 space-y-8"),s(a,"class","space-y-8")},m(m,$){U(m,t,$),U(m,a,$),l(a,e),l(e,c),l(e,A),l(e,b),l(e,x),l(e,p),l(p,_),l(p,r),l(p,u),l(u,o),l(u,f),l(f,j),l(f,L),l(e,D),l(e,k),he(y,k,null),U(m,S,$),d&&d.m(m,$),U(m,T,$),P=!0},p(m,[$]){var q;((q=m[0].projects)==null?void 0:q.length)>0?d?(d.p(m,$),$&1&&G(d,1)):(d=le(m),d.c(),G(d,1),d.m(T.parentNode,T)):d&&(ve(),Q(d,1,1,()=>{d=null}),be())},i(m){P||(G(y.$$.fragment,m),G(d),P=!0)},o(m){Q(y.$$.fragment,m),Q(d),P=!1},d(m){m&&(h(t),h(a),h(S),h(T)),me(y),d&&d.d(m)}}}function Ee(n,t,a){let{data:e}=t;return n.$$set=c=>{"data"in c&&a(0,e=c.data)},[e]}class He extends ie{constructor(t){super(),de(this,t,Ee,xe,ce,{data:0})}}export{He as component,Ce as universal};