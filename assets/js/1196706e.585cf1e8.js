"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51716],{61411:function(e,t,a){const n=a(86521);t.Z=function(e){return(0,n.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},75362:function(e,t,a){const n=a(86521);t.Z=function(e){return(0,n.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,n.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},81593:function(e,t,a){const n=a(86521);t.Z=function(e){return(0,n.jsx)("svg",{"aria-label":"person",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 8c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4Zm2 0c0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2s-2-.897-2-2ZM4.5 20a.5.5 0 0 1-.5-.5V19c0-3.533 3.29-6 8-6s8 2.467 8 6v.5a.5.5 0 0 1-.5.5h-15Zm13.342-2H6.159c.598-1.808 2.834-3 5.842-3 3.008 0 5.243 1.192 5.841 3Z"})})}},96596:function(e,t,a){var n=a(45721),r=a(98260),l=a(67235);function o(e){const t=(0,r.g)({label:e.label,sentiment:"default",size:e.size});return n.createElement("span",t.wrapper,n.createElement("span",t.label,e.size))}t.Z=function(){return n.createElement(l.Z,null,n.createElement(o,{size:"xs"}),n.createElement(o,{size:"s"}),n.createElement(o,{size:"m"}),n.createElement(o,{size:"l"}),n.createElement(o,{size:"xl"}))}},45323:function(e,t,a){a.d(t,{K:function(){return l},m:function(){return o}});var n=a(45721),r=a(27233);function l(){return n.createElement(r.Z,null,"const avatar = getAvatarProps({\n  label: 'extra large avatar',\n  size: 'xl'\n})\n\n<span {...avatar.wrapper}>\n  <span {...avatar.label}>xl</span>\n</span>")}function o(){return n.createElement(r.Z,null,"import { getAvatarProps } from '@pluralsight/headless-styles'\n\nexport default function Avatar(props) {\n  const avatar = getAvatarProps({\n    label: props.label\n    sentiment: props.sentiment,\n    // highlight-next-line\n    size: props.size,\n  })\n\n  return (\n    <span {...avatar.wrapper}>\n      <span {...avatar.label}>{avatar.label.value}</span>\n    </span>\n  )\n}")}},13215:function(e,t,a){var n=a(45721),r=a(98260),l=a(65553),o=a(81593),s=a(67235);function i(e){const t=(0,r.g)({label:e.label,sentiment:e.sentiment,size:e.size});return n.createElement("span",t.wrapper,n.createElement(o.Z,(0,l.g)(t.iconOptions)))}function c(e){const t=(0,r.g)({label:e.label,sentiment:e.sentiment,size:e.size});return n.createElement("span",t.wrapper,n.createElement("span",t.label,t.label.value))}t.Z=function(){return n.createElement(s.Z,null,n.createElement(c,{sentiment:"default",label:"default avatar"}),n.createElement(i,{sentiment:"default",label:"default icon avatar"}),n.createElement(c,{sentiment:"action",label:"action avatar"}),n.createElement(i,{sentiment:"action",label:"action icon avatar"}))}},55630:function(e,t,a){a.d(t,{W:function(){return o},v:function(){return l}});var n=a(45721),r=a(27233);function l(){return n.createElement(r.Z,null,"const avatar = getAvatarProps({\n  label: 'Pluralsight avatar'\n  sentiment: 'default',\n})\n\n<span {...avatar.wrapper}>\n  <span {...avatar.label}>{avatar.label.value}</span>\n</span>")}function o(){return n.createElement(r.Z,null,"import { getAvatarProps } from '@pluralsight/headless-styles'\n\nexport default function Avatar(props) {\n  const avatar = getAvatarProps({\n    label: props.label,\n    // highlight-next-line\n    sentiment: props.sentiment,\n    size: props.size,\n  })\n\n  return (\n    <span {...avatar.wrapper}>\n      <span {...avatar.label}>{avatar.label.value}</span>\n    </span>\n  )\n}")}},67235:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(45721),r={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const l={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function o(e){void 0===e&&(e=l);const t=e.type??l.type,a=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",o={alignItems:e.alignItems,gridTemplateColumns:a,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return n.createElement("div",{className:r[t],style:o},e.children)}},25302:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(81648),r=a(45721),l=a(37677),o="button_sEkW",s="chakra_ow8e",i="chakraCircle_c8Xz",c="list_rMMG",p="listItem_bLPI",u="icon_nzIq",d="svelteBackground_c8BA",m="svelteOutline_tdvb";const v=r.createElement("svg",{"aria-hidden":"true",className:u,focusable:"false",viewBox:"0 0 24 24"},r.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),g=r.createElement("svg",{"aria-hidden":"true",className:u,focusable:"false",viewBox:"0 0 1024 1024"},r.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),h=r.createElement("svg",{"aria-hidden":"true",className:`${u}`,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{className:m,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),r.createElement("path",{className:d,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));const b={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:v,id:"source",href:"",label:"Show full source"},styled:{icon:g,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:r.createElement("svg",{"aria-hidden":"true",className:`${u} ${s}`,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},r.createElement("rect",{className:i,width:"582",height:"582",rx:"291"}),r.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:r.createElement("svg",{"aria-hidden":"true",className:u,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:h,id:"svelte",label:"View Svelte"}}},f={size:"m",usage:"text"};function _(e){const t=b.results[e.techId],{className:a}=(0,l.g)(f).button,n=`https://codesandbox.io/s/${e.href}?file=/src/App.tsx`;return r.createElement("a",{"aria-label":t.label,className:`${a} ${o}`,href:n,name:t.label,rel:"noopener noreferrer",target:"_blank",title:t.label},e.children)}function S(e){const{techId:t}=e,{className:a,...s}={...(0,l.g)(f)}.button;return r.createElement("button",(0,n.Z)({className:`${a} ${o}`,onClick:e.onToggleShow,title:b.results[t].label},s),r.createElement(k,{tabId:t}))}function k(e){return b.results[e.tabId].icon}function P(e){const{techId:t}=e;return r.createElement("li",{className:p},"source"===t?r.createElement(S,{onToggleShow:e.onToggleShow,techId:t}):r.createElement(_,{techId:t,href:e.sandboxList[t]},r.createElement(k,{tabId:t})))}function w(e){return r.createElement("ul",{className:c},b.items.map((t=>r.createElement(P,{key:t,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:t}))))}function C(e){const[t,a]=(0,r.useState)(!1);return r.createElement("div",null,r.createElement(w,{onToggleShow:function(){a((e=>!e))},sandboxList:e.sandboxList}),t?e.fullCode:e.children)}var x=(0,r.memo)(C)},69477:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(45721),r=a(41539),l=a(65553),o=a(61411),s=a(75362);function i(e){const{href:t}=e,a=(0,r.g)({href:t}),i=(0,l.g)(a.iconOptions),c=t.includes("github")?o.Z:s.Z;return n.createElement("a",a.link,n.createElement(c,i),e.children)}},12045:function(e,t,a){var n=a(45721),r=a(83052),l=a(79920),o=a(77233),s=a(49632),i=a(37677),c=a(65553),p=a(1579),u=a(72322),d=a(85914),m=a(15082),v=a(54067),g=a(80069),h=a(82979),b=a(74361),f=a(64388),_=a(17549),S=a(4863),k=a(77643),P=a(21556),w=a(71111),C=a(78398),x=a(31942),y=a(61586),A=a(1263),N=a(7315),L=a(61700);const z={React:n,...n,getButtonProps:r.g,getFormControlProps:l.g,getFormLabelProps:o.g,getGridProps:s.g,getGridItemProps:s.a,getIconButtonProps:i.g,getIconProps:c.g,getInputProps:p.g,getMenuProps:u.g,getMenuItemProps:u.a,getPaginationProps:d.g,getPopoverProps:m.g,getRadioProps:v.g,getSelectProps:g.g,getSelectOptionProps:g.a,getTagProps:h.g,CalendarIcon:b.Z,ChevronDownIcon:f.Z,ChevronRightIcon:_.Z,CloseIcon:S.Z,EyeIcon:k.Z,EyeOffIcon:P.Z,PlaceholderIcon:w.Z,SearchIcon:C.Z,WarningTriangleFilledIcon:x.Z,useAutoFormatDate:y.y,useMenuInteraction:A.P,useRovingTabIndex:N.X,useSubmenuInteraction:L.i};t.Z=z},1428:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});var n=a(81648),r=(a(45721),a(70167)),l=(a(13215),a(55630),a(96596),a(45323),a(69477));a(25302);const o={tags:["Development","Packages","Components","Headless Styles","Pagination"]},s=void 0,i={unversionedId:"development/headless-styles/Pagination",id:"version-0.3.1-beta/development/headless-styles/Pagination",title:"Pagination",description:"Pagination actions help users navigate between large lists of data.",source:"@site/versioned_docs/version-0.3.1-beta/development/headless-styles/Pagination.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/Pagination",permalink:"/docs/0.3.1-beta/development/headless-styles/Pagination",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.3.1-beta/development/headless-styles/Pagination.mdx",tags:[{label:"Development",permalink:"/docs/0.3.1-beta/tags/development"},{label:"Packages",permalink:"/docs/0.3.1-beta/tags/packages"},{label:"Components",permalink:"/docs/0.3.1-beta/tags/components"},{label:"Headless Styles",permalink:"/docs/0.3.1-beta/tags/headless-styles"},{label:"Pagination",permalink:"/docs/0.3.1-beta/tags/pagination"}],version:"0.3.1-beta",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Pagination"]},sidebar:"development",previous:{title:"Modal",permalink:"/docs/0.3.1-beta/development/headless-styles/Modal"},next:{title:"Popover",permalink:"/docs/0.3.1-beta/development/headless-styles/Popover"}},c={},p=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Pagination",id:"basic-pagination",level:3},{value:"Two Button Pagination",id:"two-button-pagination",level:3},{value:"Pagination Bar",id:"pagination-bar",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"PaginationOptions",id:"paginationoptions",level:3},{value:"Props",id:"props",level:2},{value:"PaginationProps",id:"paginationprops",level:3},{value:"JSPaginationProps",id:"jspaginationprops",level:3}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pagination actions help users navigate between large lists of data."),(0,r.kt)(l.Z,{icon:"github",href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Pagination",mdxType:"ViewSourceLink"},"View source"),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getPaginationProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"basic-pagination"},"Basic Pagination"),(0,r.kt)("p",null,'For a simple approach to pagination using a "hybrid lazy" approach. Just use a the ',(0,r.kt)("a",{parentName:"p",href:"/docs/0.3.1-beta/development/headless-styles/Button"},"Button API")," to trigger your Fetch that loads more data into the page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function PaginatedList() {\n  return <button {...getButtonProps().button}>Show more</button>\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Chakra")," and ",(0,r.kt)("strong",{parentName:"p"},"MUI")," do not support Pagination. We recommend using the native Headless-styles API we provide on this page.")),(0,r.kt)("h3",{id:"two-button-pagination"},"Two Button Pagination"),(0,r.kt)("p",null,'For an approach similar to Github, that allows users to navigate to "newer" or "older" content. Use the default ',(0,r.kt)("inlineCode",{parentName:"p"},"getPaginationProps")," helper."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function PaginationButtons() {\n  const styles = getPaginationProps()\n\n  return (\n    <div {...styles.container}>\n      <div>\n        <button {...styles.newer} data-disabled>\n          Newer\n        </button>\n        <button {...styles.older}>Older</button>\n      </div>\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"pagination-bar"},"Pagination Bar"),(0,r.kt)("p",null,"For an approach that allows filtering, page navigation, and text information, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getPaginationProps")," helper with the ",(0,r.kt)("inlineCode",{parentName:"p"},"cols")," option set to the amount of information you would like to display."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function PaginationActions() {\n  const [rowOption, setRowOption] = useState('')\n  const selectStyles = getSelectProps({\n    id: 'row-count',\n    name: 'row_count',\n    placeholder: 'Choose row count',\n    size: 'm',\n    value: rowOption,\n  })\n  const styles = getPaginationProps({ cols: 3 })\n  const iconProps = getIconProps(selectStyles.iconOptions)\n\n  function handleSelectChange(e) {\n    setRowOption(e.target.value)\n  }\n\n  return (\n    <div\n      {...styles.container}\n      style={{\n        gridTemplateColumns: '1fr 1fr auto',\n      }}\n    >\n      <div>\n        <small {...styles.text}>\n          <strong>1-25</strong> of 1,2345\n        </small>\n      </div>\n      <div>\n        <div {...selectStyles.fieldWrapper}>\n          <div data-docsIgnore=\"iconSpacing\" {...selectStyles.selectWrapper}>\n            <select\n              {...selectStyles.select}\n              onChange={handleSelectChange}\n              style={{ marginTop: 'initial' }}\n            >\n              <option value=\"5\">5 Rows</option>\n              <option value=\"10\">10 Rows</option>\n              <option value=\"25\">25 Rows</option>\n            </select>\n            <span {...selectStyles.iconWrapper}>\n              <ChevronDownIcon {...iconProps} />\n            </span>\n          </div>\n        </div>\n      </div>\n      <div>\n        <button {...styles.newer} data-disabled>\n          Newer\n        </button>\n        <button {...styles.older}>Older</button>\n      </div>\n    </div>\n  )\n}\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getPaginationProps")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"options"),": ",(0,r.kt)("a",{parentName:"td",href:"#paginationOptions"},"PaginationOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"cols: 1"),(0,r.kt)("td",{parentName:"tr",align:null},"Get CSS styles for pagination actions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getJSPaginationProps")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"options"),": ",(0,r.kt)("a",{parentName:"td",href:"#paginationOptions"},"PaginationOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,r.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"paginationoptions"},"PaginationOptions"),(0,r.kt)("p",null,"This interface is available as an ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface PaginationOptions {\n  cols: number\n  tech?: 'svelte' | ''\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { PaginationOptions } from '@pluralsight/headless-styles/types'\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"paginationprops"},"PaginationProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PaginationProps {\n  container: {\n    className: string\n    style: Record<CSSProps, string>\n  }\n  newer: {\n    className: string\n  }\n  older: {\n    className: string\n  }\n  text: {\n    className: string\n  }\n}\n")),(0,r.kt)("h3",{id:"jspaginationprops"},"JSPaginationProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSPaginationProps {\n  container: {\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n  newer: {\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n  older: {\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n  text: {\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n}\n")))}d.isMDXComponent=!0},98260:function(e,t,a){a.d(t,{g:function(){return c}});var n=a(98268);const r={xs:"1.5rem",s:"2.5rem",m:"4rem",l:"6rem",xl:"8rem"};function l(e){return(null==e?void 0:e.slice(0,1))??""}function o(e){const{label:t}=e,a=function(e){const{firstLetter:t,lastLetter:a}=e;return a?`${t}${a}`:t}(function(e){const t=e.split(" ");return{word:e,firstLetter:l(t[0]),lastLetter:l(t[1])}}(t));return{iconOptions:{ariaLabel:t,ariaHidden:!0,customSize:r[e.size]},wrapper:{},label:{"aria-label":t,value:a},image:{alt:t,src:e.src}}}var s=a(76411);const i={baseAvatar:"avatarCSS-module_baseAvatar__iACyF",avatarImage:"avatarCSS-module_avatarImage__m6-v3",defaultAvatar:"avatarCSS-module_defaultAvatar__TvnZY avatarCSS-module_baseAvatar__iACyF",actionAvatar:"avatarCSS-module_actionAvatar__Jp-pC avatarCSS-module_baseAvatar__iACyF",avatarLabel:"avatarCSS-module_avatarLabel__-pNWR",xsAvatar:"avatarCSS-module_xsAvatar__MQHMM",xsAvatarLabel:"avatarCSS-module_xsAvatarLabel__WYctp",sAvatar:"avatarCSS-module_sAvatar__F4HXz",sAvatarLabel:"avatarCSS-module_sAvatarLabel__SOfuP",mAvatar:"avatarCSS-module_mAvatar__ewtSe",mAvatarLabel:"avatarCSS-module_mAvatarLabel__MpG5M",lAvatar:"avatarCSS-module_lAvatar__lN8Nr",lAvatarLabel:"avatarCSS-module_lAvatarLabel__t39kP",xlAvatar:"avatarCSS-module_xlAvatar__NyOHW",xlAvatarLabel:"avatarCSS-module_xlAvatarLabel__rdn9u"};(0,s.s)('.avatarCSS-module_baseAvatar__iACyF{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;aspect-ratio:1/1;background-color:transparent;border:none;border-radius:50%;display:inline-flex;justify-content:center;overflow:hidden;padding:0;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.avatarCSS-module_avatarImage__m6-v3{height:100%;left:0;-o-object-fit:cover;object-fit:cover;position:absolute;top:0;width:100%}.avatarCSS-module_defaultAvatar__TvnZY{background-color:var(--ps-background);color:var(--ps-text-medium)}.avatarCSS-module_actionAvatar__Jp-pC{background-color:var(--ps-action-background);color:var(--ps-action-text)}.avatarCSS-module_avatarLabel__-pNWR{font-variation-settings:"wght" 500;font-weight:500;text-transform:uppercase}.avatarCSS-module_xsAvatar__MQHMM{height:2rem;width:2rem}.avatarCSS-module_xsAvatarLabel__WYctp{font-size:.875rem;line-height:0}.avatarCSS-module_sAvatar__F4HXz{height:3rem;width:3rem}.avatarCSS-module_sAvatarLabel__SOfuP{font-size:1.25rem}.avatarCSS-module_mAvatar__ewtSe{height:5rem;width:5rem}.avatarCSS-module_mAvatarLabel__MpG5M{font-size:2.25rem}.avatarCSS-module_lAvatar__lN8Nr{height:7.5rem;width:7.5rem}.avatarCSS-module_lAvatarLabel__t39kP{font-size:3rem}.avatarCSS-module_xlAvatar__NyOHW{height:10rem;width:10rem}.avatarCSS-module_xlAvatarLabel__rdn9u{font-size:3.75rem}a[href].avatarCSS-module_baseAvatar__iACyF:hover,button.avatarCSS-module_baseAvatar__iACyF:hover{cursor:pointer}.avatarCSS-module_baseAvatar__iACyF:focus{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.avatarCSS-module_baseAvatar__iACyF:focus:not(:focus-visible){box-shadow:none;outline:none}');function c(e){const t=function(e){return{label:(null==e?void 0:e.label)??"",sentiment:(null==e?void 0:e.sentiment)??"default",size:(null==e?void 0:e.size)??"m",src:(null==e?void 0:e.src)??""}}(e),{labelClass:a,sentimentClass:r,sizeClass:l}=(s=t.sentiment,{labelClass:`${c=t.size}AvatarLabel`,sentimentClass:`${s}Avatar`,sizeClass:`${c}Avatar`});var s,c;const p=o(t);return{...p,wrapper:{...p.wrapper,...(0,n.c)(`ps-avatar ${i[r]} ${i[l]}`)},image:{...p.image,...(0,n.c)(`ps-avatar-image ${i.avatarImage}`)},label:{...p.label,...(0,n.c)(`ps-avatar-label ${i.avatarLabel} ${i[a]}`)}}}},41539:function(e,t,a){a.d(t,{g:function(){return i}});var n=a(98268);function r(e){return/^https?:\/\//.test(e)}function l(e){const t=function(e){return r(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...t},...r(e)&&{iconOptions:{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:"1em"}}}}var o=a(76411);const s="textLinkCSS-module_textLinkBase__P-zdY";function i(e){const t=function(e){return{href:(null==e?void 0:e.href)??""}}(e),a=l(t.href);return{...a,link:{...a.link,...(0,n.c)(`ps-text-link ${s}`)}}}(0,o.s)(".textLinkCSS-module_textLinkBase__P-zdY{align-items:center;background-color:transparent;border-radius:6px;color:var(--ps-action-navigation);display:inline-flex;font-family:inherit;gap:.25em;outline:none;text-decoration:underline;transition:background-color .25s ease-in-out,color .25s ease-in-out}.textLinkCSS-module_textLinkBase__P-zdY:visited{color:var(--ps-action-navigation-visited)}.textLinkCSS-module_textLinkBase__P-zdY:hover{text-decoration:none}.textLinkCSS-module_textLinkBase__P-zdY:active{text-decoration:underline}.textLinkCSS-module_textLinkBase__P-zdY:focus{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.textLinkCSS-module_textLinkBase__P-zdY:focus:not(:focus-visible){box-shadow:none;outline:none}")}}]);