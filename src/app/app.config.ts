import {InjectionToken} from '@angular/core';
import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  patientsEndPoint: 'http://localhost:5001/api/patients',
  appointmentsEndPoint: 'http://localhost:5001/api/appointments',
  adverseReactionAgentEndPoint: 'https://18.217.120.135:8443/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=refset/142321000036106'
};
