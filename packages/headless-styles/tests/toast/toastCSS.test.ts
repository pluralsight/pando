import {
  getToastButtonProps,
  getToastContainerProps,
  getToastHeadingProps,
} from '../../src/components/Toast/toastCSS'

describe('Toast CSS', () => {
  const ariaLabel = 'close alert'
  const closeIconWrapperClass =
    'pando-toast-close-icon-wrapper toastCloseIconWrapper'
  const iconWrapperClass = 'pando-toast-icon-wrapper toastIconWrapper'
  const sectionClass = 'pando-toast-section toastSection'
  const toastWrapperClass = 'pando-toast-wrapper toastWrapper'

  test('should return the correct default props for the toast container', () => {
    expect(getToastContainerProps()).toEqual({
      closeButtonOptions: {
        ariaLabel,
        usage: 'text',
        size: 'm',
      },
      closeIconWrapper: {
        className: closeIconWrapperClass,
      },
      container: {
        className: 'pando-toast infoToast',
      },
      iconWrapper: {
        className: iconWrapperClass,
      },
      iconOptions: {
        ariaHidden: true,
        customSize: '2rem',
      },
      section: {
        className: sectionClass,
      },
      wrapper: {
        className: toastWrapperClass,
        role: 'alert',
      },
    })
  })

  test('should return the correct props for the info toast container', () => {
    expect(getToastContainerProps({ sentiment: 'info' })).toEqual({
      closeButtonOptions: {
        ariaLabel,
        usage: 'text',
        size: 'm',
      },
      closeIconWrapper: {
        className: closeIconWrapperClass,
      },
      container: {
        className: 'pando-toast infoToast',
      },
      iconWrapper: {
        className: iconWrapperClass,
      },
      iconOptions: {
        ariaHidden: true,
        customSize: '2rem',
      },
      section: {
        className: sectionClass,
      },
      wrapper: {
        className: toastWrapperClass,
        role: 'alert',
      },
    })
  })

  test('should return the correct props for the success toast container', () => {
    expect(getToastContainerProps({ sentiment: 'success' })).toEqual({
      closeButtonOptions: {
        ariaLabel,
        usage: 'text',
        size: 'm',
      },
      closeIconWrapper: {
        className: closeIconWrapperClass,
      },
      container: {
        className: 'pando-toast successToast',
      },
      iconWrapper: {
        className: iconWrapperClass,
      },
      iconOptions: {
        ariaHidden: true,
        customSize: '2rem',
      },
      section: {
        className: sectionClass,
      },
      wrapper: {
        className: toastWrapperClass,
        role: 'alert',
      },
    })
  })

  test('should return the correct props for the warning toast container', () => {
    expect(getToastContainerProps({ sentiment: 'warning' })).toEqual({
      closeButtonOptions: {
        ariaLabel,
        usage: 'text',
        size: 'm',
      },
      closeIconWrapper: {
        className: closeIconWrapperClass,
      },
      container: {
        className: 'pando-toast warningToast',
      },
      iconWrapper: {
        className: iconWrapperClass,
      },
      iconOptions: {
        ariaHidden: true,
        customSize: '2rem',
      },
      section: {
        className: sectionClass,
      },
      wrapper: {
        className: toastWrapperClass,
        role: 'alert',
      },
    })
  })

  test('should return the correct props for the danger toast container', () => {
    expect(getToastContainerProps({ sentiment: 'danger' })).toEqual({
      closeButtonOptions: {
        ariaLabel,
        usage: 'text',
        size: 'm',
      },
      closeIconWrapper: {
        className: closeIconWrapperClass,
      },
      container: {
        className: 'pando-toast dangerToast',
      },
      iconWrapper: {
        className: iconWrapperClass,
      },
      iconOptions: {
        ariaHidden: true,
        customSize: '2rem',
      },
      section: {
        className: sectionClass,
      },
      wrapper: {
        className: toastWrapperClass,
        role: 'alert',
      },
    })
  })

  test('should return the correct props for the toast button', () => {
    expect(getToastButtonProps()).toEqual({
      className: 'pando-toast-button toastButton',
    })
  })

  test('should return the correct props for the toast heading', () => {
    expect(getToastHeadingProps()).toEqual({
      className: 'pando-toast-heading toastHeading',
    })
  })
})
