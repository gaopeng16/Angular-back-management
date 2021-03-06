import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmConfig} from '../modal-model';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Input()
  config: ConfirmConfig;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  /**
   * 不同意
   */
  decline(): void {
    this.activeModal.dismiss({status: 'declined'});
  }

  /**
   * 关闭
   */
  close(): void {
    this.activeModal.dismiss({status: 'closed'});
  }

  /**
   * 同意
   */
  approve(): void {
    this.activeModal.close({status: 'approved'});
  }
}
