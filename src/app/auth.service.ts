import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'yHkow2TFy8P0G3A7QR7S4JFBHTU3nk4B',
    domain: 'dermal.au.auth0.com',
    responseType: 'token id_token',
    audience: 'https://dermal.au.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/home',
    scope: 'openid'
  });

  constructor(private router: Router) { }

  public login(): void {
    this.auth0.authorize({});
  }

  private setSession(authResult) {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    const scopes = authResult.scope || '';
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scopes', JSON.stringify(scopes));

  }

  public handleAuthentication(): void {
    this.auth0.parseHash((error, authResult) => {
      window.location.hash = '';
      this.setSession(authResult);
      this.router.navigate(['/home']);
    });
  }

  public logOut(): void{
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean{
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}