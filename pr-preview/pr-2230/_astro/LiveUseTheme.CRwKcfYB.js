import{j as e}from"./jsx-runtime.B58qJJSS.js";import{L as a}from"./LiveCodeEditor.BYSmuipB.js";import{c as i}from"./css.DfFBB4Zv.js";import{u as n}from"./useTheme.CzuPv2cn.js";import{Show as r}from"./react.BQ8MBOgy.js";import{B as s}from"./Button.CnSeJ44k.js";import"./index.S5sIXfgp.js";import"./create-recipe.BTuYwKfo.js";const d=`  
  // import { useTheme } from '@pluralsight/react' <- placeholder for example purposes
  // const { mode, updateMode } = useTheme() <- placeholder for example purposes

  function handleUpdateMode() {
    updateMode(mode === 'dark' ? 'light' : 'dark')
  }

  render(
    <Button
      aria-label={
        mode === 'dark' ? 'switch to light mode' : 'switch to dark mode'
      }
      palette='neutral'
      onClick={handleUpdateMode}
    >
      <Show when={mode == 'dark'} fallback={<>light mode is active</>}>dark mode is active</Show>
    </Button>
  )
`,p=`  
  // import { useTheme } from '@pluralsight/react' <- placeholder for example purposes
  // const { theme, updateTheme } = useTheme() <- placeholder for example purposes

  function handleUpdateTheme() {
    updateTheme(theme === 'inkyBlue' ? 'aDifferentTheme' : 'inkyBlue')
  }

  render(
    <Button
      aria-label={
        mode === 'inkyBlue' ? 'switch off the inkyBlue theme' : 'switch on the inkyBlue theme'
      }
      onClick={handleUpdateTheme}
      palette='neutral'
      className={theme !== 'inkyBlue' && 'use-theme-example-button'}
      >
      <Show when={theme==='inkyBlue'} fallback={<>turn on inkyBlue theme</>}>turn off inkyBlue theme</Show>
    </Button>
  )
`;function T(){const{mode:l,updateMode:m,theme:t,updateTheme:h}=n(),o={Button:s,Show:r,useTheme:n,mode:l,updateMode:m,theme:t,updateTheme:h};return e.jsxs(e.Fragment,{children:[e.jsx(a,{componentString:d,scope:o,noInline:!0}),e.jsx(r,{when:t!=="inkyBlue",children:e.jsxs("p",{className:i({color:"#fff"}),children:[e.jsx("span",{children:"Pando theme colors will not display properly without the inkyBlue theme."}),"  ","You can inspect the html tag in your browser dev tools to see the applied theme as ",e.jsxs("code",{children:['data-theme="',t,'"']})]})}),e.jsx(a,{componentString:p,scope:o,noInline:!0})]})}export{T as default};
