import React, { useState } from 'react'
import Container from '../Container/Container'
import Switch from './Switch'

function BasicSwitch() {
  const [checked, setChecked] = useState(false)

  function handleCheck(e) {
    setChecked(e.target.checked)
  }

  return (
    <Container>
      <Switch
        id="email"
        label="Email alerts"
        checked={checked}
        onClick={handleCheck}
      />
    </Container>
  )
}

export default BasicSwitch
