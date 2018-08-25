import {Component, ViewChild} from '@angular/core';
import {HttpPaginationComponent} from '../../../../shared/pagination/http-pagination/http-pagination.component';
import {AppService} from '../../../../app.service';

@Component({
  selector: 'app-http-pagination-demo',
  templateUrl: './http-pagination-demo.component.html'
})
export class HttpPaginationDemoComponent {

  @ViewChild('hp', undefined) hp: HttpPaginationComponent;

  url: string = 'http://192.168.1.107:8080/cjhme/user/login.jhtml';

  param: any = {
    name: 'admin',
    age: 16
  };

  pageList: Array<number> = [15, 25, 35];

  btnCls: string = 'btn-outline-info';

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('HTTP分页');
  }

  onDataChanged($event) {
    console.info($event);
  }


  search() {
    this.param.age = 20;
    this.param.name = 'admin2';
    this.param.sex = '男';
    this.pageList = [10, 15, 20];

    this.hp.search();
  }
}
