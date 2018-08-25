import {NgModule} from '@angular/core';
import {ZtreeComponent} from './ztree.component';
import {SelectZtreeComponent} from './select-ztree/select-ztree.component';
import {ComModule} from '../../com/com.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    ComModule,
    NgbModule
  ],
  declarations: [ZtreeComponent, SelectZtreeComponent],
  exports: [ZtreeComponent, SelectZtreeComponent]
})
export class ZtreeModule {
}
