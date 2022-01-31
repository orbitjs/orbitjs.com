"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[8635],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),p=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=i,h=u["".concat(d,".").concat(f)]||u[f]||s[f]||o;return t?n.createElement(h,a(a({ref:r},c),{},{components:t})):n.createElement(h,a({ref:r},c))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},51:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=t(3117),i=t(102),o=(t(7294),t(3905)),a=["components"],l={id:"ReplaceRelatedRecordsOperation",title:"Interface: ReplaceRelatedRecordsOperation",sidebar_label:"ReplaceRelatedRecordsOperation",sidebar_position:0,custom_edit_url:null},d=void 0,p={unversionedId:"api/records/interfaces/ReplaceRelatedRecordsOperation",id:"api/records/interfaces/ReplaceRelatedRecordsOperation",title:"Interface: ReplaceRelatedRecordsOperation",description:"Replace has-many relationship operation.",source:"@site/docs/api/records/interfaces/ReplaceRelatedRecordsOperation.md",sourceDirName:"api/records/interfaces",slug:"/api/records/interfaces/ReplaceRelatedRecordsOperation",permalink:"/docs/api/records/interfaces/ReplaceRelatedRecordsOperation",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ReplaceRelatedRecordsOperation",title:"Interface: ReplaceRelatedRecordsOperation",sidebar_label:"ReplaceRelatedRecordsOperation",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"ReplaceRelatedRecordOperation",permalink:"/docs/api/records/interfaces/ReplaceRelatedRecordOperation"},next:{title:"StandardRecordNormalizerSettings",permalink:"/docs/api/records/interfaces/StandardRecordNormalizerSettings"}},c=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"op",id:"op",children:[{value:"Overrides",id:"overrides",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"options",id:"options",children:[{value:"Inherited from",id:"inherited-from",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"record",id:"record",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"relatedRecords",id:"relatedrecords",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"relationship",id:"relationship",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2}],s={toc:c};function u(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Replace has-many relationship operation."),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Operation")),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ReplaceRelatedRecordsOperation"))))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"op"},"op"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"op"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"replaceRelatedRecords"')),(0,o.kt)("h4",{id:"overrides"},"Overrides"),(0,o.kt)("p",null,"Operation.op"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/474ea242/packages/@orbit/records/src/record-operation.ts#L80"},"packages/@orbit/records/src/record-operation.ts:80")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"options"},"options"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"options"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestOptions")),(0,o.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,o.kt)("p",null,"Operation.options"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,"packages/@orbit/data/dist/modules/operation.d.ts:4"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"record"},"record"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"record"),": ",(0,o.kt)("a",{parentName:"p",href:"RecordIdentity"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordIdentity"))),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/474ea242/packages/@orbit/records/src/record-operation.ts#L81"},"packages/@orbit/records/src/record-operation.ts:81")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"relatedrecords"},"relatedRecords"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"relatedRecords"),": ",(0,o.kt)("a",{parentName:"p",href:"RecordIdentity"},(0,o.kt)("inlineCode",{parentName:"a"},"RecordIdentity")),"[]"),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/474ea242/packages/@orbit/records/src/record-operation.ts#L83"},"packages/@orbit/records/src/record-operation.ts:83")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"relationship"},"relationship"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"relationship"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/474ea242/packages/@orbit/records/src/record-operation.ts#L82"},"packages/@orbit/records/src/record-operation.ts:82")))}u.isMDXComponent=!0}}]);