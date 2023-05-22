import type * as CSS from 'csstype'
import type { AllHTMLAttributes } from 'react'
import type { IconButtonOptions, IconOptions } from '../types'

declare module 'csstype' {
  interface Properties {
    WebkitColumnGap?: string
    WebkitPaddingAfter?: string
    WebkitPaddingBefore?: string
  }
}

// interfaces

export interface AllCSSProperties
  extends CSS.Properties,
    CSSPseudos,
    NestedPsuedoKey {}

export interface CSSClassNameObject {
  className: string
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
  styles: JSStyleObject
}

export interface DefaultOptions {
  classNames?: string[]
}

export interface JSStyleProps {
  a11yProps?: CustomA11yProps
  cssProps: TemplateStringsArray
  keyframes?: CSSKeyframes
  role?: string
  styles: JSStyleObject
}

export interface OptionProps {
  iconOptions?: IconOptions
  iconButtonOptions?: IconButtonOptions
  iconWrapper?: JSStyleProps
}

export interface PropsObj {
  [k: string]: JSStyleProps
}

// types

export type CSSCustomSelectors = Partial<Record<string, CSS.Properties>>
export type CSSPsuedoKeys = CSS.Pseudos | CSS.AdvancedPseudos
export type CSSPseudos = Partial<Record<CSSPsuedoKeys, CSS.Properties>>

export type GeneratedStyles = Record<string, NestedGeneratedStyles>

export type JSStyleObject = CSSObj | CSSCustomSelectors

export type NestedGeneratedStyles =
  | NestedStyleObject
  | Record<string, NestedStyleObject | Record<string, NestedStyleObject>>
export type NestedPsuedoKey = Record<`&${keyof CSSPseudos}`, CSS.Properties>
export type NestedStyleObject =
  | CSSObj
  | Record<`--${string}`, string>
  | CSSKeyframes
export type NestedStyleValue = string | GeneratedStyles

export type RenderedGeneratedStyles<T> = Omit<AllCSSProperties, keyof T> & T

export type StyleObject = OptionProps & PropsObj
export type StyleProps = keyof CSS.Properties
export type Syntax = 'jsx' | 'html'
