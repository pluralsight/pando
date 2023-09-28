import { defineConfig, type Config } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import pandoPreset, { pandoConfig } from '@pluralsight/panda-preset'

export default defineConfig({
  ...(pandoConfig as Config),

  presets: [pandaPreset, pandoPreset],

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],
})
