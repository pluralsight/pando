import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import { useTheme } from '@pluralsight/react'
import { grid, gridItem } from '@/styled-system/patterns'
import Console from './components/Console'
import Nav from './components/Nav'
import AppBar from './components/AppBar'

import '@pluralsight/panda-preset/root.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pando Dev Sandbox',
  description: 'A developer space for Pando',
}

export default function RootLayout(props: { children: ReactNode }) {
  const { mode, theme } = useTheme()

  return (
    <html lang="en" data-theme={theme} data-color-mode={mode}>
      <head>
        <link
          rel="preload"
          href="https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        <div
          className={grid({
            columns: 12,
            gap: '2',
            gridTemplateRows: 'auto 1fr auto',
            h: '100vh',
            p: '2',
          })}
        >
          <div
            className={gridItem({
              display: 'flex',
              colSpan: 12,
              justifyContent: 'space-between',
              pxi: '4',
              py: '2',
              rowSpan: 1,
            })}
          >
            <AppBar />
          </div>

          <div
            className={gridItem({
              bgColor: 'neutral.surface.200',
              colSpan: 2,
              overflowY: 'auto',
              rowStart: 2,
              rowEnd: 4,
              rounded: 'md',
            })}
          >
            <Nav />
          </div>

          <main
            className={gridItem({
              border: '1px solid',
              borderColor: 'neutral.border.100',
              colStart: 3,
              colEnd: 13,
              overflowY: 'auto',
              pxi: '4',
              py: '2',
              rowStart: 2,
              rowSpan: 1,
              rounded: 'md',
            })}
          >
            {props.children}
          </main>

          <footer
            className={gridItem({
              bgColor: 'neutral.surface.initial',
              color: 'neutral.text.200',
              colStart: 3,
              colEnd: 13,
              h: '12.5rem',
              p: '4',
              rowStart: 3,
              rowSpan: 1,
              rounded: 'md',
              textStyle: 'mono-sm',
            })}
          >
            <Console />
          </footer>
        </div>
      </body>
    </html>
  )
}
