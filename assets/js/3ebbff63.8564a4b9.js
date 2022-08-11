"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[2328],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,y=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9053:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),o=["components"],s={title:"Querying data"},l=void 0,d={unversionedId:"querying-data",id:"version-0.16/querying-data",title:"Querying data",description:"The contents of a source can be interrogated using a Query. Orbit comes with a",source:"@site/versioned_docs/version-0.16/querying-data.md",sourceDirName:".",slug:"/querying-data",permalink:"/docs/0.16/querying-data",editUrl:"https://github.com/orbitjs/orbit/edit/main/website/versioned_docs/version-0.16/querying-data.md",tags:[],version:"0.16",frontMatter:{title:"Querying data"},sidebar:"version-0.16/docsSidebar",previous:{title:"Updating data",permalink:"/docs/0.16/updating-data"},next:{title:"Task processing",permalink:"/docs/0.16/task-processing"}},p=[{value:"Query expressions",id:"query-expressions",children:[],level:2},{value:"Queries",id:"queries",children:[{value:"Standard queries",id:"standard-queries",children:[{value:"findRelatedRecords vs findRecords.filter({ relation: ..., record: ... })",id:"findrelatedrecords-vs-findrecordsfilter-relation--record--",children:[],level:4}],level:3},{value:"Query options",id:"query-options",children:[],level:3}],level:2},{value:"Querying a memory source&#39;s cache",id:"querying-a-memory-sources-cache",children:[],level:2}],c={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The contents of a source can be interrogated using a ",(0,a.kt)("inlineCode",{parentName:"p"},"Query"),". Orbit comes with a\nstandard set of query expressions for finding records and related records. These\nexpressions can be paired with refinements (e.g. filters, sort order, etc.)."),(0,a.kt)("p",null,"Custom query expressions can also be developed, as long as all the sources\nparticipating can understand them."),(0,a.kt)("h2",{id:"query-expressions"},"Query expressions"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryExpression")," interface requires one member:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"op")," - a string identifying the type of query operation")),(0,a.kt)("p",null,"The other members of a ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryExpression")," are specific to the ",(0,a.kt)("inlineCode",{parentName:"p"},"op"),"."),(0,a.kt)("p",null,"The following standard query expressions are defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"@orbit/data"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface QueryExpression {\n  op: string;\n}\n\ninterface FindRecord extends QueryExpression {\n  op: "findRecord";\n  record: RecordIdentity;\n}\n\ninterface FindRelatedRecord extends QueryExpression {\n  op: "findRelatedRecord";\n  record: RecordIdentity;\n  relationship: string;\n}\n\ninterface FindRelatedRecords extends QueryExpression {\n  op: "findRelatedRecords";\n  record: RecordIdentity;\n  relationship: string;\n  sort?: SortSpecifier[];\n  filter?: FilterSpecifier[];\n  page?: PageSpecifier;\n}\n\ninterface FindRecords extends QueryExpression {\n  op: "findRecords";\n  type?: string;\n  sort?: SortSpecifier[];\n  filter?: FilterSpecifier[];\n  page?: PageSpecifier;\n}\n')),(0,a.kt)("p",null,"Supporting interfaces include:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export type SortOrder = "ascending" | "descending";\n\nexport interface SortSpecifier {\n  kind: string;\n  order: SortOrder;\n}\n\nexport interface AttributeSortSpecifier extends SortSpecifier {\n  kind: "attribute";\n  attribute: string;\n}\n\nexport type ComparisonOperator = "equal" | "gt" | "lt" | "gte" | "lte";\n\nexport interface FilterSpecifier {\n  op: ComparisonOperator;\n  kind: string;\n}\n\nexport interface AttributeFilterSpecifier extends FilterSpecifier {\n  kind: "attribute";\n  attribute: string;\n  value: any;\n}\n\nexport interface PageSpecifier {\n  kind: string;\n}\n\nexport interface OffsetLimitPageSpecifier extends PageSpecifier {\n  kind: "offsetLimit";\n  offset?: number;\n  limit?: number;\n}\n')),(0,a.kt)("h2",{id:"queries"},"Queries"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Query")," interface has the following members:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," - a string that uniquely identifies the query"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expression")," - a ",(0,a.kt)("inlineCode",{parentName:"li"},"QueryExpression")," object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - an optional object that represents options that can influence how\na query is processed")),(0,a.kt)("p",null,'Although queries can be created "manually", you\'ll probably find it easier\nto use a builder function that returns a query.'),(0,a.kt)("p",null,"To use a query builder, pass a function into a source's method that expects\na query, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pull"),". A ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," that's compatible\nwith the source should be applied as an argument. You can then use this builder\nto create a query expression."),(0,a.kt)("h3",{id:"standard-queries"},"Standard queries"),(0,a.kt)("p",null,"You can use the standard ",(0,a.kt)("inlineCode",{parentName:"p"},"@orbit/data")," query builder as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// Find a single record by identity\nmemory.query(q => q.findRecord({ type: "planet", id: "earth" }));\n\n// Find all records by type\nmemory.query(q => q.findRecords("planet"));\n\n// Find a related record in a to-one relationship\nmemory.query(q => q.findRelatedRecord({ type: "moon", id: "io" }, "planet"));\n\n// Find related records in a to-many relationship\nmemory.query(q =>\n  q.findRelatedRecords({ type: "planet", id: "earth" }, "moons")\n);\n')),(0,a.kt)("p",null,"The base ",(0,a.kt)("inlineCode",{parentName:"p"},"findRecords")," query can be enhanced significantly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Sort by name\nmemory.query(q => q.findRecords('planet')\n                  .sort('name'));\n\n// Sort by classification, then name (descending)\nmemory.query(q => q.findRecords('planet')\n                  .sort('classification', '-name'));\n\n// Filter by a single attribute\nmemory.query(q => q.findRecords('planet')\n                  .filter({ attribute: 'classification', value: 'terrestrial' });\n\n// Filter by multiple attributes\nmemory.query(q => q.findRecords('planet')\n                  .filter({ attribute: 'classification', value: 'terrestrial' },\n                          { attribute: 'mass', op: 'gt', value: 987654321 });\n\n// Filter by related records\nmemory.query(q => q.findRecords('moons')\n                  .filter({ relation: 'planet', record: { type: 'planet', id: 'earth' }});\n\n// Filter by multiple related records\nmemory.query(q => q.findRecords('moons')\n                  .filter({ relation: 'planet', records: [{ type: 'planet', id: 'earth' }, { type: 'planet', id: 'jupiter'}]});\n\n// Paginate by offset and limit\nmemory.query(q => q.findRecords('planet')\n                  .page({ offset: 0, limit: 10 }));\n\n// Combine filtering, sorting, and paginating\nmemory.query(q => q.findRecords('planet')\n                  .filter({ attribute: 'classification', value: 'terrestrial' })\n                  .sort('name')\n                  .page({ offset: 0, limit: 10 }));\n")),(0,a.kt)("p",null,"The same parameters can be applied to ",(0,a.kt)("inlineCode",{parentName:"p"},"findRelatedRecords"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Sort by name\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                  .sort('name'));\n\n// Sort by classification, then name (descending)\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                  .sort('classification', '-name'));\n\n// Filter by a single attribute\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                  .filter({ attribute: 'classification', value: 'terrestrial' });\n\n// Filter by multiple attributes\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                  .filter({ attribute: 'classification', value: 'terrestrial' },\n                          { attribute: 'mass', op: 'gt', value: 987654321 });\n\n// Filter by related records\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'moons')\n                  .filter({ relation: 'planet', record: { type: 'planet', id: 'earth' }});\n\n// Filter by multiple related records\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'moons')\n                  .filter({ relation: 'planet', records: [{ type: 'planet', id: 'earth' }, { type: 'planet', id: 'jupiter'}]});\n\n// Paginate by offset and limit\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                  .page({ offset: 0, limit: 10 }));\n\n// Combine filtering, sorting, and paginating\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                  .filter({ attribute: 'classification', value: 'terrestrial' })\n                  .sort('name')\n                  .page({ offset: 0, limit: 10 }));\n")),(0,a.kt)("h4",{id:"findrelatedrecords-vs-findrecordsfilter-relation--record--"},"findRelatedRecords vs findRecords.filter({ relation: ..., record: ... })"),(0,a.kt)("p",null,"If you're using the default settings for JSONAPISource, ",(0,a.kt)("inlineCode",{parentName:"p"},"findRelatedRecords")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"findRecords.filter(...)")," produce very different URLs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const relatedRecordId = { type: 'planet', id: 'earth' };\n\n// This fetches from: /planets/earth/moons\nmemory.query(q => q.findRelatedRecords(relatedRecordId, 'moons'));\n\n// This fetches from: /moons?filter[planet]=earth\nmemory.query(q => q.findRecords('moon')).filter({ relation: 'planet', record: relatedRecordId });\n")),(0,a.kt)("h3",{id:"query-options"},"Query options"),(0,a.kt)("p",null,"Options can be added to queries to provide processing instructions to particular\nsources and to include metadata about queries."),(0,a.kt)("p",null,"For example, the following query is given a ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," and contains instructions\nfor the source named ",(0,a.kt)("inlineCode",{parentName:"p"},"remote"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'memory.query(q => q.findRecords("contact").sort("lastName", "firstName"), {\n  label: "Find all contacts",\n  sources: {\n    remote: {\n      include: ["phone-numbers"]\n    }\n  }\n});\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," can be useful for providing an understanding of actions that have been\nqueued for processing."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sources: { ${sourceName}: sourceSpecificOptions }")," pattern is used to pass\noptions that only a particular source will understand when processing a query.\nIn this instance, we're telling a source named ",(0,a.kt)("inlineCode",{parentName:"p"},"remote")," (let's say it's a\n",(0,a.kt)("inlineCode",{parentName:"p"},"JSONAPISource"),") to include ",(0,a.kt)("inlineCode",{parentName:"p"},"include=phone-numbers")," as a query param. This will\nresult in a server response that includes contacts together with their related\nphone numbers."),(0,a.kt)("h2",{id:"querying-a-memory-sources-cache"},"Querying a memory source's cache"),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"memory.query"),' is asynchronous and thus returns results wrapped in a\npromise. This may seem strange at first because the memory source\'s data is "in memory".\nIn fact, if you want to just "peek" into the contents of the memory source,\nyou can issue the same queries synchronously against the memory source\'s ',(0,a.kt)("inlineCode",{parentName:"p"},"Cache"),".\nFor example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// Results will be returned synchronously by querying the cache\nlet planets = memory.cache.query(q => q.findRecords("planet").sort("name"));\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By querying the cache instead of the memory source, you're not allowing other\nsources to participate in the fulfillment of the query. If you want to\ncoordinate queries across multiple sources, it's critical to make requests\ndirectly on the memory source.")))}u.isMDXComponent=!0}}]);