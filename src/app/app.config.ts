// import { provideHttpClient, withInterceptorsFromDi, withFetch } from "@angular/common/http";
// import { provideAnimations } from "@angular/platform-browser/animations";
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withDebugTracing } from '@angular/router';

// import { provideNgDocApp, provideSearchEngine, NgDocDefaultSearchEngine, providePageSkeleton, NG_DOC_DEFAULT_PAGE_SKELETON, provideMainPageProcessor, NG_DOC_DEFAULT_PAGE_PROCESSORS } from "@ng-doc/app";
// import { provideNgDocContext } from "../docs/output/ng-doc/showingApp";

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
      withDebugTracing(),
    ),
  ],
}

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'enabled',anchorScrolling: 'enabled' })),
//     provideAnimations(),
//     provideHttpClient(withInterceptorsFromDi()),
//     provideHttpClient(withInterceptorsFromDi(), withFetch()),
//     provideNgDocContext(), provideNgDocApp(),
//     provideSearchEngine(NgDocDefaultSearchEngine), providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON), provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS)]
// };