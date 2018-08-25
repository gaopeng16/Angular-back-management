import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PasswordEditComponent} from './password-edit/password-edit.component';
import {AvatarCropperComponent} from './avatar-cropper/avatar-cropper.component';
import {ComModule} from '../../com/com.module';
import {ImageCropperModule} from 'ng2-img-cropper';
import {ImgCropperSelectModule} from '../../shared/img-cropper-select/img-cropper-select.module';

/**
 * 用户共享模块
 */
@NgModule({
  imports: [
    NgbModule,
    ComModule,
    ImageCropperModule,
    ImgCropperSelectModule
  ],
  declarations: [
    PasswordEditComponent,
    AvatarCropperComponent
  ],
  entryComponents: [
    PasswordEditComponent,
    AvatarCropperComponent
  ],
  exports: [],
  providers: []
})

export class UserSharedModule {

}
