"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3559],{81509:(e,t,n)=>{n.d(t,{dS:()=>s,fK:()=>o,C9:()=>c,ZP:()=>m});var a=n(70079),l=n(88660);const i={linkList:"linkList_sLwJ",linkItem:"linkItem_ESvF"};function r(e){return a.createElement("li",{className:i.linkItem},a.createElement(l.Z,e,e.children))}function o(e){return a.createElement(r,{href:e.href},e.children??"View on Github")}function s(e){return a.createElement(r,{href:e.href},"View on Figma")}function c(e){return a.createElement("ul",{className:i.linkList},e.children)}function m(e){const{figma:t,github:n}=e;return a.createElement("ul",{className:i.linkList},n&&a.createElement(o,{href:n}),t&&a.createElement(s,{href:t}))}},66794:(e,t,n)=>{n(70079)},88660:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(70079),l=n(60047),i=n(26078),r=n(20394),o=n(32042);function s(e){const{href:t}=e,n=(0,i.L)({ariaHidden:!0,size:"s"}),s=t.includes("github")?r.Z:o.Z;return a.createElement(l.TextLink,e,a.createElement(s,n),e.children)}},69076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=n(3262),l=(n(70079),n(38570)),i=n(81509);n(66794);const r={tags:["logical components","toggle ui"],title:"For"},o=void 0,s={unversionedId:"reference/components/for",id:"reference/components/for",title:"For",description:"Used to render elements from a list and optionally show a fallback when the",source:"@site/docs/reference/components/for.mdx",sourceDirName:"reference/components",slug:"/reference/components/for",permalink:"/docs/reference/components/for",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/for.mdx",tags:[{label:"logical components",permalink:"/docs/tags/logical-components"},{label:"toggle ui",permalink:"/docs/tags/toggle-ui"}],version:"current",lastUpdatedBy:"Kathy Lavoie",frontMatter:{tags:["logical components","toggle ui"],title:"For"},sidebar:"reference",previous:{title:"Flex",permalink:"/docs/reference/components/flex"},next:{title:"Form Control",permalink:"/docs/reference/components/form-control"}},c={},m=[{value:"Anatomy",id:"anatomy",level:2},{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic",id:"basic",level:3},{value:"Displaying a fallback",id:"displaying-a-fallback",level:3},{value:"Behavior",id:"behavior",level:2},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Accessibility",id:"accessibility",level:2}],d={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"size-xxl"},"Used to render elements from a list and optionally show a fallback when the list is empty."),(0,l.kt)(i.C9,{mdxType:"DocsLinkList"},(0,l.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/For.tsx",mdxType:"DocsGithubLink"})),(0,l.kt)("h2",{id:"anatomy"},"Anatomy"),(0,l.kt)("p",null,"This component is a utility and does not render any DOM elements."),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { For, type ForProps } from '@pluralsight/react'\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"basic"},"Basic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicExample() {\n  const items = ['one', 'two', 'three']\n\n  return (\n    <For each={items}>\n      {(item, index) => (\n        <div key={index}>\n          {item} ({index})\n        </div>\n      )}\n    </For>\n  )\n}\n")),(0,l.kt)("h3",{id:"displaying-a-fallback"},"Displaying a fallback"),(0,l.kt)("p",null,"To display a fallback when the list is empty, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"fallback")," prop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicExample() {\n  const data = useMemo(() => [\'one\', \'two\', \'three\'], [])\n  const [items, setItems] = useState(() => data)\n\n  function handleClear() {\n    setItems([])\n  }\n\n  function handleReset() {\n    setItems((prev) => [...data])\n  }\n\n  return (\n    <Flex align="center" justify="space-evenly">\n      <Flex align="center" justify="center" gap={8}>\n        <For\n          each={items}\n          fallback={<p data-site-override="clearMargin">No items</p>}\n        >\n          {(item, index) => (\n            <div key={index}>\n              {item} ({index})\n            </div>\n          )}\n        </For>\n      </Flex>\n\n      <Flex align="center" gap={16}>\n        <Button sentiment="default" usage="outline" onClick={handleClear}>\n          Clear\n        </Button>\n        <Button onClick={handleReset}>Reset</Button>\n      </Flex>\n    </Flex>\n  )\n}\n')),(0,l.kt)("h2",{id:"behavior"},"Behavior"),(0,l.kt)("p",null,"There are no behaviors associated with this component."),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ForProps<T, U extends JSX.Element> {\n  each: readonly T[]\n  fallback?: NonNullable<ReactNode> | null\n  children: (item: T, index: number) => U\n}\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"each"),": A boolean value to determine whether to render the children or the fallback."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"fallback"),": A ReactNode to render when ",(0,l.kt)("inlineCode",{parentName:"li"},"each")," is falsey."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"children"),": A function that returns a JSX.Element to render for each item in the list via a ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"map callback"),".")),(0,l.kt)("h2",{id:"accessibility"},"Accessibility"),(0,l.kt)("p",null,"There is no special accessibility considerations for this component."))}u.isMDXComponent=!0}}]);