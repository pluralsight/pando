import type { Sentiment, Size } from '../types'

export interface AvatarOptions {
  label: string
  src: string
  sentiment?: AvatarSentiment
  size?: AvatarSize
}

export type AvatarSentiment = Exclude<
  Sentiment,
  'info' | 'success' | 'warning' | 'danger'
>
export type AvatarSize = Exclude<Size, 'xxl'>
