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
      <Link href="/">Home</Link>
    </nav>
  )
}
