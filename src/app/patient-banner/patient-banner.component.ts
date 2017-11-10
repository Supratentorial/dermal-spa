import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../patient';

@Component({
  selector: 'app-patient-banner',
  templateUrl: './patient-banner.component.html',
  styleUrls: ['./patient-banner.component.scss']
})
export class PatientBannerComponent implements OnInit {

  @Input()
  patient: Patient;

  constructor() {
  }

  ngOnInit() {
  }

}
