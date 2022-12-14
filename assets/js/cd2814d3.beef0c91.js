"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53808],{70167:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58181:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(60953),r=n(59005),i=(n(45721),n(70167)),o=["components"],l={tags:["forms","single select"],title:"Radio"},s=void 0,u={unversionedId:"design/components/radio",id:"design/components/radio",title:"Radio",description:"Description",source:"@site/docs/design/components/radio.md",sourceDirName:"design/components",slug:"/design/components/radio",permalink:"/docs/next/design/components/radio",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/design/components/radio.md",tags:[{label:"forms",permalink:"/docs/next/tags/forms"},{label:"single select",permalink:"/docs/next/tags/single-select"}],version:"current",lastUpdatedBy:"Brad Bice",frontMatter:{tags:["forms","single select"],title:"Radio"},sidebar:"design",previous:{title:"Progress",permalink:"/docs/next/design/components/progress"},next:{title:"Select",permalink:"/docs/next/design/components/select"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Dos and don&#39;ts",id:"dos-and-donts",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Interactions",id:"interactions",level:3},{value:"States",id:"states",level:3},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Content considerations",id:"content-considerations",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"A small list of single-select options."),(0,i.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Radio-group",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Label",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Optional flag"))),(0,i.kt)("li",{parentName:"ul"},"Radio(s)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Radio-target"),(0,i.kt)("li",{parentName:"ul"},"Label"))),(0,i.kt)("li",{parentName:"ul"},"Caption")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use Radio button groups when all options should be visible and exposed, or when the list of options does not exceed 5 items. Otherwise, consider use of a Select."),(0,i.kt)("li",{parentName:"ul"},"Radios are used as part of a radio-group, and have a group Label and optional caption assigned to them."),(0,i.kt)("li",{parentName:"ul"},"If necessary, use a Legend to provide further context to multiple groups of Radios or the choices available within a group."),(0,i.kt)("li",{parentName:"ul"},"One Radio input should always be selected by default. Select the safest, most secure and private option, then defaulting to the most likely or convenient, which will help expedite the user through their task."),(0,i.kt)("li",{parentName:"ul"},'Always provide a "None" option if an unselected state is required.'),(0,i.kt)("li",{parentName:"ul"},"Labels always trail the Radio-target.")),(0,i.kt)("h3",{id:"dos-and-donts"},"Dos and don'ts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do submit choices made in a Radio group with a button, either exclusively or as part of a larger form."),(0,i.kt)("li",{parentName:"ul"},"Do not use Radios to navigate a user to another part of the experience."),(0,i.kt)("li",{parentName:"ul"},"Do always provide an accompanying label, and in most cases, accompanying caption as well."),(0,i.kt)("li",{parentName:"ul"},"Do always stack Radios in a group to provide better scannability for the user."),(0,i.kt)("li",{parentName:"ul"},"Do not use Radios as UI for showing or hiding content. Instead consider using a Switch or other control.")),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Consider offering a default, neutral selection such as "None" or "Keep private", especially when dealing with a user\'s personal data.'),(0,i.kt)("li",{parentName:"ul"},"List options in a logical order:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"most likely to least likely to be selected"),(0,i.kt)("li",{parentName:"ul"},"simplest to most complex operation"),(0,i.kt)("li",{parentName:"ul"},"least to most risk"),(0,i.kt)("li",{parentName:"ul"},"Avoid alphabetizing options as this is not localizable.")))),(0,i.kt)("h3",{id:"interactions"},"Interactions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default"),(0,i.kt)("li",{parentName:"ul"},"Checked"),(0,i.kt)("li",{parentName:"ul"},"Optional")),(0,i.kt)("h3",{id:"states"},"States"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default"),(0,i.kt)("li",{parentName:"ul"},"Hover"),(0,i.kt)("li",{parentName:"ul"},"Focus"),(0,i.kt)("li",{parentName:"ul"},"Disabled"),(0,i.kt)("li",{parentName:"ul"},"Invalid")),(0,i.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,i.kt)("h3",{id:"microcopy"},"Microcopy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Labels for Radios use sentence case.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Exceptions include acronyms (all capitals), proper nouns, Pluralsight product names or site sections (title-case)."))),(0,i.kt)("li",{parentName:"ul"},"Do not end Labels in punctuation unless you are using a full sentence."),(0,i.kt)("li",{parentName:"ul"},'When using to confirm user consent, start the label with "I", e.g. "I wish to receive my updates via email".')),(0,i.kt)("h3",{id:"content-considerations"},"Content considerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Radio labels should be clear and concise. If a full sentence is needed, keep it short (max 15 words, 65 characters).")))}m.isMDXComponent=!0}}]);