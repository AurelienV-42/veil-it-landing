type Props = {
  locale: string;
};

export default function StructuredData({ locale }: Props) {
  const isEnglish = locale === 'en';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Veil-it',
    description: isEnglish
      ? 'Veil the data to unleash AI through obfuscation of sensitive data. Protect your business with advanced AI security solutions.'
      : "Masquez la donnée pour débrider l'IA. Extension Chrome RGPD-ready qui protège vos données sensibles sans freiner vos équipes.",
    url: isEnglish ? 'https://veil-it.com' : 'https://veil-it.com/fr',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Web',
    inLanguage: isEnglish ? 'en-US' : 'fr-FR',
    offers: {
      '@type': 'Offer',
      category: 'B2B Software',
    },
    provider: {
      '@type': 'Organization',
      name: 'Veil-it',
      url: 'https://veil-it.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
