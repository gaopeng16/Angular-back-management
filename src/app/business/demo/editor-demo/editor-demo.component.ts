import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-editor-demo',
  template: `
    <div class="c-content-inner">
      <div class="row">
        <div class="col-md-12">
          <p class="c-line-title">示例</p>
          <app-editor [(ngModel)]="text" [style]="{'height':'320px'}"></app-editor>
          <br/>
          <app-editor [(ngModel)]="text2" [style]="{'height':'320px'}">
            <app-header-tpl>
              <select class="ql-size">
                <option value="small"></option>
                <option selected></option>
                <option value="large"></option>
                <option value="huge"></option>
              </select>

              <button class="ql-bold"></button>
              <button class="ql-script" value="sub"></button>
              <button class="ql-script" value="super"></button>
            </app-header-tpl>
          </app-editor>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="c-mt15">
            <p class="c-line-title">说明</p>
            组件目录:src/app/modules/shared/editor
          </div>
        </div>
      </div>
    </div>
  `
})
export class EditorDemoComponent {
  text: string = '这里面是内容..';
  text2: string = '这里面是内容..';

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('富文本编辑器');
  }

}
