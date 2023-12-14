import { defineConfig } from '@pandacss/dev'
import pandoPreset, { pandoConfig } from '@pluralsight/panda-preset'

export default defineConfig({
  ...pandoConfig,

  include: ['./app/**/*.{ts,tsx,js,jsx}'],
  exclude: [],

  presets: ['@pandacss/dev/presets', pandoPreset],
})
