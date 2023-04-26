import type { DefaultOptions } from '../../utils/types'
import type { Sentiment, Size, Usage } from '../types'

export interface ButtonOptions extends DefaultOptions {
  disabled?: boolean
  sentiment?: ButtonSentiment
  usage?: ButtonUsage
  size?: ButtonSize
}

// types

export type ButtonSentiment = Exclude<Sentiment, 'info' | 'success' | 'warning'>
export type ButtonSize = Exclude<Size, 'xs' | 's' | 'xl' | 'xxl'>
export type ButtonUsage = Usage
