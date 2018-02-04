import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['../patient-detail-shell/patient-detail-shell.component.scss']
})
export class MedicationListComponent implements OnInit {

  addingMedication;

  constructor() { }

  ngOnInit() {
  }

}
