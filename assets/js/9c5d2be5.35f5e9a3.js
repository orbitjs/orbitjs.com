(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[2655],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4988:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o=["components"],l={title:"Querying data"},s=void 0,p={unversionedId:"querying-data",id:"querying-data",isDocsHomePage:!1,title:"Querying data",description:"The contents of a source can be interrogated using a Query. Orbit comes with a",source:"@site/docs/querying-data.md",sourceDirName:".",slug:"/querying-data",permalink:"/docs/next/querying-data",editUrl:"https://github.com/orbitjs/orbit/edit/main/website/docs/querying-data.md",version:"current",frontMatter:{title:"Querying data"},sidebar:"docs",previous:{title:"Updating data",permalink:"/docs/next/updating-data"},next:{title:"Task processing",permalink:"/docs/next/task-processing"}},d=[{value:"Query expressions",id:"query-expressions",children:[]},{value:"Queries",id:"queries",children:[{value:"Standard queries",id:"standard-queries",children:[]}]},{value:"Filtering",id:"filtering",children:[{value:"Comparison operators for filtering",id:"comparison-operators-for-filtering",children:[]},{value:"Query options",id:"query-options",children:[]}]},{value:"Querying a memory source&#39;s cache",id:"querying-a-memory-sources-cache",children:[{value:"LiveQuery",id:"livequery",children:[]}]}],u={toc:d};function c(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The contents of a source can be interrogated using a ",(0,a.kt)("inlineCode",{parentName:"p"},"Query"),". Orbit comes with a\nstandard set of query expressions for finding records and related records. These\nexpressions can be paired with refinements (e.g. filters, sort order, etc.)."),(0,a.kt)("p",null,"Custom query expressions can also be developed, as long as all the sources\nparticipating can understand them."),(0,a.kt)("h2",{id:"query-expressions"},"Query expressions"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryExpression")," interface requires one member:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"op")," - a string identifying the type of query operation")),(0,a.kt)("p",null,"The other members of a ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryExpression")," are specific to the ",(0,a.kt)("inlineCode",{parentName:"p"},"op"),"."),(0,a.kt)("p",null,"The following standard query expressions are defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"@orbit/data"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface QueryExpression {\n  op: string;\n}\n\ninterface FindRecord extends QueryExpression {\n  op: "findRecord";\n  record: RecordIdentity;\n}\n\ninterface FindRelatedRecord extends QueryExpression {\n  op: "findRelatedRecord";\n  record: RecordIdentity;\n  relationship: string;\n}\n\ninterface FindRelatedRecords extends QueryExpression {\n  op: "findRelatedRecords";\n  record: RecordIdentity;\n  relationship: string;\n  sort?: SortSpecifier[];\n  filter?: FilterSpecifier[];\n  page?: PageSpecifier;\n}\n\ninterface FindRecords extends QueryExpression {\n  op: "findRecords";\n  type?: string;\n  sort?: SortSpecifier[];\n  filter?: FilterSpecifier[];\n  page?: PageSpecifier;\n}\n')),(0,a.kt)("p",null,"Supporting interfaces include:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export type SortOrder = "ascending" | "descending";\n\nexport interface SortSpecifier {\n  kind: string;\n  order: SortOrder;\n}\n\nexport interface AttributeSortSpecifier extends SortSpecifier {\n  kind: "attribute";\n  attribute: string;\n}\n\nexport type ComparisonOperator = "equal" | "gt" | "lt" | "gte" | "lte" | "some" | "all" | "none";\n\nexport interface FilterSpecifier {\n  op: ComparisonOperator;\n  kind: string;\n}\n\nexport interface AttributeFilterSpecifier extends FilterSpecifier {\n  kind: "attribute";\n  attribute: string;\n  value: any;\n}\n\nexport interface PageSpecifier {\n  kind: string;\n}\n\nexport interface OffsetLimitPageSpecifier extends PageSpecifier {\n  kind: "offsetLimit";\n  offset?: number;\n  limit?: number;\n}\n')),(0,a.kt)("h2",{id:"queries"},"Queries"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Query")," interface has the following members:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," - a string that uniquely identifies the query"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expressions")," - an array of ",(0,a.kt)("inlineCode",{parentName:"li"},"QueryExpression")," objects"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - an optional object that represents options that can influence how\na query is processed")),(0,a.kt)("p",null,'Although queries can be created "manually", you\'ll probably find it easier\nto use a builder function that returns a query.'),(0,a.kt)("p",null,"To use a query builder, pass a function into a source's method that expects\na query, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pull"),". A ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," that's compatible\nwith the source should be applied as an argument. You can then use this builder\nto create query expressions."),(0,a.kt)("h3",{id:"standard-queries"},"Standard queries"),(0,a.kt)("p",null,"You can use the standard ",(0,a.kt)("inlineCode",{parentName:"p"},"@orbit/data")," query builder as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// Find a single record by identity\nmemory.query(q => q.findRecord({ type: "planet", id: "earth" }));\n\n// Find all records by type\nmemory.query(q => q.findRecords("planet"));\n\n// Find a related record in a to-one relationship\nmemory.query(q => q.findRelatedRecord({ type: "moon", id: "io" }, "planet"));\n\n// Find related records in a to-many relationship\nmemory.query(q =>\n  q.findRelatedRecords({ type: "planet", id: "earth" }, "moons")\n);\n')),(0,a.kt)("p",null,"The base ",(0,a.kt)("inlineCode",{parentName:"p"},"findRecords")," query can be enhanced significantly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Sort by name\nmemory.query(q => q.findRecords('planet')\n                  .sort('name'));\n\n// Sort by classification, then name (descending)\nmemory.query(q => q.findRecords('planet')\n                  .sort('classification', '-name'));\n\n// Filter by a single attribute\nmemory.query(q => q.findRecords('planet')\n                  .filter({ attribute: 'classification', value: 'terrestrial' });\n\n// Filter by multiple attributes\nmemory.query(q => q.findRecords('planet')\n                  .filter({ attribute: 'classification', value: 'terrestrial' },\n                          { attribute: 'mass', op: 'gt', value: 987654321 });\n\n// Filter by related records\nmemory.query(q => q.findRecords('moons')\n                  .filter({ relation: 'planet', record: { type: 'planet', id: 'earth' }});\n\n// Filter by multiple related records\nmemory.query(q => q.findRecords('moons')\n                  .filter({ relation: 'planet', records: [{ type: 'planet', id: 'earth' }, { type: 'planet', id: 'jupiter'}]});\n\n// Paginate by offset and limit\nmemory.query(q => q.findRecords('planet')\n                  .page({ offset: 0, limit: 10 }));\n\n// Combine filtering, sorting, and paginating\nmemory.query(q => q.findRecords('planet')\n                  .filter({ attribute: 'classification', value: 'terrestrial' })\n                  .sort('name')\n                  .page({ offset: 0, limit: 10 }));\n")),(0,a.kt)("p",null,"The same parameters can be applied to ",(0,a.kt)("inlineCode",{parentName:"p"},"findRelatedRecords"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Sort by name\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                  .sort('name'));\n\n// Sort by classification, then name (descending)\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                  .sort('classification', '-name'));\n\n// Filter by a single attribute\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                  .filter({ attribute: 'classification', value: 'terrestrial' });\n\n// Filter by multiple attributes\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                  .filter({ attribute: 'classification', value: 'terrestrial' },\n                          { attribute: 'mass', op: 'gt', value: 987654321 });\n\n// Filter by related records\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'moons')\n                  .filter({ relation: 'planet', record: { type: 'planet', id: 'earth' }});\n\n// Filter by multiple related records\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'moons')\n                  .filter({ relation: 'planet', records: [{ type: 'planet', id: 'earth' }, { type: 'planet', id: 'jupiter'}]});\n\n// Paginate by offset and limit\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                  .page({ offset: 0, limit: 10 }));\n\n// Combine filtering, sorting, and paginating\nmemory.query(q => q.findRelatedRecords({ id: 'solar', type: 'planetarySystem' }, 'planets')\n                  .filter({ attribute: 'classification', value: 'terrestrial' })\n                  .sort('name')\n                  .page({ offset: 0, limit: 10 }));\n")),(0,a.kt)("h2",{id:"filtering"},"Filtering"),(0,a.kt)("p",null,"As shown in some of the previous examples, you can filter over the records that are found by a ",(0,a.kt)("inlineCode",{parentName:"p"},"findRecords")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"findRelatedRecords")," query. Filtering is done building a boolean expression and only retrieving the records for which this expression returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". This boolean expression, just like it is with regular javascript, is built out of three parts."),(0,a.kt)("p",null,"Javascript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," const denserThanEarth = planets.filter((planet) => {\n    return planet.density    >     earth.density\n }) //    |      1       |   2    |      3      |\n\n")),(0,a.kt)("p",null,"Filter expression:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const denserThanEarth = orbit.cache.query((q) => {\n  return q.findRecords('planets')\n    .filter({ attribute: 'radius', op: 'lt', value: earth.density })\n}) //       |         1          |    2    |          3           |\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"the left hand value:\nThis is a reference to the property of the records that you want to compare. This can either be a ",(0,a.kt)("inlineCode",{parentName:"p"},"relationship")," or an ",(0,a.kt)("inlineCode",{parentName:"p"},"attribute"),". During evaluation, the reference will be replaced by the actual values of the records.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"the comparison operation\nThe operation determines the way the two values will be compared.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"the right hand value:\nThis is a value that will remain constant for the entirety of the filter. This value determines, given the operation, which records will be returned and which will not."))),(0,a.kt)("h3",{id:"comparison-operators-for-filtering"},"Comparison operators for filtering"),(0,a.kt)("p",null,"There are two different kinds of filtering. Filtering on attribute values and filtering on relationship values.\nBoth have their own comparison operators."),(0,a.kt)("h4",{id:"attribute-filtering"},"Attribute filtering"),(0,a.kt)("p",null,"Attribute filtering looks like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const denserThanEarth = orbit.cache.query((q) => {\n  return q.findRecords('planets')\n    .filter({ attribute: 'radius', op: 'lt', value: earth.density })\n})\n")),(0,a.kt)("p",null,"For attribute filtering, the following comparison operators are available."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"equal"),": alias for the ",(0,a.kt)("inlineCode",{parentName:"li"},"===")," operator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gt"),": alias for the ",(0,a.kt)("inlineCode",{parentName:"li"},">")," operator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lt"),": alias for the ",(0,a.kt)("inlineCode",{parentName:"li"},"<")," operator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gte"),": alias for the ",(0,a.kt)("inlineCode",{parentName:"li"},">=")," operator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lte"),": alias for the ",(0,a.kt)("inlineCode",{parentName:"li"},"<=")," operator.")),(0,a.kt)("h4",{id:"relationship-filtering"},"Relationship filtering"),(0,a.kt)("p",null,"Relationship filtering has two types:"),(0,a.kt)("p",null,"Filtering on a ",(0,a.kt)("inlineCode",{parentName:"p"},"hasOne")," relationship:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const moonsOfJupiter = orbit.cache.query((q) => {\n  return q.findRecords('moon')\n    .filter({ relationship: 'planet', op: 'equal', record: { type: 'planet', id: 'jupiter' } })\n})\n")),(0,a.kt)("p",null,"Filtering on a ",(0,a.kt)("inlineCode",{parentName:"p"},"hasMany")," relationship:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const theSolarSystem = orbit.cache.query((q) => {\n  return q.findRecords('planetarySystem')\n    .filter({\n      relationship: 'planets',\n      op: 'some',\n      records: [{ type: 'planet', id: 'earth' }]\n     })\n})\n")),(0,a.kt)("p",null,"Filtering on a ",(0,a.kt)("inlineCode",{parentName:"p"},"hasOne")," relationship has different comparison operations available than filtering on a ",(0,a.kt)("inlineCode",{parentName:"p"},"hasMany")," relationship."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hasOne")," operations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"equal"),": returns a record if the left hand relationship is equal to the right hand relationship.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hasMany")," operations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"equal"),": returns a record if the left hand relationsips are identical to the right hand relationships."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"all"),": returns a record if the left hand relationships contain all the right hand relationships."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"some"),": returns a record if the left hand relationships contain one or more of the right hand relationships."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"none"),": returns a record if none of the left hand relationships are present in the right hand relationships.")),(0,a.kt)("h4",{id:"findrelatedrecords-vs-findrecordsfilter-relation--record--"},"findRelatedRecords vs findRecords.filter({ relation: ..., record: ... })"),(0,a.kt)("p",null,"If you're using the default settings for JSONAPISource, ",(0,a.kt)("inlineCode",{parentName:"p"},"findRelatedRecords")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"findRecords.filter(...)")," produce very different URLs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const relatedRecordId = { type: 'planet', id: 'earth' };\n\n// This fetches from: /planets/earth/moons\nmemory.query(q => q.findRelatedRecords(relatedRecordId, 'moons'));\n\n// This fetches from: /moons?filter[planet]=earth\nmemory.query(q => q.findRecords('moon')).filter({ relation: 'planet', record: relatedRecordId });\n")),(0,a.kt)("h3",{id:"query-options"},"Query options"),(0,a.kt)("p",null,"Options can be added to queries to provide processing instructions to particular\nsources and to include metadata about queries."),(0,a.kt)("p",null,"For example, the following query is given a ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," and contains instructions\nfor the source named ",(0,a.kt)("inlineCode",{parentName:"p"},"remote"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'memory.query(q => q.findRecords("contact").sort("lastName", "firstName"), {\n  label: "Find all contacts",\n  sources: {\n    remote: {\n      include: ["phone-numbers"]\n    }\n  }\n});\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," can be useful for providing an understanding of actions that have been\nqueued for processing."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sources: { ${sourceName}: sourceSpecificOptions }")," pattern is used to pass\noptions that only a particular source will understand when processing a query.\nIn this instance, we're telling a source named ",(0,a.kt)("inlineCode",{parentName:"p"},"remote")," (let's say it's a\n",(0,a.kt)("inlineCode",{parentName:"p"},"JSONAPISource"),") to include ",(0,a.kt)("inlineCode",{parentName:"p"},"include=phone-numbers")," as a query param. This will\nresult in a server response that includes contacts together with their related\nphone numbers."),(0,a.kt)("p",null,"It is possible to pass different options to each expression in the query."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'memory.query(q => [\n  q.findRecords("contact").options({ include: ["phone-numbers"] }),\n  q.findRecords("meeting").options({ include: ["location"] })\n]);\n')),(0,a.kt)("h2",{id:"querying-a-memory-sources-cache"},"Querying a memory source's cache"),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"memory.query"),' is asynchronous and thus returns results wrapped in a\npromise. This may seem strange at first because the memory source\'s data is "in memory".\nIn fact, if you want to just "peek" into the contents of the memory source,\nyou can issue the same queries synchronously against the memory source\'s ',(0,a.kt)("inlineCode",{parentName:"p"},"Cache"),".\nFor example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// Results will be returned synchronously by querying the cache\nlet planets = memory.cache.query(q => q.findRecords("planet").sort("name"));\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By querying the cache instead of the memory source, you're not allowing other\nsources to participate in the fulfillment of the query. If you want to\ncoordinate queries across multiple sources, it's critical to make requests\ndirectly on the memory source.")),(0,a.kt)("h3",{id:"livequery"},"LiveQuery"),(0,a.kt)("p",null,"On a memory source, you can subscribe to a ",(0,a.kt)("inlineCode",{parentName:"p"},"LiveQuery"),". For that you need to create\na ",(0,a.kt)("inlineCode",{parentName:"p"},"LiveQuery")," instance and then subscribe to changes. By default ",(0,a.kt)("inlineCode",{parentName:"p"},"LiveQuery")," will\nrun on memory cache ",(0,a.kt)("inlineCode",{parentName:"p"},"patch")," event with a debounce. Subscription callback will be\ncalled on every operation which is relevant to the query."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you use a pull based reactive system (for example Glimmer tracking) you can\nset debounceLiveQueries option to false on memory cache.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// Create a new LiveQuery instance\nlet planetsLiveQuery = memory.cache.liveQuery(q => q.findRecords("planet"));\n// Subscribe to LiveQuery changes\nlet unsubscribe = planetsLiveQuery.subscribe((update) => {\n  // Query for results when a change occure\n  update.query();\n});\n// Unsubscribe from the LiveQuery\nunsubscribe();\n')))}c.isMDXComponent=!0}}]);