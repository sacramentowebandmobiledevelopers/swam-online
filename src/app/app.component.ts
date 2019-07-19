import { Component } from '@angular/core';

@Component({
  selector: 'swam-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <mat-toolbar color="primary">
      <span>Sacramento Web and Mobile Devs</span>
      <span class="fill-remaining-space"></span>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'swam-online';
}
