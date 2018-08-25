import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {LocalStorageService} from '../../../shared/storage/local-storage.service';

@Component({
  selector: 'app-storage-demo',
  templateUrl: './storage-demo.component.html',
  styleUrls: ['./storage-demo.component.scss']
})
export class StorageDemoComponent {

  constructor(private appService: AppService, private lgs: LocalStorageService) {

    this.appService.titleEventEmitter.emit('本地存储');
  }

  setVal() {
    this.lgs.set('v1', 'aaaa');
  }

  getVal() {
    console.info(this.lgs.get('v1'));
  }

  setObj() {
    this.lgs.setObject('o1', {'v1': '123'});
  }

  getObj() {
    console.info(this.lgs.getObject('o1'));
  }

}
