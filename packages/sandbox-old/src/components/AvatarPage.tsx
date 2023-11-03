import { Avatar } from '@pluralsight/react'
import type { AvatarSize } from '@headless-styles/types.ts'
import { data } from '../data/avatar.data'

function AvatarList() {
  return (
    <>
      {data.items.map((size: AvatarSize) => (
        <Avatar {...data.results[size]} />
      ))}
    </>
  )
}

function AvatarInitialList() {
  return (
    <>
      {data.items.map((size: AvatarSize) => (
        <Avatar
          key={size}
          name={data.results[size].name}
          size={data.results[size].size}
        />
      ))}
    </>
  )
}

function AvatarIconList() {
  return (
    <>
      {data.items.map((size: AvatarSize) => (
        <Avatar key={size} size={data.results[size].size} />
      ))}
    </>
  )
}

function AvatarActionIconList() {
  return (
    <>
      {data.items.map((size: AvatarSize) => (
        <Avatar key={size} sentiment="action" size={data.results[size].size} />
      ))}
    </>
  )
}

export default function AvatarPage() {
  return (
    <div>
      <h3>Avatar</h3>
      <AvatarList />
      <br />
      <AvatarInitialList />
      <br />
      <AvatarIconList />
      <br />
      <AvatarActionIconList />
    </div>
  )
}
