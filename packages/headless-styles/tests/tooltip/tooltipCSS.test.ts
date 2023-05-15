import { getTooltipProps } from '../../src'

describe('Tooltip CSS', () => {
  const baseClass = 'ps-tooltip'
  const result = {
    wrapper: {
      className: `${baseClass}-wrapper pando_tooltipWrapper`,
    },
    tooltip: {
      className: `${baseClass} pando_tooltip pando_topPosition`,
      'data-tooltip': true,
      disabled: false,
      id: 'tooltip',
      role: 'tooltip',
    },
    tooltipContent: {
      className: `${baseClass}-content pando_tooltipContent pando_topPositionContent`,
    },
    trigger: {
      'aria-describedby': 'tooltip',
      className: `${baseClass}-trigger pando_tooltipTrigger`,
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
        disabled: true,
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
        className: `${baseClass} pando_tooltip pando_topStartPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content pando_tooltipContent pando_topStartPositionContent`,
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
        className: `${baseClass} pando_tooltip pando_topPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content pando_tooltipContent pando_topPositionContent`,
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
        className: `${baseClass} pando_tooltip pando_topEndPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content pando_tooltipContent pando_topEndPositionContent`,
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
        className: `${baseClass} pando_tooltip pando_rightPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content pando_tooltipContent pando_rightPositionContent`,
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
        className: `${baseClass} pando_tooltip pando_rightStartPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content pando_tooltipContent pando_rightStartPositionContent`,
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
        className: `${baseClass} pando_tooltip pando_rightEndPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content pando_tooltipContent pando_rightEndPositionContent`,
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
        className: `${baseClass} pando_tooltip pando_bottomPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content pando_tooltipContent pando_bottomPositionContent`,
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
        className: `${baseClass} pando_tooltip pando_bottomStartPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content pando_tooltipContent pando_bottomStartPositionContent`,
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
        className: `${baseClass} pando_tooltip pando_bottomEndPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content pando_tooltipContent pando_bottomEndPositionContent`,
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
        className: `${baseClass} pando_tooltip pando_leftPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content pando_tooltipContent pando_leftPositionContent`,
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
        className: `${baseClass} pando_tooltip pando_leftStartPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content pando_tooltipContent pando_leftStartPositionContent`,
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
        className: `${baseClass} pando_tooltip pando_leftEndPosition`,
      },
      tooltipContent: {
        ...result.tooltipContent,
        className: `${baseClass}-content pando_tooltipContent pando_leftEndPositionContent`,
      },
    })
  })
})
