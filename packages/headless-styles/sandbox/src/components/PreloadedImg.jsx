import { Suspense } from 'react'
import { usePreloadedImg } from '../../../../react-utils/src'
import { getSkeletonProps } from '../../../src'

const imageStyles = {
  height: '10rem',
  margin: '0 auto',
  overflow: 'hidden',
  width: '16rem',
}

function Fallback() {
  return (
    <div {...getSkeletonProps()}>
      <div style={imageStyles} />
    </div>
  )
}

function Image(props) {
  const img = props.imgData.read()
  return (
    <div style={imageStyles}>
      <img {...img} style={{ display: 'inline-block', width: '100%' }} />
    </div>
  )
}

export default function PreloadedImg() {
  const resource = usePreloadedImg({
    alt: 'random image',
    src: 'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80',
  })

  return (
    <div id="preloaded-img">
      <h3>Preloaded Image</h3>
      <div className="App-container">
        {resource && (
          <Suspense fallback={<Fallback />}>
            <Image alt="test image" imgData={resource.img} />
          </Suspense>
        )}
        {!resource && null}
      </div>
    </div>
  )
}
