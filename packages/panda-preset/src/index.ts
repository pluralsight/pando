import { defineConfig, definePreset, defineSemanticTokens } from '@pandacss/dev'
import { globalCss } from './globalCss'
import { conditions } from './conditions'
import { utilities } from './utilities'
import { patterns } from './patterns'
import { tokens, textStyles, neutralTokens, actionTokens } from './theme'

export const pandoPreset = definePreset({
  globalCss,
  conditions,
  utilities,
  patterns,

  theme: {
    extend: {
      textStyles,
      tokens,
    },

    semanticTokens: defineSemanticTokens({
      colors: {
        ...neutralTokens,
        ...actionTokens,
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

export * from './theme/semantic-tokens/index'
export * from './types'

export default pandoPreset
