(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[827],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=i,g=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},494:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],l={id:"index",title:"@orbit/local-storage-bucket",slug:"/api/local-storage-bucket",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},c="@orbit/local-storage-bucket",s={unversionedId:"api/local-storage-bucket/index",id:"api/local-storage-bucket/index",isDocsHomePage:!1,title:"@orbit/local-storage-bucket",description:"Provides a Bucket implementation that persists to local storage.",source:"@site/docs/api/local-storage-bucket/index.md",sourceDirName:"api/local-storage-bucket",slug:"/api/local-storage-bucket",permalink:"/docs/next/api/local-storage-bucket",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@orbit/local-storage-bucket",slug:"/api/local-storage-bucket",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"LocalStorageSourceSettings",permalink:"/docs/next/api/local-storage/interfaces/LocalStorageSourceSettings"},next:{title:"Exports",permalink:"/docs/next/api/local-storage-bucket/modules"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Contributing",id:"contributing",children:[{value:"Installation",id:"installation-1",children:[]},{value:"Building",id:"building",children:[]},{value:"Testing",id:"testing",children:[]}]},{value:"License",id:"license",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"orbitlocal-storage-bucket"},"@orbit/local-storage-bucket"),(0,o.kt)("p",null,"Provides a Bucket implementation that persists to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage"},"local storage"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install with yarn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add @orbit/local-storage-bucket\n")),(0,o.kt)("p",null,"Or with npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @orbit/local-storage-bucket\n")),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("h3",{id:"installation-1"},"Installation"),(0,o.kt)("p",null,"To install dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn install\n")),(0,o.kt)("h3",{id:"building"},"Building"),(0,o.kt)("p",null,"Distributions can be built to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/dist")," directory by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn build\n")),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("h4",{id:"ci-testing"},"CI Testing"),(0,o.kt)("p",null,"Test in CI mode by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn test\n")),(0,o.kt)("h4",{id:"browser-testing"},"Browser Testing"),(0,o.kt)("p",null,"Test within a browser\n(at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/"),") by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn start\n")),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"Copyright 2014-2020 Cerebris Corporation. MIT License (see LICENSE for details)."))}d.isMDXComponent=!0}}]);