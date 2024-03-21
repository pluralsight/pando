import { css } from '@/styled-system/css'
import { vstack } from '@/styled-system/patterns'
import { textLink } from '@/styled-system/recipes'
import Link from 'next/link'

const REACT_LINKS = [
  'admonition',
  'alert-dialog',
  'avatar',
  'badge',
  'button',
  'checkbox',
  'circular-progress',
  'field-message',
  'icon-button',
  'input',
  'label',
  'progress-bar',
  'radio',
  'skeleton',
  'switch-input',
  'tag',
  'textarea',
  'text-link',
  'toast',
]

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
      {REACT_LINKS.map((link) => (
        <Link className={textLink()} href={`/react/${link}`} key={link}>
          {link.replace('-', ' ')}
        </Link>
      ))}
    </nav>
  )
}
