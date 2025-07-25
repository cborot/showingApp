// @ts-nocheck
import {ChangeDetectionStrategy, Component} from "@angular/core";
import {Routes} from "@angular/router";
import {NgDocApiListComponent} from '@ng-doc/app';

@Component({
  selector: 'ng-doc-api-list-page-pk9ydf1d',
  template: `<ng-doc-api-list title="API References" segment=""></ng-doc-api-list>`,
  imports: [NgDocApiListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicComponent {
}

const routes: Routes = [
  {
    path: '',
    component: DynamicComponent,
  },
]

export default routes;
