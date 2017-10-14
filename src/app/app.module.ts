import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './shared/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {InlineSVGModule} from 'ng-inline-svg';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { BillingDashboardComponent } from './billing-dashboard/billing-dashboard.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LoaderComponent } from './loader/loader.component';
import {APP_CONFIG, AppConfig} from './app.config';
import {PatientService} from './patient.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    PatientDashboardComponent,
    BillingDashboardComponent,
    PatientDetailsComponent,
    AddPatientComponent,
    PageHeaderComponent,
    LoaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    InlineSVGModule
  ],
  providers: [AuthService, {provide: APP_CONFIG, useValue: AppConfig}, PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
