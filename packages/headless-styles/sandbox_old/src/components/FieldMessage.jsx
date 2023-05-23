import { getFieldMessageProps } from '../../../src'

const { value, ...fieldProps } = getFieldMessageProps({
  id: 'test-one',
  message: "We'll never share your email...maybe.",
})

export default function FieldMessage() {
  return (
    <div id="FieldMessage">
      <h3>Field Message</h3>
      <div className="App-container">
        <small {...fieldProps}>{value}</small>
      </div>
    </div>
  )
}
