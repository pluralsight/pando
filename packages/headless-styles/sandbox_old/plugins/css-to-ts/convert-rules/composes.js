export default function composes(styleObj) {
  for (const [className, value] of Object.entries(styleObj)) {
    if (typeof value !== 'object') {
      styleObj[className] = value
      continue
    }

    const { composes, ...overrides } = value
    styleObj[className] = {}

    if (composes) {
      if (composes in styleObj) {
        deepMerge(styleObj[className], styleObj[composes])
      } else if (composes.includes(' from ')) {
        // Preserve value as array for later
        value.composes = [composes]
        deepMerge(styleObj[className], value)
      } else {
        composes.split(/\s+/).forEach((otherKey) => {
          deepMerge(styleObj[className], styleObj[otherKey])
        })
      }
    }
    deepMerge(styleObj[className], overrides)
  }

  return styleObj
}

function deepMerge(source, target) {
  for (const [key, value] of Object.entries(target)) {
    // Overwrite primitive values, merge objects together
    if (key in source && isObject(value)) {
      deepMerge(source[key], value)
    } else if (isObject(value)) {
      source[key] = { ...value }
    } else if (Array.isArray(value)) {
      source[key] = mergeArrays(source[key], value)
    } else {
      source[key] = value
    }
  }
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
