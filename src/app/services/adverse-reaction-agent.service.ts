import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {APP_CONFIG} from '../app.config';
import {IAppConfig} from '../iapp.config';

@Injectable()
export class AdverseReactionAgentService {

  constructor(private httpClient: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  searchSubstances(searchTerm: string) {
    let params = new HttpParams();
    params = params.append('filter', searchTerm);
    return this.httpClient.get(this.config.adverseReactionAgentEndPoint, {params: params}).map(
      (result: any) => result.expansion.contains);
  }
}
