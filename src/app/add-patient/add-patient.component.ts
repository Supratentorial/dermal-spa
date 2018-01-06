import {Component, OnInit} from '@angular/core';
import {Patient} from '../models/patient';
import {PatientService} from '../services/patient.service';
import {ContactPoint} from '../models/contact-point';
import {Location} from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  birthDateString = '';
  givenNamesString = '';
  familyNamesString = '';
  mobileString = '';
  emailString = '';


  pageTitle = 'Add Patient';

  titles: string[] = [
    'Mr',
    'Mrs'
  ];

  constructor(private patientService: PatientService, private location: Location) {
  }

  ngOnInit() {
  }

  savePatient() {
    const newPatient: Patient = {
      id: 0,
      active: true,
      title: '',
      familyName: '',
      givenNames: '',
      gender: '',
      birthDate: moment().toDate(),
      age: '',
      residentialAddress: null,
      postalAddress: null
    };

    if (this.mobileString) {
      newPatient.mobilePhone = {
        id: 0,
        rank: 0,
        use: 'mobile',
        system: 'phone',
        value: this.mobileString
      };
    }
    if (this.emailString) {
      newPatient.email = {
        id: 0,
        rank: 0,
        use: 'home',
        system: 'emailString',
        value: this.emailString
      };
    }

    this.patientService.savePatient(newPatient).subscribe(data => {
      console.log(data);
    });
  }

  cancel() {
    this.location.back();
  }
}



