(function(e){function t(t){for(var i,o,c=t[0],l=t[1],r=t[2],b=0,m=[];b<c.length;b++)o=c[b],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,r||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={app:0},s=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var r=0;r<c.length;r++)t(c[r]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("7a23");function n(e,t){var a=Object(i["y"])("router-view");return Object(i["t"])(),Object(i["d"])(a)}a("b6b4");var s=a("6b0d"),o=a.n(s);const c={},l=o()(c,[["render",n]]);var r=l,d=a("6c02"),b={id:"main-wrapper"},m={id:"content",role:"main"},f={id:"styles-switcher"};function p(e,t,a,n,s,o){var c=Object(i["y"])("header-component"),l=Object(i["y"])("theme-switcher"),r=Object(i["y"])("intro"),d=Object(i["y"])("about"),p=Object(i["y"])("services"),u=Object(i["y"])("resume"),g=Object(i["y"])("hero-component"),v=Object(i["y"])("faq"),j=Object(i["y"])("testimonial"),h=Object(i["y"])("contact"),O=Object(i["y"])("footer-component");return Object(i["t"])(),Object(i["e"])("div",b,[Object(i["i"])(c),Object(i["f"])("div",m,[Object(i["f"])("div",f,[Object(i["i"])(l)]),Object(i["i"])(r),Object(i["i"])(d),Object(i["i"])(p),Object(i["i"])(u),Object(i["i"])(g),Object(i["i"])(v),Object(i["i"])(j),Object(i["i"])(h)]),Object(i["i"])(O)])}var u={id:"home",class:"bg-primary d-flex fullscreen position-relative py-5"},g={class:"container my-auto py-4"},v={class:"row"},j={class:"col-lg-7 text-center text-lg-start align-self-center order-1 order-lg-0 wow fadeIn",style:{visibility:"visible"}},h=Object(i["f"])("h1",{class:"text-12 fw-300 mb-0 text-uppercase"}," Hi, I'm a Freelancer ",-1),O={class:"typed-strings",style:{display:"none"}},y=Object(i["g"])('<h2 class="text-21 fw-600 text-uppercase mb-0 ms-n1"><span class="typed">D</span><span class="typed-cursor">|</span></h2><p class="text-5">Nigeria.</p><a href="#portfolio" class="btn btn-dark rounded-0 mt-3">View My Works</a><a href="#contact" class="btn btn-link text-dark mt-3">Contact Me<span class="text-4 ms-2"><i class="far fa-arrow-alt-circle-down"></i></span></a>',4),w=Object(i["f"])("div",{class:"col-lg-5 text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1"},[Object(i["f"])("div",{class:"bg-light rounded-pill d-inline-block p-3 shadow-lg wow zoomIn",style:{visibility:"visible"}},[Object(i["f"])("img",{class:"img-fluid rounded-pill d-block",src:"images/Theodore_img.jpg",title:"I'm Theodore",alt:""})])],-1),x=Object(i["f"])("a",{href:"#about",class:"scroll-down-arrow text-dark smooth-scroll"},[Object(i["f"])("span",{class:"animated"},[Object(i["f"])("i",{class:"fas fa-arrow-down"})])],-1);function k(e,t,a,n,s,o){return Object(i["t"])(),Object(i["e"])("section",u,[Object(i["f"])("div",g,[Object(i["f"])("div",v,[Object(i["f"])("div",j,[h,Object(i["f"])("div",O,[(Object(i["t"])(!0),Object(i["e"])(i["a"],null,Object(i["x"])(e.professions,(function(e,t){return Object(i["t"])(),Object(i["e"])("p",{key:t},Object(i["A"])(e),1)})),128))]),y]),w])]),x])}var I={name:"intro",data:function(){return{professions:["Developer","Developer","Designer","Developer","Video Editor","Developer"]}}};const A=o()(I,[["render",k]]);var D=A,P={id:"header",class:"sticky-top"},E=Object(i["g"])('<nav class="primary-menu navbar navbar-expand-none navbar-overlay navbar-overlay-dark bg-transparent border-bottom-0 text-5 fw-600 sticky-on-top"><div class="container"><a class="logo" href="/" title="Theodore"><p class="text-4">THEODORE</p></a><div class="text-3 ms-auto me-2"><span class="text-4 me-2"><i class="fas fa-phone"></i></span>+2349049460816 </div><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"><span></span><span></span><span></span></button><div id="header-nav" class="collapse navbar-collapse"><div class="d-flex flex-column h-100 align-items-center justify-content-center"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link smooth-scroll" href="#home">Home</a></li><li class="nav-item"><a class="nav-link smooth-scroll" href="#about">About Me</a></li><li class="nav-item"><a class="nav-link smooth-scroll" href="#services">What I Do</a></li><li class="nav-item"><a class="nav-link smooth-scroll active" href="#resume">Resume</a></li><li class="nav-item"><a class="nav-link smooth-scroll" href="#portfolio">Portfolio</a></li><li class="nav-item"><a class="nav-link smooth-scroll" href="#faq">FAQ</a></li><li class="nav-item"><a class="nav-link smooth-scroll" href="#testimonial">Client Speak</a></li><li class="nav-item"><a class="nav-link smooth-scroll" href="#contact">Contact Me</a></li></ul><ul class="social-icons social-icons-light social-icons-lg social-icons-light d-inline-flex mt-4"><li class="social-icons-twitter"><a data-bs-toggle="tooltip" href="https://twitter.com/theodoremca" target="_blank" title data-bs-original-title="Twitter"><i class="fab fa-twitter"></i></a></li><li class="social-icons-instagram"><a data-bs-toggle="tooltip" href="https://www.instagram.com/theodore_mca/" target="_blank" title data-bs-original-title="Instagram"><i class="fab fa-instagram"></i></a></li><li class="social-icons-linkedin"><a data-bs-toggle="tooltip" href="https://www.linkedin.com/in/theodore-imonigie-8833b911b" target="_blank" title data-bs-original-title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li></ul></div></div></div></nav>',1),F=[E];function T(e,t,a,n,s,o){return Object(i["t"])(),Object(i["e"])("header",P,F)}var U={name:"header-component"};const S=o()(U,[["render",T]]);var C=S,q=(a("b0c0"),{id:"about",class:"section"}),H={class:"container"},M=Object(i["f"])("p",{class:"text-center mb-2 wow fadeInUp",style:{visibility:"visible"}},[Object(i["f"])("span",{class:"bg-primary text-dark px-2"},"About Me")],-1),V=Object(i["f"])("h2",{class:"text-10 fw-600 text-center mb-5 wow fadeInUp",style:{visibility:"visible"}},"Know Me More",-1),L={class:"row"},$={class:"col-lg-8 text-center text-lg-start wow fadeInUp",style:{visibility:"visible"}},G={class:"text-8 fw-400 mb-3"},_=Object(i["h"])("Hi, I'm "),R={class:"fw-700 border-bottom border-3 border-primary"},W=["innerHTML"],B=Object(i["g"])('<div class="col-lg-4 mt-4 mt-lg-0 wow fadeInUp" data-wow-delay="0.2s" style="visibility:visible;animation-delay:0.2s;"><div class="featured-box style-4"><div class="featured-box-icon text-25 fw-500 bg-primary rounded-circle"><span class="wow heartBeat" data-wow-delay="1.3s" style="visibility:visible;animation-delay:1.3s;">9 </span></div><h3 class="text-7 wow rubberBand" data-wow-delay="2s" style="visibility:visible;animation-delay:2s;"> Years of <span class="fw-700">Experience</span></h3></div></div>',1),J={class:"row gy-3 mt-4"},N={class:"col-6 col-lg-3 wow fadeInUp",style:{visibility:"visible"}},Y=Object(i["f"])("p",{class:"text-muted fw-500 mb-0"},"Name:",-1),Q={class:"text-4 text-dark fw-600 mb-0"},X={class:"col-6 col-lg-3 wow fadeInUp","data-wow-delay":"0.2s",style:{visibility:"visible","animation-delay":"0.2s"}},z=Object(i["f"])("p",{class:"text-muted fw-500 mb-0"},"Email:",-1),K={class:"text-4 fw-600 mb-0"},Z=["href"],ee={class:"col-6 col-lg-3 wow fadeInUp","data-wow-delay":"0.3s",style:{visibility:"visible","animation-delay":"0.3s"}},te=Object(i["f"])("p",{class:"text-muted fw-500 mb-0"},"Date of birth:",-1),ae={class:"text-4 text-dark fw-600 mb-0"},ie={class:"col-6 col-lg-3 wow fadeInUp","data-wow-delay":"0.4s",style:{visibility:"visible","animation-delay":"0.4s"}},ne=Object(i["f"])("p",{class:"text-muted fw-500 mb-0"},"From:",-1),se={class:"text-4 text-dark fw-600 mb-0"};function oe(e,t,a,n,s,o){return Object(i["t"])(),Object(i["e"])("section",q,[Object(i["f"])("div",H,[M,V,Object(i["f"])("div",L,[Object(i["f"])("div",$,[Object(i["f"])("h2",G,[_,Object(i["f"])("span",R,Object(i["A"])(o.data.name),1)]),Object(i["f"])("p",{class:"text-5",innerHTML:o.data.info},null,8,W)]),B]),Object(i["f"])("div",J,[Object(i["f"])("div",N,[Y,Object(i["f"])("p",Q,Object(i["A"])(o.data.name),1)]),Object(i["f"])("div",X,[z,Object(i["f"])("p",K,[Object(i["f"])("a",{class:"link-dark",href:"mailto:"+o.data.email},Object(i["A"])(o.data.email),9,Z)])]),Object(i["f"])("div",ee,[te,Object(i["f"])("p",ae,Object(i["A"])(o.data.dob),1)]),Object(i["f"])("div",ie,[ne,Object(i["f"])("p",se,Object(i["A"])(o.data.city),1)])])])])}var ce={name:"about",computed:{data:function(){return this.$store.state[this.$options.name].data}}};const le=o()(ce,[["render",oe]]);var re=le,de=(a("99af"),a("d3b7"),a("25f0"),{id:"resume",class:"section"}),be={class:"container"},me=Object(i["f"])("p",{class:"text-center mb-2 wow fadeInUp animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated",style:{visibility:"visible"}},[Object(i["f"])("span",{class:"bg-primary text-dark px-2"},"Resume")],-1),fe=Object(i["f"])("h2",{class:"text-10 fw-600 text-center mb-5 wow fadeInUp animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated",style:{visibility:"visible"}},"A summary of My Resume",-1),pe={class:"row g-5 mt-5"},ue={class:"col-lg-6 wow fadeInUp animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated",style:{visibility:"visible"}},ge=Object(i["f"])("h2",{class:"text-7 fw-600 mb-4 pb-2"},"My Education",-1),ve={class:"text-5"},je={class:"mb-2"},he={class:"text-muted"},Oe=Object(i["f"])("hr",{class:"my-4"},null,-1),ye={class:"col-lg-6 wow fadeInUp","data-wow-delay":"0.2s",style:{visibility:"visible","animation-delay":"0.2s","animation-name":"none"}},we=Object(i["f"])("h2",{class:"text-7 fw-600 mb-4 pb-2"},"My Experience",-1),xe={class:"text-5"},ke={class:"mb-2"},Ie={class:"text-muted"},Ae=Object(i["f"])("hr",{class:"my-4"},null,-1),De=Object(i["f"])("h2",{class:"text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},"My Skills",-1),Pe={class:"row gx-5"},Ee={class:"fw-500 text-start mb-2"},Fe={class:"float-end"},Te={class:"progress progress-sm mb-4"},Ue=["aria-valuenow"],Se=Object(i["f"])("p",{class:"text-center mt-5 wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},[Object(i["f"])("a",{href:"THEODOREcv.pdf",target:"blank",class:"btn btn-outline-dark shadow-none rounded-0"},"Download CV")],-1);function Ce(e,t,a,n,s,o){return Object(i["t"])(),Object(i["e"])("section",de,[Object(i["f"])("div",be,[me,fe,Object(i["f"])("div",pe,[Object(i["f"])("div",ue,[ge,(Object(i["t"])(!0),Object(i["e"])(i["a"],null,Object(i["x"])(o.data.resume,(function(e,t){return Object(i["t"])(),Object(i["e"])("div",{key:t,class:"border-start border-2 border-primary ps-3"},[Object(i["f"])("h3",ve,Object(i["A"])(e.name),1),Object(i["f"])("p",je,Object(i["A"])(e.college),1),Object(i["f"])("p",he,Object(i["A"])(e.info),1),Oe])})),128))]),Object(i["f"])("div",ye,[we,(Object(i["t"])(!0),Object(i["e"])(i["a"],null,Object(i["x"])(o.data.experience,(function(e,t){return Object(i["t"])(),Object(i["e"])("div",{key:t,class:"border-start border-2 border-primary ps-3"},[Object(i["f"])("h3",xe,Object(i["A"])(e.course),1),Object(i["f"])("p",ke,Object(i["A"])(e.duration),1),Object(i["f"])("p",Ie,Object(i["A"])(e.company),1),Ae])})),128))])]),De,Object(i["f"])("div",Pe,[(Object(i["t"])(!0),Object(i["e"])(i["a"],null,Object(i["x"])(o.data.skills,(function(e,t){return Object(i["t"])(),Object(i["e"])("div",{key:t,class:"col-md-6 wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},[Object(i["f"])("p",Ee,[Object(i["h"])(Object(i["A"])(e.tech),1),Object(i["f"])("span",Fe,Object(i["A"])(e.level),1)]),Object(i["f"])("div",Te,[Object(i["f"])("div",{class:"progress-bar",role:"progressbar",style:Object(i["p"])("width:".concat(e.bar,"%;").concat(e.bar>80?"background-color:red":"")),"aria-valuenow":e.bar.toString(),"aria-valuemin":"0","aria-valuemax":"100"},null,12,Ue)])])})),128))]),Se])])}var qe={name:"resume",exp:"experience",skill:"skills",computed:{data:function(){return{resume:this.$store.state[this.$options.name].data,experience:this.$store.state[this.$options.exp].data,skills:this.$store.state[this.$options.skill].data}}}};const He=o()(qe,[["render",Ce]]);var Me=He,Ve={id:"services",class:"section bg-light"},Le={class:"container"},$e=Object(i["f"])("p",{class:"text-center mb-2 wow fadeInUp",style:{visibility:"visible"}},[Object(i["f"])("span",{class:"bg-primary text-dark px-2"},"What I Do?")],-1),Ge=Object(i["f"])("h2",{class:"text-10 fw-600 text-center mb-5 wow fadeInUp",style:{visibility:"visible"}}," How I can help your next project ",-1),_e={class:"row gy-5 mt-5"},Re={class:"featured-box text-center px-md-4"},We={class:"featured-box-icon text-primary text-13"},Be={class:"text-6 fw-600 mb-3"},Je=["innerHTML"];function Ne(e,t,a,n,s,o){return Object(i["t"])(),Object(i["e"])("section",Ve,[Object(i["f"])("div",Le,[$e,Ge,Object(i["f"])("div",_e,[(Object(i["t"])(!0),Object(i["e"])(i["a"],null,Object(i["x"])(o.data,(function(e,t){return Object(i["t"])(),Object(i["e"])("div",{key:t,class:"col-sm-6 col-lg-4 wow fadeInUp",style:{visibility:"visible"}},[Object(i["f"])("div",Re,[Object(i["f"])("div",We,[Object(i["f"])("i",{class:Object(i["o"])(e.svg)},null,2)]),Object(i["f"])("h3",Be,Object(i["A"])(e.name),1),Object(i["f"])("p",{class:"text-muted mb-0",innerHTML:e.info},null,8,Je)])])})),128))])])])}var Ye={name:"services",computed:{data:function(){return this.$store.state[this.$options.name].data}}};const Qe=o()(Ye,[["render",Ne]]);var Xe=Qe,ze={class:"hero-wrap"},Ke=Object(i["f"])("div",{class:"hero-mask opacity-8 bg-dark"},null,-1),Ze=Object(i["f"])("div",{class:"hero-content section"},[Object(i["f"])("div",{class:"container text-center py-5 wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},[Object(i["f"])("h2",{class:"text-10 fw-600 text-white mb-5"},"Interested in working with me?"),Object(i["f"])("a",{href:"https://api.whatsapp.com/send?phone=2348104031837&text=Hey%20Theodore%2C%20I%20have%20a%20Job%20for%20you.%20",target:"blank",class:"btn btn-primary rounded-0",style:{visibility:"visible","animation-delay":"1s","animation-name":"none"}},"Hire Me!")])],-1);function et(e,t,a,n,s,o){return Object(i["t"])(),Object(i["e"])("section",null,[Object(i["f"])("div",ze,[Ke,Object(i["f"])("div",{class:"hero-bg parallax",style:Object(i["p"])("background-image: url('../images/intro-bg-2.jpg'); background-size: cover; background-repeat: no-repeat; background-attachment: fixed; background-position: center 1780.38px;")},null,4),Ze])])}var tt={name:"hero-component"};const at=o()(tt,[["render",et]]);var it=at,nt={id:"faq",class:"section bg-light"},st={class:"container"},ot={class:"row gy-5"},ct={class:"col-lg-6 order-1 order-lg-0 wow fadeInUp",style:{"animation-name":"none"}},lt=Object(i["f"])("p",{class:"text-center text-lg-start mb-2"},[Object(i["f"])("span",{class:"bg-primary text-dark px-2"},"FAQ")],-1),rt=Object(i["f"])("h2",{class:"text-10 fw-600 text-center text-lg-start mb-5"},"Have any questions?",-1),dt={class:"accordion accordion-flush",id:"faqTopics"},bt=Object(i["f"])("div",{class:"col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 wow fadeIn","data-wow-delay":"1s",style:{"animation-delay":"1s","animation-name":"none"}},[Object(i["f"])("img",{class:"img-fluid",src:"images/faq.png",title:"FAQ",alt:"faq"})],-1);function mt(e,t,a,n,s,o){var c=Object(i["y"])("faq-item");return Object(i["t"])(),Object(i["e"])("section",nt,[Object(i["f"])("div",st,[Object(i["f"])("div",ot,[Object(i["f"])("div",ct,[lt,rt,Object(i["f"])("div",dt,[(Object(i["t"])(!0),Object(i["e"])(i["a"],null,Object(i["x"])(o.data,(function(e,t){return Object(i["t"])(),Object(i["d"])(c,{key:t,faq:e,idx:t},null,8,["faq","idx"])})),128))])]),bt])])])}var ft={class:"accordion-item"},pt=["id"],ut=["data-bs-target","aria-controls"],gt=["id","aria-labelledby"],vt={class:"accordion-body"};function jt(e,t,a,n,s,o){return Object(i["t"])(),Object(i["e"])("div",ft,[Object(i["f"])("h2",{class:"accordion-header",id:"flush-headingOne".concat(a.idx)},[Object(i["f"])("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne".concat(a.idx),"aria-expanded":"false","aria-controls":"flush-collapseOne".concat(a.idx)},Object(i["A"])(a.faq.question),9,ut)],8,pt),Object(i["f"])("div",{id:"flush-collapseOne".concat(a.idx),class:Object(i["o"])(["accordion-collapse collapse",a.faq.expanded?"show":""]),"aria-labelledby":"flush-headingOne".concat(a.idx),"data-bs-parent":"#faqTopics"},[Object(i["f"])("div",vt,Object(i["A"])(a.faq.answer),1)],10,gt)])}var ht={name:"faqItem",props:["faq","idx"]};const Ot=o()(ht,[["render",jt]]);var yt=Ot,wt={components:{FaqItem:yt},name:"faq",computed:{data:function(){return this.$store.state[this.$options.name].data}}};const xt=o()(wt,[["render",mt]]);var kt=xt,It={id:"testimonial",class:"section",style:{"background-color":"#2d4051"}},At={class:"container"},Dt=Object(i["f"])("p",{class:"text-center mb-2 wow fadeIn",style:{visibility:"visible","animation-name":"none"}},[Object(i["f"])("span",{class:"bg-primary text-dark px-2"},"Client Speak")],-1),Pt=Object(i["f"])("h2",{class:"text-10 fw-600 text-white text-center mb-5 wow fadeIn",style:{visibility:"visible","animation-name":"none"}},"What Some of my Clients Say",-1),Et={class:"row"},Ft={class:"col-lg-9 mx-auto wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},Tt={class:"owl-carousel owl-theme owl-light owl-loaded owl-drag","data-autoplay":"true","data-loop":"true","data-nav":"true","data-margin":"30","data-slideby":"1","data-stagepadding":"5","data-items-xs":"1","data-items-sm":"1","data-items-md":"1","data-items-lg":"1"},Ut={class:"owl-stage-outer"},St={class:"owl-stage",style:{transform:"translate3d(-2148px, 0px, 0px)",transition:"all 0.25s ease 0s",width:"5738px","padding-left":"5px","padding-right":"5px"}},Ct={class:"item text-center px-5"},qt=Object(i["f"])("span",{class:"text-9 text-primary"},[Object(i["f"])("i",{class:"fa fa-quote-start"})],-1),Ht={class:"text-5 text-white"},Mt=["src"],Vt={class:"d-block text-3 fw-500 text-white"},Lt={class:"text-light"},$t=Object(i["f"])("div",{class:"owl-nav"},[Object(i["f"])("button",{type:"button",role:"presentation",class:"owl-prev"},[Object(i["f"])("i",{class:"fa fa-chevron-left"})]),Object(i["f"])("button",{type:"button",role:"presentation",class:"owl-next"},[Object(i["f"])("i",{class:"fa fa-chevron-right"})])],-1);function Gt(e,t,a,n,s,o){return Object(i["t"])(),Object(i["e"])("section",It,[Object(i["f"])("div",At,[Dt,Pt,Object(i["f"])("div",Et,[Object(i["f"])("div",Ft,[Object(i["f"])("div",Tt,[Object(i["f"])("div",Ut,[Object(i["f"])("div",St,[(Object(i["t"])(!0),Object(i["e"])(i["a"],null,Object(i["x"])(o.data,(function(e,t){return Object(i["t"])(),Object(i["e"])("div",{key:t,class:"owl-item active",style:{width:"686px","margin-right":"30px"}},[Object(i["f"])("div",Ct,[qt,Object(i["f"])("p",Ht,Object(i["A"])(e.comment),1),Object(i["f"])("img",{class:"img-fluid d-inline-block w-auto rounded-circle shadow",src:e.picture,style:{height:"3rem",width:"3rem"}},null,8,Mt),Object(i["f"])("strong",Vt,Object(i["A"])(e.name),1),Object(i["f"])("span",Lt,Object(i["A"])(e.company),1)])])})),128))])]),$t])])])])])}var _t={name:"testimonial",computed:{data:function(){return this.$store.state[this.$options.name].data}}};const Rt=o()(_t,[["render",Gt]]);var Wt=Rt,Bt={id:"contact",class:"section bg-primary"},Jt={class:"container"},Nt={class:"col-lg-5 text-center text-lg-start wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},Yt=Object(i["f"])("h2",{class:"text-10 fw-600 mb-5"},"Let's get in touch",-1),Qt=Object(i["f"])("p",{class:"text-5 mb-5"},"I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.",-1),Xt=Object(i["f"])("h3",{class:"text-5 fw-600"},"Living In:",-1),zt={class:"text-4"},Kt=Object(i["f"])("h3",{class:"text-5 fw-600"},"Call:",-1),Zt={class:"text-4"},ea={class:"social-icons social-icons-lg justify-content-center justify-content-lg-start mt-5"},ta={class:"social-icons-facebook"},aa=["href"],ia=Object(i["f"])("i",{class:"fab fa-facebook"},null,-1),na=[ia],sa={class:"social-icons-instagram"},oa=["href"],ca=Object(i["f"])("i",{class:"fab fa-instagram"},null,-1),la=[ca],ra={class:"social-icons-github"},da=["href"],ba=Object(i["f"])("i",{class:"fab fa-github"},null,-1),ma=[ba],fa=Object(i["f"])("div",{class:"col-lg-6 ms-auto mt-5 mt-lg-0 wow fadeInUp","data-wow-delay":"0.3s",style:{visibility:"visible","animation-delay":"0.3s","animation-name":"none"}},[Object(i["f"])("h2",{class:"text-10 fw-600 text-center text-lg-start mb-5"},"Estimate your Project?"),Object(i["f"])("form",{class:"form-border",action:"https://formspree.io/f/mpzbowbk",method:"POST"},[Object(i["f"])("div",{class:"row g-4"},[Object(i["f"])("div",{class:"col-12"},[Object(i["f"])("label",{class:"form-label",for:"name"},"What is Your Name:"),Object(i["f"])("input",{id:"name",name:"name",type:"text",class:"form-control py-1",required:""})]),Object(i["f"])("div",{class:"col-12"},[Object(i["f"])("label",{class:"form-label",for:"email"},"Your Email Address:"),Object(i["f"])("input",{id:"email",name:"email",type:"email",class:"form-control py-1",required:""})]),Object(i["f"])("div",{class:"col-12"},[Object(i["f"])("label",{class:"form-label",for:"form-message"},"How can I Help you?:"),Object(i["f"])("textarea",{id:"form-message",name:"form-message",class:"form-control py-1",rows:"4",required:""})]),Object(i["f"])("div",{class:"col-12 text-center text-lg-start"},[Object(i["f"])("button",{class:"btn btn-dark rounded-0",type:"submit"},[Object(i["h"])("Send "),Object(i["f"])("span",{class:"ms-3"},[Object(i["f"])("i",{class:"fas fa-arrow-right"})])])])])])],-1);function pa(e,t,a,n,s,o){return Object(i["t"])(),Object(i["e"])("section",Bt,[Object(i["f"])("div",Jt,[(Object(i["t"])(!0),Object(i["e"])(i["a"],null,Object(i["x"])(o.data.contact,(function(e,t){return Object(i["t"])(),Object(i["e"])("div",{key:t,class:"row"},[Object(i["f"])("div",Nt,[Yt,Qt,Xt,Object(i["f"])("address",zt,Object(i["A"])(e.city),1),Kt,Object(i["f"])("p",Zt,Object(i["A"])(e.phone),1),Object(i["f"])("ul",ea,[Object(i["f"])("li",ta,[Object(i["f"])("a",{"data-bs-toggle":"tooltip",href:e.facebook,target:"_blank",title:"","data-bs-original-title":"Facebook"},na,8,aa)]),Object(i["f"])("li",sa,[Object(i["f"])("a",{"data-bs-toggle":"tooltip",href:e.instagram,target:"_blank",title:"","data-bs-original-title":"Instagram"},la,8,oa)]),Object(i["f"])("li",ra,[Object(i["f"])("a",{"data-bs-toggle":"tooltip",href:e.git,target:"_blank",title:"","data-bs-original-title":"GitHub"},ma,8,da)])])]),fa])})),128))])])}var ua={name:"contact",computed:{data:function(){return{contact:this.$store.state[this.$options.name].data}}}};const ga=o()(ua,[["render",pa]]);var va=ga,ja={id:"footer",class:"section bg-dark text-white"},ha=Object(i["g"])('<div class="container"><div class="row"><div class="col-lg-6 text-center text-lg-start wow fadeInUp" style="visibility:visible;animation-name:none;"><p class="mb-2 mb-lg-0">Copyright © 2022 <a class="fw-600" href="#">Theodore Imonigie</a>. All Rights Reserved.</p></div></div></div>',1),Oa=[ha];function ya(e,t,a,n,s,o){return Object(i["t"])(),Object(i["e"])("footer",ja,Oa)}var wa={name:"footer-component"};const xa=o()(wa,[["render",ya]]);var ka=xa,Ia={id:"styles-switcher",class:"right"},Aa=Object(i["f"])("h2",{class:"text-3 fw-600"},"Color Switcher",-1),Da=Object(i["f"])("hr",null,null,-1),Pa=["data-path","data-bs-original-title","aria-label"],Ea=Object(i["f"])("button",{class:"btn switcher-toggle"},[Object(i["f"])("i",{class:"fas fa-cog"})],-1);function Fa(e,t,a,n,s,o){return Object(i["t"])(),Object(i["e"])("div",null,[Object(i["f"])("div",Ia,[Aa,Da,(Object(i["t"])(!0),Object(i["e"])(i["a"],null,Object(i["x"])(o.data,(function(e,t){return Object(i["t"])(),Object(i["e"])("ul",{key:t},[Object(i["f"])("li",{class:Object(i["o"])(e.class),"data-bs-toggle":"tooltip",title:"","data-path":e.dataPath,"data-bs-original-title":e.color,"aria-label":e.color},null,10,Pa)])})),128)),Ea])])}var Ta={name:"themeSwitcher",computed:{data:function(){return this.$store.state[this.$options.name].data}}};const Ua=o()(Ta,[["render",Fa]]);var Sa=Ua,Ca={components:{FooterComponent:ka,HeroComponent:it,Contact:va,Testimonial:Wt,Resume:Me,Intro:D,About:re,Services:Xe,Faq:kt,HeaderComponent:C,ThemeSwitcher:Sa},mounted:function(){var e=document.createElement("script");e.type="text/javascript",e.src="../../js/theme.js",e.defer,e.async,document.body.appendChild(e)}};const qa=o()(Ca,[["render",p]]);var Ha=qa,Ma=[{path:"/",name:"Index",component:Ha}],Va=Object(d["a"])({history:Object(d["b"])("/"),routes:Ma}),La=Va,$a=a("5502"),Ga={state:{data:[{name:"Web Development",svg:"fas fa-code",info:"\n        <b>Frontend & Backend </b> <br>\n        Javascript, ES6, Vue-Js, Node Js, Quasar, php , Laravel\n        "},{name:"Mobile Development",svg:"fas fa-mobile",info:"\n        <b>Frontend & Backend </b> <br>\n        Flutter, Dart, Javascript, Quasar, Node js\n        "},{name:"Digital Design",svg:"fas fa-pen-nib",info:"\n        <b>UI/UX Design & Graphics Design </b> <br>\n        Figma, XD, Adobe Illustrator, Adobe Photoshop\n        "},{name:"Video Editing",svg:"fas fa-video",info:"\n        Adobe Premiere Pro,\n        Adobe After Effects,\n        Adobe Media Encoder,\n        "},{name:"RPA & BPA",svg:"fas fa-robot",info:"UiPATH and\n          Process Maker"},{name:"Google Addon and Chrome Extension Developme",svg:"fas fa-robot",info:"VBA script , Ms Excel , Google Script , Google Sheet"}]},getters:{},mutations:{},actions:{}},_a={state:{data:{name:"Theodore Imonigie",info:"A <b>Software Developer</b>  with <b>Four(4)</b> years experience, a <b>Video Editor</b>  with <b>Six(6)</b> years experience, \n          and a <b>Designer</b> with  <b>Nine(9)</b> years experience. Undoubtedly \n          looking to leverage my extensive knowledge and experience into an active field in ICT \n          basically offering my unique expertise in Tech & Aesthetics. <b> A very creative, moral and \n          open personality with vast knowledge in several IT fields.</b>",email:"theodoreimongie@gmail.com",dob:"28 July, 1997",city:"Lagos State, Nigeria"}},getters:{},mutations:{},actions:{}},Ra={state:{data:[{comment:"“Theodore Imonigie Is the real deal.. \n            He has all these things and more and I seen him code on \n            TeamViewer live which means he is the only person willing \n            to pass a simple O-Auth test”",picture:"images/client-sm-2.jpg",name:"Stormy Chase Forrester",company:"Facebook"},{comment:'“Best developer, helped me without any issue, very smart, \n        repair all my errors 100% recommended"',name:"raluca1ss",company:"Fiverr"},{comment:"“He has exceptional communication and full-stack development skills.”",picture:"images/client-sm-1.jpg",name:"wikryb1",company:"Fiverr"},{comment:"“Quick to respond, determined to help,\n         very friendly, Highly recommend!.”",picture:"images/client-sm-2.jpg",name:"threesixtypunk",company:"Fiverr"},{comment:"“I was conflicted between react or vue but very glad I chose Vue & Theodore!!!!\n        Good job at explaining things and SUPER KNOWLEDGEABLE! Can do things I thought would be hard to integrate.\n        Also knows firebase, apis, routing and more which is great. 10/10 recommended, especially if you're\n        looking for long term tutoring.”",picture:"images/client-sm-4.jpg",name:"carolinedelcarm",company:"Fiverr"},{comment:"“Very proactive developer that use initiative.\n        Follows best practice in code. Excellent full-stack developer.”",picture:"images/client-sm-3.jpg",name:"hordansogig",company:"Fiverr"},{comment:"“He is a very excellent laravel and Vue.js developer. He's \n        delivery is explanatory. I already have confident that he will \n        deliver an excellent work.”",picture:"images/client-sm-1.jpg",name:"Victor4959",company:"Fiverr"},{comment:"“Very happy to collab with theodore_mca, \n        He delivered work as descripted!”",picture:"images/client-sm-2.jpg",name:"bossanniels",company:"Fiverr"}]},getters:{},mutations:{},actions:{}},Wa={state:{data:[{name:"Bachelor of Engineering",info:"Electrical & Electronics Engineering",college:"Federal University Of Technology"},{name:"Software Engineering",info:"Full-Stack Web Development",college:"FOFX ACADEMY"},{name:"Robotic Process Automation",info:"RPA Development",college:"FOFX ACADEMY"}]},getters:{},mutations:{},actions:{}},Ba={state:{data:[{course:"Software Engineer ",duration:"2022 - till date",company:"Perizer/Calen360 LLC"},{course:"Flutter, Google Addon, Vue js Developer ",duration:"Aug 2020 - 2022",company:"Hordanso LLC"},{course:"Vue js Developer",duration:"2020",company:"Styliest"},{course:"Creative Director/Head Coach",duration:"2020",company:"Avatech Academy"},{course:"Graphics Design Director",duration:"2018",company:"Talcube"},{course:"Video Editor/ Graphic Designer",duration:"2017 - 2018 ",company:"GAL LTD"}]},getters:{},mutations:{},actions:{}},Ja={state:{data:[{tech:"Flutter, Dart",bar:85,level:"85%"},{tech:"Quasar, Vue js, Javascript",bar:85,level:"85%"},{tech:"Node js, Express js,  Javascript",bar:80,level:"70%"},{tech:"Laravel, php",bar:65,level:"65%"},{tech:"Adobe Premiere Pro",bar:90,level:"90%"},{tech:"Adobe Affect Effect",bar:80,level:"80%"},{tech:"Adobe Illustrator",bar:150,level:"150%"},{tech:"Figma",bar:85,level:"85%"},{tech:"Adobe XD",bar:70,level:"70%"},{tech:"Adobe Photoshop",bar:150,level:"150%"},{tech:"MicroSoft Excel VBA Programing",bar:70,level:"70%"},{tech:"Arduino / iOT",bar:85,level:"85%"}]},getters:{},mutations:{},actions:{}},Na={state:{data:[{name:"XCode Tech UI Design",video:"https://youtube.com/embed/fyc7wdOdqro",category:"Category",link:"ajax/portfolio-ajax-project-4.html",tag:"ui"},{name:"Tracker App",image:"images/tracker.jpg",category:"UI Design",link:"ajax/portfolio-ajax-project-1.html",tag:"ui"},{name:"Web Calculator",video:"https://youtube.com/embed/GKu1Iq9XEmI",category:"Category",tag:"web-dev"},{name:"tApp UI Design",image:"images/project-5.jpg",category:"UI Design",link:"ajax/portfolio-ajax-project-4.html",tag:"video",video:"https://youtube.com/embed/5r9QYhy69e0"}]},getters:{},mutations:{},actions:{}},Ya={state:{data:[{name:"*",title:"All"},{name:".ui",title:"UI"},{name:".web-dev",title:"Web dev"},{name:".flutter-dev",title:"Flutter dev"},{name:".vimeo",title:"Vimeo Videos"}]},getters:{},mutations:{},actions:{}},Qa={state:{data:[{question:"How long does it take to build a website?",answer:"\n            Approximately, it takes 6 to 10 weeks to build a website from \n            start to finish, provided I have all your information for production. \n            My full web design process is broken down here. Generally speaking, \n            Your website will only take a long time if I'll be waiting for text and images from you",expanded:!0},{question:"What will you need from me?",answer:"\n          It really depends on what type of website you want. \n          We’ll be able to discuss this on our discovery call before we start working together. \n          Depending on which package we agree on we could need…\n          \n          Images of you and your team,\n          Images of your workplace,\n          Profiles.\n          Contents for your website e.g. text, PDFs e.t.c,\n          Any Videos you would like to add,\n          Login details to your existing website,\n          Some of this might already be on the existing website, \n          in which case it can be transferred over to your new site.",expanded:!1},{question:"What if I don’t like the website?",answer:"\n          You’re in luck. I offer a risk-free guarantee. \n          Before I build your new website, I’ll design a mockup of your homepage. \n          I’ll design a layout in Figma first, that way you’ll get to see my \n          initial designs within approximately ten days. This is your opportunity to give me \n          feedback and if you really don’t like it, you don’t have to move forward. Best part is, \n          this won’t cost you anything.",expanded:!1}]},getters:{},mutations:{},actions:{}},Xa={state:{data:[{class:"cyan",dataPath:"css/color-cyan.css",color:"Cyan"},{class:"spring-green",dataPath:"css/color-spring-green.css",color:"Spring Green"},{class:"green-yellow",dataPath:"css/color-green-yellow.css",color:"Green Yellow"},{class:"lime-punch",dataPath:"css/color-lime-punch.css",color:"Lime Punch"},{class:"violet",dataPath:"css/color-violet.css",color:"Violet"},{class:"orange",dataPath:"css/color-orange.css",color:"Orange"},{class:"pale-golden-rod",dataPath:"css/color-pale-golden-rod.css",color:"Pale Golden Rod"},{class:"yellow",dataPath:"css/color-yellow.css",color:"Yellow"}]},getters:{},mutations:{},actions:{}},za={state:{data:[{svg:"fas fa-desktop",comment:"I enjoy discussing new projects and design challenges. \n            Please share as much info, as possible so we can get the most out of our first catch-up.",twitter:"",facebook:"",instagram:"",git:"https://github.com/theodoremca",dribbble:"",phone:"+2349049460816",city:"Lagos, Nigeria"}]},getters:{},mutations:{},actions:{}},Ka=Object($a["a"])({namespace:!0,state:{},mutations:{},actions:{},modules:{services:Ga,about:_a,testimonial:Ra,resume:Wa,experience:Ba,skills:Ja,portfolio:Na,portfolioTags:Ya,faq:Qa,themeSwitcher:Xa,contact:za}});Object(i["c"])(r).use(Ka).use(La).mount("#app")},"62e7":function(e,t,a){},b6b4:function(e,t,a){"use strict";a("62e7")}});
//# sourceMappingURL=app.cfb3d269.js.map