import { screen, render, cleanup } from 'test-utils'
import {
  useAriaMenuButton,
  useAriaMenuSubmitButton,
  useAriaMenuList,
  useAriaMenuItem,
  useAriaMenuItemContainer,
} from '@pluralsight/react-aria'

const hasPopup = 'aria-haspopup'
const controls = 'aria-controls'
const expanded = 'aria-expanded'

describe('useAriaMenuButton', () => {
  const btnId = 'test-button'

  afterEach(cleanup)

  test('should return the correct props', () => {
    const Test = () => {
      const ariaProps = useAriaMenuButton({
        expanded: false,
        menuId: 'test-menu',
        id: btnId,
      })
      return <button {...ariaProps}>test</button>
    }
    render(<Test />)
    expect(screen.getByRole('button')).toHaveAttribute(hasPopup, 'menu')
    expect(screen.getByRole('button')).toHaveAttribute(controls, 'test-menu')
    expect(screen.getByRole('button')).toHaveAttribute('id', btnId)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    expect(screen.getByRole('button')).not.toHaveAttribute(expanded)
  })

  test('should return the correct props when expanded', () => {
    const Test = () => {
      const ariaProps = useAriaMenuButton({
        expanded: true,
        menuId: 'test-menu',
        id: btnId,
      })
      return <button {...ariaProps}>test</button>
    }
    render(<Test />)
    expect(screen.getByRole('button')).toHaveAttribute(hasPopup, 'menu')
    expect(screen.getByRole('button')).toHaveAttribute(controls, 'test-menu')
    expect(screen.getByRole('button')).toHaveAttribute('id', btnId)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    expect(screen.getByRole('button')).toHaveAttribute(expanded, 'true')
  })
})

describe('useAriaMenuSubmitButton', () => {
  test('should return the correct props', () => {
    const Test = () => {
      const ariaProps = useAriaMenuSubmitButton({
        value: '',
      })
      return <button {...ariaProps}>test</button>
    }
    render(<Test />)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    expect(screen.getByRole('button')).toHaveValue('')
  })

  test('should return the correct props when expanded', () => {
    const Test = () => {
      const ariaProps = useAriaMenuSubmitButton({
        value: 'selected',
      })
      return <button {...ariaProps}>test</button>
    }
    render(<Test />)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    expect(screen.getByRole('button')).toHaveValue('selected')
  })
})

describe('useAriaMenuList', () => {
  test('should return the correct props', () => {
    const Test = () => {
      const ariaProps = useAriaMenuList({
        id: 'test-menu',
        triggerId: 'test-button',
        value: '',
      })
      return <ul {...ariaProps}>test</ul>
    }
    render(<Test />)
    expect(screen.getByRole('menu')).toHaveAttribute(
      'aria-labelledby',
      'test-button',
    )
    expect(screen.getByRole('menu')).toHaveAttribute('id', 'test-menu')
    expect(screen.getByRole('menu')).toHaveAttribute('role', 'menu')
    expect(screen.getByRole('menu')).not.toHaveAttribute(
      'aria-activedescendant',
    )
  })

  test('should return the correct props when a value is present', () => {
    const Test = () => {
      const ariaProps = useAriaMenuList({
        id: 'test-menu',
        triggerId: 'test-button',
        value: 'selected',
      })
      return <ul {...ariaProps}>test</ul>
    }
    render(<Test />)
    expect(screen.getByRole('menu')).toHaveAttribute(
      'aria-labelledby',
      'test-button',
    )
    expect(screen.getByRole('menu')).toHaveAttribute('id', 'test-menu')
    expect(screen.getByRole('menu')).toHaveAttribute('role', 'menu')
    expect(screen.getByRole('menu')).toHaveAttribute(
      'aria-activedescendant',
      'selected',
    )
  })
})

describe('useAriaMenuItem', () => {
  test('should return the correct aria props for a menu item', () => {
    const Test = () => {
      const ariaProps = useAriaMenuItem()
      return <li {...ariaProps}>test</li>
    }
    render(<Test />)
    expect(screen.getByRole('none')).toBeInTheDocument()
  })
})

describe('useAriaMenuItemContainer', () => {
  test('should return the correct aria props for a menu item', () => {
    const Test = () => {
      const ariaProps = useAriaMenuItemContainer(false)
      return <li {...ariaProps}>test</li>
    }
    render(<Test />)
    expect(screen.getByRole('menuitem')).toBeInTheDocument()
    expect(screen.getByRole('menuitem')).not.toHaveAttribute('aria-selected')
  })

  test('should return the correct aria props for a selected menu item', () => {
    const Test = () => {
      const ariaProps = useAriaMenuItemContainer(true)
      return <li {...ariaProps}>test</li>
    }
    render(<Test />)
    expect(screen.getByRole('menuitem')).toBeInTheDocument()
    expect(screen.getByRole('menuitem')).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })
})
