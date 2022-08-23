"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[739],{70167:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(20411);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94837:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(60953),o=n(59005),a=(n(20411),n(70167)),i=["components"],s={sidebar_position:2,tags:["Development","Usage","Getting Started","Web","React Native"]},l="Usage (Web)",p={unversionedId:"development/getting-started/usage",id:"development/getting-started/usage",title:"Usage (Web)",description:"This page is a work in progress.",source:"@site/docs/development/getting-started/usage.md",sourceDirName:"development/getting-started",slug:"/development/getting-started/usage",permalink:"/docs/development/getting-started/usage",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/getting-started/usage.md",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Usage",permalink:"/docs/tags/usage"},{label:"Getting Started",permalink:"/docs/tags/getting-started"},{label:"Web",permalink:"/docs/tags/web"},{label:"React Native",permalink:"/docs/tags/react-native"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Development","Usage","Getting Started","Web","React Native"]},sidebar:"development",previous:{title:"Installation",permalink:"/docs/development/getting-started/installation"},next:{title:"Usage (Mobile)",permalink:"/docs/development/getting-started/usage_mobile"}},c={},u=[{value:"Headless design",id:"headless-design",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Typescript",id:"typescript",level:2},{value:"Versioned Documentation",id:"versioned-documentation",level:2}],d={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usage-web"},"Usage (Web)"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This page is a work in progress.")),(0,a.kt)("p",null,'Pluralsight Design packages and "components" work in isolation. ',(0,a.kt)("strong",{parentName:"p"},"They are self-supporting"),", and will only inject the styles they need to display."),(0,a.kt)("p",null,'You can use any of the packages as demonstrated in the documentation. Please refer to each "component\'s" ',(0,a.kt)("a",{parentName:"p",href:"../headless-styles/button"},"page")," to see how they should be imported and used."),(0,a.kt)("h2",{id:"headless-design"},"Headless design"),(0,a.kt)("p",null,"TVA is designed as a headless vanilla Javascript library so you can use it within any stack that your team has chosen - it is ",(0,a.kt)("em",{parentName:"p"},"not")," framework specific. Whether you use React with MUI, Svelte, or React Native - TVA will work for you. \ud83d\udcaa"),(0,a.kt)("p",null,"We strive to provide codesandbox examples for the common popular stacks (mentioned). However, if there is an example you need for a combination that we do not provide, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/discussions/categories/q-a"},"let us know")," by starting a Q&A discussion."),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"Here's a quick example using React to get you started, ",(0,a.kt)("strong",{parentName:"p"},"it's literally all you need"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/Button.jsx"',title:'"components/Button.jsx"'},"import { getButtonProps } from '@pluralsight/tva-headless-styles\n\nconst tvaBtnProps = getButtonProps()\n\nfunction Button(props) {\n  const { children, ...btnProps } = props\n\n  return (\n    <button {...btnProps} {...tvaBtnProps}>\n      {children}\n    </button>\n  )\n}\n\nexport default Button\n\n")),(0,a.kt)("p",null,"The above code shows that all you need is to import a helper function and that's it! TVA provides all the properties you need to cover styles and accessibility so you can own the rest for maximum flexibility."),(0,a.kt)("p",null,"This means you can use ",(0,a.kt)("strong",{parentName:"p"},"any framework")," or library of your choice (React, Svelte, Vue, MUI, Styled-Components, .etc)."),(0,a.kt)("h2",{id:"typescript"},"Typescript"),(0,a.kt)("p",null,"Pluralsight Design is built using Typescript so we will include type definitions in all of our packages that we provide."),(0,a.kt)("h2",{id:"versioned-documentation"},"Versioned Documentation"),(0,a.kt)("p",null,"This documentation always reflects the latest version of Pluralsight Design. You can find older or newer versions of the documentation in the dropdown located at the top right corner of the page next to the search bar and theme toggle."),(0,a.kt)("p",null,"Additionally, we release our ",(0,a.kt)("strong",{parentName:"p"},"next")," version documentation which uses the emoji - \ud83d\udea7."))}g.isMDXComponent=!0}}]);