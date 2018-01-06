import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientDashboardComponent} from './patient-dashboard/patient-dashboard.component';
import {BillingDashboardComponent} from './billing-dashboard/billing-dashboard.component';
import {PatientDetailsComponent} from './patient-details/patient-details.component';
import {AddPatientComponent} from './add-patient/add-patient.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CallbackComponent} from './callback/callback.component';
import {AppointmentDashboardComponent} from './appointments/appointment-dashboard/appointment-dashboard.component';
import {SettingsDashboardComponent} from './settings/settings-dashboard/settings-dashboard.component';
import {UserSettingsComponent} from './settings/user-settings/user-settings.component';
import {CalendarSettingsComponent} from './settings/calendar-settings/calendar-settings.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {path: 'patients', component: PatientDashboardComponent},
  {path: 'patients/add-patient', component: AddPatientComponent},
  {path: 'patients/:patientId/details', component: PatientDetailsComponent},
  {path: 'billing', component: BillingDashboardComponent},
  {path: 'appointments', component: AppointmentDashboardComponent},
  {
    path: 'settings', component: SettingsDashboardComponent, children: [
      {path: '', redirectTo: 'calendar-settings', pathMatch: 'full'},
      {path: 'user-settings', component: UserSettingsComponent},
      {path: 'calendar-settings', component: CalendarSettingsComponent}
    ]
  },
  {path: 'callback', component: CallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
