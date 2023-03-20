import { useState, useEffect } from 'react'
import {
  getCheckboxProps,
  getFormControlProps,
  getFormLabelProps,
  getIconProps,
  getJSCheckboxProps,
} from '@pluralsight/headless-styles'
import { CheckIcon, IndeterminateIcon } from '@pluralsight/icons'
import { useIsIndeterminate } from '@pluralsight/react-utils'

const stateFields = [
  {
    checked: false,
    disabled: true,
    id: 1,
    label: 'Disabled',
    name: 'disabled',
    readOnly: false,
    required: false,
    value: '-1',
  },
  {
    checked: true,
    disabled: false,
    id: 2,
    invalid: true,
    label: 'Invalid',
    name: 'invalid',
    readOnly: false,
    required: false,
    value: '2',
  },
  {
    checked: false,
    disabled: false,
    id: 3,
    label: 'Required',
    name: 'required',
    required: true,
    value: '3',
  },
  {
    checked: false,
    disabled: false,
    id: 4,
    label: 'ReadOnly',
    name: 'readOnly',
    readOnly: true,
    required: false,
    value: '4',
  },
  {
    checked: true,
    disabled: false,
    indeterminate: true,
    id: 5,
    label: 'Indeterminate',
    name: 'indeterminate',
    readOnly: false,
    required: false,
    value: '5',
  },
]

function Icon(props) {
  const { checked, indeterminate } = props
  const icon = getIconProps(props.iconOptions)

  if (!checked) {
    return null
  }

  if (indeterminate === 'true') {
    return <IndeterminateIcon {...icon} />
  }

  if (checked) {
    return <CheckIcon {...icon} />
  }

  return null
}

function CheckboxInput(props) {
  const { fieldOptions } = getFormControlProps({ ...props })
  const checkbox = getCheckboxProps({ ...fieldOptions, ...props })
  const { value, ...labelProps } = getFormLabelProps({
    ...props,
    value: props.label,
  })

  return (
    <label {...checkbox.checkboxContainer}>
      <input {...checkbox.input} onChange={props.onClick} />
      <span {...checkbox.checkboxControl}>
        <Icon
          checked={checkbox.input.checked}
          indeterminate={checkbox.input.indeterminate}
          iconOptions={checkbox.iconOptions}
        />
      </span>
      <label {...labelProps}>{value}</label>
    </label>
  )
}

function StateForm(props) {
  const { control } = getFormControlProps({ direction: props.direction })
  const [state, setState] = useState('')

  function handleClick(e) {
    setState(e.target.value)
  }

  return (
    <div {...control}>
      {stateFields.map((option) => (
        <CheckboxInput
          {...option}
          onClick={handleClick}
          key={option.id}
          checked={option.checked ?? state === option.value}
        />
      ))}
    </div>
  )
}

export default function Checkbox({ logJS }) {
  const { control } = getFormControlProps()
  const [all, setAll] = useState(false)
  const [email, setEmail] = useState({
    email: false,
    sms: false,
    call: false,
  })
  const isIndeterminate = useIsIndeterminate(email)

  function handleClick(event) {
    const { target } = event

    setEmail((prev) => ({
      ...prev,
      [target.value]: target.checked,
    }))
  }

  function handleClickAll() {
    setAll((prev) => !prev)
  }

  useEffect(() => {
    setEmail((prev) => ({
      ...prev,
      email: all,
      sms: all,
      call: all,
    }))
  }, [all])

  useEffect(() => {
    if (logJS) {
      console.log({
        ...getJSCheckboxProps({ checked: true, id: 'email-alerts' }),
      })
    }
  }, [logJS])

  return (
    <div id="checkbox">
      <h3>Checkbox</h3>
      <div className="App-container">
        <CheckboxInput
          checked={all || isIndeterminate}
          indeterminate={isIndeterminate}
          htmlFor="all"
          id="all"
          label="Select All"
          name="all"
          onClick={handleClickAll}
          value="all"
        />
      </div>
      <div className="App-container">
        <div {...control}>
          <CheckboxInput
            checked={email.email}
            htmlFor="email"
            id="email"
            label="Email"
            name="email"
            onClick={handleClick}
            value="email"
          />
          <CheckboxInput
            checked={email.sms}
            htmlFor="sms"
            id="sms"
            label="SMS"
            name="email1"
            onClick={handleClick}
            value="sms"
          />
          <CheckboxInput
            checked={email.call}
            htmlFor="call"
            id="call"
            label="Call"
            name="email1"
            onClick={handleClick}
            value="call"
          />
        </div>
      </div>

      <div className="App-container">
        <StateForm />
      </div>
      <div className="App-container">
        <StateForm direction="col" />
      </div>
    </div>
  )
}
