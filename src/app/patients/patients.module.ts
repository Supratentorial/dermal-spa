import { InlineSVGModule } from 'ng-inline-svg';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientBannerComponent } from './patient-banner/patient-banner.component';
import { CommonModule } from '@angular/common';
import { PatientDashboardComponent } from './patient-home/patient-home.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ProblemListComponent} from './patient-detail/problem-list/problem-list.component';
import {PortalInviteComponent} from './portal-invite/portal-invite.component';
import {PatientDetailShellComponent} from './patient-detail/patient-detail-shell/patient-detail-shell.component';
import {PatientAllergyComponent} from './patient-detail/patient-allergy/patient-allergy.component';
import {PatientIdentityComponent} from './patient-detail/patient-identity/patient-identity.component';
import {PatientContactComponent} from './patient-detail/patient-contact/patient-contact.component';
import { MedicationListComponent } from './patient-detail/medication-list/medication-list.component';

@NgModule({
    imports: [CommonModule, PatientsRoutingModule, SharedModule, FormsModule, NgbModule, InlineSVGModule],
    exports: [],
    declarations: [
        ProblemListComponent,
        PortalInviteComponent,
        ProblemListComponent,
        PatientDetailShellComponent,
        PatientAddComponent,
        PatientAllergyComponent,
        PatientDashboardComponent,
        PatientContactComponent,
        PatientIdentityComponent,
        PatientBannerComponent,
        MedicationListComponent
    ],
    entryComponents: [PortalInviteComponent],
    providers: [],
})
export class PatientsModule { }
