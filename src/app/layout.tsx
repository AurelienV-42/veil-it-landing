import { Inter } from 'next/font/google'
import '../styles/globals.css'
import I18nProvider from '../components/I18nProvider'
import StructuredData from '../components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crabbio - Making AI use safe',
  description: 'Making AI use safe through obfuscation of sensitive data. Protect your business with advanced AI security solutions.',
  keywords: 'AI security, data obfuscation, sensitive data protection, AI safety, business security',
  authors: [{ name: 'Crabbio Team' }],
  creator: 'Crabbio',
  publisher: 'Crabbio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.crabbio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Crabbio - Making AI use safe',
    description: 'Making AI use safe through obfuscation of sensitive data. Protect your business with advanced AI security solutions.',
    url: 'https://www.crabbio.com',
    siteName: 'Crabbio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Crabbio - Making AI use safe',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crabbio - Making AI use safe',
    description: 'Making AI use safe through obfuscation of sensitive data. Protect your business with advanced AI security solutions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/geist" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}