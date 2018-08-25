import {NgModule} from '@angular/core';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {UserAddComponent} from './user-add/user-add.component';
import {UserListComponent} from './user-list/user-list.component';
import {ComModule} from '../../com/com.module';
import {PaginationModule} from '../../shared/pagination/pagination.module';

@NgModule({
  imports: [
    ComModule,
    UserRoutingModule,
    PaginationModule
  ],
  declarations: [
    UserComponent,
    UserInfoComponent,
    UserAddComponent,
    UserListComponent]
})
export class UserModule {
}
