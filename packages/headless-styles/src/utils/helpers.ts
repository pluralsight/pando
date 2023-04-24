import type { FieldStates } from '../components/types'
import type {
  NestedGeneratedStyles,
  NestedStyleValue,
  RenderedGeneratedStyles,
  Syntax,
} from './types'

function createMirrorObject(list: readonly string[]) {
  return list.reduce((prev, current) => {
    return {
      ...prev,
      [current]: current,
    }
  }, {})
}

function formatCSSPropName(propName: string) {
  if (propName.includes('&')) {
    return propName
  }

  return `${kebabCase(propName)}:`
}

function kebabCase(input: string) {
  const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g

  return input.replace(KEBAB_REGEX, function (match) {
    return '-' + match.toLowerCase()
  })
}

function transformValue(style: NestedStyleValue) {
  if (typeof style === 'string') {
    return `${style.trim()};`
  }

  const psuedoStyles = Object.entries(style).reduce(
    (prev, [current, currentValue]) => {
      return `
      ${prev.trim()}
      ${kebabCase(current)}: ${currentValue};
    `
    },
    ``
  )

  return `{${psuedoStyles}}`
}

// Public

export function createA11yProps(options: FieldStates) {
  const { disabled, invalid, required, readOnly } = options

  return {
    ['aria-invalid']: invalid,
    ['data-invalid']: invalid,
    ['data-readonly']: readOnly,
    ['data-required']: required,
    disabled,
    readOnly,
    required,
  }
}

export function createJSA11yProps(props: Record<string, unknown>) {
  return {
    a11yProps: props,
  }
}

export function createClassNameProp(...classNames: string[]) {
  return { className: classNames.filter(Boolean).join(' ') }
}

export function createJSProps<T extends NestedGeneratedStyles>(styles: T) {
  return {
    cssProps: transformStyles(styles),
    styles: styles as RenderedGeneratedStyles<T>,
  }
}

export function splitClassNameProp(classNameProp?: string) {
  return classNameProp?.split(' ').filter(Boolean) ?? []
}

export function transformCasing(jsxProp: string, syntax: Syntax) {
  return syntax === 'html' ? kebabCase(jsxProp) : jsxProp
}

export function transformStyles(styleObject: NestedGeneratedStyles) {
  return Object.entries(styleObject)
    .reduce((prev, [currentKey, currentValue]) => {
      const propName = formatCSSPropName(currentKey)

      return `
      ${prev.trim()}
      ${propName} ${transformValue(currentValue)}
    `
    }, '')
    .trim()
    .replace(/^ {2,12}/gm, '') as unknown as TemplateStringsArray
}

export function getZindexKeys() {
  const keys = [
    'hide',
    'auto',
    'base',
    'decorator',
    'dropdown',
    'sticky',
    'banner',
    'overlay',
    'modal',
    'popover',
    'toast',
    'tooltip',
  ] as const

  return createMirrorObject(keys)
}

export function getZindex(key: keyof ReturnType<typeof getZindexKeys>) {
  const map = {
    hide: -1,
    auto: 'auto',
    base: 0,
    decorator: 50, // psuedo elements, etc. for borders or other
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    toast: 1600,
    tooltip: 1700,
  }

  return map[key]
}
