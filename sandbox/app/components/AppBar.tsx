import { css } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
import Link from 'next/link'

export default function AppBar() {
  return (
    <>
      <div
        className={hstack({
          gap: '6',
        })}
        data-testid="app-bar"
      >
        <Link href="/">
          <h1
            className={css({
              textStyle: 'h5',
            })}
          >
            Pando Dev Sandbox
          </h1>
        </Link>
        <a
          href="https://design.pluralsight.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Docs
        </a>
      </div>

      <ul
        className={hstack({
          alignContent: 'flex-end',
          gap: '4',
        })}
        data-testid="app-bar-right-nav"
      >
        <li>
          <button>theme</button>
        </li>
        <li>
          <a
            href="https://github.com/pluralsight/pando"
            rel="noopener noreferrer"
            target="_blank"
          >
            GH
          </a>
        </li>
      </ul>
    </>
  )
}
