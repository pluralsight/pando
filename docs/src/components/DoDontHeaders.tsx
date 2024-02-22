import { flex } from '@/styled-system/patterns'
import { css } from '@/styled-system/css'
import { CheckIcon, CloseIcon } from '@pluralsight/react/icons'

export function DoHeader() {
  return (
    <span className={flex()}>
      <CheckIcon className={css({ color: 'success.text.200' })} /> Do
    </span>
  )
}

export function DontHeader() {
  return (
    <span className={flex()}>
      <CloseIcon className={css({ color: 'danger.text.200' })} /> Don't
    </span>
  )
}
