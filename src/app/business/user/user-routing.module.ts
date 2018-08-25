import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user.component';
import {UserAddComponent} from './user-add/user-add.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserInfoComponent} from './user-info/user-info.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      {path: 'userAdd', component: UserAddComponent},
      {path: 'userList', component: UserListComponent},
      {path: 'userInfo', component: UserInfoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
