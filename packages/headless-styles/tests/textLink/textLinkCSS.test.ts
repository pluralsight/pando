import { getTextLinkProps } from '../../src'

describe('TextLink CSS', () => {
  const baseClass = 'pando-text-link'
  const defaultResult = {
    link: {
      className: `${baseClass} pando_textLink`,
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
        ariaHidden: true,
        customSize: '1em',
      },
    })
  })

  test('should accept custom class names', () => {
    expect(
      getTextLinkProps({
        classNames: ['customClass1', 'customClass2'],
      })
    ).toEqual({
      ...defaultResult,
      link: {
        ...defaultResult.link,
        className: `${baseClass} pando_textLink customClass1 customClass2`,
      },
    })
  })
})
