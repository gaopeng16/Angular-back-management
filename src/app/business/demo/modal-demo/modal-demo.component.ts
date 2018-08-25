import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../../shared/modal/modal.service';
import {AppService} from '../../../app.service';
import {AlertConfig, AlertType, ConfirmConfig} from '../../../shared/modal/modal-model';

@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styleUrls: ['./modal-demo.component.scss']
})
export class ModalDemoComponent {

  constructor(private modalService: ModalService, private appService: AppService) {
    this.appService.titleEventEmitter.emit('模态框');
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  openInfo() {
    const alertCfg = new AlertConfig(AlertType.INFO, '标题', '这是一条INFO消息!');
    this.modalService.alert(alertCfg);
  }

  openWarning() {
    const alertCfg = new AlertConfig(AlertType.WARNING, '标题', '这是一条WARNING消息!');
    this.modalService.alert(alertCfg);
  }

  openError() {
    const alertCfg = new AlertConfig(AlertType.ERROR, '标题', '这是一条ERROR消息!');
    this.modalService.alert(alertCfg);
  }

  openConfirm() {
    const confirmCfg = new ConfirmConfig('您打开了一个确认框！');
    this.modalService.confirm(confirmCfg);
  }
}
