import React from 'react'
import { unsafe_FormControlProvider as FormControlProvider } from '@pluralsight/react'
import Container from '../Container/Container.js'
import Checkbox from './Checkbox.js'

const controlStyles = {
  justifyContent: 'space-between',
  width: '100%',
}

function Checked() {
  return (
    <FormControlProvider>
      <div style={{ ...controlStyles }}>
        <Checkbox checked={true} id="checked" label="Checked" />
      </div>
    </FormControlProvider>
  )
}

function Indeterminate() {
  return (
    <FormControlProvider>
      <div style={{ ...controlStyles }}>
        <Checkbox
          checked={true}
          indeterminate={true}
          id="indeterminate"
          label="Indeterminate"
        />
      </div>
    </FormControlProvider>
  )
}

function Disabled() {
  return (
    <FormControlProvider disabled={true}>
      <div style={{ ...controlStyles }}>
        <Checkbox checked={true} id="disabled" label="Disabled" />
      </div>
    </FormControlProvider>
  )
}

function Invalid() {
  return (
    <FormControlProvider invalid={true}>
      <div style={{ ...controlStyles }}>
        <Checkbox checked={true} id="invalid" label="Invalid" />
      </div>
    </FormControlProvider>
  )
}

function ReadOnly() {
  return (
    <FormControlProvider readOnly={true}>
      <div style={{ ...controlStyles }}>
        <Checkbox checked={true} id="readOnly" label="Read only" />
      </div>
    </FormControlProvider>
  )
}

function Required() {
  return (
    <FormControlProvider required={true}>
      <div style={{ ...controlStyles }}>
        <Checkbox checked={true} id="required" label="Required" />
      </div>
    </FormControlProvider>
  )
}

function CheckboxStates() {
  return (
    <Container>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem 5rem',
          width: '75%',
        }}
      >
        <Checked />
        <Disabled />
        <Invalid />
        <ReadOnly />
        <Required />
        <Indeterminate />
      </div>
    </Container>
  )
}

export default CheckboxStates
