import deepMerge from './deepMerge'

function addProperty(obj, key, value) {
  const retObj = obj
  if (retObj[key]) {
    retObj[key] = deepMerge(retObj[key], value)
  } else {
    retObj[key] = value
  }

  return retObj
}

export default addProperty
