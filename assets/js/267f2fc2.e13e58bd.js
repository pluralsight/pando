"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5185],{80322:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(70079);const a={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"},o={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function i(e){void 0===e&&(e=o);const t=e.type??o.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",i={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return l.createElement("div",{className:a[t],style:i},e.children)}},81509:(e,t,n)=>{n.d(t,{dS:()=>s,fK:()=>r,C9:()=>m,ZP:()=>c});var l=n(70079),a=n(88660);const o={linkList:"linkList_sLwJ",linkItem:"linkItem_ESvF"};function i(e){return l.createElement("li",{className:o.linkItem},l.createElement(a.Z,e,e.children))}function r(e){return l.createElement(i,{href:e.href},e.children??"View on Github")}function s(e){return l.createElement(i,{href:e.href},"View on Figma")}function m(e){return l.createElement("ul",{className:o.linkList},e.children)}function c(e){const{figma:t,github:n}=e;return l.createElement("ul",{className:o.linkList},n&&l.createElement(r,{href:n}),t&&l.createElement(s,{href:t}))}},66794:(e,t,n)=>{n(70079)},88660:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(70079),a=n(60047),o=n(26078),i=n(20394),r=n(32042);function s(e){const{href:t}=e,n=(0,o.L)({ariaHidden:!0,size:"s"}),s=t.includes("github")?i.Z:r.Z;return l.createElement(a.TextLink,e,l.createElement(s,n),e.children)}},17313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>g,toc:()=>u});var l=n(3262),a=n(70079),o=n(38570),i=n(81509),r=n(60047),s=n(80322);const m=function(){const[e,t]=(0,a.useState)(!1);return a.createElement(s.Z,null,a.createElement(r.Grid,{cols:"1fr 1fr",gap:8,style:{textAlign:"left"}},a.createElement(r.GridItem,null,a.createElement(r.FormControlProvider,{readOnly:!0},a.createElement(r.Toggle,null,a.createElement(r.ToggleButton,{id:"checked-example",checked:!0}),a.createElement(r.Label,{htmlFor:"checked-example"},"Checked")))),a.createElement(r.GridItem,null,a.createElement(r.FormControlProvider,{readOnly:!0,disabled:!0},a.createElement(r.Toggle,null,a.createElement(r.ToggleButton,{id:"disabled-example"}),a.createElement(r.Label,{htmlFor:"disabled-example"},"Disabled")))),a.createElement(r.GridItem,null,a.createElement(r.FormControlProvider,{readOnly:!0,invalid:!0},a.createElement(r.Toggle,null,a.createElement(r.ToggleButton,{id:"invalid-example"}),a.createElement(r.Label,{htmlFor:"invalid-example"},"Invalid")))),a.createElement(r.GridItem,null,a.createElement(r.FormControlProvider,{readOnly:!0},a.createElement(r.Toggle,null,a.createElement(r.ToggleButton,{id:"readOnly-example"}),a.createElement(r.Label,{htmlFor:"readOnly-example"},"Read only")))),a.createElement(r.GridItem,null,a.createElement(r.FormControlProvider,{readOnly:!0,required:!0},a.createElement(r.Toggle,null,a.createElement(r.ToggleButton,{id:"required-example",checked:e,onClick:function(e){t(e.target.checked)}}),a.createElement(r.Label,{htmlFor:"required-example"},"Required"))))))};n(66794);const c={tags:["switch input","single-select","field","form"],title:"Toggle"},p=void 0,g={unversionedId:"reference/components/toggle",id:"reference/components/toggle",title:"Toggle",description:"Used as an alternative to the Checkbox for choosing between enabled and",source:"@site/docs/reference/components/toggle.mdx",sourceDirName:"reference/components",slug:"/reference/components/toggle",permalink:"/docs/reference/components/toggle",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/toggle.mdx",tags:[{label:"switch input",permalink:"/docs/tags/switch-input"},{label:"single-select",permalink:"/docs/tags/single-select"},{label:"field",permalink:"/docs/tags/field"},{label:"form",permalink:"/docs/tags/form"}],version:"current",lastUpdatedBy:"Kathy Lavoie",frontMatter:{tags:["switch input","single-select","field","form"],title:"Toggle"},sidebar:"reference",previous:{title:"Toast",permalink:"/docs/reference/components/toast"},next:{title:"Tooltip",permalink:"/docs/reference/components/tooltip"}},d={},u=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Toggle",id:"basic-toggle",level:3},{value:"Sizes",id:"sizes",level:3},{value:"States",id:"states",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected Toggle",id:"3-ejected-toggle",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"API",id:"api",level:2},{value:"<code>Toggle: FC&lt;ToggleProps&gt;</code>",id:"toggle-fctoggleprops",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>ToggleButton: FC&lt;ToggleButtonProps&gt;</code>",id:"togglebutton-fctogglebuttonprops",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Size Mapping",id:"size-mapping",level:3},{value:"Accessibility",id:"accessibility",level:2}],h={toc:u},k="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,l.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"size-xxl"},"Used as an alternative to the Checkbox for choosing between enabled and disabled states."),(0,o.kt)(i.C9,{mdxType:"DocsLinkList"},(0,o.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Toggle.tsx",mdxType:"DocsGithubLink"}),(0,o.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Switch/switchCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,o.kt)(i.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Toggle, ToggleButton } from '@pluralsight/react'\n")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Wrapper"),(0,o.kt)("li",{parentName:"ol"},"Label (optional)"),(0,o.kt)("li",{parentName:"ol"},"Container"),(0,o.kt)("li",{parentName:"ol"},"Input"),(0,o.kt)("li",{parentName:"ol"},"Track"),(0,o.kt)("li",{parentName:"ol"},"Thumb"),(0,o.kt)("li",{parentName:"ol"},"Label (optional)")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"basic-toggle"},"Basic Toggle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicToggle() {\n  const [checked, setChecked] = useState(false)\n\n  function handleChange(e) {\n    setChecked(e.target.checked)\n  }\n\n  return (\n    <FormControlProvider>\n      <Toggle>\n        <Label htmlFor="notifications">Sign up for notifications</Label>\n        <ToggleButton\n          checked={checked}\n          id="notifications"\n          name="notifications"\n          onChange={handleChange}\n        />\n      </Toggle>\n    </FormControlProvider>\n  )\n}\n')),(0,o.kt)("h3",{id:"sizes"},"Sizes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function ToggleSizes() {\n  const [checked, setChecked] = useState(false)\n\n  function handleChange(e) {\n    setChecked(e.target.checked)\n  }\n\n  return (\n    <form>\n      <FormControlProvider>\n        <Toggle>\n          <Label htmlFor="medium">Medium size</Label>\n          <ToggleButton\n            checked={checked}\n            id="medium"\n            name="medium"\n            onChange={handleChange}\n            pandoSize="m"\n          />\n        </Toggle>\n      </FormControlProvider>\n\n      <br />\n\n      <FormControlProvider>\n        <Toggle>\n          <ToggleButton\n            checked={checked}\n            id="small"\n            name="small"\n            onChange={handleChange}\n            pandoSize="s"\n          />\n          <Label htmlFor="small">Small size</Label>\n        </Toggle>\n      </FormControlProvider>\n    </form>\n  )\n}\n')),(0,o.kt)("h3",{id:"states"},"States"),(0,o.kt)(m,{mdxType:"SwitchStates"}),(0,o.kt)("h3",{id:"customizing"},"Customizing"),(0,o.kt)("p",null,"There are 3 ways to customize the Toggle component."),(0,o.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,o.kt)("p",null,"Each component layer of the Toggle has a unused class name that can be utilized in your local CSS to customize the Toggle at any level."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-toggle-container"),": The container element of the Toggle."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-toggle-input"),": The input element of the Toggle."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-toggle-control"),": The control element of the Toggle."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-toggle-track"),": The track element of the Toggle."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-toggle-thumb"),": The thumb element of the Toggle."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-toggle-wrapper"),": The wrapper element of the Toggle")),(0,o.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,o.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,o.kt)("p",null,"You can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," prop to the Toggle component to customize the Toggle. This is useful if your project uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,o.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the Toggle." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'Toggle."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomToggle(props) {\n  return <Toggle className={customStyles.custom} {...props} />\n}\n\nfunction CustomToggleButton(props) {\n  return <ToggleButton className={customStyles.custom} {...props} />\n}\n")),(0,o.kt)("h4",{id:"3-ejected-toggle"},"3. Ejected Toggle"),(0,o.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Toggle however you prefer while keeping the accessibility behavior.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import {\n  getSwitchProps,\n  getSwitchWrapperProps,\n} from '@pluralsight/headless-styles'\n")),(0,o.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Switch/switchCSS.ts"},"Headless-styles documentation"),"."),(0,o.kt)("h2",{id:"behavior"},"Behavior"),(0,o.kt)("h3",{id:"layout"},"Layout"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use multiple Toggles in a vertical list."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use multiple Toggles in a single row."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," provide a Label with a Toggle."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use a Toggle inline without a Label. Instead use a hidden Label."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use a Toggle for giving users an way to opt-in to an optional feature."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use a Toggle for collecting consent. Instead us a ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/components/checkbox"},"Checkbox"),"."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"toggle-fctoggleprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"Toggle: FC<ToggleProps>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type ToggleProps = HTMLAttributes<HTMLDivElement>\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Any props that can be passed to a ",(0,o.kt)("inlineCode",{parentName:"li"},"div")," element.")),(0,o.kt)("h3",{id:"togglebutton-fctogglebuttonprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"ToggleButton: FC<ToggleButtonProps>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ToggleButtonProps extends InputHTMLAttributes<HTMLInputElement> {\n  checked: boolean\n  id: string\n  name: string\n  pandoSize?: 's' | 'm'\n}\n")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Any props that can be passed to an ",(0,o.kt)("inlineCode",{parentName:"li"},"input")," element."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"checked"),": Whether the Toggle is checked or not."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"id"),": The id of the Toggle."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": The name of the Toggle."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pandoSize"),": The size of the Toggle.")),(0,o.kt)("h3",{id:"size-mapping"},"Size Mapping"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Toggle size rules."',title:'"Toggle',size:!0,'rules."':!0},"{\n  s: 'Use in condensed areas where the default size is too large.',\n  m: 'Should be used in most, if not all cases.'\n}\n")),(0,o.kt)("h2",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"The Pando Toggle is fully accessible and screen-readable through the following features:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-invalid")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," when the input is invalid."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-describedby")," attribute is set to the ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," of the FieldMessage or ErrorMessage that describes the input."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-required")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," when the input is required."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-disabled")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," when the input is disabled."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-checked")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," when the input is checked."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-checked")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"mixed")," when the input is indeterminate."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-hidden")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," on the input control and icon to hide it from screen readers.")))}f.isMDXComponent=!0}}]);