"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3232],{38570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(70079);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(3262),r=(n(70079),n(38570));const i={tags:["Dates","DatePicker","Field"],title:"Entering Dates"},o=void 0,s={unversionedId:"learn/learn-pando/design-patterns/entering-dates",id:"learn/learn-pando/design-patterns/entering-dates",title:"Entering Dates",description:"In order to provide an accessible user experience, you should design and develop date picking experiences to use an Input rather than a Date Picker.",source:"@site/docs/learn/learn-pando/design-patterns/entering-dates.mdx",sourceDirName:"learn/learn-pando/design-patterns",slug:"/learn/learn-pando/design-patterns/entering-dates",permalink:"/docs/learn/learn-pando/design-patterns/entering-dates",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/learn/learn-pando/design-patterns/entering-dates.mdx",tags:[{label:"Dates",permalink:"/docs/tags/dates"},{label:"DatePicker",permalink:"/docs/tags/date-picker"},{label:"Field",permalink:"/docs/tags/field"}],version:"current",lastUpdatedBy:"Kathy Lavoie",frontMatter:{tags:["Dates","DatePicker","Field"],title:"Entering Dates"},sidebar:"learn",previous:{title:"Design Patterns",permalink:"/docs/learn/learn-pando/design-patterns/"},next:{title:"Page Loading",permalink:"/docs/learn/learn-pando/design-patterns/page-loading"}},l={},p=[{value:"Calendar Picker vs. Input",id:"calendar-picker-vs-input",level:2},{value:"Date Pickers",id:"date-pickers",level:3},{value:"Text Input",id:"text-input",level:3},{value:"Text Input for Date Entry",id:"text-input-for-date-entry",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to provide an accessible user experience, you should design and develop date picking experiences to use an Input rather than a Date Picker."),(0,r.kt)("h2",{id:"calendar-picker-vs-input"},"Calendar Picker vs. Input"),(0,r.kt)("h3",{id:"date-pickers"},"Date Pickers"),(0,r.kt)("p",null,"Date Pickers are most useful for scheduling applications, where the user is selecting an unknown date with the aid of calendar context. They primarily benefit sighted users using a pointing device or touchscreen and most importantly ",(0,r.kt)("strong",{parentName:"p"},"are not fully accessible"),"."),(0,r.kt)("p",null,"Despite what many articles claim, Date Pickers cannot be made accessible either. To learn more about why you should avoid using a Date Picker we highly recommend you read the article:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://adrianroselli.com/2019/07/maybe-you-dont-need-a-date-picker.html"},"Maybe You Don't Need a Date Picker"),"."),(0,r.kt)("h3",{id:"text-input"},"Text Input"),(0,r.kt)("p",null,"The text-based Input is accessible by default and is easier use in most cases where the user needs to enter a ",(0,r.kt)("em",{parentName:"p"},"known")," date which applies to most applications and what we recommend using in Pando."),(0,r.kt)("admonition",{title:"date Inputs are not accessible",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Please note we are specifically using the ",(0,r.kt)("inlineCode",{parentName:"p"},'type="text"')," input element and ",(0,r.kt)("strong",{parentName:"p"},"not")," the ",(0,r.kt)("inlineCode",{parentName:"p"},'type="date"'),". This is because the date version of an input is (shockingly) ",(0,r.kt)("strong",{parentName:"p"},"not accessible"),".")),(0,r.kt)("h2",{id:"text-input-for-date-entry"},"Text Input for Date Entry"),(0,r.kt)("p",null,"In Pando, we recommend using the text-based Input combined with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/react-hooks/useAutoFormatDate"},"useAutoFormatDate")," hook for displaying a way to enter a date."),(0,r.kt)("p",null,"In this example, we are creating a DateInput component that can be used anywhere in your application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live showLineNumbers",live:!0,showLineNumbers:!0},'function DateInput() {\n  const formatOptions = useAutoFormatDate()\n\n  return (\n    <FormControlProvider>\n      <Label htmlFor="date">Birthdate</Label>\n      <Input\n        describedBy="date:help"\n        startIcon={CalendarIcon}\n        {...formatOptions}\n      />\n      <FieldMessage id="date:help">\n        Enter a date in the format of {formatOptions.placeholder}.\n      </FieldMessage>\n    </FormControlProvider>\n  )\n}\n')))}u.isMDXComponent=!0}}]);