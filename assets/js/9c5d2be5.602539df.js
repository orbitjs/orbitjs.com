"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[2655],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3983:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"Querying data"},s=void 0,p={unversionedId:"querying-data",id:"querying-data",title:"Querying data",description:"The contents of a source can be interrogated using a",source:"@site/docs/querying-data.md",sourceDirName:".",slug:"/querying-data",permalink:"/docs/querying-data",editUrl:"https://github.com/orbitjs/orbit/edit/main/website/docs/querying-data.md",tags:[],version:"current",frontMatter:{title:"Querying data"},sidebar:"docs",previous:{title:"Updating data",permalink:"/docs/updating-data"},next:{title:"Task processing",permalink:"/docs/task-processing"}},d=[{value:"Query expressions",id:"query-expressions",children:[],level:2},{value:"Queries",id:"queries",children:[{value:"Standard queries",id:"standard-queries",children:[],level:3}],level:2},{value:"Filtering",id:"filtering",children:[{value:"Attribute filtering",id:"attribute-filtering",children:[],level:3},{value:"Relationship filtering",id:"relationship-filtering",children:[{value:"findRelatedRecords vs findRecords.filter({ relation: ..., record: ... })",id:"findrelatedrecords-vs-findrecordsfilter-relation--record--",children:[],level:4}],level:3},{value:"Query options",id:"query-options",children:[],level:3}],level:2},{value:"Querying a memory source&#39;s cache",id:"querying-a-memory-sources-cache",children:[{value:"Live queries",id:"live-queries",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The contents of a source can be interrogated using a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/data/interfaces/Query"},(0,i.kt)("inlineCode",{parentName:"a"},"Query")),". Orbit comes with a standard set of\nquery expressions for finding records and related records. These expressions can\nbe paired with refinements (e.g. filters, sort order, etc.)."),(0,i.kt)("p",null,"Custom query expressions can also be developed, as long as all the sources\nparticipating can understand them."),(0,i.kt)("h2",{id:"query-expressions"},"Query expressions"),(0,i.kt)("p",null,"The base ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/data/interfaces/QueryExpression"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryExpression"))," interface\nconsists of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"op")," - a string identifying the type of query operation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," - (Optional) a ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/data/interfaces/RequestOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"RequestOptions"))," object")),(0,i.kt)("p",null,"The other members of a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/data/interfaces/QueryExpression"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryExpression"))," are specific to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"op"),". The following standard record-specific query expressions are defined\nin ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/records/"},(0,i.kt)("inlineCode",{parentName:"a"},"@orbit/records")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FindRecord extends QueryExpression {\n  op: 'findRecord';\n  record: RecordIdentity;\n}\n\ninterface FindRelatedRecord extends QueryExpression {\n  op: 'findRelatedRecord';\n  record: RecordIdentity;\n  relationship: string;\n}\n\ninterface FindRelatedRecords extends QueryExpression {\n  op: 'findRelatedRecords';\n  record: RecordIdentity;\n  relationship: string;\n  sort?: SortSpecifier[];\n  filter?: FilterSpecifier[];\n  page?: PageSpecifier;\n}\n\ninterface FindRecords extends QueryExpression {\n  op: 'findRecords';\n  type?: string;\n  sort?: SortSpecifier[];\n  filter?: FilterSpecifier[];\n  page?: PageSpecifier;\n}\n")),(0,i.kt)("p",null,"Supporting interfaces include:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export type SortOrder = 'ascending' | 'descending';\n\nexport interface SortSpecifier {\n  kind: string;\n  order: SortOrder;\n}\n\nexport interface AttributeSortSpecifier extends SortSpecifier {\n  kind: 'attribute';\n  attribute: string;\n}\n\nexport type ComparisonOperator =\n  | 'equal'\n  | 'gt'\n  | 'lt'\n  | 'gte'\n  | 'lte'\n  | 'some'\n  | 'all'\n  | 'none';\n\nexport interface FilterSpecifier {\n  op: ComparisonOperator;\n  kind: string;\n}\n\nexport interface AttributeFilterSpecifier extends FilterSpecifier {\n  kind: 'attribute';\n  attribute: string;\n  value: any;\n}\n\nexport interface PageSpecifier {\n  kind: string;\n}\n\nexport interface OffsetLimitPageSpecifier extends PageSpecifier {\n  kind: 'offsetLimit';\n  offset?: number;\n  limit?: number;\n}\n")),(0,i.kt)("h2",{id:"queries"},"Queries"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/data/interfaces/Query"},(0,i.kt)("inlineCode",{parentName:"a"},"Query"))," interface has the following\nmembers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," - a string that uniquely identifies the query"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expressions")," - an instance or array of ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/data/interfaces/QueryExpression"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryExpression"))," objects"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," - an optional object that represents options that can influence how\na query is processed")),(0,i.kt)("p",null,'Although queries can be created "manually", you\'ll probably find it easier\nto use a builder function that returns a query.'),(0,i.kt)("p",null,"To use a query builder, pass a function into a source's method that expects\na query, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"pull"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," that's compatible\nwith the source should be applied as an argument. You can then use this builder\nto create query expressions."),(0,i.kt)("h3",{id:"standard-queries"},"Standard queries"),(0,i.kt)("p",null,"You can use the standard ",(0,i.kt)("inlineCode",{parentName:"p"},"@orbit/data")," query builder as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Find a single record by identity\nmemory.query((q) => q.findRecord({ type: 'planet', id: 'earth' }));\n\n// Find all records by type\nmemory.query((q) => q.findRecords('planet'));\n\n// Find a related record in a to-one relationship\nmemory.query((q) => q.findRelatedRecord({ type: 'moon', id: 'io' }, 'planet'));\n\n// Find related records in a to-many relationship\nmemory.query((q) =>\n  q.findRelatedRecords({ type: 'planet', id: 'earth' }, 'moons')\n);\n")),(0,i.kt)("p",null,"The base ",(0,i.kt)("inlineCode",{parentName:"p"},"findRecords")," query can be enhanced significantly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Sort by name\nmemory.query((q) => q.findRecords('planet')\n                     .sort('name'));\n\n// Sort by classification, then name (descending)\nmemory.query((q) => q.findRecords('planet')\n                     .sort('classification', '-name'));\n\n// Filter by a single attribute\nmemory.query((q) => q.findRecords('planet')\n                     .filter({ attribute: 'classification', value: 'terrestrial' });\n\n// Filter by multiple attributes\nmemory.query((q) => q.findRecords('planet')\n                     .filter({ attribute: 'classification', value: 'terrestrial' },\n                             { attribute: 'mass', op: 'gt', value: 987654321 });\n\n// Filter by related records\nmemory.query((q) => q.findRecords('moons')\n                     .filter({ relation: 'planet', record: { type: 'planet', id: 'earth' }});\n\n// Filter by multiple related records\nmemory.query((q) => q.findRecords('moons')\n                     .filter({ relation: 'planet', records: [{ type: 'planet', id: 'earth' }, { type: 'planet', id: 'jupiter'}]});\n\n// Paginate by offset and limit\nmemory.query((q) => q.findRecords('planet')\n                     .page({ offset: 0, limit: 10 }));\n\n// Combine filtering, sorting, and paginating\nmemory.query((q) => q.findRecords('planet')\n                     .filter({ attribute: 'classification', value: 'terrestrial' })\n                     .sort('name')\n                     .page({ offset: 0, limit: 10 }));\n")),(0,i.kt)("p",null,"The same parameters can be applied to ",(0,i.kt)("inlineCode",{parentName:"p"},"findRelatedRecords"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Sort by name\nmemory.query((q) => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                     .sort('name'));\n\n// Sort by classification, then name (descending)\nmemory.query((q) => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                     .sort('classification', '-name'));\n\n// Filter by a single attribute\nmemory.query((q) => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                     .filter({ attribute: 'classification', value: 'terrestrial' });\n\n// Filter by multiple attributes\nmemory.query((q) => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                     .filter({ attribute: 'classification', value: 'terrestrial' },\n                             { attribute: 'mass', op: 'gt', value: 987654321 });\n\n// Filter by related records\nmemory.query((q) => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'moons')\n                     .filter({ relation: 'planet', record: { type: 'planet', id: 'earth' }});\n\n// Filter by multiple related records\nmemory.query((q) => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'moons')\n                     .filter({ relation: 'planet', records: [{ type: 'planet', id: 'earth' }, { type: 'planet', id: 'jupiter'}]});\n\n// Paginate by offset and limit\nmemory.query((q) => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                     .page({ offset: 0, limit: 10 }));\n\n// Combine filtering, sorting, and paginating\nmemory.query((q) => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                     .filter({ attribute: 'classification', value: 'terrestrial' })\n                     .sort('name')\n                     .page({ offset: 0, limit: 10 }));\n")),(0,i.kt)("h2",{id:"filtering"},"Filtering"),(0,i.kt)("p",null,"As shown in some of the previous examples, you can filter over the records that are found by a ",(0,i.kt)("inlineCode",{parentName:"p"},"findRecords")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"findRelatedRecords")," query. Filtering is done building a boolean expression and only retrieving the records for which this expression returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". This boolean expression, just like it is with regular javascript, is built out of three parts."),(0,i.kt)("p",null,"Javascript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"}," const denserThanEarth = planets.filter((planet) => {\n    return planet.density    >     earth.density\n }) //    |      1       |   2    |      3      |\n\n")),(0,i.kt)("p",null,"Filter expression:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const denserThanEarth = orbit.cache.query((q) => {\n  return q.findRecords('planets')\n          .filter({ attribute: 'radius', op: 'lt', value: earth.density })\n}) //             |         1          |    2    |          3           |\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"the left hand value:\nThis is a reference to the property of the records that you want to compare. This can either be a ",(0,i.kt)("inlineCode",{parentName:"p"},"relationship")," or an ",(0,i.kt)("inlineCode",{parentName:"p"},"attribute"),". During evaluation, the reference will be replaced by the actual values of the records.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"the comparison operation\nThe operation determines the way the two values will be compared.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"the right hand value:\nThis is a value that will remain constant for the entirety of the filter. This value determines, given the operation, which records will be returned and which will not."))),(0,i.kt)("p",null,"There are two different kinds of filtering. Filtering on attribute values and filtering on relationship values.\nBoth have their own comparison operators."),(0,i.kt)("h3",{id:"attribute-filtering"},"Attribute filtering"),(0,i.kt)("p",null,"Attribute filtering looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const denserThanEarth = orbit.cache.query((q) => {\n  return q.findRecords('planets')\n    .filter({ attribute: 'radius', op: 'lt', value: earth.density })\n})\n")),(0,i.kt)("p",null,"For attribute filtering, the following comparison operators are available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"equal"),": alias for the ",(0,i.kt)("inlineCode",{parentName:"li"},"===")," operator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gt"),": alias for the ",(0,i.kt)("inlineCode",{parentName:"li"},">")," operator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lt"),": alias for the ",(0,i.kt)("inlineCode",{parentName:"li"},"<")," operator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gte"),": alias for the ",(0,i.kt)("inlineCode",{parentName:"li"},">=")," operator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lte"),": alias for the ",(0,i.kt)("inlineCode",{parentName:"li"},"<=")," operator.")),(0,i.kt)("h3",{id:"relationship-filtering"},"Relationship filtering"),(0,i.kt)("p",null,"Relationship filtering has two types:"),(0,i.kt)("p",null,"Filtering on a ",(0,i.kt)("inlineCode",{parentName:"p"},"hasOne")," relationship:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const moonsOfJupiter = orbit.cache.query((q) => {\n  return q.findRecords('moon')\n          .filter({ relationship: 'planet', op: 'equal', record: { type: 'planet', id: 'jupiter' } })\n})\n")),(0,i.kt)("p",null,"Filtering on a ",(0,i.kt)("inlineCode",{parentName:"p"},"hasMany")," relationship:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const theSolarSystem = orbit.cache.query((q) => {\n  return q.findRecords('planetarySystem')\n          .filter({\n            relationship: 'planets',\n            op: 'some',\n            records: [{ type: 'planet', id: 'earth' }]\n          })\n})\n")),(0,i.kt)("p",null,"Filtering on a ",(0,i.kt)("inlineCode",{parentName:"p"},"hasOne")," relationship has different comparison operations available than filtering on a ",(0,i.kt)("inlineCode",{parentName:"p"},"hasMany")," relationship."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hasOne")," operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"equal"),": returns a record if the left hand relationship is equal to the right hand relationship.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hasMany")," operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"equal"),": returns a record if the left hand relationsips are identical to the right hand relationships."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"all"),": returns a record if the left hand relationships contain all the right hand relationships."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"some"),": returns a record if the left hand relationships contain one or more of the right hand relationships."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"none"),": returns a record if none of the left hand relationships are present in the right hand relationships.")),(0,i.kt)("h4",{id:"findrelatedrecords-vs-findrecordsfilter-relation--record--"},"findRelatedRecords vs findRecords.filter({ relation: ..., record: ... })"),(0,i.kt)("p",null,"If you're using the default settings for\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/jsonapi/classes/JSONAPISource"},"JSONAPISource"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"findRelatedRecords"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"findRecords.filter(...)")," produce very different URLs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const relatedRecordId = { type: 'planet', id: 'earth' };\n\n// This fetches from: /planets/earth/moons\nmemory.query((q) => q.findRelatedRecords(relatedRecordId, 'moons'));\n\n// This fetches from: /moons?filter[planet]=earth\nmemory.query((q) => q.findRecords('moon')).filter({ relation: 'planet', record: relatedRecordId });\n")),(0,i.kt)("h3",{id:"query-options"},"Query options"),(0,i.kt)("p",null,"Options can be added to queries to provide processing instructions to particular\nsources and to include metadata about queries."),(0,i.kt)("p",null,"For example, the following query is given a ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," and contains instructions\nfor the source named ",(0,i.kt)("inlineCode",{parentName:"p"},"remote"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"memory.query((q) => q.findRecords('contact').sort('lastName', 'firstName'), {\n  label: 'Find all contacts',\n  sources: {\n    remote: {\n      include: ['phoneNumbers']\n    }\n  }\n});\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," can be useful for providing an understanding of actions that have been\nqueued for processing."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sources: { ${sourceName}: sourceSpecificOptions }")," pattern is used to pass\noptions that only a particular source will understand when processing a query.\nIn this instance, we're telling a source named ",(0,i.kt)("inlineCode",{parentName:"p"},"remote")," (let's say it's a\n",(0,i.kt)("inlineCode",{parentName:"p"},"JSONAPISource"),") to include ",(0,i.kt)("inlineCode",{parentName:"p"},"include=phone-numbers")," as a query param. This will\nresult in a server response that includes contacts together with their related\nphone numbers."),(0,i.kt)("p",null,"It is possible to pass different options to each expression in the query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"memory.query((q) => [\n  q.findRecords('contact').options({ include: ['phoneNumbers'] }),\n  q.findRecords('meeting').options({ include: ['location'] })\n]);\n")),(0,i.kt)("h2",{id:"querying-a-memory-sources-cache"},"Querying a memory source's cache"),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"memory.query"),' is asynchronous and thus returns results wrapped in a\npromise. This may seem strange at first because the memory source\'s data is "in memory".\nIn fact, if you want to just "peek" into the contents of the memory source,\nyou can issue the same queries synchronously against the memory source\'s ',(0,i.kt)("inlineCode",{parentName:"p"},"Cache"),".\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Results will be returned synchronously by querying the cache\nconst planets = memory.cache.query((q) => q.findRecords('planet').sort('name'));\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"By querying the cache instead of the memory source, you're not allowing other\nsources to participate in the fulfillment of the query. If you want to\ncoordinate queries across multiple sources, it's critical to make requests\ndirectly on the memory source.")),(0,i.kt)("h3",{id:"live-queries"},"Live queries"),(0,i.kt)("p",null,"You may subscribe to a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/record-cache/classes/SyncLiveQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"SyncLiveQuery"))," on a memory source's cache.\nTo do so, request a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/record-cache/classes/SyncLiveQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"SyncLiveQuery")),"\ninstance and then subscribe to changes. By default the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/record-cache/classes/SyncLiveQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"SyncLiveQuery"))," will observe cache\n",(0,i.kt)("inlineCode",{parentName:"p"},"patch")," events with a debounce. The subscription callback will be called on\nevery operation which is relevant to the query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Create a new LiveQuery instance\nconst planetsLiveQuery = memory.cache.liveQuery((q) => q.findRecords('planet'));\n// Subscribe to LiveQuery changes\nconst unsubscribe = planetsLiveQuery.subscribe((update) => {\n  // Query for results when a change occure\n  update.query();\n});\n// Unsubscribe from the LiveQuery\nunsubscribe();\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you use a pull based reactive system (for example Glimmer tracking) you can\nset debounceLiveQueries option to false on memory cache."))))}u.isMDXComponent=!0}}]);