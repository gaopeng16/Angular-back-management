import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SwitchTheme} from './switch-model';

const C_SWITCH_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
};

@Component({
  selector: 'app-switch',
  template: `
    <span class="c-switch" [class.checked]="checked" [class.disabled]="disabled" [ngClass]="theme" (click)="toggle()">
      <small></small>
      <span class="c-switch-text">
        <span class="on" [hidden]="!onLabel">{{onLabel}}</span>
        <span class="off" [hidden]="!offLabel">{{offLabel}}</span>
      </span>
    </span>`,
  styleUrls: ['./switch.component.scss'],
  providers: [C_SWITCH_CONTROL_VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor {

  @Input()
  checked: boolean = false;

  @Input()
  disabled: boolean = false;

  @Input()
  onLabel: string = '';

  @Input()
  offLabel: string = '';

  @Input()
  theme: string = SwitchTheme.THTME_PRIMARY;

  @Output()
  onChange = new EventEmitter();

  constructor() {
  }

  toggle() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.onChange.emit(this.checked);
      this.onChangeCallback(this.checked);
      this.onTouchedCallback(this.checked);
    } else {

    }
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(ck: any): void {
    if (ck !== this.checked && !this.disabled) {
      this.checked = !!ck;
    } else {
      this.checked = false;
    }
  }

  private onTouchedCallback = (v: any) => {
  };

  private onChangeCallback = (v: any) => {
  };


}
