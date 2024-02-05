import { jest } from '@jest/globals'
import { render, screen, userEvent } from 'test-utils'
import { Toast, ToastHeading, ToastText } from '@pluralsight/react'

describe('ToastText', () => {
  it('renders', () => {
    render(<ToastText>Text</ToastText>)
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
})

describe('ToastHeading', () => {
  it('renders', () => {
    render(<ToastHeading>Heading</ToastHeading>)
    expect(screen.getByText('Heading')).toBeInTheDocument()
  })
})

describe('Toast', () => {
  it('renders', async () => {
    const close = jest.fn()

    render(
      <Toast palette="info" onClose={close}>
        <ToastHeading>Heading</ToastHeading>
        <ToastText>Text</ToastText>
      </Toast>,
    )
    expect(screen.getByText(/heading/i)).toBeInTheDocument()
    expect(screen.getByText(/text/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button'))
    expect(close).toHaveBeenCalled()
  })

  it('renders with action', async () => {
    const action = jest.fn()

    render(
      <Toast palette="info" onClose={close} onAction={action}>
        <ToastHeading>Heading</ToastHeading>
        <ToastText>Text</ToastText>
      </Toast>,
    )
    expect(screen.getByText(/heading/i)).toBeInTheDocument()
    expect(screen.getByText(/text/i)).toBeInTheDocument()
    expect(screen.getByText(/undo/i)).toBeInTheDocument()
    await userEvent.click(screen.getByText(/undo/i))
    expect(action).toHaveBeenCalled()
  })

  it('renders an info toast', () => {
    const close = jest.fn()

    render(
      <Toast palette="info" onClose={close}>
        <ToastText>Info</ToastText>
      </Toast>,
    )
    expect(screen.getByText(/info/i)).toBeInTheDocument()
  })

  it('renders an success toast', () => {
    const close = jest.fn()

    render(
      <Toast palette="success" onClose={close}>
        <ToastText>Success</ToastText>
      </Toast>,
    )
    expect(screen.getByText(/success/i)).toBeInTheDocument()
  })

  it('renders an warning toast', () => {
    const close = jest.fn()

    render(
      <Toast palette="warning" onClose={close}>
        <ToastText>Warning</ToastText>
      </Toast>,
    )
    expect(screen.getByText(/warning/i)).toBeInTheDocument()
  })

  it('renders an danger toast', () => {
    const close = jest.fn()

    render(
      <Toast palette="danger" onClose={close}>
        <ToastText>Danger</ToastText>
      </Toast>,
    )
    expect(screen.getByText(/danger/i)).toBeInTheDocument()
  })
})
