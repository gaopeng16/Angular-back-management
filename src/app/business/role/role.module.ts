import {NgModule} from '@angular/core';

import {RoleRoutingModule} from './role-routing.module';
import {RoleComponent} from './role.component';
import {RoleListComponent} from './role-list/role-list.component';
import {RoleAddComponent} from './role-add/role-add.component';
import {RoleDistributeComponent} from './role-distribute/role-distribute.component';
import {ComModule} from '../../com/com.module';
import {PaginationModule} from '../../shared/pagination/pagination.module';

@NgModule({
  imports: [
    ComModule,
    RoleRoutingModule,
    PaginationModule
  ],
  declarations: [
    RoleComponent,
    RoleListComponent,
    RoleAddComponent,
    RoleDistributeComponent
  ]
})
export class RoleModule {
}
