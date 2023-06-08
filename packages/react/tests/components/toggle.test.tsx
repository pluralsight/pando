import { ChangeEvent, createRef, useState } from 'react'
import { render, screen, userEvent } from 'test-utils'
import { Toggle, ToggleButton, FormControlProvider, Label } from '@react'

describe('Toggle', () => {
  it('forwards ref', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Toggle ref={ref} />)
    expect(ref.current).not.toBeNull()
  })

  it('renders', () => {
    render(<Toggle>test</Toggle>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  it('allows a custom className', () => {
    render(<Toggle className="test">test class</Toggle>)
    expect(screen.getByText(/test class/i)).toHaveClass('test')
  })

  it('renders children', () => {
    render(
      <FormControlProvider readOnly={true}>
        <Toggle>
          <Label htmlFor="test">test</Label>
          <ToggleButton id="test" name="test" />
        </Toggle>
      </FormControlProvider>
    )

    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})

describe('ToggleButton', () => {
  it('forwards ref', () => {
    const ref = createRef<HTMLInputElement>()
    render(
      <FormControlProvider readOnly={true}>
        <ToggleButton id="test" name="test" ref={ref} />
      </FormControlProvider>
    )
    expect(ref.current).not.toBeNull()
  })

  it('renders', () => {
    render(
      <FormControlProvider readOnly={true}>
        <ToggleButton id="test" name="test" />
      </FormControlProvider>
    )
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  it('allows a custom className', () => {
    render(
      <FormControlProvider readOnly={true}>
        <ToggleButton id="test" name="test" className="test" />
      </FormControlProvider>
    )
    expect(screen.getByRole('switch')).toHaveClass('test')
  })

  it('renders updates the toggle state when clicked', async () => {
    const user = userEvent.setup()

    function App() {
      const [checked, setChecked] = useState(false)

      function handleCheck(e: ChangeEvent<HTMLInputElement>) {
        setChecked(e.target.checked)
      }

      return (
        <FormControlProvider>
          <Toggle>
            <Label htmlFor="test">test</Label>
            <ToggleButton
              checked={checked}
              id="test"
              name="test"
              onChange={handleCheck}
            />
          </Toggle>
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
