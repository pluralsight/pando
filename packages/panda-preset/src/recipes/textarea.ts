import { defineRecipe } from '@pandacss/dev'
import { inputControl } from './shared/input.base'

export const textArea = defineRecipe({
  className: 'text-area',
  description: 'The styles for the TextArea component',

  base: {
    ...inputControl,
  },

  variants: {
    size: {
      md: {
        fontSize: 'sm',
      },
      lg: {
        fontSize: 'lg',
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
