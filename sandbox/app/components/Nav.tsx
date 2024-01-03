import { css } from '@/styled-system/css'
import { vstack } from '@/styled-system/patterns'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav
      className={vstack({
        alignItems: 'flex-start',
        gridArea: 'nav',
        p: '4',
      })}
    >
      <small
        className={css({
          color: 'neutral.text.100',
          fontVariationSettings: '"wght" 700',
          textTransform: 'uppercase',
        })}
      >
        react
      </small>
      <Link href="/react/button">Button</Link>
      <Link href="/react/input">Input</Link>
    </nav>
  )
}
