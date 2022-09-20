import type { ImgProps, MediaResource } from './types'

export function preloadResource(resourceOptions: MediaResource) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = resourceOptions.as
    link.media = resourceOptions.media ?? 'all'
    link.href = resourceOptions.href
    link.onload = resolve
    link.onerror = reject
    document.body.appendChild(link)
  })
}

export function preloadImgResource(imgOptions: ImgProps) {
  const { srcSet } = imgOptions

  return new Promise((resolve, reject) => {
    const link = document.createElement('link')

    if (srcSet) {
      link.imageSrcset = srcSet
    }

    link.rel = 'preload'
    link.as = 'image'
    link.href = imgOptions.src ?? ''
    link.onload = resolve
    link.onerror = reject
    document.body.appendChild(link)
  })
}

export function loadImage(imgOptions: ImgProps) {
  const { src, srcSet } = imgOptions

  return new Promise((resolve, reject) => {
    const img = document.createElement('img')

    if (srcSet) {
      img.srcset = srcSet
    }

    img.src = src ?? ''
    img.onload = () => resolve(src)
    img.onerror = reject
  })
}
