import React from 'react'
import {
  Checkbox,
  FormControlProvider,
  Grid,
  GridItem,
} from '@pluralsight/react'
import Container from '../Container/Container.js'

const checkedContent = (
  <GridItem>
    <FormControlProvider readOnly={true}>
      <Checkbox checked={true} id="checked" name="checked">
        Checked
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
      <Checkbox
        checked={true}
        indeterminate={true}
        id="indeterminate"
        name="indeterminate"
      >
        Indeterminate
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
        Disabled
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
        Invalid
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
        Read only
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
        Required
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
