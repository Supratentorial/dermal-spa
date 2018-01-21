import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Patient} from '../../models/patient';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-portal-invite',
  templateUrl: './portal-invite.component.html',
  styleUrls: ['./portal-invite.component.scss']
})
export class PortalInviteComponent implements OnInit {

  @Input()
  patient: Patient;

  user: User;

  constructor(public activeModal: NgbActiveModal, private userService: UserService) {
  }

  ngOnInit() {
  }

  registerPatient() {
    this.user = {
      id: '',
      givenName: this.patient.givenNames,
      familyName: this.patient.familyName,
      email: this.patient.email.value
    };
    this.userService.registerUser(this.user).subscribe(() => console.log('User registered.'));
  }

}
