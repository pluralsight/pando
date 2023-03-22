import { useEffect, useMemo } from 'react'
import { PlaceholderIcon } from '@pluralsight/icons'
import {
  getIconProps,
  getButtonProps,
  getJSButtonProps,
} from '@pluralsight/headless-styles'

function ButtonEl(props) {
  const { children, ...btnOptions } = props
  const btnProps = getButtonProps(btnOptions)
  const icon = btnOptions.icon

  return (
    <button {...btnProps.button}>
      {icon === 'start' && (
        <PlaceholderIcon {...getIconProps(btnProps.iconOptions)} />
      )}

      {children}

      {icon === 'end' && (
        <PlaceholderIcon {...getIconProps(btnProps.iconOptions)} />
      )}
    </button>
  )
}

function JSButton(props) {
  const { children, disabled, ...btnOptions } = props
  const btnProps = getJSButtonProps(btnOptions)
  const icon = btnOptions.icon
  const styles = useMemo(() => {
    if (disabled) {
      return {
        ...btnProps.button.styles,
        ...btnProps.button.styles['&:disabled'],
      }
    }

    return btnProps.button.styles
  }, [btnProps.button.styles, disabled])

  return (
    <button style={styles} disabled={disabled}>
      {icon === 'start' && (
        <PlaceholderIcon {...getIconProps(btnProps.iconOptions)} />
      )}

      {children}

      {icon === 'end' && (
        <PlaceholderIcon {...getIconProps(btnProps.iconOptions)} />
      )}
    </button>
  )
}

export default function Button(props) {
  useEffect(() => {
    if (props.logJS) {
      console.log({
        ...getJSButtonProps({
          size: 'm',
        }),
      })
    }
  }, [props.logJS])

  return (
    <div id="button">
      <h3>Button</h3>
      <div className="App-container">
        <ButtonEl>Action</ButtonEl>
        <ButtonEl sentiment="default">Default</ButtonEl>
        <ButtonEl sentiment="danger">Danger</ButtonEl>
      </div>
      <div className="App-container">
        <ButtonEl disabled>Action</ButtonEl>
        <ButtonEl sentiment="default" disabled>
          Default
        </ButtonEl>
        <ButtonEl sentiment="danger" disabled>
          Danger
        </ButtonEl>
      </div>
      <div className="App-container">
        <ButtonEl sentiment="action" usage="outline">
          Action
        </ButtonEl>
        <ButtonEl sentiment="default" usage="outline">
          Default
        </ButtonEl>
        <ButtonEl sentiment="danger" usage="outline">
          Danger
        </ButtonEl>
      </div>
      <div className="App-container">
        <ButtonEl sentiment="action" usage="text">
          Action
        </ButtonEl>
        <ButtonEl sentiment="default" usage="text">
          Default
        </ButtonEl>
        <ButtonEl sentiment="danger" usage="text">
          Danger
        </ButtonEl>
      </div>

      <h4>Sizes</h4>
      <div className="App-container">
        <ButtonEl size="m">Action</ButtonEl>
        <ButtonEl sentiment="default" size="m">
          Default
        </ButtonEl>
        <ButtonEl sentiment="danger" size="m">
          Danger
        </ButtonEl>
      </div>
      <div className="App-container">
        <ButtonEl size="m">Filled</ButtonEl>
        <ButtonEl sentiment="default" usage="outline" size="m">
          Outline
        </ButtonEl>
        <ButtonEl sentiment="danger" usage="text" size="m">
          Text
        </ButtonEl>
      </div>

      <h4>With Icons</h4>
      <div className="App-container">
        <ButtonEl icon="start">Action</ButtonEl>
        <ButtonEl icon="end" sentiment="default">
          Default
        </ButtonEl>
        <ButtonEl icon="start" sentiment="danger">
          Danger
        </ButtonEl>
      </div>
      <div className="App-container">
        <ButtonEl icon="start" size="m">
          Action
        </ButtonEl>
        <ButtonEl icon="end" sentiment="default" size="m">
          Default
        </ButtonEl>
        <ButtonEl icon="start" sentiment="danger" size="m">
          Danger
        </ButtonEl>
      </div>

      <h3>JS API</h3>
      <div className="App-container">
        <JSButton>Action</JSButton>
        <JSButton sentiment="default">Default</JSButton>
        <JSButton sentiment="danger">Danger</JSButton>
      </div>

      <div className="App-container">
        <JSButton disabled>Action</JSButton>
        <JSButton sentiment="default" disabled>
          Default
        </JSButton>
        <JSButton sentiment="danger" disabled>
          Danger
        </JSButton>
      </div>

      <div className="App-container">
        <JSButton size="m">Action</JSButton>
        <JSButton sentiment="default" size="m">
          Default
        </JSButton>
        <JSButton sentiment="danger" size="m">
          Danger
        </JSButton>
      </div>
    </div>
  )
}
