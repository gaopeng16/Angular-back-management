import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {path: 'home', loadChildren: '../business/home/home.module#HomeModule'},
      {path: 'demo', loadChildren: '../business/demo/demo.module#DemoModule'},
      {path: 'user', loadChildren: '../business/user/user.module#UserModule'},
      {path: 'role', loadChildren: '../business/role/role.module#RoleModule'},
      {path: 'menu', loadChildren: '../business/menu/menu.module#MenuModule'},
      {path: 'sysLog', loadChildren: '../business/sys-log/sys-log.module#SysLogModule'},
      {path: 'sysMonitor', loadChildren: '../business/sys-monitor/sys-monitor.module#SysMonitorModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
