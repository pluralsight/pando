// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import inputCSS from '../../Input/generated/inputCSS.module'
import { deepMerge } from '../../../utils/helpers'

export default {
  selectFieldWrapper: {
    width: '100%',
  },
  selectWrapper: {
    ...inputCSS.inputWrapper,
  },
  selectBase: deepMerge(inputCSS.defaultInput, {
    paddingInlineEnd: '2.25rem',
    paddingInlineStart: '1rem',
  }),
  selectIcon: deepMerge(inputCSS.inputIcon, {
    color: 'var(--ps-text-strong)',
    right: '0.5rem',
  }),
  mSelectBase: {
    ...inputCSS.mInputBase,
  },
  lSelectBase: deepMerge(inputCSS.lInputBase, {
    paddingInlineEnd: '2.25rem',
  }),
}
