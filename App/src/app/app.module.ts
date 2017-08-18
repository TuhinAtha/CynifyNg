import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './core/app.routes';

import { CynScreenDetailComponent } from './elements/screen/detail/cyn-screen-detail.component';
import { CynPanelComponent } from './elements/panel/cyn-panel.component';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { CynFormComponent } from './elements/group/cyn-form/cyn-form.component';
import { CynInputComponent } from './elements/field/cyn-input/cyn-input.component';


@NgModule({
  declarations: [
    AppComponent,
    CynScreenDetailComponent,
    CynPanelComponent,
    DashboardComponent,
    LoginComponent,
    CynFormComponent,
    CynInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
