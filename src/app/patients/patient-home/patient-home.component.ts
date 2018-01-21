import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/patient';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.scss']
})
export class PatientDashboardComponent implements OnInit {

  pageTitle = 'Patients';

  patients: Patient[] = [];

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    // this.patientService.getPatients().subscribe((res) => {this.patients.push(res); });
  }

}
