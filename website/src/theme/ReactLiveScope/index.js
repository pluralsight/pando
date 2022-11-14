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
  CalendarIcon,
  ChevronDownIcon,
  EyeIcon,
  EyeOffIcon,
  PlaceholderIcon,
  WarningTriangleFilledIcon,
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
  CalendarIcon,
  ChevronDownIcon,
  EyeIcon,
  EyeOffIcon,
  PlaceholderIcon,
  WarningTriangleFilledIcon,
  // react-utils
  useAutoFormatDate,
}

export default ReactLiveScope
