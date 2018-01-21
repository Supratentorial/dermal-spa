import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Patient} from '../../../models/patient';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-patient-contact',
  templateUrl: './patient-contact.component.html',
  styleUrls: ['../patient-detail-shell/patient-detail-shell.component.scss']
})
export class PatientContactComponent implements OnInit {

  @Input()
  patient: Patient;

  mobileString: string;
  emailString: string;
  residentialUnit: string;
  residentialStreetName: string;
  residentialCity: string;
  residentialState: string;
  residentialPostalCode: string;

  @Output()
  saveContactInfoEvent = new EventEmitter();

  contactEditing: boolean;

  constructor() {
  }

  ngOnInit() {

  }

  editContactInfo() {
    this.contactEditing = true;
    if (this.patient.mobilePhone) {
      this.mobileString = this.patient.mobilePhone.value;
    }
    if (this.patient.email) {
      this.emailString = this.patient.email.value;
    }
    if (this.patient.residentialAddress) {
      this.residentialUnit = this.patient.residentialAddress.unit;
      this.residentialStreetName = this.patient.residentialAddress.streetName;
      this.residentialCity = this.patient.residentialAddress.city;
      this.residentialState = this.patient.residentialAddress.state;
      this.residentialPostalCode = this.patient.residentialAddress.postalcode;
    }
  }

  saveContactInfo(contactForm: NgForm) {
    console.log(contactForm.value);
    this.contactEditing = false;
    if (this.patient.mobilePhone === null && this.mobileString) {
      this.patient.mobilePhone = {
        id: 0,
        value: this.mobileString,
        system: 'phone',
        use: 'mobile',
        rank: 0
      };
    }
    if (this.patient.email === null && this.emailString) {
      this.patient.email = {
        id: 0,
        value: this.emailString,
        system: 'email',
        use: 'home',
        rank: 0
      };
    }
    if (this.patient.residentialAddress === null) {

    }
    this.patient.mobilePhone.value = this.mobileString;
    this.patient.email.value = this.emailString;
    this.patient.residentialAddress.unit = this.residentialUnit;
    this.patient.residentialAddress.streetName = this.residentialStreetName;
    this.patient.residentialAddress.city = this.residentialCity;
    this.patient.residentialAddress.state = this.residentialState;
    this.patient.residentialAddress.postalcode = this.residentialPostalCode;
    this.saveContactInfoEvent.next();
  }
}
