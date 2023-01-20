import type { Size } from '../types'

export interface TabsOptions {
  size?: TabsSize
}

export type TabsSize = Exclude<Size, 'xs' | 'l' | 'xl' | 'xxl'>
