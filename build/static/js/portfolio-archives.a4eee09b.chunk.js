(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{488:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r=a(0),c=a.n(r);t.a=function(e){var t=n({},e).pageTitle;return c.a.createElement("section",{className:"page-intro"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",{className:"page-intro__headline"},t||"Lorem ipsum dolor sit")))))}},528:function(e,t,a){},553:function(e,t,a){"use strict";a.r(t);var n=a(106),r=a.n(n),c=a(144),o=a(23),s=a(24),i=a(27),l=a(25),u=a(26),p=a(0),m=a.n(p),f=a(81),d=a.n(f),v=a(19),w=a(20),j=a(82),b=a(491),h=a(488),E=a(52),g=a(15),N=(a(528),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"renderNavigation",value:function(){return m.a.createElement("div",{className:"projects-nav"},m.a.createElement("div",{className:"projects-nav__arrows"},m.a.createElement("button",{className:"projects-nav__arrow projects-nav__arrow--prev"},m.a.createElement("i",{className:"fas fa-arrow-left fa-2x"})),m.a.createElement("button",{className:"projects-nav__arrow projects-nav__arrow--next"},m.a.createElement("i",{className:"fas fa-arrow-right fa-2x"}))))}},{key:"render",value:function(){var e=this.props,t=e.projects,a={title:"View My Portfolio",description:"View my best work and see what resources I`ve used to create this amazing websites.",canonical:"https://www.iambican.com"+e.location.pathname};return m.a.createElement(m.a.Fragment,null,m.a.createElement(d.a,{title:a.title,meta:[a.description?{name:"description",content:a.description}:{}],link:[a.canonical?{rel:"canonical",href:a.canonical}:{}]}),m.a.createElement("div",{id:"content",className:"content content--projects content--archive"},m.a.createElement(h.a,{pageTitle:"Portfolio"}),m.a.createElement("div",{className:"container"},m.a.createElement(b.a,{posts:t,className:"my-3 my-md-5",isSingle:!1,options:{loading:{elements:6,classes:{outer:"col-md-6 col-lg-4"}}}}))))}}]),t}(p.Component)),_=function(){var e=Object(c.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.updateProjects,e.next=3,g.d.get("wp/v2/portfolios?per_page=10").then(function(e){return e.data});case 3:return n=e.sent,e.abrupt("return",a(n));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();t.default=Object(v.c)(function(e){return{projects:e.projects}},function(e){return Object(w.b)({getProjects:E.e,updateProjects:E.f},e)})(Object(j.frontloadConnect)(_,{onMount:!0,onUpdate:!1})(N))}}]);
//# sourceMappingURL=portfolio-archives.a4eee09b.chunk.js.map