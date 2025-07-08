import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export function useLanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLanguage = (lang: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${lang}${currentPath}`;
    // Ensure trailing slash is present
    const pathWithTrailingSlash = newPath.endsWith('/')
      ? newPath
      : `${newPath}/`;
    router.push(pathWithTrailingSlash);
  };

  return { changeLanguage, currentLocale: locale };
}
