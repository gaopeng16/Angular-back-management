import {Component, OnInit, ViewChild} from '@angular/core';
import {Bounds, CropperSettings, ImageCropperComponent} from 'ng2-img-cropper';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-img-cropper-demo',
  templateUrl: './img-cropper-demo.component.html',
  styleUrls: ['./img-cropper-demo.component.scss']
})
export class ImgCropperDemoComponent implements OnInit {

  name: string;
  data1: any;
  cropperSettings: CropperSettings;

  @ViewChild('cropper', undefined) cropper: ImageCropperComponent;

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('图片裁剪');

    this.name = 'Angular2';
    this.cropperSettings = new CropperSettings();

    this.cropperSettings.noFileInput = true;

    this.cropperSettings.width = 200;
    this.cropperSettings.height = 200;

    this.cropperSettings.croppedWidth = 200;
    this.cropperSettings.croppedHeight = 200;

    this.cropperSettings.canvasWidth = 500;
    this.cropperSettings.canvasHeight = 500;

    this.cropperSettings.minWidth = 100;
    this.cropperSettings.minHeight = 100;

    this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings.cropperDrawSettings.strokeWidth = 2;

    this.cropperSettings.rounded = true;

    this.data1 = {};
  }

  ngOnInit() {
  }

  cropped(bounds: Bounds) {
    console.info(bounds);
    console.info(this.data1.image);
  }

}
