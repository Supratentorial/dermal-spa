import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Patient} from '../../patient';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-patient-contact',
  templateUrl: './patient-contact.component.html',
  styleUrls: ['../patient-details.component.scss']
})
export class PatientContactComponent implements OnInit {

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

  editContactInfo() {
    this.contactEditing = true;
    if (this.patient.mobilePhone) {
      this.mobileString = this.patient.mobilePhone.value;
    }
    if (this.patient.email) {
      this.emailString = this.patient.email.value;
    }
  }

  saveContactInfo(contactForm: NgForm) {
    console.log(contactForm.value);
    this.contactEditing = false;
    if (this.patient.mobilePhone == null && this.mobileString) {
      this.patient.mobilePhone = {
        id: 0,
        value: this.mobileString,
        system: 'phone',
        use: 'mobile',
        rank: 0
      };
    }
    if (this.patient.email == null && this.emailString) {
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
