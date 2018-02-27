import {PatientAddComponent} from './patient-add/patient-add.component';

import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PatientDashboardComponent} from './patient-home/patient-home.component';
import {PatientDetailShellComponent} from './patient-detail/patient-detail-shell/patient-detail-shell.component';
import {PortalInviteComponent} from './portal-invite/portal-invite.component';
import {EngagementViewComponent} from './patient-detail/engagement-view/engagement-view.component';

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
      {path: '', component: EngagementViewComponent, outlet: 'engagement'},
      {path: 'engagement', component: PortalInviteComponent, outlet: 'engagement'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(patientRoutes)],
  exports: [RouterModule]
})

export class PatientsRoutingModule {
}
