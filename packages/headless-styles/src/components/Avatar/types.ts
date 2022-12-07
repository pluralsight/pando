import type { Sentiment, Size } from '../types'

export interface AvatarOptions {
  label: string
  sentiment?: AvatarSentiment
  size?: AvatarSize
  src: string
}

export type AvatarSentiment = Exclude<
  Sentiment,
  'info' | 'success' | 'warning' | 'danger'
>
export type AvatarSize = Exclude<Size, 'xxl'>
