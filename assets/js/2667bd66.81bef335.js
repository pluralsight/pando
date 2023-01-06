"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65562],{70167:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(45721);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11910:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(60953),i=n(59005),o=(n(45721),n(70167)),r=["components"],l={tags:["forms","single select"],title:"Radio"},s=void 0,u={unversionedId:"design/components/radio",id:"version-0.3.1-beta/design/components/radio",title:"Radio",description:"Description",source:"@site/versioned_docs/version-0.3.1-beta/design/components/radio.md",sourceDirName:"design/components",slug:"/design/components/radio",permalink:"/docs/design/components/radio",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.3.1-beta/design/components/radio.md",tags:[{label:"forms",permalink:"/docs/tags/forms"},{label:"single select",permalink:"/docs/tags/single-select"}],version:"0.3.1-beta",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["forms","single select"],title:"Radio"},sidebar:"design",previous:{title:"Progress",permalink:"/docs/design/components/progress"},next:{title:"Select",permalink:"/docs/design/components/select"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Dos and don&#39;ts",id:"dos-and-donts",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Interactions",id:"interactions",level:3},{value:"States",id:"states",level:3},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Content considerations",id:"content-considerations",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"A small list of single-select options."),(0,o.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Radio-group",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Label",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Optional flag"))),(0,o.kt)("li",{parentName:"ul"},"Radio(s)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Radio-target"),(0,o.kt)("li",{parentName:"ul"},"Label"))),(0,o.kt)("li",{parentName:"ul"},"Caption")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use Radio button groups when all options should be visible and exposed, or when the list of options does not exceed 5 items. Otherwise, consider use of a Select."),(0,o.kt)("li",{parentName:"ul"},"Radios are used as part of a radio-group, and have a group Label and optional caption assigned to them."),(0,o.kt)("li",{parentName:"ul"},"If necessary, use a Legend to provide further context to multiple groups of Radios or the choices available within a group."),(0,o.kt)("li",{parentName:"ul"},"One Radio input should always be selected by default. Select the safest, most secure and private option, then defaulting to the most likely or convenient, which will help expedite the user through their task."),(0,o.kt)("li",{parentName:"ul"},'Always provide a "None" option if an unselected state is required.'),(0,o.kt)("li",{parentName:"ul"},"Labels always trail the Radio-target.")),(0,o.kt)("h3",{id:"dos-and-donts"},"Dos and don'ts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do submit choices made in a Radio group with a button, either exclusively or as part of a larger form."),(0,o.kt)("li",{parentName:"ul"},"Do not use Radios to navigate a user to another part of the experience."),(0,o.kt)("li",{parentName:"ul"},"Do always provide an accompanying label, and in most cases, accompanying caption as well."),(0,o.kt)("li",{parentName:"ul"},"Do always stack Radios in a group to provide better scannability for the user."),(0,o.kt)("li",{parentName:"ul"},"Do not use Radios as UI for showing or hiding content. Instead consider using a Switch or other control.")),(0,o.kt)("h3",{id:"best-practices"},"Best practices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Consider offering a default, neutral selection such as "None" or "Keep private", especially when dealing with a user\'s personal data.'),(0,o.kt)("li",{parentName:"ul"},"List options in a logical order:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"most likely to least likely to be selected"),(0,o.kt)("li",{parentName:"ul"},"simplest to most complex operation"),(0,o.kt)("li",{parentName:"ul"},"least to most risk"),(0,o.kt)("li",{parentName:"ul"},"Avoid alphabetizing options as this is not localizable.")))),(0,o.kt)("h3",{id:"interactions"},"Interactions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default"),(0,o.kt)("li",{parentName:"ul"},"Checked"),(0,o.kt)("li",{parentName:"ul"},"Optional")),(0,o.kt)("h3",{id:"states"},"States"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default"),(0,o.kt)("li",{parentName:"ul"},"Hover"),(0,o.kt)("li",{parentName:"ul"},"Focus"),(0,o.kt)("li",{parentName:"ul"},"Disabled"),(0,o.kt)("li",{parentName:"ul"},"Invalid")),(0,o.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,o.kt)("h3",{id:"microcopy"},"Microcopy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Labels for Radios use sentence case.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Exceptions include acronyms (all capitals), proper nouns, Pluralsight product names or site sections (title-case)."))),(0,o.kt)("li",{parentName:"ul"},"Do not end Labels in punctuation unless you are using a full sentence."),(0,o.kt)("li",{parentName:"ul"},'When using to confirm user consent, start the label with "I", e.g. "I wish to receive my updates via email".')),(0,o.kt)("h3",{id:"content-considerations"},"Content considerations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Radio labels should be clear and concise. If a full sentence is needed, keep it short (max 15 words, 65 characters).")))}m.isMDXComponent=!0}}]);