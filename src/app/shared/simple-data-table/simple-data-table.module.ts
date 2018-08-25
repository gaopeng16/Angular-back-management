import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleDataSortComponent} from './simple-data-sort/simple-data-sort.component';
import {SimpleDataHttpPageComponent} from './simple-data-http-page/simple-data-http-page.component';
import {SimpleDataTableDirective} from './simple-data-table.directive';
import {PaginationModule} from '../pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule
  ],
  declarations: [
    SimpleDataSortComponent,
    SimpleDataHttpPageComponent,
    SimpleDataTableDirective
  ],
  exports: [
    SimpleDataSortComponent,
    SimpleDataHttpPageComponent,
    SimpleDataTableDirective
  ]
})
export class SimpleDataTableModule {
}
