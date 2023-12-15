import { type PropsWithChildren } from 'react'
import { css } from '@/styled-system/css'

export function PageHeading(props: PropsWithChildren<{}>) {
  return (
    <h2
      className={css({
        textStyle: 'h3',
        mb: '4',
      })}
    >
      {props.children}
    </h2>
  )
}
