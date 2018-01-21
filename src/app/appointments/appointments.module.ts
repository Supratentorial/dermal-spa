import {CommonModule} from '@angular/common';
import {AppointmentDashboardComponent} from './appointment-dashboard/appointment-dashboard.component';
import {SlotComponent} from './slot/slot.component';
import {AppointmentDetailComponent} from './appointment-detail/appointment-detail.component';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AppointmentsRoutingModule} from './appointments-routing.module';

@NgModule({
  imports: [CommonModule, AppointmentsRoutingModule, SharedModule],
  exports: [],
  declarations: [
    AppointmentDetailComponent,
    SlotComponent,
    AppointmentDashboardComponent,
  ],
  providers: [],
})
export class AppointmentsModule {
}
