import React from 'react'
import {
  getButtonProps,
  getFormControlProps,
  getGridProps,
  getGridItemProps,
  getIconButtonProps,
  getIconProps,
  getInputProps,
  getMenuProps,
  getMenuItemProps,
  getPaginationProps,
  getSelectProps,
} from '@pluralsight/headless-styles'
import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EyeIcon,
  EyeOffIcon,
  PlaceholderIcon,
  WarningTriangleFilledIcon,
} from '@pluralsight/icons'
import {
  useAutoFormatDate,
  useMenuInteraction,
  useRovingTabIndex,
  useSubmenuInteraction,
} from '@pluralsight/react-utils'

const ReactLiveScope = {
  React,
  ...React,
  getButtonProps,
  getFormControlProps,
  getGridProps,
  getGridItemProps,
  getIconButtonProps,
  getIconProps,
  getInputProps,
  getMenuProps,
  getMenuItemProps,
  getPaginationProps,
  getSelectProps,
  // icons
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EyeIcon,
  EyeOffIcon,
  PlaceholderIcon,
  WarningTriangleFilledIcon,
  // react-utils
  useAutoFormatDate,
  useMenuInteraction,
  useRovingTabIndex,
  useSubmenuInteraction,
}

export default ReactLiveScope
