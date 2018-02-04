import {AppRoutingModule} from './app-routing.module';
import {SettingsModule} from './settings/settings.module';
import {SharedModule} from './shared/shared.module';
import {PatientsModule} from './patients/patients.module';
import {InlineSVGModule} from 'ng-inline-svg';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {AdverseReactionAgentService} from './services/adverse-reaction-agent.service';
import {CalendarSettingsService} from './services/calendar-settings.service';
import {OidcSecurityService, OpenIDImplicitFlowConfiguration, AuthModule} from 'angular-auth-oidc-client';
import {PatientService} from './services/patient.service';
import {APP_CONFIG, AppConfig} from './app.config';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppointmentsModule} from './appointments/appointments.module';
import {BillingModule} from './billing/billing.module';
import {DashobardModule} from './dashboard/dashboard.module';
import {BrowserModule} from '@angular/platform-browser';
import {ProblemDiagnosisService} from './services/problem-diagnosis.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    InlineSVGModule,
    AuthModule.forRoot(),
    HttpClientModule,
    PatientsModule,
    BillingModule,
    SharedModule,
    AppointmentsModule,
    SettingsModule,
    DashobardModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
    HttpClientModule,
    PatientService,
    OidcSecurityService,
    CalendarSettingsService,
    AdverseReactionAgentService,
    ProblemDiagnosisService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public oidcSecurityService: OidcSecurityService) {
    const openIdImplicitFlowConfiguration = new OpenIDImplicitFlowConfiguration();
    openIdImplicitFlowConfiguration.stsServer = 'http://localhost:5002';
    openIdImplicitFlowConfiguration.redirect_url = 'http://localhost';
    openIdImplicitFlowConfiguration.client_id = 'dermal-spa';
    openIdImplicitFlowConfiguration.response_type = 'id_token token';
    openIdImplicitFlowConfiguration.scope = 'dermal-api openid profile';
    openIdImplicitFlowConfiguration.post_logout_redirect_uri = 'http://localhost/unauthorized';
    openIdImplicitFlowConfiguration.start_checksession = false;
    openIdImplicitFlowConfiguration.silent_renew = true;
    // openIdImplicitFlowConfiguration.startup_route = '/home';
    openIdImplicitFlowConfiguration.forbidden_route = '/forbidden';
    openIdImplicitFlowConfiguration.unauthorized_route = '/unauthorized';
    openIdImplicitFlowConfiguration.auto_userinfo = true;
    openIdImplicitFlowConfiguration.log_console_warning_active = true;
    openIdImplicitFlowConfiguration.log_console_debug_active = true;
    openIdImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds = 10;
    openIdImplicitFlowConfiguration.override_well_known_configuration = false;
    // openIdImplicitFlowConfiguration.storage = localStorage;
    this.oidcSecurityService.setupModule(openIdImplicitFlowConfiguration);
  }
}
