import React, { useState } from 'react'
import {
  getFieldMessageProps,
  getFormControlProps,
  getFormLabelProps,
  getInputProps,
} from '@pluralsight/headless-styles'

export default function Field(props) {
  const [email, setEmail] = useState('')
  const { fieldOptions } = getFormControlProps()
  const { value, ...labelProps } = getFormLabelProps({
    ...fieldOptions,
    htmlFor: props.id,
    value: props.label,
  })
  const { value: helpText, ...message } = getFieldMessageProps({
    id: `${props.id}-help`,
    message: props.helpMessage,
  })
  const inputProps = getInputProps({
    ...fieldOptions,
    describedBy: message.id,
    id: props.id,
    name: props.formName,
    placeholder: props.placeholder,
    type: props.type,
    value: email,
  })

  function handleChange(e) {
    setEmail(e.target.value)
  }

  return (
    <div>
      <label
        {...labelProps}
        style={{
          marginInlineEnd: 'initial',
          width: '100%',
        }}
      >
        {value}
      </label>
      <div {...inputProps.inputWrapper}>
        <input {...inputProps.input} {...props} onChange={handleChange} />
      </div>
      <small {...message}>{helpText}</small>
    </div>
  )
}
