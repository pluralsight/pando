"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54527],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73280:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(81648),r=(n(45721),n(70167));const i={tags:["design","next","previous","more"],title:"Pagination"},o=void 0,l={unversionedId:"design/components/pagination",id:"version-0.4.0-rc/design/components/pagination",title:"Pagination",description:"Description",source:"@site/versioned_docs/version-0.4.0-rc/design/components/pagination.md",sourceDirName:"design/components",slug:"/design/components/pagination",permalink:"/docs/design/components/pagination",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.0-rc/design/components/pagination.md",tags:[{label:"design",permalink:"/docs/tags/design"},{label:"next",permalink:"/docs/tags/next"},{label:"previous",permalink:"/docs/tags/previous"},{label:"more",permalink:"/docs/tags/more"}],version:"0.4.0-rc",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["design","next","previous","more"],title:"Pagination"},sidebar:"design",previous:{title:"Modal",permalink:"/docs/design/components/modal"},next:{title:"Popover",permalink:"/docs/design/components/popover"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Dos and don&#39;ts",id:"dos-and-donts",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Accessibility",id:"accessibility",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Navigate through large amounts of content."),(0,r.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,r.kt)("p",null,"(Basic)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Container",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Button (Show more)")))),(0,r.kt)("p",null,"Two Button"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Container",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Button (Previous)"),(0,r.kt)("li",{parentName:"ul"},"Button (Next)")))),(0,r.kt)("p",null,"(Pagination bar)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Container",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Count"),(0,r.kt)("li",{parentName:"ul"},"Select"),(0,r.kt)("li",{parentName:"ul"},"Buttons",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Previous"),(0,r.kt)("li",{parentName:"ul"},"Next")))))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Basic"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to show more results on the same page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Two button"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to move between pages of content."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bar"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to show a number of rows of the table at a time."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A general use of Pagination is when the number of returned results is greater than 25 items.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pagination should be placed at the bottom of the page, directly below the last result in a list of content.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Pagination bar can be placed directly above and/or below tabular content.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Buttons"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Buttons advance or go back 1 page at a time."),(0,r.kt)("li",{parentName:"ul"},"The leading button will be disabled until a user navigates past the first page in the set."),(0,r.kt)("li",{parentName:"ul"},"Once at the last page in the set, the trailing button will be disabled.")))),(0,r.kt)("h3",{id:"dos-and-donts"},"Dos and don'ts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do not show the Pagination control if only 1 page (less than 25 results) is returned."),(0,r.kt)("li",{parentName:"ul"},"Do not use pagination patterns when utilizing lazy loading as the user scrolls.")),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pagination should navigate to the previous and next set of items in a content set."),(0,r.kt)("li",{parentName:"ul"},"When using the Pagination Bar type, match the range of pages displayed (1-25) to the amount selected in the Select control (25 items).")),(0,r.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,r.kt)("h3",{id:"microcopy"},"Microcopy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do not put a space within the number range of pages, according to our Grammar & Mechanics rules.")),(0,r.kt)("h2",{id:"accessibility"},"Accessibility"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The button components utilized within these patterns automatically handle all accessibility requirements.")))}c.isMDXComponent=!0}}]);