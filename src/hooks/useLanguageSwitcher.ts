import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export function useLanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLanguage = (lang: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${lang}${currentPath}`;
    router.push(newPath);
  };

  return { changeLanguage, currentLocale: locale };
}
