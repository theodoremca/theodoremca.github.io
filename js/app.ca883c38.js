(function(e){function t(t){for(var i,o,c=t[0],l=t[1],r=t[2],b=0,m=[];b<c.length;b++)o=c[b],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,r||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={app:0},s=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var r=0;r<c.length;r++)t(c[r]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("7a23");function n(e,t){var a=Object(i["z"])("router-view");return Object(i["u"])(),Object(i["d"])(a)}a("b6b4");var s=a("6b0d"),o=a.n(s);const c={},l=o()(c,[["render",n]]);var r=l,d=a("6c02"),b={id:"main-wrapper"},m={id:"content",role:"main"},g={id:"styles-switcher"};function p(e,t,a,n,s,o){var c=Object(i["z"])("header-component"),l=Object(i["z"])("theme-switcher"),r=Object(i["z"])("intro"),d=Object(i["z"])("about"),p=Object(i["z"])("services"),u=Object(i["z"])("resume"),f=Object(i["z"])("portfolio"),j=Object(i["z"])("hero-component"),v=Object(i["z"])("faq"),O=Object(i["z"])("testimonial"),h=Object(i["z"])("contact"),y=Object(i["z"])("footer-component");return Object(i["u"])(),Object(i["f"])("div",b,[Object(i["j"])(c),Object(i["g"])("div",m,[Object(i["g"])("div",g,[Object(i["j"])(l)]),Object(i["j"])(r),Object(i["j"])(d),Object(i["j"])(p),Object(i["j"])(u),Object(i["j"])(f),Object(i["j"])(j),Object(i["j"])(v),Object(i["j"])(O),Object(i["j"])(h)]),Object(i["j"])(y)])}var u={id:"home",class:"bg-primary d-flex fullscreen position-relative py-5"},f={class:"container my-auto py-4"},j={class:"row"},v={class:"col-lg-7 text-center text-lg-start align-self-center order-1 order-lg-0 wow fadeIn",style:{visibility:"visible"}},O=Object(i["g"])("h1",{class:"text-12 fw-300 mb-0 text-uppercase"}," Hi, I'm a Freelancer ",-1),h={class:"typed-strings",style:{display:"none"}},y=Object(i["h"])('<h2 class="text-21 fw-600 text-uppercase mb-0 ms-n1"><span class="typed">D</span><span class="typed-cursor">|</span></h2><p class="text-5">Nigeria.</p><a href="#portfolio" class="btn btn-dark rounded-0 mt-3">View My Works</a><a href="#contact" class="btn btn-link text-dark mt-3">Contact Me<span class="text-4 ms-2"><i class="far fa-arrow-alt-circle-down"></i></span></a>',4),w=Object(i["g"])("div",{class:"col-lg-5 text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1"},[Object(i["g"])("div",{class:"bg-light rounded-pill d-inline-block p-3 shadow-lg wow zoomIn",style:{visibility:"visible"}},[Object(i["g"])("img",{class:"img-fluid rounded-pill d-block",src:"images/Theodore_img.jpg",title:"I'm Theodore",alt:""})])],-1),x=Object(i["g"])("a",{href:"#about",class:"scroll-down-arrow text-dark smooth-scroll"},[Object(i["g"])("span",{class:"animated"},[Object(i["g"])("i",{class:"fas fa-arrow-down"})])],-1);function k(e,t,a,n,s,o){return Object(i["u"])(),Object(i["f"])("section",u,[Object(i["g"])("div",f,[Object(i["g"])("div",j,[Object(i["g"])("div",v,[O,Object(i["g"])("div",h,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(e.professions,(function(e,t){return Object(i["u"])(),Object(i["f"])("p",{key:t},Object(i["B"])(e),1)})),128))]),y]),w])]),x])}var I={name:"intro",data:function(){return{professions:["Developer","Developer","Designer","Developer","Video Editor","Developer"]}}};const A=o()(I,[["render",k]]);var D=A,P={id:"header",class:"sticky-top"},U=Object(i["h"])('<nav class="primary-menu navbar navbar-expand-none navbar-overlay navbar-overlay-dark bg-transparent border-bottom-0 text-5 fw-600 sticky-on-top"><div class="container"><a class="logo" href="/" title="Theodore"><p class="text-4">THEODORE</p></a><div class="text-3 ms-auto me-2"><span class="text-4 me-2"><i class="fas fa-phone"></i></span>+2349049460816 </div><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"><span></span><span></span><span></span></button><div id="header-nav" class="collapse navbar-collapse"><div class="d-flex flex-column h-100 align-items-center justify-content-center"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link smooth-scroll" href="#home">Home</a></li><li class="nav-item"><a class="nav-link smooth-scroll" href="#about">About Me</a></li><li class="nav-item"><a class="nav-link smooth-scroll" href="#services">What I Do</a></li><li class="nav-item"><a class="nav-link smooth-scroll active" href="#resume">Resume</a></li><li class="nav-item"><a class="nav-link smooth-scroll" href="#portfolio">Portfolio</a></li><li class="nav-item"><a class="nav-link smooth-scroll" href="#faq">FAQ</a></li><li class="nav-item"><a class="nav-link smooth-scroll" href="#testimonial">Client Speak</a></li><li class="nav-item"><a class="nav-link smooth-scroll" href="#contact">Contact Me</a></li></ul><ul class="social-icons social-icons-light social-icons-lg social-icons-light d-inline-flex mt-4"><li class="social-icons-twitter"><a data-bs-toggle="tooltip" href="https://twitter.com/theodoremca" target="_blank" title data-bs-original-title="Twitter"><i class="fab fa-twitter"></i></a></li><li class="social-icons-instagram"><a data-bs-toggle="tooltip" href="http://www.instagram.com/" target="_blank" title data-bs-original-title="Instagram"><i class="fab fa-instagram"></i></a></li><li class="social-icons-linkedin"><a data-bs-toggle="tooltip" href="http://www.linkedin.com/" target="_blank" title data-bs-original-title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li><li class="social-icons-dribbble"><a data-bs-toggle="tooltip" href="http://www.dribbble.com/harnishdesign/" target="_blank" title data-bs-original-title="Dribbble"><i class="fab fa-dribbble"></i></a></li></ul></div></div></div></nav>',1),T=[U];function B(e,t,a,n,s,o){return Object(i["u"])(),Object(i["f"])("header",P,T)}var E={name:"header-component"};const F=o()(E,[["render",B]]);var S=F,q=(a("b0c0"),{id:"about",class:"section"}),C={class:"container"},H=Object(i["g"])("p",{class:"text-center mb-2 wow fadeInUp",style:{visibility:"visible"}},[Object(i["g"])("span",{class:"bg-primary text-dark px-2"},"About Me")],-1),M=Object(i["g"])("h2",{class:"text-10 fw-600 text-center mb-5 wow fadeInUp",style:{visibility:"visible"}},"Know Me More",-1),V={class:"row"},$={class:"col-lg-8 text-center text-lg-start wow fadeInUp",style:{visibility:"visible"}},L={class:"text-8 fw-400 mb-3"},z=Object(i["i"])("Hi, I'm "),G={class:"fw-700 border-bottom border-3 border-primary"},_=["innerHTML"],R=Object(i["h"])('<div class="col-lg-4 mt-4 mt-lg-0 wow fadeInUp" data-wow-delay="0.2s" style="visibility:visible;animation-delay:0.2s;"><div class="featured-box style-4"><div class="featured-box-icon text-25 fw-500 bg-primary rounded-circle"><span class="wow heartBeat" data-wow-delay="1.3s" style="visibility:visible;animation-delay:1.3s;">9 </span></div><h3 class="text-7 wow rubberBand" data-wow-delay="2s" style="visibility:visible;animation-delay:2s;"> Years of <span class="fw-700">Experience</span></h3></div></div>',1),W={class:"row gy-3 mt-4"},J={class:"col-6 col-lg-3 wow fadeInUp",style:{visibility:"visible"}},N=Object(i["g"])("p",{class:"text-muted fw-500 mb-0"},"Name:",-1),Y={class:"text-4 text-dark fw-600 mb-0"},Q={class:"col-6 col-lg-3 wow fadeInUp","data-wow-delay":"0.2s",style:{visibility:"visible","animation-delay":"0.2s"}},X=Object(i["g"])("p",{class:"text-muted fw-500 mb-0"},"Email:",-1),K={class:"text-4 fw-600 mb-0"},Z=["href"],ee={class:"col-6 col-lg-3 wow fadeInUp","data-wow-delay":"0.3s",style:{visibility:"visible","animation-delay":"0.3s"}},te=Object(i["g"])("p",{class:"text-muted fw-500 mb-0"},"Date of birth:",-1),ae={class:"text-4 text-dark fw-600 mb-0"},ie={class:"col-6 col-lg-3 wow fadeInUp","data-wow-delay":"0.4s",style:{visibility:"visible","animation-delay":"0.4s"}},ne=Object(i["g"])("p",{class:"text-muted fw-500 mb-0"},"From:",-1),se={class:"text-4 text-dark fw-600 mb-0"};function oe(e,t,a,n,s,o){return Object(i["u"])(),Object(i["f"])("section",q,[Object(i["g"])("div",C,[H,M,Object(i["g"])("div",V,[Object(i["g"])("div",$,[Object(i["g"])("h2",L,[z,Object(i["g"])("span",G,Object(i["B"])(o.data.name),1)]),Object(i["g"])("p",{class:"text-5",innerHTML:o.data.info},null,8,_)]),R]),Object(i["g"])("div",W,[Object(i["g"])("div",J,[N,Object(i["g"])("p",Y,Object(i["B"])(o.data.name),1)]),Object(i["g"])("div",Q,[X,Object(i["g"])("p",K,[Object(i["g"])("a",{class:"link-dark",href:"mailto:"+o.data.email},Object(i["B"])(o.data.email),9,Z)])]),Object(i["g"])("div",ee,[te,Object(i["g"])("p",ae,Object(i["B"])(o.data.dob),1)]),Object(i["g"])("div",ie,[ne,Object(i["g"])("p",se,Object(i["B"])(o.data.city),1)])])])])}var ce={name:"about",computed:{data:function(){return this.$store.state[this.$options.name].data}}};const le=o()(ce,[["render",oe]]);var re=le,de=(a("9911"),{id:"portfolio",class:"section bg-light"}),be={class:"container"},me=Object(i["g"])("p",{class:"text-center mb-2 wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},[Object(i["g"])("span",{class:"bg-primary text-dark px-2"},"Portfolio")],-1),ge=Object(i["g"])("h2",{class:"text-10 fw-600 text-center mb-5 wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},"Some of my most recent projects",-1),pe={class:"portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-4 wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},ue=["data-filter"],fe={class:"portfolio wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},je={class:"row g-4 mt-3 portfolio-filter",style:{position:"relative",height:"1152px"}},ve={class:"portfolio-box"},Oe={class:"portfolio-img"},he=["src","title"],ye=["src","title"],we={key:2},xe=["src"],ke={class:"portfolio-overlay"},Ie=["href"],Ae={class:"portfolio-overlay-details"},De=Object(i["g"])("p",{class:"text-primary text-8"},[Object(i["g"])("i",{class:"fas fa-file-alt"})],-1),Pe={class:"text-white text-5"},Ue={class:"text-light"};function Te(e,t,a,n,s,o){return Object(i["u"])(),Object(i["f"])("section",de,[Object(i["g"])("div",be,[me,ge,Object(i["g"])("ul",pe,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(o.data,(function(e,t){return Object(i["u"])(),Object(i["f"])("li",{key:t,class:"nav-item"},[Object(i["g"])("a",{"data-filter":e.name,href:"",class:"nav-link rounded-0"},Object(i["B"])(e.title),9,ue)])})),128))]),Object(i["g"])("div",fe,[Object(i["g"])("div",je,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(o.data2,(function(e,t){return Object(i["u"])(),Object(i["f"])("div",{key:t,class:Object(i["p"])(["col-sm-6 col-lg-4","".concat(e.tag)]),style:{position:"absolute",left:"0px",top:"0px"}},[Object(i["g"])("div",ve,[Object(i["g"])("div",Oe,[e.video?(Object(i["u"])(),Object(i["f"])("iframe",{key:0,width:"100%",height:"364",src:e.video,title:e.name,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,he)):Object(i["e"])("",!0),e.video?(Object(i["u"])(),Object(i["f"])("iframe",{key:1,width:"100%",height:"364",src:e.video,title:e.name},null,8,ye)):(Object(i["u"])(),Object(i["f"])("div",we,[Object(i["g"])("img",{class:"img-fluid d-block",src:e.image,alt:""},null,8,xe),Object(i["g"])("div",ke,[Object(i["g"])("a",{class:"popup-ajax stretched-link",href:e.link},null,8,Ie),Object(i["g"])("div",Ae,[De,Object(i["g"])("h5",Pe,Object(i["B"])(e.name),1),Object(i["g"])("span",Ue,Object(i["B"])(e.category),1)])])]))])])],2)})),128))])])])])}var Be={name:"portfolio",folioTag:"portfolioTags",computed:{data:function(){return this.$store.state[this.$options.folioTag].data},data2:function(){return this.$store.state[this.$options.name].data}}};const Ee=o()(Be,[["render",Te]]);var Fe=Ee,Se=(a("99af"),a("d3b7"),a("25f0"),{id:"resume",class:"section"}),qe={class:"container"},Ce=Object(i["g"])("p",{class:"text-center mb-2 wow fadeInUp animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated",style:{visibility:"visible"}},[Object(i["g"])("span",{class:"bg-primary text-dark px-2"},"Resume")],-1),He=Object(i["g"])("h2",{class:"text-10 fw-600 text-center mb-5 wow fadeInUp animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated",style:{visibility:"visible"}},"A summary of My Resume",-1),Me={class:"row g-5 mt-5"},Ve={class:"col-lg-6 wow fadeInUp animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated",style:{visibility:"visible"}},$e=Object(i["g"])("h2",{class:"text-7 fw-600 mb-4 pb-2"},"My Education",-1),Le={class:"text-5"},ze={class:"mb-2"},Ge={class:"text-muted"},_e=Object(i["g"])("hr",{class:"my-4"},null,-1),Re={class:"col-lg-6 wow fadeInUp","data-wow-delay":"0.2s",style:{visibility:"visible","animation-delay":"0.2s","animation-name":"none"}},We=Object(i["g"])("h2",{class:"text-7 fw-600 mb-4 pb-2"},"My Experience",-1),Je={class:"text-5"},Ne={class:"mb-2"},Ye={class:"text-muted"},Qe=Object(i["g"])("hr",{class:"my-4"},null,-1),Xe=Object(i["g"])("h2",{class:"text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},"My Skills",-1),Ke={class:"row gx-5"},Ze={class:"fw-500 text-start mb-2"},et={class:"float-end"},tt={class:"progress progress-sm mb-4"},at=["aria-valuenow"],it=Object(i["g"])("p",{class:"text-center mt-5 wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},[Object(i["g"])("a",{href:"THEODOREcv.pdf",target:"blank",class:"btn btn-outline-dark shadow-none rounded-0"},"Download CV")],-1);function nt(e,t,a,n,s,o){return Object(i["u"])(),Object(i["f"])("section",Se,[Object(i["g"])("div",qe,[Ce,He,Object(i["g"])("div",Me,[Object(i["g"])("div",Ve,[$e,(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(o.data.resume,(function(e,t){return Object(i["u"])(),Object(i["f"])("div",{key:t,class:"border-start border-2 border-primary ps-3"},[Object(i["g"])("h3",Le,Object(i["B"])(e.name),1),Object(i["g"])("p",ze,Object(i["B"])(e.college),1),Object(i["g"])("p",Ge,Object(i["B"])(e.info),1),_e])})),128))]),Object(i["g"])("div",Re,[We,(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(o.data.experience,(function(e,t){return Object(i["u"])(),Object(i["f"])("div",{key:t,class:"border-start border-2 border-primary ps-3"},[Object(i["g"])("h3",Je,Object(i["B"])(e.course),1),Object(i["g"])("p",Ne,Object(i["B"])(e.duration),1),Object(i["g"])("p",Ye,Object(i["B"])(e.company),1),Qe])})),128))])]),Xe,Object(i["g"])("div",Ke,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(o.data.skills,(function(e,t){return Object(i["u"])(),Object(i["f"])("div",{key:t,class:"col-md-6 wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},[Object(i["g"])("p",Ze,[Object(i["i"])(Object(i["B"])(e.tech),1),Object(i["g"])("span",et,Object(i["B"])(e.level),1)]),Object(i["g"])("div",tt,[Object(i["g"])("div",{class:"progress-bar",role:"progressbar",style:Object(i["q"])("width:".concat(e.bar,"%;").concat(e.bar>80?"background-color:red":"")),"aria-valuenow":e.bar.toString(),"aria-valuemin":"0","aria-valuemax":"100"},null,12,at)])])})),128))]),it])])}var st={name:"resume",exp:"experience",skill:"skills",computed:{data:function(){return{resume:this.$store.state[this.$options.name].data,experience:this.$store.state[this.$options.exp].data,skills:this.$store.state[this.$options.skill].data}}}};const ot=o()(st,[["render",nt]]);var ct=ot,lt={id:"services",class:"section bg-light"},rt={class:"container"},dt=Object(i["g"])("p",{class:"text-center mb-2 wow fadeInUp",style:{visibility:"visible"}},[Object(i["g"])("span",{class:"bg-primary text-dark px-2"},"What I Do?")],-1),bt=Object(i["g"])("h2",{class:"text-10 fw-600 text-center mb-5 wow fadeInUp",style:{visibility:"visible"}}," How I can help your next project ",-1),mt={class:"row gy-5 mt-5"},gt={class:"featured-box text-center px-md-4"},pt={class:"featured-box-icon text-primary text-13"},ut={class:"text-6 fw-600 mb-3"},ft=["innerHTML"];function jt(e,t,a,n,s,o){return Object(i["u"])(),Object(i["f"])("section",lt,[Object(i["g"])("div",rt,[dt,bt,Object(i["g"])("div",mt,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(o.data,(function(e,t){return Object(i["u"])(),Object(i["f"])("div",{key:t,class:"col-sm-6 col-lg-4 wow fadeInUp",style:{visibility:"visible"}},[Object(i["g"])("div",gt,[Object(i["g"])("div",pt,[Object(i["g"])("i",{class:Object(i["p"])(e.svg)},null,2)]),Object(i["g"])("h3",ut,Object(i["B"])(e.name),1),Object(i["g"])("p",{class:"text-muted mb-0",innerHTML:e.info},null,8,ft)])])})),128))])])])}var vt={name:"services",computed:{data:function(){return this.$store.state[this.$options.name].data}}};const Ot=o()(vt,[["render",jt]]);var ht=Ot,yt={class:"hero-wrap"},wt=Object(i["g"])("div",{class:"hero-mask opacity-8 bg-dark"},null,-1),xt=Object(i["g"])("div",{class:"hero-content section"},[Object(i["g"])("div",{class:"container text-center py-5 wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},[Object(i["g"])("h2",{class:"text-10 fw-600 text-white mb-5"},"Interested in working with me?"),Object(i["g"])("a",{href:"https://api.whatsapp.com/send?phone=2348104031837&text=Hey%20Theodore%2C%20I%20have%20a%20Job%20for%20you.%20",target:"blank",class:"btn btn-primary rounded-0",style:{visibility:"visible","animation-delay":"1s","animation-name":"none"}},"Hire Me!")])],-1);function kt(e,t,a,n,s,o){return Object(i["u"])(),Object(i["f"])("section",null,[Object(i["g"])("div",yt,[wt,Object(i["g"])("div",{class:"hero-bg parallax",style:Object(i["q"])("background-image: url('../images/intro-bg-2.jpg'); background-size: cover; background-repeat: no-repeat; background-attachment: fixed; background-position: center 1780.38px;")},null,4),xt])])}var It={name:"hero-component"};const At=o()(It,[["render",kt]]);var Dt=At,Pt={id:"faq",class:"section bg-light"},Ut={class:"container"},Tt={class:"row gy-5"},Bt={class:"col-lg-6 order-1 order-lg-0 wow fadeInUp",style:{"animation-name":"none"}},Et=Object(i["g"])("p",{class:"text-center text-lg-start mb-2"},[Object(i["g"])("span",{class:"bg-primary text-dark px-2"},"FAQ")],-1),Ft=Object(i["g"])("h2",{class:"text-10 fw-600 text-center text-lg-start mb-5"},"Have any questions?",-1),St={class:"accordion accordion-flush",id:"faqTopics"},qt=Object(i["g"])("div",{class:"col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 wow fadeIn","data-wow-delay":"1s",style:{"animation-delay":"1s","animation-name":"none"}},[Object(i["g"])("img",{class:"img-fluid",src:"images/faq.png",title:"FAQ",alt:"faq"})],-1);function Ct(e,t,a,n,s,o){var c=Object(i["z"])("faq-item");return Object(i["u"])(),Object(i["f"])("section",Pt,[Object(i["g"])("div",Ut,[Object(i["g"])("div",Tt,[Object(i["g"])("div",Bt,[Et,Ft,Object(i["g"])("div",St,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(o.data,(function(e,t){return Object(i["u"])(),Object(i["d"])(c,{key:t,faq:e,idx:t},null,8,["faq","idx"])})),128))])]),qt])])])}var Ht={class:"accordion-item"},Mt=["id"],Vt=["data-bs-target","aria-controls"],$t=["id","aria-labelledby"],Lt={class:"accordion-body"};function zt(e,t,a,n,s,o){return Object(i["u"])(),Object(i["f"])("div",Ht,[Object(i["g"])("h2",{class:"accordion-header",id:"flush-headingOne".concat(a.idx)},[Object(i["g"])("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne".concat(a.idx),"aria-expanded":"false","aria-controls":"flush-collapseOne".concat(a.idx)},Object(i["B"])(a.faq.question),9,Vt)],8,Mt),Object(i["g"])("div",{id:"flush-collapseOne".concat(a.idx),class:Object(i["p"])(["accordion-collapse collapse",a.faq.expanded?"show":""]),"aria-labelledby":"flush-headingOne".concat(a.idx),"data-bs-parent":"#faqTopics"},[Object(i["g"])("div",Lt,Object(i["B"])(a.faq.answer),1)],10,$t)])}var Gt={name:"faqItem",props:["faq","idx"]};const _t=o()(Gt,[["render",zt]]);var Rt=_t,Wt={components:{FaqItem:Rt},name:"faq",computed:{data:function(){return this.$store.state[this.$options.name].data}}};const Jt=o()(Wt,[["render",Ct]]);var Nt=Jt,Yt={id:"testimonial",class:"section",style:{"background-color":"#2d4051"}},Qt={class:"container"},Xt=Object(i["g"])("p",{class:"text-center mb-2 wow fadeIn",style:{visibility:"visible","animation-name":"none"}},[Object(i["g"])("span",{class:"bg-primary text-dark px-2"},"Client Speak")],-1),Kt=Object(i["g"])("h2",{class:"text-10 fw-600 text-white text-center mb-5 wow fadeIn",style:{visibility:"visible","animation-name":"none"}},"What Some of my Clients Say",-1),Zt={class:"row"},ea={class:"col-lg-9 mx-auto wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},ta={class:"owl-carousel owl-theme owl-light owl-loaded owl-drag","data-autoplay":"true","data-loop":"true","data-nav":"true","data-margin":"30","data-slideby":"1","data-stagepadding":"5","data-items-xs":"1","data-items-sm":"1","data-items-md":"1","data-items-lg":"1"},aa={class:"owl-stage-outer"},ia={class:"owl-stage",style:{transform:"translate3d(-2148px, 0px, 0px)",transition:"all 0.25s ease 0s",width:"5738px","padding-left":"5px","padding-right":"5px"}},na={class:"item text-center px-5"},sa=Object(i["g"])("span",{class:"text-9 text-primary"},[Object(i["g"])("i",{class:"fa fa-quote-start"})],-1),oa={class:"text-5 text-white"},ca=["src"],la={class:"d-block text-3 fw-500 text-white"},ra={class:"text-light"},da=Object(i["g"])("div",{class:"owl-nav"},[Object(i["g"])("button",{type:"button",role:"presentation",class:"owl-prev"},[Object(i["g"])("i",{class:"fa fa-chevron-left"})]),Object(i["g"])("button",{type:"button",role:"presentation",class:"owl-next"},[Object(i["g"])("i",{class:"fa fa-chevron-right"})])],-1);function ba(e,t,a,n,s,o){return Object(i["u"])(),Object(i["f"])("section",Yt,[Object(i["g"])("div",Qt,[Xt,Kt,Object(i["g"])("div",Zt,[Object(i["g"])("div",ea,[Object(i["g"])("div",ta,[Object(i["g"])("div",aa,[Object(i["g"])("div",ia,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(o.data,(function(e,t){return Object(i["u"])(),Object(i["f"])("div",{key:t,class:"owl-item active",style:{width:"686px","margin-right":"30px"}},[Object(i["g"])("div",na,[sa,Object(i["g"])("p",oa,Object(i["B"])(e.comment),1),Object(i["g"])("img",{class:"img-fluid d-inline-block w-auto rounded-circle shadow",src:e.picture,style:{height:"3rem",width:"3rem"}},null,8,ca),Object(i["g"])("strong",la,Object(i["B"])(e.name),1),Object(i["g"])("span",ra,Object(i["B"])(e.company),1)])])})),128))])]),da])])])])])}var ma={name:"testimonial",computed:{data:function(){return this.$store.state[this.$options.name].data}}};const ga=o()(ma,[["render",ba]]);var pa=ga,ua={id:"contact",class:"section bg-primary"},fa={class:"container"},ja={class:"col-lg-5 text-center text-lg-start wow fadeInUp",style:{visibility:"visible","animation-name":"none"}},va=Object(i["g"])("h2",{class:"text-10 fw-600 mb-5"},"Let's get in touch",-1),Oa=Object(i["g"])("p",{class:"text-5 mb-5"},"I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.",-1),ha=Object(i["g"])("h3",{class:"text-5 fw-600"},"Living In:",-1),ya={class:"text-4"},wa=Object(i["g"])("h3",{class:"text-5 fw-600"},"Call:",-1),xa={class:"text-4"},ka={class:"social-icons social-icons-lg justify-content-center justify-content-lg-start mt-5"},Ia={class:"social-icons-facebook"},Aa=["href"],Da=Object(i["g"])("i",{class:"fab fa-facebook"},null,-1),Pa=[Da],Ua={class:"social-icons-instagram"},Ta=["href"],Ba=Object(i["g"])("i",{class:"fab fa-instagram"},null,-1),Ea=[Ba],Fa={class:"social-icons-github"},Sa=["href"],qa=Object(i["g"])("i",{class:"fab fa-github"},null,-1),Ca=[qa],Ha=Object(i["g"])("div",{class:"col-lg-6 ms-auto mt-5 mt-lg-0 wow fadeInUp","data-wow-delay":"0.3s",style:{visibility:"visible","animation-delay":"0.3s","animation-name":"none"}},[Object(i["g"])("h2",{class:"text-10 fw-600 text-center text-lg-start mb-5"},"Estimate your Project?"),Object(i["g"])("form",{class:"form-border",action:"https://formspree.io/f/mpzbowbk",method:"POST"},[Object(i["g"])("div",{class:"row g-4"},[Object(i["g"])("div",{class:"col-12"},[Object(i["g"])("label",{class:"form-label",for:"name"},"What is Your Name:"),Object(i["g"])("input",{id:"name",name:"name",type:"text",class:"form-control py-1",required:""})]),Object(i["g"])("div",{class:"col-12"},[Object(i["g"])("label",{class:"form-label",for:"email"},"Your Email Address:"),Object(i["g"])("input",{id:"email",name:"email",type:"email",class:"form-control py-1",required:""})]),Object(i["g"])("div",{class:"col-12"},[Object(i["g"])("label",{class:"form-label",for:"form-message"},"How can I Help you?:"),Object(i["g"])("textarea",{id:"form-message",name:"form-message",class:"form-control py-1",rows:"4",required:""})]),Object(i["g"])("div",{class:"col-12 text-center text-lg-start"},[Object(i["g"])("button",{class:"btn btn-dark rounded-0",type:"submit"},[Object(i["i"])("Send "),Object(i["g"])("span",{class:"ms-3"},[Object(i["g"])("i",{class:"fas fa-arrow-right"})])])])])])],-1);function Ma(e,t,a,n,s,o){return Object(i["u"])(),Object(i["f"])("section",ua,[Object(i["g"])("div",fa,[(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(o.data.contact,(function(e,t){return Object(i["u"])(),Object(i["f"])("div",{key:t,class:"row"},[Object(i["g"])("div",ja,[va,Oa,ha,Object(i["g"])("address",ya,Object(i["B"])(e.city),1),wa,Object(i["g"])("p",xa,Object(i["B"])(e.phone),1),Object(i["g"])("ul",ka,[Object(i["g"])("li",Ia,[Object(i["g"])("a",{"data-bs-toggle":"tooltip",href:e.facebook,target:"_blank",title:"","data-bs-original-title":"Facebook"},Pa,8,Aa)]),Object(i["g"])("li",Ua,[Object(i["g"])("a",{"data-bs-toggle":"tooltip",href:e.instagram,target:"_blank",title:"","data-bs-original-title":"Instagram"},Ea,8,Ta)]),Object(i["g"])("li",Fa,[Object(i["g"])("a",{"data-bs-toggle":"tooltip",href:e.git,target:"_blank",title:"","data-bs-original-title":"GitHub"},Ca,8,Sa)])])]),Ha])})),128))])])}var Va={name:"contact",computed:{data:function(){return{contact:this.$store.state[this.$options.name].data}}}};const $a=o()(Va,[["render",Ma]]);var La=$a,za={id:"footer",class:"section bg-dark text-white"},Ga=Object(i["h"])('<div class="container"><div class="row"><div class="col-lg-6 text-center text-lg-start wow fadeInUp" style="visibility:visible;animation-name:none;"><p class="mb-2 mb-lg-0">Copyright © 2022 <a class="fw-600" href="#">Theodore Imonigie</a>. All Rights Reserved.</p></div></div></div>',1),_a=[Ga];function Ra(e,t,a,n,s,o){return Object(i["u"])(),Object(i["f"])("footer",za,_a)}var Wa={name:"footer-component"};const Ja=o()(Wa,[["render",Ra]]);var Na=Ja,Ya={id:"styles-switcher",class:"right"},Qa=Object(i["g"])("h2",{class:"text-3 fw-600"},"Color Switcher",-1),Xa=Object(i["g"])("hr",null,null,-1),Ka=["data-path","data-bs-original-title","aria-label"],Za=Object(i["g"])("button",{class:"btn switcher-toggle"},[Object(i["g"])("i",{class:"fas fa-cog"})],-1);function ei(e,t,a,n,s,o){return Object(i["u"])(),Object(i["f"])("div",null,[Object(i["g"])("div",Ya,[Qa,Xa,(Object(i["u"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(o.data,(function(e,t){return Object(i["u"])(),Object(i["f"])("ul",{key:t},[Object(i["g"])("li",{class:Object(i["p"])(e.class),"data-bs-toggle":"tooltip",title:"","data-path":e.dataPath,"data-bs-original-title":e.color,"aria-label":e.color},null,10,Ka)])})),128)),Za])])}var ti={name:"themeSwitcher",computed:{data:function(){return this.$store.state[this.$options.name].data}}};const ai=o()(ti,[["render",ei]]);var ii=ai,ni={components:{FooterComponent:Na,HeroComponent:Dt,Contact:La,Testimonial:pa,Resume:ct,Intro:D,About:re,Services:ht,Faq:Nt,Portfolio:Fe,HeaderComponent:S,ThemeSwitcher:ii},mounted:function(){var e=document.createElement("script");e.type="text/javascript",e.src="../../js/theme.js",e.defer,e.async,document.body.appendChild(e)}};const si=o()(ni,[["render",p]]);var oi=si,ci=[{path:"/",name:"Index",component:oi}],li=Object(d["a"])({history:Object(d["b"])("/"),routes:ci}),ri=li,di=a("5502"),bi={state:{data:[{name:"Web Development",svg:"fas fa-code",info:"\n        <b>Frontend & Backend </b> <br>\n        Javascript, ES6, Vue-Js, Node Js, Quasar, php , Laravel\n        "},{name:"Mobile Development",svg:"fas fa-mobile",info:"\n        <b>Frontend & Backend </b> <br>\n        Flutter, Dart, Javascript, Quasar, Node js\n        "},{name:"Digital Design",svg:"fas fa-pen-nib",info:"\n        <b>UI/UX Design & Graphics Design </b> <br>\n        Figma, XD, Adobe Illustrator, Adobe Photoshop\n        "},{name:"Video Editing",svg:"fas fa-video",info:"\n        Adobe Premiere Pro,\n        Adobe After Effects,\n        Adobe Media Encoder,\n        "},{name:"RPA & BPA",svg:"fas fa-robot",info:"UiPATH and\n          Process Maker"},{name:"Google Addon and Chrome Extension Developme",svg:"fas fa-robot",info:"VBA script , Ms Excel , Google Script , Google Sheet"}]},getters:{},mutations:{},actions:{}},mi={state:{data:{name:"Theodore Imonigie",info:"A <b>Software Developer</b>  with <b>Four(4)</b> years experience, a <b>Video Editor</b>  with <b>Six(6)</b> years experience, \n          and a <b>Designer</b> with  <b>Nine(9)</b> years experience. Undoubtedly \n          looking to leverage my extensive knowledge and experience into an active field in ICT \n          basically offering my unique expertise in Tech & Aesthetics. <b> A very creative, moral and \n          open personality with vast knowledge in several IT fields.</b>",email:"theodoreimongie@gmail.com",dob:"28 July, 1997",city:"Lagos State, Nigeria"}},getters:{},mutations:{},actions:{}},gi={state:{data:[{comment:"“Theodore Imonigie Is the real deal.. \n            He has all these things and more and I seen him code on \n            TeamViewer live which means he is the only person willing \n            to pass a simple O-Auth test”",picture:"images/client-sm-2.jpg",name:"Stormy Chase Forrester",company:"Facebook"},{comment:'“Best developer, helped me without any issue, very smart, \n        repair all my errors 100% recommended"',name:"raluca1ss",company:"Fiverr"},{comment:"“He has exceptional communication and full-stack development skills.”",picture:"images/client-sm-1.jpg",name:"wikryb1",company:"Fiverr"},{comment:"“Quick to respond, determined to help,\n         very friendly, Highly recommend!.”",picture:"images/client-sm-2.jpg",name:"threesixtypunk",company:"Fiverr"},{comment:"“I was conflicted between react or vue but very glad I chose Vue & Theodore!!!!\n        Good job at explaining things and SUPER KNOWLEDGEABLE! Can do things I thought would be hard to integrate.\n        Also knows firebase, apis, routing and more which is great. 10/10 recommended, especially if you're\n        looking for long term tutoring.”",picture:"images/client-sm-4.jpg",name:"carolinedelcarm",company:"Fiverr"},{comment:"“Very proactive developer that use initiative.\n        Follows best practice in code. Excellent full-stack developer.”",picture:"images/client-sm-3.jpg",name:"hordansogig",company:"Fiverr"},{comment:"“He is a very excellent laravel and Vue.js developer. He's \n        delivery is explanatory. I already have confident that he will \n        deliver an excellent work.”",picture:"images/client-sm-1.jpg",name:"Victor4959",company:"Fiverr"},{comment:"“Very happy to collab with theodore_mca, \n        He delivered work as descripted!”",picture:"images/client-sm-2.jpg",name:"bossanniels",company:"Fiverr"}]},getters:{},mutations:{},actions:{}},pi={state:{data:[{name:"Bachelor of Engineering",info:"Electrical & Electronics Engineering",college:"Federal University Of Technology"},{name:"Software Engineering",info:"Full-Stack Web Development",college:"FOFX ACADEMY"},{name:"Robotic Process Automation",info:"RPA Development",college:"FOFX ACADEMY"}]},getters:{},mutations:{},actions:{}},ui={state:{data:[{course:"Software Engineer ",duration:"2022 - till date",company:"Perizer/Calen360 LLC"},{course:"Flutter, Google Addon, Vue js Developer ",duration:"Aug 2020 - 2022",company:"Hordanso LLC"},{course:"Vue js Developer",duration:"2020",company:"Styliest"},{course:"Creative Director/Head Coach",duration:"2020",company:"Avatech Academy"},{course:"Graphics Design Director",duration:"2018",company:"Talcube"},{course:"Video Editor/ Graphic Designer",duration:"2017 - 2018 ",company:"GAL LTD"}]},getters:{},mutations:{},actions:{}},fi={state:{data:[{tech:"Flutter, Dart",bar:85,level:"85%"},{tech:"Quasar, Vue js, Javascript",bar:85,level:"85%"},{tech:"Node js, Express js,  Javascript",bar:80,level:"70%"},{tech:"Laravel, php",bar:65,level:"65%"},{tech:"Adobe Premiere Pro",bar:90,level:"90%"},{tech:"Adobe Affect Effect",bar:80,level:"80%"},{tech:"Adobe Illustrator",bar:150,level:"150%"},{tech:"Figma",bar:85,level:"85%"},{tech:"Adobe XD",bar:70,level:"70%"},{tech:"Adobe Photoshop",bar:150,level:"150%"},{tech:"MicroSoft Excel VBA Programing",bar:70,level:"70%"},{tech:"Arduino / iOT",bar:85,level:"85%"}]},getters:{},mutations:{},actions:{}},ji={state:{data:[{name:"XCode Tech UI Design",video:"https://youtube.com/embed/fyc7wdOdqro",category:"Category",link:"ajax/portfolio-ajax-project-4.html",tag:"ui"},{name:"Tracker App",image:"images/tracker.jpg",category:"UI Design",link:"ajax/portfolio-ajax-project-1.html",tag:"ui"},{name:"Web Calculator",video:"https://youtube.com/embed/GKu1Iq9XEmI",category:"Category",tag:"web-dev"},{name:"tApp UI Design",image:"images/project-5.jpg",category:"UI Design",link:"ajax/portfolio-ajax-project-4.html",tag:"video",video:"https://youtube.com/embed/5r9QYhy69e0"}]},getters:{},mutations:{},actions:{}},vi={state:{data:[{name:"*",title:"All"},{name:".ui",title:"UI"},{name:".web-dev",title:"Web dev"},{name:".flutter-dev",title:"Flutter dev"},{name:".vimeo",title:"Vimeo Videos"}]},getters:{},mutations:{},actions:{}},Oi={state:{data:[{question:"How long does it take to build a website?",answer:"\n            Approximately, it takes 6 to 10 weeks to build a website from \n            start to finish, provided I have all your information for production. \n            My full web design process is broken down here. Generally speaking, \n            Your website will only take a long time if I'll be waiting for text and images from you",expanded:!0},{question:"What will you need from me?",answer:"\n          It really depends on what type of website you want. \n          We’ll be able to discuss this on our discovery call before we start working together. \n          Depending on which package we agree on we could need…\n          \n          Images of you and your team,\n          Images of your workplace,\n          Profiles.\n          Contents for your website e.g. text, PDFs e.t.c,\n          Any Videos you would like to add,\n          Login details to your existing website,\n          Some of this might already be on the existing website, \n          in which case it can be transferred over to your new site.",expanded:!1},{question:"What if I don’t like the website?",answer:"\n          You’re in luck. I offer a risk-free guarantee. \n          Before I build your new website, I’ll design a mockup of your homepage. \n          I’ll design a layout in Figma first, that way you’ll get to see my \n          initial designs within approximately ten days. This is your opportunity to give me \n          feedback and if you really don’t like it, you don’t have to move forward. Best part is, \n          this won’t cost you anything.",expanded:!1}]},getters:{},mutations:{},actions:{}},hi={state:{data:[{class:"cyan",dataPath:"css/color-cyan.css",color:"Cyan"},{class:"spring-green",dataPath:"css/color-spring-green.css",color:"Spring Green"},{class:"green-yellow",dataPath:"css/color-green-yellow.css",color:"Green Yellow"},{class:"lime-punch",dataPath:"css/color-lime-punch.css",color:"Lime Punch"},{class:"violet",dataPath:"css/color-violet.css",color:"Violet"},{class:"orange",dataPath:"css/color-orange.css",color:"Orange"},{class:"pale-golden-rod",dataPath:"css/color-pale-golden-rod.css",color:"Pale Golden Rod"},{class:"yellow",dataPath:"css/color-yellow.css",color:"Yellow"}]},getters:{},mutations:{},actions:{}},yi={state:{data:[{svg:"fas fa-desktop",comment:"I enjoy discussing new projects and design challenges. \n            Please share as much info, as possible so we can get the most out of our first catch-up.",twitter:"",facebook:"",instagram:"",git:"https://github.com/theodoremca",dribbble:"",phone:"+2349049460816",city:"Lagos, Nigeria"}]},getters:{},mutations:{},actions:{}},wi=Object(di["a"])({namespace:!0,state:{},mutations:{},actions:{},modules:{services:bi,about:mi,testimonial:gi,resume:pi,experience:ui,skills:fi,portfolio:ji,portfolioTags:vi,faq:Oi,themeSwitcher:hi,contact:yi}});Object(i["c"])(r).use(wi).use(ri).mount("#app")},"62e7":function(e,t,a){},b6b4:function(e,t,a){"use strict";a("62e7")}});
//# sourceMappingURL=app.ca883c38.js.map