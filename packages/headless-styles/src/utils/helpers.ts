import type * as CSS from 'csstype'
import type { AllHTMLAttributes } from 'react'
import type { FieldStates, Tech } from '../components/types'
import type { IconButtonOptions, IconOptions } from '../types'

export type GeneratedStyles = Record<string, string | unknown>
export type NestedStyleValue = string | GeneratedStyles
export type StyleProps = keyof CSS.Properties
export type Syntax = 'jsx' | 'html'

export type CSSCustomSelectors = Record<string, CSS.Properties>
export type CSSPseudos = Record<CSS.Pseudos, CSS.Properties>

export interface CSSObj extends CSS.Properties, CSSPseudos {}
export interface CSSKeyframes {
  cssProps: TemplateStringsArray
  styles: CSSCustomSelectors | CSSObj
}

interface PropsObj {
  [k: string]: JSStyleProps
}

export type StyleObject = OptionProps & PropsObj

export interface OptionProps {
  iconOptions?: IconOptions
  iconButtonOptions?: IconButtonOptions
  iconWrapper?: JSStyleProps
}

export interface JSStyleProps {
  a11yProps?: CustomA11yProps
  cssProps: TemplateStringsArray
  keyframes?: CSSKeyframes
  role?: string
  styles: CSSObj | CSSCustomSelectors
}

export interface CustomA11yProps extends AllHTMLAttributes<HTMLElement> {
  'data-aria-hidden'?: boolean
  'data-checked'?: boolean
  'data-disabled'?: boolean
  'data-expanded'?: boolean
  'data-focus-guard'?: boolean
  'data-focus-lock-disabled'?: boolean
  'data-invalid'?: boolean
  'data-popover'?: boolean
  'data-readonly'?: boolean
  'data-required'?: boolean
  'data-tooltip'?: boolean
}

export interface ClassOptions {
  defaultClass: string
  svelteClass: string
}

function kebabCase(input: string) {
  const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g

  return input.replace(KEBAB_REGEX, function (match) {
    return '-' + match.toLowerCase()
  })
}

function formatCSSPropName(propName: string) {
  if (propName.includes('&')) {
    return propName
  }

  return `${kebabCase(propName)}:`
}

function transformValue(style: NestedStyleValue) {
  if (typeof style === 'string') {
    return `${style.trim()};`
  }

  const psuedoStyles = Object.keys(style).reduce((prev, current) => {
    return `
      ${prev.trim()}
      ${kebabCase(current)}: ${style[current]};
    `
  }, ``)

  return `{${psuedoStyles}}`
}

function isSvelte(tech: Tech) {
  return tech === 'svelte'
}

const propertyMap: Record<string, string> = {
  htmlFor: 'for',
}

// Public

export function createA11yProps(options: FieldStates) {
  const { disabled, invalid, required, readOnly } = options

  return {
    ['aria-invalid']: invalid,
    ['data-disabled']: disabled,
    ['data-invalid']: invalid,
    ['data-readonly']: readOnly,
    ['data-required']: required,
    disabled,
    readOnly,
    required,
  }
}

export function createSvelteObj(classname = '') {
  return { class: classname }
}

export function createCSSObj(className = '') {
  return {
    className,
  }
}

export function createClassProp(tech: Tech, classes: ClassOptions) {
  if (tech === 'svelte') {
    return createSvelteObj(classes.svelteClass)
  }

  return createCSSObj(classes.defaultClass)
}

export function createJSProps(styles: GeneratedStyles) {
  return {
    cssProps: transformStyles(styles),
    styles: styles as unknown as CSSObj,
  }
}

export function transformStyles(styleObject: GeneratedStyles) {
  return Object.keys(styleObject)
    .reduce((prev, current) => {
      const propName = formatCSSPropName(current)

      return `
      ${prev.trim()}
      ${propName} ${transformValue(styleObject[current] as NestedStyleValue)}
    `
    }, '')
    .trim()
    .replace(/^ {2,12}/gm, '') as unknown as TemplateStringsArray
}

export function getSyntaxType(tech: Tech) {
  return tech === 'svelte' ? 'html' : 'jsx'
}

export function transformCasing(jsxProp: string, syntax: Syntax) {
  return syntax === 'html' ? kebabCase(jsxProp) : jsxProp
}

export function transformProperty(jsxProp: string, tech: Tech) {
  const htmlAttr = propertyMap[jsxProp] ?? ''
  return isSvelte(tech) ? htmlAttr : jsxProp
}
