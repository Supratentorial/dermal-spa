import { CommonModule } from '@angular/common';
import { BillingDashboardComponent } from './billing-home/billing-dashboard.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {BillingRoutingModule} from './billing-routing.module';

@NgModule({
    imports: [CommonModule, BillingRoutingModule, SharedModule],
    exports: [],
    declarations: [BillingDashboardComponent],
    providers: [],
})
export class BillingModule { }
