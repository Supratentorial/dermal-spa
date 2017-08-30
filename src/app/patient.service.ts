import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Patient} from './patient';

@Injectable()
export class PatientService {

  constructor(http: Http) {

  }

  getPatients() {
    let patients : Patient[] = [];
  }


}
