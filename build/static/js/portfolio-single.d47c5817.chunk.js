"use strict";(self.webpackChunkiambican_v3=self.webpackChunkiambican_v3||[]).push([[182],{3435:function(e,s,t){t.r(s),t.d(s,{default:function(){return b}});var a=t(2791),l=t(4270),n=t(364),i=t(97),r=t(6403),o=t(1211),c=t.n(o),d=t(7168),m=t(7022),j=t(9743),x=t(1523),h=t(3738),p=t(184);class u extends a.Component{renderLink(e){const{navigation:s={}}=this.props,t=s&&s[e];let a=["portfolio-nav__item","portfolio-nav__item--"+e];a=t?[...a,"portfolio-nav__item--has-obj"]:[...a,"portfolio-nav__item--disabled","text-muted","opacity-50"];let l=["fas"];"next"===e&&(l=[...l,"fa-arrow-right","ms-3"]),"prev"===e&&(l=[...l,"fa-arrow-left","me-3"]);const n="prev"===e?"PREVIOUS PROJECT":"NEXT PROJECT",i=t?`/portfolio/${t.slug}/`:"/",r=t?t.title:"Lorem ipsum dolor",o="{}"===JSON.stringify(s);return(0,p.jsx)(x.rU,{className:a.join(" "),to:i,children:(0,p.jsxs)("div",{className:"d-flex align-items-center",children:["prev"===e&&(0,p.jsx)("i",{className:l.join(" ")}),(0,p.jsxs)("div",{className:"d-none d-sm-block",children:[(0,p.jsx)("span",{className:"small",children:n}),(0,p.jsx)("h4",{className:"fw-bold h6 mb-0",children:r})]}),"next"===e&&(0,p.jsx)("i",{className:l.join(" ")}),o&&(0,p.jsx)(h.aN,{})]})})}render(){return(0,p.jsx)("div",{className:"portfolio-nav",children:(0,p.jsx)(m.Z,{fluid:!0,children:(0,p.jsxs)(j.Z,{className:"align-items-center justify-content-between py-4",children:[(0,p.jsx)("div",{className:"col-auto col-sm-4 text-start",children:this.renderLink("prev")}),(0,p.jsxs)("div",{className:"col-auto text-center",children:[(0,p.jsxs)("ul",{className:"list-unstyed list-inline mb-0",children:[(0,p.jsx)("li",{className:"list-inline-item",children:(0,p.jsx)(x.rU,{to:"/",children:"Home"})}),(0,p.jsx)("li",{className:"list-inline-item text-muted active",children:"Portfolio"})]}),(0,p.jsxs)(x.rU,{to:"/portfolio/",className:"small fw-bold text-black",children:[(0,p.jsx)("i",{className:"fas fa-th-large me-2","aria-label":"view all"}),(0,p.jsx)("span",{children:"VIEW ALL"})]})]}),(0,p.jsx)("div",{className:"col-auto col-sm-4 text-end",children:this.renderLink("next")})]})})})}}var f=t(9501),v=t(7377),N=t(9189);const g=(0,r.e9)((async e=>{let{match:{params:{slug:s}},updateProjects:t}=e;return await(0,f.rR)({url:"wp/v2/portfolios",params:{slug:s}}).then((e=>t(e.data)))}),{onMount:!0,onUpdate:!1})((e=>{const{getProjects:s,selectedProject:t,location:{pathname:n},match:{params:{slug:i}}}=e;(0,a.useEffect)((()=>(window.scrollTo(0,0),s(i))),[n,s,i]);const r=t||{},o=(0,N.LX)(t,n);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.q,{...o}),(0,p.jsxs)("div",{id:"content",className:"content content--portfolio content--single",children:[(0,p.jsx)(u,{...r}),(0,p.jsx)(d.Z,{posts:[t],isSingle:!0,loading:!t})]})]})}));var b=(0,n.$j)(((e,s)=>{const{projects:t}=e,{match:{params:{slug:a}}}=s;return{selectedProject:c()(t,{slug:a})}}),(e=>(0,i.DE)({getProjects:v.mW,updateProjects:v.id},e)))(g)}}]);
//# sourceMappingURL=portfolio-single.d47c5817.chunk.js.map