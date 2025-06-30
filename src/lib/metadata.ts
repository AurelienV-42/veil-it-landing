import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

const baseUrl = 'https://veil-it.com';

export async function generateLocaleMetadata(
  locale: string
): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations('metadata');
  const isEnglish = locale === 'en';
  const url = isEnglish ? `${baseUrl}/` : `${baseUrl}/${locale}/`;

  const title = t('title');
  const description = t('description');
  const keywords = t('keywords');
  const ogAlt = t('ogAlt');

  return {
    title,
    description,
    keywords,
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
        en: `${baseUrl}/`,
        fr: `${baseUrl}/fr/`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Veil-it',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
      locale: isEnglish ? 'en_US' : 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
