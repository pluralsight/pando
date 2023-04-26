import type { DefaultOptions } from '../../utils/types'
import type { Sentiment, Size } from '../types'

export interface AvatarOptions extends DefaultOptions {
  sentiment?: AvatarSentiment
  size?: AvatarSize
}

export interface AvatarImageOptions extends DefaultOptions {
  alt: string
  src: string
}

export interface AvatarLabelOptions extends DefaultOptions {
  name: string
  size: AvatarSize
}

export type AvatarSentiment = Exclude<
  Sentiment,
  'info' | 'success' | 'warning' | 'danger'
>
export type AvatarSize = Exclude<Size, 'xxl'>
