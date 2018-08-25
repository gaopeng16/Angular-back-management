import {Component} from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-color-picker-demo',
  templateUrl: './color-picker-demo.component.html',
  styleUrls: ['./color-picker-demo.component.scss']
})
export class ColorPickerDemoComponent {

  color: string = '#ff0000';

  color2: any = {
    r: 100, g: 130, b: 150
  };

  color3: any = {
    h: 100, s: 50, b: 50
  };

  selectColor: string = '#1190d6';

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('颜色选择器示例');
  }

}
