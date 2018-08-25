import {NgModule} from '@angular/core';
import {ColorPickerComponent} from './color-picker.component';
import {ComModule} from '../../com/com.module';

@NgModule({
  imports: [
    ComModule
  ],
  declarations: [ColorPickerComponent],
  exports: [ColorPickerComponent]
})
export class ColorPickerModule {
}
