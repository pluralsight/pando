import { screen, render, userEvent } from 'test-utils'
import ToastPage from 'sandbox/app/react/toast/page'

describe('ToastPage', () => {
  test('renders a toast', async () => {
    render(<ToastPage />)
    await userEvent.click(screen.getByText('Show Toast'))
    expect(screen.getByText('Toast Heading')).toBeInTheDocument()
  })

  test('renders a info toast', async () => {
    render(<ToastPage />)
    await userEvent.click(screen.getByText(/show info toast/i))
    expect(screen.getByText(/Some description text./i)).toBeInTheDocument()
  })

  test('renders a success toast', async () => {
    render(<ToastPage />)
    await userEvent.click(screen.getByText(/show success toast/i))
    expect(screen.getByText(/item added/i)).toBeInTheDocument()
  })

  test('renders a warning toast', async () => {
    render(<ToastPage />)
    await userEvent.click(screen.getByText(/show warning toast/i))
    expect(screen.getByText(/configuration changed/i)).toBeInTheDocument()
  })

  test('renders a danger toast', async () => {
    render(<ToastPage />)
    await userEvent.click(screen.getByText(/show danger toast/i))
    expect(screen.getByText(/card removed/i)).toBeInTheDocument()
  })
})
