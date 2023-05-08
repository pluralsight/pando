import React from 'react'
import * as HeadlessStyles from '@pluralsight/headless-styles'
import {
  unsafe_Admonition as Admonition,
  unsafe_AdmonitionHeading as AdmonitionHeading,
  unsafe_AdmonitionText as AdmonitionText,
  unsafe_Avatar as Avatar,
} from '@pluralsight/react'
import {
  CalendarIcon,
  CaretLeftIcon,
  CaretRightIcon,
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
  unstable_useIsIndeterminate as useIsIndeterminate,
  useMenuInteraction,
  useRovingTabIndex,
  useSubmenuInteraction,
} from '@pluralsight/react-utils'

const ReactLiveScope = {
  React,
  ...React,
  ...HeadlessStyles,
  // react
  Admonition,
  AdmonitionHeading,
  AdmonitionText,
  Avatar,
  // icons
  CalendarIcon,
  CaretLeftIcon,
  CaretRightIcon,
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
  useIsIndeterminate,
  useMenuInteraction,
  useRovingTabIndex,
  useSubmenuInteraction,
}

export default ReactLiveScope
