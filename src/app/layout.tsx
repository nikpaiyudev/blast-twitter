import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import './globals.css'

const inter = Orbitron({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OnBlast.eth',
  description: 'Reserve your blast name',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
