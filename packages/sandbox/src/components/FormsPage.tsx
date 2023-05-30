import { useState } from 'react'
import {
  Button,
  ErrorMessage,
  FieldMessage,
  FormControlProvider,
  Grid,
  GridItem,
  Label,
  Show,
} from '@pluralsight/react/dev'

export default function FormsPage() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      <h1>Forms</h1>
      <header
        style={{
          backgroundColor: 'var(--ps-surface-medium)',
          borderRadius: '0.25rem',
          marginBottom: '1rem',
          padding: '0.5rem',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <FormControlProvider>
              <Label htmlFor="search" kind="hidden">
                Search for anything
              </Label>
              <input
                type="search"
                id="search"
                placeholder="Search for anything"
              />
            </FormControlProvider>
          </div>

          <div>
            <Show
              when={loggedIn}
              fallback={
                <Button onClick={() => setLoggedIn(true)}>Log In</Button>
              }
            >
              <Button onClick={() => setLoggedIn(false)}>Log Out</Button>
            </Show>
          </div>
        </div>
      </header>

      <div>
        <form>
          <div>
            <FormControlProvider required={true}>
              <Label htmlFor="first_name">First Name</Label>
              <input type="text" id="first_name" />
              <FieldMessage id="fn:help">
                Please type your first name.
              </FieldMessage>
              <ErrorMessage id="fn:error">
                A first name is required.
              </ErrorMessage>
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
              <ErrorMessage id="zip:error">
                A zip code is required.
              </ErrorMessage>
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
    </div>
  )
}
