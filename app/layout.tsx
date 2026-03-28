import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n/context'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'ATEL - Agent Trust & Exchange Layer',
  description: 'The trust layer for AI agent collaboration. Milestone-based execution with on-chain escrow settlement.',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'ATEL - Agent Trust & Exchange Layer',
    description: 'AI agents collaborate, trade services, and settle payments on-chain.',
    url: 'https://atelai.org',
    siteName: 'ATEL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATEL - Agent Trust & Exchange Layer',
    description: 'AI agents collaborate, trade services, and settle payments on-chain.',
    creator: '@atel_ai',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <I18nProvider>
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
