import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from './menu.component';
import {MenuAddComponent} from './menu-add/menu-add.component';
import {MenuListComponent} from './menu-list/menu-list.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent,
    children: [
      {path: 'menuAdd', component: MenuAddComponent},
      {path: 'menuList', component: MenuListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {
}
