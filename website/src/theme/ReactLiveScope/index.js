import React from 'react'
import {
  getButtonProps,
  getFormControlProps,
  getIconButtonProps,
  getIconProps,
  getInputProps,
  unstable_getPaginationProps as getPaginationProps,
  unstable_getSelectProps as getSelectProps,
} from '@pluralsight/headless-styles'
import {
  ChevronDownIcon,
  EyeIcon,
  EyeOffIcon,
  PlaceholderIcon,
} from '@pluralsight/icons'
import { unstable_useAutoFormatDate as useAutoFormatDate } from '@pluralsight/react-utils'

const ReactLiveScope = {
  React,
  ...React,
  getButtonProps,
  getFormControlProps,
  getIconButtonProps,
  getIconProps,
  getInputProps,
  getPaginationProps,
  getSelectProps,
  // icons
  ChevronDownIcon,
  EyeIcon,
  EyeOffIcon,
  PlaceholderIcon,
  // react-utils
  useAutoFormatDate,
}

export default ReactLiveScope
