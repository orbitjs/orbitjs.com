(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[5798],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8808:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],p={id:"StrategyOptions",title:"Interface: StrategyOptions",sidebar_label:"StrategyOptions",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"api/coordinator/interfaces/StrategyOptions",id:"api/coordinator/interfaces/StrategyOptions",isDocsHomePage:!1,title:"Interface: StrategyOptions",description:"Hierarchy",source:"@site/docs/api/coordinator/interfaces/StrategyOptions.md",sourceDirName:"api/coordinator/interfaces",slug:"/api/coordinator/interfaces/StrategyOptions",permalink:"/docs/next/api/coordinator/interfaces/StrategyOptions",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"StrategyOptions",title:"Interface: StrategyOptions",sidebar_label:"StrategyOptions",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"RequestStrategyOptions",permalink:"/docs/next/api/coordinator/interfaces/RequestStrategyOptions"},next:{title:"SyncStrategyOptions",permalink:"/docs/next/api/coordinator/interfaces/SyncStrategyOptions"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"logLevel",id:"loglevel",children:[]},{value:"logPrefix",id:"logprefix",children:[]},{value:"name",id:"name",children:[]},{value:"sources",id:"sources",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"StrategyOptions"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/coordinator/interfaces/EventLoggingStrategyOptions"},(0,o.kt)("inlineCode",{parentName:"a"},"EventLoggingStrategyOptions"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/coordinator/interfaces/ConnectionStrategyOptions"},(0,o.kt)("inlineCode",{parentName:"a"},"ConnectionStrategyOptions"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/coordinator/interfaces/SyncStrategyOptions"},(0,o.kt)("inlineCode",{parentName:"a"},"SyncStrategyOptions"))))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"loglevel"},"logLevel"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"logLevel"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/coordinator/enums/LogLevel#none"},(0,o.kt)("inlineCode",{parentName:"a"},"None"))," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/coordinator/enums/LogLevel#errors"},(0,o.kt)("inlineCode",{parentName:"a"},"Errors"))," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/coordinator/enums/LogLevel#warnings"},(0,o.kt)("inlineCode",{parentName:"a"},"Warnings"))," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/coordinator/enums/LogLevel#info"},(0,o.kt)("inlineCode",{parentName:"a"},"Info"))),(0,o.kt)("p",null,"A specific log level for this strategy."),(0,o.kt)("p",null,"Overrides the log level used when activating the coordinator."),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/coordinator/src/strategy.ts#L33"},"strategy.ts:33")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"logprefix"},"logPrefix"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"logPrefix"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The prefix to use for logging from this strategy."),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"[${name}]"),"."),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/coordinator/src/strategy.ts#L26"},"strategy.ts:26")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"name"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Name of strategy."),(0,o.kt)("p",null,"Used to uniquely identify this strategy in a coordinator's collection."),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/coordinator/src/strategy.ts#L13"},"strategy.ts:13")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sources"},"sources"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"sources"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"The names of sources to include in this strategy. Leave undefined\nto include all sources registered with a coordinator."),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/coordinator/src/strategy.ts#L19"},"strategy.ts:19")))}d.isMDXComponent=!0}}]);