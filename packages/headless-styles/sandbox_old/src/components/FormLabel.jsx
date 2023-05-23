import { getFormLabelProps, getIconProps } from '../../../src'
import { InfoCircleIcon } from '@pluralsight/icons'

const defaultLabel = getFormLabelProps()
const requiredLabel = getFormLabelProps({
  htmlFor: 'email-alerts',
  required: true,
  value: 'Email alerts',
})
const hiddenLabel = getFormLabelProps({
  htmlFor: 'hidden-label',
  kind: 'hidden',
  value: 'Non-visible label',
})

export function Label(props) {
  const { ...labelProps } = getFormLabelProps(props)
  return <label {...labelProps}>{props.children}</label>
}

export default function FormLabel() {
  return (
    <div id="form-label">
      <h3>Form Label</h3>
      <div className="App-container">
        <label {...defaultLabel}>
          {defaultLabel.value} <InfoCircleIcon {...getIconProps()} />
        </label>
        <label {...requiredLabel}>{requiredLabel.value}</label>
        <label {...hiddenLabel}>{hiddenLabel.value}</label>
      </div>
    </div>
  )
}
