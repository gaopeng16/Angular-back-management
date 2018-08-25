import {NgModule} from '@angular/core';
import {ComModule} from '../../com/com.module';

// 第三方
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {SelectModule} from 'angular2-select';
import {Select2Module} from 'ng2-select2';
import {ImageCropperModule} from 'ng2-img-cropper';
import {DpDatePickerModule} from 'ng2-date-picker';
import {FileUploadModule} from 'ng2-file-upload';
import {AgGridModule} from 'ag-grid-angular';
import {SimpleMindModule} from '../../shared/simple-mind/simple-mind.module';


// 自定义
import {ImgCropperSelectModule} from '../../shared/img-cropper-select/img-cropper-select.module';// 图片裁剪模块
import {PaginationModule} from '../../shared/pagination/pagination.module';// 分页
import {CustomScrollbarModule} from '../../shared/custom-scrollbar/custom-scrollbar.module';// 滚动条
import {DatepickerI18nModule} from '../../shared/datepicker-i18n/datepicker-i18n.module';// 日期i18n
import {TreeModule} from '../../shared/tree/tree.module';// 树
import {ZtreeModule} from '../../shared/ztree/ztree.module';// ztree
import {ImgSelectModule} from '../../shared/img-select/img-select.module';// 图片选择
import {SwitchModule} from '../../shared/switch/switch.module';// 开关
import {ImageViewerModule} from '../../shared/image-viewer/image-viewer.module';// 图片查看器
import {PageBrowserModule} from '../../shared/page-browser/page-browser.module';// 页面浏览器
import {CommonTplModule} from '../../shared/common-tpl/common-tpl.module';// 公共模版
import {EditorModule} from '../../shared/editor/editor.module';// 富文本
import {SimpleDataTableModule} from '../../shared/simple-data-table/simple-data-table.module';// 模态框
import {ColorPickerModule} from '../../shared/color-picker/color-picker.module';// 颜色选择器
import {StepModule} from '../../shared/step/step.module';// 步骤条
import {QrcodeModule} from '../../shared/qrcode/qrcode.module';


// 路由
import {DemoRoutingModule} from './demo-routing.module';


import {DemoComponent} from './demo.component';
import {ToastDemoComponent} from './toast-demo/toast-demo.component';
import {ModalDemoComponent} from './modal-demo/modal-demo.component';
import {NgxChartsDemoComponent} from './ngx-charts-demo/ngx-charts-demo.component';
import {SelectDemoComponent} from './select-demo/select-demo.component';
import {HierarchyViewDemoComponent} from './hierarchy-view-demo/hierarchy-view-demo.component';
import {HierarchyViewComponent} from '../../shared/hierarchy-view/hierarchy-view.component';
import {HierarchyViewNodeComponent} from '../../shared/hierarchy-view/hierarchy-view-node.component';
import {ImgCropperDemoComponent} from './img-cropper-demo/img-cropper-demo.component';
import {PaginationDemoComponent} from './pagination-demo/pagination-demo.component';
import {SwitchDemoComponent} from './switch-demo/switch-demo.component';
import {HttpPaginationDemoComponent} from './pagination-demo/http-pagination-demo/http-pagination-demo.component';
import {DatepickerDemoComponent} from './datepicker-demo/datepicker-demo.component';
import {ZtreeDemoComponent} from './ztree-demo/ztree-demo.component';
import {TreeDemoComponent} from './tree-demo/tree-demo.component';
import {ImgSelectToBaseDemoComponent} from './img-select-to-base-demo/img-select-to-base-demo.component';
import {FileUploadDemoComponent} from './file-upload-demo/file-upload-demo.component';
import {CustomScrollbarDemoComponent} from './custom-scrollbar-demo/custom-scrollbar-demo.component';
import {ImageViewerDemoComponent} from './image-viewer-demo/image-viewer-demo.component';
import {SpinDemoComponent} from './spin-demo/spin-demo.component';
import {StorageDemoComponent} from './storage-demo/storage-demo.component';
import {PageBrowserDemoComponent} from './page-browser-demo/page-browser-demo.component';
import {EditorDemoComponent} from './editor-demo/editor-demo.component';
import {SimpleDataTableDemoComponent} from './simple-data-table-demo/simple-data-table-demo.component';
import {ColorPickerDemoComponent} from './color-picker-demo/color-picker-demo.component';
import {StepDemoComponent} from './step-demo/step-demo.component';
import {ValidatorDemoComponent} from './validator-demo/validator-demo.component';
import {QrcodeDemoComponent} from './qrcode-demo/qrcode-demo.component';
import {SimpleMindDemoComponent} from './simple-mind-demo/simple-mind-demo.component';
import {BootstrapDemoComponent} from './bootstrap-demo/bootstrap-demo.component';
import {AgGridDemoComponent} from './ag-grid-demo/ag-grid-demo.component';
import { TimelineDemoComponent } from './timeline-demo/timeline-demo.component';
import {NgBootstrapDemoComponent} from './ng-bootstrap-demo/ng-bootstrap-demo.component';


@NgModule({
  imports: [
    ComModule,
    DemoRoutingModule,
    NgbModule,
    NgxChartsModule,
    SelectModule,
    Select2Module,
    ImageCropperModule,
    ImgCropperSelectModule,
    PaginationModule,
    CustomScrollbarModule,
    SwitchModule,
    DatepickerI18nModule,
    DpDatePickerModule,
    TreeModule,
    ZtreeModule,
    ImgSelectModule,
    FileUploadModule,
    ImageViewerModule,
    PageBrowserModule,
    EditorModule,
    CommonTplModule,
    AgGridModule.withComponents([]),
    SimpleDataTableModule,
    ColorPickerModule,
    StepModule,
    QrcodeModule,
    SimpleMindModule,
  ],
  declarations: [
    DemoComponent,
    ToastDemoComponent,
    ModalDemoComponent,
    NgxChartsDemoComponent,
    SelectDemoComponent,
    HierarchyViewDemoComponent,
    HierarchyViewComponent,
    HierarchyViewNodeComponent,
    ImgCropperDemoComponent,
    PaginationDemoComponent,
    SwitchDemoComponent,
    DatepickerDemoComponent,
    TreeDemoComponent,
    ZtreeDemoComponent,
    HttpPaginationDemoComponent,
    FileUploadDemoComponent,
    CustomScrollbarDemoComponent,
    ImageViewerDemoComponent,
    ImgSelectToBaseDemoComponent,
    SpinDemoComponent,
    EditorDemoComponent,
    SimpleDataTableDemoComponent,
    ColorPickerDemoComponent,
    ValidatorDemoComponent,
    QrcodeDemoComponent,
    SimpleMindDemoComponent,
    BootstrapDemoComponent,
    NgBootstrapDemoComponent,
    TimelineDemoComponent,
    StepDemoComponent,
    AgGridDemoComponent,
    StorageDemoComponent,
    PageBrowserDemoComponent,
  ]
})
export class DemoModule {
}
