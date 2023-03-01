import React, { useState } from 'react'
import {
  getFormLabelProps,
  getFormControlProps,
  getGridProps,
  getGridItemProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import Radio from './Radio'

function Label(props) {
  const { value, ...labelProps } = getFormLabelProps(props)
  return (
    <label {...labelProps} style={{ display: 'initial' }}>
      {value}
    </label>
  )
}

function CheckedRadio() {
  const { control, fieldOptions } = getFormControlProps()

  return (
    <div {...control} {...getGridItemProps({ colSpan: 6 })}>
      <Label htmlFor="checked-example" value="checked:" />
      <Radio {...fieldOptions} checked={true} />
    </div>
  )
}

function DisabledRadio() {
  const { control, fieldOptions } = getFormControlProps({
    disabled: true,
  })

  return (
    <div {...control} {...getGridItemProps({ colSpan: 6 })}>
      <Label htmlFor="disabled-example" value="disabled:" />
      <Radio {...fieldOptions} />
    </div>
  )
}

function InvalidRadio() {
  const { control, fieldOptions } = getFormControlProps({
    invalid: true,
  })

  return (
    <div {...control} {...getGridItemProps({ colSpan: 6 })}>
      <Label htmlFor="invalid-example" value="invalid:" />
      <Radio {...fieldOptions} checked={true} />
    </div>
  )
}

function ReadOnlyRadio() {
  const { control, fieldOptions } = getFormControlProps({
    readOnly: true,
  })

  return (
    <div {...control} {...getGridItemProps({ colSpan: 6 })}>
      <Label htmlFor="readOnly-example" value="readOnly:" />
      <Radio {...fieldOptions} />
    </div>
  )
}

function RequiredRadio(props) {
  const { control, fieldOptions } = getFormControlProps({
    required: true,
  })

  return (
    <div {...control} {...getGridItemProps({ colSpan: 6 })}>
      <Label htmlFor="required-example" value="required:" />
      <Radio
        {...fieldOptions}
        checked={props.checked}
        onClick={props.onClick}
      />
    </div>
  )
}

function RadioStates() {
  const [requiredChecked, setRequiredChecked] = useState(false)

  function handleRequiredChecked(e) {
    setRequiredChecked(e.target.checked)
  }

  return (
    <Container>
      <div
        data-site-override="initialTextAlign"
        {...getGridProps({ cols: 12, gap: 16 })}
      >
        <CheckedRadio />
        <DisabledRadio />
        <InvalidRadio />
        <ReadOnlyRadio />
        <RequiredRadio
          checked={requiredChecked}
          onClick={handleRequiredChecked}
        />
      </div>
    </Container>
  )
}

export default RadioStates
