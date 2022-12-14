"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57584],{70167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7333:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(60953),a=n(59005),i=(n(45721),n(70167)),r=["components"],l={tags:["Dialog"],title:"Modal"},s=void 0,c={unversionedId:"design/components/modal",id:"version-0.3.1-beta/design/components/modal",title:"Modal",description:"Description",source:"@site/versioned_docs/version-0.3.1-beta/design/components/modal.md",sourceDirName:"design/components",slug:"/design/components/modal",permalink:"/docs/design/components/modal",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.3.1-beta/design/components/modal.md",tags:[{label:"Dialog",permalink:"/docs/tags/dialog"}],version:"0.3.1-beta",lastUpdatedBy:"Brad Bice",frontMatter:{tags:["Dialog"],title:"Modal"},sidebar:"design",previous:{title:"Menu",permalink:"/docs/design/components/menu"},next:{title:"Pagination",permalink:"/docs/design/components/pagination"}},u={},d=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Dos and Don&#39;ts",id:"dos-and-donts",level:3},{value:"Specifications",id:"specifications",level:3},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Content considerations",id:"content-considerations",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"Behavior",id:"behavior",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"A disruptive overlay requiring users to take an action before proceeding."),(0,i.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Container",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Close button"),(0,i.kt)("li",{parentName:"ul"},"Header",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Heading"))),(0,i.kt)("li",{parentName:"ul"},"Slot (content)"))),(0,i.kt)("li",{parentName:"ul"},"Backdrop")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Modals interrupt the user experience, and either present additional information or demand an action, and thus should be used sparingly."),(0,i.kt)("li",{parentName:"ul"},"The best use of a modal is to focus a user on a particular task or action before moving them on to another step."),(0,i.kt)("li",{parentName:"ul"},"Modals should only be used for focused actions or temporary or supplementary information. Because of the extra action needed to open Modals, they should not be used for information or actions that should be part of the persistent UI."),(0,i.kt)("li",{parentName:"ul"},"Modals should close when users interact with the close button, the Esc key, interact outside of the Modal window, or choose an action within the Modal window."),(0,i.kt)("li",{parentName:"ul"},'In most cases, use only 2 buttons after content in a Modal: an action and a default button for "Cancel". In some cases a third action may be necessary, in which case a third style of button should be used to indicate hierarchy of actions.')),(0,i.kt)("h3",{id:"dos-and-donts"},"Dos and Don'ts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not use Modals for confirmation dialogs, use the ",(0,i.kt)("a",{parentName:"li",href:"/docs/design/components/confirm-dialog"},"Confirm Dialog")," for this. This also applies to any destructive (ie. data loss) confirmation actions."),(0,i.kt)("li",{parentName:"ul"},"Do not use Modals for prompting the user to input data, use Prompt Dialog for this."),(0,i.kt)("li",{parentName:"ul"},"Do use Modal for any custom content that helps direct the user on a path or helps to inform the user."),(0,i.kt)("li",{parentName:"ul"},"Do not use Modals for complex or large amounts of content, such as complex forms, multi-step processes, or entire page experiences.")),(0,i.kt)("h3",{id:"specifications"},"Specifications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Maximum width: 600px"),(0,i.kt)("li",{parentName:"ul"},"Minimum width: 320px"),(0,i.kt)("li",{parentName:"ul"},"Maximum height: 80% of viewport. (Content exceeding this will introduce a vertical scrollbar. It is recommended to avoid this scenario whenever possible.)"),(0,i.kt)("li",{parentName:"ul"},"Backdrop opacity: 65% black (dark theme), 65% white (light theme)"),(0,i.kt)("li",{parentName:"ul"},"Modal windows open horizontally centered and 60px from the top of the viewport.")),(0,i.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,i.kt)("h3",{id:"microcopy"},"Microcopy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use sentence case for the heading text.")),(0,i.kt)("h3",{id:"content-considerations"},"Content considerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure the heading adequately explains the function and purpose of the modal content.")),(0,i.kt)("h2",{id:"accessibility"},"Accessibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A title for the modal window must be supplied to engineers, even if no title appears visually.")),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Backdrop",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"All modals make use of a backdrop to obscure content behind the modal window, preventing interactions outside of the Modal and helping to focus the user's attention.")))))}m.isMDXComponent=!0}}]);