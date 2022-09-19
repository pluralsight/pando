import { preloadImgHook } from '@pluralsight/shared'
import {
  resourceCache,
  createPreloadedImgResource,
} from '../helpers/createResource'
import { ImgResource } from '../helpers/loaders'

function getPreloadedImgResource(imgOptions: ImgResource) {
  const { src } = imgOptions
  let resource = resourceCache.get(src)

  if (!resource) {
    resource = createPreloadedImgResource(imgOptions)
    resourceCache.set(src, resource)
  }

  return resource
}

export function usePreloadedImg(imgOptions: ImgResource) {
  if (preloadImgHook) {
    console.log('hook working')

    const { data, img } = getPreloadedImgResource(imgOptions)
    data.read()
    img.read()
  }
}

export function preloadImage(imgOptions: ImgResource) {
  console.log('starting preload')

  if (preloadImgHook) {
    console.log('preloading img')
    const { data, img } = getPreloadedImgResource(imgOptions)
    data.read()
    img.read()
  }
}
