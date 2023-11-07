import type { Metadata } from 'next'
import { type ReactNode } from 'react'

import '@pluralsight/panda-preset/root.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pando Dev Sandbox',
  description: 'A developer space for Pando',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="inkyBlue" data-color-mode="dark">
      <head>
        <link
          rel="preload"
          href="https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
