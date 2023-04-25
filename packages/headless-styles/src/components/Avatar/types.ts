import type { DefaultOptions } from '../../utils/types'
import type { Sentiment, Size } from '../types'

export interface AvatarOptions extends DefaultOptions {
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
