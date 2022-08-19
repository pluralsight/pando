import { useEffect } from 'react'
import { getFormLabelProps, getJSFormLabelProps } from '../../../src'

const defaultLabel = getFormLabelProps()
const requiredLabel = getFormLabelProps({
  htmlFor: 'email-alerts',
  required: true,
  value: 'Email alerts',
})

export default function FormLabel({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log({ ...getJSFormLabelProps({ htmlFor: 'tacos' }) })
    }
  }, [logJS])

  return (
    <div id="form-label">
      <h3>Form Label</h3>
      <div className="App-container">
        <label {...defaultLabel}>{defaultLabel.value}</label>
        <label {...requiredLabel}>{requiredLabel.value}</label>
      </div>
    </div>
  )
}
