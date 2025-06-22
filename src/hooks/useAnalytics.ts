import { useEffect, useRef } from 'react';
import { sectionObserver } from '../utils/analytics';

export const useSectionTracking = (sectionName: string) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      sectionObserver.observeSection(element, sectionName);
    }

    return () => {
      if (element) {
        sectionObserver.disconnect();
      }
    };
  }, [sectionName]);

  return ref;
};
