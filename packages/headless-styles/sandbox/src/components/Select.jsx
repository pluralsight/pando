import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@pluralsight/icons'
import {
  getErrorMessageProps,
  getFieldMessageProps,
  getFormControlProps,
  getFormLabelProps,
  getSelectProps,
  getIconProps,
  // getJSSelectProps,
} from '../../../src'
import selectOptions from '../data/options.data.json'

function SelectField(props) {
  const { onChange, ...options } = props
  const { fieldOptions } = getFormControlProps(options)
  const labelProps = getFormLabelProps({
    ...fieldOptions,
    htmlFor: options.id,
    value: options.label,
  })
  const error = getErrorMessageProps({
    ...fieldOptions,
    id: 'bad:select',
    message: props.errorMessage,
  })
  const { value: helpText, ...fieldMessage } = getFieldMessageProps({
    ...fieldOptions,
    id: 'select:help',
    message: props.helpText,
  })
  const selectProps = getSelectProps({
    ...options,
    ...fieldOptions,
    describedBy: `${error.container.id},${fieldMessage.id}`,
  })

  return (
    <div {...selectProps.fieldWrapper} style={{ marginBottom: '1rem' }}>
      <label {...labelProps}>{labelProps.value}</label>
      <div {...selectProps.selectWrapper}>
        {onChange ? (
          <select
            {...selectProps.select}
            onChange={onChange}
            value={selectProps.value}
          >
            {props.children}
          </select>
        ) : (
          <select {...selectProps.select} defaultValue={props.defaultValue}>
            {props.children}
          </select>
        )}
        <span {...selectProps.iconWrapper}>
          <ChevronDownIcon {...getIconProps(selectProps.iconOptions)} />
        </span>
      </div>
      {props.helpText && !fieldOptions.invalid && (
        <p {...fieldMessage}>{helpText}</p>
      )}
      {fieldOptions.invalid && (
        <div {...error.container}>
          <p {...error.message}>{error.message.value}</p>
        </div>
      )}
    </div>
  )
}

function SelectOptions() {
  return selectOptions.map((option) => <option key={option}>{option}</option>)
}

export default function Select({ logJS }) {
  const [characterClass, setCharacterClass] = useState('')

  function handleCharacterClassChange(e) {
    setCharacterClass(e.target.value)
  }

  useEffect(() => {
    if (logJS) {
      // console.log(
      //   getJSSelectProps({
      //     id: 'test',
      //     name: 'test-name',
      //   }).cssProps
      // )
    }
  }, [logJS])

  return (
    <div id="select">
      <h3>Select</h3>
      <div className="App-container column">
        <SelectField
          id="characterClass-1"
          onChange={handleCharacterClassChange}
          name="characterClass-1"
          label="Choose your character class"
          required
          value={characterClass}
        >
          <SelectOptions />
        </SelectField>

        <SelectField
          disabled
          id="characterClass-2"
          onChange={handleCharacterClassChange}
          name="characterClass-2"
          label="Disabled Select"
          value={characterClass}
        >
          <SelectOptions />
        </SelectField>

        <SelectField
          errorMessage="A character class is required."
          id="characterClass-3"
          invalid
          onChange={handleCharacterClassChange}
          name="characterClass-3"
          label="Invalid Select"
          value={characterClass}
        >
          <SelectOptions />
        </SelectField>

        <SelectField
          defaultValue="Cleric"
          id="characterClass-4"
          name="characterClass-4"
          label="Medium Select"
          size="m"
          invalid
        >
          <SelectOptions />
        </SelectField>
      </div>
    </div>
  )
}
