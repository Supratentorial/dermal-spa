import {Injectable} from '@angular/core';
import {Patient} from '../models/patient';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PatientManagerService {

  openPatients: Patient[] = [];
  openPatientsEvent: Subject<Patient[]> = new Subject<Patient[]>();
  currentPatient: Patient;
  currentPatientEvent: Subject<Patient> = new Subject<Patient>();

  constructor() {

  }

  addPatientToOpenList(patient: Patient) {
    console.log(patient);
    if (this.isPatientOpen(patient.id)) {
      return;
    }
    this.openPatients.push(patient);
    this.openPatientsEvent.next(this.openPatients);
  }

  isPatientOpen(patientId: number): boolean {
    for (let i = 0; i < this.openPatients.length; i++) {
      if (patientId === this.openPatients[i].id) {
        return true;
      }
    }
    return false;
  }

  removePatientFromOpenList(patientId: number): void {
    for (let i; i < this.openPatients; i++) {
      if (patientId === this.openPatients[i].id) {
        const index = this.openPatients.indexOf(this.openPatients[i]);
        this.openPatients.splice(index, 1);
      }
    }
  }

  setCurrentPatient(patientId: number): void {
    if (patientId) {
      for (let i = 0; i < this.openPatients.length; i++) {
        if (patientId === this.openPatients[i].id) {
          this.currentPatient = this.openPatients[i];
          this.currentPatientEvent.next(this.currentPatient);
        }
      }
    }
  }

}
