"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6557],{70167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96122:function(e,t,n){const r=n(86521);t.Z=function(e){return(0,r.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,r.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},35053:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(45721),o=n(28378),a=n(39549),i=n(24217),l=n(96122);function s(e){var t=e.href,n=(0,o.j)({href:t}),s=(0,a.L)(n.iconOptions),p=t.includes("github")?i.Z:l.Z;return r.createElement("a",n.link,r.createElement(p,s),e.children)}},60757:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(60953),o=n(59005),a=(n(45721),n(70167)),i=n(35053),l=["components"],s={tags:["Development","Packages","React","React utils","useFocusTrap","hooks"]},p="useFocusTrap",u={unversionedId:"development/react-utils/use-focus-trap",id:"development/react-utils/use-focus-trap",title:"useFocusTrap",description:"A custom hook for trapping focus within Modal and Dialog components.",source:"@site/docs/development/react-utils/use-focus-trap.mdx",sourceDirName:"development/react-utils",slug:"/development/react-utils/use-focus-trap",permalink:"/docs/next/development/react-utils/use-focus-trap",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/react-utils/use-focus-trap.mdx",tags:[{label:"Development",permalink:"/docs/next/tags/development"},{label:"Packages",permalink:"/docs/next/tags/packages"},{label:"React",permalink:"/docs/next/tags/react"},{label:"React utils",permalink:"/docs/next/tags/react-utils"},{label:"useFocusTrap",permalink:"/docs/next/tags/use-focus-trap"},{label:"hooks",permalink:"/docs/next/tags/hooks"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Development","Packages","React","React utils","useFocusTrap","hooks"]},sidebar:"development",previous:{title:"useEscToClose",permalink:"/docs/next/development/react-utils/use-esc-to-close"},next:{title:"usePreloadedImage",permalink:"/docs/next/development/react-utils/use-preloaded-img"}},c={},d=[{value:"Import",id:"import",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example usage in Component",id:"example-usage-in-component",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usefocustrap"},"useFocusTrap"),(0,a.kt)("p",null,"A custom hook for trapping focus within Modal and Dialog components."),(0,a.kt)(i.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/useFocusTrap.ts",mdxType:"ViewSourceLink"},"View source"),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useFocusTrap } from '@pluralsight/react-utils'\n")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," you only need to pass in a ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," Object that is attached to the Button that triggers the dialog/modal to open."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const { ref, onKeyDown, setupFocusTrap } = useFocusTrap(triggerRef)\n")),(0,a.kt)("h2",{id:"return-value"},"Return Value"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," hook returns an Object with the following properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ref"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"RefObject<HTMLElement>")),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"ref")," to place on the container component of your dialog/modal (i.e. the element that holds the content users see).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"setupFocusTrap"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Function")),(0,a.kt)("td",{parentName:"tr",align:null},"A setup function to use in a ",(0,a.kt)("inlineCode",{parentName:"td"},"useEffect")," onMount hook (i.e. empty Array of dependencies)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onKeyDown"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Function")),(0,a.kt)("td",{parentName:"tr",align:null},"An event handler to place on the container component of your dialog/modal via the ",(0,a.kt)("inlineCode",{parentName:"td"},"onKeyDown")," property.")))),(0,a.kt)("h2",{id:"example-usage-in-component"},"Example usage in Component"),(0,a.kt)("p",null,"Here is an example of how you might use ",(0,a.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," for an Alert Dialog combined with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/development/react-utils/use-esc-to-close"},"useEscToClose")," hook, and ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/development/headless-styles/intro"},"headless-styles")," package."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," within a component, make sure you are wrapping the component in ",(0,a.kt)("inlineCode",{parentName:"p"},"forwardRef")," so you can safely pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"triggerRef")," from the parent into the hook."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Not doing this will prevent the hook from placing the focus back on the trigger when the modal is closed (a11y error)."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function AlertDialog(props, triggerRef) {\n  const { onClose, ...alertProps } = props\n  const wrapperRef = useRef(null)\n  const alert = getAlertDialogProps(alertProps)\n  const { cancelBtnProps, primaryBtnProps } = getButtonStyleProps(props.kind, {\n    cancel: alert.cancelBtnOptions,\n    primary: alert.primaryBtnOptions,\n  })\n  // highlight-next-line\n  const { ref, onKeyDown, setupFocusTrap } = useFocusTrap(triggerRef)\n\n  function handleBackdropClick(event) {\n    event.stopPropagation()\n    if (wrapperRef.current === event.target) {\n      onClose()\n    }\n  }\n\n  useEscToClose(onClose)\n\n  useEffect(() => {\n    // highlight-next-line\n    setupFocusTrap()\n  }, [setupFocusTrap])\n\n  return (\n    <div {...alert.backdrop}>\n      <div {...alert.focusGuard} />\n\n      <div {...alert.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>\n        // highlight-next-line\n        <section {...alert.section} ref={ref} onKeyDown={onKeyDown}>\n          <header {...alert.alertTitle}>Example Alert</header>\n          <p {...alert.alertBody}>\n            Performing this action will be permanent. Are you sure you want to\n            do it?\n          </p>\n          <footer {...alert.buttonGroup}>\n            <button {...cancelBtnProps} onClick={onClose}>\n              Cancel\n            </button>\n            <button {...primaryBtnProps}>Action</button>\n          </footer>\n        </section>\n      </div>\n\n      <div {...alert.focusGuard} />\n    </div>\n  )\n}\n\n// highlight-next-line\nconst AlertDialogEl = memo(forwardRef(NormalAlert))\n")))}f.isMDXComponent=!0},65976:function(e,t,n){n.r(t),t.default={textLinkBase:"textLinkBase_THqx"}},70706:function(e,t){function n(e){return/^https?:\/\//.test(e)}function r(e){return{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:t.textLinkIconSize,tech:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTextLinkProps=t.getDefaultTextLinkOptions=t.defaultTextLinkOptions=t.textLinkIconSize=void 0,t.textLinkIconSize="1em",t.defaultTextLinkOptions={href:"",tech:""},t.getDefaultTextLinkOptions=function(e){return{href:e?.href??t.defaultTextLinkOptions.href,tech:e?.tech??t.defaultTextLinkOptions.tech}},t.createTextLinkProps=function(e,t){const o=function(e){return n(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...o},...n(e)&&{iconOptions:r(t)}}}},28378:function(e,t,n){t.j=void 0;const r=n(6495),o=n(91037),a=n(70706),i=r.__importDefault(n(65976));t.j=function(e){const t=(0,a.getDefaultTextLinkOptions)(e),n=(0,a.createTextLinkProps)(t.href,t.tech);return{...n,link:{...n.link,...(0,o.createClassProp)(t.tech,{defaultClass:`ps-text-link ${i.default.textLinkBase}`,svelteClass:"textLinkBase"})}}}}}]);