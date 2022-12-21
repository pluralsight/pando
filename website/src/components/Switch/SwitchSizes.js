import React, { useState } from 'react'
import Container from '../Container/Container'
import Switch from './Switch'

function SwitchSizes() {
  const [checked, setChecked] = useState(false)
  const [twoChecked, setTwoChecked] = useState(false)

  function handleCheck(e) {
    setChecked(e.target.checked)
  }

  function handleTwoCheck(e) {
    setTwoChecked(e.target.checked)
  }

  return (
    <Container>
      <Switch
        checked={checked}
        id="one"
        label="Small switch"
        onClick={handleCheck}
        size="s"
      />
      <Switch
        checked={twoChecked}
        id="two"
        label="Default switch"
        onClick={handleTwoCheck}
      />
    </Container>
  )
}

export default SwitchSizes
