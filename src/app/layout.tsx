import type { Metadata } from 'next'
import localFont from 'next/font/local'
// import { Poppins } from '@next/font/google';
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { getCookie } from './utils/helper/helper'
import { AppProvider } from '@/context'

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = getCookie('NEXT_LOCALES') || (await getLocale())
  const messages = await getMessages()
  const DIR = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={DIR}>
      <body className={`${poppins.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <AppProvider>{children}</AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
