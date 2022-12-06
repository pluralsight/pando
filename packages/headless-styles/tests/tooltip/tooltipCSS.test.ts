import { getTooltipProps } from '../../src'

describe('Tooltip CSS', () => {
  const baseClass = 'ps-tooltip'
  const result = {
    wrapper: {
      className: `${baseClass}-wrapper tooltipWrapper`,
    },
    tooltip: {
      className: `${baseClass} tooltip topTooltip`,
      'data-disabled': false,
      'data-tooltip': true,
      id: 'tooltip',
      role: 'tooltip',
    },
    tooltipContent: {
      className: `${baseClass}-content tooltipContent topContent`,
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
      getTooltipProps({
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

  test('should accept a disabled option', () => {
    const tooltipId = 'tooltip-test'

    expect(
      getTooltipProps({
        id: tooltipId,
        disabled: true,
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        'data-disabled': true,
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
      getTooltipProps({
        id: 'tooltip',
        position: 'topStart',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip topStartTooltip`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent topStartContent`,
      },
    })
  })

  test('should accept a position of top', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'top',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip topTooltip`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent topContent`,
      },
    })
  })

  test('should accept a position of topEnd', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'topEnd',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip topEndTooltip`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent topEndContent`,
      },
    })
  })

  test('should accept a position of right', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'right',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip rightTooltip`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent rightContent`,
      },
    })
  })

  test('should accept a position of rightStart', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'rightStart',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip rightStartTooltip`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent rightStartContent`,
      },
    })
  })

  test('should accept a position of rightEnd', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'rightEnd',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip rightEndTooltip`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent rightEndContent`,
      },
    })
  })

  test('should accept a position of bottom', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'bottom',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip bottomTooltip`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent bottomContent`,
      },
    })
  })

  test('should accept a position of bottomStart', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'bottomStart',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip bottomStartTooltip`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent bottomStartContent`,
      },
    })
  })

  test('should accept a position of bottomEnd', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'bottomEnd',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip bottomEndTooltip`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent bottomEndContent`,
      },
    })
  })

  test('should accept a position of left', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'left',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip leftTooltip`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent leftContent`,
      },
    })
  })

  test('should accept a position of leftStart', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'leftStart',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip leftStartTooltip`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent leftStartContent`,
      },
    })
  })

  test('should accept a position of leftEnd', () => {
    expect(
      getTooltipProps({
        id: 'tooltip',
        position: 'leftEnd',
      })
    ).toEqual({
      ...result,
      tooltip: {
        ...result.tooltip,
        className: `${baseClass} tooltip leftEndTooltip`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent leftEndContent`,
      },
    })
  })
})
