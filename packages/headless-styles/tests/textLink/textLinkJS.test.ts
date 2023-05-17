import { getJSTextLinkProps } from '../../src'

describe('Text Link JS', () => {
  test('should accept a relative href', () => {
    const linkProps = getJSTextLinkProps({ href: 'index.html' })

    expect(linkProps.cssProps).toContain('text-decoration: underline;')
    expect(linkProps.styles.textDecoration).toEqual('underline')
    expect(linkProps.link.href).toEqual('index.html')
  })

  test('should accept an external href', () => {
    const externalLinkProps = getJSTextLinkProps({
      href: 'https://www.pluralsight.com',
    })

    expect(externalLinkProps.cssProps).toContain('text-decoration: underline;')
    expect(externalLinkProps.styles.textDecoration).toEqual('underline')
    expect(externalLinkProps.link.rel).toEqual('noopener external')
    expect(externalLinkProps.link.target).toEqual('_blank')
    expect(externalLinkProps.iconOptions).toEqual({
      ariaHidden: true,
      customSize: '1em',
    })
  })
})
