import { type AnchorHTMLAttributes } from 'react'
import type { DefaultOptions } from '../../utils/types'

export interface TextLinkOptions
  extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    DefaultOptions {}
