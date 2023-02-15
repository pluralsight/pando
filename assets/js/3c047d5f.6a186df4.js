"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30859],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9952:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(45721),o=n(88795),r="tabItem_U_pG";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},8157:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(81648),o=n(45721),r=n(88795),s=n(79106),i=n(39977),l=n(5548),u=n(24734);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,p]=d({queryString:n,groupId:a}),[h,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),k=(()=>{const e=l??h;return c({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),g(e)}),[p,g,r]),tabValues:r}}var g=n(93046),k=n(99941),f="tabList_ZP7c",b="tabItem_qNjf";function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,g.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==s&&(p(t),i(a))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:m},i,{className:(0,r.Z)("tabs__item",b,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function S(e){const t=(0,k.Z)();return o.createElement(w,(0,a.Z)({key:String(t)},e))}},70824:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var a=n(81648),o=(n(45721),n(70167)),r=n(8157),s=n(9952);const i={sidebar_position:1,tags:["Development","Packages","Tokens","Intro"],title:"Intro"},l=void 0,u={unversionedId:"development/tokens/intro",id:"development/tokens/intro",title:"Intro",description:"Learn how to use design-tokens for any project or OS platform.",source:"@site/docs/development/tokens/intro.md",sourceDirName:"development/tokens",slug:"/development/tokens/intro",permalink:"/docs/next/development/tokens/intro",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/development/tokens/intro.md",tags:[{label:"Development",permalink:"/docs/next/tags/development"},{label:"Packages",permalink:"/docs/next/tags/packages"},{label:"Tokens",permalink:"/docs/next/tags/tokens"},{label:"Intro",permalink:"/docs/next/tags/intro"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Development","Packages","Tokens","Intro"],title:"Intro"},sidebar:"development",previous:{title:"Migration",permalink:"/docs/next/development/getting-started/migration"},next:{title:"Colors",permalink:"/docs/next/development/tokens/colors"}},p={},m=[{value:"Installation",id:"installation",level:2},{value:"What is a token?",id:"what-is-a-token",level:2},{value:"Naming convention",id:"naming-convention",level:2},{value:"Usage",id:"usage",level:2},{value:"Web",id:"web",level:3},{value:"CSS Usage",id:"css-usage",level:4},{value:"With the normalize setup",id:"with-the-normalize-setup",level:5},{value:"Manually importing",id:"manually-importing",level:6},{value:"SCSS",id:"scss",level:4},{value:"JS Usage",id:"js-usage",level:4},{value:"1. Using the tokens meta-data with normalize (recommended)",id:"1-using-the-tokens-meta-data-with-normalize-recommended",level:5},{value:"2. Using the tokens without normalize",id:"2-using-the-tokens-without-normalize",level:5},{value:"3. Using tokens with inline styles",id:"3-using-tokens-with-inline-styles",level:5},{value:"Web Meta",id:"web-meta",level:3},{value:"CSS Properties",id:"css-properties",level:4},{value:"Normalized data",id:"normalized-data",level:4},{value:"Mobile",id:"mobile",level:3},{value:"Android",id:"android",level:4},{value:"iOS (WIP)",id:"ios-wip",level:4},{value:"Why are the tokens limited to colors?",id:"why-are-the-tokens-limited-to-colors",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("strong",null,(0,o.kt)("p",{class:"page-subheadline",markdown:"1"},"Learn how to use design-tokens for any project or OS platform.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To use tokens via the web, just install the package."),(0,o.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/design-tokens\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/design-tokens\n")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"We include the CSS tokens in our ",(0,o.kt)("a",{parentName:"strong",href:"/docs/next/development/getting-started/installation#normalizecss"},"normalize setup")),", so there is no need to install this package unless you are using CSS-in-JS or do not want to add the normalize reset.")),(0,o.kt)("h2",{id:"what-is-a-token"},"What is a token?"),(0,o.kt)("p",null,'A "token" is a word used to define a style property for any platform. So, instead of having to specify CSS variable, iOS/Swift style, Android style variable, etc. We can just say "token" which refers to the style variables of any platform.'),(0,o.kt)("h2",{id:"naming-convention"},"Naming convention"),(0,o.kt)("p",null,"In order to make our tokens scalable and easier to use, we use the following naming convetion for our themes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# "usage" is the only property required\n\nps-[sentiment?]-[usage]-[prominence?]-[interaction?]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sentiment"),' - "default", "action", "info", "success", "warning", "danger"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Usage (required)"),' - "background", "border", "navigation", "surface", "text"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Prominence"),' - "default", "weak", "medium", "strong", "inverse"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Interaction"),' - "default", "hover", "active", "visited"')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"All optional fields are ignored in the token syntax.")),(0,o.kt)("p",null,"What this looks like in terms of an actual token can be seen in an example of some of the tokens:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Example of tokens (not actual values)"',title:'"Example',of:!0,tokens:!0,"(not":!0,actual:!0,'values)"':!0},":root {\n  --ps-text: #000;\n  --ps-action-text: #fff;\n  --ps-action-background-hover: #fff1;\n}\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The design-tokens package is the single source of truth for colors and themes in the Pluralsight Design System Suite. This is also how we define styles in headless-styles package."),(0,o.kt)("h3",{id:"web"},"Web"),(0,o.kt)("p",null,"We ship CSS, SCSS variables, JS es6/commonJS modules, and meta-data for web projects. This way, you can choose whichever solution works best for your project."),(0,o.kt)("h4",{id:"css-usage"},"CSS Usage"),(0,o.kt)("p",null,"There are two ways to use the tokens via CSS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"With the normalize setup (recommended)"),(0,o.kt)("li",{parentName:"ol"},"Manually importing")),(0,o.kt)("h5",{id:"with-the-normalize-setup"},"With the normalize setup"),(0,o.kt)("p",null,"We ship all the tokens and themes in our normalize setup - so there is no additional work for you to do. After you have ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/development/getting-started/installation#normalizecss"},"imported the normalize file in your project"),", just simply use the tokens in your CSS file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="CSS usage example" showLineNumbers',title:'"CSS',usage:!0,'example"':!0,showLineNumbers:!0},"button {\n  background-color: var(--ps-action-background);\n  color: var(--ps-action-text);\n}\n\nbutton:hover {\n  background-color: var(--ps-action-background-hover);\n}\n")),(0,o.kt)("h6",{id:"manually-importing"},"Manually importing"),(0,o.kt)("p",null,"If you would prefer ",(0,o.kt)("strong",{parentName:"p"},"not")," to use our normalize setup, you just need to import the tokens in your main CSS file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="CSS manual import example (opt-out of Normalize setup)"',title:'"CSS',manual:!0,import:!0,example:!0,"(opt-out":!0,of:!0,Normalize:!0,'setup)"':!0},"@import url('@pluralsight/design-tokens/npm/css/variables.css');\n@import url('@pluralsight/design-tokens/npm/themes/light.css');\n")),(0,o.kt)("h4",{id:"scss"},"SCSS"),(0,o.kt)("p",null,"One of the biggest benefits to using SCSS is the pre-processing which means your project will not store any tokens into memory. This will help improve the performance of your app dramatically as it grows throughout time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Importing tokens into your SCSS"',title:'"Importing',tokens:!0,into:!0,your:!0,'SCSS"':!0},"@use '@pluralsight/design-tokens/npm/scss/_dark-variables.scss';\n@use '@pluralsight/design-tokens/npm/scss/_light-variables.scss';\n")),(0,o.kt)("p",null,"Then, use it as normal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="SCSS usage example" showLineNumbers',title:'"SCSS',usage:!0,'example"':!0,showLineNumbers:!0},"button {\n  background-color: $ps-action-background;\n  color: $ps-action-text;\n}\n")),(0,o.kt)("h4",{id:"js-usage"},"JS Usage"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"JS and Meta tokens support both es6 and commonJS environments.")),(0,o.kt)("p",null,"There are a few ways you can utilize the JS tokens:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using the ",(0,o.kt)("a",{parentName:"li",href:"#css-properties"},"tokens meta-data")," combined with the normalize setup (recommended)"),(0,o.kt)("li",{parentName:"ol"},"Using the tokens without the normalize"),(0,o.kt)("li",{parentName:"ol"},"Using the tokens with inline styles")),(0,o.kt)("h5",{id:"1-using-the-tokens-meta-data-with-normalize-recommended"},"1. Using the tokens meta-data with normalize (recommended)"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#css-properties"},"CSS Properties section"),"."),(0,o.kt)("h5",{id:"2-using-the-tokens-without-normalize"},"2. Using the tokens without normalize"),(0,o.kt)("p",null,"If you choose to opt-out of using the normalize setup, you will only have ",(0,o.kt)("strong",{parentName:"p"},"static tokens")," available for use. This means if you want to utilize themes, you will ",(0,o.kt)("strong",{parentName:"p"},"need to create your own theme-provider")," and import ",(0,o.kt)("em",{parentName:"p"},"both")," sets of tokens."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example use without normalize" showLineNumbers',title:'"Example',use:!0,without:!0,'normalize"':!0,showLineNumbers:!0},"// theme.js\nimport { psBackground } from '@pluralsight/design-tokens'\nimport { psBackgroundLight } from '@pluralsight/design-tokens/light'\n\nconst darkTheme = {\n  background: psBackground\n}\n\nconst lightTheme = {\n  background: psBackgroundLight\n}\n\n// Some component\nconst styles = css((theme) => {\n  backgroundColor: theme.background,\n})\n")),(0,o.kt)("h5",{id:"3-using-tokens-with-inline-styles"},"3. Using tokens with inline styles"),(0,o.kt)("p",null,"You can also use the static JS tokens inline as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Example using inline styles"',title:'"Example',using:!0,inline:!0,'styles"':!0},"<button\n  style={{\n    backgroundColor: psActionBackground,\n  }}\n/>\n")),(0,o.kt)("h3",{id:"web-meta"},"Web Meta"),(0,o.kt)("p",null,"Sometimes there are specific scenarios where you need something more than just a token. We provide two meta-data files for these use cases."),(0,o.kt)("h4",{id:"css-properties"},"CSS Properties"),(0,o.kt)("p",null,"If you are looking for a seamless JS integration with the Normalize setup or single-source-of-truth, we provide a module that exports JS tokens that have the CSS token names for the values."),(0,o.kt)("p",null,'When you combine this with CSS definitions, it "just works".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of what CSSProperties exports" showLineNumbers',title:'"Example',of:!0,what:!0,CSSProperties:!0,'exports"':!0,showLineNumbers:!0},"export const psBackground = 'var(--ps-background)'\n")),(0,o.kt)("p",null,"This is much more performant if you are using a solution that creates CSS files from your JS defintions (i.e. ",(0,o.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Usage example" showLineNumbers',title:'"Usage','example"':!0,showLineNumbers:!0},"import styled from 'styled-components'\nimport { psBackground } from '@pluralsight/design-tokens/meta/cssProperties'\n\nconst Button = styled(Button)`\n  background-color: ${psBackground};\n`\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you combine this with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/development/getting-started/installation#normalizecss"},"normalize setup"),", theming will be baked into your CSS-in-JS styles!")),(0,o.kt)("h4",{id:"normalized-data"},"Normalized data"),(0,o.kt)("p",null,"If you need some raw normalized data, we also have you covered in our normalize.json file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example of normalized data" showLineNumbers',title:'"Example',of:!0,normalized:!0,'data"':!0,showLineNumbers:!0},'{\n  groupItems: ["default", "action", "danger", "info", "success", "warning"],\n  groups: {\n    "default": {\n      "background": "#000",\n      "backgroundWeak": "#111",\n      "text": "#fff"\n    },\n    ...\n  }\n}\n')),(0,o.kt)("p",null,"Just import it into your project via a bundler that supports JSON:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import tokenData from '@pluralsight/design-tokens/meta/normalize.json'\n")),(0,o.kt)("h3",{id:"mobile"},"Mobile"),(0,o.kt)("p",null,"We offer both android and iOS solutions for mobile platforms. All mobile tokens can be found in our Github repo ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/tree/main/packages/design-tokens/build-mobile"},"mobile tokens location"),"."),(0,o.kt)("h4",{id:"android"},"Android"),(0,o.kt)("p",null,"For Android, we ship the tokens as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/tree/main/packages/design-tokens/build-mobile/compose"},"Compose colors"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Need another Android asset other than Compose? ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/discussions/new"},"Start a discussion")," to let us know!")),(0,o.kt)("h4",{id:"ios-wip"},"iOS (WIP)"),(0,o.kt)("p",null,"We are currently ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/issues/724"},"in the process")," of supporting iOS via a Asset Catalog."),(0,o.kt)("h2",{id:"why-are-the-tokens-limited-to-colors"},"Why are the tokens limited to colors?"),(0,o.kt)("p",null,"During our R&D phase, we have done extensive research to understand the best way to deliver tokens in the most performant way so that the customer experience does not have a negative impact regarding render performance & load times."),(0,o.kt)("p",null,"In this research we have found that there ",(0,o.kt)("em",{parentName:"p"},"is")," a threshold where CSS variables do negatively impact browser performance (just like specific properties do). For example, in some case studies, using a variable for ",(0,o.kt)("inlineCode",{parentName:"p"},"padding")," throughout your app can slow down render performance by ",(0,o.kt)("strong",{parentName:"p"},"up to 2 seconds"),"!"),(0,o.kt)("p",null,"During this research we have also compared solutions that are currently being executed by teams (i.e. Twitter, Github, etc.) drawing a correlation to slower apps using more CSS variables (in the web)."),(0,o.kt)("p",null,"Thus, the current standard which seems to keep a performant load time (under 1 second) is to ",(0,o.kt)("strong",{parentName:"p"},"keep variables limited to only colors and the quantity being defined up to 57"),"."),(0,o.kt)("p",null,"This is the standard we align with for the design-tokens package. Additionally, because we have a semantic naming pattern, we are delivering every color needed for our entire Web UI Kit (except for rare/uncommonly used colors)."))}d.isMDXComponent=!0}}]);