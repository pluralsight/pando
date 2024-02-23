import { hstack } from '@/styled-system/patterns'
import { css } from '@/styled-system/css'
import {
  CheckIcon,
  CloseIcon,
  WarningTriangleFilledIcon,
} from '@pluralsight/react/icons'

export function DoHeader() {
  return (
    <span className={hstack({ gap: '2' })}>
      <CheckIcon className={css({ color: 'success.text.200' })} /> Do
    </span>
  )
}

export function CautionHeader() {
  return (
    <span className={hstack({ gap: '2' })}>
      <WarningTriangleFilledIcon
        className={css({ color: 'warning.text.200' })}
      />{' '}
      Caution
    </span>
  )
}

export function DontHeader() {
  return (
    <span className={hstack({ gap: '2' })}>
      <CloseIcon className={css({ color: 'danger.text.200' })} /> Don't
    </span>
  )
}
