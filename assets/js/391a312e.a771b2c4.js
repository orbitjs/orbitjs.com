"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[4750],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(s,".").concat(b)]||d[b]||p[b]||l;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4090:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=n(3117),r=n(102),l=(n(7294),n(3905)),o=["components"],a={id:"index",title:"@orbit/utils",slug:"/api/utils/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},s="@orbit/utils",u={unversionedId:"api/utils/index",id:"api/utils/index",title:"@orbit/utils",description:"A common set of utility functions used by Orbit libraries.",source:"@site/docs/api/utils/index.md",sourceDirName:"api/utils",slug:"/api/utils/",permalink:"/docs/api/utils/",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@orbit/utils",slug:"/api/utils/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"StringSerializerSettings",permalink:"/docs/api/serializers/interfaces/StringSerializerSettings"},next:{title:"Exports",permalink:"/docs/api/utils/modules"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Contributing",id:"contributing",children:[{value:"Installation",id:"installation-1",children:[],level:3},{value:"Building",id:"building",children:[],level:3},{value:"Testing",id:"testing",children:[{value:"CI Testing",id:"ci-testing",children:[],level:4},{value:"Browser Testing",id:"browser-testing",children:[],level:4}],level:3}],level:2},{value:"License",id:"license",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"orbitutils"},"@orbit/utils"),(0,l.kt)("p",null,"A common set of utility functions used by Orbit libraries."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Install with yarn:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn add @orbit/utils\n")),(0,l.kt)("p",null,"Or with npm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install @orbit/utils\n")),(0,l.kt)("h2",{id:"contributing"},"Contributing"),(0,l.kt)("h3",{id:"installation-1"},"Installation"),(0,l.kt)("p",null,"To install dependencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn install\n")),(0,l.kt)("h3",{id:"building"},"Building"),(0,l.kt)("p",null,"Distributions can be built to the ",(0,l.kt)("inlineCode",{parentName:"p"},"/dist")," directory by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn build\n")),(0,l.kt)("h3",{id:"testing"},"Testing"),(0,l.kt)("h4",{id:"ci-testing"},"CI Testing"),(0,l.kt)("p",null,"Test in CI mode by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn test\n")),(0,l.kt)("h4",{id:"browser-testing"},"Browser Testing"),(0,l.kt)("p",null,"Test within a browser\n(at ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/"),") by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn start\n")),(0,l.kt)("h2",{id:"license"},"License"),(0,l.kt)("p",null,"Copyright 2014-2021 Cerebris Corporation. MIT License (see LICENSE for details)."))}d.isMDXComponent=!0}}]);