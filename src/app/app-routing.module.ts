
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientDashboardComponent} from './patient-dashboard/patient-dashboard.component';
import {BillingDashboardComponent} from './billing-dashboard/billing-dashboard.component';
import {PatientDetailsComponent} from './patient-details/patient-details.component';
import {AddPatientComponent} from './add-patient/add-patient.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {path: 'patients', component: PatientDashboardComponent},
  {path: 'patients/add-patient', component: AddPatientComponent},
  {path: 'patients/{patientId}/details', component: PatientDetailsComponent},
  {path: 'billing', component: BillingDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
