import {Component} from '@angular/core';
import {SwitchTheme} from '../../../shared/switch/switch-model';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-switch-demo',
  templateUrl: './switch-demo.component.html'
})
export class SwitchDemoComponent {

  swbtn: boolean = true;
  theme: string = SwitchTheme.THTME_WARNING;
  theme2: string = SwitchTheme.THTME_SUCCESS;

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('开关按钮');
  }

  change($event) {
    console.log($event);
  }

}
