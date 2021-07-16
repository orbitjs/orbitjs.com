(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[7698],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},677:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],l={title:"Data flows"},s=void 0,p={unversionedId:"data-flows",id:"version-0.16/data-flows",isDocsHomePage:!1,title:"Data flows",description:"Orbit enables the coordination of many independent sources of data, each of",source:"@site/versioned_docs/version-0.16/data-flows.md",sourceDirName:".",slug:"/data-flows",permalink:"/docs/data-flows",editUrl:"https://github.com/orbitjs/orbit/edit/main/website/versioned_docs/version-0.16/data-flows.md",version:"0.16",frontMatter:{title:"Data flows"},sidebar:"version-0.16/docsSidebar",previous:{title:"Task processing",permalink:"/docs/task-processing"},next:{title:"Coordination strategies",permalink:"/docs/coordination"}},c=[{value:"&quot;Request up, sync down&quot;",id:"request-up-sync-down",children:[]},{value:"Coordinating sources",id:"coordinating-sources",children:[{value:"Blocking vs. non-blocking",id:"blocking-vs-non-blocking",children:[]},{value:"Coordination guidelines",id:"coordination-guidelines",children:[]}]}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Orbit enables the coordination of many independent sources of data, each of\nwhich may internally handle queries and updates differently. It's easy to\nimagine tying oneself in knots with such potential complexity. However, by\nfollowing Orbit's conventions and a few guidelines, you can compose data to\nflow predictably and reliably through your application."),(0,o.kt)("h2",{id:"request-up-sync-down"},'"Request up, sync down"'),(0,o.kt)("p",null,'Orbit divides the movement of data into two different "flows":'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Request flow")," - Requests to query or update data originate from an\napplication and flow upstream to a source that can fulfill the request.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Sync flow")," - Mutations then flow back downstream and are synchronized\nwith all the sources that are concerned."))),(0,o.kt)("p",null,"Every source interface has events and methods that correspond with one of these\nflows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Updatable"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Queryable"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Pushable"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Pullable")," interfaces all\nparticipate in the request flow.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Syncable")," interface participates in the sync flow."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"Request up, sync down" is a variant of the "data down, actions up" mnemonic\npopularized in the ',(0,o.kt)("a",{parentName:"p",href:"https://emberjs.com/"},"Ember.js"),' community. In fact, most\nfrontend frameworks adopt a similar pattern for handling actions and returning\ndata. Orbit fits well with these patterns: an action triggered by a user can\nspawn an Orbit "request", which can lead to responses that "sync" data back\ndown, typically ending in an update to a view. In this way, "request up, sync\ndown" can be seen as a continuation of the "data down, actions up" pattern.')),(0,o.kt)("h2",{id:"coordinating-sources"},"Coordinating sources"),(0,o.kt)("p",null,"Request and sync flows can be coordinated across sources by configuring an event\nlistener for one source that triggers actions on another."),(0,o.kt)("p",null,"Let's take a look at what events can trigger other actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Update events (",(0,o.kt)("inlineCode",{parentName:"p"},"beforeUpdate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"beforePush"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"push"),") can trigger\n",(0,o.kt)("inlineCode",{parentName:"p"},"push"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Query events (",(0,o.kt)("inlineCode",{parentName:"p"},"beforeQuery"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"beforePull"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pull"),") can trigger\n",(0,o.kt)("inlineCode",{parentName:"p"},"pull"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Change events (",(0,o.kt)("inlineCode",{parentName:"p"},"transform"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeSync"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sync"),") can trigger ",(0,o.kt)("inlineCode",{parentName:"p"},"sync"),"."))),(0,o.kt)("h3",{id:"blocking-vs-non-blocking"},"Blocking vs. non-blocking"),(0,o.kt)("p",null,"We can coordinate sources through simple event listeners, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'memory.on("beforeUpdate", transform => {\n  remote.push(transform);\n});\n')),(0,o.kt)("p",null,'The above listener is "non-blocking" because it doesn\'t return anything to\nthe emitter. The call to ',(0,o.kt)("inlineCode",{parentName:"p"},"remote.push()")," is async and may take a while to\ncomplete, so it will proceed in parallel with the ",(0,o.kt)("inlineCode",{parentName:"p"},"memory")," source being updated."),(0,o.kt)("p",null,'As an alternative, we can use a "blocking" strategy in our event listener by\nsimply returning a promise:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'memory.on("beforeUpdate", transform => remote.push(transform));\n')),(0,o.kt)("p",null,"This will prevent the ",(0,o.kt)("inlineCode",{parentName:"p"},"memory")," source from updating before the transform has been pushed\nup to the ",(0,o.kt)("inlineCode",{parentName:"p"},"remote")," source. An error in ",(0,o.kt)("inlineCode",{parentName:"p"},"remote.push")," will cause ",(0,o.kt)("inlineCode",{parentName:"p"},"memory.update"),"\nto error as well."),(0,o.kt)("h3",{id:"coordination-guidelines"},"Coordination guidelines"),(0,o.kt)("p",null,"Here are some guidelines for working with data flows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consider the full arc of each request\u2014how it will flow up to be fulfilled,\nand how results and/or errors will be synchronized on the way back down.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Avoid spawning requests from the synchronization flow. A change event\n(",(0,o.kt)("inlineCode",{parentName:"p"},"beforeSync"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sync"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"transform"),") should only ever trigger a ",(0,o.kt)("inlineCode",{parentName:"p"},"sync"),"\naction.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For pessimistic requests in which you must guarantee success before\nproceeding, use blocking connections for all the request and\nsync flows that may be involved."))),(0,o.kt)("p",null,"Last but not least, it's recommended that you use a ",(0,o.kt)("inlineCode",{parentName:"p"},"Coordinator")," instead of\nmanually configuring event listeners. Read on to understand why ..."))}d.isMDXComponent=!0}}]);