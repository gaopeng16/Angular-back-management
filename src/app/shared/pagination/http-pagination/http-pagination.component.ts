import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Utils} from '../../util/utils';
import {HttpPaginationMethod, PaginationType} from '../pagination-model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ToastService} from '../../toast/toast.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-http-pagination',
  template: `
    <app-pagination
      [total]="total"
      [pageList]="pageList"
      [btnCls]="btnCls"
      (onPageChanged)="onPageChanged($event)">
    </app-pagination>`
})
export class HttpPaginationComponent implements OnInit {

  @Input()
  pageList: Array<number> = [10, 20, 30, 50, 100, 150, 200];

  @Input()
  btnCls: string = 'btn-light';

  @Input()
  url: string;

  @Input()
  method: string = 'post';

  @Input()
  param: any = new Object();

  httpData: Observable<any>;


  @Output()
  onDataChanged = new EventEmitter();

  total: number = 0;
  pageSize: number = this.pageList[0];
  pageNumber: number = 1;

  constructor(private httpService: HttpClient, private toastService: ToastService) {
  }

  ngOnInit() {
    this.getServerData();
  }

  /**
   * 查询方法
   */
  search() {
    this.getServerData();
  }

  /**
   * 获得服务器数据
   */
  private getServerData() {
    let that = this;
    let serviceData: any = [];
    if (Utils.isArray(this.param)) {
      serviceData.pageNumber = this.pageNumber;
      serviceData.pageSize = this.pageSize;
      serviceData.list = this.param;
    } else if (Utils.isObject(this.param)) {
      this.param.pageNumber = this.pageNumber;
      this.param.pageSize = this.pageSize;
      serviceData = this.param;
    } else {
      serviceData.pageNumber = this.pageNumber;
      serviceData.pageSize = this.pageSize;
    }

    const params = new HttpParams()
      .set('pageNumber', `${serviceData.pageNumber}`)
      .set('pageSize', `${serviceData.pageSize}`);

    if (this.method == HttpPaginationMethod.GET && Utils.isNotEmpty(this.url)) {
      this.httpData = this.httpService.get(this.url, {params});
    }
  }


  /**
   * 服务器端数据处理
   * @param data 数据
   */
  private serverDataProcess(data: any) {
    if (data && data.total && data.rows) {
      this.total = data.total;
      this.onDataChanged.emit(data.rows);
    } else {
      console.error('c-http-pagination,返回的数据格式不正确！');
    }
  }


  /**
   * 分页改变事件
   * @param event
   */
  onPageChanged($event) {
    if ($event.type != PaginationType.PAGE_INIT) {
      this.pageSize = $event.pageSize;
      this.pageNumber = $event.pageNumber;
      this.getServerData();
    }
  }

}

