import type { Sentiment, Size, Usage } from '../types'

export interface BadgeOptions {
  sentiment?: BadgeSentiment
  usage?: BadgeUsage
  size?: BadgeSize
}

export interface DefaultBadgeOptions {
  sentiment: BadgeSentiment
  usage: BadgeUsage
  size: BadgeSize
}

// types

export type BadgeSentiment = Exclude<
  Sentiment,
  'info' | 'success' | 'warning' | 'danger'
>
export type BadgeUsage = Exclude<Usage, 'text'>
export type BadgeSize = Exclude<Size, 'm' | 'l' | 'xl' | 'xxl'>
