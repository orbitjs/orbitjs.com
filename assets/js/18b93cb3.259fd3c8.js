"use strict";(self.webpackChunkorbit_website=self.webpackChunkorbit_website||[]).push([[3042],{1248:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),l=n(7019),a=n(4996),s="versionsPage_1Phj",i="versions_bX0q",o=n(4908),c=function(e){var t=e.version,n="next"===t?"Main":t,l=e.currentVersion===t,s="next"===t,i=-1!==t.toUpperCase().indexOf("-RC"),c=o[0].toUpperCase().replace("-RC",""),u=r.createElement("a",{href:(0,a.Z)("docs/"+(l?"":t+"/")+"intro")},"Documentation"),m="https://github.com/orbitjs/orbit/releases",b="Changelog";s?(m="https://github.com/orbitjs/orbit/compare/release-"+c.replace(".","-")+"...main",b="Commits since "+c):i||(m="https://github.com/orbitjs/orbit/releases/tag/v"+t+".0");var E=r.createElement("a",{href:m},b);return r.createElement("tr",null,r.createElement("th",null,n),r.createElement("td",null,u),r.createElement("td",null,E))},u=function(){var e=o.length>0?o[0]:null,t=["next"].concat(o.filter((function(e){return-1!==e.indexOf("-RC")}))),n=o.filter((function(t){return-1===t.indexOf("-RC")&&t!==e}));return r.createElement(l.Z,{title:"Versions"},r.createElement("main",{className:s},r.createElement("h1",null,"Orbit.js versions"),r.createElement("h2",null,"Next version (Unreleased)"),r.createElement("table",{className:i},r.createElement("tbody",null,t.map((function(t){return r.createElement(c,{key:"version_"+t,version:t,currentVersion:e})})))),r.createElement("h2",null,"Latest version"),r.createElement("table",{className:i},r.createElement("tbody",null,r.createElement(c,{key:"version_"+e,version:e,currentVersion:e}))),r.createElement("h2",null,"Previous versions"),r.createElement("table",{className:i},r.createElement("tbody",null,n.map((function(t){return r.createElement(c,{key:"version_"+t,version:t,currentVersion:e})}))))))}},4908:function(e){e.exports=["0.16","0.15"]}}]);