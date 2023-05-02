import { render, screen, userEvent, waitFor } from 'test-utils'
import { useAutoFormatDate } from '../../src'

// TODO: fix tests to use the correct selectors to prevent act() warnings

describe('useAutoFormatDate - dd/mm/yyyy', () => {
  function Input() {
    const props = useAutoFormatDate({
      pattern: ['d', 'm', 'Y'],
    })
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
      'DD/MM/YYYY'
    )
  })

  test('should auto-format text when entered', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '02042000')

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
    await user.type(birthdateInput, '02052000[Backspace][Backspace]22')

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

  test('should allow editing by deleting back to the day', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(
      birthdateInput,
      '02042000[Backspace][Backspace][Backspace][Backspace][Backspace][Backspace][Backspace][Backspace][Backspace][Backspace]31102022'
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
    await waitFor(() => expect(input).toHaveValue('31/10/2022'))
  })

  test('should allow editing by deleting back to the month', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(
      birthdateInput,
      '02043000[Backspace][Backspace][Backspace][Backspace][Backspace][Backspace]72022'
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

  test('should allow day editing', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(
      birthdateInput,
      '12042000[ArrowLeft][ArrowLeft][ArrowLeft][ArrowLeft][ArrowLeft][ArrowLeft][ArrowLeft][ArrowLeft][Backspace]1'
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
    await waitFor(() => expect(input).toHaveValue('11/04/2000'))
  })

  test('should allow month editing', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(
      birthdateInput,
      '02122000[ArrowLeft][ArrowLeft][ArrowLeft][ArrowLeft][ArrowLeft][Backspace][Backspace]11'
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
    await waitFor(() => expect(input).toHaveValue('02/11/2000'))
  })

  test('should correct a day that is too large', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '34')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('31/'))
  })

  test('should correct a month that is too large', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '1215')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('12/12/'))
  })

  test('should complete the day after delimiter is typed', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '1/')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('01/'))
  })

  test('should complete the month after delimiter is typed', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '1/1/')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('01/01/'))
  })

  test('should prevent entry of empty day', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '/')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue(''))
  })

  test('should prevent entry of empty month', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '12//')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('12/'))
  })

  test('should prevent entry of delimiters within the year', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '12/12/19/')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('12/12/19'))
  })

  test('should format days that can only be single-digit values', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '8')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('08/'))
  })

  test('should format months that can only be single-digit values', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '89')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('08/09/'))
  })

  test('should not autoformat when removing characters', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '99[Backspace]')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('09/09'))
  })

  test('should correct the day for leap year', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '3022000')

    const input = (await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )) as HTMLInputElement
    await waitFor(() => expect(input).toHaveValue('29/02/2000'))
  })

  test('should correct the day for non leap year', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '2922001')

    const input = (await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )) as HTMLInputElement
    await waitFor(() => expect(input).toHaveValue('28/02/2001'))
  })

  test('should correct the day for 30-day months', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '3162001')

    const input = (await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )) as HTMLInputElement
    await waitFor(() => expect(input).toHaveValue('30/06/2001'))
  })

  test('should correctly place the cursor after initial entry of an autoformatted day', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '8')

    const input = (await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )) as HTMLInputElement
    await waitFor(() => expect(input.selectionStart).toBe(3))
  })

  test('should correctly place the cursor after autoformatting the day when editing', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(
      birthdateInput,
      '89[ArrowLeft][ArrowLeft][ArrowLeft][ArrowLeft][Backspace][Backspace]9'
    )

    const input = (await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )) as HTMLInputElement
    await waitFor(() => expect(input.selectionStart).toBe(2))
  })

  test('should correctly place the cursor after autoformatting the month and day when editing', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(
      birthdateInput,
      '08/09/[ArrowLeft][ArrowLeft][Backspace][ArrowLeft][Backspace][Backspace]9'
    )

    const input = (await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )) as HTMLInputElement
    await waitFor(() => expect(input.selectionStart).toBe(2))
  })

  test('should correctly place the cursor after inserting a slash between autoformatted month and day', async () => {
    const user = userEvent.setup()
    render(<Input />)

    await user.type(
      screen.getByLabelText(/birthdate/i),
      '08/09/[ArrowLeft][ArrowLeft][Backspace][Backspace][ArrowLeft][Backspace][ArrowRight]/'
    )

    const input = screen.getByLabelText(/birthdate/i) as HTMLInputElement
    await waitFor(() => expect(input.selectionStart).toBe(3))
  })

  test('should correctly autoformat a full date pasted into the input', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    birthdateInput.focus()
    await user.paste('991999')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('09/09/1999'))
  })
})
