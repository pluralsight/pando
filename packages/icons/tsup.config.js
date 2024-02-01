import { defineConfig } from 'tsup'
import { modernConfig, legacyConfig } from '@pando/configs'

export default defineConfig([
  modernConfig({
    entry: ['generated/jsx-react/*.ts', 'generated/jsx-react/*.tsx'],
  }),
  legacyConfig({
    entry: ['generated/jsx-react/*.ts', 'generated/jsx-react/*.tsx'],
  }),
])
