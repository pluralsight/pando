"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15468],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(45721);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85803:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var o=n(81648),i=(n(45721),n(70167));const a={tags:["Design","Forms","dropdown","choose"],title:"Select"},r=void 0,l={unversionedId:"design/components/select",id:"version-0.1.0-alpha/design/components/select",title:"Select",description:"Description",source:"@site/versioned_docs/version-0.1.0-alpha/design/components/select.md",sourceDirName:"design/components",slug:"/design/components/select",permalink:"/docs/0.1.0-alpha/design/components/select",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.1.0-alpha/design/components/select.md",tags:[{label:"Design",permalink:"/docs/0.1.0-alpha/tags/design"},{label:"Forms",permalink:"/docs/0.1.0-alpha/tags/forms"},{label:"dropdown",permalink:"/docs/0.1.0-alpha/tags/dropdown"},{label:"choose",permalink:"/docs/0.1.0-alpha/tags/choose"}],version:"0.1.0-alpha",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Design","Forms","dropdown","choose"],title:"Select"},sidebar:"design",previous:{title:"Radio",permalink:"/docs/0.1.0-alpha/design/components/radio"},next:{title:"Switch",permalink:"/docs/0.1.0-alpha/design/components/switch"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Option groups",id:"option-groups",level:3},{value:"Dos and don&#39;ts",id:"dos-and-donts",level:3},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Figma usage",id:"figma-usage",level:2},{value:"Feedback on this component",id:"feedback-on-this-component",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Used to allow a user to select a value from a list of options."),(0,i.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,i.kt)("p",null,"Note: Select will be used as part of a Form Control, in place of either an Input or Textarea component as needed."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Container"),(0,i.kt)("li",{parentName:"ol"},"Value"),(0,i.kt)("li",{parentName:"ol"},"Icon")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Select uses the native OS controls to display and style the options menu that appears when interacting with the control."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use a Select when the list of options exceeds 5 items. If the list of options is 5 or less, consider using a Radio group instead."),(0,i.kt)("li",{parentName:"ul"},"The label of this associated Form Control can be visually hidden when a Select is used within a table row, widget, or other condensed area. If this approach is taken, properly descriptive option values should be used, along with helper text potentially, to explain to the user exactly how to use the control."),(0,i.kt)("li",{parentName:"ul"},"Multi-select is not supported at this time. Only one option will be shown at a time in the Select control itself."),(0,i.kt)("li",{parentName:"ul"},"Options in a list can be individually disabled if it is possible to add or enable options. Otherwise, omit anything that will never be enabled.")),(0,i.kt)("h3",{id:"option-groups"},"Option groups"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Option groups provide named categories for options in the list."),(0,i.kt)("li",{parentName:"ul"},"Natively styled, this generally results in the option group name being bolded, and the group's items being indented slightly."),(0,i.kt)("li",{parentName:"ul"},"Option groups are a purely organizational treatment, and do not affect the option values."),(0,i.kt)("li",{parentName:"ul"},"Groups can also be disabled. Similar to individual options, this feature should only be used if the groups can be enabled, otherwise they should be fully omitted.")),(0,i.kt)("h3",{id:"dos-and-donts"},"Dos and don'ts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not use a Select as a navigation control to send the user to another location. Instead, consider using a Menu.")),(0,i.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,i.kt)("h3",{id:"microcopy"},"Microcopy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use sentence case for all option titles, unless representing a proper noun."),(0,i.kt)("li",{parentName:"ul"},'Instruct the user on what to do by defaulting to "Choose a ',"[content]",'", with ',"[content]"," representing the list of options."),(0,i.kt)("li",{parentName:"ul"},"Keep options to a single line of text."),(0,i.kt)("li",{parentName:"ul"},"Avoid punctuation and articles (\u201cthe\u201d, \u201can\u201d, \u201ca\u201d).")),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Always display an initial choice, which should have a null value, that helps instruct the user to interact with and choose an option."),(0,i.kt)("li",{parentName:"ul"},"Order select options in a way that makes the most sense contextually. This may be numerically or by listing the most popular items first. Avoid alphabetical order, which can be broken via localization. Use increasing order if it makes sense to the content."),(0,i.kt)("li",{parentName:"ul"},"Utilize helper text (along with the Form Control title) via the Form control if further clarification or context is needed.")),(0,i.kt)("h2",{id:"figma-usage"},"Figma usage"),(0,i.kt)("h2",{id:"feedback-on-this-component"},"Feedback on this component"))}u.isMDXComponent=!0}}]);