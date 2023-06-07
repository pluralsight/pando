import React from 'react'
import {
  unsafe_Checkbox as Checkbox,
  unsafe_FormControlProvider as FormControlProvider,
  unsafe_Grid as Grid,
  unsafe_GridItem as GridItem,
  unsafe_Label as Label,
} from '@pluralsight/react'
import Container from '../Container/Container.js'

const checkedContent = (
  <GridItem>
    <FormControlProvider readOnly={true}>
      <Checkbox checked={true} id="checked" name="checked">
        <Label htmlFor="checked">Checked</Label>
      </Checkbox>
    </FormControlProvider>
  </GridItem>
)

function Checked() {
  return checkedContent
}

const indeterminateContent = (
  <GridItem>
    <FormControlProvider readOnly={true}>
      <Checkbox indeterminate={true} id="indeterminate" name="indeterminate">
        <Label htmlFor="indeterminate">Indeterminate</Label>
      </Checkbox>
    </FormControlProvider>
  </GridItem>
)

function Indeterminate() {
  return indeterminateContent
}

const disabledContent = (
  <GridItem>
    <FormControlProvider readOnly={true} disabled={true}>
      <Checkbox checked={true} id="disabled" name="disabled">
        <Label htmlFor="disabled">Disabled</Label>
      </Checkbox>
    </FormControlProvider>
  </GridItem>
)

function Disabled() {
  return disabledContent
}

const invalidContent = (
  <GridItem>
    <FormControlProvider readOnly={true} invalid={true}>
      <Checkbox checked={true} id="invalid" name="invalid">
        <Label htmlFor="invalid">Invalid</Label>
      </Checkbox>
    </FormControlProvider>
  </GridItem>
)

function Invalid() {
  return invalidContent
}

const readOnlyContent = (
  <GridItem>
    <FormControlProvider readOnly={true}>
      <Checkbox checked={true} id="readOnly" name="readOnly">
        <Label htmlFor="readOnly">Read only</Label>
      </Checkbox>
    </FormControlProvider>
  </GridItem>
)

function ReadOnly() {
  return readOnlyContent
}

const requiredContent = (
  <GridItem>
    <FormControlProvider readOnly={true} required={true}>
      <Checkbox checked={true} id="required" name="required">
        <Label htmlFor="required">Required</Label>
      </Checkbox>
    </FormControlProvider>
  </GridItem>
)

function Required() {
  return requiredContent
}

function CheckboxStates() {
  return (
    <Container>
      <Grid
        cols="1fr 1fr"
        gap={0}
        style={{
          textAlign: 'left',
        }}
      >
        <Checked />
        <Disabled />
        <Invalid />
        <ReadOnly />
        <Required />
        <Indeterminate />
      </Grid>
    </Container>
  )
}

export default CheckboxStates
