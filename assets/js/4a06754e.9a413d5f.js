(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[7976],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,b=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(b,o(o({ref:t},l),{},{components:r})):n.createElement(b,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1436:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],s={id:"FindRelatedRecordsRequest",title:"Interface: FindRelatedRecordsRequest",sidebar_label:"FindRelatedRecordsRequest",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"api/jsonapi/interfaces/FindRelatedRecordsRequest",id:"api/jsonapi/interfaces/FindRelatedRecordsRequest",isDocsHomePage:!1,title:"Interface: FindRelatedRecordsRequest",description:"Hierarchy",source:"@site/docs/api/jsonapi/interfaces/FindRelatedRecordsRequest.md",sourceDirName:"api/jsonapi/interfaces",slug:"/api/jsonapi/interfaces/FindRelatedRecordsRequest",permalink:"/docs/next/api/jsonapi/interfaces/FindRelatedRecordsRequest",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"FindRelatedRecordsRequest",title:"Interface: FindRelatedRecordsRequest",sidebar_label:"FindRelatedRecordsRequest",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"FindRelatedRecordRequest",permalink:"/docs/next/api/jsonapi/interfaces/FindRelatedRecordRequest"},next:{title:"JSONAPIDocumentDeserializationOptions",permalink:"/docs/next/api/jsonapi/interfaces/JSONAPIDocumentDeserializationOptions"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"op",id:"op",children:[]},{value:"options",id:"options",children:[]},{value:"record",id:"record",children:[]},{value:"relationship",id:"relationship",children:[]}]}],u={toc:l};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/interfaces/QueryRequest"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryRequest"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"FindRelatedRecordsRequest"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"op"},"op"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"op"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"findRelatedRecords"')),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/interfaces/QueryRequest"},"QueryRequest"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/interfaces/QueryRequest#op"},"op")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/jsonapi/src/lib/query-requests.ts#L51"},"packages/@orbit/jsonapi/src/lib/query-requests.ts:51")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"options"},"options"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"options"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/interfaces/JSONAPIRequestOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"JSONAPIRequestOptions"))),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/interfaces/QueryRequest"},"QueryRequest"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/interfaces/QueryRequest#options"},"options")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/jsonapi/src/lib/query-requests.ts#L31"},"packages/@orbit/jsonapi/src/lib/query-requests.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"record"},"record"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"record"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"RecordIdentity")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/jsonapi/src/lib/query-requests.ts#L52"},"packages/@orbit/jsonapi/src/lib/query-requests.ts:52")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"relationship"},"relationship"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"relationship"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/jsonapi/src/lib/query-requests.ts#L53"},"packages/@orbit/jsonapi/src/lib/query-requests.ts:53")))}d.isMDXComponent=!0}}]);