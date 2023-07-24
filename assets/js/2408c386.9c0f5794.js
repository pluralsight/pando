"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6065],{84140:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),r=n(92876),o=n(43838),i=n(65805),s=n(5381);function l(e){const{href:t}=e,n=(0,o.L)({ariaHidden:!0,size:"s"}),l=t.includes("github")?i.Z:s.Z;return a.createElement(r.TextLink,e,a.createElement(l,n),e.children)}},97317:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var a=n(81648),r=(n(45721),n(70167)),o=n(84140);const i={tags:["React","Suspense","Image loading","Pre-loading images"],title:"usePreloadedImage"},s=void 0,l={unversionedId:"reference/react-hooks/usePreloadedImage",id:"reference/react-hooks/usePreloadedImage",title:"usePreloadedImage",description:"A hook for pre-loading image assets in the browser.",source:"@site/docs/reference/react-hooks/usePreloadedImage.mdx",sourceDirName:"reference/react-hooks",slug:"/reference/react-hooks/usePreloadedImage",permalink:"/docs/reference/react-hooks/usePreloadedImage",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/react-hooks/usePreloadedImage.mdx",tags:[{label:"React",permalink:"/docs/tags/react"},{label:"Suspense",permalink:"/docs/tags/suspense"},{label:"Image loading",permalink:"/docs/tags/image-loading"},{label:"Pre-loading images",permalink:"/docs/tags/pre-loading-images"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["React","Suspense","Image loading","Pre-loading images"],title:"usePreloadedImage"},sidebar:"reference",previous:{title:"useMenuInteraction",permalink:"/docs/reference/react-hooks/useMenuInteraction"},next:{title:"useRovingTabIndex",permalink:"/docs/reference/react-hooks/useRovingTabIndex"}},u={},c=[{value:"Import",id:"import",level:2},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"My images are not loading correctly",id:"my-images-are-not-loading-correctly",level:3},{value:"Suspense is not working when I use it with this hook",id:"suspense-is-not-working-when-i-use-it-with-this-hook",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"A hook for pre-loading image assets in the browser."),(0,r.kt)("admonition",{title:"Concurrent Mode",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'This hook requires the use of React 18 in your project. It is also recommend that you use the "concurrent mode" feature for a better overall user experience.')),(0,r.kt)(o.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/usePreloadedImage.ts",mdxType:"ViewSourceLink"},"View source"),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { usePreloadedImage } from '@pluralsight/react-utils'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type ImgProps = ImgHTMLAttributes<HTMLImageElement>\n\nusePreloadedImg(imgOptions: ImgProps)\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"usePreloadedImage")," at the top level of the component into which you would like to pre-load an image:"),(0,r.kt)("admonition",{title:"Use with Suspense",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Wrap your Image components in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Suspense")," component to display a better UI experience for your users.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers {2,11,18,20,23}",showLineNumbers:!0,"{2,11,18,20,23}":!0},"function Image(props) {\n  const img = props.imgData.read()\n  return (\n    <div>\n      <img {...img} />\n    </div>\n  )\n}\n\nexport default function PreloadedImg() {\n  const resource = usePreloadedImg({\n    alt: 'random image',\n    src: 'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80',\n  })\n\n  return (\n    <div className=\"App-container\">\n      {resource && (\n        <Suspense fallback={<Fallback />}>\n          <Image alt=\"test image\" imgData={resource.img} />\n        </Suspense>\n      )}\n      {!resource && null}\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"This hook accepts any property that you can place onto an ",(0,r.kt)("inlineCode",{parentName:"p"},"img")," element."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An Object containing an ",(0,r.kt)("inlineCode",{parentName:"p"},"img")," property that contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," function, which returns a Promise that delivers all the ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," attributes when it has successfully fetched an image. Additionally, it contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," property that contains meta-data that might be useful in a unique scenario (you will most likely never need to use this)."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"my-images-are-not-loading-correctly"},"My images are not loading correctly"),(0,r.kt)("p",null,"If there is a problem with the initial loading of your images, please validate that the options being passed in are ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes"},"valid img element attributes"),"."),(0,r.kt)("h3",{id:"suspense-is-not-working-when-i-use-it-with-this-hook"},"Suspense is not working when I use it with this hook"),(0,r.kt)("p",null,"If you are combing the use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Suspense")," component with this hook, ensure that you have it wrapping at the correct level. The Suspense tag should be wrapped around the component that ",(0,r.kt)("em",{parentName:"p"},"contains")," the hook (its parent level)."))}d.isMDXComponent=!0}}]);