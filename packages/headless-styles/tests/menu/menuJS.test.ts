import { getJSMenuProps, getJSMenuItemProps } from '../../src'

describe('Menu CSS', () => {
  describe('getJSMenuProps', () => {
    test('should accept a label option', () => {
      const menuProps = getJSMenuProps({ label: 'submenu' })

      expect(menuProps?.menu.a11yProps['aria-label']).toEqual('submenu')
    })

    test('should accept an expanded flag', () => {
      const menuProps = getJSMenuProps({ isExpanded: true })

      expect(menuProps?.trigger.a11yProps['aria-expanded']).toEqual(true)
      expect(menuProps?.trigger.a11yProps['aria-haspopup']).toEqual(true)
      expect(menuProps?.menu.a11yProps['data-expanded']).toEqual(true)
    })
  })

  describe('getJSMenuItemProps', () => {
    test('should accept no options', () => {
      const menuItemProps = getJSMenuItemProps()

      expect(menuItemProps?.menuItem.a11yProps.role).toEqual('menuitem')
      expect(menuItemProps?.menuItem.cssProps).toContain('display: flex')
      expect(menuItemProps?.menuItem.styles?.display).toEqual('flex')
      expect(menuItemProps?.menuListItem.cssProps).toContain(
        'position: relative'
      )
      expect(menuItemProps?.menuListItem.styles.position).toEqual('relative')
    })
  })
})
