import { getJSTextLinkProps } from '../../src'

describe('Text Link JS - getJSTextLinkProps', () => {
  test('should accept a relative href', () => {
    const linkProps = getJSTextLinkProps({ href: 'index.html' })

    expect(linkProps.link.cssProps).toContain('text-decoration: underline;')
    expect(linkProps.link.styles.textDecoration).toEqual('underline')
    expect(linkProps.link.a11yProps.href).toEqual('index.html')
  })

  test('should accept an external href', () => {
    const externalLinkProps = getJSTextLinkProps({
      href: 'https://www.pluralsight.com',
    })

    expect(externalLinkProps.link.cssProps).toContain(
      'text-decoration: underline;'
    )
    expect(externalLinkProps.link.styles.textDecoration).toEqual('underline')
    expect(externalLinkProps.link.a11yProps.rel).toEqual('noopener external')
    expect(externalLinkProps.link.a11yProps.target).toEqual('_blank')
    expect(externalLinkProps.iconOptions).toEqual({
      ariaHidden: false,
      ariaLabel: '(opens in a new window)',
      customSize: '1em',
      tech: '',
    })
  })
})
