import {Component} from '@angular/core';
import {AppService} from '../../../app.service';
import {PageBrowserConfig} from '../../../shared/page-browser/page-browser-model';

@Component({
  selector: 'app-page-browser-demo',
  templateUrl: './page-browser-demo.component.html'
})
export class PageBrowserDemoComponent {

  config: PageBrowserConfig = {
    title: 'http://www.baidu.com/',
    url: 'http://www.baidu.com/'
  };

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('页面浏览器');
  }

}
