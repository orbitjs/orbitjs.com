"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[2876],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return h}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),h=i,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1459:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var n=t(3117),i=t(102),o=(t(7294),t(3905)),a=["components"],c={id:"RecordChangeset",title:"Interface: RecordChangeset",sidebar_label:"RecordChangeset",sidebar_position:0,custom_edit_url:null},s=void 0,d={unversionedId:"api/record-cache/interfaces/RecordChangeset",id:"api/record-cache/interfaces/RecordChangeset",title:"Interface: RecordChangeset",description:"Properties",source:"@site/docs/api/record-cache/interfaces/RecordChangeset.md",sourceDirName:"api/record-cache/interfaces",slug:"/api/record-cache/interfaces/RecordChangeset",permalink:"/docs/api/record-cache/interfaces/RecordChangeset",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"RecordChangeset",title:"Interface: RecordChangeset",sidebar_label:"RecordChangeset",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"RecordCacheUpdateDetails",permalink:"/docs/api/record-cache/interfaces/RecordCacheUpdateDetails"},next:{title:"RecordRelationshipIdentity",permalink:"/docs/api/record-cache/interfaces/RecordRelationshipIdentity"}},l=[{value:"Properties",id:"properties",children:[{value:"addInverseRelationships",id:"addinverserelationships",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"removeInverseRelationships",id:"removeinverserelationships",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"removeRecords",id:"removerecords",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"setRecords",id:"setrecords",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],p={toc:l};function u(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"addinverserelationships"},"addInverseRelationships"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"addInverseRelationships"),": ",(0,o.kt)("a",{parentName:"p",href:"RecordRelationshipIdentity"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordRelationshipIdentity")),"[]"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/474ea242/packages/@orbit/record-cache/src/record-accessor.ts#L28"},"record-cache/src/record-accessor.ts:28")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"removeinverserelationships"},"removeInverseRelationships"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"removeInverseRelationships"),": ",(0,o.kt)("a",{parentName:"p",href:"RecordRelationshipIdentity"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordRelationshipIdentity")),"[]"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/474ea242/packages/@orbit/record-cache/src/record-accessor.ts#L29"},"record-cache/src/record-accessor.ts:29")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"removerecords"},"removeRecords"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"removeRecords"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordIdentity"),"[]"),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/474ea242/packages/@orbit/record-cache/src/record-accessor.ts#L27"},"record-cache/src/record-accessor.ts:27")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"setrecords"},"setRecords"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"setRecords"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"InitializedRecord"),"[]"),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/474ea242/packages/@orbit/record-cache/src/record-accessor.ts#L26"},"record-cache/src/record-accessor.ts:26")))}u.isMDXComponent=!0}}]);