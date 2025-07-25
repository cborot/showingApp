import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

// import { NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent } from "@ng-doc/app";
// import { RouterOutlet } from '@angular/router';

/**
* My doc component
*/
@Component({
  standalone: false,
  selector: 'ng-doc-docs',
  template: `
    <ng-doc-root>
      <ng-doc-navbar>
        <h3 style="margin: 0" ngDocNavbarLeft>ShowingApp Documentation</h3>
      </ng-doc-navbar>
      <ng-doc-sidebar></ng-doc-sidebar>
      <router-outlet></router-outlet>
    </ng-doc-root>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponent { }
