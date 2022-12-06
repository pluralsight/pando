import { getTextLinkProps } from '../../src'

describe('Text Link CSS - getTextLinkProps', () => {
  const baseClass = 'ps-text-link'
  const defaultResult = {
    link: {
      className: `${baseClass} textLinkBase`,
      href: '',
    },
  }

  test('should accept a relative href', () => {
    expect(getTextLinkProps({ href: 'index.html' })).toEqual({
      ...defaultResult,
      link: {
        ...defaultResult.link,
        href: 'index.html',
      },
    })
  })

  test('should accept an external href', () => {
    expect(getTextLinkProps({ href: 'https://www.pluralsight.com' })).toEqual({
      ...defaultResult,
      link: {
        ...defaultResult.link,
        href: 'https://www.pluralsight.com',
        rel: 'noopener external',
        target: '_blank',
      },
      iconOptions: {
        ariaLabel: '(opens in a new window)',
        ariaHidden: false,
        customSize: '1em',
      },
    })
  })
})
