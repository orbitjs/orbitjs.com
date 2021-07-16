(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[5749],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),k=l(r),m=a,u=k["".concat(p,".").concat(m)]||k[m]||c[m]||i;return r?n.createElement(u,o(o({ref:t},s),{},{components:r})):n.createElement(u,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},2746:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return k}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],d={id:"RecordKeyMap",title:"Class: RecordKeyMap",sidebar_label:"RecordKeyMap",sidebar_position:0,custom_edit_url:null},p=void 0,l={unversionedId:"api/records/classes/RecordKeyMap",id:"api/records/classes/RecordKeyMap",isDocsHomePage:!1,title:"Class: RecordKeyMap",description:"Maintains a map between records' ids and keys.",source:"@site/docs/api/records/classes/RecordKeyMap.md",sourceDirName:"api/records/classes",slug:"/api/records/classes/RecordKeyMap",permalink:"/docs/next/api/records/classes/RecordKeyMap",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"RecordKeyMap",title:"Class: RecordKeyMap",sidebar_label:"RecordKeyMap",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"RecordException",permalink:"/docs/next/api/records/classes/RecordException"},next:{title:"RecordNotFoundException",permalink:"/docs/next/api/records/classes/RecordNotFoundException"}},s=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"idFromKeys",id:"idfromkeys",children:[]},{value:"idToKey",id:"idtokey",children:[]},{value:"keyToId",id:"keytoid",children:[]},{value:"pushRecord",id:"pushrecord",children:[]},{value:"reset",id:"reset",children:[]}]}],c={toc:s};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Maintains a map between records' ids and keys."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new RecordKeyMap"),"()"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/records/src/record-key-map.ts#L11"},"packages/@orbit/records/src/record-key-map.ts:11")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"idfromkeys"},"idFromKeys"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"idFromKeys"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keys"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Given a record, find the cached id if it exists."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"keys")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Dict"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/records/src/record-key-map.ts#L59"},"packages/@orbit/records/src/record-key-map.ts:59")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"idtokey"},"idToKey"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"idToKey"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keyName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"idValue"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Return a key value given a model type, key name, and id."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"keyName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"idValue")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/records/src/record-key-map.ts#L26"},"packages/@orbit/records/src/record-key-map.ts:26")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"keytoid"},"keyToId"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"keyToId"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keyName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keyValue"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Return an id value given a model type, key name, and key value."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"keyName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"keyValue")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/records/src/record-key-map.ts#L33"},"packages/@orbit/records/src/record-key-map.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pushrecord"},"pushRecord"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"pushRecord"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"record"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Store the id and key values of a record in this key map."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"record")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/records/interfaces/InitializedRecord"},(0,i.kt)("inlineCode",{parentName:"a"},"InitializedRecord"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/records/interfaces/UninitializedRecord"},(0,i.kt)("inlineCode",{parentName:"a"},"UninitializedRecord")))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/records/src/record-key-map.ts#L40"},"packages/@orbit/records/src/record-key-map.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"reset"},"reset"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"reset"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Resets the contents of the key map."),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/records/src/record-key-map.ts#L18"},"packages/@orbit/records/src/record-key-map.ts:18")))}k.isMDXComponent=!0}}]);