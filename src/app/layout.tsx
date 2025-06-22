import { Inter } from 'next/font/google';
import StructuredData from '../components/StructuredData';
import I18nProvider from '../components/I18nProvider';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Veil the data to unleash AI',
  description:
    'Veil the data to unleash AI through obfuscation of sensitive data. Protect your business with advanced AI security solutions.',
  keywords:
    'AI security, data obfuscation, sensitive data protection, AI safety, business security',
  authors: [{ name: 'Veil-it Team' }],
  creator: 'Veil-it',
  publisher: 'Veil-it',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://veil-it.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Veil the data to unleash AI',
    description:
      'Veil the data to unleash AI through obfuscation of sensitive data. Protect your business with advanced AI security solutions.',
    url: 'https://veil-it.com',
    siteName: 'Veil-it',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Veil the data to unleash AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veil the data to unleash AI',
    description:
      'Veil the data to unleash AI through obfuscation of sensitive data. Protect your business with advanced AI security solutions.',
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/geist" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
