(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[7605],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return t?n.createElement(f,o(o({ref:r},l),{},{components:t})):n.createElement(f,o({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9244:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],c={id:"StandardRecordNormalizerSettings",title:"Interface: StandardRecordNormalizerSettings",sidebar_label:"StandardRecordNormalizerSettings",sidebar_position:0,custom_edit_url:null},d=void 0,s={unversionedId:"api/records/interfaces/StandardRecordNormalizerSettings",id:"api/records/interfaces/StandardRecordNormalizerSettings",isDocsHomePage:!1,title:"Interface: StandardRecordNormalizerSettings",description:"Properties",source:"@site/docs/api/records/interfaces/StandardRecordNormalizerSettings.md",sourceDirName:"api/records/interfaces",slug:"/api/records/interfaces/StandardRecordNormalizerSettings",permalink:"/docs/next/api/records/interfaces/StandardRecordNormalizerSettings",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"StandardRecordNormalizerSettings",title:"Interface: StandardRecordNormalizerSettings",sidebar_label:"StandardRecordNormalizerSettings",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"ReplaceRelatedRecordsOperation",permalink:"/docs/next/api/records/interfaces/ReplaceRelatedRecordsOperation"},next:{title:"UninitializedRecord",permalink:"/docs/next/api/records/interfaces/UninitializedRecord"}},l=[{value:"Properties",id:"properties",children:[{value:"cloneInputs",id:"cloneinputs",children:[]},{value:"keyMap",id:"keymap",children:[]},{value:"schema",id:"schema",children:[]},{value:"validateInputs",id:"validateinputs",children:[]}]}],p={toc:l};function u(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cloneinputs"},"cloneInputs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"cloneInputs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/records/src/standard-record-normalizer.ts#L21"},"packages/@orbit/records/src/standard-record-normalizer.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"keymap"},"keyMap"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"keyMap"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/records/classes/RecordKeyMap"},(0,i.kt)("inlineCode",{parentName:"a"},"RecordKeyMap"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/records/src/standard-record-normalizer.ts#L20"},"packages/@orbit/records/src/standard-record-normalizer.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"schema"},"schema"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"schema"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/records/classes/RecordSchema"},(0,i.kt)("inlineCode",{parentName:"a"},"RecordSchema"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/records/src/standard-record-normalizer.ts#L19"},"packages/@orbit/records/src/standard-record-normalizer.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"validateinputs"},"validateInputs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"validateInputs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/records/src/standard-record-normalizer.ts#L22"},"packages/@orbit/records/src/standard-record-normalizer.ts:22")))}u.isMDXComponent=!0}}]);