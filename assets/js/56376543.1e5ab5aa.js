(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[7754],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=d(n),c=r,u=k["".concat(o,".").concat(c)]||k[c]||m[c]||i;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1688:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return s},default:function(){return k}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],p={id:"Evented",title:"Interface: Evented<Event>",sidebar_label:"Evented",sidebar_position:0,custom_edit_url:null},o=void 0,d={unversionedId:"api/core/interfaces/Evented",id:"api/core/interfaces/Evented",isDocsHomePage:!1,title:"Interface: Evented<Event>",description:"A class decorated as @evented should also implement the Evented",source:"@site/docs/api/core/interfaces/Evented.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/Evented",permalink:"/docs/next/api/core/interfaces/Evented",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"Evented",title:"Interface: Evented<Event>",sidebar_label:"Evented",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"BucketSettings",permalink:"/docs/next/api/core/interfaces/BucketSettings"},next:{title:"LogOptions",permalink:"/docs/next/api/core/interfaces/LogOptions"}},s=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"emit",id:"emit",children:[]},{value:"listeners",id:"listeners",children:[]},{value:"off",id:"off",children:[]},{value:"on",id:"on",children:[]},{value:"one",id:"one",children:[]}]}],m={toc:s};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A class decorated as ",(0,i.kt)("inlineCode",{parentName:"p"},"@evented")," should also implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"Evented"),"\ninterface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { evented, Evented } from '@orbit/core';\n\n@evented\nclass Source implements Evented {\n  // ... Evented implementation\n}\n")),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Event")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"string``string"))))),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Evented"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/core/classes/TaskQueue"},(0,i.kt)("inlineCode",{parentName:"a"},"TaskQueue"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/core/classes/Bucket"},(0,i.kt)("inlineCode",{parentName:"a"},"Bucket"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/core/classes/Log"},(0,i.kt)("inlineCode",{parentName:"a"},"Log"))))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"emit"},"emit"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"emit"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"event"),", ...",(0,i.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"event")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Event"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),"[]")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/core/src/evented.ts#L29"},"packages/@orbit/core/src/evented.ts:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"listeners"},"listeners"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"listeners"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"event"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/core/modules#listener"},(0,i.kt)("inlineCode",{parentName:"a"},"Listener")),"[]"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"event")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Event"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/core/modules#listener"},(0,i.kt)("inlineCode",{parentName:"a"},"Listener")),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/core/src/evented.ts#L30"},"packages/@orbit/core/src/evented.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"off"},"off"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"off"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"event"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listener?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"event")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Event"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"listener?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/core/modules#listener"},(0,i.kt)("inlineCode",{parentName:"a"},"Listener")))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/core/src/evented.ts#L27"},"packages/@orbit/core/src/evented.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"on"},"on"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"on"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"event"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listener"),"): () => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"event")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Event"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"listener")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/core/modules#listener"},(0,i.kt)("inlineCode",{parentName:"a"},"Listener")))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fn")),(0,i.kt)("p",null,"\u25b8 (): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h5",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/core/src/evented.ts#L26"},"packages/@orbit/core/src/evented.ts:26")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"one"},"one"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"one"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"event"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"listener"),"): () => ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"event")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Event"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"listener")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/core/modules#listener"},(0,i.kt)("inlineCode",{parentName:"a"},"Listener")))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fn")),(0,i.kt)("p",null,"\u25b8 (): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h5",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/core/src/evented.ts#L28"},"packages/@orbit/core/src/evented.ts:28")))}k.isMDXComponent=!0}}]);