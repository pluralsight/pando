import type { Size } from '../types'

export interface TabOptions {
  size?: TabSize
}

export type TabSize = Exclude<Size, 'xs' | 'l' | 'xl' | 'xxl'>
