import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DemoComponent} from './demo.component';
import {ToastDemoComponent} from './toast-demo/toast-demo.component';
import {ModalDemoComponent} from './modal-demo/modal-demo.component';
import {NgxChartsDemoComponent} from './ngx-charts-demo/ngx-charts-demo.component';
import {SelectDemoComponent} from './select-demo/select-demo.component';
import {HierarchyViewDemoComponent} from './hierarchy-view-demo/hierarchy-view-demo.component';
import {ImgCropperDemoComponent} from './img-cropper-demo/img-cropper-demo.component';
import {PaginationDemoComponent} from './pagination-demo/pagination-demo.component';
import {HttpPaginationDemoComponent} from './pagination-demo/http-pagination-demo/http-pagination-demo.component';
import {SwitchDemoComponent} from './switch-demo/switch-demo.component';
import {DatepickerDemoComponent} from './datepicker-demo/datepicker-demo.component';
import {TreeDemoComponent} from './tree-demo/tree-demo.component';
import {ZtreeDemoComponent} from './ztree-demo/ztree-demo.component';
import {ImgSelectToBaseDemoComponent} from './img-select-to-base-demo/img-select-to-base-demo.component';
import {FileUploadDemoComponent} from './file-upload-demo/file-upload-demo.component';
import {CustomScrollbarDemoComponent} from './custom-scrollbar-demo/custom-scrollbar-demo.component';
import {ImageViewerDemoComponent} from './image-viewer-demo/image-viewer-demo.component';
import {SpinDemoComponent} from './spin-demo/spin-demo.component';
import {StorageDemoComponent} from './storage-demo/storage-demo.component';
import {PageBrowserDemoComponent} from './page-browser-demo/page-browser-demo.component';
import {EditorDemoComponent} from './editor-demo/editor-demo.component';
import {AgGridDemoComponent} from './ag-grid-demo/ag-grid-demo.component';
import {SimpleDataTableDemoComponent} from './simple-data-table-demo/simple-data-table-demo.component';
import {ColorPickerDemoComponent} from './color-picker-demo/color-picker-demo.component';
import {StepDemoComponent} from './step-demo/step-demo.component';
import {ValidatorDemoComponent} from './validator-demo/validator-demo.component';
import {QrcodeDemoComponent} from './qrcode-demo/qrcode-demo.component';
import {SimpleMindDemoComponent} from './simple-mind-demo/simple-mind-demo.component';
import {BootstrapDemoComponent} from './bootstrap-demo/bootstrap-demo.component';
import {NgBootstrapDemoComponent} from './ng-bootstrap-demo/ng-bootstrap-demo.component';
import {TimelineDemoComponent} from './timeline-demo/timeline-demo.component';

const routes: Routes = [
  {
    path: '', component: DemoComponent,
    children: [
      {path: 'toastDemo', component: ToastDemoComponent},
      {path: 'modalDemo', component: ModalDemoComponent},
      {path: 'ngxChartsDemo', component: NgxChartsDemoComponent},
      {path: 'selectDemo', component: SelectDemoComponent},
      {path: 'hierarchyViewDemo', component: HierarchyViewDemoComponent},
      {path: 'imgCropperDemo', component: ImgCropperDemoComponent},
      {path: 'paginationDemo', component: PaginationDemoComponent},
      {path: 'httpPaginationDemo', component: HttpPaginationDemoComponent},
      {path: 'switchDemo', component: SwitchDemoComponent},
      {path: 'datepickerDemo', component: DatepickerDemoComponent},
      {path: 'treeDemo', component: TreeDemoComponent},
      {path: 'ztreeDemo', component: ZtreeDemoComponent},
      {path: 'imgSelectToBaseDemo', component: ImgSelectToBaseDemoComponent},
      {path: 'fileUploadDemo', component: FileUploadDemoComponent},
      {path: 'customScrollbarDemo', component: CustomScrollbarDemoComponent},
      {path: 'imageViewerDemo', component: ImageViewerDemoComponent},
      {path: 'spinDemo', component: SpinDemoComponent},
      {path: 'storageDemo', component: StorageDemoComponent},
      {path: 'pageBrowserDemo', component: PageBrowserDemoComponent},
      {path: 'editorDemo', component: EditorDemoComponent},
      {path: 'agGridDemo', component: AgGridDemoComponent},
      {path: 'simpleDataTableDemo', component: SimpleDataTableDemoComponent},
      {path: 'colorPickerDemo', component: ColorPickerDemoComponent},
      {path: 'stepDemo', component: StepDemoComponent},
      {path: 'validatorDemo', component: ValidatorDemoComponent},
      {path: 'qrcodeDemo', component: QrcodeDemoComponent},
      {path: 'simpleMindDemo', component: SimpleMindDemoComponent},
      {path: 'ngBootstrapDemo', component: NgBootstrapDemoComponent},
      {path: 'bootstrapDemo', component: BootstrapDemoComponent},
      {path: 'timelineDemo', component: TimelineDemoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {
}
