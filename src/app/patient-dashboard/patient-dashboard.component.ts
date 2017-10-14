import {Component, OnInit} from '@angular/core';
import {Patient} from '../patient';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss']
})
export class PatientDashboardComponent implements OnInit {

  pageTitle = 'Patients';

  patients: Patient[] = [];

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.getPatients().subscribe((res) => {this.patients.push(res); });
  }

}
