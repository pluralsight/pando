import { defineRecipe } from '@pandacss/dev'
import {
  buttonBase,
  filledUsage,
  textUsage,
  outlineUsage,
} from './shared/button.base'
import { allPalettes } from './shared/palettes'

export const iconButton = defineRecipe({
  className: 'icon-button',
  description: 'The styles for the IconButton component',

  base: {
    ...buttonBase,
  },

  variants: {
    palette: allPalettes,
    size: {
      xs: {
        h: '1.5rem',
        w: '1.5rem',
        pxi: '1',
      },
      sm: {
        h: '2rem',
        w: '2rem',
        pxi: '2',
      },
      md: {
        h: '2.5rem',
        w: '2.5rem',
        pxi: '2.5',
      },
      lg: {
        h: '3rem',
        w: '3rem',
        pxi: '3',
      },
    },
    shape: {
      circle: {
        borderRadius: '50%',
      },
      square: {
        borderRadius: '0.375rem',
      },
    },
    usage: {
      text: textUsage,
      filled: filledUsage,
      outline: outlineUsage,
    },
  },

  defaultVariants: {
    palette: 'action',
    size: 'lg',
    shape: 'square',
    usage: 'filled',
  },
})
