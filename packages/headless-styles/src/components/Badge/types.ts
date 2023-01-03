import type { Sentiment, Size, Usage } from '../types'

export interface BadgeOptions {
  className?: string
  sentiment?: BadgeSentiment
  size?: BadgeSize
  usage?: BadgeUsage
}

// types

export type BadgeSentiment = Exclude<
  Sentiment,
  'info' | 'success' | 'warning' | 'danger'
>
export type BadgeUsage = Exclude<Usage, 'text'>
export type BadgeSize = Exclude<Size, 'm' | 'l' | 'xl' | 'xxl'>
