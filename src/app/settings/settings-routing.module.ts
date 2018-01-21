import { CalendarSettingsComponent } from './calendar-settings/calendar-settings.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SettingsDashboardComponent } from './settings-shell/settings-dashboard.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const settingsRoutes = [
    {
    path: 'settings', component: SettingsDashboardComponent, children: [
        { path: '', redirectTo: 'calendar-settings', pathMatch: 'full' },
        { path: 'user-settings', component: UserSettingsComponent },
        { path: 'calendar-settings', component: CalendarSettingsComponent }
    ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(settingsRoutes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
