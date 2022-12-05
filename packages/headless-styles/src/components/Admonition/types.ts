import type { Sentiment } from '../types'

export interface AdmonitionOptions {
  sentiment?: AdmonitionSentiment
}

// Types

export type AdmonitionSentiment = Exclude<Sentiment, 'default'>
