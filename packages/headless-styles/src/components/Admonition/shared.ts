import { createPandoOptions } from '../shared/defaultOptions'
import type { IconButtonOptions } from '../IconButton/types'
import type { IconOptions } from '../Icon/types'
import type { AdmonitionOptions, AdmonitionSentiment } from './types'

export function getDefaultAdmonitionOptions(options?: AdmonitionOptions) {
  return {
    sentiment: options?.sentiment ?? 'info',
  }
}

export function getAdmonitionClasses(sentiment: AdmonitionSentiment) {
  return {
    sentimentClass: `${sentiment}Admonition` as const,
    iconClass: `${sentiment}IconWrapper` as const,
    textClass: `${sentiment}TextContainer` as const,
  }
}

export function createAdmonitionProps() {
  return {
    iconButtonOptions: createPandoOptions<IconButtonOptions>({
      ariaLabel: 'Close admonition',
      usage: 'text',
      size: 'm',
    }),
    iconOptions: createPandoOptions<IconOptions>({
      size: 'm',
    }),
    description: {},
    iconWrapper: {},
    textContainer: {},
    title: {},
    wrapper: {
      role: 'region',
    },
  }
}
