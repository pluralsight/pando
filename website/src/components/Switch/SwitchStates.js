import React, { useState } from 'react'
import Container from '../Container/Container'
import Switch from './Switch'

function SwitchStates() {
  const [requiredChecked, setRequiredChecked] = useState(false)

  function handleRequiredChecked(e) {
    setRequiredChecked(e.target.checked)
  }

  return (
    <Container
      type="grid"
      gridColumns="2"
      columnGap="5rem"
      justifyContent="start"
    >
      <Switch id="checked-example" label="checked:" checked={true} />
      <Switch id="disabled-example" label="disabled:" disabled={true} />
      <Switch id="invalid-example" label="invalid:" invalid={true} />
      <Switch id="readonly-example" label="readonly:" readonly={true} />
      <Switch
        id="required-example"
        label="required:"
        required={true}
        checked={requiredChecked}
        onClick={handleRequiredChecked}
      />
    </Container>
  )
}

export default SwitchStates
