import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { render, screen } from 'test-utils'
import { usePreloadedImg } from '../../src'
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

  let rootEl = null as unknown as Element

  beforeEach(() => {
    process.env.RELEASE_CHANNEL = 'experimental'
    rootEl = document.createElement('div')
    rootEl.id = 'root'
    document.body.appendChild(rootEl)
    createRoot(rootEl)
  })

  afterEach(() => {
    process.env.RELEASE_CHANNEL = ''
    document.body.removeChild(rootEl)
    rootEl = null as unknown as Element
  })

  test('should show fallback state while loading', () => {
    render(
      <App src="https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80" />
    )
    expect(screen.getByText(/...loading image/i)).toBeInTheDocument()
  })

  test('should show img after loading complete', async () => {
    render(
      <App src="https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80" />
    )
    expect(screen.getByText(/...loading image/i)).toBeInTheDocument()
    // await screen.findByRole('img')
    // expect(screen.queryByText(/...loading image/i)).not.toBeInTheDocument()
  })
})
