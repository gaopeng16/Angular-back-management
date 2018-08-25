import {Component} from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-timeline-demo',
  templateUrl: './timeline-demo.component.html'
})
export class TimelineDemoComponent {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('时间轴样式');
  }

}
