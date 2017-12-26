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

  pageTitle = 'Add Patient';
  mobilePhone: ContactPoint = {
    id: 0,
    rank: 1,
    use: 'mobile',
    system: 'phone',
    value: ''
  };

  emailAddress: ContactPoint = {
    id: 0,
    rank: 2,
    use: 'home',
    system: 'emailString',
    value: ''
  };

  newPatient: Patient = {
    id: 0,
    active: true,
    title: '',
    familyName: '',
    givenNames: '',
    gender: '',
    birthDate: moment().toDate(),
    age: '',
    mobilePhone: this.mobilePhone,
    email: this.emailAddress,
    residentialAddress: null,
    postalAddress: null
  };

  titles: string[] = [
    'Mr',
    'Mrs'
  ];

  constructor(private patientService: PatientService, private location: Location) {
  }

  ngOnInit() {
  }

  savePatient() {
    console.log(this.newPatient);
    this.patientService.savePatient(this.newPatient).subscribe(data => {
      console.log(data);
    });
  }

  navigateBack() {
    this.location.back();
  }
}
