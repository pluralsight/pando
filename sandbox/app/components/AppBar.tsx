'use client'

import { useTheme } from '@pluralsight/react'
import { css } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
import Link from 'next/link'

export default function AppBar() {
  const { mode, updateMode } = useTheme()

  function handleUpdateMode() {
    updateMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <div
        className={hstack({
          gap: '6',
        })}
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
      >
        <li>
          <button
            aria-label={
              mode == 'dark' ? 'switch to light mode' : 'switch to dark mode'
            }
            onClick={handleUpdateMode}
          >
            {mode == 'dark' ? '🌞' : '🌚'}
          </button>
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
