export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Crabbio",
    "description": "Making AI use safe through obfuscation of sensitive data. Protect your business with advanced AI security solutions.",
    "url": "https://www.crabbio.com",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "category": "B2B Software"
    },
    "provider": {
      "@type": "Organization",
      "name": "Crabbio",
      "url": "https://www.crabbio.com"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}