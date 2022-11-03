import React from 'react'
import {
  getButtonProps,
  getIconProps,
  unstable_getPaginationProps as getPaginationProps,
  unstable_getSelectProps as getSelectProps,
} from '@pluralsight/headless-styles'
import { ChevronDownIcon, PlaceholderIcon } from '@pluralsight/icons'

const ReactLiveScope = {
  React,
  ...React,
  getButtonProps,
  getIconProps,
  getPaginationProps,
  getSelectProps,
  ChevronDownIcon,
  PlaceholderIcon,
}

export default ReactLiveScope
