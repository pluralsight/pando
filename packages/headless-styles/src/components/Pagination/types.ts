import { Size } from '../types'

export interface PaginationOptions {
  size?: Exclude<Size, 'xs' | 's' | 'xl' | 'xxl'>
}
