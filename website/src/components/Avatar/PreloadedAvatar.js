import React, { Suspense } from 'react'
import { getAvatarProps, getSkeletonProps } from '@pluralsight/headless-styles'
import { usePreloadedImg } from '@pluralsight/react-utils'

function Fallback() {
  return <div {...getSkeletonProps({ kind: 'circle' })} />
}

function Image(props) {
  const { imageData, ...avatarProps } = props
  const avatar = getAvatarProps(avatarProps)
  const img = imageData.read()

  return (
    <span {...avatar.wrapper}>
      <img {...avatar.image} {...img} />
    </span>
  )
}

export default function PreloadedAvatar() {
  const resource = usePreloadedImg({
    alt: 'random image',
    src: 'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80',
  })

  return (
    <div>
      {resource && (
        <Suspense fallback={<Fallback />}>
          <Image alt="test image" imgData={resource.img} />
        </Suspense>
      )}
      {!resource && null}
    </div>
  )
}
