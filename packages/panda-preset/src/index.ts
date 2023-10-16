import { defineConfig, definePreset, defineSemanticTokens } from '@pandacss/dev'
import { globalCss } from './globalCss'
import { conditions } from './conditions'
import { utilities } from './utilities'
import { patterns } from './patterns'
import {
  keyframes,
  tokens,
  textStyles,
  neutralTokens,
  actionTokens,
  infoTokens,
  successTokens,
  warningTokens,
  dangerTokens,
} from './theme'

export const pandoPreset = definePreset({
  globalCss,
  conditions,
  utilities,
  patterns,

  theme: {
    extend: {
      keyframes,
      textStyles,
      tokens,
    },

    semanticTokens: defineSemanticTokens({
      colors: {
        ...neutralTokens,
        ...actionTokens,
        ...infoTokens,
        ...successTokens,
        ...warningTokens,
        ...dangerTokens,
      },
    }),
  },
})

export const pandoConfig = defineConfig({
  preflight: true,
  prefix: 'pando',

  jsxFramework: 'react',
  jsxFactory: 'pando',

  outdir: 'styled-system',
})

export * from './theme'
export * from './patterns.ts'
export * from './utilities.ts'
export * from './types.ts'

export default pandoPreset
