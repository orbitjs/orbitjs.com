(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[4403],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),d=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=d(e.components);return o.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||i;return t?o.createElement(f,a(a({ref:r},s),{},{components:t})):o.createElement(f,a({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=u;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3272:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var o=t(2122),n=t(9756),i=(t(7294),t(3905)),a=["components"],p={id:"RemoveFromRelatedRecordsOperation",title:"Interface: RemoveFromRelatedRecordsOperation",sidebar_label:"RemoveFromRelatedRecordsOperation",sidebar_position:0,custom_edit_url:null},c=void 0,d={unversionedId:"api/records/interfaces/RemoveFromRelatedRecordsOperation",id:"api/records/interfaces/RemoveFromRelatedRecordsOperation",isDocsHomePage:!1,title:"Interface: RemoveFromRelatedRecordsOperation",description:"Remove from has-many relationship operation.",source:"@site/docs/api/records/interfaces/RemoveFromRelatedRecordsOperation.md",sourceDirName:"api/records/interfaces",slug:"/api/records/interfaces/RemoveFromRelatedRecordsOperation",permalink:"/docs/next/api/records/interfaces/RemoveFromRelatedRecordsOperation",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"RemoveFromRelatedRecordsOperation",title:"Interface: RemoveFromRelatedRecordsOperation",sidebar_label:"RemoveFromRelatedRecordsOperation",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"RelatedRecordsFilterSpecifier",permalink:"/docs/next/api/records/interfaces/RelatedRecordsFilterSpecifier"},next:{title:"RemoveRecordOperation",permalink:"/docs/next/api/records/interfaces/RemoveRecordOperation"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"op",id:"op",children:[]},{value:"options",id:"options",children:[]},{value:"record",id:"record",children:[]},{value:"relatedRecord",id:"relatedrecord",children:[]},{value:"relationship",id:"relationship",children:[]}]}],l={toc:s};function u(e){var r=e.components,t=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Remove from has-many relationship operation."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Operation")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"RemoveFromRelatedRecordsOperation"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"op"},"op"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"op"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"removeFromRelatedRecords"')),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,"Operation.op"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/records/src/record-operation.ts#L70"},"packages/@orbit/records/src/record-operation.ts:70")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"options"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestOptions")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"Operation.options"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"packages/@orbit/data/dist/modules/operation.d.ts:4"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"record"},"record"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"record"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/records/interfaces/RecordIdentity"},(0,i.kt)("inlineCode",{parentName:"a"},"RecordIdentity"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/records/src/record-operation.ts#L71"},"packages/@orbit/records/src/record-operation.ts:71")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"relatedrecord"},"relatedRecord"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"relatedRecord"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/records/interfaces/RecordIdentity"},(0,i.kt)("inlineCode",{parentName:"a"},"RecordIdentity"))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/records/src/record-operation.ts#L73"},"packages/@orbit/records/src/record-operation.ts:73")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"relationship"},"relationship"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"relationship"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/records/src/record-operation.ts#L72"},"packages/@orbit/records/src/record-operation.ts:72")))}u.isMDXComponent=!0}}]);