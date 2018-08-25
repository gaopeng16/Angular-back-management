import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-toast-box toastAnimation="fancy"></app-toast-box>
    <app-spin></app-spin>`
})
export class AppComponent {

}
