import { useState, useEffect } from 'react'
import { CalendarIcon, WarningTriangleFilledIcon } from '@pluralsight/icons'
import {
  getErrorMessageProps,
  getFieldMessageProps,
  getFormControlProps,
  getFormLabelProps,
  getIconProps,
  getInputProps,
  getJSInputProps,
} from '../../../src'
import { useAutoFormatDate } from '../../../../react-utils/src/index.ts'

function InputField(props) {
  const { onChange, kind, ...options } = props
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
          <input {...input} onChange={onChange} value={value} />
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

function JSInputField(props) {
  const { onChange, kind, ...options } = props
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
  const inputProps = getJSInputProps({
    kind,
    ...options,
    ...fieldOptions,
    describedBy: `${error.container.id},${fieldMessage.id}`,
  })

  return (
    <div style={{ width: '100%', marginBottom: '1rem' }}>
      <label {...labelProps}>{labelProps.value}</label>
      <div style={inputProps.inputWrapper.styles}>
        {kind === 'icon' && (
          <span style={inputProps.iconWrapper.styles}>
            <CalendarIcon {...getIconProps(inputProps.iconOptions)} />
          </span>
        )}
        {onChange ? (
          <input
            {...inputProps.input.a11yProps}
            style={inputProps.input.styles}
            onChange={onChange}
          />
        ) : (
          <input
            style={inputProps.input.styles}
            defaultValue={props.defaultValue}
          />
        )}
        {fieldOptions.invalid && (
          <span style={inputProps.invalidIconWrapper.styles}>
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
      onChange={props.onChange}
      placeholder={props.placeholder}
      name="birthday"
      label="Birthday"
      required
      type="text"
      value={props.value}
    />
  )
}

export default function Input({ logJS }) {
  const [email, setEmail] = useState('')

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  useEffect(() => {
    if (logJS) {
      console.log(
        getJSInputProps({
          id: 'test',
          name: 'test-name',
          value: 'hello',
        })
      )
    }
  }, [logJS])

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

      <div className="App-container column">
        <h3>JS API</h3>
        <JSInputField
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
        <JSInputField
          disabled
          htmlFor="email"
          id="one"
          onChange={handleEmailChange}
          placeholder="Enter email"
          name="email"
          label="Disabled Input"
          value={email}
        />
        <JSInputField
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
        <JSInputField
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
        <JSInputField
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
        <JSInputField
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
      </div>
    </div>
  )
}
