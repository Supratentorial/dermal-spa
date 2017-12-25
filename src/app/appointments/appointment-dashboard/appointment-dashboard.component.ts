import {Component, OnInit} from '@angular/core';
import {CalendarSettingsService} from '../../services/calendar-settings.service';
import {AppointmentSlot} from '../../models/appointment-slot';

@Component({
  selector: 'app-appointment-dashboard',
  templateUrl: './appointment-dashboard.component.html',
  styleUrls: ['./appointment-dashboard.component.scss']
})
export class AppointmentDashboardComponent implements OnInit {

  appointmentSlots: AppointmentSlot[];

  constructor(private calendarSettings: CalendarSettingsService) {
  }

  ngOnInit() {
    this.appointmentSlots = this.calendarSettings.getAppointmentSlots(new Date());
  }

}
