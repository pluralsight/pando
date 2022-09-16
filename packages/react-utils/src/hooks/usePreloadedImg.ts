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
    const { data, img } = getPreloadedImgResource(imgOptions)
    data.read()
    img.read()
  }
}
