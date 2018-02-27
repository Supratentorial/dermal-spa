import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Patient} from '../../models/patient';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {PatientService} from '../../services/patient.service';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {PatientManagerService} from '../../services/patient-manager.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit, OnDestroy {

  selectedPatient: any;
  searching = false;
  @Input()
  pageTitle: string;
  isAuthorizedSubscription: Subscription;
  isAuthorized: boolean;

  constructor(private patientService: PatientService, public oidcSecurityService: OidcSecurityService, private router: Router) {
    if (this.oidcSecurityService.moduleSetup) {
      this.callBackLogic();
    } else {
      this.oidcSecurityService.onModuleSetup.subscribe(() => {
        this.callBackLogic();
      });
    }
  }

  ngOnInit() {
    this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe((isAuthorized: boolean) => {
      this.isAuthorized = isAuthorized;
    });
  }

  ngOnDestroy() {
    this.isAuthorizedSubscription.unsubscribe();
    this.oidcSecurityService.onModuleSetup.unsubscribe();
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  private callBackLogic() {
    if (window.location.hash) {
      this.oidcSecurityService.authorizedCallback();
    }
  }

  logout() {
    this.oidcSecurityService.logoff();
  }

  onSelect($event, input) {
    $event.preventDefault();
    this.router.navigate(['/patients/', $event.item.id, 'details']);
  }

  searchPatients = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(searchTerm =>
        this.patientService.getPatients(searchTerm)
          .catch(() => {
            return Observable.of([]);
          }))
      .do(() => this.searching = false)
}
