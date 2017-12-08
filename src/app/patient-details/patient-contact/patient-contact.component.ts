import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Patient} from '../../patient';

@Component({
  selector: 'app-patient-contact',
  templateUrl: './patient-contact.component.html',
  styleUrls: ['../patient-details.component.scss']
})
export class PatientContactComponent implements OnInit {

  @Input()
  patient: Patient;

  @Output()
  saveContactInfoEvent = new EventEmitter();

  contactEditing: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  saveContactInfo() {
    this.saveContactInfoEvent.next();
  }
}
