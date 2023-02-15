"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47278],{70167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var a=n(45721);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=i,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60496:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var a=n(81648),i=(n(45721),n(70167));const o={tags:["design","link","toggle","section"],title:"Tabs"},r=void 0,l={unversionedId:"design/components/tabs",id:"version-0.4.0-rc/design/components/tabs",title:"Tabs",description:"Description",source:"@site/versioned_docs/version-0.4.0-rc/design/components/tabs.md",sourceDirName:"design/components",slug:"/design/components/tabs",permalink:"/docs/design/components/tabs",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.0-rc/design/components/tabs.md",tags:[{label:"design",permalink:"/docs/tags/design"},{label:"link",permalink:"/docs/tags/link"},{label:"toggle",permalink:"/docs/tags/toggle"},{label:"section",permalink:"/docs/tags/section"}],version:"0.4.0-rc",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["design","link","toggle","section"],title:"Tabs"},sidebar:"design",previous:{title:"Table",permalink:"/docs/design/components/table"},next:{title:"Tag",permalink:"/docs/design/components/tag"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Specs/guidelines",id:"specsguidelines",level:3},{value:"Dos and don&#39;ts",id:"dos-and-donts",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Content Guidelines",id:"content-guidelines",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Content considerations",id:"content-considerations",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"Behavior",id:"behavior",level:2},{value:"Overflow",id:"overflow",level:3},{value:"Animation",id:"animation",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Used to alternate between content views within the same context."),(0,i.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tabs container",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tabs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Label"),(0,i.kt)("li",{parentName:"ul"},"Border")))))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use Tabs to switch between content blocks in one space, when space is limited."),(0,i.kt)("li",{parentName:"ul"},"One tab (in most cases the leading tab) should be selected by default."),(0,i.kt)("li",{parentName:"ul"},"Tabs should be arranged in a logical order, in context to what they are presenting."),(0,i.kt)("li",{parentName:"ul"},"At least two tabs are required to utilize this pattern.")),(0,i.kt)("h3",{id:"specsguidelines"},"Specs/guidelines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tab groups should expand to 100% width of their container."),(0,i.kt)("li",{parentName:"ul"},"Tabs themselves are sized according to their label. See content guidelines.")),(0,i.kt)("h3",{id:"dos-and-donts"},"Dos and don'ts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not use Tabs to navigate to different areas of a site or page."),(0,i.kt)("li",{parentName:"ul"},"Do ensure the current tab is highlighted in a prominent and obvious manner to the user."),(0,i.kt)("li",{parentName:"ul"},"Do not present multiple rows of tabs. Tabs should not wrap to a new line, and should maintain the visual metaphor of the tab being attached to the content."),(0,i.kt)("li",{parentName:"ul"},"Do keep the tabs pattern on top of the content area that it controls."),(0,i.kt)("li",{parentName:"ul"},"Do pre-select a default tab and content window."),(0,i.kt)("li",{parentName:"ul"},"Do not use Tabs to indicate progress. Use the Progress component instead."),(0,i.kt)("li",{parentName:"ul"},"Do not use Tabs to compare information in two or more groups. This would cause the user to have to switch back and forth to complete a task."),(0,i.kt)("li",{parentName:"ul"},"Do not realign Tabs to the center or trailing edge of the container. Maintain the pattern as presented."),(0,i.kt)("li",{parentName:"ul"},"Do bleed the entire Tabs container to the full width of its parent container.")),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select tab label values that are small enough that the entire set will fit into most views, without labels overflowing. Since horizontal scrolling is an extra action for the user, tabs that are scrolled away may not be accessed as frequently, or at all in some cases."),(0,i.kt)("li",{parentName:"ul"},"If space is available, or small amounts of scrolling are acceptable, opt to ",(0,i.kt)("em",{parentName:"li"},"not")," use Tabs, but rather stack the content in place."),(0,i.kt)("li",{parentName:"ul"},"Use Tabs only when users do not need to see content from multiple tabs simultaneously."),(0,i.kt)("li",{parentName:"ul"},"It is recommended to only utilize one tabbed section per page, to keep the experience simpler for users to navigate and understand.")),(0,i.kt)("h2",{id:"content-guidelines"},"Content Guidelines"),(0,i.kt)("h3",{id:"microcopy"},"Microcopy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use sentence case for tab labels."),(0,i.kt)("li",{parentName:"ul"},"As a guide for label size, labels should not exceed 15 characters.")),(0,i.kt)("h3",{id:"content-considerations"},"Content considerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use single word labels if possible. Short labels are more scannable, so optimizing for the shortest possible, yet descriptive, label will be best for the user."),(0,i.kt)("li",{parentName:"ul"},"Tabs will not be truncated, though the entire list risks being obscured with overflow if labels are too long."),(0,i.kt)("li",{parentName:"ul"},"Tab labels should clearly communicate the view users will see and the content contained in the view.")),(0,i.kt)("h2",{id:"accessibility"},"Accessibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users can use keyboards or assistive technologies to select the entire tab group, and then switch between tabs to select content.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"On a keyboard, users can tab to the tab group, then use the left and right arrow keys to select a tab.")))),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("h3",{id:"overflow"},"Overflow"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If tabs do not fit into the row, they will overflow and be clipped off the trailing edge of the Tabs container."),(0,i.kt)("li",{parentName:"ul"},"A horizontal scroll will be enabled to allow users access to overflowing tabs.")),(0,i.kt)("h3",{id:"animation"},"Animation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The border on active tabs will raise to appear and lower to disappear with animation depending on active and deactivated interaction, respectively.")))}d.isMDXComponent=!0}}]);