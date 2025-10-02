import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Build A Netflix Style',
  description: 'Build a Netflix-style homepage with a hero banner (use a nice, dark-mode compatible gradient here), ...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}