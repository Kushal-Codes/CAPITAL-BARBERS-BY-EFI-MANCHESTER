import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type AppRoute = '/' | '/services' | '/gallery' | '/about' | '/find-us';

export interface RouteMeta {
  path: AppRoute;
  label: string;
  shortTitle: string;
  pageTitle: string;
  kicker: string;
}

export const APP_ROUTES: RouteMeta[] = [
  {
    path: '/',
    label: 'Home',
    shortTitle: 'Flagship Studio',
    pageTitle: 'Capital Barber by Efi — Precision Barbering in Central Manchester (M1 4HF)',
    kicker: '46 George Street · Manchester M1 4HF',
  },
  {
    path: '/services',
    label: 'Services & Pricing',
    shortTitle: 'Tariff & Session Planner',
    pageTitle: 'Services, Tariff & Session Planner | Capital Barber by Efi (Manchester)',
    kicker: '01 · Verified Booksy & In-Shop Tariff',
  },
  {
    path: '/gallery',
    label: 'Portfolio',
    shortTitle: 'Lookbook & Studio Archive',
    pageTitle: 'Authentic Cut Portfolio & Studio Archive | Capital Barber by Efi',
    kicker: '02 · 100% Authentic Studio Photography',
  },
  {
    path: '/about',
    label: 'Meet Efi',
    shortTitle: 'Founder & Craft Ritual',
    pageTitle: 'Meet Efi (Efrem Melake) & The 46 George St Studio | Capital Barber by Efi',
    kicker: '03 · Master Barber & Studio Craftsmanship',
  },
  {
    path: '/find-us',
    label: 'Find Us',
    shortTitle: 'Location, Hours & Contact',
    pageTitle: 'Find Us at 46 George Street (M1 4HF) & Opening Hours | Capital Barber by Efi',
    kicker: '04 · Chinatown Wayfinding & Hours Verification',
  },
];

function normalizePathname(pathname: string): AppRoute {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (
    clean === '/' ||
    clean === '/services' ||
    clean === '/gallery' ||
    clean === '/about' ||
    clean === '/find-us'
  ) {
    return clean;
  }
  return '/';
}

interface NavigationContextValue {
  currentRoute: AppRoute;
  navigate: (route: AppRoute, options?: { initialServiceId?: string }) => void;
  preselectedServiceId: string | null;
  clearPreselectedService: () => void;
}

const NavigationContext = createContext<NavigationContextValue>({
  currentRoute: '/',
  navigate: () => {},
  preselectedServiceId: null,
  clearPreselectedService: () => {},
});

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() =>
    typeof window !== 'undefined' ? normalizePathname(window.location.pathname) : '/'
  );
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    const onPopState = () => {
      setCurrentRoute(normalizePathname(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const meta = APP_ROUTES.find((r) => r.path === currentRoute) || APP_ROUTES[0];
    document.title = meta.pageTitle;
  }, [currentRoute]);

  const navigate = useCallback(
    (route: AppRoute, options?: { initialServiceId?: string }) => {
      if (options?.initialServiceId) {
        setPreselectedServiceId(options.initialServiceId);
      }
      if (route !== currentRoute) {
        window.history.pushState({}, '', route);
        setCurrentRoute(route);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [currentRoute]
  );

  const clearPreselectedService = useCallback(() => {
    setPreselectedServiceId(null);
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        currentRoute,
        navigate,
        preselectedServiceId,
        clearPreselectedService,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigation() {
  return useContext(NavigationContext);
}
