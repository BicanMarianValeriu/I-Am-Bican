(self.webpackChunkiambican_v3=self.webpackChunkiambican_v3||[]).push([[177],{3717:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var i=n(2791),o=n(4270),s=n(1692),r=n(103);var a=n(184);class l extends i.Component{componentDidMount(){var e=!0,t=document.querySelector(".about-me__content-text");document.querySelector(".about-me__content-more").addEventListener("click",(function(){e?(t.classList.add("about-me__content-text--opened"),this.innerHTML=this.getAttribute("data-less-label"),e=!1):(t.classList.remove("about-me__content-text--opened"),this.innerHTML=this.getAttribute("data-more-label"),e=!0)}))}render(){return(0,a.jsx)("div",{className:"about-me__content bg-white text-dark",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col-12",children:[(0,a.jsx)("div",{className:"col-12 col-lg-6 ms-5 mb-5 mb-lg-4 float-end",children:(0,a.jsxs)("div",{className:"p-3 p-sm-5 shadow-lg",children:[(0,a.jsx)("h6",{className:"fw-bold",children:"Personal Details"}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-md-5",children:(0,a.jsxs)("ul",{className:"list-unstyled text-uppercase text-muted small mb-0",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"Birthday:"})," 02-08-1993"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"Nationality:"})," Romanian"]})]})}),(0,a.jsx)("div",{className:"col-md-7",children:(0,a.jsxs)("ul",{className:"list-unstyled text-uppercase text-muted small mb-0",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"Phone:"})," ",(0,a.jsx)("a",{href:"tel:+40761176106",children:"+40761176106"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:"eMail:"})," ",(0,a.jsx)("a",{href:"mailto:marianvaleriubican@gmail.com",children:"mvbican@gmail.com"})]})]})})]})]})}),(0,a.jsx)("h2",{className:"about-me__content-title text-uppercase",children:"About Me"}),(0,a.jsxs)("div",{className:"about-me__content-text text-dark text-opacity-75",children:[(0,a.jsx)("p",{children:"I'm Bican, a full stack web developer from Targu Jiu, Romania. I love to share what I know through my work, articles and tutorials. I've been creating on the web for around 2 years and have become pretty good at it. From a technical standpoint, I spend most of my time working with JavaScript, CSS3, HTML5 and PHP (WordPress)."}),(0,a.jsxs)("p",{children:["New and open source web technologies make me super excited and I can\u2019t wait to see what is to come of the web in the next few years. I\u2019ve graduated of Targu Jiu UCB University\u2019s Law program and ",(0,a.jsx)("mark",{children:"soon"})," English Philology. Why not computer or informatics? Well, this is a hard answer, but this is my passion and I LOVE what I do :)."]})]}),(0,a.jsx)("button",{className:"about-me__content-more btn btn-outline-dark btn-sm","data-less-label":"read less","data-more-label":"read more",children:"read more"})]})})})})}}var c=l,u=n(1523),d=n(5950),m=n.n(d),h=n(7022),f=n(9743),p=n(2677),x=n(3353);var g=()=>(0,a.jsx)("div",{className:"about-me__links position-relative bg-white",children:(0,a.jsx)(h.Z,{children:(0,a.jsxs)(f.Z,{className:"justify-content-end gx-0",children:[(0,a.jsx)(p.Z,{xs:4,lg:3,className:"text-center",children:(0,a.jsxs)("a",{href:"#footer",className:"about-me__link text-primary",onClick:()=>m()("#footer"),children:[(0,a.jsx)("i",{className:"fal fa-envelope"}),(0,a.jsx)("span",{children:"Contact Information"})]})}),(0,a.jsx)(p.Z,{xs:4,lg:2,className:"text-center",children:(0,a.jsx)(x.Z,{className:"about-me__link text-primary",color:"link",label:"Send Message"})}),(0,a.jsx)(p.Z,{xs:4,lg:3,className:"text-center",children:(0,a.jsxs)(u.rU,{to:"/portfolio/",className:"about-me__link text-primary",children:[(0,a.jsx)("i",{className:"fal fa-briefcase"}),(0,a.jsx)("span",{children:"View Portfolio"})]})})]})})}),v=n(9379),b=n(5846);var w=()=>{const{width:e}=function(){const[e,t]=(0,i.useState)(r.L8);return(0,i.useEffect)((()=>{const e=()=>t((0,r.L8)());return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e}(),t=e=>{const t=e.target.closest(".about-me__profile"),{x:n,y:i}=(0,r.Me)(e),o=(e,t,n)=>e*(t/n*100-100);(0,s.Z)({targets:t,rotateY:o(.2,n,t.offsetWidth),rotateX:o(-.2,i,t.offsetHeight),scale:1.07,easing:"easeOutElastic",perspective:650})},n=e=>{(0,s.Z)({targets:e.target.closest(".about-me__profile"),scale:1,translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0,easing:"easeOutElastic"})};return(0,i.useEffect)((()=>{const e=document.querySelectorAll(".about-me__profile div");e.length&&setInterval((()=>{let t=e[Math.floor(Math.random()*e.length)];for(let n=0,i=e.length;n<i;n++)e[n].classList.remove("shown");t.classList.add("shown")}),5e3)}),[]),(0,i.useEffect)((()=>{const i=document.querySelector(".about-me__profile");if(i)return e>991&&(i.addEventListener("mousemove",t),i.addEventListener("mouseleave",n)),()=>{i.removeEventListener("mousemove",t),i.removeEventListener("mouseleave",n)}}),[e]),(0,a.jsxs)("section",{id:"about-me",className:"about-me position-relative bg-primary text-white",children:[(0,a.jsx)("div",{className:"about-me__intro py-lg-5",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center align-items-lg-start",children:[(0,a.jsx)("div",{className:"col-sm-5 col-lg-4 about-me__image",children:(0,a.jsx)("div",{className:"about-me__image-wrap",children:(0,a.jsxs)("div",{className:"about-me__profile shadow",children:[(0,a.jsx)("div",{className:"shown",style:{backgroundImage:`url('${b}')`}}),(0,a.jsx)("div",{style:{backgroundImage:`url('${v}')`}}),(0,a.jsx)("svg",{className:"about-me__profile-decoration",viewBox:"0 0 300 415",children:(0,a.jsx)("path",{d:"M20.5,20.5h260v375h-260V20.5z"})})]})})}),(0,a.jsxs)("div",{className:"col-sm-7 col-lg-8 align-self-end mb-4 mb-lg-0",children:[(0,a.jsx)("h1",{className:"about-me__headline fw-bold lh-1 mb-4",children:"Bican Marian Valeriu"}),(0,a.jsx)("p",{className:"lead lh-1 mb-2 mb-md-3",children:"WordPress/React Developer at myZone/AM2Studio"}),(0,a.jsx)("p",{className:"lead lh-1 mb-1 mb-md-2",children:"Targu Jiu, Gorj, Romania"})]})]})})}),(0,a.jsx)(g,{}),(0,a.jsx)(c,{})]})},_=n(8573),y=n.n(_);let j,k,N;class S extends i.Component{constructor(e){super(e),this.state={controller:null,scenes:[],experience:[{jobTitle:"WordPress/Frontend Developer",company:"AM2 Studio / myZone",description:'Contacted by Andrej - AM2Studio CEO, via Facebook, setup an interview and got a simple project \n                    to do. While I was guided by a senior front end developer and a couple of new tools where introduced to \n                    me (BEM, SCSS, GIT + more), I completed the project in about a 3 weeks training period. After that, my first developed \n                    site was live - <a href="http://www.solidevents.ca/" target="_blank">SolidEvents</a> (not maintained anymore) - and I got hired.',location:"Remote / Home",duration:{from:"5 May 2017",to:(new Date).toDateString()}},{jobTitle:"Freelancer",company:"Individual",description:'I\'m into web development since I was in highschool, however I really started to learn\n                    more about it since 2015, when I started to develop my own WordPress theme, named\n                    <a href="https://www.wecodeart.com/" target="_blank">WeCodeArt Framework</a>. The idea was simple \n                    - to build something fast and non-bloated with tons of features that you will never use.',location:"Home",duration:{from:"Sep 2015",to:"5 May 2017"}}]}}componentDidMount(){j=n(7240);const e=new j.Controller,t=document.querySelector(".timeline__bar"),i=document.querySelectorAll(".timeline-box"),o=i[0],r=i[i.length-1],a=()=>{let e,n;e=o.offsetHeight/2,n=r.offsetHeight/2,t.style.top=e+"px",t.style.bottom=n+"px"};a();const l=(0,s.Z)({targets:t.firstChild,height:[0,"100%"],easing:"linear",duration:t.clientHeight,autoplay:!1}),c=new j.Scene({triggerElement:o,duration:t.clientHeight,triggerHook:.75}).addTo(e).on("progress",(e=>{l.seek(l.duration*e.progress)}));window.addEventListener("resize",y()((()=>c.duration(t.clientHeight)),50)),window.addEventListener("resize",y()(a,150)),this.handleAnimations(e)}componentDidUpdate(){const{scenes:e}=this.state;e.forEach((e=>{setTimeout((()=>e.reverse(!0)),200),e.on("progress",(t=>1===t.progress?e.reverse(!1):null))}))}handleAnimations(e){const t=document.querySelectorAll(".timeline-box"),n=document.querySelectorAll(".timeline-box__animation");let i=[];for(let o=0;o<t.length;o++)i=[...i,new j.Scene({triggerElement:n[o],triggerHook:.85}).setClassToggle(n[o],"timeline-box__animation--ended").addTo(e)],new j.Scene({triggerElement:t[o],triggerHook:.75}).setClassToggle(t[o],"timeline-box--animated").addTo(e);this.setState({scenes:i})}renderExperience(){const{experience:e}=this.state;if(e.length)return e.map(((e,t)=>{const{from:n,to:i}=e.duration;return(0,a.jsx)("article",{id:"timeline-box-".concat(t+1),className:"timeline-boxes__item timeline-box",children:(0,a.jsx)("div",{className:"timeline-box__animation",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col col-sm-12 col-md-5 col-lg-4 col-xl-3 bg-primary",children:(0,a.jsxs)("div",{className:"p-3 px-lg-4 py-lg-5",children:[(0,a.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,a.jsxs)("span",{className:"timeline-box__meta-range__from",children:[(0,a.jsx)("span",{className:"text-uppercase text-white text-opacity-50",children:"From:"}),(0,a.jsx)("span",{className:"timeline-box__meta-range__from-date text-white",children:n})]}),(0,a.jsxs)("span",{className:"timeline-box__meta-range__to",children:[(0,a.jsx)("span",{className:"text-uppercase text-white text-opacity-50",children:"To:"}),(0,a.jsx)("span",{className:"timeline-box__meta-range__to-date text-white",children:i===(new Date).toDateString()?"Present":i})]})]}),(0,a.jsxs)("p",{className:"timeline-box__meta-duration text-white text-opacity-50 text-uppercase",children:["(",(0,r.Y1)({from:n,to:i}),")"]}),(0,a.jsxs)("div",{className:"timeline-box__meta-company d-flex flex-row flex-md-column justify-content-between",children:[(0,a.jsx)("h5",{className:"timeline-box__meta-company__name text-white",children:e.company}),(0,a.jsx)("span",{className:"timeline-box__meta-company__loc text-white text-opacity-50",children:e.location})]})]})}),(0,a.jsx)("div",{className:"col col-sm-12 col-md-7 col-lg-8 col-xl-9 bg-white",children:(0,a.jsxs)("div",{className:"p-3 p-lg-5",children:[(0,a.jsx)("h4",{className:"fw-bold h5",children:e.jobTitle}),(0,a.jsx)("p",{className:"text-muted small d-none d-md-block mb-0",dangerouslySetInnerHTML:{__html:e.description}})]})})]})})},t)}))}render(){return(0,a.jsxs)("section",{id:"about-experience",className:"about-experience",children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col",children:(0,a.jsx)("h2",{className:"about-experience__headline text-uppercase",children:"Experience"})})})}),(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col",children:(0,a.jsxs)("div",{className:"about-experience__timeline timeline",children:[(0,a.jsx)("div",{className:"timeline__bar",children:(0,a.jsx)("div",{className:"timeline__bar-inner"})}),(0,a.jsx)("div",{className:"timeline__boxes",children:this.renderExperience()})]})})})})]})}}class M extends i.Component{constructor(e){super(e),this.state={scenes:[],skills:[{title:"React JS",icon:"fab fa-react fa-fw",description:"One of the reasons (after ES6+) I started to love Javascript so much, and because you can make super fast SPA's."},{title:"WordPress",icon:"fab fa-wordpress-simple fa-fw",description:'Best things in life are <strong class="text-font--cursive">free</strong>, and WordPress is one of them. As Automatic says: "Code is poetry".'},{title:"PHP",icon:"fab fa-php fa-fw",description:"One of the must-have skills of every full-stack developer. Average with it, I've learned it following WP coding standards."},{title:"CSS3/SCSS/BEM",icon:"fab fa-sass fa-fw",description:"You are not a good web developer without CSS3. I use SASS/SCSS to pimp it and BEM for awesome/readable code."},{title:"GIT/Bitbucket",icon:"fab fa-git fa-fw",description:"Two of my favorite services for version control. I use them with Bitbucket Desktop APP to manage my repositories."},{title:"WooCommerce",icon:"fal fa-shopping-cart fa-fw",description:"That's my favorite WP plugin for building amazing shops. I love it since is highly customizable."},{title:"GULP/WEBPACK",icon:"fab fa-gulp fa-fw",description:"I'm familiar with both code bundlers. Initially I used Gulp but later on I switched to Webpack."},{title:"Javascript (ES6+)",icon:"fab fa-js fa-fw",description:"JavaScript has become one of my favorite programming language lately. From hating it to loving it."},{title:"HTML5",icon:"fab fa-html5 fa-fw",description:"The must-have skill of every developer. This is what I've learned firstly when I started web development."}]}}componentDidMount(){k=n(7240),N=n(7444);let e=new k.Controller,t=document.querySelectorAll(".skill-box");const i=new k.Scene({triggerElement:".about-skills__headline",triggerHook:.85}).setClassToggle(".about-skills__headline","maskUp").addTo(e),o=new k.Scene({triggerElement:".about-skills__headline",triggerHook:.85}).setClassToggle(".about-skills__description","maskUp").addTo(e);let s=[];for(let n=0;n<t.length;n++)s[n]=new k.Scene({triggerElement:t[n],triggerHook:.95}).setClassToggle(t[n],"skill-box--animated").addTo(e);const r=document.querySelector(".about-skills__pre");N({target:r});const a=new k.Scene({triggerElement:".about-skills__headline",triggerHook:.75}).setClassToggle(".about-skills__pre","about-skills__pre--animated").addTo(e);this.setState({scenes:[i,o,...s,a]})}componentDidUpdate(){const{scenes:e}=this.state;e.forEach((e=>{setTimeout((()=>e.reverse(!0)),200),e.on("progress",(t=>1===t.progress?e.reverse(!1):null))}))}renderSkills(){const{skills:e}=this.state;if(e.length){let t=0;return e.map(((e,n)=>{let i;n%3===0&&(t=0),t++,i=r.sk?0:window.innerWidth>992?150*t:0;const o={"--animation-delay":i+"ms"};return(0,a.jsx)("div",{id:`skill-box-${n+1}`,className:"col-md-6 col-lg-4",children:(0,a.jsxs)("div",{className:"skill-box",style:o,children:[(0,a.jsxs)("h3",{className:"h6 fw-bold text-uppercase d-flex align-items-center mb-2",children:[(0,a.jsx)("div",{className:"me-3 text-primary",children:(0,a.jsx)("i",{className:e.icon})}),e.title]}),(0,a.jsx)("p",{className:"small text-muted mb-md-5 pb-3 ml-5",dangerouslySetInnerHTML:{__html:e.description}})]})},n)}))}}render(){return(0,a.jsx)("section",{id:"about-skills",className:"about-skills position-relative py-5",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col text-center",children:[(0,a.jsx)("span",{className:"about-skills__pre fw-bold text-uppercase text-primary",children:"Just few of my"}),(0,a.jsx)("div",{className:"mb-2",style:{overflow:"hidden"},children:(0,a.jsx)("h2",{className:"about-skills__headline mb-0",children:"Amazing Skills"})}),(0,a.jsx)("div",{className:"mb-5",style:{overflow:"hidden"},children:(0,a.jsx)("p",{className:"about-skills__description lead mb-0",children:"...in addition, I'm allways open into learning new things and technologies."})})]})}),(0,a.jsx)("div",{className:"row align-items-baseline",children:this.renderSkills()})]})})}}var E=M;var T=()=>{const e="WordPress/React Developer",t="https://www.iambican.com/";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.q,{title:e,link:[t?{rel:"canonical",href:t}:{}]}),(0,a.jsxs)("div",{id:"content",className:"content",children:[(0,a.jsx)(w,{}),(0,a.jsx)(S,{}),(0,a.jsx)(E,{})]})]})}},8573:function(e,t,n){var i=n(8092),o=n(72),s=n(2582),r=Math.max,a=Math.min;e.exports=function(e,t,n){var l,c,u,d,m,h,f=0,p=!1,x=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=l,i=c;return l=c=void 0,f=t,d=e.apply(i,n)}function b(e){return f=e,m=setTimeout(_,t),p?v(e):d}function w(e){var n=e-h;return void 0===h||n>=t||n<0||x&&e-f>=u}function _(){var e=o();if(w(e))return y(e);m=setTimeout(_,function(e){var n=t-(e-h);return x?a(n,u-(e-f)):n}(e))}function y(e){return m=void 0,g&&l?v(e):(l=c=void 0,d)}function j(){var e=o(),n=w(e);if(l=arguments,c=this,h=e,n){if(void 0===m)return b(h);if(x)return clearTimeout(m),m=setTimeout(_,t),v(h)}return void 0===m&&(m=setTimeout(_,t)),d}return t=s(t)||0,i(n)&&(p=!!n.leading,u=(x="maxWait"in n)?r(s(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==m&&clearTimeout(m),f=0,l=h=c=m=void 0},j.flush=function(){return void 0===m?d:y(o())},j}},72:function(e,t,n){var i=n(7009);e.exports=function(){return i.Date.now()}},8872:function(e){(function(){var t,n,i,o,s,r;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-s)/1e6},n=process.hrtime,o=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),r=1e9*process.uptime(),s=o-r):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)},5475:function(e,t,n){for(var i=n(8872),o="undefined"===typeof window?n.g:window,s=["moz","webkit"],r="AnimationFrame",a=o["request"+r],l=o["cancel"+r]||o["cancelRequest"+r],c=0;!a&&c<s.length;c++)a=o[s[c]+"Request"+r],l=o[s[c]+"Cancel"+r]||o[s[c]+"CancelRequest"+r];if(!a||!l){var u=0,d=0,m=[];a=function(e){if(0===m.length){var t=i(),n=Math.max(0,16.666666666666668-(t-u));u=n+t,setTimeout((function(){var e=m.slice(0);m.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return m.push({handle:++d,callback:e,cancelled:!1}),d},l=function(e){for(var t=0;t<m.length;t++)m[t].handle===e&&(m[t].cancelled=!0)}}e.exports=function(e){return a.call(o,e)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=a,e.cancelAnimationFrame=l}},6874:function(e,t){t.linear=function(e){return e},t.inQuad=function(e){return e*e},t.outQuad=function(e){return e*(2-e)},t.inOutQuad=function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},t.inCube=function(e){return e*e*e},t.outCube=function(e){return--e*e*e+1},t.inOutCube=function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},t.inQuart=function(e){return e*e*e*e},t.outQuart=function(e){return 1- --e*e*e*e},t.inOutQuart=function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)},t.inQuint=function(e){return e*e*e*e*e},t.outQuint=function(e){return--e*e*e*e*e+1},t.inOutQuint=function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},t.inSine=function(e){return 1-Math.cos(e*Math.PI/2)},t.outSine=function(e){return Math.sin(e*Math.PI/2)},t.inOutSine=function(e){return.5*(1-Math.cos(Math.PI*e))},t.inExpo=function(e){return 0==e?0:Math.pow(1024,e-1)},t.outExpo=function(e){return 1==e?e:1-Math.pow(2,-10*e)},t.inOutExpo=function(e){return 0==e?0:1==e?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))},t.inCirc=function(e){return 1-Math.sqrt(1-e*e)},t.outCirc=function(e){return Math.sqrt(1- --e*e)},t.inOutCirc=function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},t.inBack=function(e){var t=1.70158;return e*e*((t+1)*e-t)},t.outBack=function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},t.inOutBack=function(e){var t=2.5949095;return(e*=2)<1?e*e*((t+1)*e-t)*.5:.5*((e-=2)*e*((t+1)*e+t)+2)},t.inBounce=function(e){return 1-t.outBounce(1-e)},t.outBounce=function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},t.inOutBounce=function(e){return e<.5?.5*t.inBounce(2*e):.5*t.outBounce(2*e-1)+.5},t.inElastic=function(e){var t,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/.4))},t.outElastic=function(e){var t,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*e)*Math.sin((e-t)*(2*Math.PI)/.4)+1)},t.inOutElastic=function(e){var t,n=.1,i=.4;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=i*Math.asin(1/n)/(2*Math.PI),(e*=2)<1?n*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/i)*-.5:n*Math.pow(2,-10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/i)*.5+1)},t["in-quad"]=t.inQuad,t["out-quad"]=t.outQuad,t["in-out-quad"]=t.inOutQuad,t["in-cube"]=t.inCube,t["out-cube"]=t.outCube,t["in-out-cube"]=t.inOutCube,t["in-quart"]=t.inQuart,t["out-quart"]=t.outQuart,t["in-out-quart"]=t.inOutQuart,t["in-quint"]=t.inQuint,t["out-quint"]=t.outQuint,t["in-out-quint"]=t.inOutQuint,t["in-sine"]=t.inSine,t["out-sine"]=t.outSine,t["in-out-sine"]=t.inOutSine,t["in-expo"]=t.inExpo,t["out-expo"]=t.outExpo,t["in-out-expo"]=t.inOutExpo,t["in-circ"]=t.inCirc,t["out-circ"]=t.outCirc,t["in-out-circ"]=t.inOutCirc,t["in-back"]=t.inBack,t["out-back"]=t.outBack,t["in-out-back"]=t.inOutBack,t["in-bounce"]=t.inBounce,t["out-bounce"]=t.outBounce,t["in-out-bounce"]=t.inOutBounce,t["in-elastic"]=t.inElastic,t["out-elastic"]=t.outElastic,t["in-out-elastic"]=t.inOutElastic},8988:function(e){function t(e){if(e)return function(e){for(var n in t.prototype)e[n]=t.prototype[n];return e}(e)}t.prototype.on=t.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},t.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},t.prototype.off=t.prototype.removeListener=t.prototype.removeAllListeners=t.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,i=this._callbacks["$"+e];if(!i)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var o=0;o<i.length;o++)if((n=i[o])===t||n.fn===t){i.splice(o,1);break}return 0===i.length&&delete this._callbacks["$"+e],this},t.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks["$"+e];if(n)for(var i=0,o=(n=n.slice(0)).length;i<o;++i)n[i].apply(this,t);return this},t.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},t.prototype.hasListeners=function(e){return!!this.listeners(e).length},e.exports=t},5950:function(e,t,n){var i=n(4316);e.exports=function(e,t){if(t=t||{},"string"===typeof e&&(e=document.querySelector(e)),e)return i(0,function(e,t,n){var i,o=document.body,s=document.documentElement,r=e.getBoundingClientRect(),a=s.clientHeight,l=Math.max(o.scrollHeight,o.offsetHeight,s.clientHeight,s.scrollHeight,s.offsetHeight);t=t||0,i="bottom"===n?r.bottom-a:"middle"===n?r.bottom-a/2-r.height/2:r.top;var c=l-a;return Math.min(i+t+window.pageYOffset,c)}(e,t.offset,t.align),t)}},4316:function(e,t,n){var i=n(714),o=n(5475);e.exports=function(e,t,n){n=n||{};var s={top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft},r=i(s).ease(n.ease||"out-circ").to({top:t,left:e}).duration(n.duration||1e3);function a(){o(a),r.update()}return r.update((function(e){window.scrollTo(0|e.left,0|e.top)})),r.on("end",(function(){a=function(){}})),a(),r}},714:function(e,t,n){var i=n(6874);function o(e){if(!(this instanceof o))return new o(e);this._from=e,this.ease("linear"),this.duration(500)}n(8988)(o.prototype),o.prototype.reset=function(){return this.isArray="[object Array]"===Object.prototype.toString.call(this._from),this._curr=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}({},this._from),this._done=!1,this._start=Date.now(),this},o.prototype.to=function(e){return this.reset(),this._to=e,this},o.prototype.duration=function(e){return this._duration=e,this},o.prototype.ease=function(e){if(!(e="function"==typeof e?e:i[e]))throw new TypeError("invalid easing function");return this._ease=e,this},o.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this},o.prototype.step=function(){if(!this._done){var e=this._duration,t=Date.now();if(t-this._start>=e)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var n=this._from,i=this._to,o=this._curr,s=(0,this._ease)((t-this._start)/e);if(this.isArray){for(var r=0;r<n.length;++r)o[r]=n[r]+(i[r]-n[r])*s;return this._update(o),this}for(var a in n)o[a]=n[a]+(i[a]-n[a])*s;return this._update(o),this}},o.prototype.update=function(e){return 0==arguments.length?this.step():(this._update=e,this)},e.exports=o},7444:function(e){e.exports=function(){"use strict";var e=document,t=e.createTextNode.bind(e);function n(e,t,n){e.style.setProperty(t,n)}function i(e,t){return e.appendChild(t)}function o(t,n,o,s){var r=e.createElement("span");return n&&(r.className=n),o&&(!s&&r.setAttribute("data-"+n,o),r.textContent=o),t&&i(t,r)||r}function s(e,t){return e.getAttribute("data-"+t)}function r(t,n){return t&&0!=t.length?t.nodeName?[t]:[].slice.call(t[0].nodeName?t:(n||e).querySelectorAll(t)):[]}function a(e){for(var t=[];e--;)t[e]=[];return t}function l(e,t){e&&e.some(t)}function c(e){return function(t){return e[t]}}function u(e,t,i){var o="--"+t,s=o+"-index";l(i,(function(e,t){Array.isArray(e)?l(e,(function(e){n(e,s,t)})):n(e,s,t)})),n(e,o+"-total",i.length)}var d={};function m(e,t,n){var i=n.indexOf(e);if(-1==i)n.unshift(e),l(d[e].depends,(function(t){m(t,e,n)}));else{var o=n.indexOf(t);n.splice(i,1),n.splice(o,0,e)}return n}function h(e,t,n,i){return{by:e,depends:t,key:n,split:i}}function f(e){return m(e,0,[]).map(c(d))}function p(e){d[e.by]=e}function x(e,n,s,a,c){e.normalize();var u=[],d=document.createDocumentFragment();a&&u.push(e.previousSibling);var m=[];return r(e.childNodes).some((function(e){if(!e.tagName||e.hasChildNodes()){if(e.childNodes&&e.childNodes.length)return m.push(e),void u.push.apply(u,x(e,n,s,a,c));var i=e.wholeText||"",r=i.trim();r.length&&(" "===i[0]&&m.push(t(" ")),l(r.split(s),(function(e,t){t&&c&&m.push(o(d,"whitespace"," ",c));var i=o(d,n,e);u.push(i),m.push(i)}))," "===i[i.length-1]&&m.push(t(" ")))}else m.push(e)})),l(m,(function(e){i(d,e)})),e.innerHTML="",i(e,d),u}var g=0;function v(e,t){for(var n in t)e[n]=t[n];return e}var b="words",w=h(b,g,"word",(function(e){return x(e,"word",/\s+/,0,1)})),_="chars",y=h(_,[b],"char",(function(e,t,n){var i=[];return l(n[b],(function(e,n){i.push.apply(i,x(e,"char","",t.whitespace&&n))})),i}));function j(e){var t=(e=e||{}).key;return r(e.target||"[data-splitting]").map((function(n){var i=n["\ud83c\udf4c"];if(!e.force&&i)return i;i=n["\ud83c\udf4c"]={el:n};var o=f(e.by||s(n,"splitting")||_),r=v({},e);return l(o,(function(e){if(e.split){var o=e.by,s=(t?"-"+t:"")+e.key,a=e.split(n,r,i);s&&u(n,s,a),i[o]=a,n.classList.add(o)}})),n.classList.add("splitting"),i}))}function k(e){var t=(e=e||{}).target=o();return t.innerHTML=e.content,j(e),t.outerHTML}function N(e,t,n){var i=r(t.matching||e.children,e),o={};return l(i,(function(e){var t=Math.round(e[n]);(o[t]||(o[t]=[])).push(e)})),Object.keys(o).map(Number).sort(S).map(c(o))}function S(e,t){return e-t}j.html=k,j.add=p;var M=h("lines",[b],"line",(function(e,t,n){return N(e,{matching:n[b]},"offsetTop")})),E=h("items",g,"item",(function(e,t){return r(t.matching||e.children,e)})),T=h("rows",g,"row",(function(e,t){return N(e,t,"offsetTop")})),C=h("cols",g,"col",(function(e,t){return N(e,t,"offsetLeft")})),I=h("grid",["rows","cols"]),A="layout",L=h(A,g,g,(function(e,t){var a=t.rows=+(t.rows||s(e,"rows")||1),l=t.columns=+(t.columns||s(e,"columns")||1);if(t.image=t.image||s(e,"image")||e.currentSrc||e.src,t.image){var c=r("img",e)[0];t.image=c&&(c.currentSrc||c.src)}t.image&&n(e,"background-image","url("+t.image+")");for(var u=a*l,d=[],m=o(g,"cell-grid");u--;){var h=o(m,"cell");o(h,"cell-inner"),d.push(h)}return i(e,m),d})),P=h("cellRows",[A],"row",(function(e,t,n){var i=t.rows,o=a(i);return l(n[A],(function(e,t,n){o[Math.floor(t/(n.length/i))].push(e)})),o})),O=h("cellColumns",[A],"col",(function(e,t,n){var i=t.columns,o=a(i);return l(n[A],(function(e,t){o[t%i].push(e)})),o})),H=h("cells",["cellRows","cellColumns"],"cell",(function(e,t,n){return n[A]}));return p(w),p(y),p(M),p(E),p(T),p(C),p(I),p(L),p(P),p(O),p(H),j}()},5846:function(e,t,n){"use strict";e.exports=n.p+"static/media/bican-cartoon.406eac5c5466ec7b73e8.jpg"},9379:function(e,t,n){"use strict";e.exports=n.p+"static/media/bican.bab737b1abd0cc1e6762.jpg"}}]);
//# sourceMappingURL=home.a4781b8f.chunk.js.map