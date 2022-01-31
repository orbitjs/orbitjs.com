"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[7112],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(n),b=i,m=c["".concat(d,".").concat(b)]||c[b]||s[b]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7023:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=n(3117),i=n(102),l=(n(7294),n(3905)),o=["components"],a={id:"index",title:"@orbit/indexeddb",slug:"/api/indexeddb/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},d="@orbit/indexeddb",p={unversionedId:"api/indexeddb/index",id:"api/indexeddb/index",title:"@orbit/indexeddb",description:"IndexedDB support for client-side Orbit applications.",source:"@site/docs/api/indexeddb/index.md",sourceDirName:"api/indexeddb",slug:"/api/indexeddb/",permalink:"/docs/api/indexeddb/",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@orbit/indexeddb",slug:"/api/indexeddb/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"ImmutableMap",permalink:"/docs/api/immutable/classes/ImmutableMap"},next:{title:"Exports",permalink:"/docs/api/indexeddb/modules"}},u=[{value:"Installation",id:"installation",children:[],level:2},{value:"Contributing",id:"contributing",children:[{value:"Installation",id:"installation-1",children:[],level:3},{value:"Building",id:"building",children:[],level:3},{value:"Testing",id:"testing",children:[{value:"CI Testing",id:"ci-testing",children:[],level:4},{value:"Browser Testing",id:"browser-testing",children:[],level:4}],level:3}],level:2},{value:"License",id:"license",children:[],level:2}],s={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"orbitindexeddb"},"@orbit/indexeddb"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"},"IndexedDB")," support for client-side Orbit applications."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Install with yarn:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn add @orbit/indexeddb\n")),(0,l.kt)("p",null,"Or with npm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install @orbit/indexeddb\n")),(0,l.kt)("h2",{id:"contributing"},"Contributing"),(0,l.kt)("h3",{id:"installation-1"},"Installation"),(0,l.kt)("p",null,"To install dependencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn install\n")),(0,l.kt)("h3",{id:"building"},"Building"),(0,l.kt)("p",null,"Distributions can be built to the ",(0,l.kt)("inlineCode",{parentName:"p"},"/dist")," directory by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn build\n")),(0,l.kt)("h3",{id:"testing"},"Testing"),(0,l.kt)("h4",{id:"ci-testing"},"CI Testing"),(0,l.kt)("p",null,"Test in CI mode by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn test\n")),(0,l.kt)("h4",{id:"browser-testing"},"Browser Testing"),(0,l.kt)("p",null,"Test within a browser\n(at ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/"),") by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yarn start\n")),(0,l.kt)("h2",{id:"license"},"License"),(0,l.kt)("p",null,"Copyright 2014-2021 Cerebris Corporation. MIT License (see LICENSE for details)."))}c.isMDXComponent=!0}}]);