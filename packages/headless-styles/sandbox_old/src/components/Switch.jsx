import { useState } from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
  getSwitchProps,
} from '../../../src'

function SwitchField(props) {
  const { labelSide = 'before', ...restProps } = props
  const { control, fieldOptions } = getFormControlProps(restProps)
  const switchProps = getSwitchProps({ ...restProps, ...fieldOptions })

  return (
    <div {...control}>
      <div {...switchProps.wrapper}>
        {labelSide === 'before' && (
          <label
            {...getFormLabelProps({ htmlFor: props.id, size: props.size })}
          >
            {props.label}
          </label>
        )}
        <label {...switchProps.switchContainer}>
          <input {...switchProps.input} onChange={props.onClick} />
          <span {...switchProps.switchTrack}>
            <span {...switchProps.switchThumb} />
          </span>
        </label>
        {labelSide === 'after' && (
          <label
            {...getFormLabelProps({ htmlFor: props.id, size: props.size })}
          >
            {props.label}
          </label>
        )}
      </div>
    </div>
  )
}

export default function Switch() {
  const [email, setEmail] = useState(false)

  function handleClick(e) {
    setEmail(e.target.checked)
  }

  return (
    <div id="switch">
      <h3>Switch</h3>
      <div className="App-container">
        <SwitchField
          id="email-alerts"
          label="Email alerts"
          onClick={handleClick}
          checked={email}
        />
        <SwitchField
          disabled={true}
          id="disabled-alerts"
          label="Disabled alerts"
          onClick={handleClick}
        />
        <SwitchField
          invalid={true}
          id="invalid-alerts"
          label="Invalid alerts"
          onClick={handleClick}
          checked={email}
        />
      </div>
      <div className="App-container">
        <SwitchField
          id="s-alerts"
          label="Small alerts"
          onClick={handleClick}
          size="s"
          checked={email}
        />
        <SwitchField
          disabled={true}
          id="disabled-alerts"
          label="Disabled alerts"
          onClick={handleClick}
          size="s"
        />
      </div>
      <div className="App-container">
        <SwitchField
          id="email-alerts"
          label="Label after"
          labelSide="after"
          onClick={handleClick}
          checked={email}
        />
        <SwitchField
          id="s-alerts"
          label="Small label after"
          labelSide="after"
          onClick={handleClick}
          size="s"
          checked={email}
        />
      </div>
    </div>
  )
}
