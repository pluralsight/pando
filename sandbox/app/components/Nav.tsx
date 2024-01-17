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
      <Link href="/react/field-message">Field Message</Link>
      <Link href="/react/icon-button">Icon Button</Link>
      <Link href="/react/input">Input</Link>
      <Link href="/react/label">Label</Link>
      <Link href="/react/textarea">Textarea</Link>
      <Link href="/react/text-link">Text Link</Link>
    </nav>
  )
}
