import css from 'css'
import addProperty from '../utils/addProperty.mjs'
import composes from './composes.mjs'
import fontface from './fontface.mjs'
import keyframes from './keyframes.mjs'
import standard from './standard.mjs'

export default function convertToJS(input) {
  try {
    // Parse CSS string into rules array
    const parsedCss = css.parse(input)
    const { rules } = parsedCss.stylesheet
    const initial = convertRules(rules)
    return composes(initial)
  } catch (err) {
    throw new Error(`Invalid CSS input: ${err}`)
  }
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

function findAndReplaceVars(styleObject) {
  return Object.keys(styleObject).reduce((prev, current) => {
    const sanitizedVal = checkForNestedSelectors(styleObject[current])
    return {
      ...prev,
      [current]: sanitizedVal,
    }
  }, styleObject)
}

function checkForNestedSelectors(propToCheck) {
  if (typeof propToCheck === 'string') {
    return propToCheck
  }

  return findAndReplaceVars(propToCheck)
}
