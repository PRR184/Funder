(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{56124:function(e,n,t){"use strict";t.r(n);var r=t(15861),a=t(15671),c=t(43144),i=t(60136),s=t(6215),l=t(61120),o=t(87757),u=t.n(o),d=t(67294),p=t(52777),h=t(73626),m=t(48237),f=t(7082),Z=t(66456),k=t(85893);function v(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,l.Z)(e);if(n){var a=(0,l.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,s.Z)(this,t)}}var g=function(e){(0,i.Z)(t,e);var n=v(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,c.Z)(t,[{key:"renderCampaigns",value:function(){var e=this.props.campaigns.map((function(e){return{header:e,description:(0,k.jsx)(Z.Link,{route:"/campaigns/".concat(e),children:(0,k.jsx)("a",{children:"View Campaign"})}),fluid:!0}}));return(0,k.jsx)(h.Z.Group,{items:e})}},{key:"render",value:function(){return(0,k.jsxs)(f.Z,{children:["`        ",(0,k.jsxs)("div",{children:[(0,k.jsx)("h3",{children:"Open Campaigns"}),(0,k.jsx)(Z.Link,{route:"/campaigns/new",children:(0,k.jsx)("a",{children:(0,k.jsx)(m.Z,{content:"Create Campaign",icon:"add circle",primary:!0,floated:"right"})})}),this.renderCampaigns()]})]})}}],[{key:"getInitialProps",value:function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.methods.getDeployedCampaigns().call();case 2:return n=e.sent,e.abrupt("return",{campaigns:n});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),t}(d.Component);n.default=g},78581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(56124)}])},73626:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(87462),a=t(94578),c=t(86010),i=(t(45697),t(67294)),s=t(92063),l=t(28935),o=t(12519),u=t(92248),d=t(68867),p=t(4788);function h(e){var n=e.children,t=e.className,a=e.content,d=e.textAlign,p=(0,c.Z)((0,s.X4)(d),"description",t),m=(0,l.Z)(h,e),f=(0,o.Z)(h,e);return i.createElement(f,(0,r.Z)({},m,{className:p}),u.kK(n)?a:n)}h.handledProps=["as","children","className","content","textAlign"],h.propTypes={};var m=h;function f(e){var n=e.children,t=e.className,a=e.content,d=e.textAlign,p=(0,c.Z)((0,s.X4)(d),"header",t),h=(0,l.Z)(f,e),m=(0,o.Z)(f,e);return i.createElement(m,(0,r.Z)({},h,{className:p}),u.kK(n)?a:n)}f.handledProps=["as","children","className","content","textAlign"],f.propTypes={};var Z=f;function k(e){var n=e.children,t=e.className,a=e.content,d=e.textAlign,p=(0,c.Z)((0,s.X4)(d),"meta",t),h=(0,l.Z)(k,e),m=(0,o.Z)(k,e);return i.createElement(m,(0,r.Z)({},h,{className:p}),u.kK(n)?a:n)}k.handledProps=["as","children","className","content","textAlign"],k.propTypes={};var v=k;function g(e){var n=e.children,t=e.className,a=e.content,d=e.description,h=e.extra,f=e.header,k=e.meta,N=e.textAlign,x=(0,c.Z)((0,s.lG)(h,"extra"),(0,s.X4)(N),"content",t),y=(0,l.Z)(g,e),C=(0,o.Z)(g,e);return u.kK(n)?u.kK(a)?i.createElement(C,(0,r.Z)({},y,{className:x}),(0,p.Go)(Z,(function(e){return{content:e}}),f,{autoGenerateKey:!1}),(0,p.Go)(v,(function(e){return{content:e}}),k,{autoGenerateKey:!1}),(0,p.Go)(m,(function(e){return{content:e}}),d,{autoGenerateKey:!1})):i.createElement(C,(0,r.Z)({},y,{className:x}),a):i.createElement(C,(0,r.Z)({},y,{className:x}),n)}g.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],g.propTypes={};var N=g,x=t(30335);function y(e){var n=e.centered,t=e.children,a=e.className,d=e.content,p=e.doubling,h=e.items,m=e.itemsPerRow,f=e.stackable,Z=e.textAlign,k=(0,c.Z)("ui",(0,s.lG)(n,"centered"),(0,s.lG)(p,"doubling"),(0,s.lG)(f,"stackable"),(0,s.X4)(Z),(0,s.H0)(m),"cards",a),v=(0,l.Z)(y,e),g=(0,o.Z)(y,e);if(!u.kK(t))return i.createElement(g,(0,r.Z)({},v,{className:k}),t);if(!u.kK(d))return i.createElement(g,(0,r.Z)({},v,{className:k}),d);var N=(0,x.Z)(h,(function(e){var n,t=null!=(n=e.key)?n:[e.header,e.description].join("-");return i.createElement(E,(0,r.Z)({key:t},e))}));return i.createElement(g,(0,r.Z)({},v,{className:k}),N)}y.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],y.propTypes={};var C=y,E=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).handleClick=function(e){var t=n.props.onClick;t&&t(e,n.props)},n}return(0,a.Z)(n,e),n.prototype.render=function(){var e=this.props,t=e.centered,a=e.children,p=e.className,h=e.color,m=e.content,f=e.description,Z=e.extra,k=e.fluid,v=e.header,g=e.href,x=e.image,y=e.link,C=e.meta,E=e.onClick,G=e.raised,w=(0,c.Z)("ui",h,(0,s.lG)(t,"centered"),(0,s.lG)(k,"fluid"),(0,s.lG)(y,"link"),(0,s.lG)(G,"raised"),"card",p),K=(0,l.Z)(n,this.props),P=(0,o.Z)(n,this.props,(function(){if(E)return"a"}));return u.kK(a)?u.kK(m)?i.createElement(P,(0,r.Z)({},K,{className:w,href:g,onClick:this.handleClick}),d.Z.create(x,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(f||v||C)&&i.createElement(N,{description:f,header:v,meta:C}),Z&&i.createElement(N,{extra:!0},Z)):i.createElement(P,(0,r.Z)({},K,{className:w,href:g,onClick:this.handleClick}),m):i.createElement(P,(0,r.Z)({},K,{className:w,href:g,onClick:this.handleClick}),a)},n}(i.Component);E.handledProps=["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"],E.propTypes={},E.Content=N,E.Description=m,E.Group=C,E.Header=Z,E.Meta=v}},function(e){e.O(0,[774,933,83,841,888,179],(function(){return n=78581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);