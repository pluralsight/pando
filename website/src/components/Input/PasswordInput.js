import React, { useState } from 'react'
import {
  getIconButtonProps,
  getFormControlProps,
  getIconProps,
  getInputProps,
} from '@pluralsight/headless-styles'
import { EyeIcon, EyeOffIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

const btnStyle = {
  position: 'absolute',
  right: '0.3rem',
  top: '0.5rem',
  zIndex: '100',
}

function PasswordInput() {
  const [show, setShow] = useState(false)
  const [password, setPassword] = useState('')
  const { fieldOptions } = getFormControlProps()
  const inputProps = getInputProps({
    ...fieldOptions,
    id: 'password',
    name: 'user_password',
    placeholder: 'Basic input',
    type: show ? 'text' : 'password',
    value: password,
  })
  const { button, iconOptions } = getIconButtonProps({
    ariaLabel: 'Show password',
    usage: 'text',
  })

  function handleChange(e) {
    setPassword(e.target.value)
  }

  function handleToggleShow() {
    setShow((prev) => !prev)
  }

  return (
    <Container>
      <div {...inputProps.inputWrapper}>
        <input {...inputProps.input} onChange={handleChange} />
        <button {...button} style={btnStyle}>
          <span {...getIconProps(iconOptions)} onClick={handleToggleShow}>
            {show ? <EyeIcon /> : <EyeOffIcon />}
          </span>
        </button>
      </div>
    </Container>
  )
}

export default PasswordInput
