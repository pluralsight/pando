import type { ImgHTMLAttributes } from 'react'

export interface ImgResource {
  data: Resource
  img: Resource
}

export interface PreloadedImgProps extends ImgProps {
  imgData: Resource
}

export interface Resource {
  read: () => Promise<void>
}

// types

export type ImgProps = ImgHTMLAttributes<HTMLImageElement>
