import React from 'react'
import {
  unsafe_Grid as Grid,
  unsafe_GridItem as GridItem,
  unsafe_FormControlProvider as FormControlProvider,
  unsafe_Radio as Radio,
} from '@pluralsight/react'
import Container from '../Container/Container.js'

function CheckedRadio() {
  return (
    <FormControlProvider readOnly={true}>
      <GridItem col="1 / span 6">
        <Radio checked={true} id="checked">
          Checked
        </Radio>
      </GridItem>
    </FormControlProvider>
  )
}

function DisabledRadio() {
  return (
    <FormControlProvider disabled={true}>
      <GridItem col="1 / span 6">
        <Radio id="disabled">Disabled</Radio>
      </GridItem>
    </FormControlProvider>
  )
}

function InvalidRadio() {
  return (
    <FormControlProvider invalid={true} readOnly={true}>
      <GridItem col="1 / span 6">
        <Radio checked={true} id="invalid" label="Invalid">
          Invalid
        </Radio>
      </GridItem>
    </FormControlProvider>
  )
}

function ReadOnlyRadio() {
  return (
    <FormControlProvider readOnly={true}>
      <GridItem col="1 / span 6">
        <Radio id="readOnly">Read only</Radio>
      </GridItem>
    </FormControlProvider>
  )
}

function RequiredRadio() {
  return (
    <FormControlProvider required={true}>
      <GridItem col="1 / span 6">
        <Radio id="required">Required</Radio>
      </GridItem>
    </FormControlProvider>
  )
}

function RadioStates() {
  return (
    <Container>
      <Grid data-site-override="initialTextAlign" cols={12} gap={16}>
        <CheckedRadio />
        <DisabledRadio />
        <InvalidRadio />
        <ReadOnlyRadio />
        <RequiredRadio />
      </Grid>
    </Container>
  )
}

export default RadioStates
