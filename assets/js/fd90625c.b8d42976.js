"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6130],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(20411);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44295:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(20411),r=n(88795),o="tabItem_ccOm";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},98681:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(60953),r=n(20411),o=n(88795),l=n(13642),s=n(79514),i=n(36385),u=n(23223),p="tabList_vnoP",c="tabItem_NMaj";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,g=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,O=(0,r.useState)(y),C=O[0],S=O[1],I=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=N[g];null!=E&&E!==C&&b.some((function(e){return e.value===E}))&&S(E)}var P=function(e){var t=e.currentTarget,n=I.indexOf(t),a=b[n].value;a!==C&&(x(t),S(a),null!=g&&T(g,String(a)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=I.indexOf(e.currentTarget)+1;n=null!=(a=I[r])?a:I[0];break;case"ArrowLeft":var o,l=I.indexOf(e.currentTarget)-1;n=null!=(o=I[l])?o:I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return I.push(e)},onKeyDown:j,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},29291:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(60953),r=n(59005),o=(n(20411),n(70167)),l=n(98681),s=n(44295),i=["components"],u={sidebar_position:1,tags:["Development","Installation","Fonts","Icons","Assets","Mobile"]},p="Installation",c={unversionedId:"development/getting-started/installation",id:"development/getting-started/installation",title:"Installation",description:"This page is a work in progress.",source:"@site/docs/development/getting-started/installation.md",sourceDirName:"development/getting-started",slug:"/development/getting-started/installation",permalink:"/docs/development/getting-started/installation",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/getting-started/installation.md",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Installation",permalink:"/docs/tags/installation"},{label:"Fonts",permalink:"/docs/tags/fonts"},{label:"Icons",permalink:"/docs/tags/icons"},{label:"Assets",permalink:"/docs/tags/assets"},{label:"Mobile",permalink:"/docs/tags/mobile"}],version:"current",lastUpdatedBy:"Brad Bice",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Development","Installation","Fonts","Icons","Assets","Mobile"]},sidebar:"development",next:{title:"Usage (Web)",permalink:"/docs/development/getting-started/usage"}},d={},m=[{value:"npm",id:"npm",level:2},{value:"Responsive meta tag",id:"responsive-meta-tag",level:2},{value:"PS TT Commons font",id:"ps-tt-commons-font",level:2},{value:"Normalize.css",id:"normalizecss",level:2},{value:"Using custom fonts",id:"using-custom-fonts",level:3},{value:"Module Support",id:"module-support",level:2},{value:"Design resources",id:"design-resources",level:2}],f={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This page is a work in progress.")),(0,o.kt)("p",{className:"page-subheadline",markdown:"1"},"Use Pluralsight's UI suite designed to help you build the right library for your team."),(0,o.kt)("p",null,"Pluralsight Design is available as a set of multiple npm packages for web and our ",(0,o.kt)("inlineCode",{parentName:"p"},"design-tokens")," package is also compatable for iOS, Swift, Android, and Kotlin."),(0,o.kt)("h2",{id:"npm"},"npm"),(0,o.kt)("p",null,"For the entire kitchen sink up front, just install the ",(0,o.kt)("inlineCode",{parentName:"p"},"headless-styles")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"icons")," package."),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/headless-styles@experimental @pluralsight/icons@experimental\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/headless-styles@experimental @pluralsight/icons@experimental\n")))),(0,o.kt)("p",null,"Or if you want maximum flexibility, just install the ",(0,o.kt)("inlineCode",{parentName:"p"},"design-tokens")," package:"),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/design-tokens@alpha\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/design-tokens@alpha\n")))),(0,o.kt)("h2",{id:"responsive-meta-tag"},"Responsive meta tag"),(0,o.kt)("p",null,'Pluralsight Design is developed with a mobile-first strategy in which we first write code for mobile devices, and then scale up "components" as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your ',(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="viewport" content="initial-scale=1, width=device-width" />\n')),(0,o.kt)("h2",{id:"ps-tt-commons-font"},"PS TT Commons font"),(0,o.kt)("p",null,"Our libraries were designed with PS TT Commons (Pluralsight brand font) in mind. For the best results, install via an HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<link\n  rel="preload"\n  href="https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2"\n  as="font"\n  type="font/woff2"\n  crossorigin\n/>\n<link\n  rel="stylesheet"\n  href="https://unpkg.com/@pluralsight/design-tokens@alpha/fonts.css"\n/>\n')),(0,o.kt)("p",null,"Our fonts file declares both the brand font and a monospace font. We are only preloading the brand font since it's the most common used font across all of our products and teams. This will help boost performance and prevent FOUC."),(0,o.kt)("p",null,'Additionally, each "component" uses a ',(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide"},"variable font")," declaration to provide all weights programmatically. IE 11 does not support variable fonts, so any IE users will get the sans-serif fallback."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to add this resource ",(0,o.kt)("strong",{parentName:"p"},"before")," ",(0,o.kt)("a",{parentName:"p",href:"#normalizecss"},"normalize.css")," to prevent FOUC.")),(0,o.kt)("h2",{id:"normalizecss"},"Normalize.css"),(0,o.kt)("p",null,"All of our web packages ",(0,o.kt)("strong",{parentName:"p"},"depend on our normalize.css")," file to be used in your project. This file adds our CSS resets, the ",(0,o.kt)("inlineCode",{parentName:"p"},"design-tokens")," for CSS consumption, and our themes. To add our normalize file, simply copy and paste the ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," content below into your ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<link\n  rel="stylesheet"\n  href="https://unpkg.com/@pluralsight/design-tokens@alpha/build/normalize/normalize.css"\n/>\n')),(0,o.kt)("h3",{id:"using-custom-fonts"},"Using custom fonts"),(0,o.kt)("p",null,"Not interested in using the PS TT Commons font? Simply leave out the ",(0,o.kt)("a",{parentName:"p",href:"#ps-tt-commons-font"},"font imports")," and keep the normalize file. After that, all you have to do is just override the ",(0,o.kt)("inlineCode",{parentName:"p"},"font-family")," for each Headless style you decide to use (we have to include this property to properly cater to 3rd party UI frameworks like MUI, etc.)."),(0,o.kt)("h2",{id:"module-support"},"Module Support"),(0,o.kt)("p",null,"All of our web packages use the latest ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/packages.html#writing-dual-packages-while-avoiding-or-minimizing-hazards"},"Node Standard")," for supporting both CommonJS and ES module environments."),(0,o.kt)("h2",{id:"design-resources"},"Design resources"),(0,o.kt)("p",null,"A set of reusable components for design tools is available, designed to match the web components and to help you craft great products:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/PS-Design---Web-UI-Kit-%5BALPHA%5D?node-id=1214%3A50531"},"Figma"),": A large (private) UI kit of handcrafted Pluralsight components.")))}g.isMDXComponent=!0}}]);