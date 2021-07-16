(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[4195],{3667:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var n=a(7294),r=a(6010),i=a(6016),s=a(6742),l=a(2263),o="heroBanner_1ZBZ",c="heroLogo_17HU",m="heroTagline_17g8",u="buttons_irzW",d=a(2122),p="features_pzNA",g="featureImgContainer_YBZW",h=[{title:"Multiple Data Sources",src:"/img/tour/normalized-data.png",description:n.createElement(n.Fragment,null,n.createElement("p",null,"Your application may need to interact with data from a variety of sources: a REST server, a WebSocket stream, an IndexedDB backup, an in-memory source, etc."),n.createElement("p",null,"Orbit can coordinate data flows across any number of sources through a standard set of interfaces using normalized data structures."))},{title:"Uniform Data Access",src:"/img/tour/uniform-access.png",description:n.createElement(n.Fragment,null,n.createElement("p",null,"Because Orbit's sources all understand the same expressions for querying and mutating data, you can access data in the same way regardless of its origin."),n.createElement("p",null,'Orbit also provides an extensible set of serializers to "normalize" external data as well as validators to ensure its correctness.'))},{title:"Deterministic Change Tracking",src:"/img/tour/change-tracking.png",description:n.createElement(n.Fragment,null,n.createElement("p",null,"Data correctness is vital to user trust, so you need a deterministic approach to manage it."),n.createElement("p",null,'Orbit uses a Git-like approach to track changes across data sources. Changes are expressed as "transforms", which are similar to Git commits. Logs provide a per-source history. Like Git repos, sources can be diffed, forked, merged, and reset.'))},{title:"Optimistic / Pessimistic Requests",src:"/img/tour/connections.png",description:n.createElement(n.Fragment,null,n.createElement("p",null,"Not all data can be treated uniformly. Some data is transient, while other data can persist for the life of your app. Some changes should be made pessimistically and be confirmed by a remote server. Other changes can be made optimistically, cached locally, and pushed eventually."),n.createElement("p",null,"Orbit provides coordination strategies which can be customized to the needs of your application."))},{title:"Offline Support",src:"/img/tour/failasaur.svg",description:n.createElement(n.Fragment,null,n.createElement("p",null,"In an increasingly mobile world, it's ideal to keep applications available even when the Internet is not."),n.createElement("p",null,"Orbit provides the tools needed to build robust offline experiences. Backup your application's state, including data caches, logs, and queues, to browser storage. Query and change local data when offline, while queueing changes for synchronization when online again."))},{title:"Runs Everywhere",src:"/img/tour/browsers-and-node.png",description:n.createElement(n.Fragment,null,n.createElement("p",null,"Orbit can be run in modern browsers as well as in the Node.js runtime."),n.createElement("p",null,"Orbit is written in TypeScript. Its libraries are distributed on npm through the @orbit organization in both CJS and ESM formats."))}];function f(e){var t=e.src,a=e.title,i=e.description;return n.createElement("div",{className:(0,r.Z)("col col--4")},n.createElement("div",{className:g},n.createElement("img",{src:t,alt:a})),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",null,a),n.createElement("section",null,i)))}function E(){return n.createElement("section",{className:p},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},h.map((function(e,t){return n.createElement(f,(0,d.Z)({key:t},e))})))))}function b(){var e=(0,l.Z)().siteConfig;return n.createElement("header",{className:(0,r.Z)("hero hero--primary",o)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},n.createElement("img",{className:c,src:"/img/logo.png",alt:"Orbit.js"})),n.createElement("h2",{className:m},e.tagline),n.createElement("div",{className:u},n.createElement(s.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"GET STARTED"))))}function y(){var e=(0,l.Z)().siteConfig;return n.createElement(i.Z,{title:e.title+" - "+e.tagline,description:"A framework for orchestrating access, transformation, and synchronization between data sources."},n.createElement(b,null),n.createElement("main",null,n.createElement(E,null)))}}}]);