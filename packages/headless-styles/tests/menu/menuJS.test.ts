import { getJSMenuProps, getJSMenuItemProps } from '../../src'

describe('Menu CSS', () => {
  describe('getJSMenuProps', () => {
    test('should accept a label option', () => {
      const menuProps = getJSMenuProps({ label: 'submenu' })

      expect(menuProps.menu.a11yProps['aria-label']).toEqual('submenu')
    })

    test('should accept an expanded flag', () => {
      const menuProps = getJSMenuProps({ isExpanded: true })

      expect(menuProps.trigger.a11yProps['aria-expanded']).toEqual(true)
      expect(menuProps.trigger.a11yProps['aria-haspopup']).toEqual(true)
      expect(menuProps.menu.a11yProps['data-expanded']).toEqual(true)
    })

    test('should accept a position option', () => {
      const menuProps = getJSMenuProps({ position: 'rightStart' })

      expect(menuProps.menu.cssProps).toContain('left: 100%')
      expect(menuProps.menu.styles.left).toEqual('100%')
      expect(menuProps.menu.cssProps).toContain('margin-left: 0.625rem')
      expect(menuProps.menu.styles.marginLeft).toEqual('0.625rem')
    })
  })

  describe('getJSMenuItemProps', () => {
    test('should accept no options', () => {
      const menuItemProps = getJSMenuItemProps()

      expect(menuItemProps.menuItem.a11yProps.role).toEqual('menuitem')
      expect(menuItemProps.menuItem.a11yProps['aria-disabled']).toEqual(false)
      expect(menuItemProps.menuItem.cssProps).toContain('display: flex')
      expect(menuItemProps.menuItem.styles.display).toEqual('flex')
      expect(menuItemProps.menuListItem.cssProps).toContain(
        'position: relative'
      )
      expect(menuItemProps.menuListItem.styles.position).toEqual('relative')
      expect(menuItemProps.divider.cssProps).toContain('height: 1px')
      expect(menuItemProps.divider.styles.height).toEqual('1px')
      expect(menuItemProps.menuItemText.cssProps).toContain('flex-grow: 1')
      expect(menuItemProps.menuItemText.styles.flexGrow).toEqual('1')
    })
    test('should accept a disabled option', () => {
      const menuItemProps = getJSMenuItemProps({ disabled: true })
      expect(menuItemProps.menuItem.a11yProps['aria-disabled']).toEqual(true)
    })
  })
})
