import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

/**
 * 旋转服务
 */
@Injectable({
  providedIn: 'root'
})
export class SpinService {

  private spinSubject = new Subject<boolean>();

  constructor() {
  }

  getSpin(): Observable<boolean> {
    return this.spinSubject;
  }

  spin(showSpin: boolean) {
    this.spinSubject.next(showSpin);
  }
}
