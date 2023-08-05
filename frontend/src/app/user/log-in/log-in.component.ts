import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  warningIcon = faTriangleExclamation;
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })
  submitted = false;
  signupform: any;
  constructor(private userService: UserService, private router: Router) { }

  loginUser() {
    this.submitted = true;
    if (this.loginform.invalid) {
      return;
    }

    const userEmail = this.loginform.value.email ?? '';
    const password = this.loginform.value.password ?? '';

    this.userService.login(userEmail, password).subscribe({
      next: _response => {
        // this.router.navigate(['/dashboard']);
      },
      error: error => {
        // Handle signup error
        console.error('Signup error:', error);
        // Display an error message to the user or perform any other error handling
      }
    });
  }
  get userName() {
    return this.loginform.get('email')
  }
  get userPassword() {
    return this.loginform.get('password')
  }


  @ViewChild('password')
  passwordInput!: ElementRef;
  @ViewChild('showHideIcon')
  showHideIcon!: ElementRef;
  changeIcon() {
    const passwordElement = this.passwordInput.nativeElement;
    const iconElement = this.showHideIcon.nativeElement;
    if (passwordElement.type === 'password') {
      passwordElement.type = 'text';
      iconElement.src = '../../../assets/images/svg-icons/passwordshow.svg';
    } else {
      passwordElement.type = 'password';
      iconElement.src = '../../../assets/images/svg-icons/eye-hide-show.svg';
    }
  }
}
