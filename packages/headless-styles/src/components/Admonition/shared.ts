import type { Usage, Size } from '../Button/types'
import type { IconSize, StyleKey } from '../types'
import type { AdmonitionOptions, AdmonitionSentiment } from './types'

export function getDefaultAdmonitionOptions(options?: AdmonitionOptions) {
  return {
    sentiment: options?.sentiment ?? 'info',
  }
}

interface AdmonitionStyleKeys<SM> {
  sentimentClass: StyleKey<SM>
  iconClass: StyleKey<SM>
  textClass: StyleKey<SM>
}

export function getAdmonitionClasses<StyleModule>(
  sentiment: AdmonitionSentiment
): AdmonitionStyleKeys<StyleModule> {
  return {
    sentimentClass: `${sentiment}Admonition` as StyleKey<StyleModule>,
    iconClass: `${sentiment}IconWrapper` as StyleKey<StyleModule>,
    textClass: `${sentiment}TextContainer` as StyleKey<StyleModule>,
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
