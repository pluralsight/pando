import { render, screen, userEvent, waitFor } from 'test-utils'
import { useAutoFormatDate } from '../../src'

describe('useAutoFormatDate', () => {
  function Input() {
    const props = useAutoFormatDate()
    return (
      <div>
        <label htmlFor="birth">Birthdate</label>
        <input id="birth" type="text" {...props} />
      </div>
    )
  }

  test('should display an input with a placeholder', () => {
    render(<Input />)
    expect(screen.getByRole('textbox', { name: /birthdate/i })).toHaveAttribute(
      'placeholder',
      'MM/DD/YYYY'
    )
  })

  test('should auto-format text when entered', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    user.type(birthdateInput, '02042000')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('02/04/2000'))
  })

  test('should allow year editing', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    user.type(birthdateInput, '02052000[Backspace][Backspace]22')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('02/05/2022'))
  })

  test('should allow month editing', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    user.type(
      birthdateInput,
      '02042000[Backspace][Backspace][Backspace][Backspace][ArrowLeft][Backspace][Backspace][ArrowLeft][Backspace][Backspace]10322022'
    )

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('10/31/2022'))
  })

  test('should allow day editing', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    user.type(
      birthdateInput,
      '02043000[Backspace][Backspace][Backspace][Backspace][ArrowLeft][Backspace]72022'
    )

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('02/07/2022'))
  })
})
