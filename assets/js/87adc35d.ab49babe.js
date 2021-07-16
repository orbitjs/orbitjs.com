(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[4895],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(l,".").concat(k)]||d[k]||c[k]||s;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7998:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),i=["components"],o={title:"Task processing"},l=void 0,p={unversionedId:"task-processing",id:"version-0.16/task-processing",isDocsHomePage:!1,title:"Task processing",description:"Tasks and queues are primitives contained in @orbit/core that are useful for",source:"@site/versioned_docs/version-0.16/task-processing.md",sourceDirName:".",slug:"/task-processing",permalink:"/docs/task-processing",editUrl:"https://github.com/orbitjs/orbit/edit/main/website/versioned_docs/version-0.16/task-processing.md",version:"0.16",frontMatter:{title:"Task processing"},sidebar:"version-0.16/docsSidebar",previous:{title:"Querying data",permalink:"/docs/querying-data"},next:{title:"Data flows",permalink:"/docs/data-flows"}},u=[{value:"Tasks",id:"tasks",children:[]},{value:"Performers",id:"performers",children:[]},{value:"Task queues",id:"task-queues",children:[{value:"Task processing",id:"task-processing",children:[]},{value:"Task queues for sources",id:"task-queues-for-sources",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Tasks and queues are primitives contained in ",(0,s.kt)("inlineCode",{parentName:"p"},"@orbit/core")," that are useful for\nprocessing actions asynchronously and serially."),(0,s.kt)("p",null,"Although you'll typically work with tasks indirectly, understanding these\nconcepts can help you better troubleshoot and harden your Orbit applications."),(0,s.kt)("h2",{id:"tasks"},"Tasks"),(0,s.kt)("p",null,'Every action performed by sources, from updates to queries, is considered a\n"task" to be performed asynchronously.'),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Task")," interface is simply:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Task {\n  type: string;\n  id?: string;\n  data?: any;\n}\n")),(0,s.kt)("p",null,"A task's ",(0,s.kt)("inlineCode",{parentName:"p"},"type"),", such as ",(0,s.kt)("inlineCode",{parentName:"p"},'"query"')," or ",(0,s.kt)("inlineCode",{parentName:"p"},'"update"'),", signals how that task should\nbe performed. An ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," is assigned to uniquely identify the task. And ",(0,s.kt)("inlineCode",{parentName:"p"},"data"),"\nshould contain the type-specific data needed to perform the task, such as an\nobject that conforms with the ",(0,s.kt)("inlineCode",{parentName:"p"},"Query")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Transform")," interfaces."),(0,s.kt)("h2",{id:"performers"},"Performers"),(0,s.kt)("p",null,"Tasks are performed asynchronously by a ",(0,s.kt)("inlineCode",{parentName:"p"},"Performer"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface Performer {\n  perform(task: Task): Promise<any>;\n}\n")),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"@orbit/data"),", every ",(0,s.kt)("inlineCode",{parentName:"p"},"Source")," implements the ",(0,s.kt)("inlineCode",{parentName:"p"},"Performer")," interface."),(0,s.kt)("h2",{id:"task-queues"},"Task queues"),(0,s.kt)("p",null,"Tasks can be added to queues, which act as FIFO stacks that perform each task\nserially and asynchronously."),(0,s.kt)("p",null,"Task queues are associated with a single ",(0,s.kt)("inlineCode",{parentName:"p"},"performer"),", such as a ",(0,s.kt)("inlineCode",{parentName:"p"},"Source"),", that\nwill perform each task. A ",(0,s.kt)("inlineCode",{parentName:"p"},"performer")," must be assigned when instantiating a\n",(0,s.kt)("inlineCode",{parentName:"p"},"TaskQueue"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const queue = new TaskQueue(source); // `source` implements `Performer`\n")),(0,s.kt)("p",null,"By default, task queues automatically process any tasks that are added to them\nand will continue until either all tasks have been performed or a problem has\nbeen encountered. For finer control over processing, it's possible to\ninstantiate a queue that will only process tasks explicitly:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const queue = new TaskQueue(source, { autoProcess: false });\n")),(0,s.kt)("p",null,"Tasks are normally added to the end of a queue via the ",(0,s.kt)("inlineCode",{parentName:"p"},"push")," method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'queue.push({\n  type: "query",\n  data: { expression: { op: "findRecords", type: "planet" } }\n});\n')),(0,s.kt)("h3",{id:"task-processing"},"Task processing"),(0,s.kt)("p",null,"Depending upon whether a queue is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"autoProcess"),", task processing will\nstart either immediately or after the ",(0,s.kt)("inlineCode",{parentName:"p"},"process")," method has been called."),(0,s.kt)("p",null,"Queues emit the following events when processing tasks:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"change")," - whenever a task has been added or removed to a queue")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"beforeTask")," - before processing of a task begins")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"task")," - after a task has been processed successfully")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"fail")," - when a task has failed to process")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"complete")," - when all tasks have been processed"))),(0,s.kt)("p",null,"As each task is processed successfully, it will be removed from the queue."),(0,s.kt)("p",null,"If processing fails, the queue will emit the ",(0,s.kt)("inlineCode",{parentName:"p"},"fail")," event and processing will\nstop. At that point, you have several options:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"retry()")," will retry the task that failed.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"skip()")," will cancel and discard the current task and proceed to\nprocess the next task.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"clear()")," will cancel the current task and completely clear the queue.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"shift()")," will cancel the current task and remove it, but will not continue\nprocessing.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"unshift(newTask)")," will cancel the current task and insert a new task in front\nof it at the beginning of the queue."))),(0,s.kt)("p",null,"These options provide fairly complete control over task processing, which can\nprove useful when handling exceptions, debugging, and testing."),(0,s.kt)("h3",{id:"task-queues-for-sources"},"Task queues for sources"),(0,s.kt)("p",null,"Every ",(0,s.kt)("inlineCode",{parentName:"p"},"Source")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"@orbit/data")," maintains two task queues:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"A ",(0,s.kt)("inlineCode",{parentName:"p"},"requestQueue")," for processing requests, such as updates and queries.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"A ",(0,s.kt)("inlineCode",{parentName:"p"},"syncQueue")," for synchronizing changes between sources."))),(0,s.kt)("p",null,'These queues are discussed in more detail as part of the guide on "data flows".'))}d.isMDXComponent=!0}}]);