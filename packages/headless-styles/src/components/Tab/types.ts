import type { Tech } from '../types'

export interface TabOptions {
  size?: Size
  tech?: Tech
}

export type Size = 's' | 'm'
