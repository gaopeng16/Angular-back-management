import {NgModule} from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ComModule} from '../../com/com.module';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    ComModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
