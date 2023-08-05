import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  warningIcon = faTriangleExclamation;
  forgetPassForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })
  submitted = false;
  forgetPassUser() {
    this.submitted = true;
    this.forgetPassForm.markAllAsTouched();
    if (this.forgetPassForm.valid) {
      alert('hi')
    }
  }
  get userName() {
    return this.forgetPassForm.get('email')
  }
}
