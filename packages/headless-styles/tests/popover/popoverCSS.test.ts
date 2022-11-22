import { getPopoverProps } from '../../src'

describe('Popover CSS', () => {
  const baseClass = 'ps-popover'
  const defaultIds = {
    root: 'popover',
    body: 'popover-body',
    header: 'popover-header',
  }
  const defaultResult = {
    wrapper: {
      className: `${baseClass}-wrapper popoverWrapper`,
    },
    popover: {
      'aria-describedby': defaultIds.body,
      'aria-labelledby': defaultIds.header,
      'data-expanded': false,
      'data-popover': true,
      id: defaultIds.root,
      role: 'dialog',
      className: `${baseClass} popover topTooltip`,
    },
    content: {
      className: `${baseClass}-content popoverContentWithHeading topContent`,
    },
    header: {
      id: defaultIds.header,
      className: `${baseClass}-header popoverHeader`,
    },
    body: {
      id: defaultIds.body,
    },
    trigger: {
      'aria-haspopup': 'dialog',
      'aria-expanded': false,
      'aria-controls': defaultIds.root,
      tabIndex: 0,
      className: `${baseClass}-trigger popoverTrigger`,
    },
    closeButtonWrapper: {
      className: `${baseClass}-closeButtonWrapper popoverCloseButtonWrapper`,
    },
    closeButtonOptions: {
      ariaLabel: 'Close popover',
      sentiment: 'default',
      size: 'm',
      tech: '',
      usage: 'text',
    },
  }

  test('should accept an ID', () => {
    const id = 'test-popover'

    expect(
      getPopoverProps({
        id: id,
        headerId: defaultIds.header,
        bodyId: defaultIds.body,
      })
    ).toEqual({
      ...defaultResult,
      trigger: {
        ...defaultResult.trigger,
        'aria-controls': id,
      },
      popover: {
        ...defaultResult.popover,
        id: id,
      },
    })
  })

  test('should accept a heading ID', () => {
    const headerId = 'test-header'

    expect(
      getPopoverProps({
        id: defaultIds.root,
        headerId: headerId,
        bodyId: defaultIds.body,
      })
    ).toEqual({
      ...defaultResult,
      header: {
        ...defaultResult.header,
        id: headerId,
      },
      popover: {
        ...defaultResult.popover,
        'aria-labelledby': headerId,
      },
    })
  })

  test('should accept an aria label instead of heading ID', () => {
    const heading = 'test heading'

    expect(
      getPopoverProps({
        id: defaultIds.root,
        ariaLabel: heading,
        bodyId: defaultIds.body,
      })
    ).toEqual({
      ...defaultResult,
      header: {
        ...defaultResult.header,
        id: '',
      },
      content: {
        ...defaultResult.content,
        className: `${baseClass}-content popoverContent topContent`,
      },
      popover: {
        'aria-describedby': defaultResult.popover['aria-describedby'],
        'aria-label': heading,
        'data-expanded': defaultResult.popover['data-expanded'],
        'data-popover': defaultResult.popover['data-popover'],
        id: defaultResult.popover.id,
        role: defaultResult.popover.role,
        className: defaultResult.popover.className,
      },
    })
  })

  test('should accept a body ID', () => {
    const bodyId = 'test-body'

    expect(
      getPopoverProps({
        id: defaultIds.root,
        headerId: defaultIds.header,
        bodyId: bodyId,
      })
    ).toEqual({
      ...defaultResult,
      body: {
        ...defaultResult.body,
        id: bodyId,
      },
      popover: {
        ...defaultResult.popover,
        'aria-describedby': bodyId,
      },
    })
  })

  test('should accept an expanded state', () => {
    expect(
      getPopoverProps({
        id: defaultIds.root,
        headerId: defaultIds.header,
        bodyId: defaultIds.body,
        isExpanded: true,
      })
    ).toEqual({
      ...defaultResult,
      popover: {
        ...defaultResult.popover,
        'data-expanded': true,
      },
      trigger: {
        ...defaultResult.trigger,
        'aria-expanded': true,
      },
    })
  })

  test('should accept a position', () => {
    expect(
      getPopoverProps({
        id: defaultIds.root,
        headerId: defaultIds.header,
        bodyId: defaultIds.body,
        position: 'bottomEnd',
      })
    ).toEqual({
      ...defaultResult,
      popover: {
        ...defaultResult.popover,
        className: `${baseClass} popover bottomEndTooltip`,
      },
      content: {
        ...defaultResult.content,
        className: `${baseClass}-content popoverContentWithHeading bottomEndContent`,
      },
    })
  })

  test('should accept a tech type', () => {
    expect(
      getPopoverProps({
        id: defaultIds.root,
        headerId: defaultIds.header,
        bodyId: defaultIds.body,
        tech: 'svelte',
      })
    ).toEqual({
      ...defaultResult,
      wrapper: {
        class: defaultResult.wrapper.className,
      },
      popover: {
        'aria-describedby': defaultResult.popover['aria-describedby'],
        'aria-labelledby': defaultResult.popover['aria-labelledby'],
        'data-expanded': defaultResult.popover['data-expanded'],
        'data-popover': defaultResult.popover['data-popover'],
        id: defaultResult.popover.id,
        role: defaultResult.popover.role,
        class: defaultResult.popover.className,
      },
      content: {
        class: defaultResult.content.className,
      },
      header: {
        id: defaultResult.header.id,
        class: defaultResult.header.className,
      },
      body: {
        id: defaultResult.body.id,
      },
      trigger: {
        'aria-haspopup': defaultResult.trigger['aria-haspopup'],
        'aria-expanded': defaultResult.trigger['aria-expanded'],
        'aria-controls': defaultResult.trigger['aria-controls'],
        tabIndex: defaultResult.trigger.tabIndex,
        class: defaultResult.trigger.className,
      },
      closeButtonWrapper: {
        class: defaultResult.closeButtonWrapper.className,
      },
      closeButtonOptions: {
        ...defaultResult.closeButtonOptions,
        tech: 'svelte',
      },
    })
  })
})
