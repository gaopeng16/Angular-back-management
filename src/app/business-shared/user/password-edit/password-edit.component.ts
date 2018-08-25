import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastService} from '../../../shared/toast/toast.service';
import {CustomValidators} from '../../../shared/custom-validator/custom-validator';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-password-edit',
  templateUrl: './password-edit.component.html',
  styleUrls: ['./password-edit.component.scss']
})
export class PasswordEditComponent {

  passwordEditForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private toastService: ToastService,
    private fb: FormBuilder) {
    let oldPasswordFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    let passwordFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    let certainPasswordFc = new FormControl('', CustomValidators.equalTo(passwordFc));

    this.passwordEditForm = this.fb.group({
      oldPassword: oldPasswordFc,
      password: passwordFc,
      certainPassword: certainPasswordFc
    });
  }

  ok(): void {
    if (this.passwordEditForm.value) {
      // console.info(this.passwordEditForm.value);
      const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '修改密码成功！', 2000);
      this.toastService.toast(toastCfg);
      this.close();
    }
  }

  close(): void {
    this.activeModal.dismiss({status: 'closed'});
  }

}
