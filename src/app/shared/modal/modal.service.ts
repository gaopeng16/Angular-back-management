import {Injectable} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AlertConfig, ConfirmConfig} from './modal-model';
import {ConfirmComponent} from './confirm/confirm.component';
import {AlertComponent} from './alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) {
  }

  // 确认框
  confirm(config: ConfirmConfig): Promise<any> {
    const modalRef = this.modalService.open(ConfirmComponent);
    modalRef.componentInstance.config = config;
    return modalRef.result;
  }

  // 警告框
  alert(config: AlertConfig): Promise<any> {
    const modalRef = this.modalService.open(AlertComponent);
    modalRef.componentInstance.config = config;
    return modalRef.result;
  }

}
