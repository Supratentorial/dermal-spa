import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {APP_CONFIG} from '../app.config';
import {IAppConfig} from '../iapp.config';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProblemDiagnosisService {

  constructor(private httpClient: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  searchClinicalFindings(searchTerm: string) {
    let params = new HttpParams();
    params = params.append('filter', searchTerm);
    if (searchTerm === '') {
      return Observable.of([]);
    }
    return this.httpClient.get(this.config.problemDiagnosisEndPoint, {params: params}).map(
      (result: any) => result.expansion.contains);
  }

  getClinicalFindingById(id: string) {
    let params = new HttpParams();
    params = params.append('filter', id);
  }
}
