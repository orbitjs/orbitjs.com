(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[2153],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9804:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),o=["components"],s={title:"Packages"},p=void 0,l={unversionedId:"packages",id:"packages",isDocsHomePage:!1,title:"Packages",description:"Orbit is distributed on npm through the",source:"@site/docs/packages.md",sourceDirName:".",slug:"/packages",permalink:"/docs/next/packages",editUrl:"https://github.com/orbitjs/orbit/edit/main/website/docs/packages.md",version:"current",frontMatter:{title:"Packages"},sidebar:"docs",previous:{title:"What's new in v0.17",permalink:"/docs/next/whats-new"},next:{title:"Modeling data",permalink:"/docs/next/modeling-data"}},c=[{value:"Core libraries",id:"core-libraries",children:[]},{value:"Standard data sources",id:"standard-data-sources",children:[]},{value:"Standard persistence buckets",id:"standard-persistence-buckets",children:[]},{value:"Additional libraries",id:"additional-libraries",children:[]}],u={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Orbit is distributed on npm through the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/org/orbit"},"@orbit")," organization in several packages."),(0,i.kt)("h2",{id:"core-libraries"},"Core libraries"),(0,i.kt)("p",null,"Orbit consists of the following core libraries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@orbit/core"},"@orbit/core")," - A core\nset of primitives for performing, tracking, and responding to asynchronous\ntasks, including:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An event system that allows listeners to engage with the fulfillment of\nevents by returning promises.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An asynchronous task processing queue.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A log that tracks a history of changes and allows for revision and\ninterrogation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A bucket interface for persisting state. Used by logs and queues.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@orbit/data"},"@orbit/data")," - Applies\nthe core Orbit primitives to data sources. Includes the following elements:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A schema for defining models, including attributes and relationships.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Operations used to manipulate records (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"addRecord"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"removeRecord"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"addToHasMany"),", etc.).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Transforms, which are composed of any number of operations, and must be\nperformed transactionally.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A query language that allows query expressions to be composed in a flexible\nAST form.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A base ",(0,i.kt)("inlineCode",{parentName:"p"},"Source")," class that can be used to abstract any source of data.\nSources can be decorated as ",(0,i.kt)("inlineCode",{parentName:"p"},"pullable"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pushable"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"queryable"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"syncable"),",\nand/or ",(0,i.kt)("inlineCode",{parentName:"p"},"updatable")," - each decorator provides a unique interface that allows\nfor transforms and queries to be applied as appropriate.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@orbit/coordinator"},"@orbit/coordinator")," -\nA coordinator and set of coordination strategies for managing data flow and\nkeeping Orbit Data sources in sync.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@orbit/utils"},"@orbit/utils")," - A\ncommon set of utility functions used by Orbit libs."))),(0,i.kt)("h2",{id:"standard-data-sources"},"Standard data sources"),(0,i.kt)("p",null,"Orbit provides the following sources for accessing and persisting data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@orbit/memory"},"@orbit/memory")," - An\nin-memory data source that supports complex querying and updating. Because\nmemory sources maintain data in immutable data structures, they can be efficiently\nforked. Forked memory sources can diverge from the master memory source, and then the changes\ncan be merged later.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@orbit/jsonapi"},"@orbit/jsonapi")," -\nProvides full CRUD support, including complex querying, for a RESTful API that\nconforms to the ",(0,i.kt)("a",{parentName:"p",href:"http://jsonapi.org/"},"JSON:API")," specification.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@orbit/local-storage"},"@orbit/local-storage")," -\nPersists records to local storage.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@orbit/indexeddb"},"@orbit/indexeddb")," -\nPersists records to IndexedDB."))),(0,i.kt)("p",null,"These standard sources can provide guidance for building your own custom sources\nas well."),(0,i.kt)("h2",{id:"standard-persistence-buckets"},"Standard persistence buckets"),(0,i.kt)("p",null,"Buckets are used to persist application state, such as queued requests and\nchange logs. Standard buckets include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@orbit/local-storage-bucket"},"@orbit/local-storage-bucket")," -\nPersists state to local storage.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@orbit/indexeddb-bucket"},"@orbit/indexeddb-bucket")," -\nPersists state to IndexedDB."))),(0,i.kt)("h2",{id:"additional-libraries"},"Additional libraries"),(0,i.kt)("p",null,"Additional libraries related to Orbit include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ember-orbit"},"ember-orbit")," - An Ember.js data\nlayer heavily inspired by Ember Data.")))}d.isMDXComponent=!0}}]);