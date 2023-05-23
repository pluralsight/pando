import { useState } from 'react'
import { CalendarIcon, WarningTriangleFilledIcon } from '@pluralsight/icons'
import {
  getErrorMessageProps,
  getFieldMessageProps,
  getFormControlProps,
  getFormLabelProps,
  getIconProps,
  getInputProps,
} from '@pluralsight/headless-styles'
import { useAutoFormatDate } from '@pluralsight/react-utils'

export function SingleInput(props) {
  const { fieldOptions } = getFormControlProps(props)
  const inputProps = getInputProps({
    ...fieldOptions,
    ...props,
  })
  const { value, ...input } = inputProps.input

  return (
    <div {...inputProps.inputWrapper}>
      <input {...input} value={value} onChange={props.onChange} />
      {fieldOptions.invalid && (
        <span {...inputProps.invalidIconWrapper}>
          <WarningTriangleFilledIcon
            {...getIconProps(inputProps.invalidIconOptions)}
          />
        </span>
      )}
    </div>
  )
}

export function InputField(props) {
  const { onChange, onBlur, kind, ...options } = props
  const { fieldOptions } = getFormControlProps(options)
  const labelProps = getFormLabelProps({
    ...fieldOptions,
    htmlFor: options.htmlFor,
    value: options.label,
  })
  const error = getErrorMessageProps({
    ...fieldOptions,
    id: 'bad:input',
    message: props.errorMessage,
  })
  const { value: helpText, ...fieldMessage } = getFieldMessageProps({
    ...fieldOptions,
    id: 'input:help',
    message: props.helpText,
  })
  const inputProps = getInputProps({
    kind,
    ...options,
    ...fieldOptions,
    describedBy: `${error.container.id},${fieldMessage.id}`,
  })
  const { value, ...input } = inputProps.input

  return (
    <div style={{ width: '100%', marginBottom: '1rem' }}>
      <label {...labelProps}>{labelProps.value}</label>
      <div {...inputProps.inputWrapper}>
        {inputProps.iconOptions && (
          <span {...inputProps.iconWrapper}>
            <CalendarIcon {...getIconProps(inputProps.iconOptions)} />
          </span>
        )}
        {onChange ? (
          <input {...input} onInput={onChange} onBlur={onBlur} value={value} />
        ) : (
          <input {...input} defaultValue={props.defaultValue} />
        )}
        {fieldOptions.invalid && (
          <span {...inputProps.invalidIconWrapper}>
            <WarningTriangleFilledIcon
              {...getIconProps(inputProps.invalidIconOptions)}
            />
          </span>
        )}
      </div>
      {props.helpText && !fieldOptions.invalid && (
        <small {...fieldMessage}>{helpText}</small>
      )}
      {fieldOptions.invalid && (
        <div {...error.container}>
          <small {...error.message}>{error.message.value}</small>
        </div>
      )}
    </div>
  )
}

function DateInput() {
  const props = useAutoFormatDate()

  return (
    <InputField
      htmlFor="birthday"
      id="birthday"
      kind="icon"
      name="birthday"
      label="Birthday"
      required
      type="text"
      {...props}
    />
  )
}

export default function Input() {
  const [email, setEmail] = useState('')

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  return (
    <div id="input">
      <h3>Input</h3>
      <div className="App-container column">
        <InputField
          htmlFor="email"
          id="one"
          onChange={handleEmailChange}
          placeholder="Enter email"
          name="email"
          label="Email"
          required
          type="email"
          value={email}
        />
        <InputField
          disabled
          htmlFor="email"
          id="one"
          onChange={handleEmailChange}
          placeholder="Enter email"
          name="email"
          label="Disabled Input"
          value={email}
        />
        <InputField
          errorMessage="An email address is required."
          htmlFor="email"
          id="one"
          invalid
          onChange={handleEmailChange}
          placeholder="Enter email"
          name="email"
          label="Invalid Email"
          value={email}
        />
        <InputField
          defaultValue="Hello there"
          helpText="We won't share your email."
          htmlFor="email"
          id="one"
          placeholder="Enter email"
          name="email"
          label="Readonly Email"
          readOnly
          type="email"
        />
        <InputField
          defaultValue="Hello there"
          htmlFor="email"
          id="one"
          placeholder="Enter email"
          name="email"
          label="Medium Email"
          size="m"
          type="email"
          invalid
        />
        <InputField
          defaultValue="Hello there"
          htmlFor="email"
          id="one"
          kind="icon"
          placeholder="Enter email"
          name="email"
          label="Medium Email with Icon"
          size="m"
          type="email"
          invalid
        />
        <DateInput />
      </div>
    </div>
  )
}
