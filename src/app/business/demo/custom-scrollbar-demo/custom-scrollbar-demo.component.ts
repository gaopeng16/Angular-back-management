import {Component} from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-custom-scrollbar-demo',
  templateUrl: './custom-scrollbar-demo.component.html'
})
export class CustomScrollbarDemoComponent {

  options: any = {
    axis: 'x',
    theme: 'minimal-dark',
    autoDraggerLength: true
  };

  options2: any = {
    axis: 'xy',
    theme: 'minimal-dark',
    autoDraggerLength: true
  };


  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('模拟滚动条');
  }

}
