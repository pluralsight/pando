import { useEffect, useState, useTransition } from 'react'
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

  return resource
}
