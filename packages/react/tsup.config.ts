import { defineConfig } from 'tsup'
import { modernConfig, legacyConfig } from '@pando/configs'

const TEMP_ENTRY = [
  'src/**/*.ts',
  'src/components/Button.tsx',
  'src/components/Input.tsx',
  'src/components/Label.tsx',
  'src/components/For.tsx',
  'src/components/Portal.tsx',
  'src/components/Show.tsx',
  'src/context/FormControl.tsx',
]

export default defineConfig([
  modernConfig({
    entry: TEMP_ENTRY,
    external: ['@/styled-system'],
  }),
  legacyConfig({ entry: TEMP_ENTRY, external: ['@/styled-system'] }),
])
