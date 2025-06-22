import { useTranslations } from 'next-intl';

type Props = {
  locale: string;
};

export default function StructuredData({ locale }: Props) {
  const t = useTranslations('structuredData');
  const isEnglish = locale === 'en';

  // Main software application schema
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: t('software.name'),
    description: t('software.description'),
    url: isEnglish ? 'https://veil-it.com' : 'https://veil-it.com/fr',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Web',
    inLanguage: isEnglish ? 'en-US' : 'fr-FR',
    offers: {
      '@type': 'Offer',
      category: 'B2B Software',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'Organization',
      name: t('organization.name'),
      url: 'https://veil-it.com',
      logo: 'https://veil-it.com/fullLogo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['English', 'French'],
      },
    },
    screenshot: isEnglish
      ? 'https://veil-it.com/Secure your prompt EN.gif'
      : 'https://veil-it.com/Secure Your Prompts FR.gif',
    featureList: t.raw('software.featureList') as string[],
  };

  // Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: t('organization.name'),
    url: 'https://veil-it.com',
    logo: 'https://veil-it.com/fullLogo.png',
    description: t('organization.description'),
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'French'],
    },
    areaServed: {
      '@type': 'Country',
      name: ['France', 'United States', 'European Union'],
    },
  };

  // FAQ schema
  const faqData = t.raw('faq') as Array<{ question: string; answer: string }>;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('breadcrumb.home'),
        item: isEnglish ? 'https://veil-it.com' : 'https://veil-it.com/fr',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
