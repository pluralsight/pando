import React, { useState } from 'react'
import {
  unsafe_FormControlProvider as FormControlProvider,
  unsafe_Grid as Grid,
  unsafe_GridItem as GridItem,
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
    <Container>
      <Grid
        cols="1fr 1fr"
        gap={8}
        style={{
          textAlign: 'left',
        }}
      >
        <GridItem>
          <FormControlProvider readOnly>
            <Toggle>
              <ToggleButton id="checked-example" checked={true} />
              <Label htmlFor="checked-example">Checked</Label>
            </Toggle>
          </FormControlProvider>
        </GridItem>

        <GridItem>
          <FormControlProvider readOnly disabled={true}>
            <Toggle>
              <ToggleButton id="disabled-example" />
              <Label htmlFor="disabled-example">Disabled</Label>
            </Toggle>
          </FormControlProvider>
        </GridItem>

        <GridItem>
          <FormControlProvider readOnly invalid={true}>
            <Toggle>
              <ToggleButton id="invalid-example" />
              <Label htmlFor="invalid-example">Invalid</Label>
            </Toggle>
          </FormControlProvider>
        </GridItem>

        <GridItem>
          <FormControlProvider readOnly={true}>
            <Toggle>
              <ToggleButton id="readOnly-example" />
              <Label htmlFor="readOnly-example">Read only</Label>
            </Toggle>
          </FormControlProvider>
        </GridItem>

        <GridItem>
          <FormControlProvider readOnly required={true}>
            <Toggle>
              <ToggleButton
                id="required-example"
                checked={requiredChecked}
                onClick={handleRequiredChecked}
              />
              <Label htmlFor="required-example">Required</Label>
            </Toggle>
          </FormControlProvider>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default SwitchStates
