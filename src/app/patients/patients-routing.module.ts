import {PatientAddComponent} from './patient-add/patient-add.component';

import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PatientDashboardComponent} from './patient-home/patient-home.component';
import {PatientDetailShellComponent} from './patient-detail/patient-detail-shell/patient-detail-shell.component';

const patientRoutes: Routes = [
  {
    path: 'patients', component: PatientDashboardComponent, children: [
      {path: 'add-patient', component: PatientAddComponent},
    ]
  },
  // Todo: change to children
  {
    path: 'patients/:patientId/details', component: PatientDetailShellComponent, children: [
      // {path: 'condition/:conditionId', component: Problem}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(patientRoutes)],
  exports: [RouterModule]
})

export class PatientsRoutingModule {
}
