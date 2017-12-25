import {Injectable} from '@angular/core';
import {AppointmentSlot} from '../models/appointment-slot';
import * as moment from 'moment';
import {Moment} from 'moment';

@Injectable()
export class CalendarSettingsService {

  calendarSlotDuration = 15;

  getClinicStartTime(date: Date): Moment {
    const startTime = moment(date);
    startTime.startOf('day');
    startTime.hours(8);
    return startTime;
  }

  getClinicEndTime(date: Date): Moment {
    const endTime = moment(date);
    endTime.startOf('day');
    endTime.hours(17);
    return endTime;
  }

  getTotalSlots(date: Date): number {
    const clinicStartTime = this.getClinicStartTime(date);
    const clinicEndTime = this.getClinicEndTime(date);
    const totalHours = clinicEndTime.diff(clinicStartTime, 'hours');
    return (totalHours * 60) / this.calendarSlotDuration;
  }

  constructor() {
  }

  getAppointmentSlots(date: Date): AppointmentSlot[] {
    const appointmentSlots: AppointmentSlot[] = [];
    let x = 0;
    while (x < this.getTotalSlots(date)) {
      x++;
      const slot = new AppointmentSlot();
      slot.startTime = this.getClinicStartTime(date).minutes(x * this.calendarSlotDuration);
      console.log(slot.startTime.toLocaleString());
      appointmentSlots.push(slot);
    }
    return appointmentSlots;
  }

}
