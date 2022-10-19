"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1070],{24217:function(e,r,s){const t=s(86521);r.Z=function(e){return(0,t.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},96122:function(e,r,s){const t=s(86521);r.Z=function(e){return(0,t.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,t.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},14965:function(e,r,s){s.d(r,{Z:function(){return i}});var t=s(45721),n=s(86906),a=s(81371),l=(0,a.xe)({now:32}),o=(0,a.xe)({kind:"indeterminate"});function i(){return t.createElement(n.Z,null,t.createElement("div",{style:{display:"flex",justifyContent:"space-between",margin:"0 auto",width:"10rem"}},t.createElement("div",l.containerProps,t.createElement("svg",l.svgBoxProps,t.createElement("circle",l.baseCircleProps),t.createElement("circle",l.nowCircleProps))),t.createElement("div",o.containerProps,t.createElement("svg",o.svgBoxProps,t.createElement("circle",o.baseCircleProps),t.createElement("circle",o.nowCircleProps)))))}},99275:function(e,r,s){s.d(r,{N:function(){return l},p:function(){return a}});var t=s(45721),n=s(48921);function a(){return t.createElement(n.Z,null,"const progressProps = getCircularProgressProps({ now: 50 })\n\n<div {...progressProps.containerProps}>\n  <svg {...progressProps.svgBoxProps}>\n    <circle {...progressProps.baseCircleProps} />\n    <circle {...progressProps.nowCircleProps} />\n  </svg>\n</div>")}function l(){return t.createElement(n.Z,null,"import { getCircularProgressProps } from '@pluralsight/headless-styles';\n\nexport default function CircularProgress(props) {\n  const progressProps = getCircularProgressProps(props)\n\n  return (\n    <div {...progressProps.containerProps}>\n      <svg {...progressProps.svgBoxProps}>\n        <circle {...progressProps.baseCircleProps} />\n        <circle {...progressProps.nowCircleProps} />\n      </svg>\n    </div>\n  );\n}")}},92273:function(e,r,s){s.d(r,{Z:function(){return i}});var t=s(45721),n=s(86906),a=s(81371),l=(0,a.xe)({now:32,size:"xs"}),o=(0,a.xe)({now:50});function i(){return t.createElement(n.Z,null,t.createElement("div",{style:{alignItems:"center",display:"flex",justifyContent:"space-between",margin:"0 auto",width:"10rem"}},t.createElement("div",l.containerProps,t.createElement("svg",l.svgBoxProps,t.createElement("circle",l.baseCircleProps),t.createElement("circle",l.nowCircleProps))),t.createElement("div",o.containerProps,t.createElement("svg",o.svgBoxProps,t.createElement("circle",o.baseCircleProps),t.createElement("circle",o.nowCircleProps)))))}},53736:function(e,r,s){s.d(r,{E:function(){return a},p:function(){return l}});var t=s(45721),n=s(48921);function a(){return t.createElement(n.Z,null,"const xsProgressProps = getCircularProgressProps({\n  now: 32,\n  size: 'xs'\n})\nconst progressProps = getCircularProgressProps({ now: 50 })\n\n<div {...xsProgressProps.containerProps}>\n  <svg {...xsProgressProps.svgBoxProps}>\n    <circle {...xsProgressProps.baseCircleProps} />\n    <circle {...xsProgressProps.nowCircleProps} />\n  </svg>\n</div>\n<div {...progressProps.containerProps}>\n  <svg {...progressProps.svgBoxProps}>\n    <circle {...progressProps.baseCircleProps} />\n    <circle {...progressProps.nowCircleProps} />\n  </svg>\n</div>")}function l(){return t.createElement(n.Z,null,"import { getCircularProgressProps } from '@pluralsight/headless-styles';\n\nexport default function XSCircularProgress(props) {\n  const progressProps = getCircularProgressProps({...props, size: 'xs'})\n\n  return (\n    <div {...progressProps.containerProps}>\n      <svg {...progressProps.svgBoxProps}>\n        <circle {...progressProps.baseCircleProps} />\n        <circle {...progressProps.nowCircleProps} />\n      </svg>\n    </div>\n  );\n}")}},19048:function(e,r,s){s.d(r,{Z:function(){return l}});var t=s(45721),n=s(86906),a=(0,s(81371).xe)({kind:"indeterminate"});function l(){return t.createElement(n.Z,null,t.createElement("div",{style:{display:"flex",justifyContent:"space-between",margin:"0 auto"}},t.createElement("div",a.containerProps,t.createElement("svg",a.svgBoxProps,t.createElement("circle",a.baseCircleProps),t.createElement("circle",a.nowCircleProps)))))}},6797:function(e,r,s){s.d(r,{K:function(){return a},k:function(){return l}});var t=s(45721),n=s(48921);function a(){return t.createElement(n.Z,null,"const loadingProps = getCircularProgressProps({ kind: 'indeterminate'})\n\n<div {...loadingProps.containerProps}>\n  <svg {...loadingProps.svgBoxProps}>\n    <circle {...loadingProps.baseCircleProps} />\n    <circle {...loadingProps.nowCircleProps} />\n  </svg>\n</div>")}function l(){return t.createElement(n.Z,null,"import { getCircularProgressProps } from '@pluralsight/headless-styles';\n\nexport default function LoadingProgress(props) {\n  const loadingProps = getCircularProgressProps({...props, kind: 'indeterminate'})\n\n  return (\n    <div {...loadingProps.containerProps}>\n      <svg {...loadingProps.svgBoxProps}>\n        <circle {...loadingProps.baseCircleProps} />\n        <circle {...loadingProps.nowCircleProps} />\n      </svg>\n    </div>\n  );\n}")}},86906:function(e,r,s){s.d(r,{Z:function(){return l}});var t=s(45721),n={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"},a={alignItems:"center",column:!1,justifyContent:"space-between",textAlign:"center",type:"base"};function l(e){var r,s;void 0===e&&(e=a);var l=null!=(r=e.type)?r:a.type;return t.createElement("div",{className:n[l],style:{alignItems:e.alignItems,justifyContent:e.justifyContent,textAlign:null!=(s=e.textAlign)?s:"center",gridTemplateColumns:e.gridColumns&&"repeat("+e.gridColumns+", minmax(auto, max-content))"}},e.children)}},54288:function(e,r,s){s.d(r,{Z:function(){return I}});var t=s(60953),n=s(59005),a=s(45721),l=s(81371),o="button_sEkW",i="chakra_ow8e",c="chakraCircle_c8Xz",p="list_rMMG",u="listItem_bLPI",g="icon_nzIq",d="svelteBackground_c8BA",m="svelteOutline_tdvb",v=["className"],P=a.createElement("svg",{"aria-hidden":"true",className:g,focusable:"false",viewBox:"0 0 24 24"},a.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),h=a.createElement("svg",{"aria-hidden":"true",className:g,focusable:"false",viewBox:"0 0 1024 1024"},a.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),k=a.createElement("svg",{"aria-hidden":"true",className:""+g,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{className:m,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),a.createElement("path",{className:d,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var f={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:P,id:"source",href:"",label:"Show full source"},styled:{icon:h,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:a.createElement("svg",{"aria-hidden":"true",className:g+" "+i,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},a.createElement("rect",{className:c,width:"582",height:"582",rx:"291"}),a.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:a.createElement("svg",{"aria-hidden":"true",className:g,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:k,id:"svelte",label:"View Svelte"}}},C={size:"m",usage:"text"};function y(e){var r=f.results[e.techId],s=(0,l.Bb)(C).button.className,t="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return a.createElement("a",{"aria-label":r.label,className:s+" "+o,href:t,name:r.label,rel:"noopener noreferrer",target:"_blank",title:r.label},e.children)}function b(e){var r=e.techId,s=Object.assign({},(0,l.Bb)(C)).button,i=s.className,c=(0,n.Z)(s,v);return a.createElement("button",(0,t.Z)({className:i+" "+o,onClick:e.onToggleShow,title:f.results[r].label},c),a.createElement(w,{tabId:r}))}function w(e){return f.results[e.tabId].icon}function x(e){var r=e.techId;return a.createElement("li",{className:u},"source"===r?a.createElement(b,{onToggleShow:e.onToggleShow,techId:r}):a.createElement(y,{techId:r,href:e.sandboxList[r]},a.createElement(w,{tabId:r})))}function N(e){return a.createElement("ul",{className:p},f.items.map((function(r){return a.createElement(x,{key:r,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:r})})))}function E(e){var r=(0,a.useState)(!1),s=r[0],t=r[1];return a.createElement("div",null,a.createElement(N,{onToggleShow:function(){t((function(e){return!e}))},sandboxList:e.sandboxList}),s?e.fullCode:e.children)}var I=(0,a.memo)(E)},35053:function(e,r,s){s.d(r,{Z:function(){return o}});var t=s(45721),n=s(81371),a=s(24217),l=s(96122);function o(e){var r=e.href,s=(0,n.j8)({href:r}),o=(0,n.L1)(s.iconOptions),i=r.includes("github")?a.Z:l.Z;return t.createElement("a",s.link,t.createElement(i,o),e.children)}},92338:function(e,r,s){var t=s(45721),n=s(81371),a=s(22534),l=Object.assign({React:t},t,{getIconProps:n.L1,PlaceholderIcon:a.Z});r.Z=l},35672:function(e,r,s){s.r(r),s.d(r,{assets:function(){return k},contentTitle:function(){return P},default:function(){return y},frontMatter:function(){return v},metadata:function(){return h},toc:function(){return f}});var t=s(60953),n=s(59005),a=(s(45721),s(70167)),l=s(14965),o=s(19048),i=s(92273),c=s(99275),p=s(6797),u=s(53736),g=s(35053),d=s(54288),m=["components"],v={tags:["Development","Packages","Components","Headless Styles","Progress"],title:"Circular Progress"},P=void 0,h={unversionedId:"development/headless-styles/CircularProgress",id:"development/headless-styles/CircularProgress",title:"Circular Progress",description:"The Circular Progress is used to display the progress status for a task that takes a long time or consists of several steps.",source:"@site/docs/development/headless-styles/CircularProgress.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/CircularProgress",permalink:"/docs/next/development/headless-styles/CircularProgress",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/headless-styles/CircularProgress.mdx",tags:[{label:"Development",permalink:"/docs/next/tags/development"},{label:"Packages",permalink:"/docs/next/tags/packages"},{label:"Components",permalink:"/docs/next/tags/components"},{label:"Headless Styles",permalink:"/docs/next/tags/headless-styles"},{label:"Progress",permalink:"/docs/next/tags/progress"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Progress"],title:"Circular Progress"},sidebar:"development",previous:{title:"Checkbox",permalink:"/docs/next/development/headless-styles/Checkbox"},next:{title:"Confirm Dialog",permalink:"/docs/next/development/headless-styles/ConfirmDialog"}},k={},f=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Circular Progress",id:"basic-circular-progress",level:3},{value:"Indeterminate CircularProgress",id:"indeterminate-circularprogress",level:3},{value:"Circular Progress sizes",id:"circular-progress-sizes",level:3},{value:"MUI",id:"mui",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"CircularProgressOptions",id:"circularprogressoptions",level:3},{value:"CircularProgressA11yOptions",id:"circularprogressa11yoptions",level:3},{value:"Props",id:"props",level:2},{value:"A11yProps",id:"a11yprops",level:3},{value:"CircularProgressProps",id:"circularprogressprops",level:3},{value:"JSCircularProgressProps",id:"jscircularprogressprops",level:3}],C={toc:f};function y(e){var r=e.components,s=(0,n.Z)(e,m);return(0,a.kt)("wrapper",(0,t.Z)({},C,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Circular Progress is used to display the progress status for a task that takes a long time or consists of several steps."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Circular Progress ",(0,a.kt)("strong",{parentName:"p"},"should not be used for initial page loading"),". This API is meant for action-based responses that usually require a fetch call. For page loading, use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/development/headless-styles/Skeleton"},"Skeleton API"),".")),(0,a.kt)(g.Z,{icon:"github",href:"https://github.com/pluralsight/tva/tree/main/packages/headless-styles/src/components/CircularProgress",mdxType:"ViewSourceLink"},"View source"),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getCircularProgressProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Determinate Progress: fills the ciruclar track with color as the indicator moves from 0 to 360 degrees."),(0,a.kt)("li",{parentName:"ul"},'Indeterminate progress: spins in a "loading" animation along the color track.')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-circular-progress"},"Basic Circular Progress"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getCircularProgressProps")," comes with two kinds to change the visual style of the progress. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"determinate")," (default), and ",(0,a.kt)("inlineCode",{parentName:"p"},"indeterminate"),"."),(0,a.kt)(l.Z,{mdxType:"BasicCircularProgress"}),(0,a.kt)(d.Z,{fullCode:(0,a.kt)(c.N,{mdxType:"BasicCircularProgressFullPreview"}),sandboxList:{chakra:"ps-react-chakra-4w32pm",joy:"",styled:"sc-1m7nrl",svelte:"svelte-0v8wrj"},mdxType:"LiveExampleTabs"},(0,a.kt)(c.p,{mdxType:"BasicCircularProgressPreview"})),(0,a.kt)("h3",{id:"indeterminate-circularprogress"},"Indeterminate CircularProgress"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"indeterminate")," kind is to be used when replacing content during an action-based fetch call."),(0,a.kt)(o.Z,{mdxType:"IndeterminateCircularProgress"}),(0,a.kt)(d.Z,{fullCode:(0,a.kt)(p.k,{mdxType:"IndeterminateCircularProgressFullPreview"}),sandboxList:{chakra:"ps-react-chakra-4w32pm",joy:"",styled:"sc-1m7nrl",svelte:"svelte-0v8wrj"},mdxType:"LiveExampleTabs"},(0,a.kt)(p.K,{mdxType:"IndeterminateCircularProgressPreview"})),(0,a.kt)("h3",{id:"circular-progress-sizes"},"Circular Progress sizes"),(0,a.kt)("p",null,"There are two sizes available for the circular-progress. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"xs")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," (default)."),(0,a.kt)(i.Z,{mdxType:"CircularProgressSizes"}),(0,a.kt)(d.Z,{fullCode:(0,a.kt)(u.p,{mdxType:"CircularProgressSizesFullPreview"}),sandboxList:{chakra:"ps-react-chakra-4w32pm",joy:"",styled:"sc-1m7nrl",svelte:"svelte-0v8wrj"},mdxType:"LiveExampleTabs"},(0,a.kt)(u.E,{mdxType:"CircularProgressSizesPreview"})),(0,a.kt)("h3",{id:"mui"},"MUI"),(0,a.kt)("p",null,"The MUI library is incompatible with the Pluralsight Design Circular Progress due to the fundamental difference in how the component is built (they use a single ",(0,a.kt)("inlineCode",{parentName:"p"},"circle")," component and our design requires two. This is important for accessibility)."),(0,a.kt)("p",null,"If you use MUI, we recommend using our code examples displayed in each section."),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getCircularProgressProps")," returns an ",(0,a.kt)("a",{parentName:"p",href:"#a11yprops"},"a11yProps"),' Object to spread over the "container" component.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It sets the ",(0,a.kt)("inlineCode",{parentName:"li"},"role")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"progressbar")," to denote that it is a progress."),(0,a.kt)("li",{parentName:"ul"},"It uses ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-valuenow")," set to the ",(0,a.kt)("inlineCode",{parentName:"li"},"now")," value passed into the ",(0,a.kt)("a",{parentName:"li",href:"#circularprogressoptions"},"CircularProgressOptions")," to ensure the progress percent is visible to screen readers.")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getCircularProgressProps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"options"),": ",(0,a.kt)("a",{parentName:"td",href:"#circularprogressoptions"},"CircularProgressOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"kind"),": 'determinate', ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"size"),": 'm'"),(0,a.kt)("td",{parentName:"tr",align:null},"Get main circular-progress styles.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getJSCircularProgressProps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"options"),": ",(0,a.kt)("a",{parentName:"td",href:"#circularprogressoptions"},"CircularProgressOptions")),(0,a.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,a.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API.")))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"circularprogressoptions"},"CircularProgressOptions"),(0,a.kt)("p",null,"This interface is available as an ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CircularProgressOptions extends CircularProgressA11yOptions {\n  kind?: 'determinate' | 'indeterminate'\n  size?: 'xs' | 'm'\n  tech?: 'svelte'\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { CircularProgressOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h3",{id:"circularprogressa11yoptions"},"CircularProgressA11yOptions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CircularProgressA11yOptions {\n  max?: number\n  min?: number\n  now?: number\n}\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("h3",{id:"a11yprops"},"A11yProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface A11yProps {\n  'aria-valuemax': number\n  'aria-valuemin': number\n  'aria-valuenow': number\n  role: 'progressbar'\n}\n")),(0,a.kt)("h3",{id:"circularprogressprops"},"CircularProgressProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProgressProps {\n  containerProps: {\n    a11yProps: A11yProps,\n    className: string\n  }\n  svgBoxProps: {\n    className: string,\n    viewBox: string\n  },\n  baseCircleProps: {\n    cx: string,\n    cy: string,\n    r: string,\n    strokeWidth: string,\n    className: string\n  },\n  nowCircleProps: {\n    className: string,\n    cx: string,\n    cy: string,\n    r: string,\n    strokeWidth: string,,\n    strokeDashoffset: string,\n    strokeDasharray: string\n  },\n  labelProps: {\n    className: string,\n    value: string\n  }\n}\n")),(0,a.kt)("h3",{id:"jscircularprogressprops"},"JSCircularProgressProps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSProgressProps {\n  containerProps: {\n    a11yProps: A11yProps\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n  }\n  svgBoxProps: {\n    keyframes: Record<string, unknown>\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n    svgProps: {\n      viewBox: string\n    }\n  }\n  baseCircleProps: {\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n    svgProps: {\n      cx: string\n      cy: string\n      r: string\n      strokeWidth: string\n      viewBox: string\n    }\n  }\n  nowCircleProps: {\n    keyframes: Record<string, unknown>\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n    svgProps: {\n      cx: string\n      cy: string\n      r: string\n      strokeWidth: string\n      strokeDashoffset: string\n      strokeDasharray: string\n      viewBox: string\n    }\n  }\n  labelProps: {\n    cssProps: TemplateLiteralArray\n    styles: Record<string, unknown>\n    value: string\n  }\n}\n")))}y.isMDXComponent=!0}}]);