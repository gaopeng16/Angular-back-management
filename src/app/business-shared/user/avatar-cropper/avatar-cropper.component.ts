import {Component, ViewChild} from '@angular/core';
import {CropperSettings, ImageCropperComponent} from 'ng2-img-cropper';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastService} from '../../../shared/toast/toast.service';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

/**
 * 头像更换组件
 */
@Component({
  selector: 'app-avatar-cropper',
  templateUrl: './avatar-cropper.component.html',
  styleUrls: ['./avatar-cropper.component.scss']
})
export class AvatarCropperComponent {

  // 用户头像
  userAvatar: string = './assets/img/user-header.png';

  // 头像
  avatar: any;

  // 头像裁剪配置
  avatarSettings: CropperSettings;

  // 头像裁剪元素
  @ViewChild('avatarCropper', undefined)
  avaratCropper: ImageCropperComponent;

  constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {
    this.avatarSettings = new CropperSettings();
    this.avatarSettings.noFileInput = true;
    this.avatarSettings.width = 120;
    this.avatarSettings.height = 120;
    this.avatarSettings.croppedWidth = 120;
    this.avatarSettings.croppedHeight = 120;
    this.avatarSettings.canvasWidth = 600;
    this.avatarSettings.canvasHeight = 600;
    this.avatarSettings.minWidth = 100;
    this.avatarSettings.minHeight = 100;
    this.avatarSettings.cropperDrawSettings.strokeWidth = 2;
    this.avatarSettings.cropperDrawSettings.strokeColor = 'red';
    this.avatarSettings.rounded = true;
    this.avatarSettings.fileType = 'image/png';
    this.avatar = {};
  }

  /**
   * 上传
   */
  upload() {
    console.info(this.avatar.image);
    this.userAvatar = this.avatar.image;
    const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '图片上传成功!', 2000);
    this.toastService.toast(toastCfg);
  }

  /**
   * 关闭
   */
  close(): void {
    this.activeModal.dismiss({status: 'closed'});
  }

}
