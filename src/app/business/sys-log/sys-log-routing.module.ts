import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SysLogComponent} from './sys-log.component';


const sysLogRoutes: Routes = [
  {
    path: '',
    component: SysLogComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(sysLogRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SysLogRoutingModule {
}
