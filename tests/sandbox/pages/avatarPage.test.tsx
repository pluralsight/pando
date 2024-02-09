// import { jest } from '@jest/globals'
// import type { ClassAttributes, ImgHTMLAttributes } from 'react'
import { screen, render } from 'test-utils'
import AvatarPage from 'sandbox/app/react/avatar/page'

// TODO: Currently does not work with next/image

// jest.unstable_mockModule('next/image', () => ({
//   Image: (
//     props: JSX.IntrinsicAttributes &
//       ClassAttributes<HTMLImageElement> &
//       ImgHTMLAttributes<HTMLImageElement>,
//   ) => <img alt="mock" {...props} />,
// }))
// await import('next/image')

describe('Avatar Page', () => {
  test('renders the avatars', () => {
    render(<AvatarPage />)
    expect(screen.getAllByRole('img')).toHaveLength(13)
  })
})
