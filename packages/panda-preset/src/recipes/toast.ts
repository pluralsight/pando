import { defineSlotRecipe } from '@pandacss/dev'
import { SLOTS, toastPalettes } from './shared/toast.base'

export const toast = defineSlotRecipe({
  className: 'toast',
  description: 'The styles for the Toast component',
  slots: SLOTS,

  base: {
    root: {},
    container: {},
    featureIcon: {},
    main: {},
    closeRoot: {},
  },

  variants: {
    palette: toastPalettes,
  },

  defaultVariants: {
    palette: 'info',
  },
})
