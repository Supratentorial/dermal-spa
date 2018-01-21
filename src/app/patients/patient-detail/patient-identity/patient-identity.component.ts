import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Patient} from '../../../models/patient';
import * as moment from 'moment';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-patient-identity',
  templateUrl: './patient-identity.component.html',
  styleUrls: ['../patient-detail-shell/patient-detail-shell.component.scss']
})
export class PatientIdentityComponent implements OnInit {

  @Input()
  patient: Patient;

  @Output()
  saveIdentityInfoEvent = new EventEmitter();

  titleString: string;
  givenNamesString: string;
  familyNameString: string;
  birthDateString: string;
  genderString: string;
  genderOptions: string[] = ['Male', 'Female', 'Other'];

  identityEditing: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  editIdentityInfo() {
    this.identityEditing = true;
    this.titleString = this.patient.title;
    this.familyNameString = this.patient.familyName;
    this.givenNamesString = this.patient.givenNames;
    console.log(this.patient.birthDate);
    this.birthDateString = moment(this.patient.birthDate).format('DD/MM/YYYY');
    this.genderString = this.patient.gender;
  }

  saveIdentityInfo(identityForm: NgForm) {
    this.patient.title = this.titleString;
    this.patient.givenNames = this.givenNamesString;
    this.patient.familyName = this.familyNameString;
    this.patient.birthDate = moment.utc(this.birthDateString, 'DD-MM-YYYY').toDate();
    this.patient.gender = this.genderString;
    this.identityEditing = false;
    this.saveIdentityInfoEvent.next();
  }

}
