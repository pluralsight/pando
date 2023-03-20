import type { IconOptions } from '../Icon/types'
import type { TextLinkOptions } from './types'

export const textLinkIconSize = '1em'

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href)
}

function getLinkProps(href: string) {
  if (isExternalHref(href)) {
    return {
      rel: 'noopener external',
      target: '_blank',
    }
  }

  return {}
}

function getIconOptions() {
  return {
    ariaHidden: false,
    ariaLabel: '(opens in a new window)',
    customSize: textLinkIconSize,
  } as IconOptions
}

export function getDefaultTextLinkOptions(options?: TextLinkOptions) {
  return {
    href: options?.href ?? '',
  }
}

export function createTextLinkProps(href: string) {
  const linkProps = getLinkProps(href)

  return {
    link: { href, ...linkProps },
    ...(isExternalHref(href) && { iconOptions: getIconOptions() }),
  }
}
