(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[4242],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4049:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],s={id:"ResourceHasManyRelationship",title:"Interface: ResourceHasManyRelationship",sidebar_label:"ResourceHasManyRelationship",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"api/jsonapi/interfaces/ResourceHasManyRelationship",id:"api/jsonapi/interfaces/ResourceHasManyRelationship",isDocsHomePage:!1,title:"Interface: ResourceHasManyRelationship",description:"Properties",source:"@site/docs/api/jsonapi/interfaces/ResourceHasManyRelationship.md",sourceDirName:"api/jsonapi/interfaces",slug:"/api/jsonapi/interfaces/ResourceHasManyRelationship",permalink:"/docs/next/api/jsonapi/interfaces/ResourceHasManyRelationship",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"ResourceHasManyRelationship",title:"Interface: ResourceHasManyRelationship",sidebar_label:"ResourceHasManyRelationship",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"ResourceDocument",permalink:"/docs/next/api/jsonapi/interfaces/ResourceDocument"},next:{title:"ResourceHasOneRelationship",permalink:"/docs/next/api/jsonapi/interfaces/ResourceHasOneRelationship"}},l=[{value:"Properties",id:"properties",children:[{value:"data",id:"data",children:[]},{value:"links",id:"links",children:[]},{value:"meta",id:"meta",children:[]}]}],u={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"data"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/interfaces/ResourceIdentity"},(0,a.kt)("inlineCode",{parentName:"a"},"ResourceIdentity")),"[]"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/jsonapi/src/resource-document.ts#L16"},"packages/@orbit/jsonapi/src/resource-document.ts:16")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"links"},"links"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"links"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Dict"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Link"),">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/jsonapi/src/resource-document.ts#L18"},"packages/@orbit/jsonapi/src/resource-document.ts:18")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"meta"},"meta"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"meta"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Dict"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/jsonapi/src/resource-document.ts#L17"},"packages/@orbit/jsonapi/src/resource-document.ts:17")))}d.isMDXComponent=!0}}]);