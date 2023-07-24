"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6250],{15566:function(e,t,a){a.d(t,{dS:function(){return c},fK:function(){return o},C9:function(){return p},ZP:function(){return u}});var n=a(45721),r=a(84140),i="linkList_sLwJ",s="linkItem_ESvF";function l(e){return n.createElement("li",{className:s},n.createElement(r.Z,e,e.children))}function o(e){return n.createElement(l,{href:e.href},e.children??"View on Github")}function c(e){return n.createElement(l,{href:e.href},"View on Figma")}function p(e){return n.createElement("ul",{className:i},e.children)}function u(e){const{figma:t,github:a}=e;return n.createElement("ul",{className:i},a&&n.createElement(o,{href:a}),t&&n.createElement(c,{href:t}))}},45945:function(e,t,a){a(45721)},84140:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(45721),r=a(92876),i=a(43838),s=a(65805),l=a(5381);function o(e){const{href:t}=e,a=(0,i.L)({ariaHidden:!0,size:"s"}),o=t.includes("github")?s.Z:l.Z;return n.createElement(r.TextLink,e,n.createElement(o,a),e.children)}},86076:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return p}});var n=a(81648),r=(a(45721),a(70167)),i=a(15566);a(45945);const s={tags:["field","paragraph field","forms"],title:"Textarea"},l=void 0,o={unversionedId:"reference/components/text-area",id:"reference/components/text-area",title:"Textarea",description:"Used to collect form field information in a multi-line input.",source:"@site/docs/reference/components/text-area.mdx",sourceDirName:"reference/components",slug:"/reference/components/text-area",permalink:"/docs/reference/components/text-area",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/text-area.mdx",tags:[{label:"field",permalink:"/docs/tags/field"},{label:"paragraph field",permalink:"/docs/tags/paragraph-field"},{label:"forms",permalink:"/docs/tags/forms"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["field","paragraph field","forms"],title:"Textarea"},sidebar:"reference",previous:{title:"Tag",permalink:"/docs/reference/components/tag"},next:{title:"Text Link",permalink:"/docs/reference/components/text-link"}},c={},p=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected Textarea",id:"3-ejected-textarea",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Accessibility",id:"accessibility",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"Used to collect form field information in a multi-line input."),(0,r.kt)(i.C9,{mdxType:"DocsLinkList"},(0,r.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Textarea.tsx",mdxType:"DocsGithubLink"}),(0,r.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Textarea/textareaCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,r.kt)(i.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Textarea } from '@pluralsight/react'\n")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Form Control"),(0,r.kt)("li",{parentName:"ol"},"Label"),(0,r.kt)("li",{parentName:"ol"},"Input"),(0,r.kt)("li",{parentName:"ol"},"Message")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{title:"Shares the Input API",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Textarea component shares the same state API as the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/components/input"},"Input")," component.")),(0,r.kt)("h3",{id:"basic-example"},"Basic Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicExample() {\n  const [bio, setBio] = useState(\'\')\n\n  function handleChange(e) {\n    setBio(e.target.value)\n  }\n\n  return (\n    <FormControlProvider>\n      <Label htmlFor="bio">Bio</Label>\n      <Textarea\n        describedBy="bio:help"\n        id="bio"\n        name="bio"\n        onChange={handleChange}\n        value={bio}\n      />\n      <FieldMessage id="bio:help">\n        Tell us about yourself in 140 characters or less.\n      </FieldMessage>\n    </FormControlProvider>\n  )\n}\n')),(0,r.kt)("h3",{id:"customizing"},"Customizing"),(0,r.kt)("p",null,"There are 3 ways to customize the Textarea component."),(0,r.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,r.kt)("p",null,"Each component layer of the Textarea has a unused class name that can be utilized in your local CSS to customize the Textarea at any level."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pando-textarea"),": The element of the Textarea.")),(0,r.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,r.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,r.kt)("p",null,"You can pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," prop to the Textarea component to customize the Textarea. This is useful if your project uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,r.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the Textarea." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'Textarea."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomTextarea(props) {\n  return <Textarea className={customStyles.custom} {...props} />\n}\n")),(0,r.kt)("h4",{id:"3-ejected-textarea"},"3. Ejected Textarea"),(0,r.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Textarea however you prefer while keeping the accessibility behavior.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import { getTextareaProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Textarea/textareaCSS.ts"},"Headless-styles documentation"),"."),(0,r.kt)("h2",{id:"behavior"},"Behavior"),(0,r.kt)("h3",{id:"patterns"},"Patterns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use the Textarea if you need to collect a multi-line response from a user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use an Input to collect a multi-line response from a user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," stack form fields vertically when displaying a set."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use more than one form field within the same row."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do"),' use the "(required)" text flag on all required form field labels.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't"),' use a "',"*",'" to represent a required field; this pattern is not accessible.'),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TextareaProps extends TextareaHTMLAttributes<HTMLTextareaElement> {\n  describedBy?: string\n  id: string\n  name: string\n  resize?: 'none' | 'vertical' | 'horizontal' | 'auto'\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"describedBy")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," of the FieldMessage or ErrorMessage that describes the textarea."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," of the textarea."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - The ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," of the textarea."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"resize")," - The resize behavior of the textarea.")),(0,r.kt)("h2",{id:"accessibility"},"Accessibility"),(0,r.kt)("p",null,"The Pando Textarea is fully accessible and screen-readable through the following features:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"aria-invalid")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," when the textarea is invalid."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"aria-describedby")," attribute is set to the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," of the FieldMessage or ErrorMessage that describes the textarea."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"aria-required")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," when the textarea is required.")))}m.isMDXComponent=!0}}]);