import { render, screen, userEvent, waitFor } from 'test-utils'
import { useMenuInteraction } from '../../src'

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
        <button {...menuNavProps?.trigger}>{props.label}</button>
        {menuNavProps.expanded && (
          <menu aria-label={props.label} {...menuNavProps?.menu}>
            <MenuItem label="Menu item 1" />
            <MenuItem label="Menu item 2" />
            <MenuItem label="Menu item 3" />
            <MenuItem label="Menu item 4" />
            <MenuItem label="Menu item 5" />
          </menu>
        )}
      </div>
    )
  }

  function MenuTest(props: MenuProps) {
    return (
      <>
        <Menu label={props.label} />
        <button>button after menu</button>
      </>
    )
  }

  const triggerExpanded = 'aria-expanded'
  const menuExpanded = 'data-expanded'
  const arrowUp = '{ArrowUp}'
  const arrowDown = '{ArrowDown}'

  test('should have the correct initial aria attributes present', () => {
    render(<MenuTest label="one" />)

    const trigger = screen.getByText(/one/i)
    expect(trigger).toHaveAttribute(triggerExpanded, 'false')
    expect(trigger).toHaveAttribute('aria-haspopup', 'true')
  })

  test('should display menu when trigger clicked', async () => {
    const user = userEvent.setup()
    render(<MenuTest label="two" />)

    const trigger = screen.getByText(/two/i)

    user.click(trigger)

    const menu = await screen.findByRole('menu', undefined, {
      mutationObserverOptions: {
        attributes: true,
      },
    })
    await waitFor(() => expect(menu).toHaveAttribute(menuExpanded, 'true'))

    expect(trigger).toHaveAttribute(triggerExpanded, 'true')
  })

  test('should display menu and focus first item when down arrow pressed on trigger', async () => {
    const user = userEvent.setup()
    render(<MenuTest label="three" />)

    const trigger = screen.getByText(/three/i)
    trigger.focus()

    user.keyboard(arrowDown)

    const menu = await screen.findByRole('menu', undefined, {
      mutationObserverOptions: {
        attributes: true,
      },
    })
    await waitFor(() => expect(menu).toHaveAttribute(menuExpanded, 'true'))

    expect(trigger).toHaveAttribute(triggerExpanded, 'true')
    expect(screen.getByText(/menu item 1/i)).toHaveFocus()
  })

  test('should close menu and focus on trigger item when escape pressed within menu', async () => {
    const user = userEvent.setup()
    render(<MenuTest label="four" />)

    const trigger = screen.getByText(/four/i)
    trigger.focus()

    user.keyboard(arrowDown)

    const menu = await screen.findByRole('menu', undefined, {
      mutationObserverOptions: {
        attributes: true,
      },
    })
    await waitFor(() => expect(menu).toHaveAttribute(menuExpanded, 'true'))

    await waitFor(() => user.keyboard('{Escape}'))
    await waitFor(() => expect(menu).not.toBeInTheDocument())

    expect(trigger).toHaveAttribute(triggerExpanded, 'false')
    expect(trigger).toHaveFocus()
  })

  test('should close menu and move focus to next focusable element outside of the menu when tab is pressed', async () => {
    const user = userEvent.setup()
    render(<MenuTest label="five" />)

    const trigger = screen.getByText(/five/i)
    trigger.focus()

    await waitFor(() => user.keyboard(arrowDown))
    const menu = await screen.findByRole('menu', undefined, {
      mutationObserverOptions: {
        attributes: true,
      },
    })
    await waitFor(() => expect(menu).toHaveAttribute(menuExpanded, 'true'))

    await waitFor(() => user.keyboard('{Tab}'))
    await waitFor(() => expect(menu).not.toBeInTheDocument())

    expect(trigger).toHaveAttribute(triggerExpanded, 'false')

    const afterButton = await screen.findByText(
      /button after menu/i,
      undefined,
      {
        mutationObserverOptions: {
          attributes: true,
        },
      }
    )
    await waitFor(() => expect(afterButton).toHaveFocus())
  })

  test('should move focus to next item when down arrow pressed when open', async () => {
    const user = userEvent.setup()
    render(<MenuTest label="seven" />)

    const trigger = screen.getByText(/seven/i)
    trigger.focus()

    await waitFor(() => user.keyboard(arrowDown))
    const menu = await screen.findByRole('menu', undefined, {
      mutationObserverOptions: {
        attributes: true,
      },
    })
    await waitFor(() => expect(menu).toHaveAttribute(menuExpanded, 'true'))

    await waitFor(() => user.keyboard(arrowDown))
    await waitFor(() => expect(screen.getByText(/menu item 2/i)).toHaveFocus())
  })

  test('should allow focus to disabled menu items', async () => {
    const user = userEvent.setup()
    render(<MenuTest label="disabled" />)

    const trigger = screen.getByText(/disabled/i)
    trigger.focus()

    await waitFor(() => user.keyboard(arrowDown))
    const menu = await screen.findByRole('menu', undefined, {
      mutationObserverOptions: {
        attributes: true,
      },
    })
    await waitFor(() => expect(menu).toHaveAttribute(menuExpanded, 'true'))

    const menuItem2 = screen.getByText(/menu item 2/i)
    menuItem2.setAttribute('aria-disabled', 'true')
    await waitFor(() => user.keyboard(arrowDown))
    await waitFor(() => expect(menuItem2).toHaveFocus())
  })

  test('should move focus to first item when down arrow pressed on last item', async () => {
    const user = userEvent.setup()
    render(<MenuTest label="eight" />)

    const trigger = screen.getByText(/eight/i)
    trigger.focus()

    await waitFor(() => user.keyboard(arrowDown))
    const menu = await screen.findByRole('menu', undefined, {
      mutationObserverOptions: {
        attributes: true,
      },
    })
    await waitFor(() => expect(menu).toHaveAttribute(menuExpanded, 'true'))

    await waitFor(() => user.keyboard(arrowDown))
    await waitFor(() => user.keyboard(arrowDown))
    await waitFor(() => user.keyboard(arrowDown))
    await waitFor(() => user.keyboard(arrowDown))
    await waitFor(() => user.keyboard(arrowDown))
    await waitFor(() => expect(screen.getByText(/menu item 1/i)).toHaveFocus())
  })

  test('should move focus to previous item when up arrow pressed', async () => {
    const user = userEvent.setup()
    render(<MenuTest label="nein!" />)

    const trigger = screen.getByText(/nein!/i)
    trigger.focus()

    await waitFor(() => user.keyboard(arrowDown))
    const menu = await screen.findByRole('menu', undefined, {
      mutationObserverOptions: {
        attributes: true,
      },
    })
    await waitFor(() => expect(menu).toHaveAttribute(menuExpanded, 'true'))

    await waitFor(() => user.keyboard(arrowDown))
    await waitFor(() => user.keyboard(arrowDown))
    await waitFor(() => user.keyboard(arrowUp))
    await waitFor(() => expect(screen.getByText(/menu item 2/i)).toHaveFocus())
  })

  test('should move focus to last item when up arrow pressed on first item', async () => {
    const user = userEvent.setup()
    render(<MenuTest label="ten" />)

    const trigger = screen.getByText(/ten/i)
    trigger.focus()

    await waitFor(() => user.keyboard(arrowDown))
    const menu = await screen.findByRole('menu', undefined, {
      mutationObserverOptions: {
        attributes: true,
      },
    })
    await waitFor(() => expect(menu).toHaveAttribute(menuExpanded, 'true'))

    await waitFor(() => user.keyboard(arrowUp))
    await waitFor(() => expect(screen.getByText(/menu item 5/i)).toHaveFocus())
  })

  test('should move focus to first item when home key pressed', async () => {
    const user = userEvent.setup()
    render(<MenuTest label="el" />)

    const trigger = screen.getByText(/el/i)
    trigger.focus()

    await waitFor(() => user.keyboard(arrowDown))
    const menu = await screen.findByRole('menu', undefined, {
      mutationObserverOptions: {
        attributes: true,
      },
    })
    await waitFor(() => expect(menu).toHaveAttribute(menuExpanded, 'true'))

    await waitFor(() => user.keyboard('{Home}'))
    await waitFor(() => expect(screen.getByText(/menu item 1/i)).toHaveFocus())
  })

  test('should move focus to last item when end key pressed', async () => {
    const user = userEvent.setup()
    render(<MenuTest label="el" />)

    const trigger = screen.getByText(/el/i)
    trigger.focus()

    await waitFor(() => user.keyboard(arrowDown))
    const menu = await screen.findByRole('menu', undefined, {
      mutationObserverOptions: {
        attributes: true,
      },
    })
    await waitFor(() => expect(menu).toHaveAttribute(menuExpanded, 'true'))

    await waitFor(() => user.keyboard('{End}'))
    await waitFor(() => expect(screen.getByText(/menu item 5/i)).toHaveFocus())
  })

  test.todo(
    'should move to the menu next item starting with the same letter as the key pressed'
  )
})
