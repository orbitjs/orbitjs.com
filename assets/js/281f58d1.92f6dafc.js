(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[3595],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=p(r),m=i,u=k["".concat(l,".").concat(m)]||k[m]||c[m]||n;return r?a.createElement(u,s(s({ref:t},d),{},{components:r})):a.createElement(u,s({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<n;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},6449:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var a=r(2122),i=r(9756),n=(r(7294),r(3905)),s=["components"],o={id:"JSONAPIResourceSerializer",title:"Class: JSONAPIResourceSerializer",sidebar_label:"JSONAPIResourceSerializer",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"api/jsonapi/classes/JSONAPIResourceSerializer",id:"api/jsonapi/classes/JSONAPIResourceSerializer",isDocsHomePage:!1,title:"Class: JSONAPIResourceSerializer",description:"Hierarchy",source:"@site/docs/api/jsonapi/classes/JSONAPIResourceSerializer.md",sourceDirName:"api/jsonapi/classes",slug:"/api/jsonapi/classes/JSONAPIResourceSerializer",permalink:"/docs/next/api/jsonapi/classes/JSONAPIResourceSerializer",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"JSONAPIResourceSerializer",title:"Class: JSONAPIResourceSerializer",sidebar_label:"JSONAPIResourceSerializer",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"JSONAPIResourceIdentitySerializer",permalink:"/docs/next/api/jsonapi/classes/JSONAPIResourceIdentitySerializer"},next:{title:"JSONAPISerializer",permalink:"/docs/next/api/jsonapi/classes/JSONAPISerializer"}},d=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"serializerFor",id:"serializerfor",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"keyMap",id:"keymap",children:[]},{value:"schema",id:"schema",children:[]}]},{value:"Methods",id:"methods",children:[{value:"deserialize",id:"deserialize",children:[]},{value:"serialize",id:"serialize",children:[]}]}],c={toc:d};function k(e){var t=e.components,r=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/classes/JSONAPIBaseSerializer"},(0,n.kt)("inlineCode",{parentName:"a"},"JSONAPIBaseSerializer")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"InitializedRecord"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/interfaces/Resource"},(0,n.kt)("inlineCode",{parentName:"a"},"Resource")),", ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/interfaces/JSONAPIResourceIdentityDeserializationOptions"},(0,n.kt)("inlineCode",{parentName:"a"},"JSONAPIResourceIdentityDeserializationOptions")),">"),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"JSONAPIResourceSerializer"))))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new JSONAPIResourceSerializer"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"settings"),")"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"settings")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Object"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"settings.deserializationOptions?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/next/api/jsonapi/interfaces/JSONAPIResourceIdentityDeserializationOptions"},(0,n.kt)("inlineCode",{parentName:"a"},"JSONAPIResourceIdentityDeserializationOptions")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"settings.keyMap?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"RecordKeyMap"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"settings.schema")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"RecordSchema"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"settings.serializationOptions?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"unknown"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"settings.serializerFor")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"SerializerForFn"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"Serializer"),"<",(0,n.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"unknown"),">",">")))),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/classes/JSONAPIBaseSerializer"},"JSONAPIBaseSerializer"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/classes/JSONAPIBaseSerializer#constructor"},"constructor")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/jsonapi/src/serializers/jsonapi-base-serializer.ts#L31"},"packages/@orbit/jsonapi/src/serializers/jsonapi-base-serializer.ts:31")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"serializerfor"},"serializerFor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"serializerFor"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"SerializerForFn"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"Serializer"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown"),">",">"),(0,n.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/classes/JSONAPIBaseSerializer"},"JSONAPIBaseSerializer"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/classes/JSONAPIBaseSerializer#serializerfor"},"serializerFor")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/jsonapi/src/serializers/jsonapi-base-serializer.ts#L27"},"packages/@orbit/jsonapi/src/serializers/jsonapi-base-serializer.ts:27")),(0,n.kt)("h2",{id:"accessors"},"Accessors"),(0,n.kt)("h3",{id:"keymap"},"keyMap"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"keyMap"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"RecordKeyMap")),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"RecordKeyMap")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/jsonapi/src/serializers/jsonapi-base-serializer.ts#L58"},"packages/@orbit/jsonapi/src/serializers/jsonapi-base-serializer.ts:58")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"schema"},"schema"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"schema"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"RecordSchema")),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"RecordSchema")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/jsonapi/src/serializers/jsonapi-base-serializer.ts#L54"},"packages/@orbit/jsonapi/src/serializers/jsonapi-base-serializer.ts:54")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"deserialize"},"deserialize"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"deserialize"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"customOptions?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"InitializedRecord")),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"resource")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/next/api/jsonapi/interfaces/Resource"},(0,n.kt)("inlineCode",{parentName:"a"},"Resource")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"customOptions?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/next/api/jsonapi/interfaces/JSONAPIResourceIdentityDeserializationOptions"},(0,n.kt)("inlineCode",{parentName:"a"},"JSONAPIResourceIdentityDeserializationOptions")))))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"InitializedRecord")),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/classes/JSONAPIBaseSerializer"},"JSONAPIBaseSerializer"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/classes/JSONAPIBaseSerializer#deserialize"},"deserialize")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/jsonapi/src/serializers/jsonapi-resource-serializer.ts#L31"},"packages/@orbit/jsonapi/src/serializers/jsonapi-resource-serializer.ts:31")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"serialize"},"serialize"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"serialize"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"record"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/interfaces/Resource"},(0,n.kt)("inlineCode",{parentName:"a"},"Resource"))),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"record")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"InitializedRecord"))))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/interfaces/Resource"},(0,n.kt)("inlineCode",{parentName:"a"},"Resource"))),(0,n.kt)("h4",{id:"overrides-1"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/classes/JSONAPIBaseSerializer"},"JSONAPIBaseSerializer"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/jsonapi/classes/JSONAPIBaseSerializer#serialize"},"serialize")),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/orbitjs/orbit/blob/857efa86/packages/@orbit/jsonapi/src/serializers/jsonapi-resource-serializer.ts#L19"},"packages/@orbit/jsonapi/src/serializers/jsonapi-resource-serializer.ts:19")))}k.isMDXComponent=!0}}]);