import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-up/sign-in.component'
import { ForgetPasswordComponent } from './forget-password/forget-password.component'
import { LogInComponent } from './log-in/log-in.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo : 'login', pathMatch: 'full'},
  {path: 'login', component: LogInComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'forgetpassword', component: ForgetPasswordComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
