import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { compareValidator } from './compareValidator';
import { PasswordValidator } from './patternValidate';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent {
  warningIcon = faTriangleExclamation;
  signupform = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, PasswordValidator.validate]),
    confirmPassword: new FormControl('', [Validators.required, compareValidator('password')])
  })
  submitted = false;
  isUserAlreadyRegistered = false;
  @ViewChild('alert')
  alert!: NgbAlert;

  constructor(private authService: UserService, private router: Router) { }

  signupUser(): void {
    this.submitted = true;
    this.signupform.markAllAsTouched();
    if (this.signupform.invalid) {
      return;
    }

    const firstName = this.signupform.value.firstName ?? '';
    const lastName = this.signupform.value.lastName ?? '';
    const userEmail = this.signupform.value.userEmail ?? '';
    const password = this.signupform.value.password ?? '';

    this.authService.signup(firstName, lastName, userEmail, password).subscribe({
      next: _response => {
        // this.router.navigate(['/login']);
      },
      error: error => {
        // Handle signup error
        console.error('Signup error:', error);
        // Display an error message to the user or perform any other error handling
      }
    });
  }
  get controlls() {
    return ([this.signupform.get('firstName'),
    this.signupform.get('lastName'),
    this.signupform.get('userEmail'),
    this.signupform.get('password'),
    this.signupform.get('confirmPassword')
    ])
  }
}
