import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  addUserEditing = false;
  users: User[];
  isAuthorizedSubscription: Subscription;
  isAuthorized: boolean;

  constructor(private userService: UserService, public oidcSecurityService: OidcSecurityService) {
  }

  ngOnInit() {
    this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe(
      (isAuthorized: boolean) => {
        this.isAuthorized = isAuthorized;
        console.log('isAuthorized', isAuthorized);
        this.getUsers();
      }
    );
  }

  private getUsers() {
    this.userService.getUsers().subscribe(
      users => this.users = users,
      error => {
        this.oidcSecurityService.handleError(error);
        console.log(error.message);
      },
      () => console.log('Got all users'));
  }

}
