import deepMerge from '../utils/deepMerge'

export default function compose(composesValue, cssObject) {
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
