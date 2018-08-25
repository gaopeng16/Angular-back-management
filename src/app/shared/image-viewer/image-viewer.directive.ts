import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output} from '@angular/core';

declare var $: any;

@Directive({
  selector: '[app-image-viewer]'
})
export class ImageViewerDirective implements AfterViewInit, OnDestroy {

  // 配置
  @Input()
  options: any = {};

  @Output()
  onViewInit = new EventEmitter();

  private imageViewerInstance: any;

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.createImageViewer();
  }

  createImageViewer() {
    this.imageViewerInstance = $(this.elementRef.nativeElement).viewer(this.options);
    this.onViewInit.emit(this.imageViewerInstance);
  }


  /**
   * 销毁
   */
  ngOnDestroy() {
    this.imageViewerInstance.viewer('destroy');
  }


}
