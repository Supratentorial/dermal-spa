import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-history',
  templateUrl: './social-history.component.html',
  styleUrls: ['../patient-detail-shell/patient-detail-shell.component.scss']
})
export class SocialHistoryComponent implements OnInit {

  socialHistoryEditing = false;

  constructor() { }

  ngOnInit() {
  }

}
