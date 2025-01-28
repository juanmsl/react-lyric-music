import { ThemeProvider } from 'polpo/ui';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { LoaderLogo } from '@components/loaders';
import { BandFiltersProvider } from '@contexts';
import { CommonTheme, DarkTheme, ThemeConstants } from '@core/theme';
import { Router } from '@router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider darkTheme={DarkTheme} lightTheme={DarkTheme} commonTheme={CommonTheme} constants={ThemeConstants}>
      <Suspense fallback={<LoaderLogo />}>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <ThemeProvider.Wrapper>
            <BandFiltersProvider>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </BandFiltersProvider>
          </ThemeProvider.Wrapper>
        </ErrorBoundary>
      </Suspense>
    </ThemeProvider>
  </StrictMode>,
);
