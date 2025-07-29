import { NgModule } from '@angular/core';
import { NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent } from "@ng-doc/app";
import { RouterOutlet, Routes, RouterModule } from '@angular/router';

import { DocsComponent } from './docs.component';
import { NG_DOC_ROUTING } from "@ng-doc/generated";

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: NG_DOC_ROUTING,
  },
];

@NgModule({
  declarations: [DocsComponent],
  imports: [NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent, RouterOutlet, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsModule {}
