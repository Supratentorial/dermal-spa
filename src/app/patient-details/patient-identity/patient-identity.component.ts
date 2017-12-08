import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Patient} from '../../patient';
import * as moment from 'moment';

@Component({
  selector: 'app-patient-identity',
  templateUrl: './patient-identity.component.html',
  styleUrls: ['../patient-details.component.scss']
})
export class PatientIdentityComponent implements OnInit, OnChanges {

  @Input()
  patient: Patient;

  @Output()
  saveIdentityInfoEvent = new EventEmitter();

  title: string;
  givenNames: string;
  familyName: string;
  birthday: string;
  gender: string;

  identityEditing: boolean;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['patient']) {
      this.title = this.patient.title;
      this.givenNames = this.patient.givenNames;
      this.familyName = this.patient.familyName;
      this.birthday = moment(this.patient.birthday).format('DD/MM/YYYY');
      this.gender = this.patient.gender;
    }
  }

  ngOnInit() {
  }

  saveIdentityInfo() {
    this.patient.title = this.title;
    this.patient.givenNames = this.givenNames;
    this.patient.familyName = this.familyName;
    this.patient.birthday = moment(this.birthday, 'DD-MM-YYYY').toDate();
    this.patient.gender = this.gender;
    this.identityEditing = false;
    this.saveIdentityInfoEvent.next();
  }

}
