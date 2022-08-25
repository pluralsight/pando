import { Tech } from '../types'

export interface AdmonitionOptions {
  sentiment?: Sentiment
  tech?: Tech
}

// Types

export type Sentiment = 'info' | 'success' | 'warning' | 'danger'
