import { css } from '@/styled-system/css'

export default function Home() {
  return (
    <main>
      <h1
        className={css({
          textStyle: 'display-lg',
        })}
      >
        PS Commons Font
      </h1>
      <p>
        This page uses the PS Commons font. It should be loaded as a font-face
        from the CDN.
      </p>
    </main>
  )
}
