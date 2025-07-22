// @ts-nocheck
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NgDocDemoAssets, NgDocPageComponent, NgDocRootPage} from '@ng-doc/app';
import {isRoute, NgDocPage, NgDocPageType} from '@ng-doc/core';

const pageContent: string = `<p class="ng-doc-no-content ngde" indexable="false">No documentation has been provided.</p><h2 id="presentation" href="api/variables/api-doc/appConfig" headinglink="true" class="ngde">Presentation<ng-doc-heading-anchor class="ng-doc-anchor ngde" anchor="presentation"></ng-doc-heading-anchor></h2><pre class="shiki shiki-themes github-light ayu-dark" style="background-color:#fff;--shiki-dark-bg:#0b0e14;color:#24292e;--shiki-dark:#bfbdb6" tabindex="0"><code class="language-typescript"><span class="line"><span style="color:#D73A49;--shiki-dark:#FF8F40" class="ngde">const</span><span style="color:#005CC5;--shiki-dark:#BFBDB6" class="ngde"> <a href="api/variables/api-doc/appConfig" class="ng-doc-code-anchor ngde">appConfig</a></span><span style="color:#D73A49;--shiki-dark:#F29668" class="ngde">:</span><span style="color:#6F42C1;--shiki-dark:#59C2FF" class="ngde"> ApplicationConfig</span><span style="color:#24292E;--shiki-dark:#BFBDB6B3" class="ngde">;</span></span></code></pre>`

@Component({
  selector: 'ng-doc-page-dhebgfve',
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
  title: `appConfig`,
}]

export default routes;

