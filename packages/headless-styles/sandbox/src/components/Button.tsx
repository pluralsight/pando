import React, { type HTMLAttributes, type PropsWithChildren } from 'react'
import { PlaceholderIcon } from '@pluralsight/icons'
import {
  getIconProps,
  getButtonProps,
  getButtonIconOptions,
} from '@pluralsight/headless-styles'
import type { ButtonOptions } from '@pluralsight/headless-styles/types'

interface ButtonProps
  extends ButtonOptions,
    HTMLAttributes<HTMLButtonElement> {}

function Button(props: PropsWithChildren<ButtonProps>) {
  const { children, size, sentiment, usage, disabled, ...nativeProps } = props
  const btnProps = getButtonProps({
    disabled,
    size,
    sentiment,
    usage,
  })

  return (
    <button {...btnProps} {...nativeProps}>
      {children}
    </button>
  )
}

export default function ButtonPage() {
  return (
    <div id="button">
      <h3>Button</h3>
      <div className="App-container">
        <Button>Action</Button>
        <Button sentiment="default">Default</Button>
        <Button sentiment="danger">Danger</Button>
      </div>
      <div className="App-container">
        <Button disabled>Action</Button>
        <Button sentiment="default" disabled>
          Default
        </Button>
        <Button sentiment="danger" disabled>
          Danger
        </Button>
      </div>
      <div className="App-container">
        <Button sentiment="action" usage="outline">
          Action
        </Button>
        <Button sentiment="default" usage="outline">
          Default
        </Button>
        <Button sentiment="danger" usage="outline">
          Danger
        </Button>
      </div>
      <div className="App-container">
        <Button sentiment="action" usage="text">
          Action
        </Button>
        <Button sentiment="default" usage="text">
          Default
        </Button>
        <Button sentiment="danger" usage="text">
          Danger
        </Button>
      </div>

      <h4>Sizes</h4>
      <div className="App-container">
        <Button size="m">Action</Button>
        <Button sentiment="default" size="m">
          Default
        </Button>
        <Button sentiment="danger" size="m">
          Danger
        </Button>
      </div>
      <div className="App-container">
        <Button size="m">Filled</Button>
        <Button sentiment="default" usage="outline" size="m">
          Outline
        </Button>
        <Button sentiment="danger" usage="text" size="m">
          Text
        </Button>
      </div>

      <h4>With Icons</h4>
      <div className="App-container">
        <Button>
          <PlaceholderIcon {...getIconProps(getButtonIconOptions())} />
          Action
        </Button>
        <Button sentiment="default">
          <PlaceholderIcon {...getIconProps(getButtonIconOptions())} />
          Default
        </Button>
        <Button sentiment="danger">
          Danger
          <PlaceholderIcon {...getIconProps(getButtonIconOptions())} />
        </Button>
      </div>
      <div className="App-container">
        <Button size="m">
          Action
          <PlaceholderIcon {...getIconProps(getButtonIconOptions('m'))} />
        </Button>
        <Button sentiment="default" size="m">
          <PlaceholderIcon {...getIconProps(getButtonIconOptions('m'))} />
          Default
        </Button>
        <Button sentiment="danger" size="m">
          Danger
          <PlaceholderIcon {...getIconProps(getButtonIconOptions('m'))} />
        </Button>
      </div>
    </div>
  )
}
