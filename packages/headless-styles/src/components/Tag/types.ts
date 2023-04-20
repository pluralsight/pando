import type { DefaultOptions } from '../../utils/types'
import type { Size } from '../types'

export interface TagOptions extends DefaultOptions {
  size?: TagSize
}

// types

export type TagSize = Exclude<Size, 'xs' | 'l' | 'xl' | 'xxl'>
