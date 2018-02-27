import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../services/patient.service';
import {ActivatedRoute} from '@angular/router';
import {Patient} from '../../../models/patient';
import {PatientManagerService} from '../../../services/patient-manager.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-detail-shell.component.html',
  styleUrls: ['./patient-detail-shell.component.scss']
})
export class PatientDetailShellComponent implements OnInit {

  pageTitle = '';
  private routeSub: any;
  patientId: number;
  patient: Patient;

  constructor(private patientService: PatientService, private route: ActivatedRoute,
              public patientManagerService: PatientManagerService) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.patientId = +params['patientId'];
      this.patientService.getPatientById(this.patientId).subscribe((patient) => {
        this.patient = <Patient>patient;
        this.patientManagerService.addPatientToOpenList(this.patient);
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
