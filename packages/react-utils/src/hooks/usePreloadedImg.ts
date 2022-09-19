import { useEffect, useState, useTransition } from 'react'
import { preloadImgHook } from '@pluralsight/shared'
import {
  resourceCache,
  createPreloadedImgResource,
} from '../helpers/createResource'
import type { ImgProps, ImgResource } from '../helpers/types'

function getPreloadedImgResource(imgOptions: ImgProps) {
  const { src } = imgOptions
  let resource = resourceCache.get(src)

  if (!resource) {
    resource = createPreloadedImgResource(imgOptions)
    resourceCache.set(src, resource)
  }

  return resource
}

export function preloadImage(imgOptions: ImgProps) {
  if (preloadImgHook) {
    const { data, img } = getPreloadedImgResource(imgOptions)
    return {
      data: data.read(),
      img: img.read(),
    }
  }

  return null
}

export function usePreloadedImg(imgOptions: ImgProps) {
  const { src, srcSet } = imgOptions
  const [, startTransition] = useTransition()
  const [resource, setResource] = useState<null | ImgResource>(null)

  useEffect(() => {
    if (resource) {
      return
    }
    startTransition(() => {
      setResource(getPreloadedImgResource({ src, srcSet }))
    })
  }, [resource, src, srcSet, startTransition])

  if (preloadImgHook) {
    return resource
  }

  return null
}
