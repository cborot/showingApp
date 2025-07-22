// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';

const pageContent: string = `<p class="ngde">My root component</p><h2 id="properties" href="api/classes/api-doc/AppComponent" headinglink="true" class="ngde">Properties<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="properties"></ng-doc-heading-anchor></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-api-table sticky first-colum-highlighted ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-api-table-name ngde">Name</th><th class="ng-doc-api-table-type ngde">Type</th><th class="ng-doc-api-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde" data-slug="title" data-slugtype="member" id="title"><td indexable="false" class="ngde"><span class="ngde">title</span><div class="ng-doc-node-details ngde"></div></td><td class="ng-doc-api-table-type ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><div class="ng-doc-api-status ngde"></div></td></tr></tbody></table></div>`

@Component({
  selector: 'ng-doc-page-wr1mfsmr',
  template: `<ng-doc-page></ng-doc-page>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgDocPageComponent,
  ],
  providers: [
    {provide: NgDocRootPage, useExisting: PageComponent},
  ],
})
export class PageComponent extends NgDocRootPage {
  readonly pageType: NgDocPageType = 'api';
  readonly pageContent: string = pageContent;

  constructor() {
    super();
  }
}

const routes: Routes = [{
  path: '',
  component: PageComponent,
  title: `AppComponent`,
}]

export default routes;

