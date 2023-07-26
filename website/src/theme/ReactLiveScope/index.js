import React from 'react'
import {
  getButtonProps,
  getButtonIconOptions,
  getIconProps,
  getPopoverProps,
} from '@pluralsight/headless-styles'
import * as PandoReact from '@pluralsight/react'
import * as Icons from '@pluralsight/icons'

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
}

export default ReactLiveScope
