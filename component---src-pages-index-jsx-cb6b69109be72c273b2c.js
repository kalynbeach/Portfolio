(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(154),o=a(152);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Home"}),r.a.createElement("h2",null,"Web Engineer based in Los Angeles"))}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(144),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(146),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},147:function(e,t,a){e.exports={container:"layout-module--container--28I70",page:"layout-module--page--vcr7D"}},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Kalyn Beach"}}}}},149:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},150:function(e,t,a){e.exports={footer:"footer-module--footer--V5wV3",links:"footer-module--links--Qlx7p",copyright:"footer-module--copyright--3ELsL"}},151:function(e,t,a){e.exports={nav:"nav-module--nav--3m9Ta",links:"nav-module--links--3Y9Le"}},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(155),u=a.n(l),s=a(145);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Kalyn Beach",description:"",author:"@kalynbeach"}}}}},154:function(e,t,a){"use strict";var n=a(148),r=a(145),i=a(4),o=a.n(i),c=a(0),l=a.n(c),u=a(147),s=a.n(u),d=a(150),m=a.n(d),p=function(){return l.a.createElement("footer",{className:m.a.footer},l.a.createElement("div",{className:m.a.links},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/kalynbeach"},"GitHub")))),l.a.createElement("div",{className:m.a.copyright},l.a.createElement("span",null,"© Kalyn Beach ",(new Date).getFullYear())))},f=a(151),y=a.n(f),h=function(){return l.a.createElement("div",{className:y.a.nav},l.a.createElement("div",{className:y.a.title},l.a.createElement(r.Link,{to:"/"},l.a.createElement("h1",null,"Kalyn Beach"))),l.a.createElement("div",{className:y.a.links},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/about/"},"About")),l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/work/"},"Work")),l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/contact/"},"Contact")))))},g=function(e){var t=e.children;return l.a.createElement(r.StaticQuery,{query:"755544856",render:function(){return l.a.createElement("div",{className:s.a.container},l.a.createElement(h,null),l.a.createElement("div",{className:s.a.page},t),l.a.createElement(p,null))},data:n})};g.propTypes={children:o.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-index-jsx-cb6b69109be72c273b2c.js.map