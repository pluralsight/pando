import { render, screen } from 'test-utils'
import { Checkbox, FormControlProvider } from '@react'

describe('Checkbox', () => {
  it('renders', () => {
    render(
      <FormControlProvider readOnly={true}>
        <Checkbox id="test" name="test" />
      </FormControlProvider>
    )
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
})
