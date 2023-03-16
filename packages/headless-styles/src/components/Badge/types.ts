import type { Sentiment, Size, Usage } from '../types'

export interface BadgeOptions {
  sentiment?: BadgeSentiment
  usage?: BadgeUsage
  size?: BadgeSize
}

export type DefaultBadgeOptions = Required<BadgeOptions>

// types

export type BadgeSentiment = Exclude<Sentiment, 'action'>
export type BadgeUsage = Exclude<Usage, 'text'>
export type BadgeSize = Exclude<Size, 'm' | 'l' | 'xl' | 'xxl'>
