import React from 'react'
import {
  getButtonProps,
  getButtonIconOptions,
  getIconProps,
  getPopoverProps,
  getTabsProps,
} from '@pluralsight/headless-styles'
import * as PandoReact from '@pluralsight/react'
import * as Icons from '@pluralsight/icons'
import {
  TabsProvider,
  useTabList,
  useTab,
  usePanelList,
  usePanel,
} from '@pluralsight/react-utils'

const ReactLiveScope = {
  React,
  ...React,
  ...PandoReact,
  ...Icons,
  // headless-styles
  getButtonProps,
  getButtonIconOptions,
  getIconProps,
  getPopoverProps,
  getTabsProps,
  // react-utils
  TabsProvider,
  useTabList,
  useTab,
  usePanelList,
  usePanel,
}

export default ReactLiveScope
