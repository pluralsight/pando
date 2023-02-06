import type { ImgHTMLAttributes } from 'react'

export interface ImgResource {
  data: Resource
  img: Resource
}

export interface MediaResource {
  as: string
  href: string
  media?: string
}

export interface PreloadedImgProps extends ImgProps {
  imgData: Resource
}

export interface Resource {
  read: () => Promise<void>
}

// types

export type ImgProps = ImgHTMLAttributes<HTMLImageElement>
export type Themes = 'light' | 'dark'
