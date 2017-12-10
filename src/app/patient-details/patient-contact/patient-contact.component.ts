import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Patient} from '../../patient';
import {ContactPoint} from '../../contact-point';

@Component({
  selector: 'app-patient-contact',
  templateUrl: './patient-contact.component.html',
  styleUrls: ['../patient-details.component.scss']
})
export class PatientContactComponent implements OnInit, OnChanges {

  @Input()
  patient: Patient;

  mobileString: string;
  emailString: string;

  @Output()
  saveContactInfoEvent = new EventEmitter();

  contactEditing: boolean;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['patient']) {
    }
  }

  editContactInfo() {
    this.contactEditing = true;
    this.resetForm();
  }

  resetForm() {
    this.emailString = '';
    this.mobileString = '';
    if (this.patient.mobilePhone) {
      this.mobileString = this.patient.mobilePhone.value;
    }
    if (this.patient.email) {
      this.emailString = this.patient.email.value;
    }
  }

  cancelEditing() {
    this.contactEditing = false;
    this.resetForm();
  }

  saveContactInfo() {
    this.contactEditing = false;
    if (this.patient.mobilePhone == null) {
      this.patient.mobilePhone = {
        id: 0,
        value: this.mobileString,
        system: 'mobile',
        use: 'home',
        rank: 0
      };
    }
    if (this.patient.email == null) {
      this.patient.email = {
        id: 0,
        value: this.emailString,
        system: 'email',
        use: 'home',
        rank: 0
      };
    }
    this.patient.mobilePhone.value = this.mobileString;
    this.patient.email.value = this.emailString;
    this.saveContactInfoEvent.next();
  }
}
