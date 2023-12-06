'use client'

import {
  type ForwardedRef,
  type PropsWithChildren,
  forwardRef,
  useMemo,
} from 'react'
import type { PopoverPosition } from '../context/Popover/types'
import { usePopover } from '../context/Popover/context'
import { AlertDialog, type AlertDialogProps } from './AlertDialog/sections'

function getVerticalPosition(size: number) {
  return `calc(${size}px + 1rem)`
}

function getStylesBasedOnPosition(
  height: number,
  width: number,
  position: PopoverPosition,
) {
  const xPos = getVerticalPosition(width)
  const yPos = getVerticalPosition(height)
  const hPos = {
    left: '50%',
    transform: 'translateX(-50%)',
  }
  const vPos = {
    top: '50%',
    transform: 'translateY(-50%)',
  }
  const posMap = {
    top: {
      bottom: yPos,
      ...hPos,
    },
    bottom: {
      top: yPos,
      ...hPos,
    },
    left: {
      left: `calc(-${width}px - 1rem)`,
      ...vPos,
      transform: `translate(-50%, -50%)`,
    },
    right: {
      left: xPos,
      ...vPos,
    },
  }

  return {
    ...posMap[position],
  }
}

function PopoverContentEl(
  props: PropsWithChildren<AlertDialogProps>,
  ref: ForwardedRef<HTMLDialogElement>,
) {
  const { height, width, position = 'bottom' } = usePopover()
  const styles = useMemo(
    () => getStylesBasedOnPosition(height, width, position),
    [height, width, position],
  )

  return (
    <AlertDialog
      bodyId={props.bodyId}
      headingId={props.headingId}
      usage="popover"
      ref={ref}
      style={styles}
    >
      {props.children}
    </AlertDialog>
  )
}

/**
 * Dialog component used for popovers that controls the positioning of the popover.
 * @param props any valid `AlertDialog` props
 * @returns dialog element
 */
export const PopoverContent = forwardRef<HTMLDialogElement, AlertDialogProps>(
  PopoverContentEl,
)
