import {
  Label,
  FieldMessage,
  ErrorMessage,
  FormControlProvider,
} from '@pluralsight/react/dev'

export default function FormsPage() {
  return (
    <div>
      <h1>Forms</h1>
      <form>
        <div>
          <FormControlProvider required={true}>
            <Label htmlFor="first_name">First Name</Label>
            <input type="text" id="first_name" />
            <FieldMessage id="fn:help">
              Please type your first name.
            </FieldMessage>
            <ErrorMessage id="fn:error">A first name is required.</ErrorMessage>
          </FormControlProvider>
        </div>

        <div>
          <FormControlProvider>
            <Label htmlFor="last_name">Last Name</Label>
            <input type="text" id="last_name" />
            <FieldMessage id="ln:help">
              Please type your last name.
            </FieldMessage>
          </FormControlProvider>
        </div>

        <div>
          <FormControlProvider disabled={true}>
            <Label htmlFor="address">Address</Label>
            <input type="text" id="address" />
            <FieldMessage id="address:help">
              Please type your address code.
            </FieldMessage>
          </FormControlProvider>
        </div>

        <div>
          <FormControlProvider invalid={true}>
            <Label htmlFor="zip">Zip Code</Label>
            <input type="text" id="zip" />
            <FieldMessage id="zip:help">
              Please type your zip code.
            </FieldMessage>
            <ErrorMessage id="zip:error">A zip code is required.</ErrorMessage>
          </FormControlProvider>
        </div>

        <div>
          <FormControlProvider readOnly={true}>
            <Label htmlFor="pos">Position</Label>
            <input type="text" id="pos" value="Software developer" />
          </FormControlProvider>
        </div>
      </form>
    </div>
  )
}
