import { defineRecipe } from '@pandacss/dev'
import { focusStates } from './shared/states'

export const textLink = defineRecipe({
  className: 'text-link',
  description: 'The styles for the TextLink component',

  base: {
    color: 'action.navigation.initial',
    rounded: 'sm',
    textStyle: 'link',
    ...focusStates,
    _hover: {
      color: 'action.navigation.hover',
    },
    _visited: {
      color: 'action.navigation.visited',
    },
  },

  variants: {},

  defaultVariants: {},
})
