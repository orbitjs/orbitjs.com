(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[8702],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,k=d["".concat(s,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5553:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],c={id:"BucketSettings",title:"Interface: BucketSettings",sidebar_label:"BucketSettings",sidebar_position:0,custom_edit_url:null},s=void 0,u={unversionedId:"api/core/interfaces/BucketSettings",id:"api/core/interfaces/BucketSettings",isDocsHomePage:!1,title:"Interface: BucketSettings",description:"Settings used to instantiate and/or upgrade a Bucket.",source:"@site/docs/api/core/interfaces/BucketSettings.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/BucketSettings",permalink:"/docs/next/api/core/interfaces/BucketSettings",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"BucketSettings",title:"Interface: BucketSettings",sidebar_label:"BucketSettings",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"TaskQueue",permalink:"/docs/next/api/core/classes/TaskQueue"},next:{title:"Evented",permalink:"/docs/next/api/core/interfaces/Evented"}},p=[{value:"Properties",id:"properties",children:[{value:"name",id:"name",children:[]},{value:"namespace",id:"namespace",children:[]},{value:"version",id:"version",children:[]}]}],l={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Settings used to instantiate and/or upgrade a ",(0,a.kt)("inlineCode",{parentName:"p"},"Bucket"),"."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Name used for tracking and debugging a bucket instance."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/core/src/bucket.ts#L10"},"packages/@orbit/core/src/bucket.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"namespace"},"namespace"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"namespace"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The namespace used by the bucket when accessing any items."),(0,a.kt)("p",null,"This is used to distinguish one bucket's contents from another."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/core/src/bucket.ts#L17"},"packages/@orbit/core/src/bucket.ts:17")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"version"},"version"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"version"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The current version of the bucket."),(0,a.kt)("p",null,"Used to identify the version of the bucket's schema and thus migrate it\nas needed."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/core/src/bucket.ts#L25"},"packages/@orbit/core/src/bucket.ts:25")))}d.isMDXComponent=!0}}]);