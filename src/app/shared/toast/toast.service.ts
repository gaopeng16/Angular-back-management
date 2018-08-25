import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ToastConfig} from './toast-model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toastSubject = new Subject<ToastConfig>();

  constructor() {
  }

  getToasts(): Observable<ToastConfig> {
    return this.toastSubject;
  }

  toast(toastConfig: ToastConfig) {
    this.toastSubject.next(toastConfig);
  }
}
