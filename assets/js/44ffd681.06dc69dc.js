"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[1223],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,f=u["".concat(l,".").concat(k)]||u[k]||c[k]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2532:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],p={id:"Task",title:"Interface: Task<Type, Data, Options>",sidebar_label:"Task",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"api/core/interfaces/Task",id:"api/core/interfaces/Task",title:"Interface: Task<Type, Data, Options>",description:"A Task represents work to be performed asynchronously.",source:"@site/docs/api/core/interfaces/Task.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/Task",permalink:"/docs/api/core/interfaces/Task",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Task",title:"Interface: Task<Type, Data, Options>",sidebar_label:"Task",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"Performer",permalink:"/docs/api/core/interfaces/Performer"},next:{title:"TaskQueueSettings",permalink:"/docs/api/core/interfaces/TaskQueueSettings"}},d=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"data",id:"data",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"id",id:"id",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"options",id:"options",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"type",id:"type",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," represents work to be performed asynchronously."),(0,i.kt)("p",null,"Tasks can be identified with a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", although only ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," is\nrequired. Processors may use ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," for tracking purposes."),(0,i.kt)("p",null,"A task's optional ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," can be applied during processing, which may be\nfurther influenced by its ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"."),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"unknown"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"data"},"data"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"data"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Data")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/fd40512e/packages/@orbit/core/src/task.ts#L13"},"packages/@orbit/core/src/task.ts:13")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/fd40512e/packages/@orbit/core/src/task.ts#L12"},"packages/@orbit/core/src/task.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"options"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Options")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/fd40512e/packages/@orbit/core/src/task.ts#L14"},"packages/@orbit/core/src/task.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Type")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/fd40512e/packages/@orbit/core/src/task.ts#L11"},"packages/@orbit/core/src/task.ts:11")))}u.isMDXComponent=!0}}]);