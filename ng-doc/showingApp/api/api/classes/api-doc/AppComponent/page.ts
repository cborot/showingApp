// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocPageWrapperComponent} from '@ng-doc/app';
import {NgDocPageType} from '@ng-doc/core';

const headerContent: string = `<div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">showingApp</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Class">Class</span></div><h1 class="ngde" id="appcomponent" href="api/classes/api-doc/AppComponent" headinglink="true">AppComponent<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="appcomponent"></ng-doc-heading-anchor></h1><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table no-padding no-full-width ngde"><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">Decorators:</td><td indexable="false" class="ngde"><code indexable="false" class="ngde">@Component</code></td></tr><tr class="ngde"><td indexable="false" class="ngde">Selectors:</td><td class="ngde"><code class="ngde ng-doc-code-with-link"><a href="api/classes/api-doc/AppComponent" class="ng-doc-code-anchor ngde">app-root</a></code></td></tr></tbody></table></div>`

@Component({
  selector: 'ng-doc-page-wrapper-wwhpgg68',
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
  title: `AppComponent`,
  children: [
    {
      path: '',
      loadChildren: () => import('./api/page'),
      title: `AppComponent`,
      data: {
        icon: '',
      }
    },
  ]
}]

export default routes;
