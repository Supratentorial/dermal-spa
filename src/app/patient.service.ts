import {Inject, Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Patient} from './patient';
import {APP_CONFIG} from './app.config';
import {IAppConfig} from './iapp.config';

@Injectable()
export class PatientService {

  constructor(private http: Http, @Inject(APP_CONFIG) private config: IAppConfig) {

  }

  getPatients(searchTerm: string) {
    return this.http.get(this.config.patientsEndPoint).map((res: Response) => res.json());
  }

  savePatient(patient: Patient) {
    console.log(patient);
    return this.http.post(this.config.patientsEndPoint, patient).map((res: Response) => res.json());
  }
}
