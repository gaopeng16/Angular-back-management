import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageBrowserComponent} from './page-browser.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageBrowserComponent
  ],
  exports: [
    PageBrowserComponent
  ]
})
export class PageBrowserModule {
}
