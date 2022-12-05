import type * as CSS from 'csstype'
import type { AllHTMLAttributes } from 'react'
import type { IconButtonOptions, IconOptions } from '../types'

export type CSSCustomSelectors = Record<string, CSS.Properties>
export type CSSPseudos = Record<CSS.Pseudos, CSS.Properties>
export type GeneratedStyles = Record<string, string | unknown>
export type NestedStyleValue = string | GeneratedStyles
export type StyleObject = OptionProps & PropsObj
export type StyleProps = keyof CSS.Properties
export type Syntax = 'jsx' | 'html'

// interfaces

export interface ClassOptions {
  defaultClass: string
  svelteClass: string
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

export interface CSSObj extends CSS.Properties, CSSPseudos {}

export interface CSSKeyframes {
  cssProps: TemplateStringsArray
  styles: CSSCustomSelectors | CSSObj
}

export interface JSStyleProps {
  a11yProps?: CustomA11yProps
  cssProps: TemplateStringsArray
  keyframes?: CSSKeyframes
  role?: string
  styles: CSSObj | CSSCustomSelectors
}

export interface OptionProps {
  iconOptions?: IconOptions
  iconButtonOptions?: IconButtonOptions
  iconWrapper?: JSStyleProps
}

export interface PropsObj {
  [k: string]: JSStyleProps
}
