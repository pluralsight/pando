import { defineConfig, definePreset } from '@pandacss/dev'
import { globalCss } from './globalCss'
import { conditions } from './conditions'
import { utilities } from './utilities'
import { patterns } from './patterns'
import { tokens, textStyles } from './theme'

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

    semanticTokens: {
      colors: {
        neutral: {
          surface: {
            value: {
              _inkyBlueTheme: {
                base: '#000000',
                _lightMode: '#ffffff',
                _darkMode: '#000000',
              },
            },
          },
        },
      },
    },
  },
})

export const pandoConfig = defineConfig({
  preflight: true,
  prefix: 'pando',

  jsxFramework: 'react',
  jsxFactory: 'pando',

  outdir: 'styled-system',
})

export * from './types'
export default pandoPreset
