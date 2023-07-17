import React from 'react'
import {
  getButtonProps,
  getButtonIconOptions,
  getIconProps,
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
}

export default ReactLiveScope
