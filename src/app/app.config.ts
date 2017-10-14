import {InjectionToken} from '@angular/core';
import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  patientsEndPoint: 'http://localhost:49806/api/patients'
};
