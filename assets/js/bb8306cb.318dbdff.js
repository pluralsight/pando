"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[996],{15566:function(e,t,n){n.d(t,{dS:function(){return c},fK:function(){return o},C9:function(){return u},ZP:function(){return p}});var a=n(45721),i=n(84140),s="linkList_sLwJ",r="linkItem_ESvF";function l(e){return a.createElement("li",{className:r},a.createElement(i.Z,e,e.children))}function o(e){return a.createElement(l,{href:e.href},e.children??"View on Github")}function c(e){return a.createElement(l,{href:e.href},"View on Figma")}function u(e){return a.createElement("ul",{className:s},e.children)}function p(e){const{figma:t,github:n}=e;return a.createElement("ul",{className:s},n&&a.createElement(o,{href:n}),t&&a.createElement(c,{href:t}))}},45945:function(e,t,n){n(45721)},84140:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(45721),i=n(92876),s=n(43838),r=n(65805),l=n(5381);function o(e){const{href:t}=e,n=(0,s.L)({ariaHidden:!0,size:"s"}),o=t.includes("github")?r.Z:l.Z;return a.createElement(i.TextLink,e,a.createElement(o,n),e.children)}},78265:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return u}});var a=n(81648),i=(n(45721),n(70167)),s=n(15566);n(45945);const r={tags:["breadcrumb","text button","link"],title:"Text Link"},l=void 0,o={unversionedId:"reference/components/text-link",id:"reference/components/text-link",title:"Text Link",description:"Used to navigate the user to a new page.",source:"@site/docs/reference/components/text-link.mdx",sourceDirName:"reference/components",slug:"/reference/components/text-link",permalink:"/docs/reference/components/text-link",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/text-link.mdx",tags:[{label:"breadcrumb",permalink:"/docs/tags/breadcrumb"},{label:"text button",permalink:"/docs/tags/text-button"},{label:"link",permalink:"/docs/tags/link"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["breadcrumb","text button","link"],title:"Text Link"},sidebar:"reference",previous:{title:"Textarea",permalink:"/docs/reference/components/text-area"},next:{title:"Toast",permalink:"/docs/reference/components/toast"}},c={},u=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Links",id:"basic-links",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected TextLink",id:"3-ejected-textlink",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Usage",id:"usage-1",level:3},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Accessibility",id:"accessibility",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"size-xxl"},"Used to navigate the user to a new page."),(0,i.kt)(s.C9,{mdxType:"DocsLinkList"},(0,i.kt)(s.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/TextLink.tsx",mdxType:"DocsGithubLink"}),(0,i.kt)(s.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/TextLink/textLinkCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,i.kt)(s.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { TextLink } from '@pluralsight/react'\n")),(0,i.kt)("h2",{id:"anatomy"},"Anatomy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Link"),(0,i.kt)("li",{parentName:"ol"},"External Icon (optional)")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"basic-links"},"Basic Links"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicTextLinks() {\n  return (\n    <Grid cols="repeat(2, 1fr)" gap={8} data-site-override="alignGridCenter">\n      <GridItem>\n        <TextLink href="/">Local Text Link</TextLink>\n      </GridItem>\n\n      <GridItem>\n        <TextLink href="https://github.com/pluralsight/pando">\n          External Text Link\n        </TextLink>\n      </GridItem>\n    </Grid>\n  )\n}\n')),(0,i.kt)("h3",{id:"customizing"},"Customizing"),(0,i.kt)("p",null,"There are 3 ways to customize the TextLink component."),(0,i.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,i.kt)("p",null,"Each component layer of the TextLink has a unused class name that can be utilized in your local CSS to customize the TextLink at any level."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pando-text-link"),": The element of the TextLink.")),(0,i.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,i.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,i.kt)("p",null,"You can pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," prop to the TextLink component to customize the TextLink. This is useful if your project uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,i.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the TextLink." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'TextLink."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomTextLink(props) {\n  return <TextLink className={customStyles.link}>{props.children}</TextLink>\n}\n")),(0,i.kt)("h4",{id:"3-ejected-textlink"},"3. Ejected TextLink"),(0,i.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the TextLink however you prefer while keeping the accessibility behavior.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import { getTextLinkProps } from '@pluralsight/headless-styles'\n")),(0,i.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/TextLink/textLinkCSS.ts"},"Headless-styles documentation"),"."),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the Text Link when you need to provide a way to navigate to a different page."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use a Button to navigate the user to a different page."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the ExternalLink Icon when you have a link that will navigate the user outside of your application/site."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," eliminate the ExternalLink Icon ",(0,i.kt)("em",{parentName:"p"},"unless")," the link uses a local path."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Any property that can be passed to an HTML ",(0,i.kt)("inlineCode",{parentName:"li"},"<a>")," element.")),(0,i.kt)("h2",{id:"accessibility"},"Accessibility"),(0,i.kt)("p",null,"The Pando TextLink, and Icon APIs combined with semantic HTML allow the TextLink to be fully accessible and screen-readable by default."),(0,i.kt)("p",null,"For external links, the ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),' attribute is set to "',"_",'blank" and the ',(0,i.kt)("inlineCode",{parentName:"p"},"rel"),' attribute is set to "noopener noreferrer" to prevent tab-nabbing.'))}m.isMDXComponent=!0}}]);