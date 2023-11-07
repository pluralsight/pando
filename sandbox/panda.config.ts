import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import pandoPreset, { pandoConfig } from '@pluralsight/panda-preset'

export default defineConfig({
  ...pandoConfig,

  include: ['./app/**/*.{ts,tsx,js,jsx}'],
  exclude: [],

  presets: [pandaPreset, pandoPreset],
})
