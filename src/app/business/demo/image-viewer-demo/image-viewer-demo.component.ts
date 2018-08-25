import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-image-viewer-demo',
  templateUrl: './image-viewer-demo.component.html',
  styleUrls: ['./image-viewer-demo.component.scss']
})
export class ImageViewerDemoComponent {
  options: any = {
    url: 'data-original',
    transition: false
  };
  instance: any;

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('图片查看器');
  }

  onViewInit(instance) {
    this.instance = instance;
  }

  toggle() {
    this.instance.toggle();
  }


}
