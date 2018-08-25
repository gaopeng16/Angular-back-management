import {NgModule} from '@angular/core';
import {EditorComponent} from './editor.component';
import {CommonTplModule} from '../common-tpl/common-tpl.module';
import {ComModule} from '../../com/com.module';

@NgModule({
  imports: [
    ComModule,
    CommonTplModule,
  ],
  declarations: [EditorComponent],
  exports: [EditorComponent]
})
export class EditorModule {
}
