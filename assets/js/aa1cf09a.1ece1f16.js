"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8287],{11620:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"figma icon",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4.25 5.5A4.25 4.25 0 0 1 8.5 1.25h7A4.25 4.25 0 0 1 17.912 9a4.25 4.25 0 1 1-5.162 6.74v3.76A4.25 4.25 0 1 1 6.088 16a4.245 4.245 0 0 1-1.838-3.5c0-1.452.728-2.733 1.838-3.5A4.245 4.245 0 0 1 4.25 5.5Zm4.25 9.75h2.75v-5.5H8.5a2.75 2.75 0 1 0 0 5.5Zm2.75 1.5H8.5a2.75 2.75 0 1 0 2.75 2.75v-2.75Zm7-11.25a2.75 2.75 0 0 1-2.75 2.75h-2.75v-5.5h2.75a2.75 2.75 0 0 1 2.75 2.75ZM15.5 9.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-7-1.5h2.75v-5.5H8.5a2.75 2.75 0 0 0 0 5.5Z",clipRule:"evenodd"})})}},22153:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"github logo",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z",clipRule:"evenodd"})})}},84140:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),o=n(11697),r=n(17062),i=n(22153),s=n(11620);function l(e){const{href:t}=e,n=(0,r.L)({ariaHidden:!0,size:"s"}),l=t.includes("github")?i.Z:s.Z;return a.createElement(o.h,e,a.createElement(l,n),e.children)}},84084:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var a=n(81648),o=(n(45721),n(70167)),r=n(84140);const i={tags:["React","Suspense","Image loading","Pre-loading images"],title:"usePreloadedImage"},s=void 0,l={unversionedId:"reference/react-hooks/usePreloadedImage",id:"version-0.4.1/reference/react-hooks/usePreloadedImage",title:"usePreloadedImage",description:"A hook for pre-loading image assets in the browser.",source:"@site/versioned_docs/version-0.4.1/reference/react-hooks/usePreloadedImage.mdx",sourceDirName:"reference/react-hooks",slug:"/reference/react-hooks/usePreloadedImage",permalink:"/docs/reference/react-hooks/usePreloadedImage",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/react-hooks/usePreloadedImage.mdx",tags:[{label:"React",permalink:"/docs/tags/react"},{label:"Suspense",permalink:"/docs/tags/suspense"},{label:"Image loading",permalink:"/docs/tags/image-loading"},{label:"Pre-loading images",permalink:"/docs/tags/pre-loading-images"}],version:"0.4.1",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["React","Suspense","Image loading","Pre-loading images"],title:"usePreloadedImage"},sidebar:"reference",previous:{title:"useMenuInteraction",permalink:"/docs/reference/react-hooks/useMenuInteraction"},next:{title:"useRovingTabIndex",permalink:"/docs/reference/react-hooks/useRovingTabIndex"}},u={},c=[{value:"Import",id:"import",level:2},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"My images are not loading correctly",id:"my-images-are-not-loading-correctly",level:3},{value:"Suspense is not working when I use it with this hook",id:"suspense-is-not-working-when-i-use-it-with-this-hook",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"size-xxl"},"A hook for pre-loading image assets in the browser."),(0,o.kt)("admonition",{title:"Concurrent Mode",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'This hook requires the use of React 18 in your project. It is also recommend that you use the "concurrent mode" feature for a better overall user experience.')),(0,o.kt)(r.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/usePreloadedImage.ts",mdxType:"ViewSourceLink"},"View source"),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { usePreloadedImage } from '@pluralsight/react-utils'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type ImgProps = ImgHTMLAttributes<HTMLImageElement>\n\nusePreloadedImg(imgOptions: ImgProps)\n")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"Call ",(0,o.kt)("inlineCode",{parentName:"p"},"usePreloadedImage")," at the top level of the component into which you would like to pre-load an image:"),(0,o.kt)("admonition",{title:"Use with Suspense",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Wrap your Image components in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Suspense")," component to display a better UI experience for your users.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers {2,11,18,20,23}",showLineNumbers:!0,"{2,11,18,20,23}":!0},"function Image(props) {\n  const img = props.imgData.read()\n  return (\n    <div>\n      <img {...img} />\n    </div>\n  )\n}\n\nexport default function PreloadedImg() {\n  const resource = usePreloadedImg({\n    alt: 'random image',\n    src: 'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80',\n  })\n\n  return (\n    <div className=\"App-container\">\n      {resource && (\n        <Suspense fallback={<Fallback />}>\n          <Image alt=\"test image\" imgData={resource.img} />\n        </Suspense>\n      )}\n      {!resource && null}\n    </div>\n  )\n}\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This hook accepts any property that you can place onto an ",(0,o.kt)("inlineCode",{parentName:"p"},"img")," element."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,"An Object containing an ",(0,o.kt)("inlineCode",{parentName:"p"},"img")," property that contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," function, which returns a Promise that delivers all the ",(0,o.kt)("inlineCode",{parentName:"p"},"image")," attributes when it has successfully fetched an image. Additionally, it contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," property that contains meta-data that might be useful in a unique scenario (you will most likely never need to use this)."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"my-images-are-not-loading-correctly"},"My images are not loading correctly"),(0,o.kt)("p",null,"If there is a problem with the initial loading of your images, please validate that the options being passed in are ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes"},"valid img element attributes"),"."),(0,o.kt)("h3",{id:"suspense-is-not-working-when-i-use-it-with-this-hook"},"Suspense is not working when I use it with this hook"),(0,o.kt)("p",null,"If you are combing the use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Suspense")," component with this hook, ensure that you have it wrapping at the correct level. The Suspense tag should be wrapped around the component that ",(0,o.kt)("em",{parentName:"p"},"contains")," the hook (its parent level)."))}p.isMDXComponent=!0}}]);