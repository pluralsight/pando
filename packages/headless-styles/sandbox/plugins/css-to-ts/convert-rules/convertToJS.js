const css = require('css')
import addProperty from '../utils/addProperty'
import fontface from './fontface'
import keyframes from './keyframes'
import standard from './standard'

function checkForNestedSelectors(propToCheck) {
  if (typeof propToCheck === 'string') {
    return propToCheck
  }
  return findAndReplaceVars(propToCheck)
}

function findAndReplaceVars(styleObject) {
  return Object.keys(styleObject).reduce((prev, current) => {
    const sanitizedVal = checkForNestedSelectors(styleObject[current])
    return {
      ...prev,
      [current]: sanitizedVal,
    }
  }, styleObject)
}

const convertRules = (rules, res = {}) => {
  let result = res

  rules.forEach((rule) => {
    if (rule.type === 'media') {
      // Convert @media rules
      const name = `@media ${rule.media}`
      result[name] = result[name] || {}
      const media = result[name]
      convertRules(rule.rules, media)
    } else if (rule.type === 'font-face') {
      // Convert @font-face rules
      const fontProp = fontface(rule, result)
      if (fontProp) result = addProperty(result, fontProp[0], fontProp[1])
    } else if (rule.type === 'keyframes') {
      // Convert @keyframes rules
      const keyProp = keyframes(rule, result)
      result = addProperty(result, keyProp[0], keyProp[1])
    } else if (rule.type === 'rule') {
      // Convert standard CSS rules
      const standardProp = standard(rule, result)
      Object.entries(standardProp).forEach(([key, value]) => {
        const sanitizedValue = findAndReplaceVars(value)
        result = addProperty(result, key, sanitizedValue)
      })
    }
  })

  return result
}

export default function convertToJS(input) {
  // Parse CSS string into rules array
  try {
    const parsedCss = css.parse(input)
    const { rules } = parsedCss.stylesheet
    const initial = convertRules(rules)

    return applyCompositions(initial)
  } catch (err) {
    throw new Error(`Invalid CSS input: ${err}`)
  }
}

function applyCompositions(obj) {
  for (const [className, value] of Object.entries(obj)) {
    if (typeof value !== 'object') {
      obj[className] = value
      continue
    }
    const { composes, ...overrides } = value
    obj[className] = {}
    if (composes) {
      if (composes in obj) {
        deepMerge(obj[className], obj[composes])
      } else if (composes.includes(' from ')) {
        // Ignore here, will be appended in later step
        deepMerge(obj[className], value)
      } else {
        composes.split(/\s+/).forEach((otherKey) => {
          deepMerge(obj[className], obj[otherKey])
        })
      }
    }
    deepMerge(obj[className], overrides)
  }
  return obj
}

function deepMerge(source, target) {
  for (const [key, value] of Object.entries(target)) {
    // Overwrite primitive values, merge objects together
    if (key in source && typeof value === 'object') {
      deepMerge(source[key], value)
    } else {
      source[key] = value
    }
  }
}
