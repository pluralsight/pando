import { screen, render, userEvent } from 'test-utils'
import AlertDialogPage from 'sandbox/app/react/alert-dialog/page'
import { jest } from '@jest/globals'

describe('Alert Dialog Page', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.show = jest.fn()
    HTMLDialogElement.prototype.showModal = jest.fn()
    HTMLDialogElement.prototype.close = jest.fn()
  })

  test('renders the alert dialog', async () => {
    render(<AlertDialogPage />)
    await userEvent.click(screen.getByText('Modal header'))
    expect(screen.getByText('Close')).toBeInTheDocument()
  })
})
