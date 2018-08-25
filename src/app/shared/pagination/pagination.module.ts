import {NgModule} from '@angular/core';
import {ComModule} from '../../com/com.module';

import {PaginationComponent} from './pagination.component';
import {HttpPaginationComponent} from './http-pagination/http-pagination.component';

@NgModule({
  imports: [
    ComModule
  ],
  declarations: [
    PaginationComponent,
    HttpPaginationComponent
  ],
  exports: [
    PaginationComponent,
    HttpPaginationComponent
  ]
})
export class PaginationModule {
}
