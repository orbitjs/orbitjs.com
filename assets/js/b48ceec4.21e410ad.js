"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[5501],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},258:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),o=["components"],l={id:"StringValidationOptions",title:"Interface: StringValidationOptions",sidebar_label:"StringValidationOptions",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"api/validators/interfaces/StringValidationOptions",id:"api/validators/interfaces/StringValidationOptions",title:"Interface: StringValidationOptions",description:"Hierarchy",source:"@site/docs/api/validators/interfaces/StringValidationOptions.md",sourceDirName:"api/validators/interfaces",slug:"/api/validators/interfaces/StringValidationOptions",permalink:"/docs/api/validators/interfaces/StringValidationOptions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"StringValidationOptions",title:"Interface: StringValidationOptions",sidebar_label:"StringValidationOptions",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"NumberValidationOptions",permalink:"/docs/api/validators/interfaces/NumberValidationOptions"},next:{title:"ValidationIssue",permalink:"/docs/api/validators/interfaces/ValidationIssue"}},c=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"maxLength",id:"maxlength",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"minLength",id:"minlength",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"ValidationOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"ValidationOptions"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringValidationOptions"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"maxlength"},"maxLength"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"maxLength"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/fd40512e/packages/@orbit/validators/src/string-validator.ts#L29"},"string-validator.ts:29")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"minlength"},"minLength"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"minLength"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/fd40512e/packages/@orbit/validators/src/string-validator.ts#L28"},"string-validator.ts:28")))}u.isMDXComponent=!0}}]);