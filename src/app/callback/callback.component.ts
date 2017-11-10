import {Component, OnInit} from '@angular/core';
import {OidcSecurityService} from 'angular-auth-oidc-client';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private oidcSecurityService: OidcSecurityService) {
  }

  ngOnInit() {

      console.log(this.oidcSecurityService.getIdToken());

  }

}
