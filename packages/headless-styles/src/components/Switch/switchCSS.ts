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
  const { pandoSize } = defaultOptions
  const props = createSwitchProps(defaultOptions)
  const { thumbClass, trackClass } = getSwitchClasses(pandoSize)

  return {
    ...props,
    input: {
      ...props.input,
      ...createClassNameProp(
        `${SWITCH}-input`,
        'pando_switchInput',
        ...defaultOptions.classNames
      ),
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

export function getSwitchWrapperProps(
  options?: Pick<SwitchOptions, 'classNames'>
) {
  const defaultOptions = getDefaultSwitchOptions({
    ...options,
    id: '',
    name: '',
  })

  return {
    ...createClassNameProp(
      `${SWITCH}-wrapper`,
      'pando_switchWrapper',
      ...defaultOptions.classNames
    ),
  }
}
