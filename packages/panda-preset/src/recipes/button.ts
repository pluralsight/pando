import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',

  base: {
    display: 'flex',
  },

  variants: {
    sentiment: {
      funky: { bg: 'red.200', color: 'white' },
      edgy: { border: '1px solid {colors.red.500}' },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '40px' },
    },
    usage: {
      square: { borderRadius: '0' },
      circle: { borderRadius: 'full' },
    },
  },

  defaultVariants: {
    sentiment: 'funky',
    size: 'sm',
    usage: 'circle',
  },
})
