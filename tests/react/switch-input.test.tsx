import { type ChangeEvent, createRef, useState } from 'react'
import { render, screen, userEvent } from 'test-utils'
import {
  SwitchInput,
  SwitchInputButton,
  FormControlProvider,
  SwitchInputLabel,
} from '@pluralsight/react'

describe('SwitchInput', () => {
  it('forwards ref', () => {
    const ref = createRef<HTMLLabelElement>()
    render(<SwitchInput htmlFor="test" ref={ref} />, {
      wrapper: FormControlProvider,
    })
    expect(ref.current).not.toBeNull()
  })

  it('renders', () => {
    render(<SwitchInput htmlFor="test-1">test</SwitchInput>, {
      wrapper: FormControlProvider,
    })
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  it('allows a custom className', () => {
    render(
      <SwitchInput htmlFor="test-2" className="test">
        test class
      </SwitchInput>,
      {
        wrapper: FormControlProvider,
      },
    )
    expect(screen.getByText(/test class/i)).toHaveClass('test')
  })

  it('renders children', () => {
    render(
      <FormControlProvider readOnly={true}>
        <SwitchInput htmlFor="test">
          <SwitchInputLabel>test</SwitchInputLabel>
          <SwitchInputButton id="test" name="test" />
        </SwitchInput>
      </FormControlProvider>,
    )

    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})

describe('SwitchInputButton', () => {
  it('forwards ref', () => {
    const ref = createRef<HTMLInputElement>()
    render(
      <FormControlProvider readOnly={true}>
        <SwitchInputButton id="test" name="test" ref={ref} />
      </FormControlProvider>,
    )
    expect(ref.current).not.toBeNull()
  })

  it('renders', () => {
    render(
      <FormControlProvider readOnly={true}>
        <SwitchInputButton id="test" name="test" />
      </FormControlProvider>,
    )
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  it('allows a custom className', () => {
    render(
      <FormControlProvider readOnly={true}>
        <SwitchInputButton id="test" name="test" className="test" />
      </FormControlProvider>,
    )
    expect(screen.getByRole('switch')).toHaveClass('test')
  })

  it('renders updates the SwitchInput state when clicked', async () => {
    const user = userEvent.setup()

    function App() {
      const [checked, setChecked] = useState(false)

      function handleCheck(e: ChangeEvent<HTMLInputElement>) {
        setChecked(e.target.checked)
      }

      return (
        <FormControlProvider>
          <SwitchInput htmlFor="test">
            <SwitchInputLabel>test</SwitchInputLabel>
            <SwitchInputButton
              checked={checked}
              id="test"
              name="test"
              onChange={handleCheck}
            />
          </SwitchInput>
        </FormControlProvider>
      )
    }

    render(<App />)

    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByRole('switch')).not.toBeChecked()

    await user.click(screen.getByRole('switch'))

    expect(screen.getByRole('switch')).toBeChecked()
  })
})
