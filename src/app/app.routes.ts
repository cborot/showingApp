import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'docs',
        loadChildren: () => import('../docs/docs.module').then(mod => mod.DocsModule), // Lazy loading
    },
];