import { defineConfig } from 'tsup'
import { modernConfig, legacyConfig } from '@pando/configs'

const TEMP_ENTRY = [
  'src/index.ts',

  'src/helpers/avatar.helpers.ts',
  'src/helpers/badge.helpers.ts',
  'src/helpers/button.helpers.ts',
  'src/helpers/circularProgress.helpers.ts',
  'src/helpers/input.helpers.ts',
  'src/helpers/label.helpers.ts',
  'src/helpers/textLink.helpers.ts',

  'src/hooks/useTheme.ts',
  'src/hooks/helpers/themeHelpers.ts',

  'src/utils/helpers.ts',
  'src/utils/const.ts',

  'src/components/Admonition.tsx',
  'src/components/Avatar.tsx',
  'src/components/Badge.tsx',
  'src/components/Button.tsx',
  'src/components/Checkbox.tsx',
  'src/components/FieldMessage.tsx',
  'src/components/IconButton.tsx',
  'src/components/Input.tsx',
  'src/components/Label.tsx',
  'src/components/For.tsx',
  'src/components/ProgressBar.tsx',
  'src/components/Portal.tsx',
  'src/components/Radio.tsx',
  'src/components/Skeleton.tsx',
  'src/components/Show.tsx',
  'src/components/Tag.tsx',
  'src/components/Textarea.tsx',
  'src/components/TextLink.tsx',
  'src/components/Toggle.tsx',
  'src/components/toast.tsx',
  'src/components/shared/types.ts',

  'src/context/FormControl.tsx',
  'src/context/Toast/context.tsx',
  'src/context/Toast/reducer.ts',
  'src/context/Toast/types.ts',

  'src/icons/index.ts',
]

export default defineConfig([
  modernConfig({
    entry: TEMP_ENTRY,
    external: ['@/styled-system'],
  }),
  legacyConfig({ entry: TEMP_ENTRY, external: ['@/styled-system'] }),
])
