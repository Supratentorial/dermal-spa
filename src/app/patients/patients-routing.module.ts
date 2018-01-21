import {PatientAddComponent} from './patient-add/patient-add.component';

import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PatientDashboardComponent} from './patient-home/patient-home.component';
import {PatientDetailShellComponent} from './patient-detail/patient-detail-shell/patient-detail-shell.component';

const patientRoutes: Routes = [
  {path: 'patients', component: PatientDashboardComponent},
  // Todo: change to children
  {path: 'patients/add-patient', component: PatientAddComponent},
  {path: 'patients/:patientId/details', component: PatientDetailShellComponent},
];

@NgModule({
  imports: [RouterModule.forChild(patientRoutes)],
  exports: [RouterModule]
})

export class PatientsRoutingModule {
}
