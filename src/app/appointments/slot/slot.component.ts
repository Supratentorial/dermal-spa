import {Component, OnInit} from '@angular/core';
import {AppointmentDetailComponent} from '../appointment-detail/appointment-detail.component';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  appointmentModal() {
    const modalRef = this.modalService.open(AppointmentDetailComponent);
  }

}
