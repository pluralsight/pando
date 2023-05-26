import {
  FieldMessage,
  ErrorMessage,
  FormControlProvider,
} from '@pluralsight/react/dev'

export default function FieldMessagePage() {
  return (
    <div>
      <div>
        <h2>Field Messages</h2>
        <FormControlProvider>
          <FieldMessage id="test">This is a help message.</FieldMessage>
        </FormControlProvider>

        <FormControlProvider invalid>
          <ErrorMessage id="test-error">This is an error message.</ErrorMessage>
        </FormControlProvider>
      </div>
    </div>
  )
}
