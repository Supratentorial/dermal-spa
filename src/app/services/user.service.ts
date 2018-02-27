import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {IAppConfig} from '../iapp.config';
import {APP_CONFIG} from '../app.config';
import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';
import {OidcSecurityService} from 'angular-auth-oidc-client';

@Injectable()
export class UserService {

  private headers: HttpHeaders;

  constructor(private httpClient: HttpClient,
              @Inject(APP_CONFIG) private config: IAppConfig,
              private securityService: OidcSecurityService) {
  }

  getUsers(): Observable<User[]> {
    this.setHeaders();
    return this.httpClient.get<User[]>(this.config.usersEndPoint, {headers: this.headers});
  }

  registerUser(user: User) {
    this.setHeaders();
    return this.httpClient.post<User>(this.config.accountsEndPoint + '/register', user, {headers: this.headers});
  }

  private setHeaders() {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
    const token = this.securityService.getToken();
    if (token !== '') {
      const tokenValue = 'Bearer ' + token;
      this.headers = this.headers.append('Authorization', tokenValue);
    }
  }

  getUserById(): Observable<User> {
    this.setHeaders();
    return this.httpClient.get<User>(this.config.usersEndPoint, {headers: this.headers});
  }

}
