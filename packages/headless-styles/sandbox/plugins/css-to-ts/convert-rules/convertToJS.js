const css = require('css')
import addProperty from '../utils/addProperty'
import fontface from './fontface'
import keyframes from './keyframes'
import standard from './standard'
import compose from './composes'

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
  const toBeComposed = {}

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
        const { composes, ...sanitizedValue } = findAndReplaceVars(value)

        if (composes) {
          toBeComposed[key] = composes
        }

        result = addProperty(result, key, sanitizedValue)
      })
    }
  })

  Object.keys(toBeComposed).forEach((selector) => {
    const composedProperties = compose(toBeComposed[selector], result)

    result = addProperty(result, selector, composedProperties)
  })
  return result
}

const convertToJS = (input) => {
  // Parse CSS string into rules array
  try {
    const parsedCss = css.parse(input)
    const { rules } = parsedCss.stylesheet
    return convertRules(rules)
  } catch (err) {
    throw new Error(`Invalid CSS input: ${err}`)
  }
}

export default convertToJS
