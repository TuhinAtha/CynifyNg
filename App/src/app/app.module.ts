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



@NgModule({
  declarations: [
    AppComponent,
    CynScreenDetailComponent,
    CynPanelComponent,
    DashboardComponent,
    LoginComponent
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
