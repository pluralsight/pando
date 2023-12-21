import { defineConfig } from '@pandacss/dev'
import pandoPreset, { pandoConfig } from '@pluralsight/panda-preset'

export default defineConfig({
  ...pandoConfig,

  include: ['./src/**/*.{ts,tsx,js,jsx,astro,mdx}'],
  exclude: [],

  presets: ['@pandacss/dev/presets', pandoPreset],
  outdir: 'styled-system',
})
