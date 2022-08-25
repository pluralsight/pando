import type { Tech } from '../types'
import type { AdmonitionOptions, Sentiment } from './types'

const defaultAdmonitionOptions = {
  sentiment: 'info' as Sentiment,
  tech: '' as Tech,
}

export function getDefaultAdmonitionOptions(options?: AdmonitionOptions) {
  return {
    sentiment: options?.sentiment ?? defaultAdmonitionOptions.sentiment,
    tech: options?.tech ?? defaultAdmonitionOptions.tech,
  }
}

export function getAdmonitionClasses(sentiment: Sentiment) {
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
      usage: 'text',
      size: 'm',
    },
    iconOptions: {
      size: 'm',
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
