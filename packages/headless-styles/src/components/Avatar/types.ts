import type { Tech } from '../types'

export interface AvatarOptions {
  label: string
  src: string
  sentiment?: Sentiment
  size?: Size
  tech?: Tech
}

export type Sentiment = 'default' | 'action'
export type Size = 'xs' | 's' | 'm' | 'l' | 'xl'
