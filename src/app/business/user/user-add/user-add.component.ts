import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('用户添加');
  }

}
