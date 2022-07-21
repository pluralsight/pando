"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[859],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(20411);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44295:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(20411),r=n(88795),o="tabItem_ccOm";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},98681:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(60953),r=n(20411),o=n(88795),i=n(13642),l=n(79514),s=n(36385),u=n(23223),p="tabList_vnoP",c="tabItem_NMaj";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,k=e.values,h=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,S=w.setTabGroupChoices,C=(0,r.useState)(y),x=C[0],T=C[1],O=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=N[h];null!=I&&I!==x&&v.some((function(e){return e.value===I}))&&T(I)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==x&&(j(t),T(a),null!=h&&S(h,String(a)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var o,i=O.indexOf(e.currentTarget)-1;n=null!=(o=O[i])?o:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},g)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:E,onClick:E},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},80078:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(60953),r=n(59005),o=(n(20411),n(70167)),i=n(98681),l=n(44295),s=["components"],u={sidebar_position:1,tags:["Development","Packages","Tokens","Intro"]},p="Intro",c={unversionedId:"development/tokens/intro",id:"development/tokens/intro",title:"Intro",description:"This is alpha documentation for the design-tokens package.",source:"@site/docs/development/tokens/intro.md",sourceDirName:"development/tokens",slug:"/development/tokens/intro",permalink:"/docs/development/tokens/intro",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/tokens/intro.md",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Tokens",permalink:"/docs/tags/tokens"},{label:"Intro",permalink:"/docs/tags/intro"}],version:"current",lastUpdatedBy:"Brad Bice",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Development","Packages","Tokens","Intro"]},sidebar:"development",previous:{title:"Migration",permalink:"/docs/development/getting-started/migration"},next:{title:"Colors",permalink:"/docs/development/tokens/colors"}},m={},d=[{value:"npm",id:"npm",level:2},{value:"What is a token?",id:"what-is-a-token",level:2},{value:"Naming convention",id:"naming-convention",level:2},{value:"Usage",id:"usage",level:2},{value:"Web",id:"web",level:3},{value:"CSS",id:"css",level:4},{value:"es6",id:"es6",level:4},{value:"SCSS",id:"scss",level:4},{value:"Mobile",id:"mobile",level:3},{value:"Why are the tokens limited to colors?",id:"why-are-the-tokens-limited-to-colors",level:2}],k={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This is ",(0,o.kt)("strong",{parentName:"p"},"alpha")," documentation for the ",(0,o.kt)("strong",{parentName:"p"},"design-tokens")," package.")),(0,o.kt)("p",{class:"page-subheadline",markdown:"1"},"Learn how to use design-tokens for any project or OS platform."),(0,o.kt)("h2",{id:"npm"},"npm"),(0,o.kt)("p",null,"To use tokens via the web, just install the npm package."),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/design-tokens@alpha\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/design-tokens@alpha\n")))),(0,o.kt)("h2",{id:"what-is-a-token"},"What is a token?"),(0,o.kt)("p",null,'A "token" is a word used to define a style property for any platform. So, instead of having to specify CSS variable, iOS/Swift style, Android style variable, etc. We can just say "token" which refers to the style variables of any platform.'),(0,o.kt)("h2",{id:"naming-convention"},"Naming convention"),(0,o.kt)("p",null,"In order to make our tokens scalable and easier to consume, we use the same naming convention created by the Asana team."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# "usage" is the only property required\n\nps-[sentiment?]-[usage]-[prominence?]-[interaction?]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sentiment"),' - "default" (accent), "neutral", "info", "success", "warning", "danger"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Usage"),' - "background", "border", "surface", "text"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Prominence"),' - "default", "weak", "medium", "strong"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Interaction"),' - "default", "hover", "active", "focus", "disabled"')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'Values marked "default" can be ignored since the field is optional.')),(0,o.kt)("p",null,"What this looks like in terms of an actual token can be seen in an example for something that may apply to a Button:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Button example - not actual properties"',title:'"Button',example:!0,"-":!0,not:!0,actual:!0,'properties"':!0},":root {\n  --ps-background: #123456;\n  --ps-background-hover: #123456;\n}\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"design-tokens")," package is the single source of truth for colors in the design system. This is how we define styles in ",(0,o.kt)("inlineCode",{parentName:"p"},"headless-styles")," and why you can just use this package if you need maximum flexibility - or are on a mobile platform."),(0,o.kt)("h3",{id:"web"},"Web"),(0,o.kt)("p",null,"For the web (npm), we ship ",(0,o.kt)("inlineCode",{parentName:"p"},"css")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"scss")," variables along with ",(0,o.kt)("inlineCode",{parentName:"p"},"js")," es6 modules. This way, you can choose whatever syntax works best for your project."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"We include the CSS tokens in our normalize setup"),", so there is no need to install this package unless you are using another language.")),(0,o.kt)("h4",{id:"css"},"CSS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Alternatively importing tokens into your CSS"',title:'"Alternatively',importing:!0,tokens:!0,into:!0,your:!0,'CSS"':!0},'import "@pluralsight/design-tokens/build/css/variables.css";\n')),(0,o.kt)("p",null,"When you import ",(0,o.kt)("inlineCode",{parentName:"p"},"css"),", we use the ",(0,o.kt)("inlineCode",{parentName:"p"},":root")," psuedo-selector to store the properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="CSS import outcome (example)"',title:'"CSS',import:!0,outcome:!0,'(example)"':!0},":root {\n  --ps-background: #cccccc;\n  --ps-text: #ff0000;\n}\n")),(0,o.kt)("h4",{id:"es6"},"es6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Alternatively importing tokens into your JS"',title:'"Alternatively',importing:!0,tokens:!0,into:!0,your:!0,'JS"':!0},"import { psText } from '@pluralsight/design-tokens'\n")),(0,o.kt)("p",null,"When you use ",(0,o.kt)("inlineCode",{parentName:"p"},"js"),", we ",(0,o.kt)("inlineCode",{parentName:"p"},"export")," unique ID variable names."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JS import outcome (example)"',title:'"JS',import:!0,outcome:!0,'(example)"':!0},"export const psBackground = '#cccccc'\nexport const psText = '#ff0000'\n")),(0,o.kt)("h4",{id:"scss"},"SCSS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Importing tokens into your SCSS"',title:'"Importing',tokens:!0,into:!0,your:!0,'SCSS"':!0},"@use '@pluralsight/design-tokens/scss/_variables.scss';\n")),(0,o.kt)("p",null,"When you use ",(0,o.kt)("inlineCode",{parentName:"p"},"scss"),", we set the SCSS variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="SCSS import outcome (example)"',title:'"SCSS',import:!0,outcome:!0,'(example)"':!0},"$ps-background: #1b1834;\n$ps-text: #ffffff;\n")),(0,o.kt)("h3",{id:"mobile"},"Mobile"),(0,o.kt)("p",null,"For mobile, we will ship ",(0,o.kt)("inlineCode",{parentName:"p"},"iOS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"swift"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"android")," files to import into your projects via our repo. Just run the following command to have access to any resource your team needs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn workspace @pluralsight/design-tokens run build\n")),(0,o.kt)("p",null,"This will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," directory in the ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/design-tokens")," location which will contain all of the resources mentioned above."),(0,o.kt)("h2",{id:"why-are-the-tokens-limited-to-colors"},"Why are the tokens limited to colors?"),(0,o.kt)("p",null,"During our R&D phase, we have done extensive research to understand the best way to deliver tokens in the most performant way so that the customer experience does not have a negative impact regarding render performance & load times."),(0,o.kt)("p",null,"In this research we have found that there ",(0,o.kt)("em",{parentName:"p"},"is")," a threshold where CSS variables do negatively impact browser performance (just like specific properties do). For example, in some case studies, using a variable for ",(0,o.kt)("inlineCode",{parentName:"p"},"padding")," throughout your app can slow down render performance by ",(0,o.kt)("strong",{parentName:"p"},"up to 2 seconds"),"!"),(0,o.kt)("p",null,"During this research we have also compared solutions that are currently being executed by teams (i.e. Twitter, Github, etc.) drawing a correlation to slower apps using more CSS variables (in the web)."),(0,o.kt)("p",null,"Thus, the current standard which seems to keep a performant load time (under 1 second) is to ",(0,o.kt)("strong",{parentName:"p"},"keep variables limited to only colors and the quantity being defined up to 57"),"."),(0,o.kt)("p",null,"This is the standard we align with for the ",(0,o.kt)("inlineCode",{parentName:"p"},"design-tokens")," package. Additionally, because we have a semantic naming pattern, we are delivering every color needed for our entire Web UI Kit (except for rare/uncommonly used colors)."))}h.isMDXComponent=!0}}]);