import { splitProps } from '../helpers.mjs'
import { createRecipe, mergeRecipes } from './create-recipe.mjs'

const buttonFn = /* @__PURE__ */ createRecipe(
  'button',
  {
    palette: 'action',
    size: 'lg',
    usage: 'filled',
  },
  [],
)

const buttonVariantMap = {
  palette: ['action', 'neutral', 'danger'],
  size: ['md', 'lg'],
  usage: ['text', 'outline', 'filled'],
}

const buttonVariantKeys = Object.keys(buttonVariantMap)

export const button = /* @__PURE__ */ Object.assign(buttonFn, {
  __recipe__: true,
  __name__: 'button',
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
})
