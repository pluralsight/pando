"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7981],{70167:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return f}});var r=t(20411);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,p=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return t?r.createElement(p,o(o({ref:n},m),{},{components:t})):r.createElement(p,o({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},91986:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(60953),a=t(59005),i=t(20411),o=t(88795),l=t(97249),c=t(31979),u="anchorWithStickyNavbar_d42P",m="anchorWithHideOnScrollNavbar_VRxX",s=["as","id"];function d(e){var n=e.as,t=e.id,d=(0,a.Z)(e,s),f=(0,c.L)().navbar.hideOnScroll;return"h1"!==n&&t?i.createElement(n,(0,r.Z)({},d,{className:(0,o.Z)("anchor",f?m:u),id:t}),d.children,i.createElement("a",{className:"hash-link",href:"#"+t,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(n,(0,r.Z)({},d,{id:void 0}))}},17981:function(e,n,t){t.d(n,{Z:function(){return H}});var r=t(20411),a=t(70167),i=t(60953),o=t(59005),l=t(74172),c=["mdxType","originalType"];var u=t(13124);var m=t(70095);var s=t(88795),d=t(13642),f=t(98584),p="details_UxYT",v="isBrowser_rzGa",h="collapsibleContent_g4K_",y=["summary","children"];function E(e){return!!e&&("SUMMARY"===e.tagName||E(e.parentElement))}function g(e,n){return!!e&&(e===n||g(e.parentElement,n))}function b(e){var n=e.summary,t=e.children,a=(0,o.Z)(e,y),l=(0,d.Z)(),c=(0,r.useRef)(null),u=(0,f.u)({initialState:!a.open}),m=u.collapsed,b=u.setCollapsed,Z=(0,r.useState)(a.open),C=Z[0],T=Z[1];return r.createElement("details",(0,i.Z)({},a,{ref:c,open:C,"data-collapsed":m,className:(0,s.Z)(p,l&&v,a.className),onMouseDown:function(e){E(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;E(n)&&g(n,c.current)&&(e.preventDefault(),m?(b(!1),T(!0)):b(!0))}}),null!=n?n:r.createElement("summary",null,"Details"),r.createElement(f.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){b(e),T(!e)}},r.createElement("div",{className:h},t)))}var Z="details_Z5Gl";function C(e){var n=Object.assign({},e);return r.createElement(b,(0,i.Z)({},n,{className:(0,s.Z)("alert alert--info",Z,n.className)}))}var T=t(91986);function O(e){return r.createElement(T.Z,e)}var N="containsTaskList_qKWA";var w="img_z_KV";var x=t(88776),z=t(97249),j="admonition_zB6w",k="admonitionHeading_v7vZ",P="admonitionIcon_D1qj",M="admonitionContent_HDYG";var _={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(z.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(z.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(z.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(z.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(z.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},D={secondary:"note",important:"info",success:"tip",warning:"danger"};function S(e){var n,t=function(e){var n=r.Children.toArray(e),t=n.find((function(e){var n;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),a=r.createElement(r.Fragment,null,n.filter((function(e){return e!==t})));return{mdxAdmonitionTitle:t,rest:a}}(e.children),a=t.mdxAdmonitionTitle,i=t.rest;return Object.assign({},e,{title:null!=(n=e.title)?n:a,children:i})}var A={head:function(e){var n=r.Children.map(e.children,(function(e){return r.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){var t=e.props,a=(t.mdxType,t.originalType,(0,o.Z)(t,c));return r.createElement(e.props.originalType,a)}return e}(e):e}));return r.createElement(l.Z,e,n)},code:function(e){var n=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){var t;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&n.includes(null==(t=e.props)?void 0:t.mdxType)}))?r.createElement("code",e):r.createElement(u.Z,e)},a:function(e){return r.createElement(m.Z,e)},pre:function(e){var n;return r.createElement(u.Z,(0,r.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:Object.assign({},e))},details:function(e){var n=r.Children.toArray(e.children),t=n.find((function(e){var n;return r.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),a=r.createElement(r.Fragment,null,n.filter((function(e){return e!==t})));return r.createElement(C,(0,i.Z)({},e,{summary:t}),a)},ul:function(e){return r.createElement("ul",(0,i.Z)({},e,{className:(n=e.className,(0,s.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&N))}));var n},img:function(e){return r.createElement("img",(0,i.Z)({loading:"lazy"},e,{className:(n=e.className,(0,s.Z)(n,w))}));var n},h1:function(e){return r.createElement(O,(0,i.Z)({as:"h1"},e))},h2:function(e){return r.createElement(O,(0,i.Z)({as:"h2"},e))},h3:function(e){return r.createElement(O,(0,i.Z)({as:"h3"},e))},h4:function(e){return r.createElement(O,(0,i.Z)({as:"h4"},e))},h5:function(e){return r.createElement(O,(0,i.Z)({as:"h5"},e))},h6:function(e){return r.createElement(O,(0,i.Z)({as:"h6"},e))},admonition:function(e){var n=S(e),t=n.children,a=n.type,i=n.title,o=n.icon,l=function(e){var n,t=null!=(n=D[e])?n:e;return _[t]||(console.warn('No admonition config found for admonition type "'+t+'". Using Info as fallback.'),_.info)}(a),c=null!=i?i:l.label,u=l.iconComponent,m=null!=o?o:r.createElement(u,null);return r.createElement("div",{className:(0,s.Z)(x.k.common.admonition,x.k.common.admonitionType(e.type),"alert","alert--"+l.infimaClassName,j)},r.createElement("div",{className:k},r.createElement("span",{className:P},m),c),r.createElement("div",{className:M},t))}};function H(e){var n=e.children;return r.createElement(a.Zo,{components:A},n)}}}]);