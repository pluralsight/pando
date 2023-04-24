import type { DefaultOptions } from '../../utils/types'
import type { Sentiment } from '../types'

export interface AdmonitionOptions extends DefaultOptions {
  sentiment?: AdmonitionSentiment
}

// Types

export type AdmonitionSentiment = Exclude<Sentiment, 'default' | 'action'>
