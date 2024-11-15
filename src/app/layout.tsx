import type { Metadata } from 'next'
import localFont from 'next/font/local'
// import { Poppins } from '@next/font/google';
import './globals.css'

const poppins = localFont({
  src: './fonts/poppins/poppins-regular-webfont.woff2',
  variable: '--font-poppins',
  weight: '400 500 600 700', 
})

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Zenith digital space',
  description:
    'Zenith Digital Space is your key to thriving in today’s business world. With essential digital strategies, continuous support, and innovative solutions, Zenith Digital Space enhances your online presence, targets your ideal audience, and unlocks new growth opportunities, giving you a distinct competitive advantage.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  )
}
