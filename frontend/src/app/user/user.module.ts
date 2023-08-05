import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { UserRoutingModule } from './user-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-up/sign-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'; // Import NgbAlertModule




@NgModule({
  declarations: [
    LogInComponent,
    SignInComponent,
    ForgetPasswordComponent,
    // MatFormFieldModule
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbAlertModule // Add NgbAlertModule to imports
  ],
  exports: [LogInComponent,SignInComponent,ForgetPasswordComponent]
})
export class UserModule { }
