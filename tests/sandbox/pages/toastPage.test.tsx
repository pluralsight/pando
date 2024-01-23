import { screen, render, userEvent } from 'test-utils'
import ToastPage from 'sandbox/app/react/toast/page'

describe('ToastPage', () => {
  test('renders a toast', async () => {
    render(<ToastPage />)
    await userEvent.click(screen.getByText('Show Toast'))
    expect(screen.getByText('Toast Heading')).toBeInTheDocument()
  })
})
