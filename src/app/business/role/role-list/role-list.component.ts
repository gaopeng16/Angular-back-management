import {Component, ViewChild} from '@angular/core';
import {HttpPaginationComponent} from '../../../shared/pagination/http-pagination/http-pagination.component';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent {

  @ViewChild('hp', undefined) hp: HttpPaginationComponent;

  url: string = '';

  param: any = {};


  pageList: Array<number> = [15, 25, 35];

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('角色列表');
  }

  onDataChanged($event) {
    console.info($event);
  }

}
