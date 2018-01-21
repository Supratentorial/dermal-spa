import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { DashboardComponent } from './dashboard.component';
import { AgendaComponent } from './agenda/agenda.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [CommonModule, SharedModule],
    exports: [],
    declarations: [
        DashboardComponent,
        InboxComponent,
        AgendaComponent
    ],
    providers: [],
})
export class DashobardModule { }
