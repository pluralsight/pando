// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'
import inputCSS from '../../Input/generated/inputCSS.module'

export default {
  selectFieldWrapper: {
    width: '100%',
  },
  selectWrapper: {
    ...inputCSS.inputWrapper,
  },
  selectBase: {
    ...inputCSS.defaultInput,
    paddingInlineEnd: '2.25rem',
    paddingInlineStart: '1rem',
  },
  selectIcon: {
    ...inputCSS.inputIcon,
    color: 'var(--ps-text-strong)',
    right: '0.5rem',
  },
  mSelectBase: {
    ...inputCSS.mInputBase,
  },
  lSelectBase: {
    ...inputCSS.lInputBase,
    paddingInlineEnd: '2.25rem',
  },
} satisfies GeneratedStyles
