import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../patient';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  selectedPatient: any;
  searching: boolean = false;
  @Input()
  pageTitle: string;

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
  }

  searchPatients(text$: Observable<string>) {
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term => {
          this.patientService.getPatients(term)
            .do()
            .catch(() => {
              console.log('patient search failed');
              return Observable.of([]);
            })
            .do(() => this.searching = false)
        }
      );
  }
}
