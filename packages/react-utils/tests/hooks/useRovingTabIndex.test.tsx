import { render, screen } from 'test-utils'
import { useRovingTabIndex } from '../../src'

describe('useMenuKeyNavigation', () => {
  function TestButton(props: { label: string }) {
    const rovingIndexProps = useRovingTabIndex()
    return <button {...rovingIndexProps}>{props.label}</button>
  }

  function FocusTest() {
    return (
      <>
        <TestButton label="Button 1" />
        <TestButton label="Button 2" />
      </>
    )
  }

  test('should set tabindex to -1 initially', () => {
    render(<FocusTest />)
    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toHaveAttribute('tabindex', '-1')
    expect(buttons[1]).toHaveAttribute('tabindex', '-1')
  })

  test('should set tabindex to 0 when an item is focused', async () => {
    render(<FocusTest />)
    const buttons = screen.getAllByRole('button')

    await buttons[0].focus()

    expect(buttons[0]).toHaveAttribute('tabindex', '0')
    expect(buttons[1]).toHaveAttribute('tabindex', '-1')
  })

  test('should set tabindex to -1 when a menu item focus has passed to another', async () => {
    render(<FocusTest />)
    const buttons = screen.getAllByRole('button')

    await buttons[0].focus()
    await buttons[1].focus()

    expect(buttons[0]).toHaveAttribute('tabindex', '-1')
    expect(buttons[1]).toHaveAttribute('tabindex', '0')
  })

  test.todo(
    'should keep tabindex at 0 when focus moves outside of the widget'
    // async () => {
    //  render(<FocusTest />)
    //   const internalButton = screen.getByTestId('button1')
    //   const externalButton = screen.getByTestId('external')

    //   await internalButton.focus()
    //   await externalButton.focus()

    //   expect(internalButton).toHaveAttribute('tabindex', '0')
    // }
  )
})
