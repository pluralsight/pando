import { defineConfig } from 'tsup'
import { modernConfig, legacyConfig } from '@pando/configs'

export default defineConfig([
  modernConfig({ entry: ['generated/react/*.ts', 'generated/react/*.tsx'] }),
  legacyConfig({ entry: ['generated/react/*.ts', 'generated/react/*.tsx'] }),
])
