import { createRef } from 'react'
import { render, screen } from 'test-utils'
import { Select, Option, FormControlProvider } from '@react'

describe('Select', () => {
  it('renders a select element', () => {
    render(
      <FormControlProvider>
        <Select id="test" name="test">
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </FormControlProvider>
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('passes a ref', () => {
    const ref = createRef<HTMLSelectElement>()
    render(
      <FormControlProvider>
        <Select id="test" name="test" ref={ref}>
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </FormControlProvider>
    )
    expect(ref.current).toBeInTheDocument()
  })

  it('allows custom className', () => {
    render(
      <FormControlProvider>
        <Select className="test" id="test" name="test">
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </FormControlProvider>
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toHaveClass('test')
  })

  it('allows custom style', () => {
    render(
      <FormControlProvider>
        <Select id="test" name="test" style={{ color: 'red' }}>
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </FormControlProvider>
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toHaveStyle({ color: 'red' })
  })
})

describe('Option', () => {
  it('renders an option element', () => {
    render(<Option value="3">Option 3</Option>)
    expect(screen.getByRole('option')).toBeInTheDocument()
    expect(screen.getByText('Option 3')).toBeInTheDocument()
  })

  it('allows custom className', () => {
    render(
      <Option className="test" value="3">
        Option 3
      </Option>
    )
    expect(screen.getByRole('option')).toHaveClass('test')
  })

  it('allows custom style', () => {
    render(
      <Option style={{ color: 'blue' }} value="3">
        Option 3
      </Option>
    )
    expect(screen.getByRole('option')).toHaveStyle({ color: 'blue' })
  })

  it('passes a ref', () => {
    const ref = createRef<HTMLOptionElement>()
    render(
      <Option ref={ref} value="3">
        Option 3
      </Option>
    )
    expect(ref.current).toBeInTheDocument()
  })

  it('displays a hidden prop when the value is empty', () => {
    render(<Option value="">Select an option</Option>)
    expect(screen.queryByRole('option')).not.toBeInTheDocument()
    expect(screen.getByText(/select an option/i)).toHaveAttribute('hidden')
    expect(screen.getByText(/select an option/i)).toBeDisabled()
  })
})
