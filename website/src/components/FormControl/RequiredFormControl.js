import React, { useState } from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
  getInputProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'

const formId = 'required'
const formName = 'required-example'

function RequiredFormControl() {
  const [email, setEmail] = useState('')
  const { fieldOptions } = getFormControlProps({
    required: true,
  })
  const { value, ...labelProps } = getFormLabelProps({
    ...fieldOptions,
    htmlFor: formId,
    value: 'Email alerts',
  })
  const inputProps = getInputProps({
    ...fieldOptions,
    id: formId,
    name: formName,
    placeholder: 'email@example.com',
    type: 'email',
    value: email,
  })

  function handleChange(e) {
    setEmail(e.target.value)
  }

  return (
    <Container>
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
          <input {...inputProps.input} onChange={handleChange} />
        </div>
      </div>
    </Container>
  )
}

export default RequiredFormControl
