import { track } from '@vercel/analytics';

export interface SectionEvent {
  section: string;
  action: 'viewed' | 'entered' | 'exited';
  timeSpent?: number;
  scrollDepth?: number;
}

export interface InteractionEvent {
  element: string;
  action: string;
  value?: string | number;
  metadata?: Record<string, string | number | boolean>;
}

export const trackSectionView = (section: string, scrollDepth?: number) => {
  track('Section Viewed', {
    section,
    scrollDepth: scrollDepth || 0,
    timestamp: Date.now(),
  });
};

export const trackInteraction = (
  element: string,
  action: string,
  value?: string | number,
  metadata?: Record<string, string | number | boolean>
) => {
  const trackingData: Record<string, string | number | boolean> = {
    element,
    action,
    timestamp: Date.now(),
  };

  if (value !== undefined) {
    trackingData.value = value;
  }

  if (metadata) {
    Object.assign(trackingData, metadata);
  }

  track('User Interaction', trackingData);
};

export type DemoMode = 'detection' | 'anonymisation' | 'dashboard';

export const trackDemoModeSwitch = (mode: DemoMode, previousMode?: string) => {
  const trackingData: Record<string, string | number> = {
    newMode: mode,
    timestamp: Date.now(),
  };

  if (previousMode) {
    trackingData.previousMode = previousMode;
  }

  track('Demo Mode Switch', trackingData);
};

export const trackCTAClick = (ctaType: string, location: string) => {
  track('CTA Click', {
    ctaType,
    location,
    timestamp: Date.now(),
  });
};

export const trackLanguageSwitch = (
  newLanguage: string,
  previousLanguage?: string
) => {
  const trackingData: Record<string, string | number> = {
    newLanguage,
    timestamp: Date.now(),
  };

  if (previousLanguage) {
    trackingData.previousLanguage = previousLanguage;
  }

  track('Language Switch', trackingData);
};

export const trackScrollDepth = (depth: number, section?: string) => {
  const trackingData: Record<string, string | number> = {
    depth,
    timestamp: Date.now(),
  };

  if (section) {
    trackingData.section = section;
  }

  track('Scroll Depth', trackingData);
};

export const trackTimeSpent = (section: string, timeSpent: number) => {
  track('Time Spent', {
    section,
    timeSpent,
    timestamp: Date.now(),
  });
};

export class SectionObserver {
  private observers: Map<string, IntersectionObserver> = new Map();
  private sectionTimes: Map<string, number> = new Map();
  private scrollDepths: Map<string, number> = new Map();

  observeSection(element: HTMLElement, sectionName: string) {
    if (this.observers.has(sectionName)) {
      this.observers.get(sectionName)?.disconnect();
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.sectionTimes.set(sectionName, Date.now());
            const scrollDepth = Math.round(
              (window.scrollY /
                (document.documentElement.scrollHeight - window.innerHeight)) *
                100
            );
            this.scrollDepths.set(sectionName, scrollDepth);
            trackSectionView(sectionName, scrollDepth);
          } else {
            const startTime = this.sectionTimes.get(sectionName);
            if (startTime) {
              const timeSpent = Date.now() - startTime;
              trackTimeSpent(sectionName, timeSpent);
              this.sectionTimes.delete(sectionName);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    observer.observe(element);
    this.observers.set(sectionName, observer);
  }

  disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.sectionTimes.clear();
    this.scrollDepths.clear();
  }
}

export const sectionObserver = new SectionObserver();
