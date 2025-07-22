// @ts-nocheck
import { Provider } from '@angular/core';
import { NG_DOC_CONTEXT, NG_DOC_ROUTE_PREFIX, NG_DOC_SHIKI_THEME } from '@ng-doc/app/tokens';

export function provideNgDocContext(): Provider[] {
  return [{
    provide: NG_DOC_CONTEXT,
    useValue: {
      navigation: [
          
        {
          title: `API References`,
          route: '/api',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          
        {
          title: `Configuration`,
          route: '/configuration',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
          
        {
          title: `Installation`,
          route: '/installation',
          hidden: false,
          metadata: {"description":"","tags":{}},
        },
      ],
    },
  }, {
    provide: NG_DOC_ROUTE_PREFIX,
    useValue: '',
  }, {
    provide: NG_DOC_SHIKI_THEME,
    useValue: {
      light: '',
      dark: '',
    },
  }];
}
