import { SettingsRoutingModule } from './settings-routing.module';
import { CommonModule } from '@angular/common';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { CalendarSettingsComponent } from './calendar-settings/calendar-settings.component';
import { SettingsDashboardComponent } from './settings-shell/settings-dashboard.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [CommonModule, SettingsRoutingModule, SharedModule],
    exports: [],
    declarations: [
        UserSettingsComponent,
        SettingsDashboardComponent,
        CalendarSettingsComponent,
        UserListItemComponent
    ],
    providers: [],
})
export class SettingsModule { }
