import deepMerge from '../utils/deepMerge'

export default function compose(cssObject, selector, composesValue) {
  const composedProperties = getComposedProperties(composesValue, cssObject)
  return deepMerge(composedProperties, cssObject[selector])
}

function getComposedProperties(composesValue, cssObject) {
  const classList = getClassList(composesValue)
  return composeFromClasses(classList, cssObject)
}

function getClassList(composesValue) {
  return composesValue.split(/\s+/)
}

function composeFromClasses(classes, css) {
  return classes.reduce((prev, className) => {
    return deepMerge(prev, css[className])
  }, {})
}
