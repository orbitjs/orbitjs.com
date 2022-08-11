"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[7472],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7803:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={id:"modules",title:"@orbit/coordinator",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},s=void 0,c={unversionedId:"api/coordinator/modules",id:"api/coordinator/modules",title:"@orbit/coordinator",description:"Enumerations",source:"@site/docs/api/coordinator/modules.md",sourceDirName:"api/coordinator",slug:"/api/coordinator/modules",permalink:"/docs/api/coordinator/modules",editUrl:null,tags:[],version:"current",sidebarPosition:.5,frontMatter:{id:"modules",title:"@orbit/coordinator",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},sidebar:"api",previous:{title:"Readme",permalink:"/docs/api/coordinator/"},next:{title:"LogLevel",permalink:"/docs/api/coordinator/enums/LogLevel"}},u=[{value:"Enumerations",id:"enumerations",children:[],level:2},{value:"Classes",id:"classes",children:[],level:2},{value:"Interfaces",id:"interfaces",children:[],level:2},{value:"References",id:"references",children:[{value:"default",id:"default",children:[],level:3}],level:2}],p={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"enumerations"},"Enumerations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"enums/LogLevel"},"LogLevel"))),(0,o.kt)("h2",{id:"classes"},"Classes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"classes/ConnectionStrategy"},"ConnectionStrategy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"classes/Coordinator"},"Coordinator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"classes/EventLoggingStrategy"},"EventLoggingStrategy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"classes/LogTruncationStrategy"},"LogTruncationStrategy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"classes/RequestStrategy"},"RequestStrategy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"classes/Strategy"},"Strategy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"classes/SyncStrategy"},"SyncStrategy"))),(0,o.kt)("h2",{id:"interfaces"},"Interfaces"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"interfaces/ActivationOptions"},"ActivationOptions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"interfaces/ConnectionStrategyOptions"},"ConnectionStrategyOptions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"interfaces/CoordinatorOptions"},"CoordinatorOptions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"interfaces/EventLoggingStrategyOptions"},"EventLoggingStrategyOptions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"interfaces/RequestStrategyOptions"},"RequestStrategyOptions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"interfaces/StrategyOptions"},"StrategyOptions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"interfaces/SyncStrategyOptions"},"SyncStrategyOptions"))),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("h3",{id:"default"},"default"),(0,o.kt)("p",null,"Renames and re-exports ",(0,o.kt)("a",{parentName:"p",href:"classes/Coordinator"},"Coordinator")))}f.isMDXComponent=!0}}]);