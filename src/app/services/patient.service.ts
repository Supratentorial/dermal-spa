import {Inject, Injectable} from '@angular/core';
import {Patient} from '../models/patient';
import {APP_CONFIG} from '../app.config';
import {IAppConfig} from '../iapp.config';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class PatientService {

  constructor(private httpClient: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) {

  }

  getPatients(searchTerm: string) {
    let httpParams: HttpParams = new HttpParams();
    httpParams = httpParams.append('searchTerm', searchTerm);
    if (searchTerm === '') {
      return Observable.of([]);
    }
    return this.httpClient.get(this.config.patientsEndPoint, {params: httpParams});
  }

  savePatient(patient: Patient) {
    console.log(patient);
    if (patient.id === 0) {
      return this.httpClient.post(this.config.patientsEndPoint, patient);
    }
    return this.httpClient.put(this.config.patientsEndPoint, patient);
  }

  getPatientById(patientId: number) {
    return this.httpClient.get(this.config.patientsEndPoint + '/' + patientId);
  }
}
