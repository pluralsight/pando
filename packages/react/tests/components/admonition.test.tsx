import { render, screen } from 'test-utils'
import { Admonition, AdmonitionHeading, AdmonitionText } from '@react'

describe('Admonition', () => {
  test('should render an Admonition with a heading and text', () => {
    render(
      <Admonition>
        <AdmonitionHeading>Heading</AdmonitionHeading>
        <AdmonitionText>Text</AdmonitionText>
      </Admonition>
    )
    expect(screen.getByText(/Heading/i)).toBeInTheDocument()
    expect(screen.getByText(/Text/i)).toBeInTheDocument()
  })

  test('should render an Admonition with a heading and text and a close button', () => {
    const testFn = jest.fn()

    render(
      <Admonition onClose={testFn}>
        <AdmonitionHeading>Heading</AdmonitionHeading>
        <AdmonitionText>Text</AdmonitionText>
      </Admonition>
    )
    expect(screen.getByText(/Heading/i)).toBeInTheDocument()
    expect(screen.getByText(/Text/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()

    screen.getByRole('button').click()

    expect(testFn).toHaveBeenCalledTimes(1)
  })

  // Not testing icon because it's hidden from screen readers
})
