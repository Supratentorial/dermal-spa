import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-engagement-view',
  templateUrl: './engagement-view.component.html',
  styleUrls: ['./engagement-view.component.scss']
})
export class EngagementViewComponent implements OnInit {

  isUserEnrolled = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getIsUserEnrolled();
  }

  getIsUserEnrolled() {
    this.userService.getUserById().subscribe(
      (user) => {
        if (user !== null) {
          this.isUserEnrolled = true;
        }
      }
    );

  }

}
