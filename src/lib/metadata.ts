import { Metadata } from 'next';

const baseUrl = 'https://veil-it.com';

export function generateLocaleMetadata(locale: string): Metadata {
  const isEnglish = locale === 'en';
  const url = isEnglish ? baseUrl : `${baseUrl}/${locale}`;

  const titles = {
    en: 'Veil the data to unleash AI | Secure AI for Business',
    fr: "Sécurisez l'usage de l'IA en entreprise | Veil-it",
  };

  const descriptions = {
    en: 'Veil the data to unleash AI through obfuscation of sensitive data. Protect your business with advanced AI security solutions.',
    fr: "Masquez la donnée pour débrider l'IA. Extension Chrome RGPD-ready qui protège vos données sensibles sans freiner vos équipes. Démo en 2 minutes.",
  };

  const keywords = {
    en: 'AI security, data obfuscation, sensitive data protection, AI safety, business security',
    fr: 'sécurité IA, masquage données, protection données sensibles, RGPD IA, sécurité entreprise',
  };

  const ogAlts = {
    en: 'Veil the data to unleash AI',
    fr: "Masquez la donnée pour débrider l'IA",
  };

  const title = titles[locale as keyof typeof titles];
  const description = descriptions[locale as keyof typeof descriptions];

  return {
    title,
    description,
    keywords: keywords[locale as keyof typeof keywords],
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
      title,
      description,
      url,
      siteName: 'Veil-it',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: ogAlts[locale as keyof typeof ogAlts],
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
