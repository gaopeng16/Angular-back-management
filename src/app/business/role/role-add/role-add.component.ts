import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("角色添加");
  }

  ngOnInit() {
  }

}
