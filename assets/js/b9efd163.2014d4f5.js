"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4029],{81509:(e,t,l)=>{l.d(t,{dS:()=>o,fK:()=>r,C9:()=>m,ZP:()=>p});var n=l(70079),a=l(88660);const i={linkList:"linkList_sLwJ",linkItem:"linkItem_ESvF"};function s(e){return n.createElement("li",{className:i.linkItem},n.createElement(a.Z,e,e.children))}function r(e){return n.createElement(s,{href:e.href},e.children??"View on Github")}function o(e){return n.createElement(s,{href:e.href},"View on Figma")}function m(e){return n.createElement("ul",{className:i.linkList},e.children)}function p(e){const{figma:t,github:l}=e;return n.createElement("ul",{className:i.linkList},l&&n.createElement(r,{href:l}),t&&n.createElement(o,{href:t}))}},66794:(e,t,l)=>{l(70079)},88660:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(70079),a=l(60047),i=l(26078),s=l(20394),r=l(32042);function o(e){const{href:t}=e,l=(0,i.L)({ariaHidden:!0,size:"s"}),o=t.includes("github")?s.Z:r.Z;return n.createElement(a.TextLink,e,n.createElement(o,l),e.children)}},97897:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=l(3262),a=(l(70079),l(38570)),i=l(81509);l(66794);const s={tags:["layout","spacing"],title:"Flex"},r=void 0,o={unversionedId:"reference/components/flex",id:"reference/components/flex",title:"Flex",description:"Used to manage layout placement via Flexbox properties.",source:"@site/docs/reference/components/flex.mdx",sourceDirName:"reference/components",slug:"/reference/components/flex",permalink:"/docs/reference/components/flex",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/flex.mdx",tags:[{label:"layout",permalink:"/docs/tags/layout"},{label:"spacing",permalink:"/docs/tags/spacing"}],version:"current",lastUpdatedBy:"Kathy Lavoie",frontMatter:{tags:["layout","spacing"],title:"Flex"},sidebar:"reference",previous:{title:"Fieldset",permalink:"/docs/reference/components/fieldset"},next:{title:"For",permalink:"/docs/reference/components/for"}},m={},p=[{value:"Anatomy",id:"anatomy",level:2},{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected Flex",id:"3-ejected-flex",level:4},{value:"Behavior",id:"behavior",level:2},{value:"API",id:"api",level:2},{value:"<code>Flex</code>",id:"flex",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>FlexItem</code>",id:"flexitem",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Accessibility",id:"accessibility",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used to manage layout placement via Flexbox properties."),(0,a.kt)(i.C9,{mdxType:"DocsLinkList"},(0,a.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Flex.tsx",mdxType:"DocsGithubLink"}),(0,a.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Flex/flexCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,a.kt)(i.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Flex Container"),(0,a.kt)("li",{parentName:"ol"},"Flex Item")),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Flex, FlexItem } from '@pluralsight/react'\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-example"},"Basic Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicExample() {\n  const itemStyles = {\n    backgroundColor: \'var(--ps-surface-medium)\',\n    height: \'9rem\',\n  }\n  return (\n    <Flex align="center" justify="space-evenly">\n      <FlexItem grow="1" style={itemStyles}>\n        One\n      </FlexItem>\n      <FlexItem grow="1" style={itemStyles}>\n        Two\n      </FlexItem>\n      <FlexItem grow="1" style={itemStyles}>\n        Three\n      </FlexItem>\n    </Flex>\n  )\n}\n')),(0,a.kt)("h3",{id:"customizing"},"Customizing"),(0,a.kt)("p",null,"There are 3 ways to customize the Flex components."),(0,a.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,a.kt)("p",null,"Each component layer of the Flex family has a unused class name that can be utilized in your local CSS to customize the Flex components at any level."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"pando-flex"),": The element of the Flex."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"pando-flex-item"),": The element of the FlexItem.")),(0,a.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,a.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,a.kt)("p",null,"You can pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," prop to the Flex components to customize Flex. This is useful if your project uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,a.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize Flex." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,'Flex."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomFlex(props) {\n  return (\n    <Flex className={customStyles.custom}>\n      <FlexItem className={customStyles.customItem}>One</FlexItem>\n    </Flex>\n  )\n}\n")),(0,a.kt)("h4",{id:"3-ejected-flex"},"3. Ejected Flex"),(0,a.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Flex however you prefer while keeping the accessibility behavior.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import { getFlexProps, getFlexItemProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Flex/flexCSS.ts"},"Headless-styles documentation"),"."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("p",null,"There are no behavior patterns required for Flex."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"flex"},(0,a.kt)("inlineCode",{parentName:"h3"},"Flex")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FlexOptions extends HTMLAttributes<HTMLDivElement> {\n  align?: CSS.Property.AlignItems\n  direction?: FlexDirection\n  justify?: CSS.Property.JustifyContent\n  gap?: number\n  wrap?: CSS.Property.FlexWrap\n}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"align"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"align-items")," property of the Flex."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"direction"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"flex-direction")," property of the Flex."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"justify"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"justify-content")," property of the Flex."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"gap"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"gap")," property of the Flex."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"wrap"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"flex-wrap")," property of the Flex.")),(0,a.kt)("h3",{id:"flexitem"},(0,a.kt)("inlineCode",{parentName:"h3"},"FlexItem")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FlexItemOptions extends HTMLAttributes<HTMLDivElement> {\n  basis?: CSS.Property.FlexBasis\n  grow?: CSS.Property.FlexGrow\n  shrink?: CSS.Property.FlexShrink\n}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"basis"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"flex-basis")," property of the FlexItem."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"grow"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"flex-grow")," property of the FlexItem."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"shrink"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"flex-shrink")," property of the FlexItem.")),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,"The Pando Flex APIs allow the Badge to be fully accessible and screen-readable by default."))}d.isMDXComponent=!0}}]);