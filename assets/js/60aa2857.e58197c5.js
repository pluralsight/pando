"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41891],{9637:function(e,n,t){const o=t(86521);n.Z=function(e){return(0,o.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},76548:function(e,n,t){const o=t(86521);n.Z=function(e){return(0,o.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},5397:function(e,n,t){const o=t(86521);n.Z=function(e){return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"danger diamond filled icon",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.293 21.707a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-9-9a.999.999 0 0 0-1.414 0l-9 9a.999.999 0 0 0 0 1.414l9 9ZM12.5 14a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1Zm0 3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1Z"})})}},48027:function(e,n,t){var o=t(60953),a=t(45721),i=t(77674),r=t(34308),l=t(60853),s=t(72122);n.Z=function(){var e=(0,a.useRef)(null),n=(0,a.useState)(!1),t=n[0],c=n[1],d=(0,a.useCallback)((function(){c(!1)}),[]);return a.createElement(l.Z,null,a.createElement("button",(0,o.Z)({},(0,r.g)().button,{onClick:function(){c(!0)},ref:e}),"Confirm payment"),t&&(0,i.createPortal)(a.createElement(s.Z,{confirmTitle:"Confirm payment",bodyId:"normalAlert-body",body:"Are you sure? This action can't be undone.",confirmText:"Charge card",headerId:"normalAlert-header",id:"normalAlert",onClose:d,ref:e}),document.body))}},17971:function(e,n,t){t.d(n,{W:function(){return r},q:function(){return i}});var o=t(45721),a=t(63467);function i(){return o.createElement(a.Z,null,"<div {...confirm.backdrop}>\n  <div {...confirm.focusGuard} />\n\n  <div {...confirm.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>\n    <section {...confirm.section} ref={ref} onKeyDown={onKeyDown}>\n      <header {...confirm.header}>\n        <h6 {...confirm.confirmTitle}>{props.confirmTitle}</h6>\n      </header>\n      <p {...confirm.confirmBody}>{props.body}</p>\n      <footer {...confirm.buttonGroup}>\n        <button {...getButtonProps(confirm.cancelBtnOptions).button} onClick={onClose}>\n          Cancel\n        </button>\n        <button {...getButtonProps(confirm.agreeBtnOptions).button}>{props.confirmText}</button>\n      </footer>\n    </section>\n  </div>\n\n  <div {...confirm.focusGuard} />\n</div>")}function r(){return o.createElement(a.Z,null,"import { forwardRef, memo, useEffect, useRef } from 'react'\nimport { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'\nimport { getButtonProps, getConfirmDialogProps, getIconProps } from '@pluralsight/headless-styles'\nimport { DangerDiamondFilledIcon } from '@pluralsight/icons'\n\nfunction ConfirmDialogEl(props, triggerRef) {\n  const { onClose, ...confirmProps } = props\n  const wrapperRef = useRef(null)\n  const confirm = getConfirmDialogProps(confirmProps)\n  const { ref, onKeyDown, setupFocusTrap } = useFocusTrap(triggerRef)\n  const isDestructive = confirmProps.kind === 'destructive'\n\n  function handleBackdropClick(event) {\n    event.stopPropagation()\n    if (wrapperRef.current === event.target) {\n      onClose()\n    }\n  }\n\n  useEscToClose(onClose)\n\n  useEffect(() => {\n    setupFocusTrap()\n  }, [setupFocusTrap])\n\n  return (\n    <div {...confirm.backdrop}>\n      <div {...confirm.focusGuard} />\n\n      <div {...confirm.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>\n        <section {...confirm.section} ref={ref} onKeyDown={onKeyDown}>\n          <header {...confirm.header}>\n            {isDestructive && (\n              <span {...confirm.iconWrapper}>\n                <DangerDiamondFilledIcon\n                  {...getIconProps(confirm.iconOptions)}\n                />\n              </span>\n            )}\n            <h6 {...confirm.confirmTitle}>{props.confirmTitle}</h6>\n          </header>\n          <p {...confirm.confirmBody}>{props.body}</p>\n          <footer {...confirm.buttonGroup}>\n            <button {...getButtonProps(confirm.cancelBtnOptions).button} onClick={onClose}>\n              Cancel\n            </button>\n            <button {...getButtonProps(confirm.agreeBtnOptions).button}>{props.confirmText}</button>\n          </footer>\n        </section>\n      </div>\n\n      <div {...confirm.focusGuard} />\n    </div>\n  )\n}\n\nconst ConfirmDialog = memo(forwardRef(ConfirmDialogEl))\n\nexport default ConfirmDialog")}},72122:function(e,n,t){t.d(n,{Z:function(){return f}});var o=t(60953),a=t(59005),i=t(45721),r=t(5489),l=t(63293);var s=t(91690);var c=t(54027),d=t(34308),m=t(5397),u=["onClose"];function p(e,n){var t=e.onClose,p=(0,a.Z)(e,u),f=(0,i.useRef)(null),g=function(e){const n=function(e){return{bodyId:(null==e?void 0:e.bodyId)??"",headerId:(null==e?void 0:e.headerId)??"",id:(null==e?void 0:e.id)??"",kind:(null==e?void 0:e.kind)??"non-destructive"}}(e),t=function(e){const{bodyId:n,headerId:t}=e;return{cancelBtnOptions:{usage:"outline"},agreeBtnOptions:{sentiment:"destructive"===e.kind?"danger":"action"},confirmTitle:{id:t},confirmBody:{id:n},backdrop:{},buttonGroup:{},cancelButton:{},focusGuard:{"data-aria-hidden":!0,"data-focus-guard":!0,tabIndex:0},section:{"aria-modal":!0,"aria-describedby":n,"aria-labelledby":t,id:e.id,role:"alertdialog",tabIndex:-1},wrapper:{"data-focus-lock-disabled":!1,tabIndex:-1},header:{}}}(n),o=function(e,n){return"destructive"===e.kind?{iconOptions:{ariaHidden:!0,size:"m",...null==n?void 0:n.iconOptions},iconWrapper:{...null==n?void 0:n.iconWrapper}}:{}}(n,{iconWrapper:{...(0,l.c)(`ps-confirm-dialog-icon ${s.s.confirmDialogTitleIcon}`)}});return{...t,...o,confirmBody:{...t.confirmBody,...(0,l.c)("ps-confirm-dialog-body")},backdrop:{...t.backdrop,...(0,l.c)(`ps-confirm-dialog-backdrop ${s.s.confirmDialogBackdrop}`)},buttonGroup:{...t.buttonGroup,...(0,l.c)(`ps-confirm-dialog-btn-group ${s.s.confirmDialogBtnGroup}`)},cancelButton:{...t.cancelButton,...(0,l.c)(`ps-confirm-dialog-cancel ${s.s.confirmDialogCancelBtn}`)},focusGuard:{...t.focusGuard,...(0,l.c)(`ps-confirm-dialog-focus-guard ${s.s.confirmFocusGuard}`)},section:{...t.section,...(0,l.c)(`ps-confirm-dialog-section ${s.s.confirmDialogSection}`)},wrapper:{...t.wrapper,...(0,l.c)(`ps-confirm-dialog ${s.s.confirmDialogWrapper}`)},header:{...t.header,...(0,l.c)(`ps-confirm-dialog-header ${s.s.confirmDialogHeader}`)}}}(p),h=(0,r.P5)(n),k=h.ref,v=h.onKeyDown,b=h.setupFocusTrap,C="destructive"===p.kind;return(0,r.AQ)(t),(0,i.useEffect)((function(){b()}),[b]),i.createElement("div",g.backdrop,i.createElement("div",g.focusGuard),i.createElement("div",(0,o.Z)({},g.wrapper,{ref:f,onClick:function(e){e.stopPropagation(),f.current===e.target&&t()}}),i.createElement("section",(0,o.Z)({},g.section,{ref:k,onKeyDown:v}),i.createElement("header",g.header,C&&i.createElement("span",g.iconWrapper,i.createElement(m.Z,(0,c.g)(g.iconOptions))),i.createElement("h6",(0,o.Z)({},g.confirmTitle,{style:{margin:"initial"}}),e.confirmTitle)),i.createElement("p",g.confirmBody,e.body),i.createElement("footer",g.buttonGroup,i.createElement("button",(0,o.Z)({},(0,d.g)(g.cancelBtnOptions).button,{onClick:t}),"Cancel"),i.createElement("button",(0,d.g)(g.agreeBtnOptions).button,e.confirmText)))),i.createElement("div",g.focusGuard))}var f=(0,i.memo)((0,i.forwardRef)(p))},50198:function(e,n,t){var o=t(60953),a=t(45721),i=t(77674),r=t(34308),l=t(60853),s=t(72122);n.Z=function(){var e=(0,a.useRef)(null),n=(0,a.useState)(!1),t=n[0],c=n[1],d=(0,a.useCallback)((function(){c(!1)}),[]);return a.createElement(l.Z,null,a.createElement("button",(0,o.Z)({},(0,r.g)({sentiment:"danger"}).button,{onClick:function(){c(!0)},ref:e}),"Delete channel"),t&&(0,i.createPortal)(a.createElement(s.Z,{confirmTitle:"Delete Channel",body:"Are you sure? This action will be permanent.",bodyId:"destructiveAlert-body",confirmText:"Delete",headerId:"destructiveAlert-header",id:"destructiveAlert",kind:"destructive",onClose:d,ref:e}),document.body))}},60853:function(e,n,t){t.d(n,{Z:function(){return r}});var o=t(45721),a={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"},i={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function r(e){var n,t,r;void 0===e&&(e=i);var l=null!=(n=e.type)?n:i.type,s=e.gridColumns?"repeat("+e.gridColumns+", minmax(auto, max-content))":"initial",c={alignItems:e.alignItems,gridTemplateColumns:s,justifyContent:e.justifyContent,textAlign:null!=(t=e.textAlign)?t:"center",gap:null!=(r=e.gap)?r:"1rem",columnGap:e.columnGap};return o.createElement("div",{className:a[l],style:c},e.children)}},26652:function(e,n,t){t.d(n,{Z:function(){return _}});var o=t(60953),a=t(59005),i=t(45721),r=t(23372),l="button_sEkW",s="chakra_ow8e",c="chakraCircle_c8Xz",d="list_rMMG",m="listItem_bLPI",u="icon_nzIq",p="svelteBackground_c8BA",f="svelteOutline_tdvb",g=["className"],h=i.createElement("svg",{"aria-hidden":"true",className:u,focusable:"false",viewBox:"0 0 24 24"},i.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),k=i.createElement("svg",{"aria-hidden":"true",className:u,focusable:"false",viewBox:"0 0 1024 1024"},i.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),v=i.createElement("svg",{"aria-hidden":"true",className:""+u,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{className:f,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),i.createElement("path",{className:p,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var b={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:h,id:"source",href:"",label:"Show full source"},styled:{icon:k,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:i.createElement("svg",{"aria-hidden":"true",className:u+" "+s,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},i.createElement("rect",{className:c,width:"582",height:"582",rx:"291"}),i.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:i.createElement("svg",{"aria-hidden":"true",className:u,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:v,id:"svelte",label:"View Svelte"}}},C={size:"m",usage:"text"};function y(e){var n=b.results[e.techId],t=(0,r.g)(C).button.className,o="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return i.createElement("a",{"aria-label":n.label,className:t+" "+l,href:o,name:n.label,rel:"noopener noreferrer",target:"_blank",title:n.label},e.children)}function w(e){var n=e.techId,t=Object.assign({},(0,r.g)(C)).button,s=t.className,c=(0,a.Z)(t,g);return i.createElement("button",(0,o.Z)({className:s+" "+l,onClick:e.onToggleShow,title:b.results[n].label},c),i.createElement(D,{tabId:n}))}function D(e){return b.results[e.tabId].icon}function x(e){var n=e.techId;return i.createElement("li",{className:m},"source"===n?i.createElement(w,{onToggleShow:e.onToggleShow,techId:n}):i.createElement(y,{techId:n,href:e.sandboxList[n]},i.createElement(D,{tabId:n})))}function N(e){return i.createElement("ul",{className:d},b.items.map((function(n){return i.createElement(x,{key:n,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:n})})))}function S(e){var n=(0,i.useState)(!1),t=n[0],o=n[1];return i.createElement("div",null,i.createElement(N,{onToggleShow:function(){o((function(e){return!e}))},sandboxList:e.sandboxList}),t?e.fullCode:e.children)}var _=(0,i.memo)(S)},94880:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(45721),a=t(19820),i=t(54027),r=t(9637),l=t(76548);function s(e){var n=e.href,t=(0,a.g)({href:n}),s=(0,i.g)(t.iconOptions),c=n.includes("github")?r.Z:l.Z;return o.createElement("a",t.link,o.createElement(c,s),e.children)}},80858:function(e,n,t){var o=t(45721),a=t(34308),i=t(55121),r=t(54116),l=t(9170),s=t(23372),c=t(54027),d=t(26300),m=t(9772),u=t(46926),p=t(86948),f=t(16797),g=t(28525),h=t(36386),k=t(16284),v=t(74149),b=t(99170),C=t(31072),y=t(88878),w=t(82657),D=t(56561),x=t(30814),N=t(5489),S=Object.assign({React:o},o,{getButtonProps:a.g,getFormControlProps:i.g,getFormLabelProps:r.g,getGridProps:l.g,getGridItemProps:l.a,getIconButtonProps:s.g,getIconProps:c.g,getInputProps:d.g,getMenuProps:m.g,getMenuItemProps:m.a,getPaginationProps:u.g,getPopoverProps:p.g,getRadioProps:f.g,getSelectProps:g.g,getTagProps:h.g,CalendarIcon:k.Z,ChevronDownIcon:v.Z,ChevronRightIcon:b.Z,CloseIcon:C.Z,EyeIcon:y.Z,EyeOffIcon:w.Z,PlaceholderIcon:D.Z,WarningTriangleFilledIcon:x.Z,useAutoFormatDate:N.y0,useMenuInteraction:N.P8,useRovingTabIndex:N.XZ,useSubmenuInteraction:N.iL});n.Z=S},60686:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return h}});var o=t(60953),a=t(59005),i=(t(45721),t(70167)),r=t(48027),l=t(17971),s=t(50198),c=t(94880),d=t(26652),m=["components"],u={tags:["Development","Packages","Components","Headless Styles","Confirm Dialog"],title:"Confirm Dialog"},p=void 0,f={unversionedId:"development/headless-styles/ConfirmDialog",id:"version-0.1.0-alpha/development/headless-styles/ConfirmDialog",title:"Confirm Dialog",description:"The getConfirmDialogProps is used to interrupt the user with a mandatory confirmation or action.",source:"@site/versioned_docs/version-0.1.0-alpha/development/headless-styles/ConfirmDialog.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/ConfirmDialog",permalink:"/docs/0.1.0-alpha/development/headless-styles/ConfirmDialog",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.1.0-alpha/development/headless-styles/ConfirmDialog.mdx",tags:[{label:"Development",permalink:"/docs/0.1.0-alpha/tags/development"},{label:"Packages",permalink:"/docs/0.1.0-alpha/tags/packages"},{label:"Components",permalink:"/docs/0.1.0-alpha/tags/components"},{label:"Headless Styles",permalink:"/docs/0.1.0-alpha/tags/headless-styles"},{label:"Confirm Dialog",permalink:"/docs/0.1.0-alpha/tags/confirm-dialog"}],version:"0.1.0-alpha",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Confirm Dialog"],title:"Confirm Dialog"},sidebar:"development",previous:{title:"Circular Progress",permalink:"/docs/0.1.0-alpha/development/headless-styles/CircularProgress"},next:{title:"FormControl",permalink:"/docs/0.1.0-alpha/development/headless-styles/FormControl"}},g={},h=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Confirm Dialog",id:"basic-confirm-dialog",level:3},{value:"Destrucive Confirm Dialog",id:"destrucive-confirm-dialog",level:3},{value:"React Performance Requirements",id:"react-performance-requirements",level:3},{value:"Use React-utils",id:"use-react-utils",level:4},{value:"Use Callbacks",id:"use-callbacks",level:4},{value:"Use ForwardRef",id:"use-forwardref",level:4},{value:"Use Memo",id:"use-memo",level:4},{value:"Accessibility",id:"accessibility",level:2},{value:"Additional Aria Features",id:"additional-aria-features",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"ConfirmDialogOptions",id:"confirmdialogoptions",level:3},{value:"Props",id:"props",level:2},{value:"ConfirmDialogProps",id:"confirmdialogprops",level:3},{value:"JSConfirmDialogProps",id:"jsconfirmdialogprops",level:3}],k={toc:h};function v(e){var n=e.components,t=(0,a.Z)(e,m);return(0,i.kt)("wrapper",(0,o.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getConfirmDialogProps")," is used to interrupt the user with a mandatory confirmation or action."),(0,i.kt)(c.Z,{icon:"github",href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/ConfirmDialog",mdxType:"ViewSourceLink"},"View source"),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getConfirmDialogProps } from '@pluralsight/headless-styles'\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"basic-confirm-dialog"},"Basic Confirm Dialog"),(0,i.kt)("p",null,"There are two kinds of Confirm dialogs to use: ",(0,i.kt)("inlineCode",{parentName:"p"},"non-destructive")," (default) and ",(0,i.kt)("inlineCode",{parentName:"p"},"destructive"),"."),(0,i.kt)(r.Z,{mdxType:"BasicConfirmDialog"}),(0,i.kt)(d.Z,{fullCode:(0,i.kt)(l.W,{mdxType:"BasicConfirmDialogFullPreview"}),sandboxList:{chakra:"ps-react-chakra-3c1l5f",joy:"basic-mui-b70341",styled:"sc-xkq3xi",svelte:"ps-svelte-wc5255"},mdxType:"LiveExampleTabs"},(0,i.kt)(l.q,{mdxType:"BasicConfirmDialogPreview"})),(0,i.kt)("h3",{id:"destrucive-confirm-dialog"},"Destrucive Confirm Dialog"),(0,i.kt)("p",null,"For times you want to confirm an action that is potentially destructive (i.e. deleting a user, etc.) use the ",(0,i.kt)("inlineCode",{parentName:"p"},"destructive")," kind."),(0,i.kt)(s.Z,{mdxType:"DestructiveConfirmDialog"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const alert = getConfirmDialogProps({ kind: 'destructive' })\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"destructive")," Confirm Dialog, you should ",(0,i.kt)("strong",{parentName:"p"},"always use the danger sentiment option")," for the trigger Button.")),(0,i.kt)("h3",{id:"react-performance-requirements"},"React Performance Requirements"),(0,i.kt)("p",null,"To ensure you are keeping your app as performant as possible when creating an Confirm Dialog component, there are a few helpers you will need to include in your code to deliver the highest quality result."),(0,i.kt)("h4",{id:"use-react-utils"},"Use React-utils"),(0,i.kt)("p",null,"We have a helper package @pluralsight/react-utils that you can use (we include in the expanded code example of the Basic Confirm Dialog section) which contains custom hooks and other helpers to reduce your code base and keep the Confirm Dialog a11y compliant."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.1.0-alpha/development/react-utils/use-focus-trap"},(0,i.kt)("inlineCode",{parentName:"a"},"useFocusTrap"))," - custom hook that keeps the focus trapped within a dialog when it is active. When the dialog is closed, it returns focus to the component that triggered the dialog to open."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.1.0-alpha/development/react-utils/use-esc-to-close"},(0,i.kt)("inlineCode",{parentName:"a"},"useEscToClose")),' - custom hook that registers an event to close the dialog when the "Escape" key is pressed.')),(0,i.kt)("h4",{id:"use-callbacks"},"Use Callbacks"),(0,i.kt)("p",null,"Whenever you pass a Function into another ",(0,i.kt)("strong",{parentName:"p"},"custom")," component as one of its props, wrap the Function in a ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},(0,i.kt)("inlineCode",{parentName:"a"},"useCallback")," hook"),". This is a recommended practice to help reduce unnecessary re-rendering/commiting in React apps."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Using a Callack hook when passing functions as props"',title:'"Using',a:!0,Callack:!0,hook:!0,when:!0,passing:!0,functions:!0,as:!0,'props"':!0},'function BasicConfirmDialog() {\n  const triggerRef = useRef(null)\n  const [showAlert, setShowDialog] = useState(false)\n\n  // highlight-start\n  const handleCloseDialog = useCallback(() => {\n    setShowDialog(false)\n  }, [])\n  // highlight-end\n\n  function handleShowDialog() {\n    setShowDialog(true)\n  }\n\n  return (\n    <Container>\n      <button\n        {...getButtonProps().button}\n        onClick={handleShowDialog}\n        ref={triggerRef}\n      >\n        Confirm payment\n      </button>\n\n      {showAlert &&\n        createPortal(\n          <ConfirmDialog\n            dialogTitle="Confirm payment"\n            bodyId="normal-dialog-body"\n            body="Are you sure? This action can\'t be undone."\n            confirmText="Charge card"\n            headerId="normal-dialog-header"\n            id="normaldialog"\n            // highlight-next-line\n            onClose={handleCloseDialog}\n            ref={triggerRef}\n          />,\n          document.body\n        )}\n    </Container>\n  )\n}\n')),(0,i.kt)("h4",{id:"use-forwardref"},"Use ForwardRef"),(0,i.kt)("p",null,"Due to the nature of how React works with passing Ref Objects, in order for the ",(0,i.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," hook to work, you need to wrap your Confirm Dialog component in the ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/forwarding-refs.html#gatsby-focus-wrapper"},(0,i.kt)("inlineCode",{parentName:"a"},"forwardRef")," function")," to ensure the ",(0,i.kt)("inlineCode",{parentName:"p"},"triggerRef")," has successfully passed into your component for use in the custom hook."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Not using ",(0,i.kt)("inlineCode",{parentName:"p"},"forwardRef")," will prevent some functionality of the hook from working. ",(0,i.kt)("strong",{parentName:"p"},"It will not break your app"),", but the hook will not return the focus back to the original trigger which opened it (i.e. your app will not be a11y compliant).")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example using forwardRef"',title:'"Example',using:!0,'forwardRef"':!0},"const ConfirmDialog = forwardRef(ConfirmDialogEl)\n")),(0,i.kt)("h4",{id:"use-memo"},"Use Memo"),(0,i.kt)("p",null,"Lastly, you should wrap your ForwardedRef Component with the ",(0,i.kt)("inlineCode",{parentName:"p"},"memo")," function to ensure your Confirm Dialog component does not unnecessarily re-render/commit from the complex properties that may be passed in. This is another good practice that should become second nature when building components that accept complex properties (i.e., anything that is not a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive"},"Primitive"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example using memo with forwardRef"',title:'"Example',using:!0,memo:!0,with:!0,'forwardRef"':!0},"const ConfirmDialog = memo(forwardRef(ConfirmDialogEl))\n")),(0,i.kt)("h2",{id:"accessibility"},"Accessibility"),(0,i.kt)("p",null,"To make the Confirm Dialog as accessible as possible, we use a few required parameters to add additional a11y functionality to the component."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"id - sets the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," attribute on the body content for the dialog"),(0,i.kt)("li",{parentName:"ul"},"headerId - used for the ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-labeledby")," attribute on the ",(0,i.kt)("inlineCode",{parentName:"li"},"section")," element and set as the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," on the title content for the dialog"),(0,i.kt)("li",{parentName:"ul"},"bodyId - used for the ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-describedby")," attribute on the ",(0,i.kt)("inlineCode",{parentName:"li"},"section")," element")),(0,i.kt)("h3",{id:"additional-aria-features"},"Additional Aria Features"),(0,i.kt)("p",null,"We also provide additional attributes that do not require any input from the API parameters."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'role - set to "alertDialog"'),(0,i.kt)("li",{parentName:"ul"},'aria-modal - set to "true"'),(0,i.kt)("li",{parentName:"ul"},"When the dialog is opened, focus is set to the first focusable element in the ",(0,i.kt)("inlineCode",{parentName:"li"},"section")," child heirarchy."),(0,i.kt)("li",{parentName:"ul"},"When the dialog opens, the content in the ",(0,i.kt)("inlineCode",{parentName:"li"},"section")," element are announced by screen readers via the custom props above."),(0,i.kt)("li",{parentName:"ul"},"Clicking on the overlay closes the dialog"),(0,i.kt)("li",{parentName:"ul"},'Pressing the "Escape" key closes the dialog')),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getConfirmDialogProps")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"options"),": ",(0,i.kt)("a",{parentName:"td",href:"#confirmdialogoptions"},"ConfirmDialogOptions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"kind"),": 'non-destructive'"),(0,i.kt)("td",{parentName:"tr",align:null},"Get confirm dialog styles for CSS usage.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getJSConfirmDialogProps")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"options"),": ",(0,i.kt)("a",{parentName:"td",href:"#confirmdialogoptions"},"ConfirmDialogOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,i.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"confirmdialogoptions"},"ConfirmDialogOptions"),(0,i.kt)("p",null,"This interface is available as an ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ConfirmDialogOptions extends FieldOptions {\n  kind?: 'non-destructive' | 'destructive'\n  id: string\n  headerId: string\n  bodyId: string\n  tech?: 'svelte'\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { ConfirmDialogOptions } from '@pluralsight/headless-styles/types'\n")),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("h3",{id:"confirmdialogprops"},"ConfirmDialogProps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ConfirmDialogProps {\n  cancelBtnOptions: {\n    usage: 'outline'\n  }\n  agreeBtnOptions: {\n    sentiment: 'action' | 'danger'\n  }\n  confirmTitle: {\n    className: string\n    id: headerId\n  }\n  confirmBody: {\n    className: string\n    id: bodyId\n  }\n  backdrop: {\n    className: string\n  }\n  buttonGroup: {\n    className: string\n  }\n  cancelButton: {\n    className: string\n  }\n  focusGuard: {\n    ['data-aria-hidden']: true\n    ['data-focus-guard']: true\n    className: string\n    tabIndex: 0\n  }\n  section: {\n    ['aria-modal']: true\n    ['aria-describedby']: bodyId\n    ['aria-labelledby']: headerId\n    className: string\n    id: id\n    role: 'alertdialog'\n    tabIndex: -1\n  }\n  wrapper: {\n    ['data-focus-lock-disabled']: false\n    className: string\n    tabIndex: -1\n  }\n}\n")),(0,i.kt)("h3",{id:"jsconfirmdialogprops"},"JSConfirmDialogProps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSConfirmDialogProps {\n  cancelBtnOptions: {\n    usage: 'outline'\n  }\n  primaryBtnOptions: {\n    sentiment: 'action' | 'danger'\n  }\n  confirmTitle: {\n    a11yProps: {\n      id: headerId\n    }\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  confirmBody: {\n    a11yProps: {\n      id: bodyId\n    }\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  backdrop: {\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  buttonGroup: {\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  cancelButton: {\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  focusGuard: {\n    a11yProps: {\n      ['data-aria-hidden']: true\n      ['data-focus-guard']: true\n      tabIndex: 0\n    }\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  section: {\n    a11yProps: {\n      ['aria-modal']: true\n      ['aria-describedby']: bodyId\n      ['aria-labelledby']: headerId\n      id: id\n      role: 'alertdialog'\n      tabIndex: -1\n    }\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n  wrapper: {\n    a11yProps: {\n      ['data-focus-lock-disabled']: false\n      tabIndex: -1\n    }\n    cssProps: TemplateLiteralString\n    styles: Record<string, unknown>\n  }\n}\n")))}v.isMDXComponent=!0},91690:function(e,n,t){t.d(n,{s:function(){return a}});var o=t(99924);const a={light:"confirmDialogCSS-module_light__6QI6-",confirmDialogBackdrop:"confirmDialogCSS-module_confirmDialogBackdrop__SvaJn",confirmDialogBtnGroup:"confirmDialogCSS-module_confirmDialogBtnGroup__xQFxm",confirmDialogCancelBtn:"confirmDialogCSS-module_confirmDialogCancelBtn__VaHK2",confirmFocusGuard:"confirmDialogCSS-module_confirmFocusGuard__-Tusg",confirmDialogSection:"confirmDialogCSS-module_confirmDialogSection__HOsgy",fadeIn:"confirmDialogCSS-module_fadeIn__72y7G",confirmDialogWrapper:"confirmDialogCSS-module_confirmDialogWrapper__DsMZL",confirmDialogHeader:"confirmDialogCSS-module_confirmDialogHeader__G3CMt",confirmDialogTitleIcon:"confirmDialogCSS-module_confirmDialogTitleIcon__ecU2s"};(0,o.s)("@keyframes confirmDialogCSS-module_fadeIn__72y7G{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}:root{--ps-backdrop:rgba(0,0,0,.65)}.confirmDialogCSS-module_light__6QI6-,html[data-theme=light]{--ps-backdrop:hsla(0,0%,100%,.65)}.confirmDialogCSS-module_confirmDialogBackdrop__SvaJn{background:var(--ps-backdrop);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1300}.confirmDialogCSS-module_confirmDialogBtnGroup__xQFxm{margin-top:1.5rem;text-align:right}.confirmDialogCSS-module_confirmDialogBtnGroup__xQFxm button:first-of-type{margin-right:1rem}.confirmDialogCSS-module_confirmDialogCancelBtn__VaHK2{margin-right:1rem}.confirmDialogCSS-module_confirmFocusGuard__-Tusg{height:0;left:1px;overflow:hidden;padding:0;position:fixed;top:1px;width:1px}.confirmDialogCSS-module_confirmDialogSection__HOsgy{-webkit-padding-end:1.5rem;-webkit-padding-start:1.5rem;animation-delay:.1s;animation-duration:.15s;animation-fill-mode:forwards;animation-name:confirmDialogCSS-module_fadeIn__72y7G;animation-timing-function:ease-in-out;background:var(--ps-surface-weak);border-color:var(--ps-border-weak);border-radius:8px;border-style:solid;border-width:1px;box-shadow:0 10px 15px -3px rgba(0,0,0,.01),0 4px 6px -2px rgba(0,0,0,.05);color:var(--ps-text);display:flex;flex-direction:column;font-family:inherit;margin-bottom:3.75rem;margin-top:3.75rem;max-width:30rem;opacity:0;outline:2px solid transparent;outline-offset:2px;padding-bottom:1.5rem;padding-inline-end:1.5rem;padding-inline-start:1.5rem;position:relative;width:100%;z-index:1400}.confirmDialogCSS-module_confirmDialogWrapper__DsMZL{-moz-box-pack:center;-webkit-box-pack:center;align-items:flex-start;display:flex;height:100vh;justify-content:center;left:0;overflow:auto;position:fixed;top:0;width:100vw;z-index:1400}.confirmDialogCSS-module_confirmDialogHeader__G3CMt{align-items:center;display:flex;margin-bottom:1.5rem;margin-top:2.5rem}.confirmDialogCSS-module_confirmDialogTitleIcon__ecU2s{-webkit-margin-end:.625rem;color:var(--ps-danger-border);line-height:normal;margin-inline-end:.625rem}")},19820:function(e,n,t){t.d(n,{g:function(){return s}});var o=t(63293);function a(e){return/^https?:\/\//.test(e)}function i(e){const n=function(e){return a(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...n},...a(e)&&{iconOptions:{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:"1em"}}}}var r=t(99924);const l="textLinkCSS-module_textLinkBase__P-zdY";function s(e){const n=function(e){return{href:(null==e?void 0:e.href)??""}}(e),t=i(n.href);return{...t,link:{...t.link,...(0,o.c)(`ps-text-link ${l}`)}}}(0,r.s)(".textLinkCSS-module_textLinkBase__P-zdY{align-items:center;background-color:transparent;border-radius:6px;color:var(--ps-action-navigation);display:inline-flex;font-family:inherit;gap:.25em;outline:none;text-decoration:underline;transition:background-color .25s ease-in-out,color .25s ease-in-out}.textLinkCSS-module_textLinkBase__P-zdY:visited{color:var(--ps-action-navigation-visited)}.textLinkCSS-module_textLinkBase__P-zdY:hover{text-decoration:none}.textLinkCSS-module_textLinkBase__P-zdY:active{text-decoration:underline}.textLinkCSS-module_textLinkBase__P-zdY:focus{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.textLinkCSS-module_textLinkBase__P-zdY:focus:not(:focus-visible){box-shadow:none;outline:none}")}}]);