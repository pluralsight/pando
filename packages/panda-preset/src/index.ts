import { defineConfig, definePreset } from '@pandacss/dev'

// import { conditions } from './conditions'
// import { utilities } from './utilities'
// import { patterns } from './patterns'

export const preset = definePreset({
  // globalCss,
  // conditions,
  // utilities,
  // patterns,
  // theme
})

export const config = defineConfig({
  preflight: true,
  prefix: 'pando',

  jsxFramework: 'react',
  jsxFactory: 'pando',
})

export default preset
