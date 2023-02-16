"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23247],{61411:function(e,t,n){const o=n(86521);t.Z=function(e){return(0,o.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},75362:function(e,t,n){const o=n(86521);t.Z=function(e){return(0,o.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},67648:function(e,t,n){const o=n(86521);t.Z=function(e){return(0,o.jsx)("svg",{"aria-label":"menu",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 11.5v1a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5ZM2.5 17h18.98a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm0-12h18.977a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"})})}},67235:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(45721),a={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const i={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function s(e){void 0===e&&(e=i);const t=e.type??i.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",s={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return o.createElement("div",{className:a[t],style:s},e.children)}},36006:function(e,t,n){var o=n(81648),a=n(45721),i=n(37677),s=n(65553),l=n(67648),r=n(67235);function c(e){const{onClick:t,...n}=e,{button:r,iconOptions:c}=(0,i.g)(n);return a.createElement("button",(0,o.Z)({},r,{onClick:t}),a.createElement(l.Z,(0,s.g)(c)))}t.Z=function(){return a.createElement(r.Z,null,a.createElement(c,{arialLabel:"Action icon button"}),a.createElement(c,{ariaLabel:"Default icon button",sentiment:"default"}))}},93455:function(e,t,n){n.d(t,{g:function(){return s},y:function(){return i}});var o=n(45721),a=n(27233);function i(){return o.createElement(a.Z,null,"const { button, iconOptions } = getIconButtonProps({\n  ariaLabel: 'Toggle menu',\n  //highlight-next-line\n  sentiment: 'action'\n})\n\n<button {...button}>\n  <MenuIcon {...getIconProps(iconOptions)} />\n</button>")}function s(){return o.createElement(a.Z,null,"import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'\nimport { MenuIcon } from '@pluralsight/icons'\n\nexport default function MenuButton(props) {\n  const { onClick, ...btnOptions } = props\n  const { button, iconOptions } = getIconButtonProps(btnOptions)\n\n  return (\n    <button {...button} onClick={onClick}>\n      <MenuIcon {...getIconProps(iconOptions)} />\n    </button>\n  )\n}")}},54940:function(e,t,n){var o=n(45721),a=n(37677),i=n(65553),s=n(71111),l=n(67235);function r(e){const{icon:t,...n}=e,{button:s,iconOptions:l}=(0,a.g)(n),r=t;return o.createElement("button",s,o.createElement(r,(0,i.g)(l)))}t.Z=function(){return o.createElement(l.Z,null,o.createElement(r,{ariaLabel:"medium icon button",icon:s.Z,size:"m"}),o.createElement(r,{ariaLabel:"medium icon button",icon:s.Z,size:"m",usage:"round"}),o.createElement(r,{ariaLabel:"medium icon button",icon:s.Z,size:"m",usage:"text"}),o.createElement(r,{ariaLabel:"large icon button",icon:s.Z,size:"l"}),o.createElement(r,{ariaLabel:"large icon button",icon:s.Z,size:"l",usage:"round"}),o.createElement(r,{ariaLabel:"large icon button",icon:s.Z,size:"l",usage:"text"}))}},21290:function(e,t,n){n.d(t,{J:function(){return s},e:function(){return i}});var o=n(45721),a=n(27233);function i(){return o.createElement(a.Z,null,"const { button, iconOptions } = getIconButtonProps({\n  ariaLabel: 'Go to next page',\n  //highlight-next-line\n  size: 'l'\n})\n\n<button {...button}>\n  <PlaceholderIcon {...getIconProps(iconOptions)} />\n</button>")}function s(){return o.createElement(a.Z,null,"import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'\nimport { ChevronRightIcon } from '@pluralsight/icons'\n\nexport default function NextButton(props) {\n  const { onClick, ...btnOptions } = props\n  const { button, iconOptions } = getIconButtonProps(btnOptions)\n\n  return (\n    <button {...button} onClick={onClick}>\n      <ChevronRightIcon {...getIconProps(iconOptions)} />\n    </button>\n  )\n}")}},70451:function(e,t,n){var o=n(81648),a=n(45721),i=n(37677),s=n(65553),l=n(67648),r=n(67235);function c(e){const{onClick:t,...n}=e,{button:r,iconOptions:c}=(0,i.g)(n);return a.createElement("button",(0,o.Z)({},r,{onClick:t}),a.createElement(l.Z,(0,s.g)(c)))}t.Z=function(){return a.createElement(r.Z,null,a.createElement(c,{arialLabel:"Action icon button",usage:"square"}),a.createElement(c,{ariaLabel:"Default icon button",usage:"round"}),a.createElement(c,{ariaLabel:"Default icon button",usage:"text"}))}},81549:function(e,t,n){n.d(t,{P:function(){return s},k:function(){return i}});var o=n(45721),a=n(27233);function i(){return o.createElement(a.Z,null,"const { button, iconOptions } = getIconButtonProps({\n  ariaLabel: 'Toggle menu',\n  //highlight-next-line\n  usage: 'square',\n})\n\n<button {...button}>\n  <MenuIcon {...getIconProps(iconOptions)} />\n</button>")}function s(){return o.createElement(a.Z,null,"import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'\nimport { MenuIcon } from '@pluralsight/icons'\n\nexport default function SquareMenuButton(props) {\n  const { onClick, ...btnOptions } = props\n  const { button, iconOptions } = getIconButtonProps({\n    ...btnOptions,\n    usage: 'square',\n  })\n\n  return (\n    <button {...button} onClick={onClick}>\n      <MenuIcon {...getIconProps(iconOptions)} />\n    </button>\n  )\n}")}},25302:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(81648),a=n(45721),i=n(37677),s="button_sEkW",l="chakra_ow8e",r="chakraCircle_c8Xz",c="list_rMMG",u="listItem_bLPI",p="icon_nzIq",d="svelteBackground_c8BA",m="svelteOutline_tdvb";const g=a.createElement("svg",{"aria-hidden":"true",className:p,focusable:"false",viewBox:"0 0 24 24"},a.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),b=a.createElement("svg",{"aria-hidden":"true",className:p,focusable:"false",viewBox:"0 0 1024 1024"},a.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),h=a.createElement("svg",{"aria-hidden":"true",className:`${p}`,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{className:m,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),a.createElement("path",{className:d,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));const k={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:g,id:"source",href:"",label:"Show full source"},styled:{icon:b,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:a.createElement("svg",{"aria-hidden":"true",className:`${p} ${l}`,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},a.createElement("rect",{className:r,width:"582",height:"582",rx:"291"}),a.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:a.createElement("svg",{"aria-hidden":"true",className:p,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:h,id:"svelte",label:"View Svelte"}}},v={size:"m",usage:"text"};function f(e){const t=k.results[e.techId],{className:n}=(0,i.g)(v).button,o=`https://codesandbox.io/s/${e.href}?file=/src/App.tsx`;return a.createElement("a",{"aria-label":t.label,className:`${n} ${s}`,href:o,name:t.label,rel:"noopener noreferrer",target:"_blank",title:t.label},e.children)}function I(e){const{techId:t}=e,{className:n,...l}={...(0,i.g)(v)}.button;return a.createElement("button",(0,o.Z)({className:`${n} ${s}`,onClick:e.onToggleShow,title:k.results[t].label},l),a.createElement(x,{tabId:t}))}function x(e){return k.results[e.tabId].icon}function y(e){const{techId:t}=e;return a.createElement("li",{className:u},"source"===t?a.createElement(I,{onToggleShow:e.onToggleShow,techId:t}):a.createElement(f,{techId:t,href:e.sandboxList[t]},a.createElement(x,{tabId:t})))}function B(e){return a.createElement("ul",{className:c},k.items.map((t=>a.createElement(y,{key:t,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:t}))))}function N(e){const[t,n]=(0,a.useState)(!1);return a.createElement("div",null,a.createElement(B,{onToggleShow:function(){n((e=>!e))},sandboxList:e.sandboxList}),t?e.fullCode:e.children)}var C=(0,a.memo)(N)},69477:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(45721),a=n(41539),i=n(65553),s=n(61411),l=n(75362);function r(e){const{href:t}=e,n=(0,a.g)({href:t}),r=(0,i.g)(n.iconOptions),c=t.includes("github")?s.Z:l.Z;return o.createElement("a",n.link,o.createElement(c,r),e.children)}},12045:function(e,t,n){var o=n(45721),a=n(83052),i=n(79920),s=n(77233),l=n(49632),r=n(37677),c=n(65553),u=n(1579),p=n(72322),d=n(85914),m=n(15082),g=n(54067),b=n(80069),h=n(82979),k=n(74361),v=n(64388),f=n(17549),I=n(4863),x=n(77643),y=n(21556),B=n(71111),N=n(78398),C=n(31942),P=n(61586),w=n(1263),L=n(7315),E=n(61700);const Z={React:o,...o,getButtonProps:a.g,getFormControlProps:i.g,getFormLabelProps:s.g,getGridProps:l.g,getGridItemProps:l.a,getIconButtonProps:r.g,getIconProps:c.g,getInputProps:u.g,getMenuProps:p.g,getMenuItemProps:p.a,getPaginationProps:d.g,getPopoverProps:m.g,getRadioProps:g.g,getSelectProps:b.g,getSelectOptionProps:b.a,getTagProps:h.g,CalendarIcon:k.Z,ChevronDownIcon:v.Z,ChevronRightIcon:f.Z,CloseIcon:I.Z,EyeIcon:x.Z,EyeOffIcon:y.Z,PlaceholderIcon:B.Z,SearchIcon:N.Z,WarningTriangleFilledIcon:C.Z,useAutoFormatDate:P.y,useMenuInteraction:w.P,useRovingTabIndex:L.X,useSubmenuInteraction:E.i};t.Z=Z},8117:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return g},default:function(){return f},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return k}});var o=n(81648),a=(n(45721),n(70167)),i=n(36006),s=n(70451),l=n(54940),r=n(93455),c=n(81549),u=n(21290),p=n(69477),d=n(25302);const m={tags:["Development","Packages","Components","Headless Styles","Button","Icon","Icon Button"]},g=void 0,b={unversionedId:"development/headless-styles/IconButton",id:"version-0.3.1-beta/development/headless-styles/IconButton",title:"IconButton",description:"The Icon Button is used to perform an action or event, such as submitting a form, opening a dialog, or using a cancel action.",source:"@site/versioned_docs/version-0.3.1-beta/development/headless-styles/IconButton.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/IconButton",permalink:"/docs/0.3.1-beta/development/headless-styles/IconButton",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.3.1-beta/development/headless-styles/IconButton.mdx",tags:[{label:"Development",permalink:"/docs/0.3.1-beta/tags/development"},{label:"Packages",permalink:"/docs/0.3.1-beta/tags/packages"},{label:"Components",permalink:"/docs/0.3.1-beta/tags/components"},{label:"Headless Styles",permalink:"/docs/0.3.1-beta/tags/headless-styles"},{label:"Button",permalink:"/docs/0.3.1-beta/tags/button"},{label:"Icon",permalink:"/docs/0.3.1-beta/tags/icon"},{label:"Icon Button",permalink:"/docs/0.3.1-beta/tags/icon-button"}],version:"0.3.1-beta",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Button","Icon","Icon Button"]},sidebar:"development",previous:{title:"Icon",permalink:"/docs/0.3.1-beta/development/headless-styles/Icon"},next:{title:"Input",permalink:"/docs/0.3.1-beta/development/headless-styles/Input"}},h={},k=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Icon Button Sentiments",id:"icon-button-sentiments",level:3},{value:"Icon Button Usage",id:"icon-button-usage",level:3},{value:"Icon Button sizes",id:"icon-button-sizes",level:3},{value:"Disabled Buttons",id:"disabled-buttons",level:3},{value:"Extending",id:"extending",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"IconButtonOptions",id:"iconbuttonoptions",level:3},{value:"Props",id:"props",level:2},{value:"IconButtonProps",id:"iconbuttonprops",level:3},{value:"JSIconButtonProps",id:"jsiconbuttonprops",level:3},{value:"Guides",id:"guides",level:2},{value:"Icon Button size guide",id:"icon-button-size-guide",level:3},{value:"Button color guide",id:"button-color-guide",level:3}],v={toc:k};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Icon Button is used to perform an action or event, such as submitting a form, opening a dialog, or using a cancel action."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Buttons ",(0,a.kt)("strong",{parentName:"p"},"should not be used for inline text links or outbound links"),".\nThis API is meant for action-based click selections.\nFor displaying links, use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.3.1-beta/development/headless-styles/TextLink"},"Text Link API"),".")),(0,a.kt)(p.Z,{icon:"github",href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/IconButton",mdxType:"ViewSourceLink"},"View source"),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getIconButtonProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getIconButtonProps"),": The styles for any button that only displays an icon")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"icon-button-sentiments"},"Icon Button Sentiments"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getIconButtonProps")," comes with two sentiment options to change the visual style of an icon button. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," (default), and ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,a.kt)(i.Z,{mdxType:"BasicIconButton"}),(0,a.kt)(d.Z,{fullCode:(0,a.kt)(r.g,{mdxType:"BasicIconButtonFullPreview"}),sandboxList:{chakra:"ps-react-chakra-mvskqy",joy:"basic-icon-button-css-wc6kwi",styled:"basic-icon-button-css-in-js-sc-fgz3t6",svelte:"ps-svelte-pey4jg"},mdxType:"LiveExampleTabs"},(0,a.kt)(r.y,{mdxType:"BasicIconButtonPreview"})),(0,a.kt)("h3",{id:"icon-button-usage"},"Icon Button Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getIconButtonProps")," comes with three usage options to change the visual style of an icon button. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"square")," (default), 'round', and ",(0,a.kt)("inlineCode",{parentName:"p"},"text"),"."),(0,a.kt)(s.Z,{mdxType:"IconButtonUsage"}),(0,a.kt)(d.Z,{fullCode:(0,a.kt)(c.P,{mdxType:"IconButtonUsageFullPreview"}),sandboxList:{chakra:"ps-react-chakra-mvskqy",joy:"basic-icon-button-css-wc6kwi",styled:"basic-icon-button-css-in-js-sc-fgz3t6",svelte:"ps-svelte-pey4jg"},mdxType:"LiveExampleTabs"},(0,a.kt)(c.k,{mdxType:"IconButtonUsagePreview"})),(0,a.kt)("h3",{id:"icon-button-sizes"},"Icon Button sizes"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," options to change the size of an icon button. The options are: ",(0,a.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"l")," (default)."),(0,a.kt)(l.Z,{mdxType:"IconButtonSizes"}),(0,a.kt)(d.Z,{fullCode:(0,a.kt)(u.J,{mdxType:"IconButtonSizesFullPreview"}),sandboxList:{chakra:"ps-react-chakra-mvskqy",joy:"basic-icon-button-css-wc6kwi",styled:"basic-icon-button-css-in-js-sc-fgz3t6",svelte:"ps-svelte-pey4jg"},mdxType:"LiveExampleTabs"},(0,a.kt)(u.e,{mdxType:"IconButtonSizesPreview"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We use the standard clothing size shorthand values for all ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," related options in any library we provide (i.e. xs-xxl).")),(0,a.kt)("h3",{id:"disabled-buttons"},"Disabled Buttons"),(0,a.kt)("p",null,"If you need to display a disabled Button, just pass in the ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled")," option to the helper."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Disabled Button example"',title:'"Disabled',Button:!0,'example"':!0},"getIconButtonProps({ disabled: true })\n")),(0,a.kt)("h2",{id:"extending"},"Extending"),(0,a.kt)("p",null,"There are times you may need to make a slight adjustment to the icon button styles, which is easy to do since we are giving you an Object."),(0,a.kt)("p",null,"Here is an example of using ",(0,a.kt)("inlineCode",{parentName:"p"},"styled-components")," to extend an icon button text color."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=page/Login/components/CustomMenuButton.jsx",title:"page/Login/components/CustomMenuButton.jsx"},"import styled from 'styled-components'\nimport {\n  getJSIconButtonProps,\n  getIconProps,\n} from '@pluralsight/headless-styles'\n\nconst { button, iconOptions } = getJSIconButtonProps({\n  ariaLabel: 'Icon button',\n})\n\nconst CustomButton = styled.button`\n  ${button.cssProps}\n  color: '#bfbfbf'\n`\n\nconst CustomMenuIcon = styled(MenuIcon)`\n  ${getIconProps(iconOptions).cssProps}\n`\n\nexport default function CustomMenuButton(props) {\n  return (\n    <CustomButton {...props}>\n      <CustomMenuIcon />\n    </CustomButton>\n  )\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When combining ",(0,a.kt)("inlineCode",{parentName:"p"},"headless-styles")," with other libraries, please follow the guides in the example codesandboxes for the best experience. ",(0,a.kt)("strong",{parentName:"p"},"Some libraries require special support"),".")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getIconButtonProps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"options"),": ",(0,a.kt)("a",{parentName:"td",href:"#iconbuttonoptions"},"IconButtonOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"sentiment"),": 'action', ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"size"),": 'l', ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"usage"),": 'square'"),(0,a.kt)("td",{parentName:"tr",align:null},"Get main icon button styles.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getJSIconButtonProps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"options"),": ",(0,a.kt)("a",{parentName:"td",href:"#iconbuttonoptions"},"IconButtonOptions")),(0,a.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,a.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"iconbuttonoptions"},"IconButtonOptions"),(0,a.kt)("p",null,"This interface is available as an ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IconButtonOptions {\n  ariaLabel: string\n  disabled?: boolean\n  sentiment?: 'action' | 'default'\n  usage?: 'square' | 'round' | 'text'\n  size?: 'm' | 'l'\n  tech?: '' | 'svelte'\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { IconButtonOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("h3",{id:"iconbuttonprops"},"IconButtonProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IconButtonProps {\n  iconOptions?: {\n    ariaHidden: true\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  button: {\n    'aria-label': string\n    'data-disabled': boolean\n    className: string\n    type: 'button'\n  }\n}\n")),(0,a.kt)("h3",{id:"jsiconbuttonprops"},"JSIconButtonProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSIconButtonProps {\n  iconOptions?: {\n    ariaHidden: true\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  button: {\n    a11yProps: {\n      'aria-label': string\n      'data-disabled': boolean\n    }\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n}\n")),(0,a.kt)("h2",{id:"guides"},"Guides"),(0,a.kt)("h3",{id:"icon-button-size-guide"},"Icon Button size guide"),(0,a.kt)("p",null,"Icon Button sizes correlate directly to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.3.1-beta/development/icons/intro"},"Icon library")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example interface - does not exist in types"',title:'"Example',interface:!0,"-":!0,does:!0,not:!0,exist:!0,in:!0,'types"':!0},"interface IconButtonSizeGuide {\n  m: 's'\n  l: 'm'\n}\n")),(0,a.kt)("h3",{id:"button-color-guide"},"Button color guide"),(0,a.kt)("p",null,"Button colors are relative to the ",(0,a.kt)("inlineCode",{parentName:"p"},"background")," style and have a direct correlation from the ",(0,a.kt)("inlineCode",{parentName:"p"},"sentiment")," to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.3.1-beta/development/tokens/intro"},(0,a.kt)("inlineCode",{parentName:"a"},"design-tokens"))," package. Here is an interface that gives the color guide."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example interface - does not exist in types"',title:'"Example',interface:!0,"-":!0,does:!0,not:!0,exist:!0,in:!0,'types"':!0},"interface ButtonColorGuide {\n  action: 'var(--ps-action-background)'\n  default: 'var(--ps-background)'\n  danger: 'var(--ps-danger-background)'\n}\n")))}f.isMDXComponent=!0},41539:function(e,t,n){n.d(t,{g:function(){return r}});var o=n(98268);function a(e){return/^https?:\/\//.test(e)}function i(e){const t=function(e){return a(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...t},...a(e)&&{iconOptions:{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:"1em"}}}}var s=n(76411);const l="textLinkCSS-module_textLinkBase__P-zdY";function r(e){const t=function(e){return{href:(null==e?void 0:e.href)??""}}(e),n=i(t.href);return{...n,link:{...n.link,...(0,o.c)(`ps-text-link ${l}`)}}}(0,s.s)(".textLinkCSS-module_textLinkBase__P-zdY{align-items:center;background-color:transparent;border-radius:6px;color:var(--ps-action-navigation);display:inline-flex;font-family:inherit;gap:.25em;outline:none;text-decoration:underline;transition:background-color .25s ease-in-out,color .25s ease-in-out}.textLinkCSS-module_textLinkBase__P-zdY:visited{color:var(--ps-action-navigation-visited)}.textLinkCSS-module_textLinkBase__P-zdY:hover{text-decoration:none}.textLinkCSS-module_textLinkBase__P-zdY:active{text-decoration:underline}.textLinkCSS-module_textLinkBase__P-zdY:focus{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.textLinkCSS-module_textLinkBase__P-zdY:focus:not(:focus-visible){box-shadow:none;outline:none}")}}]);