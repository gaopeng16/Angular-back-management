import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-role-distribute',
  templateUrl: './role-distribute.component.html',
  styleUrls: ['./role-distribute.component.scss']
})
export class RoleDistributeComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('角色分配');
  }


  ngOnInit() {
  }

}
