import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastService} from '../shared/toast/toast.service';
import {ToastConfig, ToastType} from '../shared/toast/toast-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private toastService: ToastService,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      userName: ['sysadmin', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      password: ['sysadmin', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  ngOnInit() {
  }

  login() {
    /* if (this.loginForm.valid) {
       let that = this;
       this.httpService.post(this.userBusinessService.login(), {
         userName:  this.loginForm.controls['userName'].value,
         password:  this.loginForm.controls['password'].value
       }, function (successful, data, res) {
         if (successful && Utils.resultSuccess(data.resultType)) {
           const toastCfg = new ToastConfig(ToastType.SUCCESS, '', data.resultMsg, 3000);
           that.toastService.toast(toastCfg);
           that.router.navigate(['/app/home']);
         }else if(successful && Utils.resultFailure(data.resultType)){
           const toastCfg = new ToastConfig(ToastType.WARNING, '', data.resultMsg, 3000);
           that.toastService.toast(toastCfg);
         }else{
           const toastCfg = new ToastConfig(ToastType.ERROR, '', data.resultMsg, 3000);
           that.toastService.toast(toastCfg);
         }
       }, function (successful, msg, err) {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
          that.toastService.toast(toastCfg);
       });

     }*/

    const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '登录成功！', 3000);
    this.toastService.toast(toastCfg);
    this.router.navigate(['/app/home']);
  }

}
