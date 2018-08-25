import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HierarchyViewComponent} from './hierarchy-view.component';
import {HierarchyViewNodeComponent} from './hierarchy-view-node.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HierarchyViewComponent,
    HierarchyViewNodeComponent,
  ],
  exports: [HierarchyViewComponent]
})
export class HierarchyViewModule {
}
