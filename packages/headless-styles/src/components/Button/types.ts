import type { Sentiment, Size, Usage } from '../types'

export type ButtonSentimentOrUsage =
  | {
      sentiment?: ButtonSentiment
      usage?: 'outline'
    }
  | {
      sentiment?: 'action'
      usage?: ButtonUsage
    }

export type ButtonOptions = ButtonSentimentOrUsage & {
  disabled?: boolean
  size?: ButtonSize
  icon?: ButtonIcon
}

// types

export type ButtonIcon = 'start' | 'end' | ''
export type ButtonSentiment = Extract<
  Sentiment,
  'danger' | 'action' | 'default'
>
export type ButtonSize = Extract<Size, 'm' | 'l'>
export type ButtonUsage = Usage
