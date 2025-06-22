import { getMessages } from 'next-intl/server';
import { generateLocaleMetadata } from '../../lib/metadata';
import RootLayout from '../../components/RootLayout';
import '../../styles/globals.css';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return generateLocaleMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();

  return (
    <RootLayout messages={messages} locale={locale}>
      {children}
    </RootLayout>
  );
}
