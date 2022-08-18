import { useEffect } from 'react'
import {
  getAlertProps,
  getIconProps,
  getIconButtonProps,
  getJSAlertProps,
} from '../../../src'
import { CloseIcon, InfoCircleIcon } from '@pluralsight/icons'

function AlertEl(props) {
  const alert = getAlertProps({ kind: props.kind })
  const { button, iconOptions } = getIconButtonProps(alert.iconButtonOptions)

  return (
    <div {...alert.wrapper}>
      <span {...alert.iconWrapper}>
        <InfoCircleIcon {...getIconProps(alert.iconOptions)} />
      </span>
      <div {...alert.textContainer}>
        <strong>
          <p {...alert.title}>{props.alertTitle}</p>
        </strong>
        <small {...alert.description}>{props.description}</small>
      </div>
      {props.showButton && (
        <button {...button}>
          <CloseIcon {...getIconProps(iconOptions)} />
        </button>
      )}
    </div>
  )
}

export default function Alert({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log({ ...getJSAlertProps({ kind: 'danger' }) })
    }
  }, [logJS])

  return (
    <div id="alert">
      <h3>Alert</h3>
      <div className="App-container column">
        <AlertEl
          alertTitle="Info alert"
          description="This is an example info alert about some information."
        />
        <br />
        <AlertEl
          alertTitle="Info alert"
          description="This is an example has a close button."
          showButton
        />
        <br />
        <AlertEl
          alertTitle="Success alert"
          description="Your information was saved."
          kind="success"
        />
        <br />
        <AlertEl
          alertTitle="Warning alert"
          description="Your changes have not been saved. Proceed with caution."
          kind="warning"
        />
        <br />
        <AlertEl
          alertTitle="Danger alert"
          description="Your file has been permanently deleted."
          kind="danger"
        />
      </div>
    </div>
  )
}
