import type { ButtonSentiment, ButtonSize } from '../Button/types'

export interface IconButtonOptions {
  ariaLabel: string
  disabled?: boolean
  sentiment?: ButtonSentiment
  usage?: IconButtonUsage
  size?: ButtonSize
}

// types

export type IconButtonUsage = 'square' | 'round' | 'text'
