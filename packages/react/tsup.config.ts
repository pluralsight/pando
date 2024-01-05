import { defineConfig } from 'tsup'
import { modernConfig, legacyConfig } from '@pando/configs'

const TEMP_ENTRY = [
  'src/index.ts',

  'src/helpers/button.helpers.ts',
  'src/helpers/input.helpers.ts',
  'src/helpers/label.helpers.ts',

  'src/hooks/useTheme.ts',
  'src/hooks/helpers/themeHelpers.ts',

  'src/utils/helpers.ts',
  'src/utils/const.ts',

  'src/components/Button.tsx',
  'src/components/Input.tsx',
  'src/components/Label.tsx',
  'src/components/For.tsx',
  'src/components/Portal.tsx',
  'src/components/Show.tsx',
  'src/components/shared/types.ts',

  'src/context/FormControl.tsx',
]

export default defineConfig([
  modernConfig({
    entry: TEMP_ENTRY,
    external: ['@/styled-system'],
  }),
  legacyConfig({ entry: TEMP_ENTRY, external: ['@/styled-system'] }),
])
