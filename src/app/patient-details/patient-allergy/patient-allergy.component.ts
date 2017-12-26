import {Component, Input, OnInit, Output} from '@angular/core';
import {Patient} from '../../models/patient';
import {AdverseReactionAgentService} from '../../services/adverse-reaction-agent.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-patient-allergy',
  templateUrl: './patient-allergy.component.html',
  styleUrls: ['./patient-allergy.component.scss']
})
export class PatientAllergyComponent implements OnInit {

  @Input()
  patient: Patient;
  searching = false;
  searchFailed = false;
  editingAllergy = false;
  addingAllergy = false;

  constructor(private substancesService: AdverseReactionAgentService) {
  }

  ngOnInit() {
  }

  searchSubstances = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(searchTerm => searchTerm.length < 3 ? Observable.of([]) :
        this.substancesService.searchSubstances(searchTerm)
          .do(() => this.searchFailed = false)
          .catch(() => {
            return Observable.of([]);
          }))
      .do(() => this.searching = false)

  addAllergy() {
    this.editingAllergy = true;
  }

  saveAllergyInfo() {

  }

  formatter = (value: any) => value.display;

}
