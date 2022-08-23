"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6557],{95777:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(20411),o=n(19801),r=n(96399),l=n(85826),s="icon_t5Zl",i="npmIcon_uVGz icon_t5Zl",p="link_GZb0";var u=a.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 576 512",focusable:"false",height:"2rem",width:"2rem",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"})),c=(0,o.getButtonProps)({kind:"weak",size:"s"}).className,m=(0,r.L)({size:"s"});function d(e){var t="github"===e.icon,n=t?s:i,o=t?a.createElement(l.ETn,m):u;return a.createElement("a",{className:c+" "+p,href:e.href,rel:"noopener",target:"_blank"},a.createElement("span",{className:n},o)," ",e.children)}},55829:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var a=n(60953),o=n(59005),r=(n(20411),n(70167)),l=n(95777),s=["components"],i={tags:["Development","Packages","React","React utils","useFocusTrap"]},p="useFocusTrap",u={unversionedId:"development/react-utils/use-focus-trap",id:"development/react-utils/use-focus-trap",title:"useFocusTrap",description:"A custom hook for trapping focus within Modal and Dialog components.",source:"@site/docs/development/react-utils/use-focus-trap.mdx",sourceDirName:"development/react-utils",slug:"/development/react-utils/use-focus-trap",permalink:"/docs/development/react-utils/use-focus-trap",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/react-utils/use-focus-trap.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"React",permalink:"/docs/tags/react"},{label:"React utils",permalink:"/docs/tags/react-utils"},{label:"useFocusTrap",permalink:"/docs/tags/use-focus-trap"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["Development","Packages","React","React utils","useFocusTrap"]},sidebar:"development",previous:{title:"useEscToClose",permalink:"/docs/development/react-utils/use-esc-to-close"},next:{title:"Roadmap",permalink:"/docs/development/discover-more/roadmap"}},c={},m=[{value:"Import",id:"import",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example usage in Component",id:"example-usage-in-component",level:2}],d={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usefocustrap"},"useFocusTrap"),(0,r.kt)("p",null,"A custom hook for trapping focus within Modal and Dialog components."),(0,r.kt)(l.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/useFocusTrap.ts",mdxType:"ViewSourceLink"},"View source"),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useFocusTrap } from '@pluralsight/react-utils'\n")),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," you only need to pass in a ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," Object that is attached to the Button that triggers the dialog/modal to open."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const { ref, onKeydown, setupFocusTrap } = useFocusTrap(triggerRef)\n")),(0,r.kt)("h2",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," hook returns an Object with the following properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ref"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RefObject<HTMLElement>")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"ref")," to place on the container component of your dialog/modal (i.e. the element that holds the content users see).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setupFocusTrap"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Function")),(0,r.kt)("td",{parentName:"tr",align:null},"A setup function to use in a ",(0,r.kt)("inlineCode",{parentName:"td"},"useEffect")," onMount hook (i.e. empty Array of dependencies)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onKeydown"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Function")),(0,r.kt)("td",{parentName:"tr",align:null},"An event handler to place on the container component of your dialog/modal via the ",(0,r.kt)("inlineCode",{parentName:"td"},"onKeyDown")," property.")))),(0,r.kt)("h2",{id:"example-usage-in-component"},"Example usage in Component"),(0,r.kt)("p",null,"Here is an example of how you might use ",(0,r.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," for an Alert Dialog combined with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/react-utils/use-esc-to-close"},"useEscToClose")," hook, and ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/intro"},"headless-styles")," package."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," within a component, make sure you are wrapping the component in ",(0,r.kt)("inlineCode",{parentName:"p"},"forwardRef")," so you can safely pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"triggerRef")," from the parent into the hook."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Not doing this will prevent the hook from placing the focus back on the trigger when the modal is closed (a11y error)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function AlertDialog(props, triggerRef) {\n  const { onClose, ...alertProps } = props\n  const wrapperRef = useRef(null)\n  const alert = getAlertDialogProps(alertProps)\n  const { cancelBtnProps, primaryBtnProps } = getButtonStyleProps(props.kind, {\n    cancel: alert.cancelBtnOptions,\n    primary: alert.primaryBtnOptions,\n  })\n  // highlight-next-line\n  const { ref, onKeydown, setupFocusTrap } = useFocusTrap(triggerRef)\n\n  function handleBackdropClick(event) {\n    event.stopPropagation()\n    if (wrapperRef.current === event.target) {\n      onClose()\n    }\n  }\n\n  useEscToClose(onClose)\n\n  useEffect(() => {\n    // highlight-next-line\n    setupFocusTrap()\n  }, [setupFocusTrap])\n\n  return (\n    <div {...alert.backdrop}>\n      <div {...alert.focusGuard} />\n\n      <div {...alert.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>\n        // highlight-next-line\n        <section {...alert.section} ref={ref} onKeyDown={onKeydown}>\n          <header {...alert.alertTitle}>Example Alert</header>\n          <p {...alert.alertBody}>\n            Performing this action will be permanent. Are you sure you want to\n            do it?\n          </p>\n          <footer {...alert.buttonGroup}>\n            <button {...cancelBtnProps} onClick={onClose}>\n              Cancel\n            </button>\n            <button {...primaryBtnProps}>Action</button>\n          </footer>\n        </section>\n      </div>\n\n      <div {...alert.focusGuard} />\n    </div>\n  )\n}\n\n// highlight-next-line\nconst AlertDialogEl = memo(forwardRef(NormalAlert))\n")))}h.isMDXComponent=!0}}]);