import { unstable_getTooltipProps } from '../../src'

jest.mock('@pluralsight/shared', () => {
  return {
    tooltip: true,
  }
})

describe('Tooltip CSS', () => {
  const baseClass = 'ps-tooltip'
  const result = {
    wrapper: {
      className: `${baseClass}-wrapper tooltipWrapper`,
    },
    tooltip: {
      className: `${baseClass} tooltip topTooltip`,
      id: 'tooltip',
      role: 'tooltip',
    },
    trigger: {
      'aria-describedby': 'tooltip',
      className: `${baseClass}-trigger tooltipTrigger`,
      tabIndex: 0,
    },
  }

  test('should accept a tooltip ID', () => {
    const tooltipId = 'tooltip-test'

    expect(
      unstable_getTooltipProps({
        id: tooltipId,
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        id: tooltipId,
      },
      trigger: {
        ...result.trigger,
        'aria-describedby': tooltipId,
      },
    })
  })

  test('should accept a position of topStart', () => {
    expect(
      unstable_getTooltipProps({
        id: 'tooltip',
        position: 'topStart',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip topStartTooltip`,
      },
    })
  })

  test('should accept a position of top', () => {
    expect(
      unstable_getTooltipProps({
        id: 'tooltip',
        position: 'top',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip topTooltip`,
      },
    })
  })

  test('should accept a position of topEnd', () => {
    expect(
      unstable_getTooltipProps({
        id: 'tooltip',
        position: 'topEnd',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip topEndTooltip`,
      },
    })
  })

  test('should accept a position of right', () => {
    expect(
      unstable_getTooltipProps({
        id: 'tooltip',
        position: 'right',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip rightTooltip`,
      },
    })
  })

  test('should accept a position of rightStart', () => {
    expect(
      unstable_getTooltipProps({
        id: 'tooltip',
        position: 'rightStart',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip rightStartTooltip`,
      },
    })
  })

  test('should accept a position of rightEnd', () => {
    expect(
      unstable_getTooltipProps({
        id: 'tooltip',
        position: 'rightEnd',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip rightEndTooltip`,
      },
    })
  })

  test('should accept a position of bottom', () => {
    expect(
      unstable_getTooltipProps({
        id: 'tooltip',
        position: 'bottom',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip bottomTooltip`,
      },
    })
  })

  test('should accept a position of bottomStart', () => {
    expect(
      unstable_getTooltipProps({
        id: 'tooltip',
        position: 'bottomStart',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip bottomStartTooltip`,
      },
    })
  })

  test('should accept a position of bottomEnd', () => {
    expect(
      unstable_getTooltipProps({
        id: 'tooltip',
        position: 'bottomEnd',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip bottomEndTooltip`,
      },
    })
  })

  test('should accept a position of left', () => {
    expect(
      unstable_getTooltipProps({
        id: 'tooltip',
        position: 'left',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip leftTooltip`,
      },
    })
  })

  test('should accept a position of leftStart', () => {
    expect(
      unstable_getTooltipProps({
        id: 'tooltip',
        position: 'leftStart',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip leftStartTooltip`,
      },
    })
  })

  test('should accept a position of leftEnd', () => {
    expect(
      unstable_getTooltipProps({
        id: 'tooltip',
        position: 'leftEnd',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip leftEndTooltip`,
      },
    })
  })

  test('should accept a tech type', () => {
    expect(
      unstable_getTooltipProps({
        id: 'tooltip',
        tech: 'svelte',
      })
    ).toEqual({
      wrapper: {
        class: `${baseClass}-wrapper tooltipWrapper`,
      },
      tooltip: {
        class: `${baseClass} tooltip topTooltip`,
        id: 'tooltip',
        role: 'tooltip',
      },
      trigger: {
        'aria-describedby': 'tooltip',
        class: `${baseClass}-trigger tooltipTrigger`,
        tabIndex: 0,
      },
    })
  })
})
