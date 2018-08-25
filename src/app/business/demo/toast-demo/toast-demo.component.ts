import {Component} from '@angular/core';
import {ToastService} from '../../../shared/toast/toast.service';
import {AppService} from '../../../app.service';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-toast-demo',
  templateUrl: './toast-demo.component.html',
})
export class ToastDemoComponent {

  constructor(
    private toastService: ToastService,
    private appService: AppService) {
    this.appService.titleEventEmitter.emit('消息框');
  }

  openInfo() {
    const toaseCfg = new ToastConfig(ToastType.INFO, '', '这是一条INFO消息!', 3000);
    this.toastService.toast(toaseCfg);
  }

  openWarning() {
    const toastCfg = new ToastConfig(ToastType.WARNING, '', '这是一条WARNING消息!', 3000);
    this.toastService.toast(toastCfg);
  }

  openSuccess() {
    const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '这是一条SUCCESS消息!', 3000);
    this.toastService.toast(toastCfg);
  }

  openError() {
    const toastCfg = new ToastConfig(ToastType.ERROR, '', '这是一条ERROR消息!', 3000);
    this.toastService.toast(toastCfg);
  }

}
