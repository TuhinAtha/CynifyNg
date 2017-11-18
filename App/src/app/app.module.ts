import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './core/app.routes';

//Pipes
import { CDatePipe } from './pipes/cdate.pipe';

//Elements
import { CynScreenDetailComponent } from './elements/screen/detail/cyn-screen-detail.component';
import { CynPanelComponent } from './elements/panel/cyn-panel.component';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { CynFormComponent } from './elements/group/cyn-form/cyn-form.component';
import { CynInputComponent } from './elements/field/cyn-input/cyn-input.component';
import { CynHeaderComponent } from './elements/header/cyn-header/cyn-header.component';
import { CynTableComponent } from './elements/group/cyn-table/cyn-table.component';
import { CynAdvSearchComponent } from './elements/search/cyn-adv-search/cyn-adv-search.component';


@NgModule({
  declarations: [
    AppComponent,

    CDatePipe,

    CynScreenDetailComponent,
    CynPanelComponent,
    DashboardComponent,
    LoginComponent,
    CynFormComponent,
    CynInputComponent,
    CynHeaderComponent,
    CynTableComponent,
    CynAdvSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
