import {NgModule} from '@angular/core';
import {TreeComponent} from './tree.component';
import {SelectTreeComponent} from './select-tree/select-tree.component';
import {TreeNodeComponent} from './tree-node/tree-node.component';
import {ComModule} from '../../com/com.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    ComModule,
    NgbModule
  ],
  declarations: [
    TreeComponent,
    SelectTreeComponent,
    TreeNodeComponent
  ],
  exports: [
    TreeComponent,
    SelectTreeComponent
  ]
})
export class TreeModule {
}
