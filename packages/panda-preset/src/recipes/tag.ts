import { defineRecipe } from '@pandacss/dev'
import { focusStates } from './shared/states'

export const tag = defineRecipe({
  className: 'tag',
  description: 'The styles for the Tag component',

  base: {
    ...focusStates,
    border: '1px solid',
    borderColor: 'neutral.border.initial',
    color: 'action.navigation.initial',
    rounded: 'md',
    textStyle: 'link',
    _hover: {
      color: 'action.navigation.hover',
      textDecoration: 'none',
    },
    _visited: {
      color: 'action.navigation.visited',
    },
  },

  variants: {
    size: {
      sm: {
        fontSize: 'sm',
        pxi: '2',
        py: '1.5px',
      },
      md: {
        pxi: '3',
        py: '1',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
