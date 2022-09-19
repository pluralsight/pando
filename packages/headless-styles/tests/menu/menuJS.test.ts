import { getJSMenuProps } from '../../src'

jest.mock('@pluralsight/shared', () => {
  return {
    menu: true,
  }
})

describe('Menu CSS - getJSMenuProps', () => {
  test('should accept a label option', () => {
    const menuProps = getJSMenuProps({ label: 'submenu' })

    expect(menuProps?.menu.a11yProps['aria-label']).toEqual('submenu')
  })

  test('should accept a submenu kind', () => {
    const menuProps = getJSMenuProps({ kind: 'submenu' })

    expect(menuProps?.firstMenuItem.a11yProps['aria-haspopup']).toEqual(true)
    expect(menuProps?.menuItem.a11yProps['aria-haspopup']).toEqual(true)
    expect(menuProps?.menuItem.cssProps).toContain('display: flex')
    expect(menuProps?.menuItem.styles?.display).toEqual('flex')
    expect(menuProps?.menu.cssProps).toContain('display: none')
    expect(menuProps?.menu.styles?.display).toEqual('none')
  })

  test('should accept an isSubmenuExpanded option', () => {
    const menuProps = getJSMenuProps({ isSubmenuExpanded: true })

    expect(menuProps?.firstMenuItem.a11yProps['aria-expanded']).toEqual(true)
    expect(menuProps?.menuItem.a11yProps['aria-expanded']).toEqual(true)
    expect(menuProps?.menuItem.cssProps).toContain(
      'background: var(--ps-action-background)'
    )
    expect(menuProps?.menuItem.styles?.background).toEqual(
      'var(--ps-action-background)'
    )
    expect(menuProps?.menu.cssProps).toContain('display: block')
    expect(menuProps?.menu.styles?.display).toEqual('block')
  })
})
