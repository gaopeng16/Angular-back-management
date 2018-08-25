import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SysMonitorComponent} from './sys-monitor.component';


const sysMonitorRoutes: Routes = [
  {
    path: '',
    component: SysMonitorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(sysMonitorRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SysMonitorRoutingModule {
}
