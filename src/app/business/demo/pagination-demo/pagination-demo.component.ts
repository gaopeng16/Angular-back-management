import {Component} from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-pagination-demo',
  templateUrl: './pagination-demo.component.html'
})
export class PaginationDemoComponent {


  btnCls: string = 'btn-outline-info';

  options: any = {
    total: 60, // 总条数
    pageList: [15, 25, 35] // 每页显示条数
  };


  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('分页');
  }

  onPageChanged($event) {
    console.log($event);
  }

  changeData() {
    this.options = {
      total: 10, // 总条数
      pageList: [10, 15, 20] // 每页显示条数

    };
  }

}
