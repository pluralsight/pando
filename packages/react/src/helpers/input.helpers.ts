import type { Sizes } from '../components/shared/types'

function getPandoInputIconSize(pandoSize?: PandoInputIconSize) {
  switch (pandoSize) {
    case 'md':
      return '1rem'

    case 'lg':
      return DEFAULT_INPUT_ICON_SIZE

    default:
      return null
  }
}

export type PandoInputIconSize = Exclude<Sizes, 'xs' | 'sm' | 'xl'>

export interface CreateInputIconOptions {
  pandoSize?: PandoInputIconSize
  height?: string
  width?: string
}

export const DEFAULT_INPUT_ICON_SIZE = '1.25rem'

export function createInputIconProps(options?: CreateInputIconOptions) {
  const size = getPandoInputIconSize(options?.pandoSize) ?? options?.width
  return {
    'aria-hidden': true,
    height: size ?? DEFAULT_INPUT_ICON_SIZE,
    width: size ?? DEFAULT_INPUT_ICON_SIZE,
  }
}
