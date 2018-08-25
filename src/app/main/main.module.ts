import {NgModule} from '@angular/core';

import {ComModule} from '../com/com.module';
import {MainRoutingModule} from './main-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalModule} from '../shared/modal/modal.module';
import {UserSharedModule} from '../business-shared/user/user-shared.module';
import {CustomScrollbarModule} from '../shared/custom-scrollbar/custom-scrollbar.module';// 滚动条

import {MainComponent} from './main.component';
import {SidebarMenuComponent} from './sidebar-menu.component';
import {TreeviewMenuComponent} from './treeview-menu.component';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    ComModule,
    MainRoutingModule,
    UserSharedModule,
    CustomScrollbarModule,
    ModalModule,
  ],
  declarations: [
    MainComponent,
    SidebarMenuComponent,
    TreeviewMenuComponent
  ]
})
export class MainModule {
}
