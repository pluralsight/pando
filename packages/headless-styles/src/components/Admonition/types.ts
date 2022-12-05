import type { Sentiment, Tech } from '../types'

export interface AdmonitionOptions {
  sentiment?: AdmonitionSentiment
  tech?: Tech
}

// Types

export type AdmonitionSentiment = Exclude<Sentiment, 'default'>
