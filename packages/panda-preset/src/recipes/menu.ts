import { defineSlotRecipe } from '@pandacss/dev'

const SLOTS = ['root']

export const menu = defineSlotRecipe({
  className: 'menu',
  description: 'The styles for the Menu component',
  slots: SLOTS,

  base: {
    root: {},
  },

  variants: {},

  defaultVariants: {},
})
