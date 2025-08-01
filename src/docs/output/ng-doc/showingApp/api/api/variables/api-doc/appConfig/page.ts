// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocPageWrapperComponent} from '@ng-doc/app';
import {NgDocPageType} from '@ng-doc/core';

const headerContent: string = `<div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">showingApp</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Variable">Variable</span></div><h1 class="ngde" id="appconfig" href="docs/api/variables/api-doc/appConfig" headinglink="true">appConfig<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="appconfig"></ng-doc-heading-anchor></h1>`

@Component({
  selector: 'ng-doc-page-wrapper-nunpteao',
  template: `<ng-doc-page-wrapper [routes]="routes" [headerContent]="headerContent" [hasBreadcrumb]="hasBreadcrumb" [pageType]="pageType"></ng-doc-page-wrapper>`,
  imports: [NgDocPageWrapperComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWrapperComponent {
    routes = routes[0].children!;
    headerContent = headerContent;
    pageType: NgDocPageType = 'api';
    hasBreadcrumb = false;
}


const routes: Routes = [{
  path: '',
  component: PageWrapperComponent,
  title: `appConfig`,
  children: [
    {
      path: '',
      loadChildren: () => import('./api/page'),
      title: `appConfig`,
      data: {
        icon: '',
      }
    },
  ]
}]

export default routes;
