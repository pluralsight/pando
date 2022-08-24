import type { Tech } from '../types'
import type { Sentiment, Size } from '../Button/types'

export interface IconButtonOptions {
  ariaLabel: string
  disabled?: boolean
  sentiment?: Sentiment
  usage?: Usage
  size?: Size
  tech?: Tech
}

// types

export type Usage = 'square' | 'round' | 'text'
