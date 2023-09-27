import type { SentimentConfig } from './types'

export function defineSentiment<T extends SentimentConfig>(config: T) {
  return config
}

export * from './neutral.ts'
export * from './action.ts'
export * from './info.ts'
export * from './success.ts'

export * from './types.ts'
