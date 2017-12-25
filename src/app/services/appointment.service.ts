import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Appointment} from '../models/appointment';
import {IAppConfig} from 'app/iapp.config';
import {APP_CONFIG} from '../app.config';

@Injectable()
export class AppointmentService {

  constructor(private httpClient: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  getAppointmentsByDate(): any {
    return this.httpClient.get(this.config.appointmentsEndPoint).subscribe();
  }
}
