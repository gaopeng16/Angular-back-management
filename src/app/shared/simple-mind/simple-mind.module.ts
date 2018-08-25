import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleMindComponent} from './simple-mind.component';
import {SimpleMindItemComponent} from './simple-mind-item/simple-mind-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SimpleMindItemComponent,
    SimpleMindComponent
  ],
  exports: [
    SimpleMindComponent
  ]
})
export class SimpleMindModule {
}
