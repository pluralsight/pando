import type { Tech } from '../types'

export interface BadgeOptions {
  sentiment?: Sentiment
  usage?: Usage
  size?: Size
  tech?: Tech
}

// types

export type Sentiment = 'default' | 'action'
export type Usage = 'filled' | 'outline'
export type Size = 'xs' | 's'
