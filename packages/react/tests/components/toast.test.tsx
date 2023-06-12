import { render, screen } from 'test-utils'
import { Toast, ToastHeading, ToastText } from '@react'

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
  it('renders', () => {
    const close = jest.fn()

    render(
      <Toast sentiment="info" onClose={close}>
        <ToastHeading>Heading</ToastHeading>
        <ToastText>Text</ToastText>
      </Toast>
    )
    expect(screen.getByText(/heading/i)).toBeInTheDocument()
    expect(screen.getByText(/text/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
    screen.getByRole('button').click()
    expect(close).toHaveBeenCalled()
  })

  it('renders with action', () => {
    const action = jest.fn()

    render(
      <Toast sentiment="info" onClose={close} onAction={action}>
        <ToastHeading>Heading</ToastHeading>
        <ToastText>Text</ToastText>
      </Toast>
    )
    expect(screen.getByText(/heading/i)).toBeInTheDocument()
    expect(screen.getByText(/text/i)).toBeInTheDocument()
    expect(screen.getByText(/undo/i)).toBeInTheDocument()
    screen.getByText(/undo/i).click()
    expect(action).toHaveBeenCalled()
  })

  it('renders an info toast', () => {
    const close = jest.fn()

    render(
      <Toast sentiment="info" onClose={close}>
        <ToastText>Text</ToastText>
      </Toast>
    )
    expect(
      screen.getByLabelText(/info circle icon/i, {
        selector: 'svg',
      })
    ).toBeInTheDocument()
  })

  it('renders an success toast', () => {
    const close = jest.fn()

    render(
      <Toast sentiment="success" onClose={close}>
        <ToastText>Text</ToastText>
      </Toast>
    )
    expect(
      screen.getByLabelText(/checkmark in circle/i, {
        selector: 'svg',
      })
    ).toBeInTheDocument()
  })

  it('renders an warning toast', () => {
    const close = jest.fn()

    render(
      <Toast sentiment="warning" onClose={close}>
        <ToastText>Text</ToastText>
      </Toast>
    )
    expect(
      screen.getByLabelText(/warning triangle icon/i, {
        selector: 'svg',
      })
    ).toBeInTheDocument()
  })

  it('renders an danger toast', () => {
    const close = jest.fn()

    render(
      <Toast sentiment="danger" onClose={close}>
        <ToastText>Text</ToastText>
      </Toast>
    )
    expect(
      screen.getByLabelText(/danger diamond icon/i, {
        selector: 'svg',
      })
    ).toBeInTheDocument()
  })
})
