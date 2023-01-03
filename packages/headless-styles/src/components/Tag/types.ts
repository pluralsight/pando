import type { Size } from '../types'

export interface TagOptions {
  className?: string
  size?: TagSize
}

// types

export type TagSize = Exclude<Size, 'xs' | 'l' | 'xl' | 'xxl'>
