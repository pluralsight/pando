import { createClassNameProp } from '../../utils/helpers'
import {
  createSwitchProps,
  getDefaultSwitchOptions,
  getSwitchClasses,
} from './shared'
import type { SwitchOptions } from './types'
import './switchCSS.scss'

const SWITCH = 'pando-switch'

export function getSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const { size } = defaultOptions
  const props = createSwitchProps(defaultOptions)
  const { thumbClass, trackClass } = getSwitchClasses(size)

  return {
    ...props,
    wrapper: createClassNameProp(`${SWITCH}-wrapper`, 'pando_switchWrapper'),
    input: {
      ...props.input,
      ...createClassNameProp(`${SWITCH}-input`, 'pando_switchInput'),
    },
    switchContainer: createClassNameProp(
      `${SWITCH}-container`,
      'pando_switchContainer'
    ),
    switchTrack: {
      ...props.switchTrack,
      ...createClassNameProp(`${SWITCH}-track`, trackClass),
    },
    switchThumb: {
      ...props.switchThumb,
      ...createClassNameProp(`${SWITCH}-thumb`, thumbClass),
    },
  }
}
