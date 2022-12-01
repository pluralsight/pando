import deepMerge from '../utils/deepMerge'
import addProperty from '../utils/addProperty'

export default function addComposedProperty(
  cssObject,
  selector,
  composesValue
) {
  const composedProperties = compose(composesValue, cssObject)
  const mergedProperties = deepMerge(composedProperties, cssObject[selector])
  return addProperty(cssObject, selector, mergedProperties)
}

function compose(composesValue, cssObject) {
  const classList = getClassList(composesValue)
  return composeFromClasses(classList, cssObject)
}

function getClassList(value) {
  return value.split(/\s+/)
}

function composeFromClasses(classes, css) {
  return classes.reduce((prev, className) => {
    return deepMerge(prev, css[className])
  }, {})
}
