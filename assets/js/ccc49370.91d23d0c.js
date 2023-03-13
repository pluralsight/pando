"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6103],{37659:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(45721),o=n(88795),l=n(71336),r=n(85988),i=n(48997),c=n(75941),s=n(29069),m=n(81648),u=n(61995),d=n(26024);function f(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function g(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:o,date:r,tags:c,authors:s,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(l.d,{title:n,description:o,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:r}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var v=n(66877);function h(e){let{sidebar:t,children:n}=e;const{metadata:o,toc:l}=(0,i.C)(),{nextItem:r,prevItem:m,frontMatter:u}=o,{hide_table_of_contents:d,toc_min_heading_level:g,toc_max_heading_level:h}=u;return a.createElement(c.Z,{sidebar:t,toc:!d&&l.length>0?a.createElement(v.Z,{toc:l,minHeadingLevel:g,maxHeadingLevel:h}):void 0},a.createElement(s.Z,null,n),(r||m)&&a.createElement(f,{nextItem:r,prevItem:m}))}function p(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,o.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage)},a.createElement(g,null),a.createElement(h,{sidebar:e.sidebar},a.createElement(t,null))))}},66877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(81648),o=n(45721),l=n(88795),r=n(89061),i="tableOfContents_ReGb";function c(e){let{className:t,...n}=e;return o.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar",t)},o.createElement(r.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},89061:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(81648),o=n(45721),l=n(66264);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,o.useRef)(void 0),n=m();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:r}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:r}),c=s(i,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?o.createElement("ul",{className:l?void 0:n},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}var f=o.memo(d);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:d,...g}=e;const v=(0,l.L)(),h=m??v.tableOfContents.minHeadingLevel,p=d??v.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>i({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:p});return u((0,o.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:h,maxHeadingLevel:p}}),[c,s,h,p])),o.createElement(f,(0,a.Z)({toc:b,className:n,linkClassName:c},g))}},12045:function(e,t,n){var a=n(45721),o=n(6065),l=n(94671),r=n(31307),i=n(89406),c=n(93875),s=n(57862),m=n(52485),u=n(16602),d=n(74309),f=n(13345),g=n(2956),v=n(94),h=n(72156),p=n(56634),b=n(59977),E=n(14158),I=n(63352),L=n(58574),Z=n(25243),C=n(51016),H=n(11540),x=n(77085),k=n(61586),N=n(85678),_=n(1263),y=n(7315),w=n(61700);const A={React:a,...a,...o,CalendarIcon:l.Z,CaretLeftIcon:r.Z,CaretRightIcon:i.Z,CheckIcon:c.Z,ChevronDownIcon:s.Z,ChevronRightIcon:m.Z,CloseIcon:u.Z,DangerDiamondIcon:d.Z,ExternalLinkIcon:f.Z,EyeIcon:g.Z,EyeOffIcon:v.Z,HelpCircleIcon:h.Z,IndeterminateIcon:p.Z,InfoCircleIcon:b.Z,MenuIcon:E.Z,PersonIcon:I.Z,PlaceholderIcon:L.Z,SearchIcon:Z.Z,StarIcon:C.Z,StarFilledIcon:H.Z,WarningTriangleFilledIcon:x.Z,useAutoFormatDate:k.y,useEscToClose:N.A,useMenuInteraction:_.P,useRovingTabIndex:y.X,useSubmenuInteraction:w.i};t.Z=A}}]);