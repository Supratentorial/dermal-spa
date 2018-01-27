import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ProblemListService} from '../../../services/problem-list.service';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['../patient-detail-shell/patient-detail-shell.component.scss']
})
export class ProblemListComponent implements OnInit {

  addingProblem = false;
  searching = false;
  problemTerm;

  constructor(private problemListService: ProblemListService) {
  }

  ngOnInit() {
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

  displayFormatter(value: fhir.ValueSetExpansionContains): string {
    return value.display;
  }
}


