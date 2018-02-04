import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ProblemDiagnosisService} from '../../../services/problem-diagnosis.service';
import {Condition} from '../../../models/condition';
import {PatientService} from '../../../services/patient.service';
import {Patient} from '../../../models/patient';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['../patient-detail-shell/patient-detail-shell.component.scss']
})

export class ProblemListComponent implements OnInit {

  @Input()
  patient: Patient;

  @Output()
  saveConditionEvent = new EventEmitter();

  addingCondition = false;
  selectedCondition;
  searching = false;
  searchTerm: string;
  startDate;
  stopDate;
  clinicalStatus: string;

  constructor(private problemListService: ProblemDiagnosisService, private patientService: PatientService) {
  }

  ngOnInit() {
  }

  onSelect($event) {
    $event.preventDefault();
    this.selectedCondition = $event.item;
  }

  saveCondition() {
    const condition: Condition = {
      id: 0,
      code: this.selectedCondition.code,
      bodySite: ''
    };
    this.patient.conditions.push(condition);
    this.addingCondition = false;
    this.saveConditionEvent.next();
  }

  searchTerminology = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(searchTerm =>
        this.problemListService.searchClinicalFindings(searchTerm)
          .catch(() => {
            return Observable.of([]);
          }))
      .do(() => this.searching = false)

}


