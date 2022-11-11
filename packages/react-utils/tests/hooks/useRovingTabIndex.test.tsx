import { type FocusEvent } from 'react'
import { render, screen } from 'test-utils'
import { useRovingTabIndex } from '../../src'

// eslint-disable-next-line no-unused-vars
type FocusCallback = (event: FocusEvent) => void

describe('useMenuKeyNavigation', () => {
  function TestButton(props: {
    label: string
    onBlur?: FocusCallback
    onFocus?: FocusCallback
  }) {
    return (
      <button tabIndex={-1} onBlur={props.onBlur} onFocus={props.onFocus}>
        {props.label}
      </button>
    )
  }

  function FocusTest() {
    const rovingIndexProps = useRovingTabIndex()

    return (
      <>
        <TestButton label="Button 1" {...rovingIndexProps} />
        <TestButton label="Button 2" {...rovingIndexProps} />
        <TestButton label="Button 3" {...rovingIndexProps} />
      </>
    )
  }

  beforeEach(async () => {
    render(<FocusTest />)
  })

  test('should set tabindex to 0 when an item is focused', async () => {
    const buttons = screen.getAllByRole('button')

    buttons[0].focus()

    expect(buttons[0]).toHaveAttribute('tabindex', '0')
  })

  test('should set tabindex to -1 when a menu item is blurred', async () => {
    const buttons = screen.getAllByRole('button')

    buttons[0].focus()
    buttons[1].focus()

    expect(buttons[0]).toHaveAttribute('tabindex', '-1')
  })
})
