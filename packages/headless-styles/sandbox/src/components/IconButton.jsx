import { useEffect } from 'react'
import {
  getIconButtonProps,
  getIconProps,
  // getJSIconButtonProps,
} from '../../../src'
import { PlaceholderIcon } from '@pluralsight/icons'

function PSIconButton(props) {
  const buttonProps = getIconButtonProps({ ...props, ariaLabel: 'button' })

  return (
    <button {...buttonProps.button}>
      <PlaceholderIcon {...getIconProps(buttonProps.iconOptions)} />
    </button>
  )
}

export default function IconButton({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log({
        ...getJSIconButtonProps({
          ariaLabel: 'button',
          sentiment: 'default',
          usage: 'round',
          size: 'm',
        }),
      })
    }
  }, [logJS])

  return (
    <div id="icon-button">
      <h3>Icon Button</h3>
      <div className="App-container">
        <PSIconButton />
        <PSIconButton sentiment="action" usage="round" />
        <PSIconButton sentiment="action" usage="text" />
        <PSIconButton sentiment="default" usage="square" />
        <PSIconButton sentiment="default" usage="round" />
        <PSIconButton sentiment="default" usage="text" />
      </div>

      <div className="App-container">
        <PSIconButton size="m" />
        <PSIconButton sentiment="action" usage="round" size="m" />
        <PSIconButton sentiment="action" usage="text" size="m" />
        <PSIconButton sentiment="default" usage="square" size="m" />
        <PSIconButton sentiment="default" usage="round" size="m" />
        <PSIconButton sentiment="default" usage="text" size="m" />
      </div>
    </div>
  )
}
