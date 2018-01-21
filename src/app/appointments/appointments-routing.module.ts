import { RouterModule } from '@angular/router';
import { AppointmentDashboardComponent } from './appointment-dashboard/appointment-dashboard.component';
import { NgModule } from '@angular/core';

const appointmentsRoutes = [
    { path: 'appointments', component: AppointmentDashboardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(appointmentsRoutes)],
    exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
