import { getIconButtonProps, getIconProps } from '../../../src'
import { PlaceholderIcon } from '@pluralsight/icons'

function PSIconButton(props) {
  const buttonProps = getIconButtonProps({ ...props, ariaLabel: 'button' })

  return (
    <button {...buttonProps.button}>
      <PlaceholderIcon {...getIconProps(buttonProps.iconOptions)} />
    </button>
  )
}

export default function IconButton() {
  return (
    <div id="icon-button">
      <h3>Icon Button</h3>
      <div className="App-container">
        <PSIconButton sentiment="action" usage="square" />
        <PSIconButton sentiment="action" usage="round" disabled />
        <PSIconButton sentiment="action" usage="text" />
        <PSIconButton sentiment="action" usage="text" disabled />

        <PSIconButton sentiment="default" usage="square" disabled />
        <PSIconButton sentiment="default" usage="round" />
        <PSIconButton sentiment="default" usage="text" />

        <PSIconButton sentiment="danger" usage="square" disabled />
        <PSIconButton sentiment="danger" usage="round" />
        <PSIconButton sentiment="danger" usage="text" />
      </div>

      <div className="App-container">
        <PSIconButton size="m" />
        <PSIconButton sentiment="action" usage="round" size="m" />
        <PSIconButton sentiment="action" usage="text" size="m" />
        <PSIconButton sentiment="default" usage="square" size="m" />
        <PSIconButton sentiment="default" usage="round" size="m" />
        <PSIconButton sentiment="default" usage="text" size="m" />
        <PSIconButton sentiment="default" usage="text" size="m" disabled />
      </div>
    </div>
  )
}
