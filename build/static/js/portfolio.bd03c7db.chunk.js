(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{385:function(e,t,a){e.exports=a.p+"static/media/placeholder-bold.81ba79bb.png"},386:function(e,t,a){"use strict";var n=a(12),r=a(110),i=a(17),s=a(7),l=a(8),c=a(10),o=a(9),m=a(11),p=a(0),u=a.n(p),d=a(14),f=a.n(d),h=a(105),v=a(381),g=a(107),b=a.n(g),_=void 0,E=Object(v.a)(function(e){var t=e.type,a=e.slug,n=function(e){if(e)return{__html:e.title.rendered}}(e),r=["".concat(t,"__title")];return u.a.createElement("h1",{className:r.join(" ")},e.isSingle?u.a.createElement("span",{dangerouslySetInnerHTML:n}):u.a.createElement(h.a,{to:"".concat(t,"/").concat(a),dangerouslySetInnerHTML:n}))}),j=function(e){var t=e.type,a=["".concat(t,"__content")],n=e.isSingle?function(e){if(e)return e.content.protected?{__html:"<p>This content is password-protected.</p>"}:{__html:e.content.rendered}}(e):function(e){if(e)return e.excerpt?e.excerpt.protected?{__html:"<p>This content is password-protected.</p>"}:"image"!==e.format||e.excerpt.rendered?{__html:e.excerpt.rendered}:{__html:e.content.rendered}:{__html:"<p>"+_.getContent(e).__html.replace(/<\/?[^>]+(>|$)/g,"").substring(0,250)+"</p>"}}(e);return u.a.createElement("div",{className:a.join(" "),dangerouslySetInnerHTML:n})},y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getClasses",value:function(){var e=["entry"];return e.push(this.props.isSingle?"entry--single":"entry--archive"),e.push(this.props.type&&"entry--"+this.props.type),e.join(" ")}},{key:"render",value:function(){return u.a.createElement("article",{className:this.getClasses()},!this.props.isSingle&&u.a.createElement(E,this.props),u.a.createElement(j,this.props))}}]),t}(p.Component),O=a(23),N=a(18),k=a(31),C=a(44),w=a(385),x=a.n(w),S=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getMedia({include:this.props.mediaId})}},{key:"getMediaImage",value:function(e){var t=e.media_details.sizes.large;return t?t.source_url:x.a}},{key:"getClasses",value:function(){var e=["entry__media"],t=this.props.mediaObj,a=(t?t.media_details.sizes:{}).large;return(a?a.source_url:x.a)===x.a&&e.push(["entry__media--placeholder"]),this.props.isMain&&e.push(["entry__media--main"]),e.join(" ")}},{key:"renderImage",value:function(e){var t=this.getMediaImage(e),a={backgroundImage:"url('".concat(t,"')"),backgroundSize:"cover",backgroundPosition:"center"};return u.a.createElement("div",{className:"entry__media-figure__src",style:a})}},{key:"render",value:function(){var e=this.props.mediaObj;return u.a.createElement("div",{className:this.getClasses()},e?this.renderImage(e):u.a.createElement(C.a,null))}}]),t}(p.Component),I=Object(O.c)(function(e,t){var a=e.media;return{mediaObj:b()(a,{id:t.mediaId})}},function(e){return Object(N.b)({getMedia:k.e},e)})(S),L=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getClasses",value:function(){var e=this.props.acf.meta.layout;return["col-md-6","col-lg-4","entry","entry--portfolio","entry--archive","portfolio","portfolio--layout-".concat(e)].join(" ")}},{key:"render",value:function(){var e=this.props,t=e.featured_media,a=e.slug;return u.a.createElement("article",{className:this.getClasses()},u.a.createElement(h.a,{to:"portfolio/".concat(a)},u.a.createElement(I,{mediaId:t})),u.a.createElement("div",{className:"portfolio__description"},u.a.createElement(E,this.props),u.a.createElement(j,this.props),u.a.createElement(h.a,{to:"portfolio/".concat(a),className:"btn btn-link portfolio__more"},u.a.createElement("span",null,"View More"),u.a.createElement("i",{className:"fas fa-arrow-right"}))))}}]),t}(p.Component),P=Object(v.a)(L),M=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderClientImage",value:function(){var e=this.props.client;if(e)return u.a.createElement("img",{src:e.acf.client_logo.url,alt:e.name,height:"40"})}},{key:"render",value:function(){var e=this.props,t=e.date_gmt,a=e.date_human,r=e.acf.meta,i=r?parseInt(r.cost):0,s=Object(n.a)(Array(i).keys());s=s.map(function(e,t){return u.a.createElement("div",{key:t,className:"portfolio-meta__item-value__svg"},u.a.createElement("i",{className:"far fa-money-bill-alt svg-icon--cost"}))});var l='<a target="_blank" href="'.concat(r?r.website:"#",'">View Live Site</a>'),c="portfolio-meta__item col-6 col-sm-6 col-lg-3 mb-3 mb-lg-0";return u.a.createElement("div",{className:"portfolio__meta portfolio-meta"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:c},u.a.createElement("span",{className:"portfolio-meta__item-label",title:"Client"},"Client"),u.a.createElement("hr",{className:"my-2"}),u.a.createElement("span",{className:"portfolio-meta__item-value"},this.renderClientImage())),u.a.createElement("div",{className:c},u.a.createElement("span",{className:"portfolio-meta__item-label",title:"Cost Range"},"Cost"),u.a.createElement("hr",{className:"my-2"}),u.a.createElement("span",{className:"portfolio-meta__item-value"},i>0?s:"Priceless")),u.a.createElement("div",{className:c},u.a.createElement("span",{className:"portfolio-meta__item-label",title:"Went Live"},"Date"),u.a.createElement("hr",{className:"my-2"}),u.a.createElement("time",{className:"portfolio-meta__item-value",dateTime:t},a)),u.a.createElement("div",{className:c},u.a.createElement("span",{className:"portfolio-meta__item-label",title:"Live URL"},"Link"),u.a.createElement("hr",{className:"my-2"}),u.a.createElement("span",{className:"portfolio-meta__item-value portfolio-meta__item-value--url",dangerouslySetInnerHTML:{__html:l}}))))}}]),t}(p.Component),T=Object(O.c)(function(e,t){var a=e.clients,n=t.clients[0];return{client:b()(a,{id:n})}})(M),A=function(e){return u.a.createElement("header",{className:"portfolio__header portfolio-header"},u.a.createElement(E,Object.assign({},e,{isSingle:!0})),u.a.createElement("p",{className:"lead text-center mb-5"},"An amazing project developed with love."),u.a.createElement(T,e))},H=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getClasses",value:function(){return["entry","entry--portfolio","entry--single","portfolio"].join(" ")}},{key:"render",value:function(){return u.a.createElement("article",{className:this.getClasses()},u.a.createElement(A,this.props),u.a.createElement(j,Object.assign({},this.props,{isSingle:!0})))}}]),t}(p.Component),J=function(e){var t=e.options,a=Object(i.a)({},{outer:"placeholder",inner:"entry entry--empty"},t.classes);t.classes=a;var n=function(e){return t.classes[e]};return u.a.createElement("div",{className:n("outer")},u.a.createElement("div",{className:n("inner")},u.a.createElement(C.a,null)))},R=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"isSingle",value:function(){var e=this.props,t=e.posts,a=e.isSingle;return a||1===t.length}},{key:"getOptions",value:function(){var e=this.props.options,t=void 0===e?{}:e;return Object(i.a)({},{classes:{outer:"container",inner:"row"},loading:{enable:!0,classes:{outer:"placeholder"},elements:this.isSingle()?1:6}},t)}},{key:"getClasses",value:function(){var e,t=this.getOptions().classes.inner,a=this.isSingle(),n=["col","main",a?"main--single":"main--archive",(e={},Object(r.a)(e,t,!a),Object(r.a)(e,"main--is-loading:",this.props.loading),e)];return f()(n)}},{key:"renderPosts",value:function(){var e=this,t=this.props,a=t.posts;if(!t.loading&&a.length)return a.map(function(t){var a;switch(t.type){case"portfolio":a=e.isSingle()?u.a.createElement(H,Object.assign({key:t.id},t)):u.a.createElement(P,Object.assign({key:t.id},t));break;default:a=u.a.createElement(y,Object.assign({key:t.id},t,{isSingle:e.isSingle()}))}return a});var r=this.getOptions();return!1!==r.loading.enable?(this.isSingle()?Object(n.a)(Array(1)):Object(n.a)(Array(r.loading.elements))).map(function(e,t){return u.a.createElement(J,{key:t,options:Object(i.a)({},r.loading)})}):void 0}},{key:"render",value:function(){var e=this.getOptions().classes,t=e.outer,a=e.inner;return u.a.createElement("div",{className:t.toString()},u.a.createElement("div",{className:a.toString()},u.a.createElement("main",{id:"postsContainer",className:this.getClasses()},this.renderPosts())))}}]),t}(p.Component);t.a=R},395:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);var n=a(83),r=a.n(n),i=a(109),s=a(7),l=a(8),c=a(10),o=a(9),m=a(11),p=a(0),u=a.n(p),d=a(57),f=a.n(d),h=a(23),v=a(18),g=a(58),b=a(107),_=a.n(b),E=a(59),j=a.n(E),y=a(105),O=a(44),N=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderLink",value:function(e){var t=this.props.current,a=void 0===t?{}:t,n=a.prev_next,r=void 0===n?{}:n,i=r&&r[e],s=["portfolio-prev-next__item","portfolio-prev-next__item--"+e];i?s.push(["portfolio-prev-next__item--has-obj"]):s.push(["portfolio-prev-next__item--disabled"]);var l=["fas"];"next"===e&&l.push(["fa-arrow-right"]),"prev"===e&&l.push(["fa-arrow-left"]);var c="prev"===e?"PREVIOUS PROJECT":"NEXT PROJECT",o=i?"/portfolio/".concat(i.slug):"/",m=i?i.title:"Lorem ipsum dolor",p="{}"===JSON.stringify(a);return u.a.createElement(y.a,{className:s.join(" "),to:o},u.a.createElement("div",{className:"d-flex align-items-center"},"prev"===e&&u.a.createElement("i",{className:l.join(" ")}),u.a.createElement("div",{className:"text-right d-none d-sm-block"},u.a.createElement("span",{className:"portfolio-prev-next__subtitle text-color--primary"},c),u.a.createElement("h4",{className:"portfolio-prev-next__title font-weight-bold mb-0"},m)),"next"===e&&u.a.createElement("i",{className:l.join(" ")}),p&&u.a.createElement(O.a,null)))}},{key:"render",value:function(){return u.a.createElement("div",{className:"portfolio-prev-next"},u.a.createElement("div",{className:"container-fluid"},u.a.createElement("div",{className:"row align-items-center justify-content-between py-4"},u.a.createElement("div",{className:"col-auto col-sm-4"},this.renderLink("prev")),u.a.createElement("div",{className:"col-auto text-center"},u.a.createElement("ul",{className:"portfolio-prev-next__breadcrumbs justify-content-center mb-0 list-inline"},u.a.createElement("li",{className:"list-inline-item"},u.a.createElement(y.a,{to:"/"},"Home")),u.a.createElement("li",{className:"list-inline-item text-muted active"},"Portfolio")),u.a.createElement(y.a,{to:"/portfolio",className:"portfolio-prev-next__all font-weight-bold"},u.a.createElement("i",{className:"fas fa-th-large mr-2","aria-label":"view all"}),u.a.createElement("span",null,"VIEW ALL"))),u.a.createElement("div",{className:"col-auto col-sm-4 text-right"},this.renderLink("next")))))}}]),t}(p.Component),k=a(386),C=a(32),w=(a(395),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){j()(".header")}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&(j()(".header"),this.props.getProjects({slug:this.props.match.params.slug}))}},{key:"shouldComponentUpdate",value:function(e){return this.props.selectedProject!==e.selectedProject}},{key:"render",value:function(){var e=this.props,t=e.selectedProject,a=e.location.pathname,n={title:t&&t.yoast_meta.title||t&&t.title.rendered,description:t&&t.yoast_meta.description,canonical:"https://www.iambican.com"+a},r=[];return r.push(t),r=r.filter(function(e){return null!=e}),u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,null,u.a.createElement("title",null,n.title),u.a.createElement("link",{rel:"canonical",href:n.canonical}),n.description&&u.a.createElement("meta",{name:"description",content:n.description})),u.a.createElement("div",{id:"content",className:"content"},u.a.createElement(N,{current:t}),u.a.createElement(k.a,{posts:r,isSingle:!0})))}}]),t}(p.Component)),x=function(){var e=Object(i.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getProjects({slug:t.match.params.slug});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();t.default=Object(h.c)(function(e,t){var a=e.projects,n=t.match.params.slug;return{selectedProject:_()(a,{slug:n})}},function(e){return Object(v.b)({getProjects:C.e},e)})(Object(g.frontloadConnect)(x,{onMount:!0,onUpdate:!1})(w))}}]);
//# sourceMappingURL=portfolio.bd03c7db.chunk.js.map