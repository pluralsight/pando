"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[648],{70167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61643:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var r=n(81648),o=(n(45721),n(70167));const a={tags:["Design Tokens","Colors","Background colors","Utility colors","status colors","text colors","border colors"],title:"Themes"},i=void 0,l={unversionedId:"reference/general/themes/index",id:"reference/general/themes/index",title:"Themes",description:"Pando comes with built-in themes, which is the foundation of our UI Kit. To help associate colors, we utilize a semantic naming convention that is both functional and scalable.",source:"@site/docs/reference/general/themes/index.mdx",sourceDirName:"reference/general/themes",slug:"/reference/general/themes/",permalink:"/docs/next/reference/general/themes/",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/general/themes/index.mdx",tags:[{label:"Design Tokens",permalink:"/docs/next/tags/design-tokens"},{label:"Colors",permalink:"/docs/next/tags/colors"},{label:"Background colors",permalink:"/docs/next/tags/background-colors"},{label:"Utility colors",permalink:"/docs/next/tags/utility-colors"},{label:"status colors",permalink:"/docs/next/tags/status-colors"},{label:"text colors",permalink:"/docs/next/tags/text-colors"},{label:"border colors",permalink:"/docs/next/tags/border-colors"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Design Tokens","Colors","Background colors","Utility colors","status colors","text colors","border colors"],title:"Themes"},sidebar:"reference",next:{title:"Token List",permalink:"/docs/next/reference/general/themes/token-list"}},s={},c=[{value:"Naming convention",id:"naming-convention",level:2},{value:"What is the purpose of this color?",id:"what-is-the-purpose-of-this-color",level:3},{value:"How will it be used?",id:"how-will-it-be-used",level:3},{value:"How visually prominant should the color be?",id:"how-visually-prominant-should-the-color-be",level:3},{value:"Is there an interaction intended for this color?",id:"is-there-an-interaction-intended-for-this-color",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pando comes with built-in themes, which is the foundation of our UI Kit. To help associate colors, we utilize a semantic naming convention that is both functional and scalable."),(0,o.kt)("p",null,"Pando comes with two themes: ",(0,o.kt)("strong",{parentName:"p"},"dark (default)"),", and ",(0,o.kt)("strong",{parentName:"p"},"light"),'. This website uses the "dark" and "light" themes.'),(0,o.kt)("p",null,"Themes are controlled by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"data-theme")," attribute on the ",(0,o.kt)("inlineCode",{parentName:"p"},"html")," tag for a full page takeover (what we do on this site), or a CSS class of the ",(0,o.kt)("inlineCode",{parentName:"p"},"pando-<theme name>"),' (i.e. "light", "dark") for component level control.'),(0,o.kt)("p",null,"If no theme is set in your app, Pando will use the dark theme."),(0,o.kt)("admonition",{title:"A11y Focused",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Accessbility is our highest priority with Pando, which means all of our themes are visually accessible by default. ",(0,o.kt)("strong",{parentName:"p"},"This means that our themes are both contrast and colorblind friendly."))),(0,o.kt)("h2",{id:"naming-convention"},"Naming convention"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# "usage" is the only required property\n\nps-[sentiment?]-[usage]-[prominence?]-[interaction?]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sentiment"),' - "default", "action", "info", "success", "warning", "danger"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Usage (required)"),' - "background", "border", "navigation", "surface", "text"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Prominence"),' - "default", "weak", "medium", "strong", "inverse"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Interaction"),' - "default", "hover", "active", "visited"')),(0,o.kt)("p",null,"This naming convention is designed so that you can use tokens based on their functionality."),(0,o.kt)("p",null,"Whether you are a designer or developer, just ask yourself:"),(0,o.kt)("h3",{id:"what-is-the-purpose-of-this-color"},"What is the purpose of this color?"),(0,o.kt)("p",null,"Every color should have a purpose, which is our ",(0,o.kt)("strong",{parentName:"p"},"sentiment")," category:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Default:")," A neutral palette for non-actionable items (i.e. page content)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Action"),": These colors represent actionable and interactive items (i.e. buttons, text links)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Info"),": A feedback palette that helps to communicate an informative message to the user (i.e. admonitions)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Success"),": A feedback palette that helps to communicate a successful state to the user (i.e. admonitions)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Warning"),": A feedback palette that helps to communicate a warning state to the user (i.e. admonitions)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Danger"),": A feedback palette that helps to communicate a destructive action, loss of data, or required information to the user (i.e. admonitions, error text, destructive buttons)")),(0,o.kt)("admonition",{title:"Pitfall",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"We recommend staying away from using a traditional success/danger palette for everything and instead use it sparingly (as our themes are naturally designed for). This will ensure all people can enjoy the user experience and not just the visually gifted.")),(0,o.kt)("h3",{id:"how-will-it-be-used"},"How will it be used?"),(0,o.kt)("p",null,"This is the only category that is required by our naming convention because it is the most important."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Background"),": Background colors of specific components (button, dropdown, etc.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Border"),": All borders of interface items"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Navigation"),": Used for actionable text, either within body copy or within some components"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Surface"),": Background of a layout element (page, container, wrapper, etc.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Text"),": Used for body copy, labels, content within components")),(0,o.kt)("h3",{id:"how-visually-prominant-should-the-color-be"},"How visually prominant should the color be?"),(0,o.kt)("p",null,"This category relates to the vibrancy of the color:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Weak:")," Lowest emphasis, lowest priority"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Medium:")," Important, but not the most prominent or most emphasized"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Strong:")," Highest emphasis, should stand out from surrounding content"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Inverse:")," High contrast alternative")),(0,o.kt)("h3",{id:"is-there-an-interaction-intended-for-this-color"},"Is there an interaction intended for this color?"),(0,o.kt)("p",null,"Most of our colors in the theme won't include this category, but in some cases, you will need them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hover:")," Used for pointer devices to express interactivity"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Focus:")," The indicator (visual, aural, or otherwise) that an element is currently selected and can be intereacted with"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Active:")," The active interaction state presents itself on press or on activation of a control (can also be used for focus)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Visited:")," Typically represented only in text navigation, the visited interaction state will represent any previously used control")))}p.isMDXComponent=!0}}]);