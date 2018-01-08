import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {InlineSVGModule} from 'ng-inline-svg';
import {AuthModule, OidcSecurityService, OpenIDImplicitFlowConfiguration} from 'angular-auth-oidc-client';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {CallbackComponent} from './callback/callback.component';
import {PatientDashboardComponent} from './patient-dashboard/patient-dashboard.component';
import {BillingDashboardComponent} from './billing-dashboard/billing-dashboard.component';
import {PatientDetailsComponent} from './patient-details/patient-details.component';
import {AddPatientComponent} from './add-patient/add-patient.component';
import {PageHeaderComponent} from './page-header/page-header.component';
import {LoaderComponent} from './loader/loader.component';
import {APP_CONFIG, AppConfig} from './app.config';
import {PatientService} from './services/patient.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {PatientBannerComponent} from './patient-banner/patient-banner.component';
import {PatientIdentityComponent} from './patient-details/patient-identity/patient-identity.component';
import {PatientContactComponent} from './patient-details/patient-contact/patient-contact.component';
import {InboxComponent} from './dashboard/inbox/inbox.component';
import {AgendaComponent} from './dashboard/agenda/agenda.component';
import {AppointmentDashboardComponent} from './appointments/appointment-dashboard/appointment-dashboard.component';
import {SettingsDashboardComponent} from './settings/settings-dashboard/settings-dashboard.component';
import {CalendarSettingsComponent} from './settings/calendar-settings/calendar-settings.component';
import {CalendarSettingsService} from './services/calendar-settings.service';
import {SlotComponent} from './appointments/slot/slot.component';
import {AppointmentDetailComponent} from './appointments/appointment-detail/appointment-detail.component';
import {PatientAllergyComponent} from './patient-details/patient-allergy/patient-allergy.component';
import {AdverseReactionAgentService} from './services/adverse-reaction-agent.service';
import {UserSettingsComponent} from './settings/user-settings/user-settings.component';
import {UserService} from './services/user.service';
import { UserListItemComponent } from './settings/user-list-item/user-list-item.component';
import { PortalInviteComponent } from './patient-portal/portal-invite/portal-invite.component';
import { ProblemListComponent } from './patient-details/problem-list/problem-list.component';

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
    DashboardComponent,
    PatientBannerComponent,
    PatientIdentityComponent,
    PatientContactComponent,
    InboxComponent,
    AgendaComponent,
    AppointmentDashboardComponent,
    SettingsDashboardComponent,
    CalendarSettingsComponent,
    SlotComponent,
    AppointmentDetailComponent,
    PatientAllergyComponent,
    UserSettingsComponent,
    UserListItemComponent,
    PortalInviteComponent,
    ProblemListComponent
  ],
  entryComponents: [AppointmentDetailComponent, PortalInviteComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    InlineSVGModule,
    AuthModule.forRoot()
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
    PatientService,
    OidcSecurityService,
    CalendarSettingsService,
    AdverseReactionAgentService,
    UserService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public oidcSecurityService: OidcSecurityService) {
    const openIdImplicitFlowConfiguration = new OpenIDImplicitFlowConfiguration();
    openIdImplicitFlowConfiguration.stsServer = 'http://localhost:5002';
    openIdImplicitFlowConfiguration.redirect_url = 'http://localhost:5000';
    openIdImplicitFlowConfiguration.client_id = 'dermal-spa';
    openIdImplicitFlowConfiguration.response_type = 'id_token token';
    openIdImplicitFlowConfiguration.scope = 'dermal-api openid profile';
    openIdImplicitFlowConfiguration.post_logout_redirect_uri = 'http://localhost:5000/unauthorized';
    openIdImplicitFlowConfiguration.start_checksession = false;
    openIdImplicitFlowConfiguration.silent_renew = true;
    openIdImplicitFlowConfiguration.startup_route = '/home';
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
