import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageViewerDirective} from './image-viewer.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImageViewerDirective],
  exports: [ImageViewerDirective]
})
export class ImageViewerModule {
}
