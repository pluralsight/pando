import { loadImage, preloadImgResource } from './loaders'
import type { ImgProps } from './types'

export const resourceCache = new Map()

// The React team is working on making an API like this internal.
// Keep a look out so we can just import it in the future.
export function createResource(promise: Promise<unknown>) {
  let status = 'pending'
  let result = promise.then(
    (resolved) => {
      status = 'success'
      result = resolved as unknown as Promise<void>
    },
    (rejected) => {
      status = 'error'
      result = rejected
    },
  )

  return {
    read: () => {
      switch (status) {
        case 'error':
          throw result

        case 'pending':
        case 'success':
          return result

        default:
          throw new Error('This should be impossible.')
      }
    },
  }
}

export function createPreloadedImgResource(imgOptions: ImgProps) {
  const data = createResource(preloadImgResource(imgOptions))
  const img = createResource(loadImage(imgOptions))
  return { data, img }
}
