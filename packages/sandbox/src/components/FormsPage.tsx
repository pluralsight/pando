import { type ChangeEvent, type PropsWithChildren, useState } from 'react'
import {
  Button,
  Checkbox,
  ErrorMessage,
  FieldMessage,
  FormControlProvider,
  Input,
  Label,
  Radio,
  Show,
  Textarea,
} from '@pluralsight/react'
import { SearchIcon } from '@pluralsight/icons'

function FieldWrapper(props: PropsWithChildren<Record<string, unknown>>) {
  return <div style={{ marginBottom: '1rem' }}>{props.children}</div>
}

export default function FormsPage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [optIn, setOptIn] = useState(false)
  const [radio, setRadio] = useState('')

  function handleOptInChange(evt: ChangeEvent<HTMLInputElement>) {
    setOptIn(evt.target.checked)
  }

  function handleRadioChange(evt: ChangeEvent<HTMLInputElement>) {
    setRadio(evt.target.value)
  }

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
              <Input
                startIcon={SearchIcon}
                id="search"
                name="search"
                placeholder="Search for anything"
                type="search"
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
          <FieldWrapper>
            <FormControlProvider required={true}>
              <Label htmlFor="first_name">First Name</Label>
              <Input type="text" id="first_name" name="first_name" />
              <FieldMessage id="fn:help">
                Please type your first name.
              </FieldMessage>
              <ErrorMessage id="fn:error">
                A first name is required.
              </ErrorMessage>
            </FormControlProvider>
          </FieldWrapper>

          <FieldWrapper>
            <FormControlProvider>
              <Label htmlFor="last_name">Last Name</Label>
              <Input type="text" id="last_name" name="last_name" />
              <FieldMessage id="ln:help">
                Please type your last name.
              </FieldMessage>
            </FormControlProvider>
          </FieldWrapper>

          <FieldWrapper>
            <FormControlProvider disabled={true}>
              <Label htmlFor="address">Address</Label>
              <Input type="text" id="address" name="address" />
              <FieldMessage id="address:help">
                Please type your address code.
              </FieldMessage>
            </FormControlProvider>
          </FieldWrapper>

          <FieldWrapper>
            <FormControlProvider invalid={true}>
              <Label htmlFor="zip">Zip Code</Label>
              <Input type="text" id="zip" name="zip" />
              <FieldMessage id="zip:help">
                Please type your zip code.
              </FieldMessage>
              <ErrorMessage id="zip:error">
                A zip code is required.
              </ErrorMessage>
            </FormControlProvider>
          </FieldWrapper>

          <FieldWrapper>
            <FormControlProvider readOnly={true}>
              <Label htmlFor="pos">Position</Label>
              <Input
                type="text"
                id="pos"
                name="pos"
                value="Software developer"
              />
            </FormControlProvider>
          </FieldWrapper>

          <FieldWrapper>
            <FormControlProvider>
              <Label htmlFor="bio">Bio</Label>
              <Textarea describedBy="bio:help" id="bio" name="bio" />
              <FieldMessage id="bio:help">Please type your bio.</FieldMessage>
            </FormControlProvider>
          </FieldWrapper>

          <fieldset style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <legend>Choose your preferences:</legend>
            <FieldWrapper>
              <div role="radiogrup">
                <FormControlProvider>
                  <Radio
                    checked={radio === '1'}
                    id="radio1"
                    name="radio"
                    onChange={handleRadioChange}
                    value="1"
                  >
                    Option 1
                  </Radio>
                </FormControlProvider>
                <FormControlProvider>
                  <Radio
                    checked={radio === '2'}
                    id="radio2"
                    name="radio"
                    onChange={handleRadioChange}
                    value="2"
                  >
                    Option 2
                  </Radio>
                </FormControlProvider>
                <FormControlProvider>
                  <Radio
                    checked={radio === '3'}
                    id="radio2"
                    name="radio"
                    onChange={handleRadioChange}
                    value="3"
                  >
                    Option 3
                  </Radio>
                </FormControlProvider>
              </div>
            </FieldWrapper>
          </fieldset>

          <fieldset style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <legend>Choose your preferences:</legend>
            <FieldWrapper>
              <FormControlProvider readOnly={true}>
                <Checkbox
                  checked={true}
                  id="select_all"
                  indeterminate={true}
                  name="select_all"
                >
                  Select all
                </Checkbox>
              </FormControlProvider>
            </FieldWrapper>

            <FieldWrapper>
              <FormControlProvider required={true}>
                <Checkbox
                  checked={optIn}
                  id="agree"
                  name="agree"
                  onChange={handleOptInChange}
                >
                  I agree to the terms and conditions.
                </Checkbox>
              </FormControlProvider>
            </FieldWrapper>

            <FieldWrapper>
              <FormControlProvider readOnly={true}>
                <Checkbox id="marketing" name="marketing">
                  I would like to recieve emails and promos.
                </Checkbox>
              </FormControlProvider>
            </FieldWrapper>
          </fieldset>

          <div style={{ textAlign: 'left' }}>
            <FieldWrapper>
              <Button type="submit">Submit</Button>
            </FieldWrapper>
          </div>
        </form>
      </div>
    </div>
  )
}
