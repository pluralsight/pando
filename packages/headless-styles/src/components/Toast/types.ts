import type { Sentiment } from '../types'

export interface ToastOptions {
  kind: ToastSentiment
}

// types

export type ToastSentiment = Exclude<Sentiment, 'default' | 'action'>
