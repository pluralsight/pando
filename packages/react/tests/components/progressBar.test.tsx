import { render, screen } from 'test-utils'
import { ProgressBar } from '@react'

describe('ProgressBar', () => {
  test('should render', () => {
    render(<ProgressBar ariaLabel="one" />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  test('should render with aria-label', () => {
    render(<ProgressBar ariaLabel="one" />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-label', 'one')
  })

  test('should render with aria-valuenow', () => {
    render(<ProgressBar ariaLabel="one" now={50} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '50'
    )
  })

  test('should render with aria-valuemin', () => {
    render(<ProgressBar ariaLabel="one" min={10} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuemin',
      '10'
    )
  })

  test('should render with aria-valuemax', () => {
    render(<ProgressBar ariaLabel="one" max={90} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuemax',
      '90'
    )
  })

  test('should allow native Div props', () => {
    const mockFn = jest.fn()
    render(
      <ProgressBar
        data-testid="wrapper"
        ariaLabel="one"
        id="hi"
        onClick={mockFn}
      />
    )
    expect(screen.getByTestId(/wrapper/i)).toHaveAttribute('id', 'hi')
    screen.getByRole('progressbar').click()
    expect(mockFn).toHaveBeenCalled()
  })
})
