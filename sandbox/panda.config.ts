import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import pandoPreset, { pandoConfig } from '@pluralsight/panda-preset'

export default defineConfig({
  ...pandoConfig,

  include: ['./src/app/**/*.{ts,tsx,js,jsx}'],
  // Files to exclude
  exclude: [],

  presets: [pandaPreset, pandoPreset],
})
