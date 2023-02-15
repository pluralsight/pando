"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61825],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9952:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),o=n(88795),r="tabItem_U_pG";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},8157:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(81648),o=n(45721),r=n(88795),l=n(79106),s=n(39977),i=n(5548),u=n(24734);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function c(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,p]=d({queryString:n,groupId:a}),[h,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=i??h;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),y(e)}),[p,y,r]),tabValues:r}}var y=n(93046),g=n(99941),f="tabList_ZP7c",b="tabItem_qNjf";function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,y.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},s,{className:(0,r.Z)("tabs__item",b,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f)},o.createElement(k,(0,a.Z)({},e,t)),o.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},69312:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(81648),o=(n(45721),n(70167)),r=n(8157),l=n(9952);const s={tags:["PSDS Classic"],title:"Migration"},i=void 0,u={unversionedId:"development/getting-started/migration",id:"version-0.3.1-beta/development/getting-started/migration",title:"Migration",description:"Learn how to migrate from PSDS Classic.",source:"@site/versioned_docs/version-0.3.1-beta/development/getting-started/migration.md",sourceDirName:"development/getting-started",slug:"/development/getting-started/migration",permalink:"/docs/development/getting-started/migration",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.3.1-beta/development/getting-started/migration.md",tags:[{label:"PSDS Classic",permalink:"/docs/tags/psds-classic"}],version:"0.3.1-beta",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["PSDS Classic"],title:"Migration"},sidebar:"development",previous:{title:"Support",permalink:"/docs/development/getting-started/support"},next:{title:"Intro",permalink:"/docs/development/tokens/intro"}},p={},c=[{value:"Why should you migrate?",id:"why-should-you-migrate",level:2},{value:"Step by step",id:"step-by-step",level:2},{value:"Step 0 - Add the setup",id:"step-0---add-the-setup",level:3},{value:"Step 1 - Installation",id:"step-1---installation",level:3},{value:"Step 2 - Create",id:"step-2---create",level:3},{value:"Example 1 - Traditional way",id:"example-1---traditional-way",level:4},{value:"Example 2 - Style caching",id:"example-2---style-caching",level:4},{value:"Example 3, CSS-in-JS",id:"example-3-css-in-js",level:4},{value:"Step 3 - Rinse and repeat",id:"step-3---rinse-and-repeat",level:3},{value:"Advanced Topics",id:"advanced-topics",level:2},{value:"Themeing",id:"themeing",level:3},{value:"Migrate slowly",id:"migrate-slowly",level:3},{value:"Sprint 1",id:"sprint-1",level:4},{value:"Sprint 2",id:"sprint-2",level:4},{value:"Sprint 3 (Tech-debt week)",id:"sprint-3-tech-debt-week",level:4},{value:"You do you",id:"you-do-you",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("strong",null,(0,o.kt)("p",{className:"page-subheadline",markdown:"1"},"Learn how to migrate from ",(0,o.kt)("a",{href:"https://github.com/pluralsight/design-system",target:"_blank",rel:"noopener noreferrer"},"PSDS Classic"),".")),(0,o.kt)("p",null,"Any major release or new framework has its breaking changes and PD isn't an exception. However, since this is a completely different design it should be easy to transition on your own terms\u2014no matter the size or complexity of your project. To make this process more efficient, we've listed the recommended migration steps, along with solutions for the most common problems you might face."),(0,o.kt)("h2",{id:"why-should-you-migrate"},"Why should you migrate?"),(0,o.kt)("p",null,"In a few words, upgrading to PD is critical to a fast and stable UI experience. Numerous bugs are naturally fixed since Classic, and we no longer expect to build new features in it. ",(0,o.kt)("strong",{parentName:"p"},"Even if you don't plan to use the entire PD suite"),", your projects will still get benefits from the upgrade."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Small style helpers (Button, etc.) will provide an improved experience to both your projects and customer experiences"),(0,o.kt)("li",{parentName:"ul"},"A renewed focus on accessbility, performance, and best practices"),(0,o.kt)("li",{parentName:"ul"},"Improved user experience for various projects (scalable APIs)"),(0,o.kt)("li",{parentName:"ul"},"New capabilities (can work with any tech stack, so you can pivot easier)")),(0,o.kt)("p",null,"... And of course a very active and safe development cycle."),(0,o.kt)("h2",{id:"step-by-step"},"Step by step"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Don't worry if your team or project isn't quite ready for the full PD takeover just yet! This guide will let you migrate ",(0,o.kt)("strong",{parentName:"p"},"without introducing breaking changes"),".")),(0,o.kt)("p",null,"The biggest benefit of PD is that it ",(0,o.kt)("em",{parentName:"p"},"only owns styles and accessbility")," and ",(0,o.kt)("em",{parentName:"p"},"is not a component library")," which means you can scale or customize to whatever your situation/features may require."),(0,o.kt)("p",null,"Below we'll look at migrating the Button component, which will be the same pattern you can use for all the PD use cases."),(0,o.kt)("h3",{id:"step-0---add-the-setup"},"Step 0 - Add the setup"),(0,o.kt)("p",null,"To make sure we get the intended visual result of Headless Styles, replace the Classic font/normalize with our ",(0,o.kt)("strong",{parentName:"p"},"new")," font and normalize setup in your project HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"head"),":"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Both the fonts and normalize.css for v2 contain different rules and styles which may cause temporary visual breaking changes to the UI. Don't be alarmed, the migration path will resolve it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Add the new required CSS setup" showLineNumbers',title:'"Add',the:!0,new:!0,required:!0,CSS:!0,'setup"':!0,showLineNumbers:!0},'<meta name="viewport" content="initial-scale=1, width=device-width" />\n<link\n  rel="preload"\n  href="https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2"\n  as="font"\n  type="font/woff2"\n  crossorigin\n/>\n<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@0.3.1/fonts.css"\n/>\n<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@0.3.1/npm/normalize/normalize.css"\n/>\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Don't forget to remove the old font and normalize imports in your code base or bundlers if they exist.")),(0,o.kt)("h3",{id:"step-1---installation"},"Step 1 - Installation"),(0,o.kt)("p",null,"In order to use PD, we need to get it into your project first. For most projects, you will only need to install the headless-styles and icons packages."),(0,o.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/{headless-styles,icons}\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/{headless-styles,icons}\n")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are a React user, we also provide a helper library that contains some custom hooks to enhance the user and developer experience: ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/react-utils/use-auto-format-date"},"React Utils Library"),".")),(0,o.kt)("p",null,"All of our packages are lightweight because they don't rely on a laundry list of dependencies to install, so you don't have to worry about adding additional overhead to your bundle size."),(0,o.kt)("h3",{id:"step-2---create"},"Step 2 - Create"),(0,o.kt)("p",null,"Since Headless Styles is not a component library, you will create a new Button component in your project. This will allow you to have full control of your implementation while PD provides the styles and accessibility needs."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It is considered a React/Component best practice to create components with a ",(0,o.kt)("strong",{parentName:"p"},"single responsibility"),'. An example would be to create an "EditButton" or "CancelButton." This helps to create a component which ',(0,o.kt)("strong",{parentName:"p"},"by nature will have less risk of bugs and code impact."))),(0,o.kt)("h4",{id:"example-1---traditional-way"},"Example 1 - Traditional way"),(0,o.kt)("p",null,"In this example, we are creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelButton")," for your project by creating a new CancelButton component using Typescript."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="components/Buttons/CancelButton.tsx" showLineNumbers',title:'"components/Buttons/CancelButton.tsx"',showLineNumbers:!0},"import { memo } from 'react'\nimport { getButtonProps } from '@pluralsight/headless-styles'\nimport type { ButtonOptions } from '@pluralsight/headless-styles/types'\n\nconst cancelBtnProps = getButtonProps({\n  sentiment: 'danger',\n})\n\nfunction CancelButton(props: ButtonOptions) {\n  return (\n    <button {...props} {...cancelBtnProps.button}>\n      Cancel\n    </button>\n  )\n}\n\nexport default memo(CancelButton)\n")),(0,o.kt)("p",null,"Let's break down what this example is doing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The component is only responsible for a single responsibility: displaying a Cancel Button"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udca1 Keeping non-required logic outside of the component improves performance"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udca1 Because this custom component will accept props that are outside of the ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive"},"Primitive Types"),", wrapping it in ",(0,o.kt)("inlineCode",{parentName:"li"},"memo")," will improve performance.")),(0,o.kt)("p",null,"Now, you can migrate all the Buttons in your app that are used for cancel actions. \ud83c\udf89"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:"showLineNumbers",showLineNumbers:!0},"- import { Button } from '@pluralsight/design-system-button';\n+ import CancelButton from './components/Buttons/CancelButton';\n\nfunction SomeForm(props) {\n  return (\n    <form>\n      ...\n-     <Button appearance={Button.appearances.secondary} onClick={handleClick}>Cancel</Button>\n+     <CancelButton type=\"button\" onClick={handleClick} />\n    </form>\n  )\n}\n")),(0,o.kt)("p",null,"But, there's another option that will allow even less work:"),(0,o.kt)("h4",{id:"example-2---style-caching"},"Example 2 - Style caching"),(0,o.kt)("p",null,"Since a button is a simple component, there's really no need to create a custom component for display. Instead, we can cache the style props we receive from the Headless Styles helper and just reuse those."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="styles/buttons.js" showLineNumbers',title:'"styles/buttons.js"',showLineNumbers:!0},"import { getButtonProps } from '@pluralsight/headless-styles'\n\nexport const dangerBtnStyles = getButtonProps({\n  sentiment: 'danger',\n})\n\nexport const actionBtnStyles = getButtonProps()\n\nexport const defaultBtnStyles = getButtonProps({\n  sentiment: 'default',\n})\n\nexport const outlineBtnStyles = getButtonProps({\n  usage: 'outline',\n})\n\nexport const textBtnStyles = getButtonProps({\n  usage: 'text',\n})\n")),(0,o.kt)("p",null,"With this approach, you can use the React JSX ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," and just spread the styles. Depending on your code base, this may be the most scalable approach."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:"showLineNumbers",showLineNumbers:!0},"- import { Button } from '@pluralsight/design-system-button';\n+ import { dangerBtnStyles } from './styles/buttons';\n\nfunction SomeForm(props) {\n  return (\n    <form>\n      ...\n-     <Button appearance={Button.appearances.secondary} onClick={handleClick}>Cancel</Button>\n+     <button {...dangerBtnStyles.button} type=\"button\" onClick={handleClick}>Cancel</button>\n    </form>\n  )\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you have a larger code base, combining these two approaches might allow for a better fit with long-term development. The flexibility is up to you! \ud83d\ude04")),(0,o.kt)("h4",{id:"example-3-css-in-js"},"Example 3, CSS-in-JS"),(0,o.kt)("p",null,"If you are a team that uses CSS-in-JS, you can just as easily use the same strategy above with your preferred tech stack. In this example, we'll use React with styled-components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="components/CancelButton.tsx" showLineNumbers',title:'"components/CancelButton.tsx"',showLineNumbers:!0},"import styled from 'styled-components'\nimport { getButtonProps } from '@pluralsight/headless-styles'\n\nconst CancelButton = styled.button`\n  ${getJSButtonProps({\n    sentiment: 'danger',\n  }).button.cssProps}\n`\n\nexport default CancelButton\n")),(0,o.kt)("p",null,"Here we are relying on ",(0,o.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components")," to create our Button component while Headless Styles manages the styles."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When combining Headless Styles with 3rd party libraries, you are not guaranteed a perfect accessbility score for your components since we don't own those code bases.")),(0,o.kt)("h3",{id:"step-3---rinse-and-repeat"},"Step 3 - Rinse and repeat"),(0,o.kt)("p",null,"Now that we have a few examples on how you can successfully migrate your application, find what works best for you and use that for all the components. Only your team knows which patterns scale the most for your specific projects."),(0,o.kt)("h2",{id:"advanced-topics"},"Advanced Topics"),(0,o.kt)("h3",{id:"themeing"},"Themeing"),(0,o.kt)("p",null,"Headless Styles delivers a multi-theme experience by default. To learn more about our default themes and how you can implement or customize them, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/tokens/colors#themes"},"Design Tokens Theme page"),"."),(0,o.kt)("h3",{id:"migrate-slowly"},"Migrate slowly"),(0,o.kt)("p",null,"At the end of the day, all migration is tech-debt. Don't overwhelm yourself or your team by approaching a mass migration unless you have to."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We recommend creating a new branch and if possible, slowly migrate each component when you are able to make time")," without forcing a Frankensteined Classic/v2 experience which will just cause more issues."),(0,o.kt)("p",null,"For example, here is a possible workflow within a real world scenario:"),(0,o.kt)("h4",{id:"sprint-1"},"Sprint 1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new branch to start migration (",(0,o.kt)("strong",{parentName:"li"},"feat/ds-migration"),")"),(0,o.kt)("li",{parentName:"ul"},"Some new Feature"),(0,o.kt)("li",{parentName:"ul"},"Bugfix")),(0,o.kt)("h4",{id:"sprint-2"},"Sprint 2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"feat/ds-migration"),", migrate Cancel Buttons"),(0,o.kt)("li",{parentName:"ul"},"Feature update"),(0,o.kt)("li",{parentName:"ul"},"Bugfix")),(0,o.kt)("h4",{id:"sprint-3-tech-debt-week"},"Sprint 3 (Tech-debt week)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"feat/ds-migration"),", fully migrate & merge into main branch")),(0,o.kt)("h3",{id:"you-do-you"},"You do you"),(0,o.kt)("p",null,"Every project is different and part of the biggest benefit of PD is the flexibility. All of our docs will provide examples for our packages but only ",(0,o.kt)("strong",{parentName:"p"},"your team")," knows what is best migration path for your project."),(0,o.kt)("p",null,"When your team is preparing for your migration, use our examples as that\u2014examples\u2014and do what makes the most sense in your project (for maintainability and scalability)."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Only use 3rd-party libraries with Headless Styles if you are ",(0,o.kt)("em",{parentName:"p"},"already using them"),". Adding an additional library to Headless Styles as a choice only creates more work for your team and doesn't guarantee a fully accessbile and performant UI (our native API does).")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'See something missing on this Migration page? Click the "Edit this page" link in the bottom left corner to submit a new PR with the updates you would like to see!')))}d.isMDXComponent=!0}}]);