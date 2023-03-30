import { Size } from '../types'

export interface PaginationOptions {
  ariaLabel?: string
  size?: Exclude<Size, 'xs' | 's' | 'xl' | 'xxl'>
}
