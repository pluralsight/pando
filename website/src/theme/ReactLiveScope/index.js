import React from 'react'
import {
  getButtonProps,
  getFormControlProps,
  getFormLabelProps,
  getGridProps,
  getGridItemProps,
  getIconButtonProps,
  getIconProps,
  getInputProps,
  getMenuProps,
  getMenuItemProps,
  getPaginationProps,
  getPopoverProps,
  getRadioProps,
  getSelectProps,
} from '@pluralsight/headless-styles'
import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
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
  getFormLabelProps,
  getGridProps,
  getGridItemProps,
  getIconButtonProps,
  getIconProps,
  getInputProps,
  getMenuProps,
  getMenuItemProps,
  getPaginationProps,
  getPopoverProps,
  getRadioProps,
  getSelectProps,
  // icons
  CalendarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
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
