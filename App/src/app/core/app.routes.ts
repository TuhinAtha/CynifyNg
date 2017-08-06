import { Routes } from '@angular/router';

import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { LoginComponent } from '../modules/login/login.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },

];