"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70382],{70167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(45721);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14115:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return c}});var a=n(81648),i=(n(45721),n(70167));const o={tags:["design","toggle","form","control"],title:"Switch"},l=void 0,r={unversionedId:"design/components/switch",id:"version-0.3.1-beta/design/components/switch",title:"Switch",description:"Description",source:"@site/versioned_docs/version-0.3.1-beta/design/components/switch.md",sourceDirName:"design/components",slug:"/design/components/switch",permalink:"/docs/0.3.1-beta/design/components/switch",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.3.1-beta/design/components/switch.md",tags:[{label:"design",permalink:"/docs/0.3.1-beta/tags/design"},{label:"toggle",permalink:"/docs/0.3.1-beta/tags/toggle"},{label:"form",permalink:"/docs/0.3.1-beta/tags/form"},{label:"control",permalink:"/docs/0.3.1-beta/tags/control"}],version:"0.3.1-beta",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["design","toggle","form","control"],title:"Switch"},sidebar:"design",previous:{title:"Select",permalink:"/docs/0.3.1-beta/design/components/select"},next:{title:"Table",permalink:"/docs/0.3.1-beta/design/components/table"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Size",id:"size",level:3},{value:"Interactions",id:"interactions",level:3},{value:"States",id:"states",level:3},{value:"Dos and don&#39;ts",id:"dos-and-donts",level:3},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Content considerations",id:"content-considerations",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"Behavior",id:"behavior",level:2},{value:"Animation",id:"animation",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Choosing between enabled and disabled states."),(0,i.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Container",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Label"),(0,i.kt)("li",{parentName:"ul"},"Switch",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Handle"),(0,i.kt)("li",{parentName:"ul"},"Icon indicator")))))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use a Switch to turn something on or off instantly, such as changing permissions data or a change in the UI."),(0,i.kt)("li",{parentName:"ul"},"A Switch can be checked or unchecked by default, depending on the context of where and how it is being used."),(0,i.kt)("li",{parentName:"ul"},"Labels can be placed to the leading or trailing side of the Switch control.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Place labels on the trailing edge when the control is placed on the leading edge of a form or container."),(0,i.kt)("li",{parentName:"ul"},"Place labels on the leading side when the control is placed on the trailing edge of a row.")))),(0,i.kt)("h3",{id:"size"},"Size"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"L",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Default size, use in most cases as part of a page form or settings screen."))),(0,i.kt)("li",{parentName:"ul"},"S",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use when placed within another widget or control, or when space is at a premium.")))),(0,i.kt)("h3",{id:"interactions"},"Interactions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Checked"),(0,i.kt)("li",{parentName:"ul"},"Unchecked")),(0,i.kt)("h3",{id:"states"},"States"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default"),(0,i.kt)("li",{parentName:"ul"},"Hover"),(0,i.kt)("li",{parentName:"ul"},"Focus"),(0,i.kt)("li",{parentName:"ul"},"Disabled"),(0,i.kt)("li",{parentName:"ul"},"Invalid")),(0,i.kt)("h3",{id:"dos-and-donts"},"Dos and don'ts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not use a Switch when requiring user action consent. Instead, use a Checkbox."),(0,i.kt)("li",{parentName:"ul"},"Do not use a Switch when choosing from multiple, related options. Instead, use a Checkbox-group."),(0,i.kt)("li",{parentName:"ul"},"Do not change the label based on the state of the Switch.")),(0,i.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,i.kt)("h3",{id:"microcopy"},"Microcopy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use sentence case for the Switch label."),(0,i.kt)("li",{parentName:"ul"},"Do not use punctuation, unless the label is a complete sentence.")),(0,i.kt)("h3",{id:"content-considerations"},"Content considerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The label should be clear and concise, and should explain the functionality associated with the control."),(0,i.kt)("li",{parentName:"ul"},"The label should not change based on the state of the Switch.")),(0,i.kt)("h2",{id:"accessibility"},"Accessibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Display an icon within the switch to help indicate state to the user without relying on color or position, both of which could be unreliable universally.")),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("h3",{id:"animation"},"Animation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The handle within the switch UI should animate between a checked to unchecked view, and vice-versa."),(0,i.kt)("li",{parentName:"ul"},"If icons are present, these should fade in and out on each side of the handle accordingly."),(0,i.kt)("li",{parentName:"ul"},"The handles will snap to one side or the other, with no intermittent state.")))}d.isMDXComponent=!0}}]);