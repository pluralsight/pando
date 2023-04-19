import { DefaultOptions } from '../../utils/types'
import type { Sentiment, Size, Usage } from '../types'

export interface BadgeOptions extends DefaultOptions {
  sentiment?: BadgeSentiment
  usage?: BadgeUsage
  size?: BadgeSize
}

// types

export type BadgeSentiment = Exclude<Sentiment, 'action'>
export type BadgeUsage = Exclude<Usage, 'text'>
export type BadgeSize = Exclude<Size, 'm' | 'l' | 'xl' | 'xxl'>
