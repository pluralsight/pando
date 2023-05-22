export default function deepMerge(source, target) {
  const merged = { ...source }

  for (const [key, value] of Object.entries(target)) {
    // Overwrite primitive values, merge objects together
    if (key in merged && isObject(value)) {
      merged[key] = deepMerge(merged[key], value)
    } else if (isObject(value)) {
      merged[key] = { ...value }
    } else if (Array.isArray(value)) {
      merged[key] = mergeArrays(merged[key], value)
    } else {
      merged[key] = value
    }
  }

  return merged
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

function mergeArrays(source, target) {
  if (Array.isArray(source)) {
    return [...source, ...target]
  }

  return target
}
