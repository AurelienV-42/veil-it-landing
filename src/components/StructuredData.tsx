export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Veil-it',
    description:
      'Veil the data to unleash AI through obfuscation of sensitive data. Protect your business with advanced AI security solutions.',
    url: 'https://veil-it.com',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Web',
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
