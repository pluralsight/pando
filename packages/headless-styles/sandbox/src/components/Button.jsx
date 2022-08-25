import { useEffect } from 'react'
import { PlaceholderIcon } from '@pluralsight/icons'
import { getIconProps, getButtonProps, getJSButtonProps } from '../../../src'

function ButtonEl(props) {
  const { children, ...btnOptions } = props
  const btnProps = getButtonProps(btnOptions)
  const icon = btnOptions.icon

  return (
    <button {...btnProps.button}>
      {icon === 'start' && (
        <PlaceholderIcon {...getIconProps(btnProps.iconOptions)} />
      )}

      {props.children}

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
        <ButtonEl size="m">Action</ButtonEl>
        <ButtonEl sentiment="default" size="m">
          Default
        </ButtonEl>
        <ButtonEl sentiment="danger" size="m">
          Danger
        </ButtonEl>
      </div>

      <div className="App-container">
        <ButtonEl>Filled</ButtonEl>
        <ButtonEl sentiment="default" usage="outline">
          Outline
        </ButtonEl>
        <ButtonEl sentiment="danger" usage="text">
          Text
        </ButtonEl>
      </div>
      <div className="App-container">
        <ButtonEl size="m">Filled</ButtonEl>
        <ButtonEl usage="outline" size="m">
          Outline
        </ButtonEl>
        <ButtonEl usage="text" size="m">
          Text
        </ButtonEl>
      </div>

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
    </div>
  )
}
