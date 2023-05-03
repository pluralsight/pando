import { Suspense } from 'react'
import { render, screen } from 'test-utils'
import { usePreloadedImg } from '../../src/index.ts'
import type { ImgProps, PreloadedImgProps } from '../../src/helpers/types'

jest.mock('@pluralsight/shared', () => {
  return {
    preloadImgHook: true,
  }
})

describe('usePreloadedImg', () => {
  function Fallback() {
    return <div>...loading image</div>
  }

  function Image(props: PreloadedImgProps) {
    const img = props.imgData.read() as unknown as ImgProps
    return <img alt={img.alt} src={img.src} />
  }

  function App(props: ImgProps) {
    const resource = usePreloadedImg(props)

    if (resource) {
      return (
        <Suspense fallback={<Fallback />}>
          <Image alt="test image" imgData={resource.img} />
        </Suspense>
      )
    }

    return null
  }

  test('should show fallback state while loading', () => {
    render(
      <App src="https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80" />
    )
    expect(screen.getByText(/...loading image/i)).toBeInTheDocument()
  })

  test.todo('should return image props when Promise resolved')
})
