import type { Sentiment } from '../types'

export interface ToastOptions {
  sentiment: ToastSentiment
}

// types

export type ToastSentiment = Exclude<Sentiment, 'default' | 'action'>
