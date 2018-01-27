import {InjectionToken} from '@angular/core';
import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  patientsEndPoint: 'http://localhost:5001/api/patients',
  appointmentsEndPoint: 'http://localhost:5001/api/appointments',
  adverseReactionAgentEndPoint: 'https://ontoserver.csiro.au/stu3-latest' +
  '/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=refset/142321000036106',
  usersEndPoint: 'http://localhost:5002/api/users',
  accountsEndPoint: 'http://localhost:5002/account',
  problemDiagnosisEndPoint: 'https://ontoserver.csiro.au/stu3-latest' +
  '/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=refset/32570581000036105'
};
