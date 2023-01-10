"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28186],{9637:function(e,r,n){const t=n(86521);r.Z=function(e){return(0,t.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},76548:function(e,r,n){const t=n(86521);r.Z=function(e){return(0,t.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,t.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},69385:function(e,r,n){n.d(r,{Z:function(){return l}});var t=n(45721),s=n(60853),a=n(50781),o=(0,a.g)({ariaLabel:"basic circular progress example",now:32}),i=(0,a.g)({ariaLabel:"basic indeterminate circular progress example",kind:"indeterminate"});function l(){return t.createElement(s.Z,null,t.createElement("div",{style:{display:"flex",justifyContent:"space-between",margin:"0 auto",width:"10rem"}},t.createElement("div",o.containerProps,t.createElement("svg",o.svgBoxProps,t.createElement("circle",o.baseCircleProps),t.createElement("circle",o.nowCircleProps))),t.createElement("div",i.containerProps,t.createElement("svg",i.svgBoxProps,t.createElement("circle",i.baseCircleProps),t.createElement("circle",i.nowCircleProps)))))}},82844:function(e,r,n){n.d(r,{N:function(){return o},p:function(){return a}});var t=n(45721),s=n(63467);function a(){return t.createElement(s.Z,null,"const progressProps = getCircularProgressProps({ now: 50 })\n\n<div {...progressProps.containerProps}>\n  <svg {...progressProps.svgBoxProps}>\n    <circle {...progressProps.baseCircleProps} />\n    <circle {...progressProps.nowCircleProps} />\n  </svg>\n</div>")}function o(){return t.createElement(s.Z,null,"import { getCircularProgressProps } from '@pluralsight/headless-styles';\n\nexport default function CircularProgress(props) {\n  const progressProps = getCircularProgressProps(props)\n\n  return (\n    <div {...progressProps.containerProps}>\n      <svg {...progressProps.svgBoxProps}>\n        <circle {...progressProps.baseCircleProps} />\n        <circle {...progressProps.nowCircleProps} />\n      </svg>\n    </div>\n  );\n}")}},36070:function(e,r,n){n.d(r,{Z:function(){return l}});var t=n(45721),s=n(60853),a=n(50781),o=(0,a.g)({ariaLabel:"extra small (xs) circular progress example",now:32,size:"xs"}),i=(0,a.g)({ariaLabel:"medium (m) circular progress example",now:50});function l(){return t.createElement(s.Z,null,t.createElement("div",{style:{alignItems:"center",display:"flex",justifyContent:"space-between",margin:"0 auto",width:"10rem"}},t.createElement("div",o.containerProps,t.createElement("svg",o.svgBoxProps,t.createElement("circle",o.baseCircleProps),t.createElement("circle",o.nowCircleProps))),t.createElement("div",i.containerProps,t.createElement("svg",i.svgBoxProps,t.createElement("circle",i.baseCircleProps),t.createElement("circle",i.nowCircleProps)))))}},23100:function(e,r,n){n.d(r,{E:function(){return a},p:function(){return o}});var t=n(45721),s=n(63467);function a(){return t.createElement(s.Z,null,"const xsProgressProps = getCircularProgressProps({\n  now: 32,\n  size: 'xs'\n})\nconst progressProps = getCircularProgressProps({ now: 50 })\n\n<div {...xsProgressProps.containerProps}>\n  <svg {...xsProgressProps.svgBoxProps}>\n    <circle {...xsProgressProps.baseCircleProps} />\n    <circle {...xsProgressProps.nowCircleProps} />\n  </svg>\n</div>\n<div {...progressProps.containerProps}>\n  <svg {...progressProps.svgBoxProps}>\n    <circle {...progressProps.baseCircleProps} />\n    <circle {...progressProps.nowCircleProps} />\n  </svg>\n</div>")}function o(){return t.createElement(s.Z,null,"import { getCircularProgressProps } from '@pluralsight/headless-styles';\n\nexport default function XSCircularProgress(props) {\n  const progressProps = getCircularProgressProps({...props, size: 'xs'})\n\n  return (\n    <div {...progressProps.containerProps}>\n      <svg {...progressProps.svgBoxProps}>\n        <circle {...progressProps.baseCircleProps} />\n        <circle {...progressProps.nowCircleProps} />\n      </svg>\n    </div>\n  );\n}")}},26518:function(e,r,n){n.d(r,{Z:function(){return o}});var t=n(45721),s=n(60853),a=(0,n(50781).g)({ariaLabel:"indeterminate circular progress example",kind:"indeterminate"});function o(){return t.createElement(s.Z,null,t.createElement("div",{style:{display:"flex",justifyContent:"space-between",margin:"0 auto"}},t.createElement("div",a.containerProps,t.createElement("svg",a.svgBoxProps,t.createElement("circle",a.baseCircleProps),t.createElement("circle",a.nowCircleProps)))))}},21013:function(e,r,n){n.d(r,{K:function(){return a},k:function(){return o}});var t=n(45721),s=n(63467);function a(){return t.createElement(s.Z,null,"const loadingProps = getCircularProgressProps({ kind: 'indeterminate'})\n\n<div {...loadingProps.containerProps}>\n  <svg {...loadingProps.svgBoxProps}>\n    <circle {...loadingProps.baseCircleProps} />\n    <circle {...loadingProps.nowCircleProps} />\n  </svg>\n</div>")}function o(){return t.createElement(s.Z,null,"import { getCircularProgressProps } from '@pluralsight/headless-styles';\n\nexport default function LoadingProgress(props) {\n  const loadingProps = getCircularProgressProps({...props, kind: 'indeterminate'})\n\n  return (\n    <div {...loadingProps.containerProps}>\n      <svg {...loadingProps.svgBoxProps}>\n        <circle {...loadingProps.baseCircleProps} />\n        <circle {...loadingProps.nowCircleProps} />\n      </svg>\n    </div>\n  );\n}")}},60853:function(e,r,n){n.d(r,{Z:function(){return o}});var t=n(45721),s={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"},a={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function o(e){var r,n,o;void 0===e&&(e=a);var i=null!=(r=e.type)?r:a.type,l=e.gridColumns?"repeat("+e.gridColumns+", minmax(auto, max-content))":"initial",c={alignItems:e.alignItems,gridTemplateColumns:l,justifyContent:e.justifyContent,textAlign:null!=(n=e.textAlign)?n:"center",gap:null!=(o=e.gap)?o:"1rem",columnGap:e.columnGap};return t.createElement("div",{className:s[i],style:c},e.children)}},26652:function(e,r,n){n.d(r,{Z:function(){return N}});var t=n(60953),s=n(59005),a=n(45721),o=n(56578),i="button_sEkW",l="chakra_ow8e",c="chakraCircle_c8Xz",p="list_rMMG",u="listItem_bLPI",d="icon_nzIq",g="svelteBackground_c8BA",m="svelteOutline_tdvb",v=["className"],P=a.createElement("svg",{"aria-hidden":"true",className:d,focusable:"false",viewBox:"0 0 24 24"},a.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),h=a.createElement("svg",{"aria-hidden":"true",className:d,focusable:"false",viewBox:"0 0 1024 1024"},a.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),k=a.createElement("svg",{"aria-hidden":"true",className:""+d,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{className:m,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),a.createElement("path",{className:g,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var f={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:P,id:"source",href:"",label:"Show full source"},styled:{icon:h,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:a.createElement("svg",{"aria-hidden":"true",className:d+" "+l,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},a.createElement("rect",{className:c,width:"582",height:"582",rx:"291"}),a.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:a.createElement("svg",{"aria-hidden":"true",className:d,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:k,id:"svelte",label:"View Svelte"}}},C={size:"m",usage:"text"};function x(e){var r=f.results[e.techId],n=(0,o.g)(C).button.className,t="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return a.createElement("a",{"aria-label":r.label,className:n+" "+i,href:t,name:r.label,rel:"noopener noreferrer",target:"_blank",title:r.label},e.children)}function b(e){var r=e.techId,n=Object.assign({},(0,o.g)(C)).button,l=n.className,c=(0,s.Z)(n,v);return a.createElement("button",(0,t.Z)({className:l+" "+i,onClick:e.onToggleShow,title:f.results[r].label},c),a.createElement(y,{tabId:r}))}function y(e){return f.results[e.tabId].icon}function w(e){var r=e.techId;return a.createElement("li",{className:u},"source"===r?a.createElement(b,{onToggleShow:e.onToggleShow,techId:r}):a.createElement(x,{techId:r,href:e.sandboxList[r]},a.createElement(y,{tabId:r})))}function _(e){return a.createElement("ul",{className:p},f.items.map((function(r){return a.createElement(w,{key:r,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:r})})))}function S(e){var r=(0,a.useState)(!1),n=r[0],t=r[1];return a.createElement("div",null,a.createElement(_,{onToggleShow:function(){t((function(e){return!e}))},sandboxList:e.sandboxList}),n?e.fullCode:e.children)}var N=(0,a.memo)(S)},94880:function(e,r,n){n.d(r,{Z:function(){return l}});var t=n(45721),s=n(33847),a=n(48114),o=n(9637),i=n(76548);function l(e){var r=e.href,n=(0,s.g)({href:r}),l=(0,a.g)(n.iconOptions),c=r.includes("github")?o.Z:i.Z;return t.createElement("a",n.link,t.createElement(c,l),e.children)}},80858:function(e,r,n){var t=n(45721),s=n(59323),a=n(39640),o=n(89521),i=n(54493),l=n(56578),c=n(48114),p=n(42145),u=n(13261),d=n(38295),g=n(98846),m=n(50523),v=n(85403),P=n(16284),h=n(74149),k=n(99170),f=n(31072),C=n(88878),x=n(82657),b=n(56561),y=n(30814),w=n(24799),_=Object.assign({React:t},t,{getButtonProps:s.g,getFormControlProps:a.g,getFormLabelProps:o.g,getGridProps:i.g,getGridItemProps:i.a,getIconButtonProps:l.g,getIconProps:c.g,getInputProps:p.g,getMenuProps:u.g,getMenuItemProps:u.a,getPaginationProps:d.g,getPopoverProps:g.g,getRadioProps:m.g,getSelectProps:v.g,CalendarIcon:P.Z,ChevronDownIcon:h.Z,ChevronRightIcon:k.Z,CloseIcon:f.Z,EyeIcon:C.Z,EyeOffIcon:x.Z,PlaceholderIcon:b.Z,WarningTriangleFilledIcon:y.Z,useAutoFormatDate:w.y0,useMenuInteraction:w.P8,useRovingTabIndex:w.XZ,useSubmenuInteraction:w.iL});r.Z=_},48072:function(e,r,n){n.r(r),n.d(r,{assets:function(){return k},contentTitle:function(){return P},default:function(){return x},frontMatter:function(){return v},metadata:function(){return h},toc:function(){return f}});var t=n(60953),s=n(59005),a=(n(45721),n(70167)),o=n(69385),i=n(26518),l=n(36070),c=n(82844),p=n(21013),u=n(23100),d=n(94880),g=n(26652),m=["components"],v={tags:["Development","Packages","Components","Headless Styles","Progress"],title:"Circular Progress"},P=void 0,h={unversionedId:"development/headless-styles/CircularProgress",id:"version-0.1.0-alpha/development/headless-styles/CircularProgress",title:"Circular Progress",description:"The Circular Progress is used to display the progress status for a task that takes a long time or consists of several steps.",source:"@site/versioned_docs/version-0.1.0-alpha/development/headless-styles/CircularProgress.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/CircularProgress",permalink:"/docs/0.1.0-alpha/development/headless-styles/CircularProgress",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.1.0-alpha/development/headless-styles/CircularProgress.mdx",tags:[{label:"Development",permalink:"/docs/0.1.0-alpha/tags/development"},{label:"Packages",permalink:"/docs/0.1.0-alpha/tags/packages"},{label:"Components",permalink:"/docs/0.1.0-alpha/tags/components"},{label:"Headless Styles",permalink:"/docs/0.1.0-alpha/tags/headless-styles"},{label:"Progress",permalink:"/docs/0.1.0-alpha/tags/progress"}],version:"0.1.0-alpha",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Progress"],title:"Circular Progress"},sidebar:"development",previous:{title:"Checkbox",permalink:"/docs/0.1.0-alpha/development/headless-styles/Checkbox"},next:{title:"Confirm Dialog",permalink:"/docs/0.1.0-alpha/development/headless-styles/ConfirmDialog"}},k={},f=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Circular Progress",id:"basic-circular-progress",level:3},{value:"Indeterminate CircularProgress",id:"indeterminate-circularprogress",level:3},{value:"Circular Progress sizes",id:"circular-progress-sizes",level:3},{value:"MUI",id:"mui",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"CircularProgressOptions",id:"circularprogressoptions",level:3},{value:"CircularProgressA11yOptions",id:"circularprogressa11yoptions",level:3},{value:"Props",id:"props",level:2},{value:"A11yProps",id:"a11yprops",level:3},{value:"CircularProgressProps",id:"circularprogressprops",level:3},{value:"JSCircularProgressProps",id:"jscircularprogressprops",level:3}],C={toc:f};function x(e){var r=e.components,n=(0,s.Z)(e,m);return(0,a.kt)("wrapper",(0,t.Z)({},C,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Circular Progress is used to display the progress status for a task that takes a long time or consists of several steps."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Circular Progress ",(0,a.kt)("strong",{parentName:"p"},"should not be used for initial page loading"),". This API is meant for action-based responses that usually require a fetch call. For page loading, use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.1.0-alpha/development/headless-styles/Skeleton"},"Skeleton API"),".")),(0,a.kt)(d.Z,{icon:"github",href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/CircularProgress",mdxType:"ViewSourceLink"},"View source"),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getCircularProgressProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Determinate Progress: fills the ciruclar track with color as the indicator moves from 0 to 360 degrees."),(0,a.kt)("li",{parentName:"ul"},'Indeterminate progress: spins in a "loading" animation along the color track.')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-circular-progress"},"Basic Circular Progress"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getCircularProgressProps")," comes with two kinds to change the visual style of the progress. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"determinate")," (default), and ",(0,a.kt)("inlineCode",{parentName:"p"},"indeterminate"),"."),(0,a.kt)(o.Z,{mdxType:"BasicCircularProgress"}),(0,a.kt)(g.Z,{fullCode:(0,a.kt)(c.N,{mdxType:"BasicCircularProgressFullPreview"}),sandboxList:{chakra:"ps-react-chakra-4w32pm",joy:"",styled:"sc-1m7nrl",svelte:"svelte-0v8wrj"},mdxType:"LiveExampleTabs"},(0,a.kt)(c.p,{mdxType:"BasicCircularProgressPreview"})),(0,a.kt)("h3",{id:"indeterminate-circularprogress"},"Indeterminate CircularProgress"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"indeterminate")," kind is to be used when replacing content during an action-based fetch call."),(0,a.kt)(i.Z,{mdxType:"IndeterminateCircularProgress"}),(0,a.kt)(g.Z,{fullCode:(0,a.kt)(p.k,{mdxType:"IndeterminateCircularProgressFullPreview"}),sandboxList:{chakra:"ps-react-chakra-4w32pm",joy:"",styled:"sc-1m7nrl",svelte:"svelte-0v8wrj"},mdxType:"LiveExampleTabs"},(0,a.kt)(p.K,{mdxType:"IndeterminateCircularProgressPreview"})),(0,a.kt)("h3",{id:"circular-progress-sizes"},"Circular Progress sizes"),(0,a.kt)("p",null,"There are two sizes available for the circular-progress. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"xs")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," (default)."),(0,a.kt)(l.Z,{mdxType:"CircularProgressSizes"}),(0,a.kt)(g.Z,{fullCode:(0,a.kt)(u.p,{mdxType:"CircularProgressSizesFullPreview"}),sandboxList:{chakra:"ps-react-chakra-4w32pm",joy:"",styled:"sc-1m7nrl",svelte:"svelte-0v8wrj"},mdxType:"LiveExampleTabs"},(0,a.kt)(u.E,{mdxType:"CircularProgressSizesPreview"})),(0,a.kt)("h3",{id:"mui"},"MUI"),(0,a.kt)("p",null,"The MUI library is incompatible with the Pluralsight Design Circular Progress due to the fundamental difference in how the component is built (they use a single ",(0,a.kt)("inlineCode",{parentName:"p"},"circle")," component and our design requires two. This is important for accessibility)."),(0,a.kt)("p",null,"If you use MUI, we recommend using our code examples displayed in each section."),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getCircularProgressProps")," returns an ",(0,a.kt)("a",{parentName:"p",href:"#a11yprops"},"a11yProps"),' Object to spread over the "container" component.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It sets the ",(0,a.kt)("inlineCode",{parentName:"li"},"role")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"progressbar")," to denote that it is a progress."),(0,a.kt)("li",{parentName:"ul"},"It uses ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-valuenow")," set to the ",(0,a.kt)("inlineCode",{parentName:"li"},"now")," value passed into the ",(0,a.kt)("a",{parentName:"li",href:"#circularprogressoptions"},"CircularProgressOptions")," to ensure the progress percent is visible to screen readers.")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getCircularProgressProps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"options"),": ",(0,a.kt)("a",{parentName:"td",href:"#circularprogressoptions"},"CircularProgressOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"kind"),": 'determinate', ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"size"),": 'm'"),(0,a.kt)("td",{parentName:"tr",align:null},"Get main circular-progress styles.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getJSCircularProgressProps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"options"),": ",(0,a.kt)("a",{parentName:"td",href:"#circularprogressoptions"},"CircularProgressOptions")),(0,a.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,a.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API.")))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"circularprogressoptions"},"CircularProgressOptions"),(0,a.kt)("p",null,"This interface is available as an ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CircularProgressOptions extends CircularProgressA11yOptions {\n  kind?: 'determinate' | 'indeterminate'\n  size?: 'xs' | 'm'\n  tech?: 'svelte'\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { CircularProgressOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h3",{id:"circularprogressa11yoptions"},"CircularProgressA11yOptions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CircularProgressA11yOptions {\n  max?: number\n  min?: number\n  now?: number\n}\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("h3",{id:"a11yprops"},"A11yProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface A11yProps {\n  'aria-valuemax': number\n  'aria-valuemin': number\n  'aria-valuenow': number\n  role: 'progressbar'\n}\n")),(0,a.kt)("h3",{id:"circularprogressprops"},"CircularProgressProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProgressProps {\n  containerProps: {\n    a11yProps: A11yProps,\n    className: string\n  }\n  svgBoxProps: {\n    className: string,\n    viewBox: string\n  },\n  baseCircleProps: {\n    cx: string,\n    cy: string,\n    r: string,\n    strokeWidth: string,\n    className: string\n  },\n  nowCircleProps: {\n    className: string,\n    cx: string,\n    cy: string,\n    r: string,\n    strokeWidth: string,,\n    strokeDashoffset: string,\n    strokeDasharray: string\n  },\n  labelProps: {\n    className: string,\n    value: string\n  }\n}\n")),(0,a.kt)("h3",{id:"jscircularprogressprops"},"JSCircularProgressProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSProgressProps {\n  containerProps: {\n    a11yProps: A11yProps\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n  }\n  svgBoxProps: {\n    keyframes: Record<string, unknown>\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n    svgProps: {\n      viewBox: string\n    }\n  }\n  baseCircleProps: {\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n    svgProps: {\n      cx: string\n      cy: string\n      r: string\n      strokeWidth: string\n      viewBox: string\n    }\n  }\n  nowCircleProps: {\n    keyframes: Record<string, unknown>\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n    svgProps: {\n      cx: string\n      cy: string\n      r: string\n      strokeWidth: string\n      strokeDashoffset: string\n      strokeDasharray: string\n      viewBox: string\n    }\n  }\n  labelProps: {\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n    value: string\n  }\n}\n")))}x.isMDXComponent=!0},50781:function(e,r,n){n.d(r,{g:function(){return g}});var t=n(7603);const s="progressbar",a="aria-label",o="aria-valuemax",i="aria-valuemin",l="aria-valuenow";function c(e){return{strokeDashoffset:"66",strokeDasharray:function(e){const r=2.64*e;return`${r} ${264-r}`}(e)}}var p=n(57970);const u={base:"circularProgressCSS-module_base__H7XDr",box:"circularProgressCSS-module_box__v6oGX",circle:"circularProgressCSS-module_circle__qeRxj",circleNow:"circularProgressCSS-module_circleNow__2EOZd",text:"circularProgressCSS-module_text__c8oYS",determinate:"circularProgressCSS-module_determinate__AkXEW circularProgressCSS-module_box__v6oGX",indeterminate:"circularProgressCSS-module_indeterminate__xvqQo",spin:"circularProgressCSS-module_spin__WoqJD",loading:"circularProgressCSS-module_loading__CW7zq",mSize:"circularProgressCSS-module_mSize__klL16 circularProgressCSS-module_box__v6oGX",xsSize:"circularProgressCSS-module_xsSize__6f1-q circularProgressCSS-module_box__v6oGX"};(0,p.s)("@keyframes circularProgressCSS-module_loading__CW7zq{0%{stroke-dasharray:1,400;stroke-dashoffset:0}50%{stroke-dasharray:400,400;stroke-dashoffset:-100}to{stroke-dasharray:400,400;stroke-dashoffset:-260}}@keyframes circularProgressCSS-module_spin__WoqJD{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.circularProgressCSS-module_base__H7XDr{display:inline-block;font-family:inherit;position:relative;vertical-align:middle}.circularProgressCSS-module_box__v6oGX{height:3rem;width:3rem}.circularProgressCSS-module_circle__qeRxj{fill:transparent;stroke:var(--ps-border)}.circularProgressCSS-module_circleNow__2EOZd{fill:transparent;stroke:var(--ps-text);transition-duration:.6s;transition-property:stroke-dasharray,stroke;transition-timing-function:ease}.circularProgressCSS-module_text__c8oYS{display:inline-block;font-family:inherit;font-size:.75rem;left:50%;position:absolute;text-align:center;top:42%;transform:translate(-50%,-50%);width:100%}.circularProgressCSS-module_indeterminate__xvqQo.circularProgressCSS-module_box__v6oGX{animation-direction:normal;animation-duration:1.5s;animation-fill-mode:none;animation-iteration-count:infinite;animation-name:circularProgressCSS-module_spin__WoqJD;animation-play-state:running;animation-timing-function:linear}.circularProgressCSS-module_indeterminate__xvqQo{animation-direction:normal;animation-duration:1.5s;animation-fill-mode:none;animation-iteration-count:infinite;animation-name:circularProgressCSS-module_loading__CW7zq;animation-play-state:running;animation-timing-function:linear}.circularProgressCSS-module_xsSize__6f1-q{height:1.25rem;width:1.25rem}");const d="ps-circular-progress";function g(e){const{kind:r,size:n,...p}=function(e){return{ariaLabel:(null==e?void 0:e.ariaLabel)??"circular progress indicator",kind:(null==e?void 0:e.kind)??"determinate",max:(null==e?void 0:e.max)??100,min:(null==e?void 0:e.min)??0,now:(null==e?void 0:e.now)??0,size:(null==e?void 0:e.size)??"m"}}(e),g=function(e,r){return"indeterminate"===r?{[a]:null==e?void 0:e.ariaLabel,role:s}:{[a]:null==e?void 0:e.ariaLabel,[o]:null==e?void 0:e.max,[i]:null==e?void 0:e.min,[l]:null==e?void 0:e.now,role:s}}(p,r),{sizeClass:m}=function(e){return{sizeClass:`${e.size}Size`}}({size:n}),v=p.now,P=`${v}%`;return{containerProps:{...g,...(0,t.c)(`${d} ${u.base}`)},svgBoxProps:{...(0,t.c)(`${d}-box ${u[m]} ${u[r]}`),viewBox:"0 0 100 100"},baseCircleProps:{cx:"50",cy:"50",r:"42",strokeWidth:"12px",...(0,t.c)(`${d}-base ${u.circle}`)},nowCircleProps:{cx:"50",cy:"50",r:"42",strokeWidth:"12px",...(0,t.c)(`${d}-now ${u.circleNow} ${u[r]}`),...c(v)},labelProps:{...(0,t.c)(`${d}-label ${u.text}`),value:P}}}},33847:function(e,r,n){n.d(r,{g:function(){return l}});var t=n(7603);function s(e){return/^https?:\/\//.test(e)}function a(e){const r=function(e){return s(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...r},...s(e)&&{iconOptions:{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:"1em"}}}}var o=n(57970);const i="textLinkCSS-module_textLinkBase__P-zdY";function l(e){const r=function(e){return{href:(null==e?void 0:e.href)??""}}(e),n=a(r.href);return{...n,link:{...n.link,...(0,t.c)(`ps-text-link ${i}`)}}}(0,o.s)(".textLinkCSS-module_textLinkBase__P-zdY{align-items:center;background-color:transparent;border-radius:6px;color:var(--ps-action-navigation);display:inline-flex;font-family:inherit;gap:.25em;outline:none;text-decoration:underline;transition:background-color .25s ease-in-out,color .25s ease-in-out}.textLinkCSS-module_textLinkBase__P-zdY:visited{color:var(--ps-action-navigation-visited)}.textLinkCSS-module_textLinkBase__P-zdY:hover{text-decoration:none}.textLinkCSS-module_textLinkBase__P-zdY:active{text-decoration:underline}.textLinkCSS-module_textLinkBase__P-zdY:focus{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.textLinkCSS-module_textLinkBase__P-zdY:focus:not(:focus-visible){box-shadow:none;outline:none}")}}]);