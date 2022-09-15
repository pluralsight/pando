export interface Resource {
  as: string
  href: string
  media?: string
}

export function preloadResource(resourceOptions: Resource) {
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

export function preloadImgResource(imgOptions: ImgResource) {
  const { srcSet } = imgOptions

  return new Promise((resolve, reject) => {
    const link = document.createElement('link')

    if (srcSet) {
      link.imageSrcset = srcSet
    }

    link.rel = 'preload'
    link.as = 'image'
    link.media = 'all'
    link.href = imgOptions.src
    link.onload = resolve
    link.onerror = reject
    document.head.appendChild(link)
  })
}

export interface ImgResource {
  src: string
  srcSet?: string
}

export function loadImage(imgOptions: ImgResource) {
  const { src, srcSet } = imgOptions

  return new Promise((resolve, reject) => {
    const img = document.createElement('img')

    if (srcSet) {
      img.srcset = srcSet
    }

    img.src = src
    img.onload = () => resolve(src)
    img.onerror = reject
  })
}
