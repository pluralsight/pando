import { getTooltipProps } from '../../src'

describe('Tooltip CSS', () => {
  const baseClass = 'ps-tooltip'
  const result = {
    wrapper: {
      className: `${baseClass}-wrapper tooltipWrapper`,
    },
    tooltip: {
      className: `${baseClass} tooltip topPandoPosition`,
      'data-disabled': false,
      'data-tooltip': true,
      id: 'tooltip',
      role: 'tooltip',
    },
    tooltipContent: {
      className: `${baseClass}-content tooltipContent topPandoPositionContent`,
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
        className: `${baseClass} tooltip topStartPandoPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent topStartPandoPositionContent`,
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
        className: `${baseClass} tooltip topPandoPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent topPandoPositionContent`,
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
        className: `${baseClass} tooltip topEndPandoPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent topEndPandoPositionContent`,
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
        className: `${baseClass} tooltip rightPandoPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent rightPandoPositionContent`,
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
        className: `${baseClass} tooltip rightStartPandoPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent rightStartPandoPositionContent`,
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
        className: `${baseClass} tooltip rightEndPandoPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent rightEndPandoPositionContent`,
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
        className: `${baseClass} tooltip bottomPandoPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent bottomPandoPositionContent`,
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
        className: `${baseClass} tooltip bottomStartPandoPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent bottomStartPandoPositionContent`,
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
        className: `${baseClass} tooltip bottomEndPandoPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent bottomEndPandoPositionContent`,
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
        className: `${baseClass} tooltip leftPandoPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent leftPandoPositionContent`,
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
        className: `${baseClass} tooltip leftStartPandoPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent leftStartPandoPositionContent`,
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
        className: `${baseClass} tooltip leftEndPandoPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content tooltipContent leftEndPandoPositionContent`,
      },
    })
  })
})
