"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9305],{60656:function(e,t,n){n.d(t,{A:function(){return g}});n(88809),n(55795),n(95070),n(98082),n(80881),n(77562),n(35578),n(86236),n(85959),n(85393),n(15401),n(80893),n(79162),n(97290),n(94652),n(99459),n(11737),n(47924),n(60009),n(30212),n(6018);var r=n(3900),o=(n(99251),n(53570)),i=n(86437);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t=(0,o.Oi)(e),n=(0,o.Sd)(e),r={disabled:n.disabled,"data-checked":e.checked};return{iconOptions:(0,i.qZ)({ariaHidden:!0,size:"s"}),input:c(c({},n),{},{"aria-checked":(0,o.fc)(e),checked:e.checked,id:e.id,indeterminate:e.indeterminate.toString(),name:e.name,type:"checkbox"}),checkboxContainer:c(c({},t),r),checkboxControl:c(c({"aria-hidden":!0,"data-control":!0},t),r)}}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t=function(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b="pando-checkbox";function g(e){var t=function(e){var t,n,r;return c(c({},(0,o.Zj)(e)),{},{classNames:null!==(t=null==e?void 0:e.classNames)&&void 0!==t?t:[""],checked:null!==(n=null==e?void 0:e.checked)&&void 0!==n&&n,indeterminate:null!==(r=null==e?void 0:e.indeterminate)&&void 0!==r&&r})}(e),n=u(t);return f(f({},n),{},{input:f(f({},n.input),(0,r.zW)("".concat(b,"-input"),"pando_checkboxInput")),checkboxContainer:f(f({},n.checkboxContainer),r.zW.apply(void 0,["".concat(b,"-container"),"pando_checkboxContainer"].concat(m(t.classNames)))),checkboxControl:f(f({},n.checkboxControl),(0,r.zW)("".concat(b,"-control"),"pando_checkboxControl"))})}},21201:function(e,t,n){const r=n(86521);t.Z=function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"figma icon",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M4.25 5.5A4.25 4.25 0 0 1 8.5 1.25h7A4.25 4.25 0 0 1 17.912 9a4.25 4.25 0 1 1-5.162 6.74v3.76A4.25 4.25 0 1 1 6.088 16a4.245 4.245 0 0 1-1.838-3.5c0-1.452.728-2.733 1.838-3.5A4.245 4.245 0 0 1 4.25 5.5Zm4.25 9.75h2.75v-5.5H8.5a2.75 2.75 0 1 0 0 5.5Zm2.75 1.5H8.5a2.75 2.75 0 1 0 2.75 2.75v-2.75Zm7-11.25a2.75 2.75 0 0 1-2.75 2.75h-2.75v-5.5h2.75a2.75 2.75 0 0 1 2.75 2.75ZM15.5 9.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-7-1.5h2.75v-5.5H8.5a2.75 2.75 0 0 0 0 5.5Z",clipRule:"evenodd"})})}},59154:function(e,t,n){const r=n(86521);t.Z=function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"github logo",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z",clipRule:"evenodd"})})}},92250:function(e,t,n){const r=n(86521);t.Z=function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"checkmark",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,r.jsx)("path",{d:"m9.59 14.58-2.818-2.818a.5.5 0 0 0-.706 0l-.71.704a.5.5 0 0 0-.003.708h.002l3.881 3.882a.5.5 0 0 0 .707 0l9.293-9.292a.5.5 0 0 0 0-.708l-.703-.702a.5.5 0 0 0-.707 0L9.59 14.58Z"})})}},5237:function(e,t,n){const r=n(86521);t.Z=function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"indeterminate icon",...e,children:(0,r.jsx)("path",{d:"M18.5 13h-13a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5Z"})})}},41507:function(e,t,n){n.d(t,{X:function(){return b}});var r=n(51180),o=n(45721),i=n(60656),a=n(3900),l=n(96227),c=n(90368),s=n(92250),u=n(5237),d=n(15384),m=n(23344),p=n(86521),h=["children","indeterminate"],f=["value"];function k(e,t){var n=e.children,o=e.indeterminate,k=(0,r.Kd)(e,h),b=(0,d.Y)(),g=(0,i.A)((0,r.Zj)((0,r.Zj)({classNames:(0,a.Xg)(k.className),indeterminate:o},k),b)),v=(0,l.H)((0,r.Zj)((0,r.Zj)({},b),{},{htmlFor:g.input.id,value:null!=n?n:""})),x=v.value,y=(0,r.Kd)(v,f);return(0,p.jsx)("label",(0,r.Zj)((0,r.Zj)({},y),{},{children:(0,p.jsxs)("div",(0,r.Zj)((0,r.Zj)({},g.checkboxContainer),{},{children:[(0,p.jsx)("input",(0,r.Zj)((0,r.Zj)((0,r.Zj)({},k),g.input),{},{ref:t})),(0,p.jsxs)("span",(0,r.Zj)((0,r.Zj)({},g.checkboxControl),{},{children:[(0,p.jsx)(m.d,{when:g.input.checked&&!o,fallback:null,children:(0,p.jsx)(s.Z,(0,r.Zj)({},(0,c.L)(g.iconOptions)))}),(0,p.jsx)(m.d,{when:g.input.checked&&Boolean(o),fallback:null,children:(0,p.jsx)(u.Z,(0,r.Zj)({},(0,c.L)(g.iconOptions)))})]})),x]}))}))}var b=(0,o.forwardRef)(k)},79734:function(e,t,n){n.d(t,{P:function(){return p},r:function(){return m}});var r=n(51180),o=n(45721),i=n(87371),a=n(3900),l=n(86521),c=["areas","cols","gap","rows"],s=["area","col","row"];function u(e,t){var n=e.areas,o=e.cols,s=e.gap,u=e.rows,d=(0,r.Kd)(e,c),m=(0,i.X)({areas:n,classNames:(0,a.Xg)(d.className),cols:o,gap:s,rows:u,style:d.style});return(0,l.jsx)("div",(0,r.Zj)((0,r.Zj)((0,r.Zj)({},d),m),{},{ref:t,children:d.children}))}function d(e,t){var n=e.area,o=e.col,c=e.row,u=(0,r.Kd)(e,s),d=(0,i.n)({area:n,classNames:(0,a.Xg)(u.className),col:o,row:c,style:u.style});return(0,l.jsx)("div",(0,r.Zj)((0,r.Zj)((0,r.Zj)({},u),d),{},{ref:t,children:u.children}))}var m=(0,o.forwardRef)(u),p=(0,o.forwardRef)(d)},23344:function(e,t,n){n.d(t,{d:function(){return o}});var r=n(86521);function o(e){if(!e.children)throw new Error("Show requires children to be used.");return(0,r.jsx)(r.Fragment,{children:e.when?e.children:e.fallback})}},15384:function(e,t,n){n.d(t,{Y:function(){return s},s:function(){return c}});var r=n(51180),o=n(45721),i=n(86521),a=["children"],l=(0,o.createContext)(null);function c(e){var t=e.children,n=(0,r.Kd)(e,a),c=(0,o.useMemo)((function(){return(0,r.Zj)({},n)}),[n]);return(0,i.jsx)(l.Provider,{value:c,children:t})}function s(){var e=(0,o.useContext)(l);if(!e)throw new Error("useFormControl must be used within a FormControlProvider");return e}},24346:function(e,t,n){var r=n(45721),o=n(79734),i=n(15384),a=n(41507),l=n(40736);const c=r.createElement(o.P,null,r.createElement(i.s,{readOnly:!0},r.createElement(a.X,{checked:!0,id:"checked",name:"checked"},"Checked")));function s(){return c}const u=r.createElement(o.P,null,r.createElement(i.s,{readOnly:!0},r.createElement(a.X,{checked:!0,indeterminate:!0,id:"indeterminate",name:"indeterminate"},"Indeterminate")));function d(){return u}const m=r.createElement(o.P,null,r.createElement(i.s,{readOnly:!0,disabled:!0},r.createElement(a.X,{checked:!0,id:"disabled",name:"disabled"},"Disabled")));function p(){return m}const h=r.createElement(o.P,null,r.createElement(i.s,{readOnly:!0,invalid:!0},r.createElement(a.X,{checked:!0,id:"invalid",name:"invalid"},"Invalid")));function f(){return h}const k=r.createElement(o.P,null,r.createElement(i.s,{readOnly:!0},r.createElement(a.X,{checked:!0,id:"readOnly",name:"readOnly"},"Read only")));function b(){return k}const g=r.createElement(o.P,null,r.createElement(i.s,{readOnly:!0,required:!0},r.createElement(a.X,{checked:!0,id:"required",name:"required"},"Required")));function v(){return g}t.Z=function(){return r.createElement(l.Z,null,r.createElement(o.r,{cols:"1fr 1fr",gap:0,style:{textAlign:"left"}},r.createElement(s,null),r.createElement(p,null),r.createElement(f,null),r.createElement(b,null),r.createElement(v,null),r.createElement(d,null)))}},40736:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(45721),o={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const i={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function a(e){void 0===e&&(e=i);const t=e.type??i.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",a={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return r.createElement("div",{className:o[t],style:a},e.children)}},15566:function(e,t,n){n.d(t,{dS:function(){return s},fK:function(){return c},C9:function(){return u},ZP:function(){return d}});var r=n(45721),o=n(84140),i="linkList_sLwJ",a="linkItem_ESvF";function l(e){return r.createElement("li",{className:a},r.createElement(o.Z,e,e.children))}function c(e){return r.createElement(l,{href:e.href},e.children??"View on Github")}function s(e){return r.createElement(l,{href:e.href},"View on Figma")}function u(e){return r.createElement("ul",{className:i},e.children)}function d(e){const{figma:t,github:n}=e;return r.createElement("ul",{className:i},n&&r.createElement(c,{href:n}),t&&r.createElement(s,{href:t}))}},45945:function(e,t,n){n(45721)},84140:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(45721),o=n(44939),i=n(90368),a=n(59154),l=n(21201);function c(e){const{href:t}=e,n=(0,i.L)({ariaHidden:!0,size:"s"}),c=t.includes("github")?a.Z:l.Z;return r.createElement(o.h,e,r.createElement(c,n),e.children)}},36664:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(81648),o=(n(45721),n(70167)),i=n(15566),a=n(24346);n(45945);const l={tags:["multi-select","field","form"],title:"Checkbox"},c=void 0,s={unversionedId:"reference/components/checkbox",id:"reference/components/checkbox",title:"Checkbox",description:"Used when a user needs to select multiple values from options in a form.",source:"@site/docs/reference/components/checkbox.mdx",sourceDirName:"reference/components",slug:"/reference/components/checkbox",permalink:"/docs/next/reference/components/checkbox",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/checkbox.mdx",tags:[{label:"multi-select",permalink:"/docs/next/tags/multi-select"},{label:"field",permalink:"/docs/next/tags/field"},{label:"form",permalink:"/docs/next/tags/form"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["multi-select","field","form"],title:"Checkbox"},sidebar:"reference",previous:{title:"Button",permalink:"/docs/next/reference/components/button"},next:{title:"Circular Progress",permalink:"/docs/next/reference/components/circular-progress"}},u={},d=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Checkbox",id:"basic-checkbox",level:3},{value:"Indeterminate Checkbox",id:"indeterminate-checkbox",level:3},{value:"States",id:"states",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected Checkbox",id:"3-ejected-checkbox",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Interactions",id:"interactions",level:3},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Accessibility",id:"accessibility",level:2}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"size-xxl"},"Used when a user needs to select multiple values from options in a form."),(0,o.kt)(i.C9,{mdxType:"DocsLinkList"},(0,o.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Checkbox.tsx",mdxType:"DocsGithubLink"}),(0,o.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Checkbox/checkboxCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,o.kt)(i.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Checkbox } from '@pluralsight/react'\n")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Container"),(0,o.kt)("li",{parentName:"ol"},"Control"),(0,o.kt)("li",{parentName:"ol"},"Input"),(0,o.kt)("li",{parentName:"ol"},"Label")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"basic-checkbox"},"Basic Checkbox"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicCheckbox() {\n  const [checked, setChecked] = useState(false)\n\n  function handleChange(e) {\n    setChecked(e.target.checked)\n  }\n\n  return (\n    <FormControlProvider>\n      <Checkbox\n        checked={checked}\n        id="sign_up"\n        name="sign_up"\n        onChange={handleChange}\n      >\n        Sign up for something\n      </Checkbox>\n    </FormControlProvider>\n  )\n}\n')),(0,o.kt)("h3",{id:"indeterminate-checkbox"},"Indeterminate Checkbox"),(0,o.kt)("p",null,"To display an indeterminate state, pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"indeterminate")," prop along with the ",(0,o.kt)("inlineCode",{parentName:"p"},"checked")," to the Checkbox component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function IndeterminateCheckbox() {\n  return (\n    <FormControlProvider readOnly={true}>\n      <Checkbox\n        checked={true}\n        id="select_all"\n        indeterminate={true}\n        name="select_all"\n      >\n        Select all\n      </Checkbox>\n    </FormControlProvider>\n  )\n}\n')),(0,o.kt)("h3",{id:"states"},"States"),(0,o.kt)(a.Z,{mdxType:"CheckboxStates"}),(0,o.kt)("h3",{id:"customizing"},"Customizing"),(0,o.kt)("p",null,"There are 3 ways to customize the Checkbox component."),(0,o.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,o.kt)("p",null,"Each component layer of the Checkbox has a unused class name that can be utilized in your local CSS to customize the Checkbox at any level."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-checkbox-container"),": The container element of the Checkbox."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-checkbox-input"),": The input element of the Checkbox."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-checkbox-control"),": The control element of the Checkbox.")),(0,o.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,o.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,o.kt)("p",null,"You can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," prop to the Checkbox component to customize the Checkbox. This is useful if your project uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,o.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the Checkbox." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'Checkbox."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomCheckbox(props) {\n  return <Checkbox className={customStyles.custom} {...props} />\n}\n")),(0,o.kt)("h4",{id:"3-ejected-checkbox"},"3. Ejected Checkbox"),(0,o.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Checkbox however you prefer while keeping the accessibility behavior.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import { getCheckboxProps } from '@pluralsight/headless-styles'\n")),(0,o.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Checkbox/checkboxCSS.ts"},"Headless-styles documentation"),"."),(0,o.kt)("h2",{id:"behavior"},"Behavior"),(0,o.kt)("h3",{id:"layout"},"Layout"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use multiple Checkboxes in a vertical list."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use multiple Checkboxes in a single row."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," provide a Label with a Checkbox."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use a Checkbox inline without a Label."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do"),' use a Checkbox for giving users an option to "opt-in" to a choice.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use a Checkbox for showing/hiding content."),(0,o.kt)("h3",{id:"interactions"},"Interactions"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use the indeterminate state for a parent option of a nested group."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use the indeterminate state for a single option within a group."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {\n  checked: boolean\n  id: string\n  indeterminate?: boolean\n  name?: string\n}\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"checked"),": boolean - Whether the Checkbox is checked or not."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"id"),": string - The id of the Checkbox."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"indeterminate"),": boolean - Whether the Checkbox is in an indeterminate state or not."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": string - The name of the Checkbox.")),(0,o.kt)("h2",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"The Pando Checkbox is fully accessible and screen-readable through the following features:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-invalid")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," when the input is invalid."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-describedby")," attribute is set to the ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," of the FieldMessage or ErrorMessage that describes the input."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-required")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," when the input is required."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-disabled")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," when the input is disabled."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-checked")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," when the input is checked."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-checked")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"mixed")," when the input is indeterminate."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-hidden")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," on the input control and icon to hide it from screen readers.")))}p.isMDXComponent=!0}}]);