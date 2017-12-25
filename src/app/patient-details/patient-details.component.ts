import {Component, OnInit} from '@angular/core';
import {PatientService} from '../services/patient.service';
import {ActivatedRoute} from '@angular/router';
import {Patient} from '../models/patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  pageTitle = '';
  private routeSub: any;
  patientId: number;
  patient: Patient;


  constructor(private patientService: PatientService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.patientId = +params['patientId'];
      this.patientService.getPatientById(this.patientId).subscribe((patient) => {
        this.patient = <Patient>patient;
        console.log(this.patient);
      });
    });
  }

  savePatient() {
    this.patientService.savePatient(this.patient).subscribe((patient: Patient) => {
      this.patient = patient;
    });
  }

}
