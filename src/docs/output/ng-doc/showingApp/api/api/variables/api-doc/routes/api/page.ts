// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';

const pageContent: string = `<p class="ng-doc-no-content ngde" indexable="false">No documentation has been provided.</p><h2 id="presentation" href="docs/api/variables/api-doc/routes" headinglink="true" class="ngde">Presentation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="presentation"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> <a href="docs/api/variables/api-doc/routes" class="ng-doc-code-anchor ngde">routes</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> Routes</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre>`

@Component({
  selector: 'ng-doc-page-9r1jnqlh',
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
  readonly editSourceFileUrl: string = 'https://github.com/cborot/showingApp/edit/main/src/app/app.routes.ts?message=docs(): describe your changes here...#L5';
  readonly viewSourceFileUrl: string = 'https://github.com/cborot/showingApp/blob/release/src/app/app.routes.ts#L5';

  constructor() {
    super();
  }
}

const routes: Routes = [{
  path: '',
  component: PageComponent,
  title: `routes`,
}]

export default routes;

