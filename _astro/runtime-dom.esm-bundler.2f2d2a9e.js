import{z as w,A as p,B as b,C as O,D as I,E as h,G as B,H as D,I as K,J as z,K as M,L as W,M as $,N as q,O as L,P as U}from"./runtime-core.esm-bundler.4024fd6a.js";const F="http://www.w3.org/2000/svg",a=typeof document<"u"?document:null,S=a&&a.createElement("template"),G={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?a.createElementNS(F,t):a.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{S.innerHTML=i?`<svg>${t}</svg>`:t;const c=S.content;if(i){const f=c.firstChild;for(;f.firstChild;)c.appendChild(f.firstChild);c.removeChild(f)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function j(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function J(t,e,n){const i=t.style,r=p(n);if(n&&!r){for(const s in n)g(i,s,n[s]);if(e&&!p(e))for(const s in e)n[s]==null&&g(i,s,"")}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const A=/\s*!important$/;function g(t,e,n){if(h(n))n.forEach(i=>g(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=X(t,e);A.test(n)?t.setProperty(M(i),n.replace(A,""),"important"):t[i]=n}}const E=["Webkit","Moz","ms"],d={};function X(t,e){const n=d[e];if(n)return n;let i=W(e);if(i!=="filter"&&i in t)return d[e]=i;i=$(i);for(let r=0;r<E.length;r++){const s=E[r]+i;if(s in t)return d[e]=s}return e}const v="http://www.w3.org/1999/xlink";function Q(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(v,e.slice(6,e.length)):t.setAttributeNS(v,e,n);else{const s=q(e);n==null||s&&!L(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Y(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const f=n??"";(t.value!==f||t.tagName==="OPTION")&&(t.value=f),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const f=typeof t[e];f==="boolean"?n=L(n):n==null&&f==="string"?(n="",c=!0):f==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function u(t,e,n,i){t.addEventListener(e,n,i)}function Z(t,e,n,i){t.removeEventListener(e,n,i)}function V(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[c,f]=y(e);if(i){const H=s[e]=et(i,r);u(t,c,H,f)}else o&&(Z(t,c,o,f),s[e]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function y(t){let e;if(C.test(t)){e={};let i;for(;i=t.match(C);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):M(t.slice(2)),e]}let m=0;const k=Promise.resolve(),tt=()=>m||(k.then(()=>m=0),m=Date.now());function et(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;U(nt(i,n.value),e,5,[i])};return n.value=t,n.attached=tt(),n}function nt(t,e){if(h(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const N=/^on[a-z]/,it=(t,e,n,i,r=!1,s,o,c,f)=>{e==="class"?j(t,i,r):e==="style"?J(t,n,i):K(e)?z(e)||V(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rt(t,e,i,r))?Y(t,e,i,s,o,c,f):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Q(t,e,i,r))};function rt(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&N.test(e)&&w(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||N.test(e)&&p(n)?!1:e in t}const T=t=>{const e=t.props["onUpdate:modelValue"]||!1;return h(e)?n=>B(e,n):e};function st(t){t.target.composing=!0}function P(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const lt={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=T(r);const s=i||r.props&&r.props.type==="number";u(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),s&&(c=b(c)),t._assign(c)}),n&&u(t,"change",()=>{t.value=t.value.trim()}),e||(u(t,"compositionstart",st),u(t,"compositionend",P),u(t,"change",P))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=T(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&b(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},ot=["ctrl","shift","alt","meta"],ct={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ot.some(n=>t[`${n}Key`]&&!e.includes(n))},pt=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=ct[e[r]];if(s&&s(n,e))return}return t(n,...i)},R=D({patchProp:it},G);let l,_=!1;function ft(){return l||(l=O(R))}function at(){return l=_?l:I(R),_=!0,l}const dt=(...t)=>{const e=ft().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=x(i);if(!r)return;const s=e._component;!w(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},mt=(...t)=>{const e=at().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=x(i);if(r)return n(r,!0,r instanceof SVGElement)},e};function x(t){return p(t)?document.querySelector(t):t}export{mt as a,dt as c,lt as v,pt as w};