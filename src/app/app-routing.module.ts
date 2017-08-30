import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientDashboardComponent} from './patient-dashboard/patient-dashboard.component';
import {BillingDashboardComponent} from './billing-dashboard/billing-dashboard.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'patients', component: PatientDashboardComponent},
  {path: 'billing', component: BillingDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
