import React from 'react'
import * as HeadlessStyles from '@pluralsight/headless-styles'
import {
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  DangerDiamondIcon,
  ExternalLinkIcon,
  EyeIcon,
  EyeOffIcon,
  HelpCircleIcon,
  InfoCircleIcon,
  IndeterminateIcon,
  MenuIcon,
  PersonIcon,
  PlaceholderIcon,
  SearchIcon,
  StarIcon,
  StarFilledIcon,
  WarningTriangleFilledIcon,
} from '@pluralsight/icons'
import {
  useAutoFormatDate,
  useEscToClose,
  useMenuInteraction,
  useRovingTabIndex,
  useSubmenuInteraction,
} from '@pluralsight/react-utils'

const ReactLiveScope = {
  React,
  ...React,
  ...HeadlessStyles,
  // icons
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  DangerDiamondIcon,
  ExternalLinkIcon,
  EyeIcon,
  EyeOffIcon,
  HelpCircleIcon,
  IndeterminateIcon,
  InfoCircleIcon,
  MenuIcon,
  PersonIcon,
  PlaceholderIcon,
  SearchIcon,
  StarIcon,
  StarFilledIcon,
  WarningTriangleFilledIcon,
  // react-utils
  useAutoFormatDate,
  useEscToClose,
  useMenuInteraction,
  useRovingTabIndex,
  useSubmenuInteraction,
}

export default ReactLiveScope
