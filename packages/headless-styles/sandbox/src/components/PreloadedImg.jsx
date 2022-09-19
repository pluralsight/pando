import { Suspense } from 'react'
import { usePreloadedImg } from '../../../../react-utils/src'
import { getSkeletonProps } from '../../../src'

function Fallback() {
  return <div {...getSkeletonProps()}>...loading</div>
}

function Image(props) {
  const img = props.imgData.read()
  return <img alt={img.alt} src={img.src} />
}

export default function PreloadedImg() {
  const resource = usePreloadedImg({
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
        {!resource && <div {...getSkeletonProps({ kind: 'circle' })} />}
      </div>
    </div>
  )
}
