"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[7162],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9390:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],i={title:"Getting started"},c=void 0,l={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"This brief tutorial walks through using Orbit to manage",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/orbitjs/orbit/edit/main/website/docs/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting started"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"What's new in v0.17",permalink:"/docs/whats-new"}},p=[{value:"Defining a schema",id:"defining-a-schema",children:[],level:2},{value:"Defining a source",id:"defining-a-source",children:[],level:2},{value:"Loading and querying data",id:"loading-and-querying-data",children:[{value:"Asynchronous vs. synchronous queries",id:"asynchronous-vs-synchronous-queries",children:[],level:3}],level:2},{value:"Defining a backup source",id:"defining-a-backup-source",children:[],level:2},{value:"Sync&#39;ing changes between sources",id:"syncing-changes-between-sources",children:[],level:2},{value:"Introducing a coordinator",id:"introducing-a-coordinator",children:[],level:2},{value:"Restoring from backup",id:"restoring-from-backup",children:[],level:2},{value:"Communicating with a server",id:"communicating-with-a-server",children:[],level:2},{value:"Managing state with buckets",id:"managing-state-with-buckets",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This brief tutorial walks through using Orbit to manage\n",(0,o.kt)("a",{parentName:"p",href:"/docs/intro#record-specific-primitives"},"record-specific"),' data in a client-side\napplication. Sticking with the "orbit" theme, this application will track some\nobjects orbiting in our own solar system.'),(0,o.kt)("h2",{id:"defining-a-schema"},"Defining a schema"),(0,o.kt)("p",null,"Schemas are used to define the models and relationships for an application."),(0,o.kt)("p",null,"Let's start by defining a schema for our solar system's data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RecordSchema } from '@orbit/records';\n\nconst schema = new RecordSchema({\n  models: {\n    planet: {\n      attributes: {\n        name: { type: 'string' },\n        classification: { type: 'string' },\n        atmosphere: { type: 'boolean' }\n      },\n      relationships: {\n        moons: { kind: 'hasMany', type: 'moon', inverse: 'planet' }\n      }\n    },\n    moon: {\n      attributes: {\n        name: { type: 'string' }\n      },\n      relationships: {\n        planet: { kind: 'hasOne', type: 'planet', inverse: 'moons' }\n      }\n    }\n  }\n});\n")),(0,o.kt)("p",null,"This schema defines two models, ",(0,o.kt)("inlineCode",{parentName:"p"},"planet")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"moon"),", as well as the attributes\nand relationships that are possible for each. A moon can have one planet, while\na planet can have many moons. By setting an ",(0,o.kt)("inlineCode",{parentName:"p"},"inverse")," for each relationship,\nwe're telling Orbit that changes to one side of the relationship should be\nreflected in the other."),(0,o.kt)("h2",{id:"defining-a-source"},"Defining a source"),(0,o.kt)("p",null,"Sources provide interfaces to access data. To ensure that they have the same\nunderstanding of data, every source in an application should share the same\nschema."),(0,o.kt)("p",null,"Let's create an in-memory source as our first data source:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MemorySource } from '@orbit/memory';\n\nconst memory = new MemorySource({ schema });\n")),(0,o.kt)("h2",{id:"loading-and-querying-data"},"Loading and querying data"),(0,o.kt)("p",null,"We can now load some data into our memory source and then query its contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const earth = {\n  type: 'planet',\n  id: 'earth',\n  attributes: {\n    name: 'Earth',\n    classification: 'terrestrial',\n    atmosphere: true\n  }\n};\n\nconst venus = {\n  type: 'planet',\n  id: 'venus',\n  attributes: {\n    name: 'Venus',\n    classification: 'terrestrial',\n    atmosphere: true\n  }\n};\n\nconst theMoon = {\n  type: 'moon',\n  id: 'theMoon',\n  attributes: {\n    name: 'The Moon'\n  },\n  relationships: {\n    planet: { data: { type: 'planet', id: 'earth' } }\n  }\n};\n\nawait memory.update((t) => [\n  t.addRecord(venus),\n  t.addRecord(earth),\n  t.addRecord(theMoon)\n]);\n\nlet planets = await memory.query((q) => q.findRecords('planet').sort('name'));\nconsole.log(planets);\n")),(0,o.kt)("p",null,"The following output should be logged:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"[\n  {\n    type: 'planet',\n    id: 'earth',\n    attributes: {\n      name: 'Earth',\n      classification: 'terrestrial',\n      atmosphere: true\n    },\n    relationships: {\n      moons: {\n        data: [{ type: 'moon', id: 'theMoon' }]\n      }\n    }\n  },\n  {\n    type: 'planet',\n    id: 'venus',\n    attributes: {\n      name: 'Venus',\n      classification: 'terrestrial',\n      atmosphere: true\n    }\n  }\n];\n")),(0,o.kt)("p",null,"There's a lot going on here, so let's break it down."),(0,o.kt)("p",null,"First of all, each record is represented by a POJO that aligns with its\ncorresponding model definition in the schema. These representations conform with\nthe ",(0,o.kt)("a",{parentName:"p",href:"http://jsonapi.org/"},"JSON:API")," specification. Every record has an identity\nestablished by a ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," pair. Relationship linkage is specified in a\n",(0,o.kt)("inlineCode",{parentName:"p"},"data")," object via identities."),(0,o.kt)("p",null,"In order to add records to the memory source, we call ",(0,o.kt)("inlineCode",{parentName:"p"},"memory.update()")," and pass\nan array of operations. Passing a function to ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," provides us with a\ntransform builder (",(0,o.kt)("inlineCode",{parentName:"p"},"t"),"), which we use to create an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"addRecord"),"\noperations."),(0,o.kt)("p",null,"Note that we added the relationship between the moon and the planet on just the\nmoon record. However, when we query the planet, we can see that the inverse\nrelationship has also been added. This is because every operation that's applied\nto the memory source's cache passes through a schema consistency check."),(0,o.kt)("p",null,"Let's look at how the memory source is queried:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"let planets = await memory.query((q) => q.findRecords('planet').sort('name'));\n")),(0,o.kt)("p",null,"Because we pass a function to ",(0,o.kt)("inlineCode",{parentName:"p"},"query"),", Orbit provides us with a query builder\n(",(0,o.kt)("inlineCode",{parentName:"p"},"q"),") which we can use to compose a query expression. We're creating a simple\n",(0,o.kt)("inlineCode",{parentName:"p"},"findRecords")," query that's sorted by ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),". Internally, query expressions are\nrepresented in an ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree"},"AST")," form\nthat allows for nearly limitless expressivity (the only limit being that all\nsources involved in processing a query need to understand the expressions\ninvolved)."),(0,o.kt)("p",null,"Here's an example of a more complex query that filters, sorts, and paginates:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"let planets = await memory.query((q) =>\n  q\n    .findRecords('planet')\n    .filter({ attribute: 'classification', value: 'terrestrial' })\n    .sort({ attribute: 'name', order: 'descending' })\n    .page({ offset: 0, limit: 10 })\n);\n")),(0,o.kt)("h3",{id:"asynchronous-vs-synchronous-queries"},"Asynchronous vs. synchronous queries"),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"memory.query"),' is asynchronous and thus returns results wrapped in a\npromise. This may seem strange at first because the memory source\'s data is "in memory".\nIn fact, if you want to just "peek" into the contents of the memory source,\nyou can issue the same queries synchronously against the memory source\'s ',(0,o.kt)("inlineCode",{parentName:"p"},"Cache"),".\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Results will be returned synchronously by querying the cache\nlet planets = memory.cache.query((q) => q.findRecords('planet').sort('name'));\n")),(0,o.kt)("p",null,'By querying the cache instead of the memory source, you\'re not allowing other sources to\nparticipate in the fulfillment of the query. Continue reading to understand how\nrequests to sources can be "coordinated".'),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Want to experiment?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/orbitjs-v017-getting-started-part-1-q4n3s?previewwindow=console"},"Part 1 of this example in CodeSandbox"),"."))),(0,o.kt)("h2",{id:"defining-a-backup-source"},"Defining a backup source"),(0,o.kt)("p",null,"Our in-memory data source is quite isolated at the moment. If a scientist is\nusing our application to track their discoveries, a browser refresh might lose a\nwhole planet or moon! \ud83d\ude31"),(0,o.kt)("p",null,"Let's create a browser storage source to keep data around locally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IndexedDBSource } from '@orbit/indexeddb';\n\nconst backup = new IndexedDBSource({\n  schema,\n  name: 'backup',\n  namespace: 'solarsystem'\n});\n")),(0,o.kt)("h2",{id:"syncing-changes-between-sources"},"Sync'ing changes between sources"),(0,o.kt)("p",null,"Every time a source is transformed, it emits a ",(0,o.kt)("inlineCode",{parentName:"p"},"transform")," event. It's simple\nto observe these events directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"memory.on('transform', (transform) => {\n  console.log(transform);\n});\n")),(0,o.kt)("p",null,"It's possible to pipe changes that occur in one source into another via the\n",(0,o.kt)("inlineCode",{parentName:"p"},"sync")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"memory.on('transform', (transform) => {\n  backup.sync(transform);\n});\n")),(0,o.kt)("p",null,"Like all mutation and query methods on sources, the ",(0,o.kt)("inlineCode",{parentName:"p"},"sync")," call returns a\npromise. If we want to guarantee that transforms can't be applied to our memory\nsource without also being backed up, we should return the promise in the event\nhandler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"memory.on('transform', (transform) => {\n  return backup.sync(transform);\n});\n")),(0,o.kt)("p",null,"Or more simply:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"memory.on('transform', (transform) => backup.sync(transform));\n")),(0,o.kt)("p",null,"With this single line of code we've guaranteed that every change to the\nin-memory source will be sync'd with the backup IndexedDB source. Furthermore,\nwe've configured this synchronization to be \"blocking\", so that changes to the\nmemory source can't be made at all unless they are also backed up."),(0,o.kt)("h2",{id:"introducing-a-coordinator"},"Introducing a coordinator"),(0,o.kt)("p",null,"Orbit provides another layer of abstraction on top of direct event\nobservation and handling: a ",(0,o.kt)("inlineCode",{parentName:"p"},"Coordinator"),". A coordinator manages a set of\nsources to which it applies a set of coordination strategies."),(0,o.kt)("p",null,"A coordinator could be configured to handle the above scenario as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Coordinator, SyncStrategy } from '@orbit/coordinator';\n\nconst coordinator = new Coordinator({\n  sources: [memory, backup]\n});\n\nconst backupMemorySync = new SyncStrategy({\n  source: 'memory',\n  target: 'backup',\n  blocking: true\n});\n\ncoordinator.addStrategy(backupMemorySync);\n\n// `activate` resolves when all strategies have been activated\nawait coordinator.activate();\n")),(0,o.kt)("p",null,"Although this might seem like an unnecessary amount of complexity compared with\nthe simple event handler, there are a number of benefits to using a coordinator:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can easily add preconfigured strategies, such as an event logging\nstrategy and a log truncation strategy (to keep the size of in-memory logs\nto a minimum). You can also create your own strategies and share them across\napplications.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Strategies can be activated ",(0,o.kt)("em",{parentName:"p"},"and deactivated")," all together by simply calling\n",(0,o.kt)("inlineCode",{parentName:"p"},"coordinator.activate()")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"coordinator.deactivate()"),". Deactivating\nevent handlers directly requires careful tracking of handler functions, which\ncan be tedious. However, it's important to do this to avoid leaking memory.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Coordinators can share a log-level across all strategies. Sometimes you want\nto see debug info and sometimes only errors."))),(0,o.kt)("h2",{id:"restoring-from-backup"},"Restoring from backup"),(0,o.kt)("p",null,"Although we're now backing up our memory source to browser storage, we have not\nyet set up a process to restore that backed up data."),(0,o.kt)("p",null,"If we want our app to restore all of its data from browser storage when it\nfirst boots, we could perform the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"let allRecords = await backup.query((q) => q.findRecords());\nawait memory.sync((t) => allRecords.map((r) => t.addRecord(r)));\nawait coordinator.activate();\n")),(0,o.kt)("p",null,"This code first queries all the records from the backup source and then syncs\nthem with the main memory source ",(0,o.kt)("em",{parentName:"p"},"before")," activating the coordinator. In this\nway, the coordination strategy that backs up the memory source won't be enabled\nuntil after the restore is complete."),(0,o.kt)("p",null,"We now have an application which has data fully contained in the browser. Any\ndata that's entered can be accessed while offline and will even persist across\nbrowser refreshes."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Want to experiment?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/orbitjs-v017-getting-started-part-2-vt4ct?previewwindow=console"},"Part 2 of this example in CodeSandbox"),"."))),(0,o.kt)("h2",{id:"communicating-with-a-server"},"Communicating with a server"),(0,o.kt)("p",null,"Most apps can't exist in the vacuum of a browser","\u2014","data tends to be far\nmore useful when it's shared with a server."),(0,o.kt)("p",null,"Let's say that we have a web server that conforms with the\n",(0,o.kt)("a",{parentName:"p",href:"http://jsonapi.org/"},"JSON:API")," specification. We can use Orbit's\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/jsonapi/classes/JSONAPISource"},(0,o.kt)("inlineCode",{parentName:"a"},"JSONAPISource"))," to allow our app to\ncommunicate with that server."),(0,o.kt)("p",null,"We'll start by creating a new ",(0,o.kt)("inlineCode",{parentName:"p"},"remote")," source:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JSONAPISource } from '@orbit/jsonapi';\n\nconst remote = new JSONAPISource({\n  schema,\n  name: 'remote',\n  host: 'http://api.example.com'\n});\n")),(0,o.kt)("p",null,"Next let's add the source to the coordinator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"coordinator.addSource(remote);\n")),(0,o.kt)("p",null,"And then we can add strategies to ensure that queries and updates made against\nthe memory source are processed by the remote server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RequestStrategy, SyncStrategy } from '@orbit/coordinator';\n\n// Query the remote server whenever the memory source is queried\ncoordinator.addStrategy(\n  new RequestStrategy({\n    source: 'memory',\n    on: 'beforeQuery',\n\n    target: 'remote',\n    action: 'query',\n\n    blocking: false\n  })\n);\n\n// Update the remote server whenever the memory source is updated\ncoordinator.addStrategy(\n  new RequestStrategy({\n    source: 'memory',\n    on: 'beforeUpdate',\n\n    target: 'remote',\n    action: 'update',\n\n    blocking: false\n  })\n);\n\n// Sync all changes received from the remote server to the memory source\ncoordinator.addStrategy(\n  new SyncStrategy({\n    source: 'remote',\n    target: 'memory',\n    blocking: false\n  })\n);\n")),(0,o.kt)("p",null,"These strategies are all non-blocking, which means that the memory source will\nbe updated / queried optimistically without waiting for responses from the\nserver. Once the server responses are received, they will then be sync'd back\nwith the memory source."),(0,o.kt)("p",null,"This set of coordination strategies is certainly not yet production ready. We\nwill need exception handling in our strategies to tell Orbit how to handle\nnetwork errors (e.g. retry after X secs) as well as other types of exceptions."),(0,o.kt)("p",null,"Optimistic server requests paired with an in-browser backup can work well for\nsome kinds of applications. For other applications, it's more appropriate to use\nblocking strategies that tie the success of memory source requests to a\nsuccessful round trip to the server. Still other applications might choose to\nmix strategies, so that only certain updates are blocking (e.g. a store\npurchase)."),(0,o.kt)("p",null,"Orbit allows for filtering, exception handling, and more in strategies to\nenable any of these options. We'll dive deeper into these topics in the rest of\nthis guide, the API docs, and sample applications."),(0,o.kt)("h2",{id:"managing-state-with-buckets"},"Managing state with buckets"),(0,o.kt)("p",null,"At any given time, our Orbit application may have different kinds of state\nin-flight and unpersisted. This state may include tasks that are queued for\nprocessing, logs of transforms that have been applied, or other source-specific\nstate that we'd like to reify if our application was closed unexpectedly."),(0,o.kt)("p",null,'In order to persist this state, we can create a "bucket" that can be shared\namong our sources:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { LocalStorageBucket } from '@orbit/local-storage-bucket';\nimport { IndexedDBBucket, supportsIndexedDB } from '@orbit/indexeddb-bucket';\n\nconst BucketClass = supportsIndexedDB() ? IndexedDBBucket : LocalStorageBucket;\nconst bucket = new BucketClass({ namespace: 'my-app' });\n")),(0,o.kt)("p",null,"Note that the above code favors using an IndexedDB-based bucket and only falls\nback to using a LocalStorage-based bucket if necessary."),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"bucket")," can be passed as a setting to any and all of our sources.\nFor instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const backup = new IndexedDBSource({\n  bucket,\n  schema,\n  name: 'backup',\n  namespace: 'solarsystem'\n});\n\nconst memory = new MemorySource({ bucket, schema });\n")),(0,o.kt)("p",null,"Each source will use the bucket to initialize its queues, logs, and other state.\nAnd as their state changes, sources will use buckets to persist those changes."),(0,o.kt)("p",null,"Of course, buckets can also be used for ad-hoc state persistence of any kind\nby other parts of your application. The possibilities are extensive!"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"That concludes a brief run-through of some of the key aspects of Orbit. Please\ncontinue reading the guides to gain a deeper understanding of how Orbit works\nand how to make the most of it."))}d.isMDXComponent=!0}}]);