import deepMerge from '../utils/deepMerge.mjs'

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
        styleObj[className] = deepMerge(styleObj[className], styleObj[composes])
      } else if (composes.includes(' from ')) {
        // Preserve value as array for later
        value.composes = [composes]
        styleObj[className] = deepMerge(styleObj[className], value)
      } else {
        composes.split(/\s+/).forEach((otherKey) => {
          styleObj[className] = deepMerge(
            styleObj[className],
            styleObj[otherKey]
          )
        })
      }
    }
    styleObj[className] = deepMerge(styleObj[className], overrides)
  }

  return styleObj
}
