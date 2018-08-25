import {Component} from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-validator-demo',
  templateUrl: './validator-demo.component.html',
  styleUrls: ['./validator-demo.component.scss']
})
export class ValidatorDemoComponent {
  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('验证器示例');
  }

}
