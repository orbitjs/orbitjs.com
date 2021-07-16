(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[2128],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},884:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],s={title:"Introduction"},c=void 0,l={unversionedId:"intro",id:"version-0.15/intro",isDocsHomePage:!1,title:"Introduction",description:"What is Orbit.js?",source:"@site/versioned_docs/version-0.15/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/0.15/intro",editUrl:"https://github.com/orbitjs/orbit/edit/main/website/versioned_docs/version-0.15/intro.md",version:"0.15",frontMatter:{title:"Introduction"},sidebar:"version-0.15/docsSidebar",next:{title:"Getting started",permalink:"/docs/0.15/getting-started"}},d=[{value:"What is Orbit.js?",id:"what-is-orbitjs",children:[]},{value:"Goals",id:"goals",children:[]},{value:"Basic constraints",id:"basic-constraints",children:[{value:"Disparate sources",id:"disparate-sources",children:[]},{value:"Disparate data",id:"disparate-data",children:[]},{value:"Compatible interfaces",id:"compatible-interfaces",children:[]},{value:"Normalized data",id:"normalized-data",children:[]},{value:"Notifications",id:"notifications",children:[]},{value:"Flow control",id:"flow-control",children:[]},{value:"Change tracking",id:"change-tracking",children:[]}]},{value:"Orbit primitives",id:"orbit-primitives",children:[{value:"Records",id:"records",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Source",id:"source",children:[]},{value:"Transform",id:"transform",children:[]},{value:"Query",id:"query",children:[]},{value:"Log",id:"log",children:[]},{value:"Task",id:"task",children:[]},{value:"Bucket",id:"bucket",children:[]},{value:"Coordinator",id:"coordinator",children:[]}]},{value:"The Orbit Philosophy",id:"the-orbit-philosophy",children:[]}],p={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-orbitjs"},"What is Orbit.js?"),(0,i.kt)("p",null,"Orbit is a framework for orchestrating access, transformation, and\nsynchronization between data sources."),(0,i.kt)("p",null,"Orbit is written in ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org"},"Typescript")," and distributed\non ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/org/orbit"},"npm")," as packages containing a variety of\nmodule formats and ES language levels. Most Orbit packages are isomorphic\u2014they\ncan run in modern browsers as well as in the ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js"),"\nruntime."),(0,i.kt)("h2",{id:"goals"},"Goals"),(0,i.kt)("p",null,"Orbit was primarily designed to support the data needs of ambitious client-side\nweb applications, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Optimistic and pessimistic UX patterns.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pluggable sources that share common interfaces, to allow similar behavior on\ndifferent devices.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Connection durability by queueing and retrying requests.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Application durability by persisting all transient state.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Warm caches of data available immediately on startup.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Client-first / serverless development.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Custom request coordination across multiple sources, allowing for priority\nand fallback plans.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Branching and merging of data caches.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Deterministic change tracking.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Undo / redo editing support."))),(0,i.kt)("h2",{id:"basic-constraints"},"Basic constraints"),(0,i.kt)("p",null,"In order to meet these ambitious goals, Orbit embraces a set of basic\nconstraints related to data sources and interactions between them."),(0,i.kt)("h3",{id:"disparate-sources"},"Disparate sources"),(0,i.kt)("img",{src:"/img/concepts/disparate-sources.png",class:"medium-pic right-pic"}),(0,i.kt)("p",null,"Any number of data sources of varying types and faculties may be required to\nbuild any given web application."),(0,i.kt)("div",{class:"clearfix"}),(0,i.kt)("h3",{id:"disparate-data"},"Disparate data"),(0,i.kt)("img",{src:"/img/concepts/disparate-data.png",class:"medium-pic right-pic"}),(0,i.kt)("p",null,"Sources of data vary widely in how they internally represent and access that\ndata."),(0,i.kt)("div",{class:"clearfix"}),(0,i.kt)("h3",{id:"compatible-interfaces"},"Compatible interfaces"),(0,i.kt)("img",{src:"/img/concepts/common-interfaces.png",class:"medium-pic right-pic"}),(0,i.kt)("p",null,"Communication between sources must happen using a compatible set of interfaces."),(0,i.kt)("div",{class:"clearfix"}),(0,i.kt)("h3",{id:"normalized-data"},"Normalized data"),(0,i.kt)("img",{src:"/img/concepts/normalized-data.png",class:"medium-pic right-pic"}),(0,i.kt)("p",null,"Data that flows between sources must be normalized to a shared schema."),(0,i.kt)("div",{class:"clearfix"}),(0,i.kt)("h3",{id:"notifications"},"Notifications"),(0,i.kt)("img",{src:"/img/concepts/evented-connections.png",class:"medium-pic right-pic"}),(0,i.kt)("p",null,"Sources need a notification system through which changes can be\nobserved. Changes in one source must be able to trigger changes in other\nsources."),(0,i.kt)("div",{class:"clearfix"}),(0,i.kt)("h3",{id:"flow-control"},"Flow control"),(0,i.kt)("img",{src:"/img/concepts/flow-control.png",class:"medium-pic right-pic"}),(0,i.kt)("p",null,"Data flow across sources must be configurable. Flows can be ",(0,i.kt)("em",{parentName:"p"},"optimistic"),"\n(successful regardless of their impact) or ",(0,i.kt)("em",{parentName:"p"},"pessimistic")," (blocked until\ndependent changes have resolved)."),(0,i.kt)("div",{class:"clearfix"}),(0,i.kt)("h3",{id:"change-tracking"},"Change tracking"),(0,i.kt)("img",{src:"/img/concepts/change-tracking.png",class:"medium-pic right-pic"}),(0,i.kt)("p",null,"Mutations, and not just the effects of mutations, must be trackable to allow\nchanges to be logged, diff'd, sync\u2019d, and even reverted."),(0,i.kt)("div",{class:"clearfix"}),(0,i.kt)("h2",{id:"orbit-primitives"},"Orbit primitives"),(0,i.kt)("p",null,"Orbit's core primitives were developed to align with the goals and\nconstraints enumerated above."),(0,i.kt)("h3",{id:"records"},"Records"),(0,i.kt)("p",null,"Records are used to represent data in a normalized form. Each record has a\n",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", which together establish its identity. Records may also include\nother fields, such as attributes and relationships with other records."),(0,i.kt)("h3",{id:"schema"},"Schema"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Schema")," defines all the models in a given domain. Each ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," defines the\ncharacteristics for records of a given type."),(0,i.kt)("h3",{id:"source"},"Source"),(0,i.kt)("p",null,"Every source of data, from an in-memory store to an IndexedDB database to a REST\nserver, is represented as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Source"),". Sources vary widely in their capabilities:\nsome may support interfaces for updating and/or querying records, while other\nsources may simply broadcast changes. Schemas provide sources with an\nunderstanding of the data they manage."),(0,i.kt)("h3",{id:"transform"},"Transform"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Transform"),' is used to represent a set of record mutations, or "operations".\nEach ',(0,i.kt)("inlineCode",{parentName:"p"},"Operation")," represents a single change to a record or relationship (e.g.\nadding a record, updating a field, deleting a relationship, etc.). Transforms\nmust be applied atomically\u2014all operations succeed or fail together."),(0,i.kt)("h3",{id:"query"},"Query"),(0,i.kt)("p",null,"The contents of sources can be interrogated using a ",(0,i.kt)("inlineCode",{parentName:"p"},"Query"),". Orbit comes with a\nstandard set of query expressions for finding records and related records. These\nexpressions can be paired with refinements (e.g. filters, sort order, etc.). A\nquery builder is provided to improve the ergonomics of composing queries."),(0,i.kt)("h3",{id:"log"},"Log"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Log")," provides a history of transforms applied to each source."),(0,i.kt)("h3",{id:"task"},"Task"),(0,i.kt)("p",null,"Every action performed upon sources, whether an update request or a query, is\nmodeled as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Task"),". Tasks are queued by sources and performed asynchronously\nand serially."),(0,i.kt)("h3",{id:"bucket"},"Bucket"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Bucket")," is used to persist application state, such as queued tasks and\nchange logs."),(0,i.kt)("h3",{id:"coordinator"},"Coordinator"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Coordinator"),' provides the declarative "wiring" needed to keep an Orbit\napplication working smoothly. A coordinator observes any number of sources and\napplies coordination strategies to keep them in sync, handle problems, perform\nlogging, and more. Strategies can be customized to observe only certain events\non specific sources.'),(0,i.kt)("h2",{id:"the-orbit-philosophy"},"The Orbit Philosophy"),(0,i.kt)("p",null,"The primitives in Orbit were developed to be as composable and interchangeable\nas possible. Every source that can be updated understands transforms and\noperations. Every source that can be queried understands query expressions.\nEvery bucket that can persist state supports the same interfaces."),(0,i.kt)("p",null,"Orbit's primitives allow you to start simple and add complexity gradually\nwithout impacting your working code. Need to support real time sockets or SSE?\nAdd another source and coordination strategy. Need offline support? Add another\nsource and coordination strategy. When offline, you can issue the same queries\nagainst your in-memory store as you could against a backend REST server."),(0,i.kt)("p",null,'Not only does Orbit allow you to incur the cost of complexity gradually, that\ncost can be contained. New capabilities can often be added through declarative\nupfront "wiring" rather than imperative handlers spread throughout your\ncodebase.'),(0,i.kt)("p",null,"Although Orbit does not pretend to absorb all the complexity of writing\nambitious data-driven applications, it's hoped that Orbit's composable and\ndeclarative approach makes it not only attainable but actually enjoyable :)"))}u.isMDXComponent=!0}}]);