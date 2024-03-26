import { defineSlotRecipe } from '@pandacss/dev'

const SLOTS = ['root']

export const select = defineSlotRecipe({
  className: 'select',
  description: 'The styles for the Select component',
  slots: SLOTS,

  base: {
    root: {},
  },

  variants: {},

  defaultVariants: {},
})
