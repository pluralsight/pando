import type { Tech } from '../types'

export interface TabOptions {
  id: string
  panelId: string
  selected?: boolean
  size?: Size
  tech?: Tech
}

export type Size = 's' | 'm'
