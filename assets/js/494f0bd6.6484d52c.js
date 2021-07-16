(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[9895],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),b=i,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3665:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),l=["components"],o={id:"index",title:"@orbit/serializers",slug:"/api/serializers",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},s="@orbit/serializers",p={unversionedId:"api/serializers/index",id:"api/serializers/index",isDocsHomePage:!1,title:"@orbit/serializers",description:"A base set of serializers for serializing / deserializing data types.",source:"@site/docs/api/serializers/index.md",sourceDirName:"api/serializers",slug:"/api/serializers",permalink:"/docs/next/api/serializers",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@orbit/serializers",slug:"/api/serializers",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"UpdateRecordOperation",permalink:"/docs/next/api/records/interfaces/UpdateRecordOperation"},next:{title:"Exports",permalink:"/docs/next/api/serializers/modules"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Contributing",id:"contributing",children:[{value:"Installation",id:"installation-1",children:[]},{value:"Building",id:"building",children:[]},{value:"Testing",id:"testing",children:[]}]},{value:"License",id:"license",children:[]}],u={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"orbitserializers"},"@orbit/serializers"),(0,a.kt)("p",null,"A base set of serializers for serializing / deserializing data types."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install with yarn:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add @orbit/serializers\n")),(0,a.kt)("p",null,"Or with npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install @orbit/serializers\n")),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("h3",{id:"installation-1"},"Installation"),(0,a.kt)("p",null,"To install dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn install\n")),(0,a.kt)("h3",{id:"building"},"Building"),(0,a.kt)("p",null,"Distributions can be built to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/dist")," directory by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn build\n")),(0,a.kt)("h3",{id:"testing"},"Testing"),(0,a.kt)("h4",{id:"ci-testing"},"CI Testing"),(0,a.kt)("p",null,"Test in CI mode by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn test\n")),(0,a.kt)("h4",{id:"browser-testing"},"Browser Testing"),(0,a.kt)("p",null,"Test within a browser\n(at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/"),") by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn start\n")),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"Copyright 2014-2020 Cerebris Corporation. MIT License (see LICENSE for details)."))}d.isMDXComponent=!0}}]);