"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5358],{6115:function(e,n,t){const o=t(86521);n.Z=function(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"figma icon",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.25 5.5A4.25 4.25 0 0 1 8.5 1.25h7A4.25 4.25 0 0 1 17.912 9a4.25 4.25 0 1 1-5.162 6.74v3.76A4.25 4.25 0 1 1 6.088 16a4.245 4.245 0 0 1-1.838-3.5c0-1.452.728-2.733 1.838-3.5A4.245 4.245 0 0 1 4.25 5.5Zm4.25 9.75h2.75v-5.5H8.5a2.75 2.75 0 1 0 0 5.5Zm2.75 1.5H8.5a2.75 2.75 0 1 0 2.75 2.75v-2.75Zm7-11.25a2.75 2.75 0 0 1-2.75 2.75h-2.75v-5.5h2.75a2.75 2.75 0 0 1 2.75 2.75ZM15.5 9.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-7-1.5h2.75v-5.5H8.5a2.75 2.75 0 0 0 0 5.5Z"})})}},31026:function(e,n,t){const o=t(86521);n.Z=function(e){return(0,o.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},52729:function(e,n,t){const o=t(86521);n.Z=function(e){return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"danger diamond filled icon",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.293 21.707a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-9-9a.999.999 0 0 0-1.414 0l-9 9a.999.999 0 0 0 0 1.414l9 9ZM12.5 14a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1Zm0 3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1Z"})})}},20271:function(e,n,t){t.d(n,{A:function(){return a}});var o=t(45721);function a(e){return(0,o.useEffect)((()=>{function n(n){"Escape"===n.key&&(n.stopPropagation(),n.preventDefault(),e())}return window.addEventListener("keydown",n,!1),()=>{window.removeEventListener("keydown",n,!1)}}),[e]),null}},99949:function(e,n,t){t.d(n,{P:function(){return a}});var o=t(45721);function a(e){const n=(0,o.useRef)(null),t=(0,o.useCallback)((()=>{const e=n.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')??[];return{firstItem:e[0],lastItem:e[e.length-1]}}),[n]),a=(0,o.useCallback)((e=>{const{activeElement:n}=document,{firstItem:o,lastItem:a}=t();"Tab"===e.key&&(e.shiftKey?n===o&&(e.preventDefault(),a.focus()):n===a&&(e.preventDefault(),o.focus()))}),[t]),i=(0,o.useCallback)((e=>{if((null==e||e)&&document.body.setAttribute("data-modal-open","true"),null!=n.current){const{firstItem:e}=t();document.activeElement!==e&&e.focus()}}),[t,n]);return(0,o.useEffect)((()=>{const n=e.current;return()=>{document.body.removeAttribute("data-modal-open"),n?.focus()}}),[e]),{ref:n,setupFocusTrap:i,onKeyDown:a}}},44669:function(e,n,t){var o=t(81648),a=t(45721),i=t(77674),r=t(10461),l=t(67235),s=t(71741);n.Z=function(){const e=(0,a.useRef)(null),[n,t]=(0,a.useState)(!1),u=(0,a.useCallback)((()=>{t(!1)}),[]);return a.createElement(l.Z,null,a.createElement("button",(0,o.Z)({},(0,r.g)().button,{onClick:function(){t(!0)},ref:e}),"Confirm payment"),n&&(0,i.createPortal)(a.createElement(s.Z,{heading:"Confirm payment",bodyId:"normalAlert-body",body:"Are you sure? This action can't be undone.",confirmText:"Charge card",headingId:"normalAlert-header",id:"normalAlert",onClose:u,ref:e}),document.body))}},71741:function(e,n,t){var o=t(81648),a=t(45721),i=t(99949),r=t(20271),l=t(61757),s=t(6214),u=t(10461),c=t(52729);function d(e,n){const{onClose:t,...d}=e,m=(0,a.useRef)(null),p=(0,l.g)(d),{ref:f,onKeyDown:g,setupFocusTrap:b}=(0,i.P)(n),_="destructive"===d.kind;return(0,r.A)(t),(0,a.useEffect)((()=>{b()}),[b]),a.createElement("div",p.backdrop,a.createElement("div",p.focusGuard),a.createElement("div",(0,o.Z)({},p.wrapper,{ref:m,onClick:function(e){e.stopPropagation(),m.current===e.target&&t()}}),a.createElement("section",(0,o.Z)({},p.section,{ref:f,onKeyDown:g}),a.createElement("header",p.header,_&&a.createElement("span",p.iconWrapper,a.createElement(c.Z,(0,s.g)(p.iconOptions))),a.createElement("h6",(0,o.Z)({},p.heading,{style:{margin:"initial"}}),e.heading)),a.createElement("p",p.body,e.body),a.createElement("footer",p.buttonGroup,a.createElement("button",(0,o.Z)({},(0,u.g)(p.cancelBtnOptions).button,{onClick:t}),"Cancel"),a.createElement("button",(0,u.g)(p.agreeBtnOptions).button,e.confirmText)))),a.createElement("div",p.focusGuard))}const m=(0,a.memo)((0,a.forwardRef)(d));n.Z=m},5233:function(e,n,t){var o=t(81648),a=t(45721),i=t(77674),r=t(10461),l=t(67235),s=t(71741);n.Z=function(){const e=(0,a.useRef)(null),[n,t]=(0,a.useState)(!1),u=(0,a.useCallback)((()=>{t(!1)}),[]);return a.createElement(l.Z,null,a.createElement("button",(0,o.Z)({},(0,r.g)({sentiment:"danger"}).button,{onClick:function(){t(!0)},ref:e}),"Delete channel"),n&&(0,i.createPortal)(a.createElement(s.Z,{heading:"Delete Channel",body:"Are you sure? This action will be permanent.",bodyId:"destructiveAlert-body",confirmText:"Delete",headingId:"destructiveAlert-header",id:"destructiveAlert",kind:"destructive",onClose:u,ref:e}),document.body))}},67235:function(e,n,t){t.d(n,{Z:function(){return r}});var o=t(45721),a={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const i={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function r(e){void 0===e&&(e=i);const n=e.type??i.type,t=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",r={alignItems:e.alignItems,gridTemplateColumns:t,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return o.createElement("div",{className:a[n],style:r},e.children)}},95428:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(81648),a=t(45721),i=t(49807),r=t(69477),l="grid_cC7H";function s(e){return a.createElement("li",(0,i.a)({colSpan:2}),a.createElement(r.Z,e,e.children))}function u(e){const{figma:n,github:t}=e,{className:r,...u}=(0,i.g)({cols:12,gap:8});return a.createElement("ul",(0,o.Z)({className:`${r} ${l}`},u),t&&a.createElement(s,{href:t},"View on Github"),n&&a.createElement(s,{href:n},"Figma Design"))}},25302:function(e,n,t){t(45721)},69477:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(45721),a=t(91270),i=t(6214),r=t(31026),l=t(6115);function s(e){const{href:n}=e,t=(0,a.g)({href:n}),s=(0,i.g)(t.iconOptions),u=n.includes("github")?r.Z:l.Z;return o.createElement("a",t.link,o.createElement(u,s),e.children)}},17618:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var o=t(81648),a=(t(45721),t(70167)),i=t(44669),r=t(5233),l=t(95428);t(25302);const s={tags:["dialog","user confirmation"],title:"Confirm Dialog"},u=void 0,c={unversionedId:"reference/components/confirm-dialog",id:"reference/components/confirm-dialog",title:"Confirm Dialog",description:"Used to interrupt the user with a mandatory confirmation or action.",source:"@site/docs/reference/components/confirm-dialog.mdx",sourceDirName:"reference/components",slug:"/reference/components/confirm-dialog",permalink:"/docs/next/reference/components/confirm-dialog",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/confirm-dialog.mdx",tags:[{label:"dialog",permalink:"/docs/next/tags/dialog"},{label:"user confirmation",permalink:"/docs/next/tags/user-confirmation"}],version:"current",lastUpdatedBy:"tim-roberts1",frontMatter:{tags:["dialog","user confirmation"],title:"Confirm Dialog"},sidebar:"reference",previous:{title:"Circular Progress",permalink:"/docs/next/reference/components/circular-progress"},next:{title:"Field Messages",permalink:"/docs/next/reference/components/field-message"}},d={},m=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Non-destructive",id:"non-destructive",level:3},{value:"Destructive",id:"destructive",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],p={toc:m};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used to interrupt the user with a mandatory confirmation or action."),(0,a.kt)(l.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/ConfirmDialog",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getConfirmDialogProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ConfirmDialogOptions {\n  bodyId: string\n  headingId?: string\n  id: string\n  kind?: 'non-destructive' | 'destructive'\n}\n\ngetConfirmDialogProps(options?: ConfirmDialogOptions)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { ConfirmDialogOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Container"),(0,a.kt)("li",{parentName:"ol"},"Header"),(0,a.kt)("li",{parentName:"ol"},"Heading"),(0,a.kt)("li",{parentName:"ol"},"Section"),(0,a.kt)("li",{parentName:"ol"},"Body"),(0,a.kt)("li",{parentName:"ol"},"Button Group"),(0,a.kt)("li",{parentName:"ol"},"Cancel Button"),(0,a.kt)("li",{parentName:"ol"},"Back Drop")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"non-destructive"},"Non-destructive"),(0,a.kt)("p",null,"Use a non-destructive Confirm Dialog when you need a confirmation that does not result in a destructive behavior."),(0,a.kt)(i.Z,{mdxType:"BasicConfirmDialog"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="Confirm Dialog Component."',showLineNumbers:!0,title:'"Confirm',Dialog:!0,'Component."':!0},"import { forwardRef, memo, useEffect, useRef } from 'react'\nimport { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'\nimport {\n  getButtonProps,\n  getConfirmDialogProps,\n  getIconProps,\n} from '@pluralsight/headless-styles'\nimport { DangerDiamondFilledIcon } from '@pluralsight/icons'\n\nfunction ConfirmDialogEl(props, triggerRef) {\n  const { onClose, ...confirmProps } = props\n  const wrapperRef = useRef(null)\n  const confirm = getConfirmDialogProps(confirmProps)\n  const { ref, onKeyDown, setupFocusTrap } = useFocusTrap(triggerRef)\n  const isDestructive = confirmProps.kind === 'destructive'\n\n  function handleBackdropClick(event) {\n    event.stopPropagation()\n    if (wrapperRef.current === event.target) {\n      onClose()\n    }\n  }\n\n  useEscToClose(onClose)\n\n  useEffect(() => {\n    setupFocusTrap()\n  }, [setupFocusTrap])\n\n  return (\n    <div {...confirm.backdrop}>\n      <div {...confirm.focusGuard} />\n\n      <div {...confirm.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>\n        <section {...confirm.section} ref={ref} onKeyDown={onKeyDown}>\n          <header {...confirm.header}>\n            {isDestructive && (\n              <span {...confirm.iconWrapper}>\n                <DangerDiamondFilledIcon\n                  {...getIconProps(confirm.iconOptions)}\n                />\n              </span>\n            )}\n            <h6 {...confirm.heading}>{props.heading}</h6>\n          </header>\n          <p {...confirm.body}>{props.body}</p>\n          <footer {...confirm.buttonGroup}>\n            <button\n              {...getButtonProps(confirm.cancelBtnOptions).button}\n              onClick={onClose}\n            >\n              Cancel\n            </button>\n            <button {...getButtonProps(confirm.agreeBtnOptions).button}>\n              {props.confirmText}\n            </button>\n          </footer>\n        </section>\n      </div>\n\n      <div {...confirm.focusGuard} />\n    </div>\n  )\n}\n\nconst ConfirmDialog = memo(forwardRef(ConfirmDialogEl))\n\nexport default ConfirmDialog\n")),(0,a.kt)("h3",{id:"destructive"},"Destructive"),(0,a.kt)("p",null,"When you need a confirmation from a user that will result in a destructive action."),(0,a.kt)(r.Z,{mdxType:"DestructiveConfirmDialog"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"getConfirmDialogProps({ kind: 'destructive' })\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can copy and paste the example from the ",(0,a.kt)("a",{parentName:"p",href:"#non-destructive"},"non-destructive section")," and pass ",(0,a.kt)("inlineCode",{parentName:"p"},'kind="destructive"')," to the component to get this same result.")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getConfirmDialogProps(options?: ConfirmDialogOptions)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": id, headingId, and bodyId properties that accept a String value to connect and setup accessbility properties for all the elements used within the Confirm Dialog. An optional kind property that accepts a String value of ",(0,a.kt)("inlineCode",{parentName:"li"},"'non-destructive' | 'destructive'")," to determine the styling of the Confirm Dialog.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"An Object matching the ",(0,a.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Additionally, it returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"iconOptions")," Object to use as the parameters for the Icon API and ",(0,a.kt)("inlineCode",{parentName:"p"},"iconWrapper")," to use on the element wrapping the Icon. Likewise it returns ",(0,a.kt)("inlineCode",{parentName:"p"},"cancelBtnOptions")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"agreeBtnOptions")," to pass into the Button API as parameters. Last, an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"focusGuard")," property to spread on a leading and trailing element within the Dialog for focus protections."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("p",null,"Confirm dialogs are to be used to interrupt the user's task with important, critical, or warning information. This is the Pluralsight themed version of a browser's native ",(0,a.kt)("inlineCode",{parentName:"p"},"window.confirm()")," function."),(0,a.kt)("h3",{id:"patterns"},"Patterns"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the Confirm Dialog when you need the user to confirm a decision."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use the Modal when you need the user to confirm a decision."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," keep Confirm Dialog layout unaltered."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," manipulate or add any additional elements/styles to the Confirm Dialog."),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use sparingly in a user experience."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," abuse the use of this Dialog by using multiple times within a page."),(0,a.kt)("h2",{id:"accessbility"},"Accessbility"),(0,a.kt)("p",null,"The Pando Confirm Dialog, Button, and Icon APIs combined with semantic HTML allow the Confirm Dialog to be fully accessible and screen-readable."))}f.isMDXComponent=!0},10461:function(e,n,t){t.d(n,{g:function(){return l}});var o=t(83221),a=t(68575),i=t(8561);const r={btnBase:"buttonCSS-module_btnBase__PyTXr button-module_pandoBtn__zGscg states-module_pandoDefaultStates__HFtsC",btnDefaultBorder:"buttonCSS-module_btnDefaultBorder__Hnghf button-module_pandoBtnBorder__Sjvb6",btnDefaultRadius:"buttonCSS-module_btnDefaultRadius__kCcPu button-module_pandoBtnRadius__oHast",actionButton:"buttonCSS-module_actionButton__4Y4rZ",defaultButton:"buttonCSS-module_defaultButton__J6ASa",dangerButton:"buttonCSS-module_dangerButton__40Wyo",mButton:"buttonCSS-module_mButton__mweiI",lButton:"buttonCSS-module_lButton__9a8y8",textButton:"buttonCSS-module_textButton__uV7wV buttonCSS-module_btnBase__PyTXr button-module_pandoBtn__zGscg states-module_pandoDefaultStates__HFtsC buttonCSS-module_btnDefaultRadius__kCcPu button-module_pandoBtnRadius__oHast buttonCSS-module_btnDefaultBorder__Hnghf button-module_pandoBtnBorder__Sjvb6",outlineButton:"buttonCSS-module_outlineButton__vCziD buttonCSS-module_btnBase__PyTXr button-module_pandoBtn__zGscg states-module_pandoDefaultStates__HFtsC buttonCSS-module_btnDefaultRadius__kCcPu button-module_pandoBtnRadius__oHast",filledButton:"buttonCSS-module_filledButton__lllE0 buttonCSS-module_btnBase__PyTXr button-module_pandoBtn__zGscg states-module_pandoDefaultStates__HFtsC buttonCSS-module_btnDefaultRadius__kCcPu button-module_pandoBtnRadius__oHast buttonCSS-module_btnDefaultBorder__Hnghf button-module_pandoBtnBorder__Sjvb6"};(0,i.s)('.states-module_pandoDefaultStates__HFtsC{font-family:inherit}.states-module_pandoDefaultStates__HFtsC:disabled,.states-module_pandoDefaultStates__HFtsC[aria-disabled=true]{cursor:not-allowed;opacity:.5}.states-module_pandoDefaultStates__HFtsC:focus{box-shadow:none;outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.states-module_pandoDefaultStates__HFtsC:focus:not(:focus-visible){box-shadow:none;outline:none}.button-module_pandoBtn__zGscg{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:inline-flex;font-family:inherit;font-size:inherit;font-variation-settings:"wght" 600;font-weight:600;gap:.5rem;justify-content:center;line-height:0;outline:none;position:relative;text-align:center;text-decoration:none;text-transform:none;transition:background-color .25s ease-in-out,color .25s ease-in-out,scale .15s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.button-module_pandoBtnBorder__Sjvb6{border:none}.button-module_pandoBtnRadius__oHast{border-radius:6px}.buttonCSS-module_actionButton__4Y4rZ{background-color:var(--ps-action-background);border:2px solid var(--ps-action-border);color:var(--ps-action-text)}.buttonCSS-module_defaultButton__J6ASa{background-color:var(--ps-background);border:2px solid var(--ps-border-strong);color:var(--ps-text)}.buttonCSS-module_dangerButton__40Wyo{background-color:var(--ps-danger-background);border:2px solid var(--ps-danger-border);color:var(--ps-danger-text-inverse)}.buttonCSS-module_mButton__mweiI{-webkit-padding-end:1.125rem;-webkit-padding-start:1.125rem;font-size:.875rem;height:2rem;min-width:2.5rem;padding-inline-end:1.125rem;padding-inline-start:1.125rem}.buttonCSS-module_lButton__9a8y8{-webkit-padding-end:2.156rem;-webkit-padding-start:2.156rem;height:3rem;min-width:2.5rem;padding-inline-end:2.156rem;padding-inline-start:2.156rem}.buttonCSS-module_actionButton__4Y4rZ:hover:not(:disabled){background-color:var(--ps-action-background-hover)}.buttonCSS-module_defaultButton__J6ASa:hover:not(:disabled){background-color:var(--ps-background-hover)}.buttonCSS-module_dangerButton__40Wyo:hover:not(:disabled){background-color:var(--ps-danger-background-hover)}.buttonCSS-module_textButton__uV7wV:hover:not(:disabled){background-color:transparent;color:var(--ps-action-navigation-hover);scale:1.1;text-decoration:none}.buttonCSS-module_actionButton__4Y4rZ:active:not(:disabled){background-color:var(--ps-action-background-active)}:is(.buttonCSS-module_defaultButton__J6ASa,.buttonCSS-module_outlineButton__vCziD):active:not(:disabled){background-color:var(--ps-background-active)}.buttonCSS-module_dangerButton__40Wyo:active:not(:disabled){background-color:var(--ps-danger-background-active)}.buttonCSS-module_textButton__uV7wV:active:not(:disabled){background-color:transparent;color:var(--ps-action-navigation-visited)}.buttonCSS-module_outlineButton__vCziD{background-color:transparent}.buttonCSS-module_textButton__uV7wV{background-color:transparent;text-decoration:underline}');function l(e){const n=(0,a.g)(e),t=(0,a.c)(n),{sentimentClass:i,sizeClass:l,usageClass:s}=(0,a.a)(n);return{...t,button:{...t.button,...(0,o.c)("ps-btn",r[s],r[i],r[l])}}}},68575:function(e,n,t){t.d(n,{a:function(){return r},c:function(){return l},g:function(){return i}});var o=t(98080);function a(e){return`${e}Button`}function i(e){return{disabled:(null==e?void 0:e.disabled)??!1,icon:(null==e?void 0:e.icon)??"",sentiment:(null==e?void 0:e.sentiment)??"action",usage:(null==e?void 0:e.usage)??"filled",size:(null==e?void 0:e.size)??"l"}}function r(e){return{sentimentClass:a(e.sentiment),sizeClass:a(e.size),usageClass:a(e.usage)}}function l(e){var n;return{...e.icon&&{iconOptions:(0,o.c)({ariaHidden:!0,ariaLabel:"",size:(n=e.size,"m"===n?"s":"m")})},button:{disabled:e.disabled}}}},94894:function(e,n,t){t.d(n,{s:function(){return a}});var o=t(8561);const a={light:"confirmDialogCSS-module_light__6QI6-",confirmDialogBackdrop:"confirmDialogCSS-module_confirmDialogBackdrop__SvaJn",confirmDialogBtnGroup:"confirmDialogCSS-module_confirmDialogBtnGroup__xQFxm",confirmDialogCancelBtn:"confirmDialogCSS-module_confirmDialogCancelBtn__VaHK2",confirmFocusGuard:"confirmDialogCSS-module_confirmFocusGuard__-Tusg",confirmDialogSection:"confirmDialogCSS-module_confirmDialogSection__HOsgy",fadeIn:"confirmDialogCSS-module_fadeIn__72y7G",confirmDialogWrapper:"confirmDialogCSS-module_confirmDialogWrapper__DsMZL",confirmDialogHeader:"confirmDialogCSS-module_confirmDialogHeader__G3CMt",confirmDialogTitleIcon:"confirmDialogCSS-module_confirmDialogTitleIcon__ecU2s"};(0,o.s)("@keyframes confirmDialogCSS-module_fadeIn__72y7G{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}:root{--ps-backdrop:rgba(0,0,0,.65)}.confirmDialogCSS-module_light__6QI6-,html[data-theme=light]{--ps-backdrop:hsla(0,0%,100%,.65)}.confirmDialogCSS-module_confirmDialogBackdrop__SvaJn{background:var(--ps-backdrop);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1300}.confirmDialogCSS-module_confirmDialogBtnGroup__xQFxm{display:flex;gap:1rem;justify-content:flex-end;margin-top:1.5rem}.confirmDialogCSS-module_confirmDialogCancelBtn__VaHK2{margin-right:1rem}.confirmDialogCSS-module_confirmFocusGuard__-Tusg{height:0;left:1px;overflow:hidden;padding:0;position:fixed;top:1px;width:1px}.confirmDialogCSS-module_confirmDialogSection__HOsgy{-webkit-padding-end:1.5rem;-webkit-padding-start:1.5rem;animation-delay:.1s;animation-duration:.15s;animation-fill-mode:forwards;animation-name:confirmDialogCSS-module_fadeIn__72y7G;animation-timing-function:ease-in-out;background:var(--ps-surface-weak);border-color:var(--ps-border-weak);border-radius:8px;border-style:solid;border-width:1px;box-shadow:0 10px 15px -3px rgba(0,0,0,.01),0 4px 6px -2px rgba(0,0,0,.05);color:var(--ps-text);display:flex;flex-direction:column;font-family:inherit;margin-bottom:3.75rem;margin-top:3.75rem;max-width:30rem;opacity:0;outline:2px solid transparent;outline-offset:2px;padding-bottom:1.5rem;padding-inline-end:1.5rem;padding-inline-start:1.5rem;position:relative;width:100%;z-index:1400}.confirmDialogCSS-module_confirmDialogWrapper__DsMZL{-moz-box-pack:center;-webkit-box-pack:center;align-items:flex-start;display:flex;height:100vh;justify-content:center;left:0;overflow:auto;position:fixed;top:0;width:100vw;z-index:1400}.confirmDialogCSS-module_confirmDialogHeader__G3CMt{align-items:center;display:flex;margin-bottom:1.5rem;margin-top:2.5rem}.confirmDialogCSS-module_confirmDialogTitleIcon__ecU2s{-webkit-margin-end:.625rem;color:var(--ps-danger-border);line-height:normal;margin-inline-end:.625rem}")},61757:function(e,n,t){t.d(n,{g:function(){return l}});var o=t(83221),a=t(34842),i=t(94894);const r="ps-confirm-dialog";function l(e){const n=(0,a.g)(e),t=(0,a.c)(n),l=(0,a.a)(n,{iconWrapper:{...(0,o.c)("ps-confirm-dialog-icon",i.s.confirmDialogTitleIcon)}});return{...t,...l,body:{...t.body,...(0,o.c)("ps-confirm-dialog-body")},backdrop:{...t.backdrop,...(0,o.c)("ps-confirm-dialog-backdrop",i.s.confirmDialogBackdrop)},buttonGroup:{...t.buttonGroup,...(0,o.c)("ps-confirm-dialog-btn-group",i.s.confirmDialogBtnGroup)},cancelButton:{...t.cancelButton,...(0,o.c)("ps-confirm-dialog-cancel",i.s.confirmDialogCancelBtn)},focusGuard:{...t.focusGuard,...(0,o.c)("ps-confirm-dialog-focus-guard",i.s.confirmFocusGuard)},section:{...t.section,...(0,o.c)("ps-confirm-dialog-section",i.s.confirmDialogSection)},wrapper:{...t.wrapper,...(0,o.c)(r,i.s.confirmDialogWrapper)},header:{...t.header,...(0,o.c)("ps-confirm-dialog-header",i.s.confirmDialogHeader)}}}},34842:function(e,n,t){t.d(n,{a:function(){return r},c:function(){return l},g:function(){return i}});var o=t(44909),a=t(98080);function i(e){return{bodyId:(null==e?void 0:e.bodyId)??"",headingId:(null==e?void 0:e.headingId)??"",id:(null==e?void 0:e.id)??"",kind:(null==e?void 0:e.kind)??"non-destructive"}}function r(e,n){return"destructive"===e.kind?{iconOptions:{ariaHidden:!0,size:"m",...null==n?void 0:n.iconOptions},iconWrapper:{...null==n?void 0:n.iconWrapper}}:{}}function l(e){return{...(0,o.c)(e),cancelBtnOptions:(0,a.c)({usage:"outline"}),agreeBtnOptions:(0,a.c)({sentiment:"destructive"===e.kind?"danger":"action"}),buttonGroup:{},cancelButton:{},header:{}}}},44909:function(e,n,t){t.d(n,{c:function(){return a}});var o=t(43446);function a(e){const{bodyId:n,headingId:t}=e;return{body:{id:n},backdrop:{},focusGuard:{"aria-hidden":!0,"data-focus-guard":!0,tabIndex:0},heading:{id:t},section:{"aria-modal":!0,"aria-describedby":n,id:e.id,role:"alertdialog",tabIndex:-1,...(0,o.g)(e)},wrapper:{"data-focus-lock-disabled":!1,tabIndex:-1}}}},43446:function(e,n,t){function o(e){return null!=e&&e.headingId?{"aria-labelledby":e.headingId??""}:{"aria-label":e.ariaLabel??""}}t.d(n,{g:function(){return o}})}}]);