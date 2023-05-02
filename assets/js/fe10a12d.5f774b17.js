"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3744],{72032:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(81648),l=a(45721),r=a(71397),o=a(61471),s="grid_cC7H";function i(e){return l.createElement("li",(0,r.a)({colSpan:2}),l.createElement(o.Z,e,e.children))}function c(e){const{figma:t,github:a}=e,{className:o,...c}=(0,r.g)({cols:12,gap:8});return l.createElement("ul",(0,n.Z)({className:`${o} ${s}`},c),a&&l.createElement(i,{href:a},"View on Github"),t&&l.createElement(i,{href:t},"Figma Design"))}},27505:function(e,t,a){a(45721)},61471:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(45721),l=a(64965),r=a(4094),o=a(31026),s=a(6115);function i(e){const{href:t}=e,a=(0,l.g)({href:t}),i=(0,r.g)(a.iconOptions),c=t.includes("github")?o.Z:s.Z;return n.createElement("a",a.link,n.createElement(c,i),e.children)}},26859:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d}});var n=a(81648),l=(a(45721),a(70167)),r=a(72032);a(27505);const o={tags:["data","cell","row"],title:"Table"},s=void 0,i={unversionedId:"reference/components/table",id:"version-0.4.1/reference/components/table",title:"Table",description:"Used to organize and display large sets of tabular data.",source:"@site/versioned_docs/version-0.4.1/reference/components/table.mdx",sourceDirName:"reference/components",slug:"/reference/components/table",permalink:"/docs/reference/components/table",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/table.mdx",tags:[{label:"data",permalink:"/docs/tags/data"},{label:"cell",permalink:"/docs/tags/cell"},{label:"row",permalink:"/docs/tags/row"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["data","cell","row"],title:"Table"},sidebar:"reference",previous:{title:"Switch",permalink:"/docs/reference/components/switch"},next:{title:"Tabs",permalink:"/docs/reference/components/tabs"}},c={},d=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Table",id:"basic-table",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"size-xxl"},"Used to organize and display large sets of tabular data."),(0,l.kt)(r.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Table",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getTableProps } from '@pluralsight/headless-styles'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"getTableProps(options?: TableOptions)\n")),(0,l.kt)("h2",{id:"anatomy"},"Anatomy"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Table"),(0,l.kt)("li",{parentName:"ol"},"Caption"),(0,l.kt)("li",{parentName:"ol"},"Row"),(0,l.kt)("li",{parentName:"ol"},"Head Cell"),(0,l.kt)("li",{parentName:"ol"},"Body Cell")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"basic-table"},"Basic Table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicTable() {\n  const tableProps = getTableProps()\n\n  return (\n    <table {...tableProps.table}>\n      <caption {...tableProps.caption}>\n        All Tables should include a caption for accessibility.\n      </caption>\n      <thead>\n        <tr {...tableProps.row}>\n          <th {...tableProps.headCell}>One</th>\n          <th {...tableProps.headCell}>Two</th>\n          <th {...tableProps.headCell}>Three</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr {...tableProps.row}>\n          <td {...tableProps.bodyCell}>Pando</td>\n          <td {...tableProps.bodyCell}>R00lz</td>\n          <td {...tableProps.bodyCell}>d00d</td>\n        </tr>\n        <tr {...tableProps.row}>\n          <td {...tableProps.bodyCell}>Pando</td>\n          <td {...tableProps.bodyCell}>R00lz</td>\n          <td {...tableProps.bodyCell}>d00d</td>\n        </tr>\n        <tr {...tableProps.row}>\n          <td {...tableProps.bodyCell}>Pando</td>\n          <td {...tableProps.bodyCell}>R00lz</td>\n          <td {...tableProps.bodyCell}>d00d</td>\n        </tr>\n      </tbody>\n    </table>\n  )\n}\n")),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"getTableProps(options?: TableOptions)\n")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"The Table does not accept any parameters."),(0,l.kt)("h3",{id:"returns"},"Returns"),(0,l.kt)("p",null,"An Object matching the ",(0,l.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,l.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,l.kt)("h2",{id:"behavior"},"Behavior"),(0,l.kt)("admonition",{title:"Adding custom behavior to the Table",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can combine the Pando Table with ",(0,l.kt)("a",{parentName:"p",href:"https://react-table-v7.tanstack.com/"},"React Table")," to create dynamic, full-featured Tables that are styled.")),(0,l.kt)("h3",{id:"usage-1"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Do")," use Captions for all Tables to complete their a11y standards."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Don't")," use a Table without a Caption."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Do")," use the Table to display complex data consisting of multiple columns and rows."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Don't")," use a Table to display simple information. Instead, use a List."),(0,l.kt)("h2",{id:"accessbility"},"Accessbility"),(0,l.kt)("p",null,"The Pando Table API combined with semantic HTML allow the Table to be fully accessible and screen-readable."))}u.isMDXComponent=!0},71397:function(e,t,a){a.d(t,{a:function(){return d},g:function(){return c}});var n=a(1801),l=a(23909),r=a(31519);const o="gridCSS-module_gridContainer__sQmao",s="gridCSS-module_gridItem__nVMyV";(0,r.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const i="pando-grid";function c(e){const t=(0,l.g)(e);return{...(0,l.c)(t),...(0,n.c)(i,o,...t.classNames)}}function d(e){const t=(0,l.a)(e);return{...(0,l.b)(t),...(0,n.c)(`${i}-item`,s,...t.classNames)}}},23909:function(e,t,a){a.d(t,{a:function(){return r},b:function(){return s},c:function(){return o},g:function(){return l}});const n={6:.375,8:.5,12:.75,16:1,32:2};function l(e){return{classNames:(null==e?void 0:e.classNames)??[],cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function r(e){return{classNames:(null==e?void 0:e.classNames)??[],colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function o(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${n[e.gap]}rem`}}}function s(e){const{colSpan:t,rowSpan:a}=e;return a?{style:{gridArea:`span ${a} / span ${t} / span ${a} / span ${t}`}}:{style:{gridColumn:`span ${t} / span ${t}`}}}}}]);