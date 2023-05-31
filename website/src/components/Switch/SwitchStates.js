import React, { useState } from 'react'
import { unsafe_FormControlProvider as FormControlProvider } from '@pluralsight/react'
import Container from '../Container/Container.js'
import Switch from './Switch.js'

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
      <FormControlProvider>
        <Switch id="checked-example" label="Checked" checked={true} />
      </FormControlProvider>

      <FormControlProvider disabled={true}>
        <Switch id="disabled-example" label="Disabled" />
      </FormControlProvider>

      <FormControlProvider invalid={true}>
        <Switch id="invalid-example" label="Invalid" />
      </FormControlProvider>

      <FormControlProvider readOnly={true}>
        <Switch id="readOnly-example" label="Read only" />
      </FormControlProvider>

      <FormControlProvider required={true}>
        <Switch
          id="required-example"
          label="Required"
          checked={requiredChecked}
          onClick={handleRequiredChecked}
        />
      </FormControlProvider>
    </Container>
  )
}

export default SwitchStates
