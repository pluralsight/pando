import { defineRecipe } from '@pandacss/dev'

export const textLink = defineRecipe({
  className: 'text-link',
  description: 'The styles for the TextLink component',

  base: {
    color: 'action.navigation.initial',
    textStyle: 'link',
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
