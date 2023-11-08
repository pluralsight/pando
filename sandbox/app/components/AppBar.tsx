import { css } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'

export default function AppBar() {
  return (
    <>
      <div
        className={hstack({
          gap: '6',
        })}
      >
        <h1
          className={css({
            textStyle: 'h5',
          })}
        >
          Pando Dev Sandbox
        </h1>
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
