import type { SentimentConfig } from './types'

export function defineSentiment<T extends SentimentConfig>(config: T) {
  return config
}

export * from './neutral'

export * from './types'
