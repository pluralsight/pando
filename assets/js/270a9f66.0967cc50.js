"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3239],{40736:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(45721),i={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const o={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function r(e){void 0===e&&(e=o);const t=e.type??o.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",r={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return a.createElement("div",{className:i[t],style:r},e.children)}},15566:function(e,t,n){n.d(t,{dS:function(){return p},fK:function(){return s},C9:function(){return d},ZP:function(){return m}});var a=n(45721),i=n(84140),o="linkList_sLwJ",r="linkItem_ESvF";function l(e){return a.createElement("li",{className:r},a.createElement(i.Z,e,e.children))}function s(e){return a.createElement(l,{href:e.href},e.children??"View on Github")}function p(e){return a.createElement(l,{href:e.href},"View on Figma")}function d(e){return a.createElement("ul",{className:o},e.children)}function m(e){const{figma:t,github:n}=e;return a.createElement("ul",{className:o},n&&a.createElement(s,{href:n}),t&&a.createElement(p,{href:t}))}},45945:function(e,t,n){n(45721)},84140:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(45721),i=n(9641),o=n(26793),r=n(89221),l=n(73678);function s(e){const{href:t}=e,n=(0,o.L)({ariaHidden:!0,size:"s"}),s=t.includes("github")?r.Z:l.Z;return a.createElement(i.h,e,a.createElement(s,n),e.children)}},24594:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return g},default:function(){return C},frontMatter:function(){return h},metadata:function(){return k},toc:function(){return v}});var a=n(81648),i=n(45721),o=n(70167),r=n(15566),l=n(11695),s=n(57493),p=n(40736);function d(){const{prompt:e}=(0,l.G)(),t="CONFIRM";return i.createElement(s.z,{onClick:async function(){try{await e({bodyId:"non-destructiveAlert-body",headingId:"non-destructiveAlert-heading",heading:"Validation required.",text:"This action requires additional validation.",promptValidationKey:t})}catch(n){}}},"Update role")}function m(){return i.createElement(p.Z,null,i.createElement(l.c,null,i.createElement(d,null)))}function u(){const{prompt:e}=(0,l.G)(),t="DELETE";return i.createElement(s.z,{sentiment:"danger",onClick:async function(){try{await e({bodyId:"destructiveAlert-body",headingId:"destructiveAlert-heading",heading:"Delete Channel",kind:"destructive",text:"Are you sure you want to delete this channel? This action cannot be undone.",promptValidationKey:t})}catch(n){}}},"Delete channel")}function c(){return i.createElement(p.Z,null,i.createElement(l.c,null,i.createElement(u,null)))}n(45945);const h={tags:["alert","dialog","user validation"],title:"Prompt Dialog"},g=void 0,k={unversionedId:"reference/components/prompt-dialog",id:"reference/components/prompt-dialog",title:"Prompt Dialog",description:"Used to interrupt the user with a mandatory validation or action.",source:"@site/docs/reference/components/prompt-dialog.mdx",sourceDirName:"reference/components",slug:"/reference/components/prompt-dialog",permalink:"/docs/next/reference/components/prompt-dialog",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/prompt-dialog.mdx",tags:[{label:"alert",permalink:"/docs/next/tags/alert"},{label:"dialog",permalink:"/docs/next/tags/dialog"},{label:"user validation",permalink:"/docs/next/tags/user-validation"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["alert","dialog","user validation"],title:"Prompt Dialog"},sidebar:"reference",previous:{title:"Progress Bar",permalink:"/docs/next/reference/components/progress-bar"},next:{title:"Radio",permalink:"/docs/next/reference/components/radio"}},f={},v=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Non-destructive",id:"non-destructive",level:3},{value:"Destructive",id:"destructive",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"3. Ejected Prompt Dialog",id:"3-ejected-prompt-dialog",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"API",id:"api",level:2},{value:"<code>PromptProvider</code>",id:"promptprovider",level:3},{value:"Paramters",id:"paramters",level:4},{value:"<code>usePrompt</code>",id:"useprompt",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Accessibility",id:"accessibility",level:2}],N={toc:v};function C(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"size-xxl"},"Used to interrupt the user with a mandatory validation or action."),(0,o.kt)(r.C9,{mdxType:"DocsLinkList"},(0,o.kt)(r.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/context/Prompt/context.tsx",mdxType:"DocsGithubLink"}),(0,o.kt)(r.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/AlertDialog/alertDialog.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,o.kt)(r.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { PromptProvider, usePrompt } from '@pluralsight/react'\n")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Dialog Container"),(0,o.kt)("li",{parentName:"ol"},"Header (optional)"),(0,o.kt)("li",{parentName:"ol"},"Heading (optional)"),(0,o.kt)("li",{parentName:"ol"},"Body"),(0,o.kt)("li",{parentName:"ol"},"Label (hidden or visible)"),(0,o.kt)("li",{parentName:"ol"},"Input"),(0,o.kt)("li",{parentName:"ol"},"Footer"),(0,o.kt)("li",{parentName:"ol"},"Cancel Button"),(0,o.kt)("li",{parentName:"ol"},"Confirm Button")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"non-destructive"},"Non-destructive"),(0,o.kt)("p",null,"Use a non-destructive Prompt Dialog when you need a validation that does not result in a destructive behavior."),(0,o.kt)(m,{mdxType:"PromptDialog"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers {9,14-20} title="Prompt Dialog Example"',showLineNumbers:!0,"{9,14-20}":!0,title:'"Prompt',Dialog:!0,'Example"':!0},"import { Button, PromptProvider, usePrompt } from '@pluralsight/react'\nimport Container from '../Container/Container.js'\n\nfunction PromptFeature() {\n  const { prompt } = usePrompt()\n  const CONFIRM_KEY = 'CONFIRM'\n\n  async function handleOnClick() {\n    try {\n      const validation = await prompt({\n        heading: 'Validation required.',\n        text: 'This action requires additional validation.',\n        promptValidationKey: CONFIRM_KEY,\n      })\n\n      if (validation === CONFIRM_KEY) {\n        // do something\n      }\n    } catch (error) {\n      // handle error\n    }\n  }\n\n  return <Button onClick={handleOnClick}>Update role</Button>\n}\n\nexport default function PromptDialog() {\n  return (\n    <Container>\n      <PromptProvider>\n        <PromptFeature />\n      </PromptProvider>\n    </Container>\n  )\n}\n")),(0,o.kt)("h3",{id:"destructive"},"Destructive"),(0,o.kt)("p",null,"When you need a confirmation from a user that will result in a destructive action, just add the ",(0,o.kt)("inlineCode",{parentName:"p"},"kind")," option with a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"destructive")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"prompt")," function."),(0,o.kt)(c,{mdxType:"DestructivePromptDialog"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers {9,18} title="Destructive Prompt Dialog Example"',showLineNumbers:!0,"{9,18}":!0,title:'"Destructive',Prompt:!0,Dialog:!0,'Example"':!0},"import { Button, PromptProvider, usePrompt } from '@pluralsight/react'\nimport Container from '../Container/Container.js'\n\nfunction PromptFeature() {\n  const { prompt } = usePrompt()\n  const CONFIRM_KEY = 'DELETE'\n\n  async function handleOnClick() {\n    try {\n      const validation = await prompt({\n        heading: 'Delete Channel',\n        kind: 'destructive',\n        text: 'Are you sure you want to delete this channel? This action cannot be undone.',\n        promptValidationKey: CONFIRM_KEY,\n      })\n\n      if (validation === CONFIRM_KEY) {\n        // do something\n      }\n    } catch (error) {\n      // handle error\n    }\n  }\n\n  return (\n    <Button sentiment=\"danger\" onClick={handleOnClick}>\n      Delete channel\n    </Button>\n  )\n}\n\nexport default function PromptDialog() {\n  return (\n    <Container>\n      <PromptProvider>\n        <PromptFeature />\n      </PromptProvider>\n    </Container>\n  )\n}\n")),(0,o.kt)("h3",{id:"customizing"},"Customizing"),(0,o.kt)("p",null,"You can customize the Prompt Dialog in the following ways:"),(0,o.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,o.kt)("p",null,"Each component layer of the Prompt has a unused class name that can be utilized in your local CSS to customize the Prompt at any level."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-alert"),": The element of the Prompt Alert."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-alert-header"),": The header element of the Alert."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-alert-icon"),": The heading icon element of the Alert."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-alert-heading"),": The heading element of the Alert."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-alert-body"),": The content element of the Alert."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-alert-label"),": The label element of the Alert."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-alert-input"),": The input element of the Alert."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-alert-footer"),": The footer element of the Alert."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-alert-cancel"),": The cancel button element of the Alert."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-alert-confirm"),": The confirm button element of the Alert.")),(0,o.kt)("h4",{id:"3-ejected-prompt-dialog"},"3. Ejected Prompt Dialog"),(0,o.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Prompt Alert however you prefer while keeping the accessibility behavior.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import {\n  getAlertDialogProps,\n  getAlertDialogHeaderProps,\n  getAlertDialogHeadingProps,\n  getAlertDialogBodyProps,\n  getAlertDialogFooterProps,\n} from '@pluralsight/headless-styles'\n")),(0,o.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/AlertDialog/alertDialog.ts"},"Headless-styles documentation"),"."),(0,o.kt)("h2",{id:"behavior"},"Behavior"),(0,o.kt)("p",null,"Prompt Dialogs are to be used to interrupt the user's task with important, critical, or warning information. This is the Pluralsight themed version of a browser's native ",(0,o.kt)("inlineCode",{parentName:"p"},"window.prompt()")," function."),(0,o.kt)("h3",{id:"patterns"},"Patterns"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use the Prompt Dialog when you need the user to validate a decision."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use the Modal when you need the user to validate a decision."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," keep Prompt Dialog layout unaltered."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," manipulate or add any additional elements/styles to the Prompt Dialog."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use sparingly in a user experience."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," abuse the use of this Dialog by using multiple times within a page."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"promptprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"PromptProvider")),(0,o.kt)("admonition",{title:"pitfall",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"PromptProvider")," should ",(0,o.kt)("strong",{parentName:"p"},"NOT")," be used at the top level of your application. It should be used at the top level of the feature that needs a Prompt Dialog for better performance.")),(0,o.kt)("h4",{id:"paramters"},"Paramters"),(0,o.kt)("h3",{id:"useprompt"},(0,o.kt)("inlineCode",{parentName:"h3"},"usePrompt")),(0,o.kt)("p",null,'The hook returns a string value of either "cancel" or the ',(0,o.kt)("inlineCode",{parentName:"p"},"promptValidationKey")," value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ContextProps {\n  prompt: (options: PromptDialogProps) => Promise<string>\n}\n\nfunction usePrompt(): ContextProps\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PromptDialogProps {\n  bodyId?: string\n  headingId?: string\n  heading?: string\n  kind?: 'non-destructive' | 'destructive'\n  promptValidationKey?: string\n  text: string\n}\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"bodyId"),": The ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," of the content element of the Prompt Dialog. A default ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," will be generated if not provided."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"headingId"),": The ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," of the heading element of the Prompt Dialog. A default ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," will be generated if not provided."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"heading"),": The text of the heading element of the Prompt Dialog."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"kind"),": The kind of Prompt Dialog. The value can be either ",(0,o.kt)("inlineCode",{parentName:"li"},"non-destructive")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"destructive"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"promptValidationKey"),": The value that will determine the form ",(0,o.kt)("inlineCode",{parentName:"li"},"invalid")," state and returned on successful submission."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"text"),": The text of the content element of the Prompt Dialog.")),(0,o.kt)("h2",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"The Pando Prompt Dialog is fully accessible and screen-readable through the following features:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The Prompt Dialog uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"dialog")," element for native browser a11y support."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"dialog")," element uses the role of ",(0,o.kt)("inlineCode",{parentName:"li"},"alertdialog")," to indicate to screen readers that the dialog contains important information."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"dialog")," element uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-modal")," attribute to indicate to screen readers that the dialog is modal."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"dialog")," element uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-labelledby")," attribute to indicate to screen readers that the dialog has a heading."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"dialog")," element uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-describedby")," attribute to indicate to screen readers that the dialog has a content body."),(0,o.kt)("li",{parentName:"ol"},"The Dialog API automatically focuses back on the trigger when the Dialog is closed."),(0,o.kt)("li",{parentName:"ol"},"The Dialog traps focus within the Dialog when it is open.")))}C.isMDXComponent=!0}}]);