function deepMerge(...objects) {
  return objects.reduce((collector, objToMerge) => {
    objToMerge &&
      Object.keys(objToMerge).forEach((key) => {
        const collectorValue = collector[key]
        const mergeValue = objToMerge[key]

        if (Array.isArray(collectorValue) && Array.isArray(mergeValue)) {
          collector[key] = collectorValue.concat(...mergeValue)
        } else if (isObject(collectorValue) && isObject(mergeValue)) {
          collector[key] = deepMerge(collectorValue, mergeValue)
        } else {
          collector[key] = mergeValue
        }
      })

    return collector
  }, {})
}

function isObject(item) {
  return item && typeof item === 'object'
}

export default deepMerge
