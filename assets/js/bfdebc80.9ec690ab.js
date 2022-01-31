"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[7507],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(r),b=i,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8029:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),l=["components"],a={id:"index",title:"@orbit/records",slug:"/api/records/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},c="@orbit/records",s={unversionedId:"api/records/index",id:"api/records/index",title:"@orbit/records",description:"Extends the primitives from @orbit/data to be record-specific.",source:"@site/docs/api/records/index.md",sourceDirName:"api/records",slug:"/api/records/",permalink:"/docs/api/records/",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@orbit/records",slug:"/api/records/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"SyncTransformOperator",permalink:"/docs/api/record-cache/interfaces/SyncTransformOperator"},next:{title:"Exports",permalink:"/docs/api/records/modules"}},p=[{value:"Installation",id:"installation",children:[],level:3},{value:"Contributing",id:"contributing",children:[{value:"Installation",id:"installation-1",children:[],level:3},{value:"Building",id:"building",children:[],level:3},{value:"Testing",id:"testing",children:[{value:"CI Testing",id:"ci-testing",children:[],level:4},{value:"Browser Testing",id:"browser-testing",children:[],level:4}],level:3}],level:2},{value:"License",id:"license",children:[],level:2}],d={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"orbitrecords"},"@orbit/records"),(0,o.kt)("p",null,"Extends the primitives from ",(0,o.kt)("inlineCode",{parentName:"p"},"@orbit/data")," to be record-specific."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install with yarn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add @orbit/records\n")),(0,o.kt)("p",null,"Or with npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @orbit/records\n")),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("h3",{id:"installation-1"},"Installation"),(0,o.kt)("p",null,"To install dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn install\n")),(0,o.kt)("h3",{id:"building"},"Building"),(0,o.kt)("p",null,"Distributions can be built to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/dist")," directory by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn build\n")),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("h4",{id:"ci-testing"},"CI Testing"),(0,o.kt)("p",null,"Test in CI mode by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn test\n")),(0,o.kt)("h4",{id:"browser-testing"},"Browser Testing"),(0,o.kt)("p",null,"Test within a browser\n(at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/"),") by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn start\n")),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"Copyright 2014-2021 Cerebris Corporation. MIT License (see LICENSE for details)."))}u.isMDXComponent=!0}}]);