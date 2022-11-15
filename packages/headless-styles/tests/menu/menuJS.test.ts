import { getJSMenuProps } from '../../src'

describe('Menu CSS - getJSMenuProps', () => {
  test('should accept a label option', () => {
    const menuProps = getJSMenuProps({ label: 'submenu' })

    expect(menuProps?.menu.a11yProps['aria-label']).toEqual('submenu')
  })

  test('should accept a submenu kind', () => {
    const menuProps = getJSMenuProps({ kind: 'submenu' })

    expect(menuProps?.menuItem.a11yProps['aria-haspopup']).toEqual(true)
    expect(menuProps?.menuItem.cssProps).toContain('display: flex')
    expect(menuProps?.menuItem.styles?.display).toEqual('flex')
    expect(menuProps?.menu.cssProps).toContain('display: none')
    expect(menuProps?.menu.styles?.display).toEqual('none')
  })

  test('should accept an expanded flag', () => {
    const menuProps = getJSMenuProps({ isExpanded: true })

    expect(menuProps?.trigger.a11yProps['aria-expanded']).toEqual(true)
    expect(menuProps?.menu.a11yProps['data-expanded']).toEqual(true)
  })

  test('should accept an expanded flag for submenus', () => {
    const submenuProps = getJSMenuProps({ kind: 'submenu', isExpanded: true })

    expect(submenuProps?.menuItem.a11yProps['aria-expanded']).toEqual(true)
    expect(submenuProps?.menu.a11yProps['data-expanded']).toEqual(true)
  })
})
