import type { Usage, Size } from '../Button/types'
import type { IconSize } from '../types'
import type { AdmonitionOptions, AdmonitionSentiment } from './types'

export function getDefaultAdmonitionOptions(options?: AdmonitionOptions) {
  return {
    sentiment: options?.sentiment ?? 'info',
  }
}

export function getAdmonitionClasses(sentiment: AdmonitionSentiment) {
  return {
    sentimentClass: `${sentiment}Admonition`,
    iconClass: `${sentiment}IconWrapper`,
    textClass: `${sentiment}TextContainer`,
  }
}

export function createAdmonitionProps() {
  return {
    iconButtonOptions: {
      ariaLabel: 'Close admonition',
      usage: 'text' as Usage,
      size: 'm' as Size,
    },
    iconOptions: {
      size: 'm' as IconSize,
    },
    description: {},
    iconWrapper: {},
    textContainer: {},
    title: {},
    wrapper: {
      role: 'alert',
    },
  }
}
