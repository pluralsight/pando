import { render, screen, userEvent } from 'test-utils'
import { useMenuInteraction } from '../../src'

jest.mock('@pluralsight/shared', () => {
  return {
    menuHook: true,
  }
})

type MenuProps = {
  label: string
}

describe('useMenuInteraction', () => {
  function MenuItem(props: MenuProps) {
    return (
      <li role="presentation">
        <button tabIndex={-1} role="menuitem">
          {props.label}
        </button>
      </li>
    )
  }

  function Menu(props: MenuProps) {
    const menuNavProps = useMenuInteraction()

    return (
      <div>
        <button data-testid="trigger" {...menuNavProps?.trigger}>
          {props.label}
        </button>
        <menu aria-label={props.label} {...menuNavProps?.menu}>
          <MenuItem label="Menu item 1" />
          <MenuItem label="Menu item 2" />
          <MenuItem label="Menu item 3" />
          <MenuItem label="Menu item 4" />
          <MenuItem label="Menu item 5" />
        </menu>
      </div>
    )
  }

  function MenuTest() {
    return (
      <>
        <Menu label="Menu" />

        <button>button after menu</button>
      </>
    )
  }

  const triggerExpanded = 'aria-expanded'
  const menuExpanded = 'data-expanded'
  const arrowUp = '{ArrowUp}'
  const arrowDown = '{ArrowDown}'
  const esc = '{Escape}'

  beforeEach(async () => {
    render(<MenuTest />)
  })

  test('should display menu when trigger clicked', async () => {
    const user = userEvent.setup()
    const menu = screen.getByRole('menu')
    const trigger = screen.getByTestId('trigger')

    await user.click(trigger)

    expect(menu).toHaveAttribute(menuExpanded, 'true')
    expect(trigger).toHaveAttribute(triggerExpanded, 'true')
    expect(trigger).toHaveFocus()
  })

  test('should display menu and focus first item when down arrow pressed on trigger', async () => {
    const user = userEvent.setup()
    const menu = screen.getByRole('menu')
    const trigger = screen.getByTestId('trigger')
    const firstMenuItem = screen.getAllByRole('menuitem')[0]

    trigger.focus()
    await user.keyboard(arrowDown)

    expect(menu).toHaveAttribute(menuExpanded, 'true')
    expect(trigger).toHaveAttribute(triggerExpanded, 'true')
    expect(firstMenuItem).toHaveFocus()
  })

  test('should close menu and focus on trigger item when escape pressed within menu', async () => {
    const user = userEvent.setup()
    const menu = screen.getByRole('menu')
    const trigger = screen.getByTestId('trigger')

    trigger.focus()
    await user.keyboard(arrowDown)
    await user.keyboard(esc)

    expect(menu).toHaveAttribute(menuExpanded, 'false')
    expect(trigger).toHaveAttribute(triggerExpanded, 'false')
    expect(trigger).toHaveFocus()
  })

  test('should close menu and move focus to next focusable element outside of the menu when tab is pressed', async () => {
    const user = userEvent.setup()
    const menu = screen.getByRole('menu')
    const trigger = screen.getByTestId('trigger')
    const buttonAfterMenu = screen.getByRole('button', {
      name: 'button after menu',
    })

    trigger.focus()
    await user.keyboard(arrowDown)
    await user.keyboard('{Tab}')

    expect(menu).toHaveAttribute(menuExpanded, 'false')
    expect(trigger).toHaveAttribute(triggerExpanded, 'false')
    expect(buttonAfterMenu).toHaveFocus()
  })

  test('should close when focus moves outside the menu and trigger', async () => {
    const user = userEvent.setup()
    const menu = screen.getByRole('menu')
    const trigger = screen.getByTestId('trigger')
    const nextFocusableElement = screen.getByRole('button', {
      name: 'button after menu',
    })
    const items = screen.getAllByRole('menuitem')

    await user.click(trigger)
    items[0].focus()
    nextFocusableElement.focus()

    expect(menu).toHaveAttribute('data-expanded', 'false')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  test('should move focus to next item when down arrow pressed', async () => {
    const user = userEvent.setup()
    const items = screen.getAllByRole('menuitem')

    items[0].focus()
    await user.keyboard(arrowDown)

    expect(items[1]).toHaveFocus()
  })

  test('should move focus to first item when down arrow pressed on last item', async () => {
    const user = userEvent.setup()
    const items = screen.getAllByRole('menuitem')

    items[items.length - 1].focus()
    await user.keyboard(arrowDown)

    expect(items[0]).toHaveFocus()
  })

  test('should move focus to previous item when up arrow pressed', async () => {
    const user = userEvent.setup()
    const items = screen.getAllByRole('menuitem')

    items[1].focus()
    await user.keyboard(arrowUp)

    expect(items[0]).toHaveFocus()
  })

  test('should move focus to last item when up arrow pressed on first item', async () => {
    const user = userEvent.setup()
    const items = screen.getAllByRole('menuitem')

    items[0].focus()
    await user.keyboard(arrowUp)

    expect(items[items.length - 1]).toHaveFocus()
  })

  test('should move focus to first item when home key pressed', async () => {
    const user = userEvent.setup()
    const items = screen.getAllByRole('menuitem')

    items[2].focus()
    await user.keyboard('{Home}')

    expect(items[0]).toHaveFocus()
  })

  test('should move focus to last item when end key pressed', async () => {
    const user = userEvent.setup()
    const items = screen.getAllByRole('menuitem')

    items[2].focus()
    await user.keyboard('{End}')

    expect(items[items.length - 1]).toHaveFocus()
  })

  test.todo(
    'should move to the menu next item starting with the same letter as the key pressed'
  )
})
