import { forwardRef, type ForwardedRef } from 'react'
import { ChevronDownIcon } from '@pluralsight/icons'
import { Button } from '../../index.ts'
import type { ButtonProps } from '../../types.ts'

// TODO: Figure out Navigation Link situation

type MenuButtonProps = ButtonProps

function MenuButtonEl(
  props: MenuButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return <Button {...props} endIcon={ChevronDownIcon} ref={ref} />
}

// exports

export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  MenuButtonEl
)
