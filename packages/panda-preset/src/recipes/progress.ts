import { defineSlotRecipe } from '@pandacss/dev'

export const progress = defineSlotRecipe({
  className: 'progress',
  description: 'The styles for the ProgressBar component',
  slots: ['root', 'bar'],

  base: {
    root: {
      bgColor: 'neutral.border.initial',
      overflowY: 'hidden',
      position: 'relative',
      transition: 'width 300ms ease',
      w: 'full',
    },
    bar: {
      bgColor: 'neutral.text.300',
      h: 'full',
      w: '0',
    },
  },

  variants: {
    usage: {
      inset: {},
      round: {
        root: {
          rounded: 'lg',
        },
        bar: {
          rounded: 'lg',
        },
      },
    },
    size: {
      md: {
        root: {
          h: '0.25rem',
        },
      },
      lg: {
        root: {
          h: '0.5rem',
        },
      },
    },
  },

  defaultVariants: {
    usage: 'round',
    size: 'lg',
  },
})
