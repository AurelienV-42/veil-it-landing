import SimpleFooter from '../sections/SimpleFooter'
import SimpleHero from '../sections/SimpleHero'
import SimpleWhyChoose from '../sections/SimpleWhyChoose'

export const metadata = {
  title: 'Crabbio - Making AI use safe',
  description: 'Making AI use safe through obfuscation of sensitive data. Protect your business with advanced AI security solutions.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SimpleHero />
      <SimpleWhyChoose />
      <SimpleFooter />
    </div>
  )
}