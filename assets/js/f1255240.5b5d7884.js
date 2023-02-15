"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45817],{70167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70080:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var r=n(81648),o=(n(45721),n(70167));const a={tags:["chip","label"],title:"Badge"},i=void 0,s={unversionedId:"design/components/badge",id:"version-0.4.0-rc/design/components/badge",title:"Badge",description:"Description",source:"@site/versioned_docs/version-0.4.0-rc/design/components/badge.md",sourceDirName:"design/components",slug:"/design/components/badge",permalink:"/docs/design/components/badge",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.0-rc/design/components/badge.md",tags:[{label:"chip",permalink:"/docs/tags/chip"},{label:"label",permalink:"/docs/tags/label"}],version:"0.4.0-rc",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["chip","label"],title:"Badge"},sidebar:"design",previous:{title:"Avatar",permalink:"/docs/design/components/avatar"},next:{title:"Button",permalink:"/docs/design/components/button"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Types",id:"types",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Dos and don\u2019ts",id:"dos-and-donts",level:3},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Content considerations",id:"content-considerations",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"A compact representation of metadata."),(0,o.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Container",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Icon-placeholder"),(0,o.kt)("li",{parentName:"ul"},"Label")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Badges are non-interactive, and only serve to help categorize or help represent a section of content in a particular way."),(0,o.kt)("li",{parentName:"ul"},"Badges can communicate a category/taxonomy/type, or status (e.g. BETA)"),(0,o.kt)("li",{parentName:"ul"},"Icons can be present if they clearly represent the badge content (e.g. a product or brand logo, or a beaker to help represent Labs)"),(0,o.kt)("li",{parentName:"ul"},"Badges should be placed in the top left region of their container. Exceptions to this include use within a table row, within a Status or Category-type column."),(0,o.kt)("li",{parentName:"ul"},"Badges have recommended usage according to type."),(0,o.kt)("li",{parentName:"ul"},"Badges should be placed near (often directly below) the title of the item they are representing.")),(0,o.kt)("h3",{id:"types"},"Types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Subdued (default):")," The subdued type of Badge should be the default use, and should represent the theme\u2019s default color. Use this type when listing a category or similar classification. This type should also be used when presented on an image or pattern background."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Solid:"),' Use a solid style to represent status, e.g. Beta, Under construction, etc. Can also be used to represent the most prominent category in a group, such as a "featured" or "recommended" choice.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Outline:")," Outline type of Badges should be used as a low priority category indicator when presented on a page background, or when surrounded with other higher priority options.")),(0,o.kt)("h3",{id:"sizes"},"Sizes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L (default):")," Use in most cases where the experience can support the size, where important and contextual content is not obscured by the Badge. Examples include on larger cards or areas, or directly on a surface as part of metadata for a page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"S:")," For smaller and tighter experiences, such as in small cards or table cells, use the small size.")),(0,o.kt)("h3",{id:"dos-and-donts"},"Dos and don\u2019ts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do not use Badges to link to new pages or experiences. Instead use text links, Buttons, or Tags."),(0,o.kt)("li",{parentName:"ul"},"Do place Badges consistently near the top leading edge of their container.")),(0,o.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,o.kt)("h3",{id:"microcopy"},"Microcopy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set badge type in ALL CAPS.")),(0,o.kt)("h3",{id:"content-considerations"},"Content considerations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Badge text should be one word in most cases, if possible. If multiple words are needed, ensure that the shortest possible combination is used."),(0,o.kt)("li",{parentName:"ul"},"Use acronyms if possible and if they will be understood in context by users."),(0,o.kt)("li",{parentName:"ul"},'It is recommended to use a shortened version of the represented word, e.g. "Admin" for Administrator, or \'Mod" for Moderator. Use this over single letters such as "A" and "M", respectively.')))}d.isMDXComponent=!0}}]);