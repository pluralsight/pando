"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9554],{81509:(e,t,n)=>{n.d(t,{dS:()=>r,fK:()=>l,C9:()=>c,ZP:()=>d});var i=n(70079),a=n(88660);const o={linkList:"linkList_sLwJ",linkItem:"linkItem_ESvF"};function s(e){return i.createElement("li",{className:o.linkItem},i.createElement(a.Z,e,e.children))}function l(e){return i.createElement(s,{href:e.href},e.children??"View on Github")}function r(e){return i.createElement(s,{href:e.href},"View on Figma")}function c(e){return i.createElement("ul",{className:o.linkList},e.children)}function d(e){const{figma:t,github:n}=e;return i.createElement("ul",{className:o.linkList},n&&i.createElement(l,{href:n}),t&&i.createElement(r,{href:t}))}},66794:(e,t,n)=>{n(70079)},88660:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(70079),a=n(60047),o=n(26078),s=n(20394),l=n(32042);function r(e){const{href:t}=e,n=(0,o.L)({ariaHidden:!0,size:"s"}),r=t.includes("github")?s.Z:l.Z;return i.createElement(a.TextLink,e,i.createElement(r,n),e.children)}},82690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(3262),a=(n(70079),n(38570)),o=n(81509);n(66794);const s={tags:[],title:"Icon"},l=void 0,r={unversionedId:"reference/components/icon",id:"reference/components/icon",title:"Icon",description:"Used to display Pando Icons.",source:"@site/docs/reference/components/icon.mdx",sourceDirName:"reference/components",slug:"/reference/components/icon",permalink:"/docs/reference/components/icon",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/icon.mdx",tags:[],version:"current",lastUpdatedBy:"Kathy Lavoie",frontMatter:{tags:[],title:"Icon"},sidebar:"reference",previous:{title:"Icon Button",permalink:"/docs/reference/components/icon-button"},next:{title:"Input",permalink:"/docs/reference/components/input"}},c={},d=[{value:"Anatomy",id:"anatomy",level:2},{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected Icon",id:"3-ejected-icon",level:4},{value:"Behavior",id:"behavior",level:2},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Accessibility",id:"accessibility",level:2}],m={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used to display Pando Icons."),(0,a.kt)(o.C9,{mdxType:"DocsLinkList"},(0,a.kt)(o.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Icon.tsx",mdxType:"DocsGithubLink"}),(0,a.kt)(o.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Icon/iconCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,a.kt)(o.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Container (optional)"),(0,a.kt)("li",{parentName:"ol"},"Icon")),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Icon } from '@pluralsight/react'\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function IconSizes() {\n  return (\n    <Grid cols="repeat(12, 1fr)" gap={8} data-site-override="alignGridCenter">\n      <GridItem>\n        <Icon icon={PlaceholderIcon} size="s" />\n      </GridItem>\n      <GridItem>\n        <Icon\n          ariaHidden={false}\n          ariaLabel="visible icon"\n          icon={PlaceholderIcon}\n          size="m"\n        />\n      </GridItem>\n      <GridItem>\n        <Icon icon={PlaceholderIcon} size="l" />\n      </GridItem>\n\n      <GridItem>\n        <Icon icon={PlaceholderIcon} customSize="5rem" />\n      </GridItem>\n    </Grid>\n  )\n}\n')),(0,a.kt)("h3",{id:"customizing"},"Customizing"),(0,a.kt)("p",null,"There are 3 ways to customize the Icon component."),(0,a.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,a.kt)("p",null,"Each component layer of the Icon has a unused class name that can be utilized in your local CSS to customize the Icon at any level."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"pando-icon"),": The element of the Icon.")),(0,a.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,a.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,a.kt)("p",null,"You can pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," prop to the Icon component to customize the Icon. This is useful if your project uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,a.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the Icon." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'Icon."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomIcon(props) {\n  return <Icon className={customStyles.custom}>{props.children}</Icon>\n}\n")),(0,a.kt)("h4",{id:"3-ejected-icon"},"3. Ejected Icon"),(0,a.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Icon however you prefer while keeping the accessibility behavior.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import { getIconProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Icon/iconCSS.ts"},"Headless-styles documentation"),"."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("p",null,"There are no behavior patterns required for the Icon."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IconProps extends SVGAttributes<SVGSVGElement> {\n  ariaHidden?: boolean\n  ariaLabel?: string // Required if ariaHidden is false\n  customSize?: string\n  size?: 's' | 'm' | 'l'\n}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Any prop that can be passed to an SVG element."),(0,a.kt)("li",{parentName:"ol"},"Ref is forwarded to a ",(0,a.kt)("inlineCode",{parentName:"li"},"span")," container element."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"ariaHidden")," is a boolean that determines whether the icon is hidden from screen readers. If ",(0,a.kt)("inlineCode",{parentName:"li"},"ariaHidden")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ariaLabel")," is required."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"ariaLabel")," is a string that is read by screen readers. It is required if ",(0,a.kt)("inlineCode",{parentName:"li"},"ariaHidden")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"customSize")," is a string that sets the width and height of the icon. It overrides the ",(0,a.kt)("inlineCode",{parentName:"li"},"size")," prop."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"size")," is a string that sets the width and height of the icon. It is overridden by the ",(0,a.kt)("inlineCode",{parentName:"li"},"customSize")," prop.")),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,"The Pando Icon is fully accessible and screen-readable through the following features:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"ariaHidden")," prop hides the icon from screen readers if set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"ariaLabel")," prop is required if ",(0,a.kt)("inlineCode",{parentName:"li"},"ariaHidden")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"role")," prop is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"img")," by default.")))}u.isMDXComponent=!0}}]);