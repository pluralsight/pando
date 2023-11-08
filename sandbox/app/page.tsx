import { type PropsWithChildren } from 'react'
import { grid, gridItem } from '@/styled-system/patterns'
import Nav from './components/Nav'
import Console from './components/Console'
import AppBar from './components/AppBar'

export default function Home(props: PropsWithChildren<{}>) {
  return (
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
  )
}
