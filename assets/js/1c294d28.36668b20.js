"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[4274],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8649:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],l={title:"Modeling data"},s=void 0,d={unversionedId:"modeling-data",id:"version-0.15/modeling-data",title:"Modeling data",description:"Data records must have a normalized structure that's consistent",source:"@site/versioned_docs/version-0.15/modeling-data.md",sourceDirName:".",slug:"/modeling-data",permalink:"/docs/0.15/modeling-data",editUrl:"https://github.com/orbitjs/orbit/edit/main/website/versioned_docs/version-0.15/modeling-data.md",tags:[],version:"0.15",frontMatter:{title:"Modeling data"},sidebar:"version-0.15/docsSidebar",previous:{title:"Packages",permalink:"/docs/0.15/packages"},next:{title:"Data sources",permalink:"/docs/0.15/data-sources"}},p=[{value:"Records",id:"records",children:[{value:"Identity",id:"identity",children:[],level:3},{value:"Keys",id:"keys",children:[],level:3},{value:"Attributes",id:"attributes",children:[],level:3},{value:"Relationships",id:"relationships",children:[],level:3}],level:2},{value:"Schema",id:"schema",children:[{value:"Model attributes",id:"model-attributes",children:[],level:3},{value:"Model relationships",id:"model-relationships",children:[],level:3},{value:"Model keys",id:"model-keys",children:[],level:3},{value:"Record initialization",id:"record-initialization",children:[],level:3}],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Data records must have a normalized structure that's consistent\nwith Orbit's expectations as well as the constraints of a particular\napplication."),(0,r.kt)("h2",{id:"records"},"Records"),(0,r.kt)("p",null,'Records are represented as lightweight, serializable POJOs (i.e. "Plain old\nJavaScript objects").'),(0,r.kt)("p",null,"The structure used for records conforms to the ",(0,r.kt)("a",{parentName:"p",href:"http://jsonapi.org/"},"JSONAPI"),"\nspecification. Records can have fields that define their identity, attributes,\nand relationships with other records."),(0,r.kt)("p",null,"Here's an example record that represents a planet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  type: 'planet',\n  id: 'earth',\n  attributes: {\n    name: 'Earth',\n    classification: 'terrestrial',\n    atmosphere: true\n  },\n  relationships: {\n    solarSystem: {\n      data: { type: 'solarSystem', id: 'theSolarSystem' }\n    },\n    moons: {\n      data: [\n        { type: 'moon', id: 'theMoon' }\n      ]\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"identity"},"Identity"),(0,r.kt)("p",null,"Each record's identity is established by a union of the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," - a string that identifies a set of records with a shared definition"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - a string that uniquely identifies a record of a given ",(0,r.kt)("inlineCode",{parentName:"li"},"type"))),(0,r.kt)("p",null,"Both fields must be defined in order for a record to be identified uniquely."),(0,r.kt)("p",null,"Applications can take one of the following approaches to managing identity:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Auto-generate IDs, typically as v4 UUIDs, and then use the same IDs locally\nand remotely.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Auto-generate IDs locally and map those IDs to canonical IDs (or "keys")\ngenerated remotely.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remotely generate IDs and don't reference records until those IDs have been\nassigned."))),(0,r.kt)("p",null,'The first two approaches are "optimistic" and allow for offline usage, while\nthe third is "pessimistic" and requires persistent connectivity.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: It's possible to mix these approaches for different types of records\n(i.e. models) within a given application.")),(0,r.kt)("h3",{id:"keys"},"Keys"),(0,r.kt)("p",null,'When using locally-generated IDs, Orbit uses "keys" to support mapping between\nlocal and remote IDs.'),(0,r.kt)("p",null,"Remote IDs should be kept in a ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," object at the root of a record."),(0,r.kt)("p",null,"For example, the following record has a ",(0,r.kt)("inlineCode",{parentName:"p"},"remoteId")," key that is assigned by a\nserver:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  type: 'planet',\n  id: '34677136-c0b7-4015-b9e5-57f6fdd16bd2',\n  keys: {\n    remoteId: '123456'\n  }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"remoteId")," key of ",(0,r.kt)("inlineCode",{parentName:"p"},"123456")," can be mapped to the locally generated ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," using\na ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyMap"),", which can be shared by any sources that need access to the mapping.\nWhen communicating with the server, ",(0,r.kt)("inlineCode",{parentName:"p"},"remoteId")," might be serialized as ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\u2014such\na translation should occur within the source that communicates directly with the\nremote server (e.g. Orbit's standard ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONAPISource"),")."),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,'Any properties that define a record\'s data, with the exception of relationships\nto other records, should be defined as "attributes".'),(0,r.kt)("p",null,"All attributes should be contained in an ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," object at the root of a\nrecord."),(0,r.kt)("h3",{id:"relationships"},"Relationships"),(0,r.kt)("p",null,"Relationships between records should be defined in a ",(0,r.kt)("inlineCode",{parentName:"p"},"relationships")," object at\nthe root of a record."),(0,r.kt)("p",null,"Relationship linkage is specified in a ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," object for each relationship."),(0,r.kt)("p",null,"For to-one relationships, linkage should be expressed as a record identity\nobject in the form ",(0,r.kt)("inlineCode",{parentName:"p"},"{ type, id }"),". The absence of a relationship can be\nexpressed as ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("p",null,"For to-many relationships, linkage should be expressed as an array of record\nidentities."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema")," defines the models allowed in a source, including their keys,\nattributes, and relationships. Typically, a single schema is shared among all\nthe sources in an application."),(0,r.kt)("p",null,"Schemas are defined with their initial settings as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Schema } from '@orbit/data';\n\nconst schema = new Schema({\n  models: {\n    planet: {\n      attributes: {\n        name: { type: 'string' },\n        classification: { type: 'string' }\n      },\n      relationships: {\n        moons: { type: 'hasMany', model: 'moon', inverse: 'planet' }\n      }\n    },\n    moon: {\n      attributes: {\n        name: { type: 'string' }\n      },\n      relationships: {\n        planet: { type: 'hasOne', model: 'planet', inverse: 'moons' }\n      }\n    }\n  }\n});\n")),(0,r.kt)("p",null,"Models should be keyed by their singular name, and should be defined as an\nobject that contains ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"relationships"),", and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"keys"),"."),(0,r.kt)("h3",{id:"model-attributes"},"Model attributes"),(0,r.kt)("p",null,"Attributes may be defined by their ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"string"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"date"'),",\nwhich can be used to define their purpose and contents. An attribute's type may\nalso be used to determine how it should be serialized."),(0,r.kt)("h3",{id:"model-relationships"},"Model relationships"),(0,r.kt)("p",null,"Two types of relationships between models are allowed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasOne")," - for to-one relationships"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasMany")," - for to-many relationships")),(0,r.kt)("p",null,"Relationships must define the related ",(0,r.kt)("inlineCode",{parentName:"p"},"model")," and may optionally define their\n",(0,r.kt)("inlineCode",{parentName:"p"},"inverse"),", which should correspond to the name of a relationship on the related\nmodel. Inverse relationships should be defined when relationships must be kept\nsynchronized, so that adding or removing a relationship on the primary model\nresults in a corresponding change on the inverse model."),(0,r.kt)("p",null,"Here's an example of a schema definition that includes relationships with\ninverses:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Schema } from '@orbit/data';\n\nconst schema = new Schema({\n  models: {\n    planet: {\n      relationships: {\n        moons: { type: 'hasMany', model: 'moon', inverse: 'planet' }\n      }\n    },\n    moon: {\n      relationships: {\n        planet: { type: 'hasOne', model: 'planet', inverse: 'moons' }\n      }\n    }\n  }\n});\n")),(0,r.kt)("h3",{id:"model-keys"},"Model keys"),(0,r.kt)("p",null,'When working with remote servers that do not support client-generated IDs, it\'s\nnecessary to correlate locally generated IDs with remotely generated IDs, or\n"keys". Like ',(0,r.kt)("inlineCode",{parentName:"p"},"id"),", keys uniquely identify a record of a particular model type."),(0,r.kt)("p",null,"Keys currently accept no ",(0,r.kt)("em",{parentName:"p"},"standard")," options, so they should be declared with an\nempty options hash as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const schema = new Schema({\n  models: {\n    moon: {\n      keys: { remoteId: {} }\n    },\n    planet: {\n      keys: { remoteId: {} }\n    }\n  }\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Keys can only be of type ",(0,r.kt)("inlineCode",{parentName:"p"},'"string"'),", which is unnecessary to declare.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: A key such as ",(0,r.kt)("inlineCode",{parentName:"p"},"remoteId")," might be serialized as simply ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," when\ncommunicating with a server. However, it's important to distinguish it from the\nclient-generated ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," used within Orbit, so it requires a unique name.")),(0,r.kt)("h3",{id:"record-initialization"},"Record initialization"),(0,r.kt)("p",null,"Schemas support the ability to initialize records via an\n",(0,r.kt)("inlineCode",{parentName:"p"},"initializeRecord()")," method that takes a record (",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),") argument.\nCurrently, ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeRecord")," just assigns an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," to a record if the field\nis undefined. It may be extended to allow per-model defaults to be set as well."),(0,r.kt)("p",null,"Here's an example that creates a schema and initializes a record:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Schema } from '@orbit/schema';\n\nconst schema = new Schema({\n  models: {\n    planet: {\n      attributes: {\n        name: { type: 'string' }\n      }\n    }\n  }\n});\n\nlet earth = {\n  type: 'planet',\n  attributes: {\n    name: 'Earth'\n  }\n};\n\nschema.initializeRecord(earth);\n\nconsole.log(earth.id); // \"4facf3cc-7270-4b5e-aedd-94d777d31c31\"\n")),(0,r.kt)("p",null,"The default implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeRecord")," internally calls the schema's\n",(0,r.kt)("inlineCode",{parentName:"p"},"generateId()")," method to generate an ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),". By default, this invokes\n",(0,r.kt)("inlineCode",{parentName:"p"},"Orbit.uuid()")," to generate a v4 UUID (where ",(0,r.kt)("inlineCode",{parentName:"p"},"Orbit")," is the default export from\n",(0,r.kt)("inlineCode",{parentName:"p"},"@orbit/core"),")."),(0,r.kt)("p",null,"It's possible to override ",(0,r.kt)("inlineCode",{parentName:"p"},"generateId")," for a given schema to use a different\nlocal ID scheme. Here's a naive example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let counter = 0;\n\nconst schema = new Schema({\n  generateId(type) { return counter++; }\n});\n")))}m.isMDXComponent=!0}}]);