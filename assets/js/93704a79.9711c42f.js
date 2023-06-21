"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103],{7100:function(e,t,n){n.d(t,{_:function(){return g},E:function(){return v}});n(88809),n(55795),n(95070),n(98082),n(80881),n(77562),n(35578),n(86236),n(85959),n(85393),n(15401),n(80893),n(79162),n(97290),n(94652),n(99459),n(11737),n(47924),n(60009),n(30212),n(6018);var r=n(87962),i=n(95991);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){var t,n,r;return l(l({},(0,i.Zj)(e)),{},{classNames:null!==(t=null==e?void 0:e.classNames)&&void 0!==t?t:[""],checked:null!==(n=null==e?void 0:e.checked)&&void 0!==n&&n,pandoSize:null!==(r=null==e?void 0:e.pandoSize)&&void 0!==r?r:"m"})}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t=function(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===u(t)?t:String(t)}(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b="pando-switch";function g(e){var t,n=s(e),a=n.pandoSize,o=function(e){var t=(0,i.Oi)(e),n=(0,i.Sd)(e),r={disabled:n.disabled,"data-checked":e.checked};return{input:l(l({},n),{},{"aria-checked":(0,i.fc)(e),checked:e.checked,id:e.id,name:e.name,role:"switch",type:"checkbox"}),switchContainer:{},switchThumb:l(l({},t),r),switchTrack:l(l({"aria-hidden":!0,"data-control":!0},t),r)}}(n),c={thumbClass:"pando_".concat(t=a,"SwitchThumb"),trackClass:"pando_".concat(t,"SwitchTrack")},u=c.thumbClass,d=c.trackClass;return h(h({},o),{},{input:h(h({},o.input),r.zW.apply(void 0,["".concat(b,"-input"),"pando_switchInput"].concat(p(n.classNames)))),switchContainer:(0,r.zW)("".concat(b,"-container"),"pando_switchContainer"),switchTrack:h(h({},o.switchTrack),(0,r.zW)("".concat(b,"-track"),d)),switchThumb:h(h({},o.switchThumb),(0,r.zW)("".concat(b,"-thumb"),u))})}function v(e){var t=s(h(h({},e),{},{id:"",name:""}));return h({},r.zW.apply(void 0,["".concat(b,"-wrapper"),"pando_switchWrapper"].concat(p(t.classNames))))}},73678:function(e,t,n){const r=n(86521);t.Z=function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"figma icon",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M4.25 5.5A4.25 4.25 0 0 1 8.5 1.25h7A4.25 4.25 0 0 1 17.912 9a4.25 4.25 0 1 1-5.162 6.74v3.76A4.25 4.25 0 1 1 6.088 16a4.245 4.245 0 0 1-1.838-3.5c0-1.452.728-2.733 1.838-3.5A4.245 4.245 0 0 1 4.25 5.5Zm4.25 9.75h2.75v-5.5H8.5a2.75 2.75 0 1 0 0 5.5Zm2.75 1.5H8.5a2.75 2.75 0 1 0 2.75 2.75v-2.75Zm7-11.25a2.75 2.75 0 0 1-2.75 2.75h-2.75v-5.5h2.75a2.75 2.75 0 0 1 2.75 2.75ZM15.5 9.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-7-1.5h2.75v-5.5H8.5a2.75 2.75 0 0 0 0 5.5Z",clipRule:"evenodd"})})}},89221:function(e,t,n){const r=n(86521);t.Z=function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"github logo",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z",clipRule:"evenodd"})})}},25251:function(e,t,n){n.d(t,{_:function(){return d}});var r=n(86582),i=n(45721),a=n(25247),o=n(87962),l=n(23237),c=n(86521),s=["kind"],u=["value"];function p(e,t){var n=e.kind,i=(0,r.Kd)(e,s),p=(0,l.Y)(),d=(0,a.H)({classNames:(0,o.Xg)(i.className),htmlFor:i.htmlFor,kind:n,required:p.required,value:i.children}),m=d.value,h=(0,r.Kd)(d,u);return(0,c.jsx)("label",(0,r.Zj)((0,r.Zj)((0,r.Zj)({},i),h),{},{ref:t,children:m}))}var d=(0,i.forwardRef)(p)},85356:function(e,t,n){n.d(t,{C:function(){return m},Z:function(){return d}});var r=n(86582),i=n(45721),a=n(7100),o=n(87962),l=n(23237),c=n(86521),s=["pandoSize"];function u(e,t){var n=(0,a.E)({classNames:(0,o.Xg)(e.className)});return(0,c.jsx)("div",(0,r.Zj)((0,r.Zj)((0,r.Zj)({},e),n),{},{ref:t}))}function p(e,t){var n=e.pandoSize,i=(0,r.Kd)(e,s),u=(0,l.Y)(),p=(0,a._)((0,r.Zj)((0,r.Zj)((0,r.Zj)({},i),u),{},{classNames:(0,o.Xg)(i.className),pandoSize:n}));return(0,c.jsxs)("label",(0,r.Zj)((0,r.Zj)({},p.switchContainer),{},{children:[(0,c.jsx)("input",(0,r.Zj)((0,r.Zj)((0,r.Zj)({},i),p.input),{},{ref:t})),(0,c.jsx)("span",(0,r.Zj)((0,r.Zj)({},p.switchTrack),{},{children:(0,c.jsx)("span",(0,r.Zj)({},p.switchThumb))}))]}))}var d=(0,i.forwardRef)(u),m=(0,i.forwardRef)(p)},40736:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(45721),i={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const a={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function o(e){void 0===e&&(e=a);const t=e.type??a.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",o={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return r.createElement("div",{className:i[t],style:o},e.children)}},15566:function(e,t,n){n.d(t,{dS:function(){return s},fK:function(){return c},C9:function(){return u},ZP:function(){return p}});var r=n(45721),i=n(84140),a="linkList_sLwJ",o="linkItem_ESvF";function l(e){return r.createElement("li",{className:o},r.createElement(i.Z,e,e.children))}function c(e){return r.createElement(l,{href:e.href},e.children??"View on Github")}function s(e){return r.createElement(l,{href:e.href},"View on Figma")}function u(e){return r.createElement("ul",{className:a},e.children)}function p(e){const{figma:t,github:n}=e;return r.createElement("ul",{className:a},n&&r.createElement(c,{href:n}),t&&r.createElement(s,{href:t}))}},45945:function(e,t,n){n(45721)},49553:function(e,t,n){var r=n(45721),i=n(26565),a=n(23237),o=n(85356),l=n(25251),c=n(40736);t.Z=function(){const[e,t]=(0,r.useState)(!1);return r.createElement(c.Z,null,r.createElement(i.r,{cols:"1fr 1fr",gap:8,style:{textAlign:"left"}},r.createElement(i.P,null,r.createElement(a.s,{readOnly:!0},r.createElement(o.Z,null,r.createElement(o.C,{id:"checked-example",checked:!0}),r.createElement(l._,{htmlFor:"checked-example"},"Checked")))),r.createElement(i.P,null,r.createElement(a.s,{readOnly:!0,disabled:!0},r.createElement(o.Z,null,r.createElement(o.C,{id:"disabled-example"}),r.createElement(l._,{htmlFor:"disabled-example"},"Disabled")))),r.createElement(i.P,null,r.createElement(a.s,{readOnly:!0,invalid:!0},r.createElement(o.Z,null,r.createElement(o.C,{id:"invalid-example"}),r.createElement(l._,{htmlFor:"invalid-example"},"Invalid")))),r.createElement(i.P,null,r.createElement(a.s,{readOnly:!0},r.createElement(o.Z,null,r.createElement(o.C,{id:"readOnly-example"}),r.createElement(l._,{htmlFor:"readOnly-example"},"Read only")))),r.createElement(i.P,null,r.createElement(a.s,{readOnly:!0,required:!0},r.createElement(o.Z,null,r.createElement(o.C,{id:"required-example",checked:e,onClick:function(e){t(e.target.checked)}}),r.createElement(l._,{htmlFor:"required-example"},"Required"))))))}},84140:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(45721),i=n(9641),a=n(26793),o=n(89221),l=n(73678);function c(e){const{href:t}=e,n=(0,a.L)({ariaHidden:!0,size:"s"}),c=t.includes("github")?o.Z:l.Z;return r.createElement(i.h,e,r.createElement(c,n),e.children)}},23276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(81648),i=(n(45721),n(70167)),a=n(49553),o=n(15566);n(45945);const l={tags:["toggle","single-select","field","form"],title:"Switch"},c=void 0,s={unversionedId:"reference/components/switch",id:"version-0.4.1/reference/components/switch",title:"Switch",description:"Used as an alternative to the Checkbox for choosing between enabled and",source:"@site/versioned_docs/version-0.4.1/reference/components/switch.mdx",sourceDirName:"reference/components",slug:"/reference/components/switch",permalink:"/docs/reference/components/switch",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/switch.mdx",tags:[{label:"toggle",permalink:"/docs/tags/toggle"},{label:"single-select",permalink:"/docs/tags/single-select"},{label:"field",permalink:"/docs/tags/field"},{label:"form",permalink:"/docs/tags/form"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["toggle","single-select","field","form"],title:"Switch"},sidebar:"reference",previous:{title:"Skeleton",permalink:"/docs/reference/components/skeleton"},next:{title:"Table",permalink:"/docs/reference/components/table"}},u={},p=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Switch",id:"basic-switch",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Size Mapping",id:"size-mapping",level:4},{value:"States",id:"states",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessibility",id:"accessibility",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"size-xxl"},"Used as an alternative to the Checkbox for choosing between enabled and disabled states."),(0,i.kt)(o.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Switch",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getSwitchProps } from '@pluralsight/headless-styles'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SwitchOptions {\n  checked: boolean\n  disabled?: boolean\n  id: string\n  indeterminate?: boolean\n  invalid?: boolean\n  name: string\n  readOnly?: boolean\n  required?: boolean\n  size?: 's' | 'm'\n  value: string\n}\n\ngetSwitchProps(options?: SwitchOptions)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { SwitchOptions } from '@pluralsight/headless-styles/types'\n")),(0,i.kt)("h2",{id:"anatomy"},"Anatomy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Container"),(0,i.kt)("li",{parentName:"ol"},"Input"),(0,i.kt)("li",{parentName:"ol"},"Track"),(0,i.kt)("li",{parentName:"ol"},"Thumb"),(0,i.kt)("li",{parentName:"ol"},"Label")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"basic-switch"},"Basic Switch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicSwitch() {\n  const [checked, setChecked] = useState(false)\n  const { control, fieldOptions } = getFormControlProps()\n  const switchProps = getSwitchProps({\n    ...fieldOptions,\n    checked,\n    id: 'notfications',\n    name: 'add_notifications',\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    htmlFor: 'notifications',\n    value: 'Sign up for notifications',\n  })\n\n  function handleChange() {\n    setChecked((prev) => !prev)\n  }\n\n  return (\n    <div {...control}>\n      <div {...switchProps.wrapper}>\n        <label {...labelProps}>{value}</label>\n        <label {...switchProps.switchContainer}>\n          <input {...switchProps.input} onClick={handleChange} />\n          <span {...switchProps.switchTrack}>\n            <span {...switchProps.switchThumb} />\n          </span>\n        </label>\n      </div>\n    </div>\n  )\n}\n")),(0,i.kt)("h3",{id:"sizes"},"Sizes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function SwitchSizes() {\n  const [checked, setChecked] = useState(false)\n  const { fieldOptions } = getFormControlProps()\n  const switchProps = getSwitchProps({\n    ...fieldOptions,\n    checked,\n    id: 'notfications',\n    name: 'add_notifications',\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    htmlFor: 'notifications',\n    value: 'Sign up for notifications',\n  })\n  const smallSwitchProps = getSwitchProps({\n    ...fieldOptions,\n    checked,\n    id: 'notfications',\n    name: 'add_notifications',\n    size: 's',\n  })\n  const smallLabelProps = getFormLabelProps({\n    htmlFor: 'notifications',\n    value: 'Sign up for notifications',\n  })\n\n  function handleChange() {\n    setChecked((prev) => !prev)\n  }\n\n  return (\n    <form>\n      <div {...switchProps.wrapper}>\n        <label {...labelProps}>{value}</label>\n        <label {...switchProps.switchContainer}>\n          <input {...switchProps.input} onClick={handleChange} />\n          <span {...switchProps.switchTrack}>\n            <span {...switchProps.switchThumb} />\n          </span>\n        </label>\n      </div>\n\n      <div {...smallSwitchProps.wrapper}>\n        <label {...smallLabelProps}>{smallLabelProps.value}</label>\n        <label {...smallSwitchProps.switchContainer}>\n          <input {...smallSwitchProps.input} onClick={handleChange} />\n          <span {...smallSwitchProps.switchTrack}>\n            <span {...smallSwitchProps.switchThumb} />\n          </span>\n        </label>\n      </div>\n    </form>\n  )\n}\n")),(0,i.kt)("h4",{id:"size-mapping"},"Size Mapping"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Switch size rules."',title:'"Switch',size:!0,'rules."':!0},"{\n  s: 'Use in condensed areas where the default size is too large.',\n  m: 'Should be used in most, if not all cases.'\n}\n")),(0,i.kt)("h3",{id:"states"},"States"),(0,i.kt)(a.Z,{mdxType:"SwitchStates"}),(0,i.kt)("admonition",{title:"Form field and state",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In order to easily manage the state and maintain Accessibility of your form field, the basic state statuses should come from the result of the FormControl API.")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getSwitchProps(options?: SwitchOptions)\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": An Object containing properties derived from the FormControl.fieldOptions results (disabled, invalid, readOnly, required) to determine the styling of the Switch state. An id and optional name property that accept a String value which connected Accessibility properties from the label to the Switch. A checked and optional indeterminate property that accept a Boolean value to determine the styling of the Switch state. A value property that accepts a String for form submission. An optional size property that accepts a String value of ",(0,i.kt)("inlineCode",{parentName:"li"},"'s' | 'm'")," to determine the styling of the Switch elements relative to the size.")),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"An Object matching the ",(0,i.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("h3",{id:"layout"},"Layout"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use multiple Switches in a vertical list."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use multiple Switches in a single row."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," provide a Label with a Switch."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use a Switch inline without a Label. Instead use a hidden Label."),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use a Switch for giving users an way to opt-in to an optional feature."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use a Switch for collecting consent. Instead us a ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/components/checkbox"},"Checkbox"),"."),(0,i.kt)("h2",{id:"accessibility"},"Accessibility"),(0,i.kt)("p",null,"The Pando Switch API combined with semantic HTML allow the Switch to be fully accessible and screen-readable."))}m.isMDXComponent=!0}}]);