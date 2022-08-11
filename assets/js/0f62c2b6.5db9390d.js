"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[9869],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7743:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],o={id:"Syncable",title:"Interface: Syncable<O, TransformBuilder>",sidebar_label:"Syncable",sidebar_position:0,custom_edit_url:null},p=void 0,d={unversionedId:"api/data/interfaces/Syncable",id:"api/data/interfaces/Syncable",title:"Interface: Syncable<O, TransformBuilder>",description:"A source decorated as @syncable must also implement the Syncable",source:"@site/docs/api/data/interfaces/Syncable.md",sourceDirName:"api/data/interfaces",slug:"/api/data/interfaces/Syncable",permalink:"/docs/api/data/interfaces/Syncable",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Syncable",title:"Interface: Syncable<O, TransformBuilder>",sidebar_label:"Syncable",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"SyncUpdatable",permalink:"/docs/api/data/interfaces/SyncUpdatable"},next:{title:"Transform",permalink:"/docs/api/data/interfaces/Transform"}},s=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"_sync",id:"_sync",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"sync",id:"sync",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A source decorated as ",(0,i.kt)("inlineCode",{parentName:"p"},"@syncable")," must also implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"Syncable"),"\ninterface."),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"O")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"Operation"},(0,i.kt)("inlineCode",{parentName:"a"},"Operation")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TransformBuilder")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TransformBuilder"))))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"_sync"},"_","sync"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"_sync"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"transform"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"transform")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"Transform"},(0,i.kt)("inlineCode",{parentName:"a"},"Transform")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"O"),">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/fd40512e/packages/@orbit/data/src/source-interfaces/syncable.ts#L34"},"packages/@orbit/data/src/source-interfaces/syncable.ts:34")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sync"},"sync"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sync"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"transformOrTransforms"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sync")," method to a source. This method accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"Transform")," or array\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"Transform"),"s as an argument and applies it to the source."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"transformOrTransforms")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"Transform"},(0,i.kt)("inlineCode",{parentName:"a"},"Transform")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"O"),">"," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"Transform"},(0,i.kt)("inlineCode",{parentName:"a"},"Transform")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"O"),">","[] ","|"," ",(0,i.kt)("a",{parentName:"td",href:"../modules#transformbuilderfunc"},(0,i.kt)("inlineCode",{parentName:"a"},"TransformBuilderFunc")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"O"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"TransformBuilder"),">")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/fd40512e/packages/@orbit/data/src/source-interfaces/syncable.ts#L27"},"packages/@orbit/data/src/source-interfaces/syncable.ts:27")))}m.isMDXComponent=!0}}]);