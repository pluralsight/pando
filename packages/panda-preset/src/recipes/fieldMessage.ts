import { defineRecipe } from '@pandacss/dev'
import { danger, neutral } from './shared/palettes'

export const fieldMessage = defineRecipe({
  className: 'field-message',
  description: 'The styles for the FieldMessage component',

  base: {
    color: 'colorPalette.text.200',
    display: 'block',
    fontSize: 'xs',
    paddingTop: '2',
    textAlign: 'left',
  },

  variants: {
    usage: {
      help: {
        ...neutral,
      },
      invalid: {
        ...danger,
      },
    },
  },

  defaultVariants: {
    usage: 'help',
  },
})
