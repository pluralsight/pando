import type { PopoverOptions, TooltipOptions } from '../../../types'
import type { Position, StyleKey } from '../../types'
import positions from '../generated/position.module'
import type { Alignment, Axis, TooltipStyleKeys, Side } from './types'

export function getTooltipClasses<StyleModule>(
  options: Required<TooltipOptions> | Required<PopoverOptions>
): TooltipStyleKeys<StyleModule> {
  return {
    contentPositionClass:
      `${options.position}PandoPositionContent` as StyleKey<StyleModule>,
    positionClass: `${options.position}PandoPosition` as StyleKey<StyleModule>,
  }
}

export function getTooltipPositions(position: Position) {
  const side = getSide(position)
  const positionClasses = getPositionClasses(
    side,
    getAxis(side),
    getAlignment(position)
  )

  const sideStyles = positions[positionClasses.sideClass]
  const alignmentStyles = positions[positionClasses.alignmentClass]
  const contentSideStyles = positions[positionClasses.contentSideClass]
  const contentAlignmentStyles =
    positions[positionClasses.contentAlignmentClass]

  return {
    positions: {
      ...sideStyles,
      ...alignmentStyles,
    },
    contentPositions: {
      ...contentSideStyles,
      ...contentAlignmentStyles,
      '&::after': {
        ...(contentSideStyles[
          '&::after' as keyof typeof contentSideStyles
        ] as Record<string, string>),
        ...(contentAlignmentStyles[
          '&::after' as keyof typeof contentAlignmentStyles
        ] as Record<string, string>),
      },
    },
  }
}

function getSide(position: Position): Side {
  if (position.startsWith('bottom')) {
    return 'bottom'
  } else if (position.startsWith('right')) {
    return 'right'
  } else if (position.startsWith('left')) {
    return 'left'
  }

  return 'top'
}

function getAlignment(position: Position): Alignment {
  if (position.indexOf('Start') > -1) {
    return 'Start'
  } else if (position.indexOf('End') > -1) {
    return 'End'
  }

  return 'Center'
}

function getAxis(side: Side): Axis {
  return side === 'top' || side === 'bottom' ? 'horizontal' : 'vertical'
}

function getPositionClasses(side: Side, axis: Axis, alignment: Alignment) {
  return {
    sideClass: `${side}PandoPosition` as keyof typeof positions,
    alignmentClass: `${axis}${alignment}` as keyof typeof positions,
    contentSideClass: `${side}PandoPositionContent` as keyof typeof positions,
    contentAlignmentClass:
      `${axis}${alignment}Content` as keyof typeof positions,
  }
}
