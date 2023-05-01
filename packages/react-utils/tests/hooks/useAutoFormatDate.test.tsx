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

  test('should allow editing by deleting back to the month', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(
      birthdateInput,
      '02042000[Backspace][Backspace][Backspace][Backspace][Backspace][Backspace][Backspace][Backspace][Backspace][Backspace]10322022'
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

  test('should allow editing by deleting back to the day', async () => {
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

  test('should allow month editing', async () => {
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

  test('should allow day editing', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(
      birthdateInput,
      '02042000[ArrowLeft][ArrowLeft][ArrowLeft][ArrowLeft][ArrowLeft][Backspace][Backspace]07'
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
    await waitFor(() => expect(input).toHaveValue('02/07/2000'))
  })

  test('should correct a month that is too large', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '15')

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

  test('should correct a day that is too large', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '1235')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('12/31/'))
  })

  test('should complete the month after delimiter is typed', async () => {
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

  test('should complete the day after delimiter is typed', async () => {
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

  test('should prevent entry of non-numeric characters', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, 'abcd#$@-')

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

  test('should prevent entry of too many characters', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '01/01/200020')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('01/01/2000'))
  })

  test('should prevent entry of empty month', async () => {
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

  test('should prevent entry of empty day', async () => {
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
    await user.type(birthdateInput, '12/20/19/')

    const input = await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(input).toHaveValue('12/20/19'))
  })

  test('should format months that can only be single-digit values', async () => {
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

  test('should format days that can only be single-digit values', async () => {
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
    await user.type(birthdateInput, '2302000')

    const input = (await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )) as HTMLInputElement
    await waitFor(() => expect(input).toHaveValue('02/29/2000'))
  })

  test('should correct the day for non leap year', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '2292001')

    const input = (await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )) as HTMLInputElement
    await waitFor(() => expect(input).toHaveValue('02/28/2001'))
  })

  test('should correctly place the cursor after initial entry of an autoformatted month', async () => {
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

  test('should correctly place the cursor after autoformatting the month when editing', async () => {
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

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(
      birthdateInput,
      '08/09/[ArrowLeft][ArrowLeft][Backspace][Backspace][ArrowLeft][Backspace][ArrowRight]/'
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
    await waitFor(() => expect(input.selectionStart).toBe(3))
  })

  test('should correct the day for 30-day months', async () => {
    const user = userEvent.setup()
    render(<Input />)

    const birthdateInput = screen.getByLabelText(/birthdate/i)
    await user.type(birthdateInput, '6312001')

    const input = (await screen.findByRole(
      'textbox',
      { name: /birthdate/i },
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )) as HTMLInputElement
    await waitFor(() => expect(input).toHaveValue('06/30/2001'))
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
