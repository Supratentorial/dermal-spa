import {Component, Input, OnInit} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Patient} from '../../models/patient';
import {PortalInviteComponent} from '../portal-invite/portal-invite.component';

@Component({
  selector: 'app-patient-banner',
  templateUrl: './patient-banner.component.html',
  styleUrls: ['./patient-banner.component.scss']
})
export class PatientBannerComponent implements OnInit {

  @Input()
  patient: Patient;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    console.log(this.patient);
  }

  inviteToPortal() {
    const modalRef = this.modalService.open(PortalInviteComponent);
    modalRef.componentInstance.patient = this.patient;
  }

}
