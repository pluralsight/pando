import type { Simplify } from '../../types'

// [sentiment?]-[usage]-[prominence?]-[interaction?]

/**
 * The categories of a theme.
 * @description **adjective**, how something is perceived.
 * @readonly **required**
 */
export type Sentiment =
  | 'neutral'
  | 'action'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

/**
 * How a color is presented (can be a CSS property or HTML element).
 * @description **noun**, how something is used within an interface.
 * @readonly **required**
 */
export type Usage = 'bg' | 'border' | 'navigation' | 'surface' | 'text'

/**
 * The use or level of emphasis of a color.
 * @description **noun**, how something stands out.
 * @readonly **optional**
 */
export type Prominence = 'initial' | 'inverse' | 100 | 200 | 300

/**
 * The state of an color.
 * @description **noun**, action or influence.
 * @readonly **optional**
 */
export type Interaction =
  | 'initial'
  | 'hover'
  | 'active'
  | 'visited'
  | 'focus'
  | 'disabled'

/**
 * The Pando theme of a color.
 */
export type Themes = 'inkyBlueTheme'

/**
 * The mode option of a Pando theme.
 */
export type Modes = 'lightMode' | 'darkMode'

export type PandaSelectors<T extends string, V> = {
  readonly [K in `_${T}`]: V
}

export type ModeSelectors = PandaSelectors<Modes, string>
export type ThemeSelectors = PandaSelectors<Themes, Token>

export type Token = Simplify<
  {
    readonly base: string
  } & ModeSelectors
>

/**
 * The semantic token options of a color.
 */
export type SemanticToken = {
  value: ThemeSelectors
}

export type SentimentConfig = {
  [key in Sentiment]?: {
    [key in Usage]?:
      | SemanticToken
      | {
          readonly [key in Prominence]?: SemanticToken
        }
      | {
          readonly [key in Interaction]?: SemanticToken
        }
  }
}
