import type { Metadata } from 'next'
import { type ReactNode } from 'react'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="inkyBlue" data-color-mode="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
