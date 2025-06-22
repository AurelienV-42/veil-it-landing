import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import StructuredData from '../../components/StructuredData';
import '../../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const isEnglish = locale === 'en';
  const baseUrl = 'https://veil-it.com';
  const url = isEnglish ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: isEnglish
      ? 'Veil the data to unleash AI | Secure AI for Business'
      : "Sécurisez l'usage de l'IA en entreprise | Veil-it",
    description: isEnglish
      ? 'Veil the data to unleash AI through obfuscation of sensitive data. Protect your business with advanced AI security solutions.'
      : "Masquez la donnée pour débrider l'IA. Extension Chrome RGPD-ready qui protège vos données sensibles sans freiner vos équipes. Démo en 2 minutes.",
    keywords: isEnglish
      ? 'AI security, data obfuscation, sensitive data protection, AI safety, business security'
      : 'sécurité IA, masquage données, protection données sensibles, RGPD IA, sécurité entreprise',
    authors: [{ name: 'Veil-it Team' }],
    creator: 'Veil-it',
    publisher: 'Veil-it',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        en: baseUrl,
        fr: `${baseUrl}/fr`,
      },
    },
    openGraph: {
      title: isEnglish
        ? 'Veil the data to unleash AI | Secure AI for Business'
        : "Sécurisez l'usage de l'IA en entreprise | Veil-it",
      description: isEnglish
        ? 'Veil the data to unleash AI through obfuscation of sensitive data. Protect your business with advanced AI security solutions.'
        : "Masquez la donnée pour débrider l'IA. Extension Chrome RGPD-ready qui protège vos données sensibles sans freiner vos équipes.",
      url,
      siteName: 'Veil-it',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: isEnglish
            ? 'Veil the data to unleash AI'
            : "Masquez la donnée pour débrider l'IA",
        },
      ],
      locale: isEnglish ? 'en_US' : 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: isEnglish
        ? 'Veil the data to unleash AI | Secure AI for Business'
        : "Sécurisez l'usage de l'IA en entreprise | Veil-it",
      description: isEnglish
        ? 'Veil the data to unleash AI through obfuscation of sensitive data. Protect your business with advanced AI security solutions.'
        : "Masquez la donnée pour débrider l'IA. Extension Chrome RGPD-ready qui protège vos données sensibles sans freiner vos équipes.",
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
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link href="https://fonts.cdnfonts.com/css/geist" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <StructuredData locale={locale} />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
