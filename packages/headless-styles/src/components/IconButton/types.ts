import type { DefaultOptions } from '../../utils/types'
import type { ButtonSentiment, ButtonSize } from '../Button/types'

export interface IconButtonOptions extends DefaultOptions {
  ariaLabel: string
  disabled?: boolean
  sentiment?: ButtonSentiment
  usage?: IconButtonUsage
  size?: ButtonSize
}

// types

export type IconButtonUsage = 'square' | 'round' | 'text'
