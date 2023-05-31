import React from 'react'
import {
  unsafe_Grid as Grid,
  unsafe_GridItem as GridItem,
  unsafe_FormControlProvider as FormControlProvider,
} from '@pluralsight/react'
import Container from '../Container/Container.js'
import Radio from './Radio.js'

function CheckedRadio() {
  return (
    <FormControlProvider>
      <GridItem col="1 / span 6">
        <Radio checked={true} id="checked" label="Checked" />
      </GridItem>
    </FormControlProvider>
  )
}

function DisabledRadio() {
  return (
    <FormControlProvider disabled={true}>
      <GridItem col="1 / span 6">
        <Radio id="disabled" label="Disabled" />
      </GridItem>
    </FormControlProvider>
  )
}

function InvalidRadio() {
  return (
    <FormControlProvider invalid={true}>
      <GridItem col="1 / span 6">
        <Radio id="invalid" label="Invalid" />
      </GridItem>
    </FormControlProvider>
  )
}

function ReadOnlyRadio() {
  return (
    <FormControlProvider readOnly={true}>
      <GridItem col="1 / span 6">
        <Radio id="readOnly" label="Read only" />
      </GridItem>
    </FormControlProvider>
  )
}

function RequiredRadio() {
  return (
    <FormControlProvider required={true}>
      <GridItem col="1 / span 6">
        <Radio id="required" label="Required" />
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
