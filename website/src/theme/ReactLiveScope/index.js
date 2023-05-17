import React from 'react'
import * as HeadlessStyles from '@pluralsight/headless-styles'
import {
  unsafe_Admonition as Admonition,
  unsafe_AdmonitionHeading as AdmonitionHeading,
  unsafe_AdmonitionText as AdmonitionText,
  unsafe_Avatar as Avatar,
  unsafe_Badge as Badge,
  unsafe_Button as Button,
  unsafe_CircularProgress as CircularProgress,
  unsafe_ProgressBar as ProgressBar,
  unsafe_Skeleton as Skeleton,
  unsafe_Table as Table,
  unsafe_Caption as Caption,
  unsafe_THead as THead,
  unsafe_TH as TH,
  unsafe_TBody as TBody,
  unsafe_TR as TR,
  unsafe_TD as TD,
  unsafe_Tag as Tag,
  unsafe_TextLink as TextLink,
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
  Badge,
  Button,
  CircularProgress,
  ProgressBar,
  Skeleton,
  Table,
  Caption,
  THead,
  TH,
  TBody,
  TR,
  TD,
  Tag,
  TextLink,
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
