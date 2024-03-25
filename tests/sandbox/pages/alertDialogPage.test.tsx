import { screen, render, userEvent } from 'test-utils'
import AlertDialogPage from 'sandbox/app/react/alert-dialog/page'
import { jest } from '@jest/globals'

describe('Alert Dialog Page', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.show = jest.fn()
    HTMLDialogElement.prototype.showModal = jest.fn()
    HTMLDialogElement.prototype.close = jest.fn()
  })

  test('renders all modal trigger buttons', () => {
    render(<AlertDialogPage />)

    const buttons = screen.getAllByRole('button')

    expect(buttons).toHaveLength(4)
  })

  test('renders the max width dialog', async () => {
    render(<AlertDialogPage />)
    await userEvent.click(screen.getByText('Show max-width modal'))
    expect(screen.getByText('Hits maximum width')).toBeInTheDocument()
    expect(screen.queryByText('Hits minimum width')).not.toBeVisible()
  })

  test('renders the min width dialog', async () => {
    render(<AlertDialogPage />)
    await userEvent.click(screen.getByText('Show min-width modal'))
    expect(screen.getByText('Hits minimum width')).toBeInTheDocument()
    expect(screen.queryByText('Hits maximum width')).not.toBeVisible()
  })

  test('renders the hugs content dialog', async () => {
    render(<AlertDialogPage />)
    await userEvent.click(screen.getByText('Show min-width modal'))
    expect(screen.getByText('Modal hugs content')).toBeInTheDocument()
    expect(screen.queryByText('Hits maximum width')).not.toBeVisible()
  })

  test('renders destructive dialog', async () => {
    render(<AlertDialogPage />)
    await userEvent.click(screen.getByText('Show min-width modal'))
    expect(screen.getByText('Destructive Modal')).toBeInTheDocument()
  })
})
