import { RouterModule } from '@angular/router';
import { BillingDashboardComponent } from './billing-home/billing-dashboard.component';
import { NgModule } from '@angular/core';

const billingRoutes = [
    { path: 'billing', component: BillingDashboardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(billingRoutes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class BillingRoutingModule { }
