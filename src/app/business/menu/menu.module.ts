import {NgModule} from '@angular/core';

import {MenuRoutingModule} from './menu-routing.module';
import {MenuComponent} from './menu.component';
import {MenuListComponent} from './menu-list/menu-list.component';
import {MenuAddComponent} from './menu-add/menu-add.component';
import {ComModule} from '../../com/com.module';

@NgModule({
  imports: [
    ComModule,
    MenuRoutingModule
  ],
  declarations: [MenuComponent, MenuListComponent, MenuAddComponent]
})
export class MenuModule {
}
