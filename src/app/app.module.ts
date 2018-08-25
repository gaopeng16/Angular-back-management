import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastBoxComponent} from './shared/toast/toast-box/toast-box.component';
import {ComModule} from './com/com.module';
import {ToastComponent} from './shared/toast/toast.component';
import {HttpClientModule} from '@angular/common/http';
import {SpinComponent} from './shared/spin/spin.component';
import {AppService} from './app.service';
import {ToastService} from './shared/toast/toast.service';
import {SpinService} from './shared/spin/spin.service';
import {LocalStorageService} from './shared/storage/local-storage.service';
import {SessionStorageService} from './shared/storage/session-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ToastBoxComponent,
    ToastComponent,
    SpinComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    ComModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AppService,
    ToastService,
    SpinService,
    LocalStorageService,
    SessionStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
