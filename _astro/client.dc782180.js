import{c as l,a as d}from"./runtime-dom.esm-bundler.2f2d2a9e.js";import{d as p,h as a}from"./runtime-core.esm-bundler.4024fd6a.js";const o=()=>{},m=p({props:{value:String,name:String},setup({name:n,value:t}){return t?()=>a("astro-slot",{name:n,innerHTML:t}):()=>null}}),A=n=>async(t,s,c,{client:u})=>{if(delete s.class,!n.hasAttribute("ssr"))return;const i=t.name?`${t.name} Host`:void 0,r={};for(const[e,f]of Object.entries(c))r[e]=()=>a(m,{value:f,name:e==="default"?void 0:e});if(u==="only"){const e=l({name:i,render:()=>a(t,s,r)});await o(),e.mount(n,!1)}else{const e=d({name:i,render:()=>a(t,s,r)});await o(),e.mount(n,!0)}};export{A as default};
