import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('个人资料');
  }

  ngOnInit() {
  }

}
