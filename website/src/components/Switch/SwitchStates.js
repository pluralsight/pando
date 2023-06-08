import React, { useState } from 'react'
import {
  unsafe_FormControlProvider as FormControlProvider,
  unsafe_Label as Label,
  unsafe_Toggle as Toggle,
  unsafe_ToggleButton as ToggleButton,
} from '@pluralsight/react'
import Container from '../Container/Container.js'

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
      <FormControlProvider readOnly>
        <Toggle>
          <ToggleButton id="checked-example" checked={true} />
          <Label htmlFor="checked-example">Checked</Label>
        </Toggle>
      </FormControlProvider>

      <FormControlProvider readOnly disabled={true}>
        <ToggleButton id="disabled-example" />
        <Label htmlFor="disabled-example">Disabled</Label>
      </FormControlProvider>

      <FormControlProvider readOnly invalid={true}>
        <ToggleButton id="invalid-example" />
        <Label htmlFor="invalid-example">Invalid</Label>
      </FormControlProvider>

      <FormControlProvider readOnly={true}>
        <ToggleButton id="readOnly-example" />
        <Label htmlFor="readOnly-example">Read only</Label>
      </FormControlProvider>

      <FormControlProvider readOnly required={true}>
        <ToggleButton
          id="required-example"
          checked={requiredChecked}
          onClick={handleRequiredChecked}
        />
        <Label htmlFor="required-example">Required</Label>
      </FormControlProvider>
    </Container>
  )
}

export default SwitchStates
