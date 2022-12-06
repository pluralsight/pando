import type { Size } from '../types'

export interface TagOptions {
  size?: TagSize
}

// types

export type TagSize = Exclude<Size, 'xs' | 'l' | 'xl' | 'xxl'>
