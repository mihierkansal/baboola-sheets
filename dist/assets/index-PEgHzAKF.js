(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Oe=(e,t)=>e===t,se=Symbol("solid-proxy"),Ne=typeof Proxy=="function",Le=Symbol("solid-track"),Y={equals:Oe};let je=Se;const M=1,J=2,pe={owned:null,cleanups:null,context:null,owner:null};var A=null;let le=null,Ie=null,C=null,v=null,D=null,z=0;function Q(e,t){const n=C,l=A,r=e.length===0,s=t===void 0?l:t,o=r?pe:{owned:null,cleanups:null,context:s?s.context:null,owner:s},i=r?e:()=>e(()=>U(()=>G(o)));A=o,C=null;try{return X(i,!0)}finally{C=n,A=l}}function O(e,t){t=t?Object.assign({},Y,t):Y;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},l=r=>(typeof r=="function"&&(r=r(n.value)),xe(n,r));return[we.bind(n),l]}function I(e,t,n){const l=$e(e,t,!1,M);ee(l)}function j(e,t,n){n=n?Object.assign({},Y,n):Y;const l=$e(e,t,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=n.equals||void 0,ee(l),we.bind(l)}function U(e){if(C===null)return e();const t=C;C=null;try{return e()}finally{C=t}}function Re(e){return A===null||(A.cleanups===null?A.cleanups=[e]:A.cleanups.push(e)),e}function we(){if(this.sources&&this.state)if(this.state===M)ee(this);else{const e=v;v=null,X(()=>Z(this),!1),v=e}if(C){const e=this.observers?this.observers.length:0;C.sources?(C.sources.push(this),C.sourceSlots.push(e)):(C.sources=[this],C.sourceSlots=[e]),this.observers?(this.observers.push(C),this.observerSlots.push(C.sources.length-1)):(this.observers=[C],this.observerSlots=[C.sources.length-1])}return this.value}function xe(e,t,n){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&X(()=>{for(let r=0;r<e.observers.length;r+=1){const s=e.observers[r],o=le&&le.running;o&&le.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?v.push(s):D.push(s),s.observers&&ke(s)),o||(s.state=M)}if(v.length>1e6)throw v=[],new Error},!1)),t}function ee(e){if(!e.fn)return;G(e);const t=z;Be(e,e.value,t)}function Be(e,t,n){let l;const r=A,s=C;C=A=e;try{l=e.fn(t)}catch(o){return e.pure&&(e.state=M,e.owned&&e.owned.forEach(G),e.owned=null),e.updatedAt=n+1,Ae(o)}finally{C=s,A=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?xe(e,l):e.value=l,e.updatedAt=n)}function $e(e,t,n,l=M,r){const s={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:A,context:A?A.context:null,pure:n};return A===null||A!==pe&&(A.owned?A.owned.push(s):A.owned=[s]),s}function Ce(e){if(e.state===0)return;if(e.state===J)return Z(e);if(e.suspense&&U(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<z);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===M)ee(e);else if(e.state===J){const l=v;v=null,X(()=>Z(e,t[0]),!1),v=l}}function X(e,t){if(v)return e();let n=!1;t||(v=[]),D?n=!0:D=[],z++;try{const l=e();return De(n),l}catch(l){n||(D=null),v=null,Ae(l)}}function De(e){if(v&&(Se(v),v=null),e)return;const t=D;D=null,t.length&&X(()=>je(t),!1)}function Se(e){for(let t=0;t<e.length;t++)Ce(e[t])}function Z(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const l=e.sources[n];if(l.sources){const r=l.state;r===M?l!==t&&(!l.updatedAt||l.updatedAt<z)&&Ce(l):r===J&&Z(l,t)}}}function ke(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=J,n.pure?v.push(n):D.push(n),n.observers&&ke(n))}}function G(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),l=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const s=r.pop(),o=n.observerSlots.pop();l<r.length&&(s.sourceSlots[o]=l,r[l]=s,n.observerSlots[l]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)G(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)G(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ue(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ae(e,t=A){throw Ue(e)}const Me=Symbol("fallback");function ae(e){for(let t=0;t<e.length;t++)e[t]()}function Ve(e,t,n={}){let l=[],r=[],s=[],o=0,i=t.length>1?[]:null;return Re(()=>ae(s)),()=>{let a=e()||[],b=a.length,h,u;return a[Le],U(()=>{let S,$,P,R,d,g,c,f,y;if(b===0)o!==0&&(ae(s),s=[],l=[],r=[],o=0,i&&(i=[])),n.fallback&&(l=[Me],r[0]=Q(p=>(s[0]=p,n.fallback())),o=1);else if(o===0){for(r=new Array(b),u=0;u<b;u++)l[u]=a[u],r[u]=Q(w);o=b}else{for(P=new Array(b),R=new Array(b),i&&(d=new Array(b)),g=0,c=Math.min(o,b);g<c&&l[g]===a[g];g++);for(c=o-1,f=b-1;c>=g&&f>=g&&l[c]===a[f];c--,f--)P[f]=r[c],R[f]=s[c],i&&(d[f]=i[c]);for(S=new Map,$=new Array(f+1),u=f;u>=g;u--)y=a[u],h=S.get(y),$[u]=h===void 0?-1:h,S.set(y,u);for(h=g;h<=c;h++)y=l[h],u=S.get(y),u!==void 0&&u!==-1?(P[u]=r[h],R[u]=s[h],i&&(d[u]=i[h]),u=$[u],S.set(y,u)):s[h]();for(u=g;u<b;u++)u in P?(r[u]=P[u],s[u]=R[u],i&&(i[u]=d[u],i[u](u))):r[u]=Q(w);r=r.slice(0,o=b),l=a.slice(0)}return r});function w(S){if(s[u]=S,i){const[$,P]=O(u);return i[u]=P,t(a[u],$)}return t(a[u])}}}function m(e,t){return U(()=>e(t||{}))}function H(){return!0}const Fe={get(e,t,n){return t===se?n:e.get(t)},has(e,t){return t===se?!0:e.has(t)},set:H,deleteProperty:H,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:H,deleteProperty:H}},ownKeys(e){return e.keys()}};function re(e){return(e=typeof e=="function"?e():e)?e:{}}function Ke(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function te(...e){let t=!1;for(let o=0;o<e.length;o++){const i=e[o];t=t||!!i&&se in i,e[o]=typeof i=="function"?(t=!0,j(i)):i}if(Ne&&t)return new Proxy({get(o){for(let i=e.length-1;i>=0;i--){const a=re(e[i])[o];if(a!==void 0)return a}},has(o){for(let i=e.length-1;i>=0;i--)if(o in re(e[i]))return!0;return!1},keys(){const o=[];for(let i=0;i<e.length;i++)o.push(...Object.keys(re(e[i])));return[...new Set(o)]}},Fe);const n={},l=Object.create(null);for(let o=e.length-1;o>=0;o--){const i=e[o];if(!i)continue;const a=Object.getOwnPropertyNames(i);for(let b=a.length-1;b>=0;b--){const h=a[b];if(h==="__proto__"||h==="constructor")continue;const u=Object.getOwnPropertyDescriptor(i,h);if(!l[h])l[h]=u.get?{enumerable:!0,configurable:!0,get:Ke.bind(n[h]=[u.get.bind(i)])}:u.value!==void 0?u:void 0;else{const w=n[h];w&&(u.get?w.push(u.get.bind(i)):u.value!==void 0&&w.push(()=>u.value))}}}const r={},s=Object.keys(l);for(let o=s.length-1;o>=0;o--){const i=s[o],a=l[i];a&&a.get?Object.defineProperty(r,i,a):r[i]=a?a.value:void 0}return r}const qe=e=>`Stale read from <${e}>.`;function fe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return j(Ve(()=>e.each,e.children,t||void 0))}function K(e){const t=e.keyed,n=j(()=>e.when,void 0,{equals:(l,r)=>t?l===r:!l==!r});return j(()=>{const l=n();if(l){const r=e.children;return typeof r=="function"&&r.length>0?U(()=>r(t?l:()=>{if(!U(n))throw qe("Show");return e.when})):r}return e.fallback},void 0,void 0)}const Ge=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],We=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ge]),Xe=new Set(["innerHTML","textContent","innerText","children"]),He=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Qe=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Ye(e,t){const n=Qe[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Je=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]);function Ze(e,t,n){let l=n.length,r=t.length,s=l,o=0,i=0,a=t[r-1].nextSibling,b=null;for(;o<r||i<s;){if(t[o]===n[i]){o++,i++;continue}for(;t[r-1]===n[s-1];)r--,s--;if(r===o){const h=s<l?i?n[i-1].nextSibling:n[s-i]:a;for(;i<s;)e.insertBefore(n[i++],h)}else if(s===i)for(;o<r;)(!b||!b.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[s-1]&&n[i]===t[r-1]){const h=t[--r].nextSibling;e.insertBefore(n[i++],t[o++].nextSibling),e.insertBefore(n[--s],h),t[r]=n[s]}else{if(!b){b=new Map;let u=i;for(;u<s;)b.set(n[u],u++)}const h=b.get(t[o]);if(h!=null)if(i<h&&h<s){let u=o,w=1,S;for(;++u<r&&u<s&&!((S=b.get(t[u]))==null||S!==h+w);)w++;if(w>h-i){const $=t[o];for(;i<h;)e.insertBefore(n[i++],$)}else e.replaceChild(n[i++],t[o++])}else o++;else t[o++].remove()}}}const de="_$DX_DELEGATE";function ze(e,t,n,l={}){let r;return Q(s=>{r=s,t===document?e():k(t,e(),t.firstChild?null:void 0,n)},l.owner),()=>{r(),t.textContent=""}}function E(e,t,n){let l;const r=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},s=()=>(l||(l=r())).cloneNode(!0);return s.cloneNode=s,s}function ve(e,t=window.document){const n=t[de]||(t[de]=new Set);for(let l=0,r=e.length;l<r;l++){const s=e[l];n.has(s)||(n.add(s),t.addEventListener(s,it))}}function ie(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function et(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)}function Ee(e,t){t==null?e.removeAttribute("class"):e.className=t}function tt(e,t,n,l){if(l)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=s=>r.call(e,n[1],s))}else e.addEventListener(t,n,typeof n!="function"&&n)}function nt(e,t,n={}){const l=Object.keys(t||{}),r=Object.keys(n);let s,o;for(s=0,o=r.length;s<o;s++){const i=r[s];!i||i==="undefined"||t[i]||(he(e,i,!1),delete n[i])}for(s=0,o=l.length;s<o;s++){const i=l[s],a=!!t[i];!i||i==="undefined"||n[i]===a||!a||(he(e,i,!0),n[i]=a)}return n}function lt(e,t,n){if(!t)return n?ie(e,"style"):t;const l=e.style;if(typeof t=="string")return l.cssText=t;typeof n=="string"&&(l.cssText=n=void 0),n||(n={}),t||(t={});let r,s;for(s in n)t[s]==null&&l.removeProperty(s),delete n[s];for(s in t)r=t[s],r!==n[s]&&(l.setProperty(s,r),n[s]=r);return n}function ne(e,t={},n,l){const r={};return I(()=>r.children=W(e,t.children,r.children)),I(()=>typeof t.ref=="function"&&_e(t.ref,e)),I(()=>rt(e,t,n,!0,r,!0)),r}function _e(e,t,n){return U(()=>e(t,n))}function k(e,t,n,l){if(n!==void 0&&!l&&(l=[]),typeof t!="function")return W(e,t,l,n);I(r=>W(e,t(),r,n),l)}function rt(e,t,n,l,r={},s=!1){t||(t={});for(const o in r)if(!(o in t)){if(o==="children")continue;r[o]=ge(e,o,null,r[o],n,s,t)}for(const o in t){if(o==="children")continue;const i=t[o];r[o]=ge(e,o,i,r[o],n,s,t)}}function st(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function he(e,t,n){const l=t.trim().split(/\s+/);for(let r=0,s=l.length;r<s;r++)e.classList.toggle(l[r],n)}function ge(e,t,n,l,r,s,o){let i,a,b,h,u;if(t==="style")return lt(e,n,l);if(t==="classList")return nt(e,n,l);if(n===l)return l;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const w=t.slice(3);l&&e.removeEventListener(w,l,typeof l!="function"&&l),n&&e.addEventListener(w,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const w=t.slice(10);l&&e.removeEventListener(w,l,!0),n&&e.addEventListener(w,n,!0)}else if(t.slice(0,2)==="on"){const w=t.slice(2).toLowerCase(),S=Je.has(w);if(!S&&l){const $=Array.isArray(l)?l[0]:l;e.removeEventListener(w,$)}(S||n)&&(tt(e,w,n,S),S&&ve([w]))}else t.slice(0,5)==="attr:"?ie(e,t.slice(5),n):t.slice(0,5)==="bool:"?et(e,t.slice(5),n):(u=t.slice(0,5)==="prop:")||(b=Xe.has(t))||(h=Ye(t,e.tagName))||(a=We.has(t))||(i=e.nodeName.includes("-")||"is"in o)?(u&&(t=t.slice(5),a=!0),t==="class"||t==="className"?Ee(e,n):i&&!a&&!b?e[st(t)]=n:e[h||t]=n):ie(e,He[t]||t,n);return n}function it(e){let t=e.target;const n=`$$${e.type}`,l=e.target,r=e.currentTarget,s=a=>Object.defineProperty(e,"target",{configurable:!0,value:a}),o=()=>{const a=t[n];if(a&&!t.disabled){const b=t[`${n}Data`];if(b!==void 0?a.call(t,b,e):a.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&s(t.host),!0},i=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const a=e.composedPath();s(a[0]);for(let b=0;b<a.length-2&&(t=a[b],!!o());b++){if(t._$host){t=t._$host,i();break}if(t.parentNode===r)break}}else i();s(l)}function W(e,t,n,l,r){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,o=l!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(o){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=V(e,n,l,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=V(e,n,l);else{if(s==="function")return I(()=>{let i=t();for(;typeof i=="function";)i=i();n=W(e,i,n,l)}),()=>n;if(Array.isArray(t)){const i=[],a=n&&Array.isArray(n);if(oe(i,t,n,r))return I(()=>n=W(e,i,n,l,!0)),()=>n;if(i.length===0){if(n=V(e,n,l),o)return n}else a?n.length===0?be(e,i,l):Ze(e,n,i):(n&&V(e),be(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=V(e,n,l,t);V(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function oe(e,t,n,l){let r=!1;for(let s=0,o=t.length;s<o;s++){let i=t[s],a=n&&n[e.length],b;if(!(i==null||i===!0||i===!1))if((b=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))r=oe(e,i,a)||r;else if(b==="function")if(l){for(;typeof i=="function";)i=i();r=oe(e,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||r}else e.push(i),r=!0;else{const h=String(i);a&&a.nodeType===3&&a.data===h?e.push(a):e.push(document.createTextNode(h))}}return r}function be(e,t,n=null){for(let l=0,r=t.length;l<r;l++)e.insertBefore(t[l],n)}function V(e,t,n,l){if(n===void 0)return e.textContent="";const r=l||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const i=t[o];if(r!==i){const a=i.parentNode===e;!s&&!o?a?e.replaceChild(r,i):e.insertBefore(r,n):a&&i.remove()}else s=!0}}else e.insertBefore(r,n);return[r]}var Pe=E("<div>"),ot=E("<button>"),ct=E("<input>");function q(e){return(()=>{var t=Pe();return ne(t,te(e,{get class(){return"bg-main-translucentwhite dark:bg-neutral-900/90 p-3 "+e.class}}),!1),t})()}function ye(e){return(()=>{var t=Pe();return ne(t,te(e,{style:{"box-shadow":"0 0 0 100000px #00000087"},get class(){return"bg-main-translucentwhite overflow-hidden fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  dark:bg-neutral-800 rounded-md "+e.class}}),!1),t})()}function _(e){return(()=>{var t=ot();return ne(t,te(e,{get class(){return"flex items-center py-1 transition-all disabled:border-transparent disabled:cursor-not-allowed  disabled:text-neutral-500 disabled:dark:text-neutral-200 text-left rounded-md px-3 "+e.class+(e.isPrimary?" hover:bg-red-300   text-white bg-red-400 dark:bg-red-500 dark:border-l hover:dark:bg-red-500/80 disabled:dark:bg-red-400 border-red-500 ":"  dark:border-neutral-700 border-neutral-300 bg-main-translucentwhite disabled:dark:text-neutral-400 border active:!bg-neutral-300/20 dark:active:!bg-neutral-800/20 disabled:dark:bg-neutral-600 disabled:bg-neutral-200 dark:bg-neutral-700/50 hover:dark:bg-neutral-700/70 hover:bg-white ")},get style(){return{"box-shadow":e.isPrimary?"":"inset 0 0 6px 0 #33333316"}}}),!1),t})()}function ut(e){return(()=>{var t=ct();return ne(t,te(e,{get class(){return"dark:bg-neutral-700/60 bg-neutral-300/60 mb-4 p-2 rounded-md focus:outline-none border-b-2 border-neutral-500 dark:border-neutral-600 focus:border-red-500 "+e.class}}),!1),t})()}var at=E('<div class="text-xl flex items-center font-semibold"><table class="block mr-2 -rotate-6 "><tbody class="[&amp;>tr>td]:px-1 [&amp;>tr>td]:py-[0.175rem] [&amp;>tr>td]:border [&amp;>tr>td]:border-slate-950 [&amp;>tr>td]:dark:border-neutral-200"><tr class=bg-red-800><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table>Baboola Sheets');function ft(){return at()}function dt(e,t){const n=document.createElement("a"),l=new Blob([t],{type:"text/plain"});n.href=URL.createObjectURL(l),n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)}function ht(e){return e.replace(/[^\d.]/g,"")}function me(e){const[t,n]=e.toString().split("."),l=t.replace(/\B(?=(\d{3})+(?!\d))/g,",");return n?`${l}.${n}`:l}var gt=E('<div class="text-center border-r border-b border-slate-300 dark:border-neutral-700 flex items-center justify-center ">'),bt=E('<div class="flex flex-col gap-2 mt-5"><label for=ocsv class="block w-full"></label><input hidden type=file id=ocsv>'),yt=E("<div class=ml-auto>Selected Cell: (<!>, <!>)"),mt=E('<div class="grid w-full h-fit min-h-full border border-l-0 border-slate-300 dark:border-neutral-700">'),pt=E('<div class="flex flex-col sm:flex-row w-full h-full"><div class="grow flex flex-col">'),wt=E("<div class=p-3><h1>Save your work before clearing the table?</h1><p class=my-3>If you choose to save your work, the table will be downloaded as a CSV file before clearing."),xt=E('<div class="grid grid-cols-3 gap-2 p-3 bg-neutral-700/20">'),$t=E("<div class=p-3><h1>What should we call your table?</h1><p class=my-3>Enter the file name you want for the downloaded table in the box below."),Ct=E('<div class="grid grid-cols-2 gap-2 p-3 bg-neutral-700/20">'),St=E('<div class="p-1 ml-auto">No cell selected.'),kt=E('<div class="relative h-full"><input>');function At(){const e=O([]),[t,n]=O(12),[l,r]=O(10);function s(){e[1]([]);const d=[];for(let g=0;g<t();g++){const c=[];for(let f=0;f<l();f++)c.push("");d.push(c)}e[1](d)}s();function o(){let d="";for(let g=0;g<e[0]().length;g++){let c="";for(let f=0;f<e[0]()[g].length;f++)f>0&&(c+=","),c+=`"${e[0]()[g][f].split('"').join('""')}"`;c+=`
`,d+=c}return d}function i(d,g){const c=a(g);return d.map((f,y)=>{const p=c[y]||[];return p.concat(f.slice(p.length))})}function a(d){const g=[];let c=[],f="",y=!1;for(let p=0;p<d.length;p++){const x=d[p],N=d[p+1];x==='"'&&N==='"'?(f+='"',p++):x==='"'?y=!y:x===","&&!y?(c.push(f),f=""):x===`
`&&!y?(c.push(f),g.push(c),c=[],f=""):f+=x}(f||c.length>0)&&(c.push(f),g.push(c));for(let p of g)for(let x=0;x<p.length;x++)p[x]=p[x].replace(/^"|"$/g,"").replace(/""/g,'"');return g}function b(d){return[" ",(()=>{var g=gt();return k(g,()=>d.children),g})()]}const h=O(!1),u=O(!1),w=O("Untitled Table"),S=O(!1),$=O();let P;(d=>{d[d.Sum=0]="Sum",d[d.Average=1]="Average"})(P||(P={}));function R(d){let g=0;const c=$[0](),f=c.x-1,y=c.y-1;if(d===0||d===1)for(let x=0;x<y;x++){const N=ht(e[0]()[x][f]),B=Number(N);isNaN(B)||(g+=B)}d===1&&(g/=y);let p=e[0]();return p[y][f]=me(g),s(),e[1](p),me(g)}return[(()=>{var d=pt(),g=d.firstChild;return k(d,m(q,{class:"w-full sm:min-w-72 sm:max-w-72 h-full !bg-neutral-300/60 border-neutral-400 dark:!bg-neutral-800/60 border-r dark:border-neutral-700 ",get children(){return[m(ft,{}),(()=>{var c=bt(),f=c.firstChild,y=f.nextSibling;return k(f,m(_,{isPrimary:!0,class:"w-full",onClick:()=>{document.querySelector("input#ocsv").click()},children:"Open CSV"})),y.addEventListener("change",p=>{var x;if((x=p.target.files)!=null&&x[0]){const N=p.target.files[0];if(N){const B=new FileReader;B.onload=function(F){s();const L=F.target.result;e[1](i(e[0](),L))},B.readAsText(N)}}}),k(c,m(_,{onClick:()=>h[1](!0),children:"Clear"}),null),k(c,m(_,{onClick:()=>{u[1](!0)},children:"Export to CSV"}),null),c})()]}}),g),k(g,m(q,{class:"flex items-center !shadow-none !bg-neutral-200 dark:!bg-neutral-800 gap-2",get children(){return m(K,{get fallback(){return[" ",St()]},get when(){return $[0]()},get children(){return[m(_,{onClick:()=>{R(1)},get disabled(){var c;return(((c=$[0]())==null?void 0:c.y)||0)<=2},isPrimary:!0,children:"Average"}),m(_,{onClick:()=>{R(0)},get disabled(){var c;return(((c=$[0]())==null?void 0:c.y)||0)<=2},children:"Sum"}),m(K,{get when(){var c;return(((c=$[0]())==null?void 0:c.y)||0)>2},get children(){return["of all numeric cells from cell (",j(()=>$[0]().x),", 1) to cell (",j(()=>$[0]().x),", ",j(()=>$[0]().y-1),")"]}}),(()=>{var c=yt(),f=c.firstChild,y=f.nextSibling,p=y.nextSibling,x=p.nextSibling;return x.nextSibling,k(c,()=>$[0]().x,y),k(c,()=>$[0]().y,x),c})()]}})}}),null),k(g,m(q,{class:"w-full !p-0 overflow-auto  grow",get children(){var c=mt();return k(c,m(fe,{get each(){return e[0]()},children:(f,y)=>m(fe,{each:f,children:(p,x)=>{let N;const B=j(()=>{var L,T;return((L=$[0]())==null?void 0:L.x)===x()+1&&((T=$[0]())==null?void 0:T.y)===y()+1}),F=O(!1);return m(b,{get children(){var L=kt(),T=L.firstChild;T.$$input=Te=>{const ue=e[0]();ue[y()][x()]=Te.target.value,e[1](ue)};var ce=N;return typeof ce=="function"?_e(ce,T):N=T,T.addEventListener("blur",()=>{F[1](!1)}),T.addEventListener("focus",()=>{$[1]({x:x()+1,y:y()+1}),F[1](!0)}),T.value=p,k(L,m(K,{get when(){return F[0]()},get children(){return m(q,{class:"absolute hidden",children:"suggestion"})}}),null),I(()=>Ee(T,`h-full border-b-2 border-transparent w-full p-2 appearance-none outline-none ${B()?" !border-red-700 z-10":""}  -outline-offset-1 transition-all`)),L}})}})})),I(f=>{var y=`repeat(${l()}, minmax(0, 1fr))`,p=`${t()}`;return y!==f.e&&((f.e=y)!=null?c.style.setProperty("grid-template-columns",y):c.style.removeProperty("grid-template-columns")),p!==f.t&&((f.t=p)!=null?c.style.setProperty("grid-template-rows",p):c.style.removeProperty("grid-template-rows")),f},{e:void 0,t:void 0}),c}}),null),k(g,m(q,{class:"flex items-center border-t dark:border-black border-neutral-400 bg-neutral-300 dark:!bg-neutral-800 gap-2",get children(){return[m(_,{onClick:()=>{n(f=>++f);const c=e[0]();c.push(",".repeat(l()-1).split(",")),s(),e[1](c),window.scrollTo(0,1e10)},class:"py-1",children:"Add Row"}),m(_,{onClick:()=>{r(f=>++f);let c=e[0]();c.forEach((f,y)=>{f.push(""),console.log(f),c[y]=f}),s(),e[1](c),window.scrollTo(0,1e10)},class:"py-1",children:"Add Column"})]}}),null),d})(),m(K,{get when(){return h[0]()},get children(){return m(ye,{get children(){return[wt(),(()=>{var d=xt();return k(d,m(_,{class:"justify-center",onClick:()=>{S[1](!0),u[1](!0),h[1](!1)},isPrimary:!0,children:"Save & Clear Table"}),null),k(d,m(_,{class:"justify-center",onClick:()=>{s(),h[1](!1)},children:"Clear Without Saving"}),null),k(d,m(_,{class:"justify-center",onClick:()=>{h[1](!1)},children:"Don't Clear"}),null),d})()]}})}}),m(K,{get when(){return u[0]()},get children(){return m(ye,{get children(){return[(()=>{var d=$t(),g=d.firstChild;return g.nextSibling,k(d,m(ut,{class:"w-full",get value(){return w[0]()},onInput:c=>{w[1](c.target.value)}}),null),d})(),(()=>{var d=Ct();return k(d,m(_,{class:"justify-center",onClick:()=>{dt(w[0]()+".csv",o()),u[1](!1),S[0]()&&s(),S[1](!1)},isPrimary:!0,children:"Download"}),null),k(d,m(_,{class:"justify-center",onClick:()=>{u[1](!1)},children:"Cancel"}),null),d})()]}})}})]}ve(["input"]);function vt(){return m(At,{})}const Et=document.getElementById("root");ze(()=>m(vt,{}),Et);
