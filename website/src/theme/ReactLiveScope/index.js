import React from 'react'
import * as HeadlessStyles from '@pluralsight/headless-styles'
import {
  unsafe_Admonition as Admonition,
  unsafe_AdmonitionHeading as AdmonitionHeading,
  unsafe_AdmonitionText as AdmonitionText,
  unsafe_Avatar as Avatar,
  unsafe_Badge as Badge,
  unsafe_Button as Button,
  unsafe_Checkbox as Checkbox,
  unsafe_CircularProgress as CircularProgress,
  unsafe_ErrorMessage as ErrorMessage,
  unsafe_FieldMessage as FieldMessage,
  unsafe_Fieldset as Fieldset,
  unsafe_Legend as Legend,
  unsafe_Flex as Flex,
  unsafe_FlexItem as FlexItem,
  unsafe_Grid as Grid,
  unsafe_GridItem as GridItem,
  unsafe_Icon as Icon,
  unsafe_IconButton as IconButton,
  unsafe_Input as Input,
  unsafe_Label as Label,
  unsafe_MenuProvider as MenuProvider,
  unsafe_MenuButton as MenuButton,
  unsafe_MenuList as MenuList,
  unsafe_MenuItem as MenuItem,
  unsafe_MenuDivider as MenuDivider,
  unsafe_ProgressBar as ProgressBar,
  unsafe_Radio as Radio,
  unsafe_Select as Select,
  unsafe_Option as Option,
  unsafe_Skeleton as Skeleton,
  unsafe_Table as Table,
  unsafe_Caption as Caption,
  unsafe_THead as THead,
  unsafe_TH as TH,
  unsafe_TBody as TBody,
  unsafe_TR as TR,
  unsafe_TD as TD,
  unsafe_Tag as Tag,
  unsafe_Textarea as Textarea,
  unsafe_TextLink as TextLink,
  unsafe_Toggle as Toggle,
  unsafe_ToggleButton as ToggleButton,
  // utils
  unsafe_Portal as Portal,
  unsafe_Show as Show,
  // context
  unsafe_ConfirmProvider as ConfirmProvider,
  unsafe_FormControlProvider as FormControlProvider,
  unsafe_PromptProvider as PromptProvider,
  unsafe_ToastProvider as ToastProvider,
  // hooks
  unsafe_useConfirm as useConfirm,
  unsafe_useFormControl as useFormControl,
  unsafe_usePrompt as usePrompt,
  unsafe_useToast as useToast,
  // react-utils
  useTheme,
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
  Checkbox,
  CircularProgress,
  ConfirmProvider,
  ErrorMessage,
  FieldMessage,
  Fieldset,
  Legend,
  Flex,
  FlexItem,
  FormControlProvider,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Input,
  Label,
  MenuProvider,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  ProgressBar,
  PromptProvider,
  Portal,
  Radio,
  Show,
  Select,
  Option,
  Skeleton,
  Table,
  Textarea,
  Toggle,
  ToggleButton,
  Caption,
  THead,
  TH,
  TBody,
  TR,
  TD,
  Tag,
  TextLink,
  ToastProvider,
  useConfirm,
  useFormControl,
  usePrompt,
  useToast,
  useTheme,
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
