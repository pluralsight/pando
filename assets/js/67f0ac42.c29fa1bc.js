"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3632],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(45721);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=u(n),d=s,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9952:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(45721),s=n(88795),o="tabItem_U_pG";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(o,i),hidden:n},t)}},8157:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(81648),s=n(45721),o=n(88795),i=n(79106),r=n(39977),l=n(5548),u=n(24734);function p(e){return function(e){return s.Children.map(e,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}function c(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,r._X)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[i,r]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,p]=d({queryString:n,groupId:a}),[h,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=l??h;return m({value:e,tabValues:o})?e:null})();(0,s.useLayoutEffect)((()=>{k&&r(k)}),[k]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);r(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var g=n(93046),k=n(99941),f="tabList_ZP7c",y="tabItem_qNjf";function b(e){let{className:t,block:n,selectedValue:i,selectValue:r,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,g.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==i&&(p(t),r(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:r}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},r,{className:(0,o.Z)("tabs__item",y,r?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return s.createElement("div",{className:(0,o.Z)("tabs-container",f)},s.createElement(b,(0,a.Z)({},e,t)),s.createElement(v,(0,a.Z)({},e,t)))}function S(e){const t=(0,k.Z)();return s.createElement(w,(0,a.Z)({key:String(t)},e))}},99441:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var a=n(81648),s=(n(45721),n(70167)),o=n(8157),i=n(9952);const r={sidebar_position:2,tags:["Design Tokens","Extending Themes"],title:"Customizing Themes"},l=void 0,u={unversionedId:"reference/general/themes/customizing",id:"reference/general/themes/customizing",title:"Customizing Themes",description:"Our semantic token system allows for easily customizing the themes depending on your use case.",source:"@site/docs/reference/general/themes/customizing.md",sourceDirName:"reference/general/themes",slug:"/reference/general/themes/customizing",permalink:"/docs/next/reference/general/themes/customizing",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/general/themes/customizing.md",tags:[{label:"Design Tokens",permalink:"/docs/next/tags/design-tokens"},{label:"Extending Themes",permalink:"/docs/next/tags/extending-themes"}],version:"current",lastUpdatedBy:"tim-roberts1",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Design Tokens","Extending Themes"],title:"Customizing Themes"},sidebar:"reference",previous:{title:"Token List",permalink:"/docs/next/reference/general/themes/token-list"},next:{title:"Icons",permalink:"/docs/next/reference/general/icons"}},p={},c=[{value:"Customizing with CSS",id:"customizing-with-css",level:2},{value:"Class level customizing",id:"class-level-customizing",level:3},{value:"Customizing with Javascript",id:"customizing-with-javascript",level:2},{value:"CSS Template Literals",id:"css-template-literals",level:3},{value:"Styles JS API",id:"styles-js-api",level:3},{value:"Style Objects",id:"style-objects",level:3},{value:"String Value Tokens",id:"string-value-tokens",level:3},{value:"Using Design-tokens",id:"using-design-tokens",level:2},{value:"Web",id:"web",level:3},{value:"CSS Usage",id:"css-usage",level:4},{value:"With the initial setup",id:"with-the-initial-setup",level:5},{value:"Manually importing",id:"manually-importing",level:5},{value:"SCSS",id:"scss",level:4},{value:"Javascript Tokens",id:"javascript-tokens",level:4},{value:"1. Using the tokens meta-data with initial (recommended)",id:"1-using-the-tokens-meta-data-with-initial-recommended",level:5},{value:"2. Using the tokens without the initial setup",id:"2-using-the-tokens-without-the-initial-setup",level:5},{value:"3. Using tokens with inline styles",id:"3-using-tokens-with-inline-styles",level:5},{value:"Web Meta",id:"web-meta",level:3},{value:"CSS Properties",id:"css-properties",level:4},{value:"Normalized data",id:"normalized-data",level:4},{value:"Mobile",id:"mobile",level:3},{value:"Android",id:"android",level:4},{value:"iOS / Swift",id:"ios--swift",level:4}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Our semantic token system allows for easily customizing the themes depending on your use case."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This page assumes you are using the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/learn/get-started/installation/add-to-website"},"initial setup"),". If you would like to have access to the Pando themes without using the setup, see the ",(0,s.kt)("a",{parentName:"p",href:"#using-design-tokens"},"Using design-tokens section"),".")),(0,s.kt)("h2",{id:"customizing-with-css"},"Customizing with CSS"),(0,s.kt)("p",null,"In CSS, we set the default theme in the ",(0,s.kt)("inlineCode",{parentName:"p"},":root")," selector via our ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/learn/get-started/installation/add-to-website"},"initial setup"),", so all you need to do is overwrite the tokens you want to customize in the ",(0,s.kt)("inlineCode",{parentName:"p"},":root")," CSS selector of your project."),(0,s.kt)("p",null,"For example, in your root CSS file, add this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Updating the default/text token in your project."',title:'"Updating',the:!0,"default/text":!0,token:!0,in:!0,your:!0,'project."':!0},":root {\n  --ps-text: #fff;\n}\n")),(0,s.kt)("p",null,"To customize a specific theme in Pando (i.e. light, dark, etc.), you need to target the corresponding selectors."),(0,s.kt)("p",null,'For example, to modify the "light" theme, add this to your CSS:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Updating the default/text token for only the light theme in your project."',title:'"Updating',the:!0,"default/text":!0,token:!0,for:!0,only:!0,light:!0,theme:!0,in:!0,your:!0,'project."':!0},"html[data-theme='light'],\n.pando-light {\n  --ps-text: #000;\n}\n")),(0,s.kt)("h3",{id:"class-level-customizing"},"Class level customizing"),(0,s.kt)("p",null,"In rare cases, you may only need to update a token value for a specific component. For this scenario, update the token within the specific class scope you need."),(0,s.kt)("p",null,"In this example, we are updating the default/text token for a component using the ",(0,s.kt)("inlineCode",{parentName:"p"},".card")," class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Updating the default/text token only for a component using the this class."',title:'"Updating',the:!0,"default/text":!0,token:!0,only:!0,for:!0,a:!0,component:!0,using:!0,this:!0,'class."':!0},".card {\n  --ps-text: #fff;\n  color: var(--ps-text);\n}\n")),(0,s.kt)("h2",{id:"customizing-with-javascript"},"Customizing with Javascript"),(0,s.kt)("p",null,"If you are using a CSS-in-JS styling solution, you can easily extend our themes depending on your technology choice."),(0,s.kt)("h3",{id:"css-template-literals"},"CSS Template Literals"),(0,s.kt)("p",null,"If you are using a tech that utilizes CSS Template Literals, like ",(0,s.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components"),", you can overwrite the values from our Headless-styles API by providing your own value afterward."),(0,s.kt)("p",null,"Here is an example where we overwrite the background color of a Button using both styled-components and Headless-styles:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'showLineNumbers title="Updating the background color of a button."',showLineNumbers:!0,title:'"Updating',the:!0,background:!0,color:!0,of:!0,a:!0,'button."':!0},"import styled from 'styled-components'\nimport { getJSButtonProps } from '@pluralsight/headless-styles'\n\nconst Button = styled.button`\n  ${getJSButtonProps().button.cssProps}\n  background-color: blue;\n`\n")),(0,s.kt)("h3",{id:"styles-js-api"},"Styles JS API"),(0,s.kt)("p",null,"If you would like to have all the data related to a component (i.e. styles, animation, a11y), you can use the Javascript version of any component API with the ",(0,s.kt)("inlineCode",{parentName:"p"},"styles")," key."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"showLineNumbers",showLineNumbers:!0},"interface JSReturnProps {\n  keyframes?: CSS.Properties\n  a11yProps?: Record<A11yProps, string>\n  cssProps: TemplateLiteralString<CSS.Properties>\n  styles: CSS.Properties\n}\n")),(0,s.kt)("p",null,"Here is an example where we are customizing an Input."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'showLineNumbers title="Creating an Input with the native React API."',showLineNumbers:!0,title:'"Creating',an:!0,Input:!0,with:!0,the:!0,native:!0,React:!0,'API."':!0},"import { getJSInputProps } from '@pluralsight/headless-styles'\n\nfunction Input(props) {\n  const { inputWrapper, input } = getJSInputProps(props)\n\n  return (\n    <div style={inputWrapper.styles}>\n      <input\n        {...input.a11yProps}\n        style={input.styles}\n        onChange={props.handleChange}\n      />\n    </div>\n  )\n}\n")),(0,s.kt)("h3",{id:"style-objects"},"Style Objects"),(0,s.kt)("p",null,"If you are using a technology that utilizes Javascript Objects for styles and only need the styles from Pando components, you can use our Style Objects."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Naming convention used for Style Objects"',title:'"Naming',convention:!0,used:!0,for:!0,Style:!0,'Objects"':!0},"import { <component>Styles } from '@pluralsight/headless-styles/styles'\n")),(0,s.kt)("p",null,"Here is an example where we are using Style Objects to ",(0,s.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/customize-theme#customizing-component-styles"},"extend a Chakra Button"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers {3,8}",showLineNumbers:!0,"{3,8}":!0},"import { extendTheme } from '@chakra-ui/react'\nimport type { StyleFunctionProps } from '@chakra-ui/styled-system'\nimport { buttonStyles } from '@pluralsight/headless-styles/styles'\n\nconst theme = extendTheme({\n  components: {\n    Button: {\n      baseStyle: buttonStyles.btnBase,\n      defaultProps: {\n        ...\n      },\n    },\n  },\n})\n\nexport default theme\n")),(0,s.kt)("admonition",{title:"Style Objects use nested properties",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"All of our component Style Objects use the nested property syntax supported by emotion and styled-components. If your tech uses any other syntax (like Chakra), you will need to add the additional styles to your theme with Object Spreading from the Style Object properties.")),(0,s.kt)("h3",{id:"string-value-tokens"},"String Value Tokens"),(0,s.kt)("p",null,"You can use a string value of the CSS token and it will automagically work! This is because browsers will map the token value from the Style Object to the CSS variable."),(0,s.kt)("p",null,"In this example, we use Emotion to update a Link to use the Pando Link token:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'showLineNumbers title="Example of using a Emotion with Pando."',showLineNumbers:!0,title:'"Example',of:!0,using:!0,a:!0,Emotion:!0,with:!0,'Pando."':!0},"import styled from '@emotion/styled'\n\nconst TextLink = styled.a({\n  color: 'var(--ps-action-navigation)',\n})\n")),(0,s.kt)("h2",{id:"using-design-tokens"},"Using Design-tokens"),(0,s.kt)("p",null,"If you would like access to all of our design tokens without using our CSS Reset, you can install the Design-tokens package, which will deliver Javascript variables for all of the tokens:"),(0,s.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/design-tokens\n"))),(0,s.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/design-tokens\n")))),(0,s.kt)("p",null,"The design-tokens package is the single source of truth for themes in the Pando ecosystem."),(0,s.kt)("h3",{id:"web"},"Web"),(0,s.kt)("p",null,"We ship CSS custom properties, SCSS variables, JS es6/commonJS modules, and meta-data for web projects. This way, you can choose whichever solution works best for your project."),(0,s.kt)("h4",{id:"css-usage"},"CSS Usage"),(0,s.kt)("p",null,"There are two ways to use the tokens via CSS"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"With the initial setup (recommended)"),(0,s.kt)("li",{parentName:"ol"},"Manually importing")),(0,s.kt)("h5",{id:"with-the-initial-setup"},"With the initial setup"),(0,s.kt)("p",null,"We ship all the tokens and themes in our initial setup - so there is no additional work for you to do. After you have completed the setup you will be able to reference the tokens in your CSS files."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="CSS usage example" showLineNumbers',title:'"CSS',usage:!0,'example"':!0,showLineNumbers:!0},"button {\n  background-color: var(--ps-action-background);\n  color: var(--ps-action-text);\n}\n\nbutton:hover {\n  background-color: var(--ps-action-background-hover);\n}\n")),(0,s.kt)("h5",{id:"manually-importing"},"Manually importing"),(0,s.kt)("p",null,"If you would prefer to opt-out of our initial setup, you can import the tokens in your root CSS file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="CSS manual import example (opt-out of initial setup)"',title:'"CSS',manual:!0,import:!0,example:!0,"(opt-out":!0,of:!0,initial:!0,'setup)"':!0},"@import url('@pluralsight/design-tokens/npm/css/variables.css');\n@import url('@pluralsight/design-tokens/npm/themes/light.css');\n")),(0,s.kt)("h4",{id:"scss"},"SCSS"),(0,s.kt)("p",null,"If you use SCSS in your project, you can import our SCSS variables."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Importing tokens into your SCSS"',title:'"Importing',tokens:!0,into:!0,your:!0,'SCSS"':!0},"@use '@pluralsight/design-tokens/npm/scss/_dark-variables.scss';\n@use '@pluralsight/design-tokens/npm/scss/_light-variables.scss';\n")),(0,s.kt)("p",null,"Then, use them as normal."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="SCSS usage example" showLineNumbers',title:'"SCSS',usage:!0,'example"':!0,showLineNumbers:!0},"button {\n  background-color: $ps-action-background;\n  color: $ps-action-text;\n}\n")),(0,s.kt)("h4",{id:"javascript-tokens"},"Javascript Tokens"),(0,s.kt)("p",null,"There are a few ways you can utilize the Javascript tokens:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Using the ",(0,s.kt)("a",{parentName:"li",href:"#css-properties"},"tokens meta-data")," combined with the initial setup (recommended)"),(0,s.kt)("li",{parentName:"ol"},"Using the tokens without the initial setup"),(0,s.kt)("li",{parentName:"ol"},"Using the tokens with inline styles")),(0,s.kt)("h5",{id:"1-using-the-tokens-meta-data-with-initial-recommended"},"1. Using the tokens meta-data with initial (recommended)"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"#css-properties"},"CSS Properties section"),"."),(0,s.kt)("h5",{id:"2-using-the-tokens-without-the-initial-setup"},"2. Using the tokens without the initial setup"),(0,s.kt)("p",null,"If you choose to opt-out of using the initial setup, you will only have ",(0,s.kt)("strong",{parentName:"p"},"static tokens")," available for use."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example use without the initial setup" showLineNumbers',title:'"Example',use:!0,without:!0,the:!0,initial:!0,'setup"':!0,showLineNumbers:!0},"// theme.js\nimport { psBackground } from '@pluralsight/design-tokens'\nimport { psBackgroundLight } from '@pluralsight/design-tokens/light'\n\nconst darkTheme = {\n  background: psBackground\n}\n\nconst lightTheme = {\n  background: psBackgroundLight\n}\n\n// Some component\nconst styles = css((theme) => {\n  backgroundColor: theme.background,\n})\n")),(0,s.kt)("h5",{id:"3-using-tokens-with-inline-styles"},"3. Using tokens with inline styles"),(0,s.kt)("p",null,"You can also use the static JS tokens inline as well."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Example using inline styles"',title:'"Example',using:!0,inline:!0,'styles"':!0},"<button\n  style={{\n    backgroundColor: psActionBackground,\n  }}\n/>\n")),(0,s.kt)("h3",{id:"web-meta"},"Web Meta"),(0,s.kt)("p",null,"Sometimes you need something more than just a token. We provide two meta-data files for these use cases."),(0,s.kt)("h4",{id:"css-properties"},"CSS Properties"),(0,s.kt)("p",null,"If you are looking for a seamless JS integration with the Normalize setup or single-source-of-truth, we provide a module that exports JS tokens that have the CSS token names for the values."),(0,s.kt)("p",null,'When you combine this with CSS definitions, it "just works".'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of what CSSProperties exports" showLineNumbers',title:'"Example',of:!0,what:!0,CSSProperties:!0,'exports"':!0,showLineNumbers:!0},"export const psBackground = 'var(--ps-background)'\n")),(0,s.kt)("p",null,"This is much more performant if you are using a solution that creates CSS files from your JS defintions (i.e. ",(0,s.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components"),")."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Usage example" showLineNumbers',title:'"Usage','example"':!0,showLineNumbers:!0},"import styled from 'styled-components'\nimport { psBackground } from '@pluralsight/design-tokens/meta/cssProperties'\n\nconst Button = styled(Button)`\n  background-color: ${psBackground};\n`\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"If you combine this with the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/learn/get-started/installation/add-to-website"},"initial setup"),", theming will be instantly avialable in your CSS-in-JS styles!")),(0,s.kt)("h4",{id:"normalized-data"},"Normalized data"),(0,s.kt)("p",null,"If you need some raw normalized data, we also have you covered in our normalize.json file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example of normalized data" showLineNumbers',title:'"Example',of:!0,normalized:!0,'data"':!0,showLineNumbers:!0},'{\n  "groupItems": ["default", "action", "danger", "info", "success", "warning"],\n  "groups": {\n    "action": {\n      "psActionBackground": {\n        "id": "psActionBackground",\n        "cssName": "--ps-action-background",\n        "sassName": "$ps-action-background",\n        "jsName": "psActionBackground",\n        "value": "#4A33D1"\n      }\n    },\n    ...\n  }\n}\n')),(0,s.kt)("p",null,"To use, import it into your project via a bundler that supports JSON:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import tokenData from '@pluralsight/design-tokens/meta/normalize.json'\n")),(0,s.kt)("h3",{id:"mobile"},"Mobile"),(0,s.kt)("p",null,"We offer both android and iOS solutions for mobile platforms. All mobile tokens can be found in our Github repo ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/tree/main/packages/design-tokens/build-mobile"},"mobile tokens location"),"."),(0,s.kt)("h4",{id:"android"},"Android"),(0,s.kt)("p",null,"For Android, we ship the tokens as ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/tree/main/packages/design-tokens/build-mobile/compose"},"Compose colors"),"."),(0,s.kt)("h4",{id:"ios--swift"},"iOS / Swift"),(0,s.kt)("p",null,"We support iOS platforms via an ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/tree/main/packages/design-tokens/build-mobile/iOS/Assets.xcassets"},"Asset Catalog"),"."))}d.isMDXComponent=!0}}]);