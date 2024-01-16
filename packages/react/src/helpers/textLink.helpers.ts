import { css } from '@/styled-system/css'

export interface CreateTextLinkIconOptions {
  height: string
  width: string
}

export function createTextLinkIconProps(options?: CreateTextLinkIconOptions) {
  return {
    'aria-hidden': true,
    className: css({ color: 'action.navigation.initial' }),
    height: options?.height ?? '1.25rem',
    width: options?.width ?? '1.25rem',
  }
}
